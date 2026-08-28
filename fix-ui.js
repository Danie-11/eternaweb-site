// EternaWeb — correctifs UI index.html
(function () {
  'use strict';

  function applyDirectLang(lang) {
    try {
      var dict = I18N[lang] || I18N.fr;
      document.querySelectorAll('[data-i18n]').forEach(function (el) {
        var key = el.getAttribute('data-i18n');
        var value = dict[key];
        if (typeof value === 'string') {
          if (/<[a-z][\s\S]*>/i.test(value)) el.innerHTML = value;
          else el.textContent = value;
        }
      });
      document.documentElement.setAttribute('lang', lang);
      localStorage.setItem('lang', lang);
      return true;
    } catch (err) {
      console.error('EternaWeb langue:', err);
      return false;
    }
  }

  function ready() {
    // Vos informations : l'ancre réelle est #informations.
    document.querySelectorAll('#goInformations').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var target = document.getElementById('informations');
        if (!target) return;
        e.preventDefault();
        e.stopPropagation();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', '#informations');
      }, true);
    });

    // Globe : on utilise directement le dictionnaire I18N déjà chargé par app.js.
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

    menu.querySelectorAll('.lang-item').forEach(function (item) {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var lang = item.getAttribute('data-lang');
        // Directement ici : pas de dépendance à l'ancien gestionnaire du globe.
        applyDirectLang(lang);
        closeMenu();
      }, true);
    });

    var saved = 'fr';
    try { saved = localStorage.getItem('lang') || 'fr'; } catch (_) {}
    applyDirectLang(saved);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready);
  else ready();
})();
