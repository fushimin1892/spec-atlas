// 細線の SVG アイコン。色は currentColor、太さは CSS の --icon-stroke で揃える。
// categories.js の icon にはここのキー名を書く。
window.SPEC = window.SPEC || { data: {} };

(function () {
  const paths = {
    // AIモデル: ノードがつながる星座
    ai: '<circle cx="12" cy="5" r="1.6"/><circle cx="5" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/><circle cx="12" cy="19" r="1.6"/><circle cx="12" cy="12" r="2.4"/><path d="M12 6.6v3M6.6 12h3M14.4 12h3M12 14.4v3M6.2 10.8 10.3 6.2M17.8 10.8 13.7 6.2M6.2 13.2l4.1 4.6M17.8 13.2l-4.1 4.6"/>',
    // CPU: ピンの出たチップ
    cpu: '<rect x="6" y="6" width="12" height="12" rx="1"/><rect x="9.5" y="9.5" width="5" height="5"/><path d="M9 3v3M12 3v3M15 3v3M9 18v3M12 18v3M15 18v3M3 9h3M3 12h3M3 15h3M18 9h3M18 12h3M18 15h3"/>',
    // GPU: ファン 2 基のボード
    gpu: '<rect x="2.5" y="6" width="19" height="11" rx="1"/><circle cx="8.5" cy="11.5" r="3"/><circle cx="15.5" cy="11.5" r="3"/><path d="M8.5 8.5v6M5.5 11.5h6M15.5 8.5v6M12.5 11.5h6M5 17v2.5M9 17v2.5M13 17v2.5"/>',
    phone: '<rect x="7" y="2.5" width="10" height="19" rx="2"/><path d="M10.5 5h3M11 18.5h2"/>',
    memory: '<path d="M2.5 8h19v8h-8.5l-1 1.5-1-1.5H2.5z"/><path d="M5.5 10.5v3M8.5 10.5v3M15.5 10.5v3M18.5 10.5v3"/>',
    storage: '<rect x="3.5" y="4" width="17" height="16" rx="1.5"/><circle cx="12" cy="11" r="4"/><circle cx="12" cy="11" r="0.8"/><path d="M7 17h2M15 17h2"/>',
    display: '<rect x="2.5" y="4" width="19" height="12.5" rx="1"/><path d="M9 20.5h6M12 16.5v4"/>',
    console: '<path d="M7.5 7.5h9a4.5 4.5 0 0 1 4.3 3.2l1 3.6a2.6 2.6 0 0 1-4.4 2.4L15.5 15h-7l-1.9 1.7a2.6 2.6 0 0 1-4.4-2.4l1-3.6a4.5 4.5 0 0 1 4.3-3.2z"/><path d="M8 10v3M6.5 11.5h3"/><circle cx="16" cy="10.7" r=".5"/><circle cx="17.3" cy="12.3" r=".5"/>',
    // UI 用
    search: '<circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.4-4.4"/>',
    compare: '<path d="M4 7h13M14 4l3 3-3 3M20 17H7M10 14l-3 3 3 3"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h10"/>',
    arrow: '<path d="M5 12h14M14 7l5 5-5 5"/>',
  };

  window.SPEC.icon = function (name, cls = "ico") {
    const p = paths[name] || paths.cpu;
    return `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${p}</svg>`;
  };
})();
