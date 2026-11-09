(function () {
  'use strict';

  var root = document.documentElement;

  /* ---------- theme ---------- */
  var toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = root.dataset.theme === 'light' ? 'dark' : 'light';
      root.dataset.theme = next;
      try { localStorage.setItem('theme', next); } catch (e) {}
      var meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute('content', next === 'light' ? '#f5f7fb' : '#070b14');
      toggle.setAttribute('aria-label', next === 'light' ? 'Включить тёмную тему' : 'Включить светлую тему');
    });
  }

  /* ---------- sticky topbar border ---------- */
  var topbar = document.querySelector('.topbar');
  var onScroll = function () {
    if (!topbar) return;
    topbar.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- project filters ---------- */
  var filters = Array.prototype.slice.call(document.querySelectorAll('.filter'));
  var cards = Array.prototype.slice.call(document.querySelectorAll('#projectGrid .card'));

  filters.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var value = btn.dataset.filter;
      filters.forEach(function (b) {
        b.classList.toggle('is-active', b === btn);
        b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
      });
      cards.forEach(function (card) {
        var show = value === 'all' || card.dataset.cat === value;
        card.hidden = !show;
        if (show) card.classList.add('is-in');
      });
    });
    btn.setAttribute('aria-pressed', btn.classList.contains('is-active') ? 'true' : 'false');
  });

  /* ---------- reveal on scroll ---------- */
  var revealItems = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealItems.forEach(function (el) { io.observe(el); });
  } else {
    revealItems.forEach(function (el) { el.classList.add('is-in'); });
  }

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
