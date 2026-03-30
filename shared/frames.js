// shared/frames.js — Device frame builders

const STATUS_ICONS_SVG = `
  <svg width="15" height="10" viewBox="0 0 15 10" fill="#fff"><rect x="0" y="5" width="2.5" height="5" rx="0.5"/><rect x="3.5" y="3" width="2.5" height="7" rx="0.5"/><rect x="7" y="1" width="2.5" height="9" rx="0.5"/><rect x="10.5" y="0" width="2.5" height="10" rx="0.5"/></svg>
  <svg width="16" height="12" viewBox="0 0 20 14" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round"><path d="M1 10C4 7 7 5.5 10 5.5C13 5.5 16 7 19 10"/><path d="M4 12.5C6.5 10 8.5 9 10 9C11.5 9 13.5 10 16 12.5"/><circle cx="10" cy="14" r="1.2" fill="#fff" stroke="none"/></svg>
  <svg width="22" height="11" viewBox="0 0 22 11" fill="none"><rect x="0.5" y="0.5" width="19" height="10" rx="2" stroke="#fff"/><rect x="1.5" y="1.5" width="14" height="8" rx="1.5" fill="#fff"/><path d="M20.5 3.5v4a2 2 0 0 0 0-4z" fill="#fff"/></svg>`;

function androidPhoneFrame(screenHTML) {
  return `<div class="android-frame">
    <div class="btn-side btn-vol-up"></div>
    <div class="btn-side btn-vol-dn"></div>
    <div class="btn-side btn-power"></div>
    <div class="android-inner">
      <div class="android-status">
        <span class="android-time">9:41</span>
        <div class="android-icons">${STATUS_ICONS_SVG}</div>
      </div>
      ${screenHTML}
      <div class="home-bar"><div class="home-bar-pill"></div></div>
    </div>
  </div>`;
}

function androidTabletFrame(screenHTML) {
  return `<div class="android-tablet-frame">
    <div class="btn-side btn-tablet-vol-up"></div>
    <div class="btn-side btn-tablet-vol-dn"></div>
    <div class="btn-side btn-tablet-power"></div>
    <div class="tablet-inner">
      <div class="tablet-status">
        <span class="android-time" style="color:#fff;font-size:12px;">9:41</span>
        <div class="android-icons">${STATUS_ICONS_SVG}</div>
      </div>
      ${screenHTML}
    </div>
  </div>`;
}
