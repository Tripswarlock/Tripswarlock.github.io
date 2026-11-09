(function () {
  'use strict';

  var root = document.documentElement;

  /* ---------- theme ---------- */
  var toggle = document.getElementById('themeToggle');
  var meta = document.querySelector('meta[name="theme-color"]');

  function syncThemeUi() {
    var light = root.dataset.theme !== 'dark';
    if (meta) meta.setAttribute('content', light ? '#f2ede3' : '#111317');
    if (toggle) toggle.setAttribute('aria-label', light ? 'Включить тёмную тему' : 'Включить светлую тему');
  }
  syncThemeUi();

  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      try { localStorage.setItem('theme', next); } catch (e) {}
      syncThemeUi();
    });
  }

  /* ---------- sticky topbar border ---------- */
  var topbar = document.querySelector('.topbar');
  function onScroll() {
    if (topbar) topbar.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- QR dialog ---------- */
  var dialog = document.getElementById('qrDialog');
  var openBtn = document.getElementById('qrOpen');
  var closeBtn = document.getElementById('qrClose');

  if (dialog && openBtn) {
    openBtn.addEventListener('click', function () {
      if (typeof dialog.showModal === 'function') dialog.showModal();
      else dialog.setAttribute('open', '');
    });
  }
  if (dialog && closeBtn) {
    closeBtn.addEventListener('click', function () { dialog.close(); });
  }
  if (dialog) {
    dialog.addEventListener('click', function (event) {
      if (event.target === dialog) dialog.close();
    });
  }

  /* ---------- year ---------- */
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
