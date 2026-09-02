// EternaWeb — commande + préparation du paiement
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
    var form = document.getElementById('devisForm'), planInput = document.getElementById('planInput'), planDisplay = document.getElementById('planDisplay'), sendBtn = document.getElementById('sendForm');
    if (!form || !planInput || !planDisplay || !sendBtn) return;
    form.dataset.paymentFlow = 'stripe'; window.ETERNAWEB_PAYMENT_MODE = true;
    var letterBox = form.querySelector('input[name="int"][value="Lettre de motivation"]');
    if (!letterBox) return;
    var letterLabel = letterBox.closest('label');
    if (letterLabel) { var oldPrice = letterLabel.querySelector('.addon-price'); if (oldPrice) oldPrice.remove(); }

    var planLabel = planDisplay.closest('label'), carousel = document.getElementById('ewPlanCarousel');
    if (!carousel) {
      carousel = document.createElement('div'); carousel.id = 'ewPlanCarousel'; carousel.setAttribute('role', 'radiogroup'); carousel.setAttribute('aria-label', 'Choisissez votre pack');
      carousel.innerHTML = '<button type="button" data-plan-key="starter" role="radio" aria-checked="false"><strong>📝 Pack Starter</strong><span>14,99 €</span></button><button type="button" data-plan-key="boost" role="radio" aria-checked="false"><strong>🚀 Pack Boost</strong><span>29,99 €</span></button><button type="button" data-plan-key="premium" role="radio" aria-checked="false"><strong>🌐 Pack Premium</strong><span>59,99 €</span></button>';
      if (planLabel) planLabel.insertAdjacentElement('beforebegin', carousel); else form.insertBefore(carousel, form.firstChild);
    }

    var summary = document.getElementById('orderSummary');
    if (!summary) { summary = document.createElement('div'); summary.id = 'orderSummary'; summary.setAttribute('aria-live', 'polite'); summary.innerHTML = '<strong>Commande</strong><div id="orderSummaryText"></div>'; }
    var reassurance = document.getElementById('paymentReassurance');
    if (!reassurance) { reassurance = document.createElement('p'); reassurance.id = 'paymentReassurance'; reassurance.className = 'tiny payment-reassurance'; }
    reassurance.textContent = '🔒 Votre demande sera transmise après confirmation du paiement. Paiement sécurisé par carte bancaire ou PayPal.';
    var methods = document.getElementById('ewPaymentMethods');
    if (!methods) {
      methods = document.createElement('div'); methods.id = 'ewPaymentMethods'; methods.setAttribute('aria-label', 'Moyens de paiement acceptés');
      methods.innerHTML = '<span class="ew-payment-title">🔒 Moyens de paiement acceptés</span><div class="ew-payment-logos"><span class="ew-pay-logo ew-cb">CB</span><span class="ew-pay-logo ew-visa">VISA</span><span class="ew-pay-logo ew-mastercard">Mastercard</span><span class="ew-pay-logo ew-paypal">PayPal</span></div>';
    }
    sendBtn.textContent = 'Payer'; sendBtn.setAttribute('data-i18n', 'btn.pay');
    sendBtn.insertAdjacentElement('afterend', reassurance);
    reassurance.insertAdjacentElement('afterend', methods);
    methods.insertAdjacentElement('afterend', summary);

    var style = document.getElementById('eternaweb-payment-ui-style');
    if (!style) {
      style = document.createElement('style'); style.id = 'eternaweb-payment-ui-style';
      style.textContent = '#ewPlanCarousel{display:flex;gap:10px;overflow-x:auto;padding:4px 2px 10px;margin:0 0 12px;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch}#ewPlanCarousel button{flex:0 0 180px;min-height:68px;padding:10px 12px;border:1px solid rgba(139,111,75,.22);border-radius:13px;background:#fffaf2;color:#4a382b;cursor:pointer;text-align:left;scroll-snap-align:start;box-shadow:0 4px 10px rgba(80,60,35,.07)}#ewPlanCarousel button strong{display:block;font-size:.9rem;line-height:1.2}#ewPlanCarousel button span{display:block;margin-top:5px;font-weight:700;font-size:.86rem}#ewPlanCarousel button.is-selected{border:2px solid #c2a875;background:linear-gradient(180deg,#f9f0df,#fffaf2);box-shadow:0 5px 14px rgba(80,60,35,.13)}#ewPlanCarousel button:focus-visible{outline:3px solid rgba(194,168,117,.45);outline-offset:2px}.payment-reassurance{margin:10px auto 5px;text-align:center;line-height:1.5}.ew-payment-title{display:block;text-align:center;font-weight:700;color:#4a382b;margin:5px 0 8px}.ew-payment-logos{display:flex;justify-content:center;align-items:center;gap:9px;flex-wrap:wrap;margin:0 0 12px}.ew-pay-logo{display:inline-flex;align-items:center;justify-content:center;min-width:62px;height:34px;padding:0 8px;border-radius:7px;background:#fff;border:1px solid rgba(80,60,35,.12);box-shadow:0 3px 8px rgba(80,60,35,.07);font-weight:800;font-size:.78rem}.ew-cb{background:linear-gradient(180deg,#eef9f7,#e7f4f0);font-size:.95rem}.ew-visa{letter-spacing:.04em}.ew-mastercard{font-size:.66rem}.ew-paypal{font-size:.8rem}.ew-payment-logos+.tiny{margin-top:4px}#orderSummary{margin:8px 0 14px;padding:14px 16px;border:1px solid rgba(139,111,75,.18);border-radius:14px;background:rgba(255,250,242,.78);text-align:center;color:#4a382b}#orderSummary strong{display:block;margin-bottom:5px}@media(max-width:600px){#ewPlanCarousel{gap:8px}#ewPlanCarousel button{flex-basis:155px;min-height:64px;padding:9px 10px}#ewPlanCarousel button strong{font-size:.82rem}#ewPlanCarousel button span{font-size:.78rem}.ew-payment-logos{gap:6px}.ew-pay-logo{min-width:54px;height:31px;padding:0 6px;font-size:.7rem}}
';
      document.head.appendChild(style);
    }
    function selectPlan(key) {
      if (!PRICES[key] || key === 'letter') return;
      var label = LABELS[key]; planInput.value = label; planDisplay.value = label; planDisplay.placeholder = label;
      carousel.querySelectorAll('button[data-plan-key]').forEach(function (button) { var selected = button.getAttribute('data-plan-key') === key; button.classList.toggle('is-selected', selected); button.setAttribute('aria-checked', String(selected)); });
      try { localStorage.setItem('ew_selected_plan', label); } catch (e) {}
      window.dispatchEvent(new Event('eternaweb:plan-changed')); refresh();
    }
    carousel.querySelectorAll('button[data-plan-key]').forEach(function (button) { if (button.dataset.bound === '1') return; button.dataset.bound = '1'; button.addEventListener('click', function () { selectPlan(button.getAttribute('data-plan-key')); }); });
    function refresh() {
      var key = getPlanKey(), hasLetter = !!letterBox.checked, parts = [], total = 0;
      if (key && key !== 'letter') { parts.push(LABELS[key]); total += PRICES[key]; }
      if (hasLetter) { parts.push(LABELS.letter); total += PRICES.letter; }
      if (key === 'letter') { letterBox.checked = true; parts = [LABELS.letter]; total = PRICES.letter; carousel.querySelectorAll('button[data-plan-key]').forEach(function (button) { button.classList.remove('is-selected'); button.setAttribute('aria-checked', 'false'); }); }
      if (!parts.length) { summary.style.display = 'none'; sendBtn.disabled = true; return; }
      summary.style.display = 'block'; document.getElementById('orderSummaryText').textContent = parts.join(' + ') + ' = ' + money(total); sendBtn.disabled = false; sendBtn.setAttribute('data-order-total', total.toFixed(2)); sendBtn.setAttribute('data-order-plan', parts.join(' + '));
    }
    letterBox.addEventListener('change', refresh); window.addEventListener('eternaweb:plan-changed', refresh);
    var initialKey = getPlanKey(); if (initialKey && initialKey !== 'letter') selectPlan(initialKey); else refresh();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true }); else init();
})();
