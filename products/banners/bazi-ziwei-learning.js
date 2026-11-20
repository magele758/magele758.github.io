(function() {
  "use strict";
  var cfg = {"slug":"audiobook","displayName":"Audiobook Studio","hookText":"想把古籍 PDF 与万字深度研习长文转成通勤随时听的播客？试试本地 Index-TTS 高拟真有声书工具 Audiobook","ctaLabel":"Try Audiobook Studio ($29) →","href":"https://opc.example.com/audiobook?utm_source=bazi-ziwei-learning\u0026utm_medium=banner\u0026utm_campaign=lm_bazi_ziwei_learning\u0026utm_content=audiobook","position":"bottom","storageKey":"opc_lm_dismissed_audiobook_lm_bazi_ziwei_learning"};
  if (typeof document === "undefined") return;
  try {
    if (window.sessionStorage && window.sessionStorage.getItem(cfg.storageKey) === "1") {
      return;
    }
  } catch (_) {}

  function mountBanner() {
    if (document.querySelector('[data-opc-banner="' + cfg.slug + '"]')) return;

    var bar = document.createElement("aside");
    bar.setAttribute("role", "complementary");
    bar.setAttribute("data-opc-banner", cfg.slug);
    bar.style.cssText = [
      "position:fixed",
      "left:16px",
      "right:16px",
      cfg.position === "top" ? "top:16px" : "bottom:16px",
      "max-width:880px",
      "margin:0 auto",
      "z-index:2147483000",
      "background:#121a30",
      "color:#f1f5f9",
      "border:1px solid rgba(99,102,241,0.45)",
      "border-radius:12px",
      "padding:12px 16px",
      "box-shadow:0 14px 34px rgba(0,0,0,0.45)",
      "display:flex",
      "align-items:center",
      "justify-content:space-between",
      "gap:14px",
      "flex-wrap:wrap",
      "font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif",
      "font-size:14px"
    ].join(";");

    var textSpan = document.createElement("span");
    textSpan.style.cssText = "flex:1;min-width:200px;line-height:1.45;";
    textSpan.textContent = cfg.hookText;

    var actions = document.createElement("div");
    actions.style.cssText = "display:flex;align-items:center;gap:10px;";

    var cta = document.createElement("a");
    cta.href = cfg.href;
    cta.target = "_blank";
    cta.rel = "noopener noreferrer";
    cta.textContent = cfg.ctaLabel;
    cta.style.cssText = [
      "background:#6366f1",
      "color:#ffffff",
      "padding:8px 14px",
      "border-radius:8px",
      "font-weight:600",
      "text-decoration:none",
      "white-space:nowrap"
    ].join(";");

    var closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.setAttribute("aria-label", "Dismiss recommendation");
    closeBtn.textContent = "×";
    closeBtn.style.cssText = [
      "background:transparent",
      "border:none",
      "color:#94a3b8",
      "font-size:20px",
      "line-height:1",
      "cursor:pointer",
      "padding:4px 6px"
    ].join(";");
    closeBtn.addEventListener("click", function() {
      try {
        if (window.sessionStorage) window.sessionStorage.setItem(cfg.storageKey, "1");
      } catch (_) {}
      if (bar.parentNode) bar.parentNode.removeChild(bar);
    });

    actions.appendChild(cta);
    actions.appendChild(closeBtn);
    bar.appendChild(textSpan);
    bar.appendChild(actions);
    document.body.appendChild(bar);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountBanner);
  } else {
    mountBanner();
  }
})();
