// EternaWeb — wording du parcours de commande
(function () {
  'use strict';
  function init() {
    var sendBtn = document.getElementById('sendForm');
    if (sendBtn) {
      sendBtn.textContent = 'Envoyer';
      sendBtn.setAttribute('data-i18n', 'btn.send');
    }
    var reassurance = document.getElementById('paymentReassurance');
    if (reassurance) reassurance.textContent = '🔒 Vous pouvez régler votre commande ici. Merci de régler votre commande avant sa prise en charge. Après confirmation du paiement, nous recevrons votre dossier.';
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true }); else init();
})();
