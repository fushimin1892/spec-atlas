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
    if (value === null || value === undefined || value === "") return '<span class="muted">—</span>';
    if (field.type === "number") {
      const d = field.digits || 0;
      const n = Number(value).toLocaleString("ja-JP", { minimumFractionDigits: d, maximumFractionDigits: d });
      return esc(`${field.prefix || ""}${n}${field.unit ? " " + field.unit : ""}`);
    }
    return esc(value);
  }
  // 横棒・添え書きまで含めたセルの中身（一覧・詳細・比較で共通）
  function cellHtml(cat, field, item) {
    const value = item[field.key];
    if (field.bar && value != null) {
      const max = Math.max(...getItems(cat.id).map((i) => i[field.key] || 0)) || 1;
      return `<span class="bar-cell"><span class="bar"><i style="width:${((value / max) * 100).toFixed(1)}%"></i></span><span class="val">${formatValue(field, value)}</span></span>`;
    }
    const sub = field.sub && item[field.sub] ? `<span class="sub">${esc(item[field.sub])}</span>` : "";
    const url = field.link && item[field.link];
    // 外部データの URL なので https のものだけリンクにする
    const shown = url && /^https:\/\//.test(url)
      ? `<a class="ext" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${formatValue(field, value)}</a>`
      : formatValue(field, value);
    return shown + sub;
  }

  // 比較リストは閲覧者ごとの便利機能なので localStorage に保存（使えない環境では保存しない）
  function loadCompare() {
    try {
      const v = JSON.parse(localStorage.getItem(COMPARE_KEY));
      return Array.isArray(v) ? v : [];
    } catch (e) {
      return [];
    }
  }
  let compare = loadCompare();
  function saveCompare() {
    try {
      localStorage.setItem(COMPARE_KEY, JSON.stringify(compare));
    } catch (e) {
      /* 保存できなくても画面は動かす */
    }
    document.getElementById("compareCount").textContent = compare.length;
  }
  function compareKey(catId, itemId) {
    return `${catId}/${itemId}`;
  }
  function toggleCompare(catId, itemId) {
    const k = compareKey(catId, itemId);
    compare = compare.includes(k) ? compare.filter((x) => x !== k) : [...compare, k];
    saveCompare();
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
    const filterKeys = cat.filters || ["maker"];
    const filterFields = filterKeys.map((k) => cat.fields.find((f) => f.key === k)).filter(Boolean);
    const listFields = cat.fields.filter((f) => f.list !== false);
    const def = cat.defaultSort || { key: cat.fields[0].key, dir: 1 };
    const st = (listState[cat.id] ||= { q: "", filters: {}, sort: def.key, dir: def.dir });

    const compareBy = (field, dir) => (a, b) => {
      const x = a[field.key], y = b[field.key];
      if (x == null && y == null) return 0;
      if (x == null) return 1; // 空欄は並び順に関係なく末尾
      if (y == null) return -1;
      return (field.type === "number" ? x - y : String(x).localeCompare(String(y), "ja")) * dir;
    };
    // 順位は絞り込みや並び替えに左右されないよう、初期の並び順で全件に対して付ける
    const rankOf = new Map();
    if (cat.rank) {
      const f = cat.fields.find((x) => x.key === def.key);
      [...items].sort(compareBy(f, def.dir)).forEach((i, n) => rankOf.set(i.id, n + 1));
    }
    // プルダウンの選択肢はデータに出てくる順（性能順のデータならシリーズも新しい順に並ぶ）
    const optionsFor = (key) => {
      const other = filterKeys.filter((k) => k !== key);
      const pool = items.filter((i) => other.every((k) => !st.filters[k] || i[k] === st.filters[k]));
      return [...new Set(pool.map((i) => i[key]).filter(Boolean))];
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
      <div class="toolbar">
        <label class="grow">絞り込み <input id="fq" type="search" value="${esc(st.q)}" placeholder="${esc(cat.searchHint || "名前で絞り込み")}"></label>
        <span id="filterSelects" style="display:contents">${selectsHtml()}</span>
        <span class="muted" id="hitCount"></span>
      </div>
      ${cat.note ? `<p class="note">${esc(cat.note)}</p>` : ""}
      ${cat.id === "gpu" ? `<p class="note live" id="priceStatus" role="status" aria-live="polite">${esc(SPEC.priceStatus || "")}</p>` : ""}
      <div class="table-wrap"><table class="spec-table" id="specTable"></table></div>`;

    const table = document.getElementById("specTable");
    const draw = () => {
      const q = st.q.trim().toLowerCase();
      const field = cat.fields.find((f) => f.key === st.sort) || cat.fields[0];
      const rows = items
        .filter((i) => !q || String(i.name).toLowerCase().includes(q))
        .filter((i) => filterKeys.every((k) => !st.filters[k] || i[k] === st.filters[k]))
        .sort(compareBy(field, st.dir));
      const cols = listFields.length + 1 + (cat.rank ? 1 : 0);

      document.getElementById("hitCount").textContent = `${rows.length} / ${items.length} 件`;
      table.innerHTML = `
        <thead><tr>
          <th scope="col" class="col-check"><span class="sr-only">比較</span></th>
          ${cat.rank ? '<th scope="col" class="rank">#</th>' : ""}
          ${listFields
            .map((f) => {
              const active = f.key === st.sort;
              const aria = active ? (st.dir === 1 ? "ascending" : "descending") : "none";
              const arrow = active ? (st.dir === 1 ? "▲" : "▼") : "";
              return `<th scope="col" class="${f.type === "number" ? "num" : ""}" aria-sort="${aria}"><button class="sort-btn" data-sort="${esc(f.key)}">${esc(f.label)} <span aria-hidden="true">${arrow}</span></button></th>`;
            })
            .join("")}
        </tr></thead>
        <tbody>
          ${
            rows.length
              ? rows
                  .map((i) => {
                    const on = compare.includes(compareKey(cat.id, i.id));
                    return `<tr>
                      <td class="col-check"><input type="checkbox" data-cmp="${esc(i.id)}" ${on ? "checked" : ""} aria-label="${esc(i.name)} を比較に追加"></td>
                      ${cat.rank ? `<td class="rank">${rankOf.get(i.id)}</td>` : ""}
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
    table.addEventListener("change", (e) => {
      if (e.target.dataset.cmp) toggleCompare(cat.id, e.target.dataset.cmp);
    });
  }

  // ---------- 詳細 ----------
  function renderDetail(cat, itemId) {
    const item = getItems(cat.id).find((i) => i.id === itemId);
    if (!item) return renderNotFound();
    const on = compare.includes(compareKey(cat.id, item.id));
    main.innerHTML = `
      <nav class="crumbs" aria-label="パンくず"><a href="#/">トップ</a> › <a href="#/c/${esc(cat.id)}">${esc(cat.name)}</a> › ${esc(item.name)}</nav>
      <p class="eyebrow">${esc(cat.en)}</p>
      <h1 class="page-title">${esc(item.name)}</h1>
      <p class="muted">${esc(item.maker)}</p>
      <button class="btn" id="cmpBtn" aria-pressed="${on}">${on ? "比較から外す" : "比較に追加"}</button>
      <dl class="spec-list">
        ${cat.fields.map((f) => `<dt>${esc(f.label)}</dt><dd>${cellHtml(cat, f, item)}</dd>`).join("")}
      </dl>
      <section class="placeholder">
        <h2>ベンチマーク・関連製品</h2>
        <p class="muted">今後追加予定のエリアです。</p>
      </section>`;
    document.getElementById("cmpBtn").addEventListener("click", () => {
      toggleCompare(cat.id, item.id);
      renderDetail(cat, itemId);
    });
  }

  // ---------- 比較 ----------
  function renderCompare() {
    // 項目がカテゴリごとに違うので、カテゴリ単位で表を分ける
    const groups = SPEC.categories
      .map((cat) => ({
        cat,
        items: compare
          .filter((k) => k.startsWith(cat.id + "/"))
          .map((k) => getItems(cat.id).find((i) => i.id === k.slice(cat.id.length + 1)))
          .filter(Boolean),
      }))
      .filter((g) => g.items.length);

    main.innerHTML = `
      <nav class="crumbs" aria-label="パンくず"><a href="#/">トップ</a> › 比較</nav>
      <h1 class="page-title">比較</h1>
      ${
        groups.length
          ? `<button class="btn btn-ghost" id="clearCmp">すべてクリア</button>` +
            groups
              .map(
                ({ cat, items }) => `
            <h2 class="section-title">${SPEC.icon(cat.icon)}${esc(cat.name)}</h2>
            <div class="table-wrap"><table class="spec-table compare-table">
              <thead><tr><th scope="col">項目</th>${items.map((i) => `<th scope="col">${esc(i.name)} <button class="x-btn" data-rm="${esc(cat.id)}/${esc(i.id)}" aria-label="${esc(i.name)} を比較から外す">×</button></th>`).join("")}</tr></thead>
              <tbody>${cat.fields
                .slice(1)
                .map((f) => `<tr><th scope="row">${esc(f.label)}</th>${items.map((i) => `<td class="${f.type === "number" ? "num" : ""}">${cellHtml(cat, f, i)}</td>`).join("")}</tr>`)
                .join("")}</tbody>
            </table></div>`
              )
              .join("")
          : `<p class="empty-box">比較する製品がありません。一覧のチェックボックスか詳細ページの「比較に追加」から選べます。</p>`
      }`;

    document.getElementById("clearCmp")?.addEventListener("click", () => {
      compare = [];
      saveCompare();
      renderCompare();
    });
    main.querySelectorAll("[data-rm]").forEach((b) =>
      b.addEventListener("click", () => {
        compare = compare.filter((k) => k !== b.dataset.rm);
        saveCompare();
        renderCompare();
      })
    );
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
            if ([i.name, i.maker].some((v) => String(v ?? "").toLowerCase().includes(term))) hits.push({ cat, i });
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
    } else if (parts[0] === "compare") renderCompare();
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
  // サーバー（server.mjs）経由で開いたときだけ動く。file:// では data/gpu-prices.js の値のまま。
  // サーバーは保存済みの価格をすぐ返し、古ければ裏で取り直す。取り直し中は数秒おきに聞き直して表を差し替える。
  const POLL_MS = 5000;
  let lastPrices = "";

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

  async function pollPrices() {
    let r;
    try {
      const res = await fetch("api/prices/gpu", { cache: "no-store" });
      if (!res.ok) return;
      r = await res.json();
    } catch (e) {
      return; // サーバーなしで開いている
    }
    SPEC.priceStatus = priceStatusText(r);
    const next = JSON.stringify(r.prices || null);
    if (r.prices && next !== lastPrices) {
      lastPrices = next;
      SPEC.applyGpuPrices(r.prices);
      redrawKeepingState();
    } else {
      const el = document.getElementById("priceStatus");
      if (el) el.textContent = SPEC.priceStatus;
    }
    if (r.updating) setTimeout(pollPrices, POLL_MS);
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
  // 公開サイト（GitHub Pages）では価格は 1 日 1 回 data/gpu-prices.js ごと更新されるので、API に聞くのは手元のサーバーだけ
  if (/^(localhost|127\.0\.0\.1)$/.test(location.hostname) && SPEC.applyGpuPrices) pollPrices();
})();
