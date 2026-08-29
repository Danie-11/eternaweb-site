/* EternaWeb — sécurité UI
   Les commandes critiques restent fonctionnelles même si le moteur i18n
   charge plus tard ou si un traducteur automatique du navigateur intervient.
*/
(function(){
  'use strict';

  function ready(fn){
    if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn, {once:true});
    else fn();
  }

  function openDevisFallback(){
    var devis = document.getElementById('devis');
    if(!devis) return;
    devis.classList.add('show','devis-open');
    devis.setAttribute('aria-hidden','false');
    try { devis.scrollIntoView({behavior:'smooth', block:'start'}); } catch(e) { devis.scrollIntoView(); }
  }

  function init(){
    var menuBtn = document.getElementById('menuBtn');
    var mainMenu = document.getElementById('mainMenu');
    var langBtn = document.getElementById('langBtn');
    var langMenu = document.getElementById('langMenu');
    var goDevis = document.getElementById('goDevis');

    /* Menu mobile : indépendant du moteur de traduction. */
    if(menuBtn && mainMenu && !menuBtn.dataset.uiFixBound){
      menuBtn.dataset.uiFixBound = '1';
      menuBtn.addEventListener('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        var open = mainMenu.classList.toggle('show');
        menuBtn.setAttribute('aria-expanded', String(open));
      });
    }

    /* Globe : indépendant du moteur i18n. */
    if(langBtn && langMenu && !langBtn.dataset.uiFixBound){
      langBtn.dataset.uiFixBound = '1';
      langBtn.addEventListener('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        var open = langMenu.classList.toggle('show');
        langBtn.setAttribute('aria-expanded', String(open));
      });
    }

    /* Choix de langue : le moteur principal reste responsable de la traduction. */
    document.querySelectorAll('.lang-item[data-lang]').forEach(function(item){
      if(item.dataset.uiFixBound) return;
      item.dataset.uiFixBound = '1';
      item.addEventListener('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        var lang = (item.dataset.lang || 'fr').toLowerCase();
        try { localStorage.setItem('eternaweb-lang', lang); } catch(err) {}
        if(typeof window.applyLang === 'function') {
          window.applyLang(lang);
        } else {
          document.documentElement.lang = lang;
        }
        if(langMenu) langMenu.classList.remove('show');
        if(langBtn) langBtn.setAttribute('aria-expanded','false');
      });
    });

    /* Vos informations : ouverture directe, sans dépendre d'un autre bouton. */
    if(goDevis && !goDevis.dataset.uiFixBound){
      goDevis.dataset.uiFixBound = '1';
      goDevis.addEventListener('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        if(typeof window.openDevis === 'function') window.openDevis();
        else openDevisFallback();
      });
    }

    /* Fermer les deux menus en cliquant ailleurs. */
    document.addEventListener('click', function(e){
      if(langMenu && langBtn && !langBtn.contains(e.target) && !langMenu.contains(e.target)){
        langMenu.classList.remove('show');
        langBtn.setAttribute('aria-expanded','false');
      }
      if(mainMenu && menuBtn && !menuBtn.contains(e.target) && !mainMenu.contains(e.target)){
        mainMenu.classList.remove('show');
        menuBtn.setAttribute('aria-expanded','false');
      }
    });
  }

  ready(init);
})();
