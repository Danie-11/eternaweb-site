/* EternaWeb — navigation des formules CV
   Les formules sont choisies sur cv.html puis le formulaire s'ouvre sur index.html. */
(function(){
  'use strict';

  function goToDevis(plan){
    var target = './index.html?plan=' + encodeURIComponent(plan || '') + '#devis';
    window.location.href = target;
  }

  function init(){
    /* Page des formules : un clic doit réellement emmener vers le formulaire. */
    document.querySelectorAll('.choose-plan').forEach(function(btn){
      btn.addEventListener('click', function(e){
        e.preventDefault();
        e.stopImmediatePropagation();
        goToDevis(btn.dataset.plan || '');
      }, true);
    });

    /* Accueil : récupérer la formule choisie et ouvrir le formulaire. */
    var params = new URLSearchParams(window.location.search);
    var plan = params.get('plan');
    if(plan && document.getElementById('devis')){
      try { localStorage.setItem('ew_selected_plan', plan); } catch(e) {}
      if(typeof window.openDevis === 'function'){
        window.openDevis(plan);
      } else {
        var devis = document.getElementById('devis');
        devis.classList.add('show','devis-open');
        devis.setAttribute('aria-hidden','false');
        var input = document.getElementById('planInput');
        var display = document.getElementById('planDisplay');
        if(input) input.value = plan;
        if(display) display.value = plan;
        devis.scrollIntoView({behavior:'smooth', block:'start'});
      }
      window.history.replaceState({}, document.title, './index.html#devis');
    }

    /* Accueil : utiliser le même envoi direct que la FAQ, sans ouvrir une boîte mail. */
    if(document.getElementById('devisForm')){
      var script = document.createElement('script');
      script.src = './direct-send.js';
      script.defer = true;
      document.head.appendChild(script);
    }
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
