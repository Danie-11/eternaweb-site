// EternaWeb — commande + paiement Stripe sur OVH
(function () {
  'use strict';
  var PRICES = { starter: 14.99, boost: 29.99, premium: 59.99, letter: 7.99 };
  var LABELS = { starter: 'Pack Starter', boost: 'Pack Boost', premium: 'Pack Premium', letter: 'Lettre de motivation' };
  function money(v) { return v.toFixed(2).replace('.', ',') + ' €'; }
  function keyFromValue(value) {
    value = String(value || '').toLowerCase();
    if (value.indexOf('premium') !== -1) return 'premium';
    if (value.indexOf('boost') !== -1) return 'boost';
    if (value.indexOf('starter') !== -1) return 'starter';
    if (value.indexOf('lettre') !== -1) return 'letter';
    return '';
  }
  function init() {
    var form = document.getElementById('devisForm');
    var planInput = document.getElementById('planInput');
    var planDisplay = document.getElementById('planDisplay');
    var sendBtn = document.getElementById('sendForm');
    if (!form || !planInput || !planDisplay || !sendBtn) return;
    var letterBox = form.querySelector('input[name="int"][value="Lettre de motivation"]');
    if (!letterBox) return;
    form.dataset.paymentFlow = 'stripe-ovh';
    window.ETERNAWEB_PAYMENT_MODE = true;

    var planLabel = planDisplay.closest('label');
    var carousel = document.getElementById('ewPlanCarousel');
    if (!carousel) {
      carousel = document.createElement('div');
      carousel.id = 'ewPlanCarousel';
      carousel.setAttribute('role', 'radiogroup');
      carousel.setAttribute('aria-label', 'Choisissez votre pack');
      carousel.innerHTML = '<button type="button" data-plan-key="starter" role="radio"><strong>📝 Pack Starter</strong><span>14,99 €</span></button><button type="button" data-plan-key="boost" role="radio"><strong>🚀 Pack Boost</strong><span>29,99 €</span></button><button type="button" data-plan-key="premium" role="radio"><strong>🌐 Pack Premium</strong><span>59,99 €</span></button>';
      if (planLabel) planLabel.insertAdjacentElement('beforebegin', carousel); else form.insertBefore(carousel, form.firstChild);
    }

    var summary = document.getElementById('orderSummary');
    if (!summary) {
      summary = document.createElement('div');
      summary.id = 'orderSummary';
      summary.setAttribute('aria-live', 'polite');
      summary.innerHTML = '<strong>Commande</strong><div id="orderSummaryText"></div>';
      sendBtn.insertAdjacentElement('beforebegin', summary);
    }
    var reassurance = document.getElementById('paymentReassurance');
    if (reassurance) reassurance.textContent = '🔒 Merci de régler votre commande avant sa prise en charge. Après confirmation du paiement, votre dossier sera transmis à EternaWeb.';

    var methods = document.getElementById('ewPaymentMethods');
    if (!methods) {
      methods = document.createElement('div');
      methods.id = 'ewPaymentMethods';
      methods.innerHTML = '<span class="ew-payment-title">🔒 Moyens de paiement acceptés</span><div class="ew-payment-logos"><span class="ew-pay-logo">CB</span><span class="ew-pay-logo">VISA</span><span class="ew-pay-logo">Mastercard</span><span class="ew-pay-logo">PayPal</span></div>';
      reassurance ? reassurance.insertAdjacentElement('afterend', methods) : sendBtn.insertAdjacentElement('beforebegin', methods);
    }

    var style = document.getElementById('eternaweb-payment-ui-style');
    if (!style) {
      style = document.createElement('style');
      style.id = 'eternaweb-payment-ui-style';
      style.textContent = '#ewPlanCarousel{display:flex;gap:10px;overflow-x:auto;padding:4px 2px 10px;margin:0 0 12px;scroll-snap-type:x mandatory}#ewPlanCarousel button{flex:0 0 180px;min-height:68px;padding:10px 12px;border:1px solid rgba(139,111,75,.22);border-radius:13px;background:#fffaf2;color:#4a382b;cursor:pointer;text-align:left;scroll-snap-align:start;box-shadow:0 4px 10px rgba(80,60,35,.07)}#ewPlanCarousel button strong{display:block;font-size:.9rem}.#ewPlanCarousel button span{display:block;margin-top:5px;font-weight:700}.#ewPlanCarousel button.is-selected{border:2px solid #c2a875;background:linear-gradient(180deg,#f9f0df,#fffaf2)}#orderSummary{margin:8px 0 14px;padding:14px 16px;border:1px solid rgba(139,111,75,.18);border-radius:14px;background:rgba(255,250,242,.78);text-align:center;color:#4a382b}#orderSummary strong{display:block;margin-bottom:5px}.payment-reassurance{text-align:center;line-height:1.5}.ew-payment-title{display:block;text-align:center;font-weight:700;color:#4a382b;margin:7px 0}.ew-payment-logos{display:flex;justify-content:center;gap:8px;flex-wrap:wrap;margin:0 0 12px}.ew-pay-logo{display:inline-flex;align-items:center;justify-content:center;min-width:58px;height:31px;padding:0 7px;border-radius:7px;background:#fff;border:1px solid rgba(80,60,35,.12);font-weight:800;font-size:.7rem}.ew-loading{opacity:.65;pointer-events:none}';
      document.head.appendChild(style);
    }

    function refresh() {
      var key = keyFromValue(planInput.value);
      var hasLetter = !!letterBox.checked;
      var parts = [], total = 0;
      if (key && key !== 'letter') { parts.push(LABELS[key]); total += PRICES[key]; }
      if (key === 'letter') { letterBox.checked = true; hasLetter = true; }
      if (hasLetter) { parts.push(LABELS.letter); total += PRICES.letter; }
      carousel.querySelectorAll('button[data-plan-key]').forEach(function (b) {
        var selected = b.dataset.planKey === key;
        b.classList.toggle('is-selected', selected);
        b.setAttribute('aria-checked', String(selected));
      });
      if (!parts.length) { summary.style.display = 'none'; sendBtn.disabled = true; return; }
      summary.style.display = 'block';
      summary.querySelector('#orderSummaryText').textContent = parts.join(' + ') + ' = ' + money(total);
      sendBtn.disabled = false;
      sendBtn.textContent = 'Envoyer';
    }

    function selectPlan(key) {
      if (!PRICES[key] || key === 'letter') return;
      var label = LABELS[key];
      planInput.value = label;
      planDisplay.value = label;
      try { localStorage.setItem('ew_selected_plan', label); } catch (e) {}
      window.dispatchEvent(new Event('eternaweb:plan-changed'));
      refresh();
    }

    carousel.querySelectorAll('button[data-plan-key]').forEach(function (button) {
      if (button.dataset.bound === '1') return;
      button.dataset.bound = '1';
      button.addEventListener('click', function () { selectPlan(button.dataset.planKey); });
    });
    letterBox.addEventListener('change', refresh);
    window.addEventListener('eternaweb:plan-changed', refresh);

    sendBtn.addEventListener('click', async function (event) {
      event.preventDefault(); event.stopPropagation();
      if (sendBtn.disabled) return;
      if (!form.reportValidity()) return;
      var key = keyFromValue(planInput.value);
      if (!key) { alert('Veuillez choisir une formule.'); return; }
      var email = form.querySelector('input[name="email"]');
      if (!email || !email.value.trim()) { alert('Veuillez renseigner votre e-mail.'); email && email.focus(); return; }
      var data = new FormData(form);
      data.set('plan', key);
      data.set('letter', letterBox.checked ? '1' : '0');
      sendBtn.classList.add('ew-loading');
      sendBtn.textContent = 'Préparation du paiement…';
      try {
        var response = await fetch('./api/create-checkout.php', { method: 'POST', body: data, headers: { 'Accept': 'application/json' } });
        var result = await response.json().catch(function () { return {}; });
        if (!response.ok || !result.url) throw new Error(result.error || 'Paiement indisponible.');
        window.location.href = result.url;
      } catch (error) {
        alert(error.message || 'Impossible de préparer le paiement.');
        sendBtn.classList.remove('ew-loading');
        sendBtn.textContent = 'Envoyer';
      }
    });

    var initialKey = keyFromValue(planInput.value);
    if (initialKey === 'letter') { letterBox.checked = true; refresh(); }
    else if (initialKey) selectPlan(initialKey);
    else refresh();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true }); else init();
})();
