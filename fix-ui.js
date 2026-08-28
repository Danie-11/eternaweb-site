// EternaWeb — correctif UI unique
(function () {
  'use strict';

  function getI18n() {
    return window.I18N || null;
  }

  function applyLang(lang) {
    var dicts = getI18n();
    var dict = dicts && dicts[lang] ? dicts[lang] : (dicts && dicts.fr ? dicts.fr : null);
    if (!dict) return false;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (!Object.prototype.hasOwnProperty.call(dict, key)) return;
      var value = dict[key];
      if (typeof value !== 'string') return;
      if (/<[a-z][\s\S]*>/i.test(value)) el.innerHTML = value;
      else el.textContent = value;
    });

    document.documentElement.lang = lang;
    try { localStorage.setItem('lang', lang); } catch (e) {}
    return true;
  }

  function init() {
    // Vos informations : navigation directe vers la section réelle.
    var info = document.getElementById('goInformations');
    var target = document.getElementById('informations');
    if (info && target) {
      info.onclick = function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', '#informations');
        return false;
      };
    }

    // Globe : neutralise les anciens gestionnaires et utilise un seul système.
    var btn = document.getElementById('langBtn');
    var menu = document.getElementById('langMenu');
    if (!btn || !menu) return;

    menu.style.zIndex = '99999';
    menu.style.pointerEvents = 'auto';

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

    // Clonage des boutons = suppression fiable des anciens listeners.
    var items = Array.prototype.slice.call(menu.querySelectorAll('.lang-item'));
    items.forEach(function (item) {
      var fresh = item.cloneNode(true);
      item.parentNode.replaceChild(fresh, item);
    });

    var freshBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(freshBtn, btn);
    btn = freshBtn;

    closeMenu();

    btn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (menu.style.display === 'flex') closeMenu(); else openMenu();
    });

    menu.querySelectorAll('.lang-item').forEach(function (item) {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var lang = item.getAttribute('data-lang');
        if (applyLang(lang)) closeMenu();
      });
    });

    var saved = 'fr';
    try { saved = localStorage.getItem('lang') || 'fr'; } catch (e) {}
    applyLang(saved);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
