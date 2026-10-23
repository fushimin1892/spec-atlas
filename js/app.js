// 画面の組み立てとハッシュルーティング。
// #/                 トップ（カテゴリ一覧）
// #/c/<cat>          カテゴリの一覧表
// #/c/<cat>/<item>   製品の詳細
// #/compare          比較
// #/search?q=...     全カテゴリ検索
(function () {
  "use strict";

  const SPEC = window.SPEC;
  const main = document.getElementById("main");
  const COMPARE_KEY = "spec-compare";

  // ---------- 共通 ----------
  function esc(v) {
    return String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  function getCategory(id) {
    return SPEC.categories.find((c) => c.id === id);
  }
  function getItems(catId) {
    return SPEC.data[catId] || [];
  }
  function formatValue(field, value) {
    if (value === null || value === undefined || value === "") return `<span class="muted">${esc(field.empty || "—")}</span>`;
    if (field.type === "number") {
      const d = field.digits || 0;
      const n = Number(value).toLocaleString("ja-JP", { minimumFractionDigits: d, maximumFractionDigits: field.maxDigits || d });
      return esc(`${field.prefix || ""}${n}${field.unit ? " " + field.unit : ""}`);
    }
    return esc(value);
  }
  // 横棒・添え書きまで含めたセルの中身（一覧・詳細・比較で共通）
  function itemValue(field, item) {
    if (item.integrated && field.key === "vram") return "システムメモリ共有";
    if (item.integrated && field.key === "tdp") return "対象外（搭載CPU・設定に依存）";
    const range = item[`${field.key}Range`];
    if (range) return `${formatValue({ ...field, unit: null }, range[0])}–${formatValue(field, range[1])}`;
    return formatValue(field, item[field.key]);
  }

  function cellHtml(cat, field, item) {
    const value = item[field.key];
    const metric = SPEC.benchmarkOf?.(cat.id, field.key);
    if (metric && field.key !== "score") {
      const record = SPEC.performanceData[cat.id][item.id]?.[field.key];
      return `${formatValue(field, value)}${record && cat.id === "ai" ? `<span class="sub">${esc(record.name)}</span>` : ""}`;
    }
    if (cat.id === "ai" && field.key === "params" && value == null) {
      return `<span class="muted">${esc(item.paramsStatus || "未確認")}</span>${item.paramsNote ? `<span class="sub">${esc(item.paramsNote)}</span>` : ""}`;
    }
    if (field.bar && value != null) {
      const max = Math.max(...getItems(cat.id).map((i) => i[field.key] || 0)) || 1;
      const pending = SPEC.verificationOf?.(cat.id, item)?.fields.find((f) => f.key === field.key)?.status !== "verified";
      return `<span class="bar-cell"><span class="bar"><i style="width:${((value / max) * 100).toFixed(1)}%"></i></span><span class="val">${formatValue(field, value)}</span></span>${pending ? '<span class="sub">参考値（出典で再確認待ち）</span>' : ""}`;
    }
    const sub = field.sub && item[field.sub] ? `<span class="sub">${esc(item[field.sub])}</span>` : "";
    const url = field.link && item[field.link];
    // 外部データの URL なので https のものだけリンクにする
    const shown = url && /^https:\/\//.test(url)
      ? `<a class="ext" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${itemValue(field, item)}</a>`
      : itemValue(field, item);
    const check = field.key === "score" && SPEC.verificationOf?.(cat.id, item);
    return shown + sub + (check && check.fields.find((f) => f.key === "score").status !== "verified" && value != null ? '<span class="sub">参考値（出典で再確認待ち）</span>' : "");
  }

  // 一覧の上に出す「この表の見方」。表に出ている各列の意味を、初めての人にも分かる言葉で並べる。
  // 初めは開いて見せ、閉じたらその閲覧者には閉じたままにする（localStorage。使えなければ毎回開く）
  const GUIDE_KEY = "spec-guide-closed";
  function guideClosed(catId) {
    try { return (JSON.parse(localStorage.getItem(GUIDE_KEY)) || []).includes(catId); } catch (e) { return false; }
  }
  function setGuideClosed(catId, closed) {
    try {
      const list = new Set(JSON.parse(localStorage.getItem(GUIDE_KEY)) || []);
      closed ? list.add(catId) : list.delete(catId);
      localStorage.setItem(GUIDE_KEY, JSON.stringify([...list]));
    } catch (e) { /* 保存できなくても画面は動かす */ }
  }
  function tableGuide(cat, fields) {
    const rows = fields.filter((f) => f.help && f.key !== "name");
    if (!rows.length) return "";
    return `<details class="table-guide" data-guide="${esc(cat.id)}" ${guideClosed(cat.id) ? "" : "open"}>
      <summary>この表の見方（各項目の意味）</summary>
      <dl>${rows.map((f) => `<dt>${esc(f.label)}</dt><dd>${esc(f.help)}</dd>`).join("")}</dl>
    </details>`;
  }

  // AI 一覧の上に出す「ひと目でわかる」欄。掲載データから条件に合う 1 位を自動で選ぶ（手で選ばない）
  function aiHighlights(items) {
    const pick = (list, key, better) => {
      const has = list.filter((i) => i[key] != null);
      return has.length ? has.reduce((a, b) => ((better === "low" ? b[key] < a[key] : b[key] > a[key]) ? b : a)) : null;
    };
    const metricOf = (key) => SPEC.benchmarkOf("ai", key);
    const cards = [
      ["いちばん正確", pick(items, "aiOmni", "high"), "aiOmni"],
      ["重みが公開されている中でいちばん正確", pick(items.filter((i) => i.deploy === "ローカル・クラウド"), "aiOmni", "high"), "aiOmni"],
      ["API 料金がいちばん安い", pick(items, "aiPrice", "low"), "aiPrice"],
      ["出力がいちばん速い", pick(items, "aiSpeed", "high"), "aiSpeed"],
    ].filter(([, item]) => item);
    if (!cards.length) return "";
    return `<section class="ai-picks" aria-label="ひと目でわかる">
      ${cards.map(([title, item, key]) => {
        const m = metricOf(key);
        return `<a class="ai-pick" href="#/c/ai/${esc(item.id)}"><span class="ai-pick-title">${esc(title)}</span><strong>${esc(item.name)}</strong><span class="ai-pick-value">${esc(m.label)}${key === "aiPrice" ? "（出力 100 万トークンあたり）" : ""} ${formatValue({ type: "number", unit: m.unit, digits: m.digits }, item[key])}</span></a>`;
      }).join("")}
    </section>`;
  }

  // 一覧の「数値の見方・出典」に出す、メーカー資料との照合状況の要約（数え方は tools/audit-hardware.mjs と同じ）
  function auditLine(cat) {
    if (!SPEC.verificationOf || !["cpu", "gpu"].includes(cat.id)) return "";
    const checks = getItems(cat.id).map((item) => ({ item, check: SPEC.verificationOf(cat.id, item) }));
    const tech = (c) => c.fields.filter((f) => !["release", "score"].includes(f.key));
    const applicable = checks.filter(({ check }) => tech(check).some((f) => f.status !== "notApplicable"));
    const techOk = applicable.filter(({ check }) => tech(check).every((f) => f.status === "verified"));
    const pending = applicable.filter(({ check }) => !tech(check).every((f) => f.status === "verified")).map(({ item }) => item.name);
    const withDate = checks.filter(({ check }) => check.verified === check.total).length;
    const mismatches = checks.reduce((n, { check }) => n + check.mismatches, 0);
    return `<p class="note">照合状況（${esc(SPEC.hardwareEvidence.checkedAt)}）: メーカー資料と食い違う項目 ${mismatches} 件。技術仕様は ${techOk.length}/${applicable.length} 型番でメーカー資料と一致${pending.length ? `（未確認: ${esc(pending.join("、"))}）` : ""}、発売日まで一致は ${withDate}/${checks.length} 型番。残りは食い違いではなく、メーカー資料に記載が無く未確認のものです。製品ごとの出典は詳細ページにあります。</p>`;
  }

  function benchmarkEvidence(cat, item) {
    const config = SPEC.benchmarks[cat.id];
    const records = SPEC.performanceData[cat.id][item.id] || {};
    return `<section class="verification"><h2>性能テストの値と測り方</h2>${config.metrics.filter((m) => m.key !== "score").map((metric) => {
      const record = records[metric.key];
      const source = record && SPEC.performanceData.sources[record.source];
      return `<p><strong>${esc(metric.title)}</strong> · ${record ? `${formatValue({ type: "number", unit: metric.unit, digits: metric.digits }, record.value)}${record.input != null ? `（入力は ${formatValue({ type: "number", unit: metric.unit, digits: metric.digits }, record.input)}）` : ""}` : "比較データなし"}</p>
        <p class="note">${esc(metric.description)} ${esc(metric.limit)}</p>
        ${record ? `<p class="note">測定名・設定: ${esc(record.name)}${cat.id === "ai" ? "。API提供モデルの測定で、公開重みを手元で実行した結果ではありません。" : ""} · <a class="ext" href="${esc(source.url)}" target="_blank" rel="noopener noreferrer">${esc(source.label)}</a> · 取得 ${esc(source.checkedAt)}</p>` : ""}`;
    }).join("")}${cat.id === "ai" ? '<p class="note">各モデルで明示した設定を比較しています。max・high等の設定名は提供元ごとに意味が異なり、同じ計算量ではありません。旧版の評価値は混ぜていません。</p>' : ""}</section>`;
  }

  function verificationHtml(cat, item) {
    const check = SPEC.verificationOf?.(cat.id, item);
    if (check) {
      const labels = { verified: "メーカー資料と一致", mismatch: "メーカー資料と食い違い（要確認）", unverified: "メーカー資料では未確認", notApplicable: "この製品には当てはまらない", reference: "メーカー以外の資料とは一致" };
      return `<section class="verification"><h2>この情報の確かさ（出典との照合）</h2>
        <p class="note">メーカーの公式資料と照らし合わせた結果、${check.total}項目のうち${check.verified}項目が一致しました${check.notApplicable ? `（ほかに${check.notApplicable}項目はこの製品には当てはまりません）` : ""}。「メーカー資料では未確認」は、間違いという意味ではなく、公式資料に書かれていないため確かめられていない項目です。</p>
        <div class="table-wrap"><table class="audit-table"><thead><tr><th scope="col">項目</th><th scope="col">このサイトの値</th><th scope="col">確認の結果</th><th scope="col">資料に書かれた値・資料・確認した日</th></tr></thead>
        <tbody>${check.fields.map((result) => {
          const field = cat.fields.find((f) => f.key === result.key);
          return `<tr><th scope="row">${esc(field.label)}</th><td>${itemValue(field, item)}</td><td class="audit-${result.status}">${esc(labels[result.status])}</td><td>${result.claims.length ? result.claims.map((c) => `${c.reason ? esc(c.reason) : c.range ? itemValue(field, { [`${field.key}Range`]: c.range }) : formatValue(field, c.value)} · <a class="ext" href="${esc(c.source.url)}" target="_blank" rel="noopener noreferrer">${esc(c.source.label)}${c.page ? `（p.${c.page}）` : ""}</a> · ${esc(c.source.checkedAt)}`).join("<br>") : "メーカーの公式資料ではまだ確認できていません"}</td></tr>`;
        }).join("")}</tbody></table></div>
        ${check.notes.map((note) => `<p class="note">${esc(note)}</p>`).join("")}
        ${(SPEC.hardwareEvidence[cat.id][item.id] || []).filter((row) => row.note).map((row) => SPEC.hardwareEvidence.sources[row.source]).filter((source, index, all) => all.indexOf(source) === index).map((source) => `<p class="note"><a class="ext" href="${esc(source.url)}" target="_blank" rel="noopener noreferrer">${esc(source.label)}</a> · ${esc(source.checkedAt)}</p>`).join("")}
        ${item.price != null ? `<p class="note">参考価格は楽天の保存済み取得値（${esc(SPEC.prices?.[cat.id]?.fetchedAt || "取得日時未確認")}）。現在の価格・在庫の一致は未確認です。</p>` : ""}
      </section>`;
    }
    if (cat.id === "ai") {
      const checked = item.verifiedFields || [];
      const pending = ["release", "params", "active", "context", "modality", "license"].filter((key) => !checked.includes(key) && !(item.open === "API のみ" && ["params", "active", "license"].includes(key)));
      const label = (key) => cat.fields.find((f) => f.key === key)?.label || key;
      return `<section class="verification"><h2>公式資料・確認範囲</h2>
        <p>${esc(item.notes || "")}</p>
        <p class="note">資料確認日: ${esc(item.checkedAt || "今回未再照合")}。${checked.length ? `再照合した項目: ${esc(checked.map(label).join("、"))}。` : ""}</p>
        ${pending.length ? `<p class="note">未確認・未再照合の項目: ${esc(pending.map(label).join("、"))}。空欄には該当しない項目も含みます。</p>` : ""}
        ${(item.sources || []).map((s) => `<p class="note"><a class="ext" href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.label)}</a> · ${esc(s.checkedAt)}</p>`).join("")}
        <p class="note">重み公開と、無条件に利用できることは同じではありません。ライセンスは各提供元の原文をご確認ください。</p>
      </section>`;
    }
    return "";
  }

  // 比較画面の選択。カテゴリごとに列の並び（製品 id、未選択の列は null）と、最後に開いたカテゴリを持つ。
  // 閲覧者ごとの便利機能なので localStorage に保存（使えない環境では保存しない）
  const CMP_MIN = 2; // 列は最低 2 つ出す
  const CMP_MAX = 4;
  function loadCompare() {
    try {
      const v = JSON.parse(localStorage.getItem(COMPARE_KEY));
      if (v && typeof v === "object" && !Array.isArray(v) && v.slots) return v;
    } catch (e) {
      /* 読めなければ空から */
    }
    return { cat: null, slots: {} };
  }
  const compare = loadCompare();
  function saveCompare() {
    try {
      localStorage.setItem(COMPARE_KEY, JSON.stringify(compare));
    } catch (e) {
      /* 保存できなくても画面は動かす */
    }
  }
  // カテゴリの列。存在しない id は外し、最低 CMP_MIN 列にそろえる
  function slotsOf(catId) {
    const ids = new Set(getItems(catId).map((i) => i.id));
    const s = (compare.slots[catId] || []).map((id) => (ids.has(id) ? id : null)).slice(0, CMP_MAX);
    while (s.length < CMP_MIN) s.push(null);
    return (compare.slots[catId] = s);
  }

  // ---------- サイドバー ----------
  function renderNav(activeId) {
    const ul = document.getElementById("categoryNav");
    ul.innerHTML = SPEC.categories
      .map((c) => {
        const ready = c.status === "ready";
        const count = ready ? `<span class="count">${getItems(c.id).length}</span>` : '<span class="soon">準備中</span>';
        const cls = c.id === activeId ? ' class="active" aria-current="page"' : "";
        return ready
          ? `<li><a href="#/c/${esc(c.id)}"${cls}>${SPEC.icon(c.icon)}${esc(c.name)}${count}</a></li>`
          : `<li><span class="disabled">${SPEC.icon(c.icon)}${esc(c.name)}${count}</span></li>`;
      })
      .join("");
  }

  // ---------- トップ ----------
  function renderHome() {
    const ready = SPEC.categories.filter((c) => c.status === "ready");
    const planned = SPEC.categories.filter((c) => c.status !== "ready");
    const total = ready.reduce((n, c) => n + getItems(c.id).length, 0);
    const no = (i) => String(i + 1).padStart(2, "0");
    const card = (c, i) =>
      c.status === "ready"
        ? `<a class="card" href="#/c/${esc(c.id)}">
            <span class="card-no">${no(i)}</span>
            ${SPEC.icon(c.icon, "card-icon")}
            <span class="card-en">${esc(c.en)}</span>
            <span class="card-name">${esc(c.name)}</span>
            <span class="card-desc">${esc(c.description)}</span>
            <span class="card-meta">${getItems(c.id).length} 件 ${SPEC.icon("arrow", "card-arrow")}</span>
          </a>`
        : `<div class="card card-planned">
            ${SPEC.icon(c.icon, "card-icon")}
            <span class="card-en">${esc(c.en)}</span>
            <span class="card-name">${esc(c.name)}</span>
            <span class="card-meta">準備中</span>
          </div>`;
    main.innerHTML = `
      <section class="hero">
        <p class="eyebrow">THE SPECIFICATION ARCHIVE</p>
        <h1>仕様を、正確に。<br>比べて、選ぶ。</h1>
        <p class="lead">AIモデル、プロセッサ、グラフィックス。<br>製品の数値だけを、静かに並べた資料室です。</p>
        <dl class="stats">
          <div><dt>カテゴリ</dt><dd>${ready.length}</dd></div>
          <div><dt>収録製品</dt><dd>${total}</dd></div>
          <div><dt>追加予定</dt><dd>${planned.length}</dd></div>
        </dl>
      </section>
      <div class="rule"><span>COLLECTION</span></div>
      <div class="cards">${ready.map(card).join("")}</div>
      <div class="rule"><span>FORTHCOMING</span></div>
      <div class="cards cards-planned">${planned.map(card).join("")}</div>`;
  }

  // ---------- カテゴリ一覧 ----------
  const listState = {}; // カテゴリごとの絞り込み・並び順を画面遷移しても保持

  function renderList(cat) {
    const items = getItems(cat.id);
    const config = SPEC.benchmarks[cat.id];
    const filterKeys = cat.filters || ["maker"];
    const filterFields = filterKeys.map((k) => cat.fields.find((f) => f.key === k)).filter(Boolean);
    // AI は指標を切り替える性能ランキング。CPU・GPU は総合スコア順の表（ゲーム性能などは表の列）
    const ranking = cat.id === "ai";
    const st = (listState[cat.id] ||= ranking
      ? { q: "", filters: {}, sort: config.default, dir: config.metrics[0].better === "low" ? 1 : -1, metric: config.default, baseline: config.baseline, view: "performance", measuredOnly: true }
      : { q: "", filters: {}, sort: "score", dir: -1, metric: "score", baseline: null, view: "specs", measuredOnly: false });
    const metric = SPEC.benchmarkOf(cat.id, st.metric);
    if (ranking && config.baseline && !items.some((i) => i.id === st.baseline && i[st.metric] > 0)) {
      st.baseline = items.find((i) => i.id === config.baseline && i[st.metric] > 0)?.id || items.find((i) => i[st.metric] > 0)?.id;
    }
    const listFields = cat.fields.filter((f) => ranking && f.benchmark ? f.key === st.metric : f.list !== false);
    const hasRank = true;

    const compareBy = (field, dir) => (a, b) => {
      const x = a[field.key], y = b[field.key];
      if (x == null && y == null) return 0;
      if (x == null) return 1; // 空欄は並び順に関係なく末尾
      if (y == null) return -1;
      return (field.type === "number" ? x - y : String(x).localeCompare(String(y), "ja")) * dir;
    };
    // 順位は絞り込みに左右されないよう全件に対して付ける。基準は、AI は選んだ指標、
    // CPU・GPU は今並べ替えている性能の列（性能スコア・ゲーム性能など）。性能以外の列で並べ替えたときは性能スコアの順位
    const rankOf = new Map();
    const rankField = () => {
      const sorted = cat.fields.find((x) => x.key === st.sort);
      return ranking ? cat.fields.find((x) => x.key === st.metric) : sorted && (sorted.key === "score" || sorted.benchmark) ? sorted : cat.fields.find((x) => x.key === "score");
    };
    const updateRanks = () => {
      rankOf.clear();
      if (!hasRank) return;
      const f = rankField();
      const better = SPEC.benchmarkOf(cat.id, f.key)?.better || "high";
      // 基準の値が空欄（スコア未確認など）の製品には順位を付けない
      let previous, rank;
      [...items].filter((i) => i[f.key] != null).sort(compareBy(f, better === "low" ? 1 : -1)).forEach((i, n) => {
        if (i[f.key] !== previous) rank = n + 1;
        rankOf.set(i.id, rank); previous = i[f.key];
      });
    };
    // プルダウンの選択肢はデータに出てくる順（性能順のデータならシリーズも新しい順に並ぶ）
    const optionsFor = (key) => {
      const other = filterKeys.filter((k) => k !== key);
      const pool = items.filter((i) => other.every((k) => !st.filters[k] || i[k] === st.filters[k]));
      const values = [...new Set(pool.map((i) => i[key]).filter(Boolean))];
      // optionOrder があればその順（世代の新しい順など）。載っていない値は後ろに出てきた順で並べる
      const order = (cat.optionOrder || {})[key];
      if (!order) return values;
      const rank = (v) => (order.includes(v) ? order.indexOf(v) : order.length);
      return values.sort((a, b) => rank(a) - rank(b));
    };
    const selectsHtml = () =>
      filterFields
        .map((f) => `
        <label>${esc(f.label)}
          <select data-filter="${esc(f.key)}">
            <option value="">すべて</option>
            ${optionsFor(f.key).map((v) => `<option ${v === st.filters[f.key] ? "selected" : ""}>${esc(v)}</option>`).join("")}
          </select>
        </label>`)
        .join("");

    main.innerHTML = `
      <nav class="crumbs" aria-label="パンくず"><a href="#/">トップ</a> › ${esc(cat.name)}</nav>
      <p class="eyebrow">${esc(cat.en)}</p>
      <h1 class="page-title">${SPEC.icon(cat.icon, "title-icon")}${esc(cat.name)}</h1>
      <p class="muted">${esc(cat.description)}</p>
      ${cat.id === "ai" ? aiHighlights(items) : ""}
      ${ranking ? `<section class="benchmark-guide" aria-label="性能の比較方法">
        <div class="benchmark-tabs" role="group" aria-label="比較する性能">${config.metrics.map((m) => `<button type="button" class="metric-tab ${m.key === st.metric ? "active" : ""}" data-metric="${esc(m.key)}" aria-pressed="${m.key === st.metric}">${esc(m.label)}</button>`).join("")}</div>
        <h2>${esc(metric.title)}<span>${metric.betterLabel || (metric.better === "low" ? "小さいほど速い" : "高いほど高性能")}</span></h2>
        <details class="benchmark-method"><summary>指標の意味・測定条件</summary><p>${esc(metric.description)}</p><p class="note">${esc(metric.limit)}</p>
        ${cat.id === "ai" ? '<p class="note">主に高推論設定を掲載。設定名は提供元ごとに意味が異なり、同じ計算量ではありません。公開重みを手元で測定した結果ではありません。</p>' : '<p class="note">基準比200はスコアが基準製品の2倍という意味で、ゲームのFPSが2倍になるとは限りません。</p>'}
        ${metric.source ? `<a class="benchmark-credit ext" href="${esc(SPEC.performanceData.sources[metric.source].url)}" target="_blank" rel="noopener noreferrer">${esc(SPEC.performanceData.sources[metric.source].label)}</a><span class="benchmark-credit">取得 ${esc(SPEC.performanceData.checkedAt)}</span>` : ""}</details>
        <div class="benchmark-settings">
          ${config.baseline ? `<label>比較の基準 <select id="benchmarkBase">${items.filter((i) => i[st.metric] > 0).map((i) => `<option value="${esc(i.id)}" ${i.id === st.baseline ? "selected" : ""}>${esc(i.name)} = 100</option>`).join("")}</select></label>` : '<p class="note">測定時の推論設定を各モデルに併記</p>'}
          <label class="measured-filter"><input type="checkbox" id="measuredOnly" ${st.measuredOnly ? "checked" : ""}>ランキングは比較データがある製品のみ</label>
        </div>
      </section>
      <div class="view-switch" role="group" aria-label="表示形式"><button data-view="performance" aria-pressed="${st.view === "performance"}">性能ランキング</button><button data-view="specs" aria-pressed="${st.view === "specs"}">仕様一覧</button></div>` : ""}
      <div class="toolbar">
        <label class="grow">絞り込み <input id="fq" type="search" value="${esc(st.q)}" placeholder="${esc(cat.searchHint || "名前で絞り込み")}"></label>
        <span id="filterSelects" style="display:contents">${selectsHtml()}</span>
        ${!ranking && SPEC.applyPrices[cat.id] ? `<label class="toggle priced-filter"><input type="checkbox" id="pricedOnly" ${st.pricedOnly ? "checked" : ""}> 今買える製品だけ（主要店で価格があるもの）</label>` : ""}
        <span class="muted" id="hitCount"></span>
        <a class="btn btn-ghost btn-small toolbar-cmp" href="#/compare?cat=${esc(cat.id)}">${esc(cat.name)}を比較する</a>
      </div>
      <details class="category-sources"><summary>数値の見方・出典・価格について</summary>
      ${cat.note ? `<p class="note">${esc(cat.note)}</p>` : ""}
      ${cat.specNote ? `<p class="note">${esc(cat.specNote)}</p>` : ""}${auditLine(cat)}${(cat.sources || []).map((s) => `<p class="note"><a class="ext" href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.label)}</a></p>`).join("")}</details>
      ${SPEC.applyPrices[cat.id] ? `<p class="note live" id="priceStatus" role="status" aria-live="polite">${esc(priceStatus[cat.id] || "")}</p>` : ""}
      ${ranking ? `<div id="performanceRows" class="performance-ranking" ${st.view !== "performance" ? "hidden" : ""}></div>` : ""}
      ${tableGuide(cat, listFields)}
      <div class="table-wrap" ${st.view !== "specs" ? "hidden" : ""}><table class="spec-table" id="specTable"></table></div>`;

    const table = document.getElementById("specTable");
    main.querySelector(".table-guide")?.addEventListener("toggle", (e) => setGuideClosed(cat.id, !e.target.open));
    document.getElementById("pricedOnly")?.addEventListener("change", (e) => { st.pricedOnly = e.target.checked; draw(); });
    const draw = () => {
      updateRanks();
      const q = st.q.trim().toLowerCase();
      const field = cat.fields.find((f) => f.key === st.sort) || cat.fields[0];
      // 仕様一覧は絞り込みに合う全製品、性能ランキングは「比較データがある製品のみ」のときデータの無い製品を除く
      const matched = items
        .filter((i) => !q || [i.name, i.maker, i.family, i.modelId].some((v) => String(v || "").toLowerCase().includes(q)))
        .filter((i) => filterKeys.every((k) => !st.filters[k] || i[k] === st.filters[k]))
        .filter((i) => !st.pricedOnly || i.price != null)
        .sort(compareBy(field, st.dir));
      const rows = matched.filter((i) => !st.measuredOnly || i[st.metric] != null);
      const cols = listFields.length + (hasRank ? 1 : 0);

      document.getElementById("hitCount").textContent = ranking ? `${matched.length} / ${items.length} 件 · 比較データ ${matched.filter((i) => i[st.metric] != null).length} 件` : `${matched.length} / ${items.length} 件 · 順位は${rankField().label}の順`;
      const base = items.find((i) => i.id === st.baseline);
      const values = items.map((i) => i[st.metric]).filter((v) => Number.isFinite(v) && (metric.allowNegative || v > 0));
      const max = Math.max(...values, 1);
      const min = Math.min(...values);
      // 棒は長いほど良い向きにそろえる（待ち時間のように小さいほど良い指標は、最小値を満たんにする）。
      // マイナスもある指標（正確性）は、いちばん低い値からいちばん高い値までを棒の長さに割り当てる
      const meter = (value) => value == null ? 0
        : metric.allowNegative ? Math.max(2, ((value - min) / ((max - min) || 1)) * 100)
        : metric.better === "low" ? (min / value) * 100 : (value / max) * 100;
      // 測定条件の名前（「Claude Opus 5.5 (max with fallback)」）は、モデル名と同じ部分を除いて設定だけを見せる
      const settingOf = (item, record) => {
        if (!record) return "";
        const paren = record.name.match(/\(([^)]+)\)\s*$/);
        if (paren) return `設定: ${paren[1]}`;
        return record.name === item.name ? "" : `測定名: ${record.name}`;
      };
      const hidden = matched.length - rows.length;
      if (ranking) document.getElementById("performanceRows").innerHTML = `<div class="ranking-caption"><span>モデル・製品</span><span>${esc(metric.title)}${config.baseline ? " / 基準比" : ""}</span></div>` + (rows.length ? rows.map((item) => {
        const value = item[st.metric];
        const relative = SPEC.relativePerformance(value, base?.[st.metric]);
        const record = SPEC.performanceData[cat.id][item.id]?.[st.metric];
        const meta = cat.id === "cpu" ? `${item.cores}コア / ${item.threads}スレッド` : cat.id === "gpu" ? item.integrated ? "内蔵GPU · メモリ共有" : `${item.vram} GB VRAM` : [item.maker, item.deploy, item.weightSize ? `重み 約${item.weightSize.toLocaleString("ja-JP")}GB（8bit）` : null].filter(Boolean).join(" · ");
        return `<a class="performance-row ${value == null ? "no-result" : ""}" href="#/c/${esc(cat.id)}/${esc(item.id)}">
          <span class="performance-rank">${rankOf.get(item.id) ?? "—"}</span>
          <span class="performance-name"><strong>${esc(item.name)}</strong><small>${esc(meta)}${cat.id !== "ai" && item.price ? ` · ¥${item.price.toLocaleString("ja-JP")}` : ""}</small>${cat.id === "ai" && settingOf(item, record) ? `<small class="benchmark-setting">${esc(settingOf(item, record))}</small>` : ""}</span>
          <span class="performance-result"><span class="performance-number">${value == null ? "—" : Number(value).toLocaleString("ja-JP", { maximumFractionDigits: metric.digits || 0 })}<small>${value == null ? "比較データなし" : esc(metric.unit)}</small></span>
          <span class="performance-meter" aria-hidden="true"><i style="width:${meter(value).toFixed(2)}%"></i></span>
          ${relative != null ? `<small class="relative-value">基準比 <b>${relative}</b>（${(relative / 100).toFixed(2)}倍）</small>` : ""}</span>
        </a>`;
      }).join("") : '<p class="empty">該当する製品がありません</p>') +
        (hidden ? `<p class="ranking-hidden">この指標の比較データが無い ${hidden} 件は表示していません。<button type="button" id="showUnmeasured">表示する</button></p>` : "");
      document.getElementById("showUnmeasured")?.addEventListener("click", () => {
        st.measuredOnly = false;
        document.getElementById("measuredOnly").checked = false;
        draw();
      });
      table.innerHTML = `
        <thead><tr>
          ${hasRank ? `<th scope="col" class="rank" title="${esc(rankField().label)}の順位">#</th>` : ""}
          ${listFields
            .map((f) => {
              const active = f.key === st.sort;
              const aria = active ? (st.dir === 1 ? "ascending" : "descending") : "none";
              const arrow = active ? (st.dir === 1 ? "▲" : "▼") : "";
              return `<th scope="col" class="${f.type === "number" ? "num" : ""}" aria-sort="${aria}"${f.help ? ` title="${esc(f.help)}"` : ""}><button class="sort-btn" data-sort="${esc(f.key)}">${esc(f.label)} <span aria-hidden="true">${arrow}</span></button></th>`;
            })
            .join("")}
        </tr></thead>
        <tbody>
          ${
            matched.length
              ? matched
                  .map((i) => {
                    return `<tr>
                      ${hasRank ? `<td class="rank">${rankOf.get(i.id) ?? ""}</td>` : ""}
                      ${listFields
                        .map((f, idx) =>
                          idx === 0
                            ? `<td><a href="#/c/${esc(cat.id)}/${esc(i.id)}">${esc(i[f.key])}</a></td>`
                            : `<td class="${f.type === "number" ? "num" : ""}">${cellHtml(cat, f, i)}</td>`
                        )
                        .join("")}
                    </tr>`;
                  })
                  .join("")
              : `<tr><td colspan="${cols}" class="empty">該当する製品がありません</td></tr>`
          }
        </tbody>`;
    };
    draw();

    main.querySelectorAll("[data-metric]").forEach((button) => button.addEventListener("click", () => {
      st.metric = button.dataset.metric; st.sort = st.metric;
      st.dir = SPEC.benchmarkOf(cat.id, st.metric).better === "low" ? 1 : -1;
      renderList(cat);
      main.querySelector(`[data-metric="${CSS.escape(st.metric)}"]`).focus();
    }));
    main.querySelectorAll("[data-view]").forEach((button) => button.addEventListener("click", () => {
      st.view = button.dataset.view;
      renderList(cat);
      main.querySelector(`[data-view="${CSS.escape(st.view)}"]`).focus();
    }));
    document.getElementById("benchmarkBase")?.addEventListener("change", (event) => { st.baseline = event.target.value; draw(); });
    document.getElementById("measuredOnly")?.addEventListener("change", (event) => { st.measuredOnly = event.target.checked; draw(); });

    document.getElementById("fq").addEventListener("input", (e) => { st.q = e.target.value; draw(); });
    const selects = document.getElementById("filterSelects");
    selects.addEventListener("change", (e) => {
      const key = e.target.dataset.filter;
      if (!key) return;
      st.filters[key] = e.target.value;
      // メーカーを変えたらシリーズの選択肢も絞る。合わなくなった選択は外す
      filterKeys.forEach((k) => {
        if (k !== key && st.filters[k] && !optionsFor(k).includes(st.filters[k])) st.filters[k] = "";
      });
      selects.innerHTML = selectsHtml();
      selects.querySelector(`[data-filter="${CSS.escape(key)}"]`)?.focus();
      draw();
    });
    table.addEventListener("click", (e) => {
      const btn = e.target.closest(".sort-btn");
      if (!btn) return;
      const key = btn.dataset.sort;
      const f = cat.fields.find((x) => x.key === key);
      // 数値は大きい順から始める方が見たい順になりやすい
      st.dir = st.sort === key ? -st.dir : f.type === "number" ? -1 : 1;
      st.sort = key;
      draw();
      table.querySelector(`[data-sort="${CSS.escape(key)}"]`)?.focus();
    });
  }

  // ---------- 詳細 ----------
  function renderDetail(cat, itemId) {
    const item = getItems(cat.id).find((i) => i.id === itemId);
    if (!item) return renderNotFound();
    main.innerHTML = `
      <nav class="crumbs" aria-label="パンくず"><a href="#/">トップ</a> › <a href="#/c/${esc(cat.id)}">${esc(cat.name)}</a> › ${esc(item.name)}</nav>
      <p class="eyebrow">${esc(cat.en)}</p>
      <h1 class="page-title">${esc(item.name)}</h1>
      <p class="muted">${esc(item.maker)}</p>
      <div class="detail-actions">
        <button class="btn" id="cmpBtn">この製品をほかと比較する</button>
      </div>
      <dl class="spec-list">
        ${cat.fields.filter((f) => !f.filterOnly).map((f) => `<dt>${esc(f.label)}${f.help ? `<span class="field-help">${esc(f.help)}</span>` : ""}</dt><dd>${cellHtml(cat, f, item)}</dd>`).join("")}
      </dl>
      ${benchmarkEvidence(cat, item)}
      ${cat.specNote ? `<p class="note">${esc(cat.specNote)}</p>` : ""}
      ${verificationHtml(cat, item)}`;
    // 1 列目にこの製品を入れて比較画面を開く（2 列目以降の選択は残す）
    document.getElementById("cmpBtn").addEventListener("click", () => {
      const others = slotsOf(cat.id).filter((id) => id && id !== item.id);
      compare.slots[cat.id] = [item.id, ...others].slice(0, CMP_MAX);
      compare.cat = cat.id;
      saveCompare();
      location.hash = `#/compare?cat=${encodeURIComponent(cat.id)}`;
    });
  }

  // ---------- 比較 ----------
  // カテゴリを選び、列ごとのプルダウンで製品を選んで並べる。選択は compare.slots に保存する
  let diffOnly = false; // 「違いのある項目だけ」表示

  // 比較表の項目の区切り。ここに無い項目は「基本情報」に入る。メーカー・シリーズは列の見出しに出すので行にしない
  const CMP_SECTIONS = [
    ["性能・仕様", ["gamingScore", "singleScore", "g3dScore", "aiIndex", "aiSpeed", "aiLatency", "score", "cores", "threads", "baseClock", "boostClock", "cache", "vram", "params", "active", "context", "contextMax", "maxOutput"]],
    ["価格・効率", ["price", "costPerf", "efficiency", "tdp"]],
  ];
  const CMP_HIDDEN = ["maker", "series"];

  // 比較表の 1 行。数値には選んだ製品の中での長さの棒を付け、better の向きで最も良い値を強調する。未選択の列は空ける
  function compareRow(cat, f, cols) {
    const nums = cols.filter(Boolean).map((i) => i[f.key]).filter((v) => typeof v === "number");
    const max = nums.length ? Math.max(...nums) : 0;
    const best = f.better && nums.length >= 2 && new Set(nums).size > 1 ? (f.better === "high" ? max : Math.min(...nums)) : null;
    const plain = { ...f, bar: false }; // 一覧用の横棒はカテゴリ全体の最大値基準なので使わない
    const cells = cols.map((i) => {
      if (!i) return '<td class="cmp-blank"></td>';
      const v = i[f.key];
      const isBest = best !== null && v === best;
      const bar = f.type === "number" && typeof v === "number" && max > 0 && nums.length > 1
        ? `<span class="cmp-meter" aria-hidden="true"><i style="width:${Math.max(2, (v / max) * 100).toFixed(1)}%"></i></span>`
        : "";
      return `<td class="${isBest ? "is-best" : ""}">
        <span class="cmp-val">${cellHtml(cat, plain, i)}${isBest ? '<span class="sr-only">（最も良い値）</span>' : ""}</span>${bar}
      </td>`;
    });
    // 比較では数字を見比べやすいよう、説明は最初の一文だけ（全文は詳細ページと一覧の「この表の見方」）
    const shortHelp = f.help ? f.help.split("。")[0] + "。" : "";
    return `<tr><th scope="row">${esc(f.label)}${shortHelp ? `<span class="field-help">${esc(shortHelp)}</span>` : ""}</th>${cells.join("")}</tr>`;
  }

  // プルダウンの選択肢。シリーズ（無ければメーカー）ごとにまとめ、一覧の初期の並び順（性能順など）で並べる
  function optionsHtml(cat, selected) {
    const def = cat.defaultSort || { key: cat.fields[0].key, dir: 1 };
    const f = cat.fields.find((x) => x.key === def.key) || cat.fields[0];
    const items = [...getItems(cat.id)].sort((a, b) => {
      const x = a[f.key], y = b[f.key];
      if (x == null) return 1;
      if (y == null) return -1;
      return (f.type === "number" ? x - y : String(x).localeCompare(String(y), "ja")) * def.dir;
    });
    const groups = new Map();
    for (const i of items) {
      const g = i.series || i.maker || "その他";
      if (!groups.has(g)) groups.set(g, []);
      groups.get(g).push(i);
    }
    const order = (cat.optionOrder || {}).series;
    const names = [...groups.keys()];
    if (order) names.sort((a, b) => (order.includes(a) ? order.indexOf(a) : order.length) - (order.includes(b) ? order.indexOf(b) : order.length));
    return names
      .map((g) => `<optgroup label="${esc(g)}">${groups
        .get(g)
        .map((i) => `<option value="${esc(i.id)}"${i.id === selected ? " selected" : ""}>${esc(i.name)}</option>`)
        .join("")}</optgroup>`)
      .join("");
  }

  function renderCompare(catId) {
    const ready = SPEC.categories.filter((c) => c.status === "ready");
    const cat = getCategory(catId) || getCategory(compare.cat) || getCategory("cpu") || ready[0];
    if (!cat || cat.status !== "ready") return renderNotFound();
    compare.cat = cat.id;
    const slots = slotsOf(cat.id);
    saveCompare();
    const byId = new Map(getItems(cat.id).map((i) => [i.id, i]));
    const cols = slots.map((id) => (id ? byId.get(id) : null));
    const chosen = cols.filter(Boolean);
    // 選んだ製品で値がすべて同じ項目は「違いのある項目だけ」のとき隠す
    const differs = (f) => new Set(chosen.map((i) => String(i[f.key] ?? ""))).size > 1;
    const shown = cat.fields.slice(1).filter((f) => !f.filterOnly && !CMP_HIDDEN.includes(f.key) && (!diffOnly || chosen.length < 2 || differs(f)));
    const sections = [...CMP_SECTIONS, ["基本情報", null]]
      .map(([title, keys]) => [title, shown.filter((f) => (keys ? keys.includes(f.key) : !CMP_SECTIONS.some(([, k]) => k.includes(f.key))))])
      .filter(([, fs]) => fs.length);
    const n = cols.length;

    main.innerHTML = `
      <nav class="crumbs" aria-label="パンくず"><a href="#/">トップ</a> › 比較</nav>
      <h1 class="page-title">比較</h1>
      <p class="muted">比べたいカテゴリを選び、各列のプルダウンで製品を選んでください。</p>
      ${cat.specNote || cat.id === "ai" ? `<p class="note">${esc(cat.specNote || cat.note)}</p>` : ""}
      <nav class="cmp-cats" aria-label="比較するカテゴリ">
        ${ready.map((c) => `<a href="#/compare?cat=${esc(c.id)}"${c.id === cat.id ? ' aria-current="page"' : ""}>${SPEC.icon(c.icon)}${esc(c.name)}</a>`).join("")}
      </nav>
      <div class="cmp-head">
        <label class="toggle"><input type="checkbox" id="diffOnly" ${diffOnly ? "checked" : ""}> 違いのある項目だけ表示</label>
        <span class="muted cmp-legend"><span class="cmp-legend-mark" aria-hidden="true"></span>金色が各項目でいちばん良い値</span>
        <span class="cmp-head-actions">
          ${n < CMP_MAX ? '<button class="btn btn-ghost btn-small" id="addCol">＋ 列を追加</button>' : ""}
          ${chosen.length ? '<button class="btn btn-ghost btn-small" id="resetCmp">選択をクリア</button>' : ""}
        </span>
      </div>
      <div class="cmp-scroll"><table class="cmp" style="--n:${n}">
        <thead><tr><td class="cmp-corner"></td>${cols
          .map((i, k) => `<th scope="col">
            <div class="cmp-card${i ? "" : " is-empty"}">
              <label class="sr-only" for="slot${k}">${k + 1} 列目の${esc(cat.name)}</label>
              <select id="slot${k}" class="cmp-select" data-slot="${k}">
                <option value="">${esc(cat.name)}を選ぶ</option>
                ${optionsHtml(cat, i && i.id)}
              </select>
              ${i
                ? `<span class="cmp-maker">${esc([i.maker, i.series].filter(Boolean).join(" · "))}</span>
                   <a class="cmp-name" href="#/c/${esc(cat.id)}/${esc(i.id)}">詳細を見る</a>`
                : '<span class="cmp-maker">未選択</span>'}
              ${n > CMP_MIN ? `<button class="cmp-x" data-rmcol="${k}" aria-label="${k + 1} 列目を消す" title="この列を消す">×</button>` : ""}
            </div>
          </th>`)
          .join("")}</tr></thead>
        ${chosen.length
          ? sections
              .map(([title, fs]) => `<tbody>
                <tr class="cmp-sec"><th scope="rowgroup" colspan="${n + 1}">${esc(title)}</th></tr>
                ${fs.map((f) => compareRow(cat, f, cols)).join("")}
              </tbody>`)
              .join("") || `<tbody><tr><td class="empty" colspan="${n + 1}">違いのある項目はありません</td></tr></tbody>`
          : `<tbody><tr><td class="empty" colspan="${n + 1}">上のプルダウンから製品を選ぶと、ここに仕様が並びます。</td></tr></tbody>`}
      </table></div>`;

    const redraw = (focusSel) => {
      saveCompare();
      renderCompare(cat.id);
      if (focusSel) main.querySelector(focusSel)?.focus();
    };
    main.querySelectorAll("[data-slot]").forEach((sel) =>
      sel.addEventListener("change", () => {
        compare.slots[cat.id][Number(sel.dataset.slot)] = sel.value || null;
        redraw(`#slot${sel.dataset.slot}`);
      })
    );
    main.querySelectorAll("[data-rmcol]").forEach((b) =>
      b.addEventListener("click", () => {
        compare.slots[cat.id].splice(Number(b.dataset.rmcol), 1);
        redraw("#slot0");
      })
    );
    document.getElementById("addCol")?.addEventListener("click", () => {
      compare.slots[cat.id].push(null);
      redraw(`#slot${compare.slots[cat.id].length - 1}`);
    });
    document.getElementById("resetCmp")?.addEventListener("click", () => {
      compare.slots[cat.id] = [];
      redraw("#slot0");
    });
    document.getElementById("diffOnly").addEventListener("change", (e) => {
      diffOnly = e.target.checked;
      redraw("#diffOnly");
    });
  }

  // ---------- 全体検索 ----------
  function renderSearch(q) {
    const term = q.trim().toLowerCase();
    const hits = [];
    if (term) {
      SPEC.categories
        .filter((c) => c.status === "ready")
        .forEach((cat) =>
          getItems(cat.id).forEach((i) => {
            if ([i.name, i.maker, i.family, i.modelId].some((v) => String(v ?? "").toLowerCase().includes(term))) hits.push({ cat, i });
          })
        );
    }
    main.innerHTML = `
      <nav class="crumbs" aria-label="パンくず"><a href="#/">トップ</a> › 検索</nav>
      <h1 class="page-title">「${esc(q)}」の検索結果</h1>
      <p class="muted">${hits.length} 件</p>
      <ul class="result-list">
        ${hits
          .map(({ cat, i }) => `<li><a href="#/c/${esc(cat.id)}/${esc(i.id)}"><span class="tag">${esc(cat.name)}</span>${esc(i.name)}<span class="muted"> — ${esc(i.maker)}</span></a></li>`)
          .join("")}
      </ul>`;
  }

  function renderNotFound() {
    main.innerHTML = `<h1 class="page-title">ページが見つかりません</h1><p><a href="#/">トップへ戻る</a></p>`;
  }

  // ---------- ルーティング ----------
  // 今のハッシュに合った画面を描く。開いているカテゴリの id を返す
  function render() {
    const hash = location.hash.replace(/^#/, "") || "/";
    const [path, query = ""] = hash.split("?");
    const parts = path.split("/").filter(Boolean).map(decodeURIComponent);
    let active = null;

    if (parts.length === 0) renderHome();
    else if (parts[0] === "c" && parts[1]) {
      const cat = getCategory(parts[1]);
      active = parts[1];
      if (!cat || cat.status !== "ready") renderNotFound();
      else if (parts[2]) renderDetail(cat, parts[2]);
      else renderList(cat);
    } else if (parts[0] === "compare") renderCompare(new URLSearchParams(query).get("cat"));
    else if (parts[0] === "search") renderSearch(new URLSearchParams(query).get("q") || "");
    else renderNotFound();

    renderNav(active);
    return active;
  }

  function route() {
    render();
    closeMenu();
    main.focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }

  // ---------- 参考価格の自動更新 ----------
  // サーバー（server.mjs）経由で開いたときだけ動く。file:// では data/<id>-prices.js の値のまま。
  // サーバーは保存済みの価格をすぐ返し、古ければ裏で取り直す。取り直し中は数秒おきに聞き直して表を差し替える。
  // GPU・CPU など、価格を持つカテゴリ（SPEC.applyPrices にあるもの）ごとに別々に聞く。
  const POLL_MS = 5000;
  const lastPrices = {};
  const priceStatus = {};

  function priceStatusText(r) {
    if (r.updating) return r.progress && r.progress.total ? `楽天市場から最新の価格を取得中… ${r.progress.done} / ${r.progress.total}` : "楽天市場から最新の価格を取得中…";
    if (r.status === "no-key") return "楽天APIのキーが未設定のため、保存済みの価格を表示しています。";
    if (r.status === "error") return r.message || "価格を取得できませんでした。保存済みの価格を表示しています。";
    return "";
  }

  // 価格が変わったときだけ描き直す。入力中の欄やスクロール位置はそのまま残す
  function redrawKeepingState() {
    const focused = document.activeElement;
    const selector = focused && focused !== main && main.contains(focused)
      ? focused.id ? `#${CSS.escape(focused.id)}`
        : focused.dataset.sort ? `[data-sort="${CSS.escape(focused.dataset.sort)}"]`
        : focused.dataset.filter ? `[data-filter="${CSS.escape(focused.dataset.filter)}"]`
        : null
      : null;
    const caret = focused && typeof focused.selectionStart === "number" ? focused.selectionStart : null;
    const y = window.scrollY;
    render();
    window.scrollTo(0, y);
    const el = selector && main.querySelector(selector);
    if (el) {
      el.focus({ preventScroll: true });
      if (caret !== null && el.setSelectionRange) el.setSelectionRange(caret, caret);
    }
  }

  // 今開いている一覧のカテゴリ。トップや詳細ページなら null
  const shownCategory = () => (main.querySelector("#priceStatus") ? (location.hash.match(/^#\/c\/([^/?]+)/) || [])[1] : null);

  async function pollPrices(id) {
    let r;
    try {
      const res = await fetch(`api/prices/${id}`, { cache: "no-store" });
      if (!res.ok) return;
      r = await res.json();
    } catch (e) {
      return; // サーバーなしで開いている
    }
    priceStatus[id] = priceStatusText(r);
    const next = JSON.stringify(r.prices || null);
    if (r.prices && next !== lastPrices[id]) {
      lastPrices[id] = next;
      SPEC.applyPrices[id](r.prices);
      redrawKeepingState();
    } else if (shownCategory() === id) {
      document.getElementById("priceStatus").textContent = priceStatus[id];
    }
    if (r.updating) setTimeout(() => pollPrices(id), POLL_MS);
  }

  // ---------- ヘッダー操作 ----------
  const sidebar = document.getElementById("sidebar");
  const menuBtn = document.getElementById("menuBtn");
  function closeMenu() {
    sidebar.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  }
  menuBtn.addEventListener("click", () => {
    const open = sidebar.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });

  const search = document.getElementById("globalSearch");
  search.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && search.value.trim()) location.hash = `#/search?q=${encodeURIComponent(search.value.trim())}`;
  });

  // 「本文へ移動」はハッシュを書き換えるとルーティングと衝突するので、フォーカス移動だけにする
  document.querySelector(".skip").addEventListener("click", (e) => {
    e.preventDefault();
    main.focus();
  });

  window.addEventListener("hashchange", route);
  saveCompare();
  route();
  // 公開サイト（GitHub Pages）では価格は 1 日 1 回 data/<id>-prices.js ごと更新されるので、API に聞くのは手元のサーバーだけ
  if (/^(localhost|127\.0\.0\.1)$/.test(location.hostname)) Object.keys(SPEC.applyPrices).forEach(pollPrices);
})();
