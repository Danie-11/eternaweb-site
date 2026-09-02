// EternaWeb — panier commande + préparation du paiement
(function () {
  'use strict';

  var PRICES = { starter: 14.99, boost: 29.99, premium: 59.99, letter: 7.99 };
  var LABELS = { starter: 'Pack Starter', boost: 'Pack Boost', premium: 'Pack Premium', letter: 'Lettre de motivation' };

  function money(value) { return value.toFixed(2).replace('.', ',') + ' €'; }

  function getPlanKey() {
    var input = document.getElementById('planInput');
    var value = input ? String(input.value || '').toLowerCase() : '';
    if (value.indexOf('premium') !== -1) return 'premium';
    if (value.indexOf('boost') !== -1) return 'boost';
    if (value.indexOf('starter') !== -1) return 'starter';
    if (value.indexOf('lettre') !== -1) return 'letter';
    return '';
  }

  function init() {
    var form = document.getElementById('devisForm');
    var planInput = document.getElementById('planInput');
    var sendBtn = document.getElementById('sendForm');
    var summary = document.getElementById('orderSummary');
    var reassurance = document.getElementById('paymentReassurance');
    var letterBox = form && form.querySelector('input[name="int"][value="Lettre de motivation"]');
    if (!form || !planInput || !sendBtn || !letterBox) return;

    letterBox.dataset.addonPrice = String(PRICES.letter);
    sendBtn.textContent = 'Payer';
    sendBtn.setAttribute('data-i18n', 'btn.pay');

    if (!summary) {
      summary = document.createElement('div');
      summary.id = 'orderSummary';
      summary.setAttribute('aria-live', 'polite');
      summary.innerHTML = '<strong>Commande</strong><div id="orderSummaryText"></div>';
      sendBtn.insertAdjacentElement('afterend', summary);
    }

    if (!reassurance) {
      reassurance = document.createElement('p');
      reassurance.id = 'paymentReassurance';
      reassurance.className = 'tiny payment-reassurance';
      reassurance.textContent = '🔒 Votre demande sera transmise après confirmation du paiement. Paiement sécurisé par carte bancaire ou PayPal.';
      sendBtn.insertAdjacentElement('afterend', reassurance);
      reassurance.insertAdjacentElement('afterend', summary);
    }

    if (!document.getElementById('eternaweb-payment-ui-style')) {
      var style = document.createElement('style');
      style.id = 'eternaweb-payment-ui-style';
      style.textContent = '#orderSummary{margin:8px 0 14px;padding:14px 16px;border:1px solid rgba(139,111,75,.18);border-radius:14px;background:rgba(255,250,242,.75);text-align:center;color:#4a382b}#orderSummary strong{display:block;margin-bottom:5px}.payment-reassurance{margin:10px auto 4px;text-align:center;line-height:1.5}.addon-price{display:inline-block;margin-left:7px;font-weight:600;opacity:.8}';
      document.head.appendChild(style);
    }

    function refresh() {
      var key = getPlanKey();
      var hasLetter = !!letterBox.checked;
      var parts = [];
      var total = 0;

      if (key) { parts.push(LABELS[key] + ' — ' + money(PRICES[key])); total += PRICES[key]; }
      if (hasLetter && key !== 'letter') { parts.push(LABELS.letter + ' — ' + money(PRICES.letter)); total += PRICES.letter; }
      if (key === 'letter') letterBox.checked = true;

      var text = document.getElementById('orderSummaryText');
      if (!parts.length) {
        summary.style.display = 'none';
        sendBtn.disabled = true;
        if (text) text.textContent = '';
        return;
      }

      summary.style.display = 'block';
      if (text) text.textContent = parts.join(' + ') + ' = ' + money(total);
      sendBtn.disabled = false;
      sendBtn.setAttribute('data-order-total', total.toFixed(2));
      sendBtn.setAttribute('data-order-plan', parts.join(' + '));
    }

    letterBox.addEventListener('change', refresh);
    planInput.addEventListener('input', refresh);
    planInput.addEventListener('change', refresh);
    window.addEventListener('eternaweb:plan-changed', refresh);

    var observer = new MutationObserver(refresh);
    observer.observe(planInput, { attributes: true, attributeFilter: ['value'] });
    refresh();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
