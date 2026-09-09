/* EternaWeb — accueil : navigation + commande + footer */
(function(){
'use strict';

function setFormulaLinks(){
  document.querySelectorAll('.pricing-home .card .choose-plan').forEach(function(btn,i){
    if(btn.dataset.formulaLinkDone)return;
    btn.dataset.formulaLinkDone='1';
    var plan=['starter','boost','premium','letter'][i]||'starter';
    btn.textContent='Voir la formule';
    btn.setAttribute('aria-label','Voir la formule');
    btn.type='button';
    btn.addEventListener('click',function(e){e.preventDefault();window.location.href='./cv.html?plan='+encodeURIComponent(plan)+'#formules';});
  });
}
function fixPrimaryButtonText(){
  if(document.getElementById('ew-home-button-fix'))return;
  var style=document.createElement('style');style.id='ew-home-button-fix';
  style.textContent='.models .btn-primary,.models .btn-primary:visited,.models .btn-primary:hover,.models .btn-primary:focus{color:#fff!important;text-decoration:none!important;}';
  document.head.appendChild(style);
}
function simplifyHome(){
  var services=document.getElementById('services');
  if(services&&!services.dataset.ewHomeSimplified){
    services.dataset.ewHomeSimplified='1';var title=services.querySelector('h2'),sub=services.querySelector('p'),btn=services.querySelector('.btn');
    if(title)title.textContent='Nos exemples CV';if(sub)sub.textContent='Découvrez quelques modèles de CV EternaWeb';
    if(btn){btn.textContent='📄';btn.setAttribute('aria-label','Voir les exemples de CV');btn.setAttribute('title','Voir les exemples de CV');}
  }
  var pricing=document.getElementById('formules');if(pricing)pricing.style.display='none';
}
function setAboutMenu(){
  var link=document.querySelector('#mainMenu a[data-i18n="nav.temoignages"]');if(!link)return;
  link.textContent='À propos';link.setAttribute('data-i18n','nav.about');link.href='./a-propos.html';
}
function loadPaymentUI(){
  if(document.getElementById('eternawebPaymentScript'))return;
  var script=document.createElement('script');script.id='eternawebPaymentScript';script.src='./payment-ui.js?v=20260908';script.defer=true;document.body.appendChild(script);
}
function addFooter(){
  var footer=document.querySelector('footer.footer');if(!footer||footer.dataset.ewFooterDone)return;footer.dataset.ewFooterDone='1';
  footer.innerHTML=''
    +'<div class="ew-footer-inner">'
    +'<div class="ew-footer-brand"><div class="ew-footer-globe" aria-hidden="true">🌐</div><div><div class="ew-footer-name">EternaWeb</div><p>Votre réussite en ligne, sans attendre.</p><p class="ew-footer-focus">CV professionnels · modernes · prêts à l’emploi</p></div></div>'
    +'<div class="ew-footer-grid"><div class="ew-footer-col"><h3>Navigation</h3><a href="./index.html">Accueil</a><a href="./cv.html">CV</a><a href="#devis" id="ewFooterDevis">Vos informations</a><a href="./a-propos.html">À propos</a></div><div class="ew-footer-col"><h3>Services</h3><a href="./cv.html#formules">CV Starter</a><a href="./cv.html#formules">CV Boost</a><a href="./cv.html#formules">CV Premium</a><a href="./cv.html#formules">Lettre de motivation</a></div><div class="ew-footer-col"><h3>Contact</h3><a href="mailto:eternaweb.contact@gmail.com">✉ eternaweb.contact@gmail.com</a><a href="https://wa.me/33749723434" target="_blank" rel="noopener">💬 WhatsApp</a><a href="./faq.html">FAQ</a></div></div>'
    +'<div class="ew-footer-payment" aria-label="Paiement sécurisé et moyens de paiement acceptés"><div class="ew-payment-title"><span class="ew-payment-lock" aria-hidden="true">🔒</span><div><h3>Paiement sécurisé</h3><p>Vos données sont protégées</p></div></div><div class="ew-payment-icons" aria-label="CB, Visa, Mastercard et PayPal"><span>CB</span><span>VISA</span><span class="ew-payment-mc"><i></i><i></i></span><span>PayPal</span></div></div>'
    +'<div class="ew-footer-bottom"><div class="ew-footer-legal"><a href="./mentions-legales.html">Mentions légales</a><a href="./confidentialite.html">Confidentialité</a><a href="./code-de-conduite.html">Code de conduite</a></div><p class="copyright">© 2025 EternaWeb — Tous droits réservés</p></div></div>';
  var style=document.getElementById('ew-footer-style');
  if(!style){
    style=document.createElement('style');style.id='ew-footer-style';
    style.textContent=''
      +'.footer{width:100%!important;margin:28px 0 0!important;padding:0!important;background:#4b3028!important;color:#fff0e6!important;border-radius:0!important;overflow:hidden!important}'
      +'.ew-footer-inner{width:min(1120px,92%);margin:0 auto;padding:36px 0 16px}'
      +'.ew-footer-brand{display:flex;align-items:center;justify-content:center;gap:14px;text-align:left;margin-bottom:24px}'
      +'.ew-footer-globe{width:54px;height:54px;display:flex;align-items:center;justify-content:center;border:1px solid rgba(235,215,181,.45);border-radius:50%;background:rgba(235,215,181,.10);font-size:28px;flex:none}'
      +'.ew-footer-name{font-family:"Playfair Display",serif;font-size:1.6rem;font-weight:700;color:#f0d9ad;letter-spacing:.02em}'
      +'.ew-footer-brand p{margin:3px 0 0;color:#fff0e6;font-size:.9rem}'
      +'.ew-footer-brand .ew-footer-focus{color:#e2cda9;font-size:.76rem}'
      +'.ew-footer-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;padding:22px 0;border-top:1px solid rgba(235,215,181,.20);border-bottom:1px solid rgba(235,215,181,.20)}'
      +'.ew-footer-col{display:flex;flex-direction:column;gap:7px}'
      +'.ew-footer-col h3{margin:0 0 5px;color:#f0d9ad;font-size:.92rem}'
      +'.ew-footer-col a,.ew-footer-legal a{color:#fff0e6!important;text-decoration:none;font-size:.82rem}'
      +'.ew-footer-col a:hover,.ew-footer-legal a:hover{text-decoration:underline;color:#f0d9ad!important}'
      +'.ew-footer-payment{display:flex;align-items:center;justify-content:center;gap:26px;padding:14px 0 10px;border-bottom:1px solid rgba(235,215,181,.20)}'
      +'.ew-payment-title{display:flex;align-items:center;gap:9px;min-width:230px}'
      +'.ew-payment-lock{font-size:25px;line-height:1}'
      +'.ew-payment-title h3{margin:0;color:#f0d9ad;font-size:.92rem;white-space:nowrap}'
      +'.ew-payment-title p{margin:2px 0 0;color:#fff0e6;font-size:.68rem}'
      +'.ew-payment-icons{display:flex;align-items:center;gap:8px;flex-wrap:nowrap}'
      +'.ew-payment-icons span{width:68px;height:34px;display:flex;align-items:center;justify-content:center;background:#fffaf3;border:1px solid rgba(90,65,45,.10);border-radius:6px;color:#254a68;font-weight:700;font-size:.72rem;box-shadow:0 2px 6px rgba(0,0,0,.08)}'
      +'.ew-payment-mc{position:relative;overflow:hidden}'
      +'.ew-payment-mc i{position:absolute;width:17px;height:17px;border-radius:50%;display:block}'
      +'.ew-payment-mc i:first-child{background:#eb001b;left:20px}'
      +'.ew-payment-mc i:last-child{background:#f79e1b;left:31px}'
      +'.ew-payment-mc:after{content:"";position:absolute;left:28px;width:7px;height:17px;background:#ff5f00;opacity:.8}'
      +'.ew-footer-bottom{display:flex;align-items:center;justify-content:space-between;gap:16px;padding-top:12px}'
      +'.ew-footer-legal{display:flex;flex-wrap:wrap;gap:10px 16px}'
      +'.ew-footer-bottom .copyright{margin:0;color:#dfccb0;font-size:.72rem;text-align:right}'
      +'@media(min-width:701px){.footer{width:100vw!important;position:relative!important;left:50%!important;transform:translateX(-50%)!important}.ew-footer-inner{max-width:1120px!important;margin-left:auto!important;margin-right:auto!important}.ew-footer-grid,.ew-footer-payment,.ew-footer-bottom{max-width:100%!important}.ew-footer-col{text-align:center;align-items:center}.ew-footer-legal{justify-content:center}.ew-footer-bottom{justify-content:center;flex-direction:column;gap:7px}.ew-footer-bottom .copyright{text-align:center}}'
      +'@media(max-width:700px){.ew-footer-inner{width:90%;padding:22px 0 12px}.ew-footer-brand{justify-content:flex-start;gap:9px;margin-bottom:16px}.ew-footer-globe{width:42px;height:42px;font-size:21px}.ew-footer-name{font-size:1.22rem}.ew-footer-brand p{font-size:.74rem}.ew-footer-brand .ew-footer-focus{font-size:.62rem}.ew-footer-grid{grid-template-columns:1fr 1fr;gap:16px 12px;padding:16px 0}.ew-footer-col h3{font-size:.8rem}.ew-footer-col a,.ew-footer-legal a{font-size:.69rem}.ew-footer-payment{gap:7px;padding:10px 0 8px;flex-wrap:nowrap}.ew-payment-title{min-width:auto;gap:5px}.ew-payment-lock{font-size:17px}.ew-payment-title h3{font-size:.64rem}.ew-payment-title p{font-size:.48rem}.ew-payment-icons{gap:4px}.ew-payment-icons span{width:39px;height:24px;font-size:.55rem;border-radius:4px}.ew-payment-mc i{width:11px;height:11px}.ew-payment-mc i:first-child{left:11px}.ew-payment-mc i:last-child{left:18px}.ew-payment-mc:after{left:16px;width:5px;height:11px}.ew-footer-bottom{flex-direction:row;align-items:flex-start;gap:6px;padding-top:8px}.ew-footer-legal{gap:5px 8px}.ew-footer-bottom .copyright{font-size:.59rem;text-align:right;white-space:nowrap}}'
      +'@media(max-width:380px){.ew-footer-payment{gap:5px}.ew-payment-title h3{font-size:.58rem}.ew-payment-title p{font-size:.43rem}.ew-payment-icons{gap:3px}.ew-payment-icons span{width:34px;height:22px;font-size:.5rem}.ew-payment-mc i{width:10px;height:10px}.ew-payment-mc i:first-child{left:9px}.ew-payment-mc i:last-child{left:15px}.ew-payment-mc:after{left:13px;width:4px;height:10px}.ew-footer-bottom{flex-direction:column}.ew-footer-bottom .copyright{text-align:left}.ew-footer-grid{grid-template-columns:1fr 1fr}.ew-footer-brand{align-items:flex-start}}';
    document.head.appendChild(style);
  }
  var devisLink=document.getElementById('ewFooterDevis');
  if(devisLink)devisLink.addEventListener('click',function(e){e.preventDefault();if(typeof window.openDevis==='function')window.openDevis();else{var d=document.getElementById('devis');if(d){d.classList.add('show','devis-open');d.setAttribute('aria-hidden','false');d.scrollIntoView({behavior:'smooth',block:'start'});}}});
}
function openFormFromCv(){
  var params=new URLSearchParams(window.location.search),plan=params.get('plan');if(!plan||!document.getElementById('devis'))return;
  var names={starter:'CV Starter',boost:'CV Boost',premium:'CV Premium',letter:'Lettre de motivation – 7,99 €'},selected=names[plan]||plan;
  try{localStorage.setItem('ew_selected_plan',selected)}catch(e){}
  function go(){if(typeof window.openDevis==='function')window.openDevis(selected);else{var d=document.getElementById('devis'),input=document.getElementById('planInput'),display=document.getElementById('planDisplay');if(input)input.value=selected;if(display)display.value=selected;if(d){d.classList.add('show','devis-open');d.setAttribute('aria-hidden','false');d.scrollIntoView({behavior:'smooth',block:'start'});}}window.dispatchEvent(new Event('eternaweb:plan-changed'));}
  setTimeout(go,120);
}
function start(){setFormulaLinks();fixPrimaryButtonText();simplifyHome();setAboutMenu();loadPaymentUI();addFooter();openFormFromCv();}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
