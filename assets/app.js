(function () {
  'use strict';

  var root = document.documentElement;

  /* ---------- theme ---------- */
  var toggle = document.getElementById('themeToggle');
  var meta = document.querySelector('meta[name="theme-color"]');

  function syncThemeUi() {
    var light = root.dataset.theme !== 'dark';
    if (meta) meta.setAttribute('content', light ? '#ECECEC' : '#000000');
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

  /* ---------- sticky top app bar ---------- */
  var topbar = document.querySelector('.topbar');
  function onScroll() {
    if (topbar) topbar.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- reveal ---------- */
  var revealItems = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });
    revealItems.forEach(function (el) { io.observe(el); });
  } else {
    revealItems.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ---------- material ripple ---------- */
  var rippleTargets = document.querySelectorAll('.btn, .icon-btn, .nav a');
  Array.prototype.forEach.call(rippleTargets, function (el) {
    el.addEventListener('pointerdown', function (event) {
      var rect = el.getBoundingClientRect();
      var size = Math.max(rect.width, rect.height) * 2;
      var ink = document.createElement('span');
      ink.className = 'ripple';
      ink.style.width = size + 'px';
      ink.style.height = size + 'px';
      ink.style.left = (event.clientX - rect.left - size / 2) + 'px';
      ink.style.top = (event.clientY - rect.top - size / 2) + 'px';
      el.appendChild(ink);
      window.setTimeout(function () { ink.remove(); }, 600);
    });
  });

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
