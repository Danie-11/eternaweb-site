// EternaWeb — libellé du bouton et bandeau de paiement du footer
(function () {
  'use strict';
  function init() {
    var sendBtn = document.getElementById('sendForm');
    if (sendBtn) {
      sendBtn.textContent = 'Envoyer';
      sendBtn.setAttribute('data-i18n', 'btn.send');
    }
    var footer = document.querySelector('footer.footer, footer.cv-footer, footer');
    if (!footer || document.getElementById('ewFooterPayment')) return;
    var strip = document.createElement('div');
    strip.id = 'ewFooterPayment';
    strip.setAttribute('aria-label', 'Paiement sécurisé');
    strip.innerHTML = '<div class="ew-footer-payment-title">🔒 Paiement sécurisé</div><div class="ew-footer-payment-logos"><span>CB</span><span>VISA</span><span>Mastercard</span><span>PayPal</span></div>';
    var copyright = footer.querySelector('.copyright');
    if (copyright) footer.insertBefore(strip, copyright); else footer.appendChild(strip);
    var style = document.createElement('style');
    style.textContent = '#ewFooterPayment{margin:18px auto 10px;padding:12px 10px;text-align:center;border-top:1px solid rgba(255,255,255,.18)}.ew-footer-payment-title{font-weight:700;margin-bottom:7px}.ew-footer-payment-logos{display:flex;justify-content:center;align-items:center;gap:7px;flex-wrap:wrap}.ew-footer-payment-logos span{display:inline-flex;align-items:center;justify-content:center;min-width:48px;height:25px;padding:0 7px;border-radius:5px;background:rgba(255,255,255,.92);color:#4a382b;font-size:.68rem;font-weight:800}@media(max-width:600px){.ew-footer-payment-logos{gap:5px}.ew-footer-payment-logos span{min-width:43px;height:23px;font-size:.63rem}}';
    document.head.appendChild(style);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true }); else init();
})();
