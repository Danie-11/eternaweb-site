// EternaWeb — navigation interne
// Le comportement principal est géré par app.js.
// Ce fichier reste temporairement comme filet de sécurité pour les liens internes.
(function () {
  'use strict';

  function init() {
    var devis = document.getElementById('devis');
    var temoignages = document.getElementById('temoignages');
    var info = document.getElementById('goDevis');

    if (info && devis) {
      info.addEventListener('click', function (e) {
        e.preventDefault();
        devis.classList.add('show');
        devis.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', '#devis');
      });
    }

    document.querySelectorAll('a[href="temoignages"], a[href="#temoignages"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        if (temoignages) {
          temoignages.scrollIntoView({ behavior: 'smooth', block: 'start' });
          history.replaceState(null, '', '#temoignages');
        }
      });
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
