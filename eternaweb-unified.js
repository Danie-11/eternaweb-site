/* =========================================================
   ETERNAWEB — migration JS progressive
   Phase 1 : point d'entrée unique, sans supprimer les scripts existants.

   IMPORTANT : ce fichier ne remplace encore aucun ancien script.
   Il sert de couche de migration sûre : les scripts actuels restent
   inchangés et sont chargés dans leur ordre de dépendance.
   ========================================================= */
(function () {
  'use strict';

  if (window.__ETERNAWEB_UNIFIED_BOOT__) return;
  window.__ETERNAWEB_UNIFIED_BOOT__ = true;

  var scripts = [];

  function add(src) {
    if (scripts.indexOf(src) === -1) scripts.push(src);
  }

  /* Le moteur historique charge lui-même app-core.js. */
  add('./app.js');

  /* Corrections / comportements communs actuellement utilisés par l'accueil. */
  if (document.getElementById('services') || document.getElementById('devis')) {
    add('./ui-fix.js');
  }

  /* Navigation des formules et ouverture du formulaire depuis cv.html. */
  if (document.querySelector('.pricing-home') || new URLSearchParams(window.location.search).has('plan')) {
    add('./home-fix.js');
  }

  /* Page CV : traductions / correctifs spécifiques. */
  if (document.querySelector('.cv-section') || document.getElementById('cvModal')) {
    add('./nl-fix.js');
    add('./cv-fix.js');
  }

  /* Formulaires FAQ et informations : envoi actuel conservé tel quel. */
  if (document.getElementById('faqForm') || document.getElementById('devisForm')) {
    add('./direct-send.js');
  }

  function load(index) {
    if (index >= scripts.length) {
      window.dispatchEvent(new CustomEvent('eternaweb:unified-ready'));
      return;
    }

    var src = scripts[index];
    var script = document.createElement('script');
    script.src = src;
    script.async = false;
    script.onload = function () { load(index + 1); };
    script.onerror = function () {
      console.error('❌ EternaWeb : impossible de charger', src);
      load(index + 1);
    };
    document.head.appendChild(script);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { load(0); }, { once: true });
  } else {
    load(0);
  }
})();
