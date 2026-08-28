// EternaWeb — envoi direct des formulaires sans ouvrir une boîte mail
(function () {
  'use strict';

  var ENDPOINT = 'https://formsubmit.co/ajax/eternaweb.contact@gmail.com';
  var TO = 'eternaweb.contact@gmail.com';

  function send(data, successText) {
    data.append('_subject', data.get('_subject') || 'Message EternaWeb');
    data.append('_captcha', 'false');
    data.append('_template', 'table');

    return fetch(ENDPOINT, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    }).then(function (response) {
      if (!response.ok) throw new Error('Erreur serveur ' + response.status);
      return response.json().catch(function () { return {}; });
    }).then(function () {
      alert(successText || 'Votre message a bien été envoyé à EternaWeb.');
    });
  }

  function ready() {
    // FAQ
    var faq = document.getElementById('faqForm');
    if (faq) {
      faq.addEventListener('submit', function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        if (!faq.reportValidity()) return;
        var email = faq.querySelector('#email').value.trim();
        var message = faq.querySelector('#message').value.trim();
        var data = new FormData();
        data.append('email', email);
        data.append('message', message);
        data.append('_subject', 'Question FAQ — EternaWeb');
        send(data, '✅ Votre question a bien été envoyée à EternaWeb.');
      }, true);
    }

    // Formulaire Vos informations
    var devis = document.getElementById('devisForm');
    var sendBtn = document.getElementById('sendForm');
    if (devis && sendBtn) {
      sendBtn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        if (!devis.reportValidity()) return;

        var data = new FormData(devis);
        var integrations = Array.from(devis.querySelectorAll('input[name="int"]:checked')).map(function (x) { return x.value; });
        data.delete('int');
        data.append('integrations', integrations.join(', ') || 'Aucune');
        data.append('_subject', 'Nouvelle demande — EternaWeb');
        send(data, '✅ Vos informations ont bien été envoyées à EternaWeb.');
      }, true);
    }

    // Boutons « Je choisis cette formule » sur CV / autres pages de vente
    document.querySelectorAll('.choose-plan').forEach(function (button) {
      button.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        var plan = button.getAttribute('data-plan') || 'Formule EternaWeb';
        var data = new FormData();
        data.append('plan', plan);
        data.append('_subject', 'Choix de formule — ' + plan);
        send(data, '✅ Votre choix « ' + plan + ' » a bien été envoyé à EternaWeb.');
      }, true);
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready);
  else ready();
})();
