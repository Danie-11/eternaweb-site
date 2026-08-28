// EternaWeb — correctif unique globe + Vos informations
(function(){
  'use strict';

  function getDict(lang){
    var base = window.I18N && window.I18N[lang];
    return (base && typeof base === 'object') ? base : null;
  }

  function applyLang(lang){
    var d = getDict(lang);
    if(!d) return false;

    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var key = el.getAttribute('data-i18n');
      if(!Object.prototype.hasOwnProperty.call(d,key)) return;
      var value = d[key];
      if(typeof value !== 'string') return;
      if(/<[^>]+>/.test(value)) el.innerHTML = value;
      else el.textContent = value;
    });

    document.documentElement.setAttribute('lang', lang);
    try { localStorage.setItem('lang', lang); } catch(e) {}
    return true;
  }

  function init(){
    var info = document.getElementById('goInformations');
    var target = document.getElementById('informations');

    if(info && target){
      info.addEventListener('click', function(e){
        e.preventDefault();
        e.stopImmediatePropagation();
        target.scrollIntoView({behavior:'smooth',block:'start'});
        history.replaceState(null,'','#informations');
      }, true);
    }

    var btn = document.getElementById('langBtn');
    var menu = document.getElementById('langMenu');
    if(!btn || !menu) return;

    function close(){
      menu.classList.remove('show');
      menu.style.display='none';
      btn.setAttribute('aria-expanded','false');
    }
    function open(){
      menu.classList.add('show');
      menu.style.display='flex';
      menu.style.flexDirection='column';
      btn.setAttribute('aria-expanded','true');
    }

    close();
    btn.addEventListener('click', function(e){
      e.preventDefault();
      e.stopImmediatePropagation();
      menu.style.display==='flex' ? close() : open();
    }, true);

    menu.querySelectorAll('.lang-item').forEach(function(item){
      item.addEventListener('click', function(e){
        e.preventDefault();
        e.stopImmediatePropagation();
        applyLang(item.getAttribute('data-lang'));
        close();
      }, true);
    });

    var saved='fr';
    try { saved=localStorage.getItem('lang')||'fr'; } catch(e) {}
    applyLang(saved);
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init);
  else init();
})();
