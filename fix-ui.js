// EternaWeb — correctifs UI index.html
(function () {
  'use strict';

  function ready() {
    // 1) "Vos informations" : l'ancre réelle est #informations.
    document.querySelectorAll('#goInformations, a[href="#devis"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var target = document.getElementById('informations');
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', '#informations');
      });
    });

    // 2) Globe langues : gestion robuste, indépendante du CSS.
    var btn = document.getElementById('langBtn');
    var menu = document.getElementById('langMenu');
    if (!btn || !menu) return;

    menu.style.zIndex = '9999';

    function closeMenu() {
      menu.classList.remove('show');
      menu.style.display = 'none';
      btn.setAttribute('aria-expanded', 'false');
    }

    function openMenu() {
      menu.classList.add('show');
      menu.style.display = 'flex';
      menu.style.flexDirection = 'column';
      btn.setAttribute('aria-expanded', 'true');
    }

    closeMenu();

    btn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (menu.style.display === 'flex') closeMenu();
      else openMenu();
    });

    document.addEventListener('click', function (e) {
      if (!menu.contains(e.target) && e.target !== btn) closeMenu();
    });

    menu.querySelectorAll('.lang-item').forEach(function (item) {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var lang = item.getAttribute('data-lang');
        if (typeof window.applyLang === 'function') {
          window.applyLang(lang);
        } else {
          try { localStorage.setItem('lang', lang); } catch (_) {}
          window.location.reload();
        }
        closeMenu();
      });
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready);
  else ready();
})();
