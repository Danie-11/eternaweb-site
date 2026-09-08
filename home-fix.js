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
    +'<div class="ew-footer-grid"><div class="ew-footer-col"><h3>Navigation</h3><a href="./index.html">Accueil</a><a href="./cv.html">CV</a><a href="#devis" id="ewFooterDevis">Vos informations</a><a href="./a-propos.html">À propos</a></div><div class="ew-footer-col"><h3>Services</h3><a href="./cv.html#formules">CV Starter</a><a href="./cv.html#formules">CV Boost</a><a href="./cv.html#formules">CV Premium</a><a href="./cv.html#formules">Lettre de motivation</a></div><div class="ew-footer-col"><h3>Contact</h3><a href="mailto:contact@eternaweb.fr">✉ contact@eternaweb.fr</a><a href="https://wa.me/33749723434" target="_blank" rel="noopener">💬 WhatsApp</a><a href="./faq.html">FAQ</a></div></div>'
    +'<div class="ew-footer-payment" aria-label="Moyens de paiement acceptés"><h3>🔒 Paiement sécurisé</h3><img src="images/payment-methods-eternaweb.svg" alt="Moyens de paiement acceptés : CB, Visa, Mastercard et PayPal"></div>'
    +'<div class="ew-footer-bottom"><div class="ew-footer-legal"><a href="./mentions-legales.html">Mentions légales</a><a href="./confidentialite.html">Confidentialité</a><a href="./code-de-conduite.html">Code de conduite</a></div><p class="copyright">© 2026 EternaWeb — Tous droits réservés</p></div></div>';
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
      +'.ew-footer-payment{display:flex;align-items:center;justify-content:center;gap:16px;padding:14px 0 10px}'
      +'.ew-footer-payment h3{margin:0;color:#f0d9ad;font-size:.9rem;white-space:nowrap}'
      +'.ew-footer-payment img{display:block;width:210px;height:auto;margin:0;border-radius:7px;box-shadow:0 3px 9px rgba(0,0,0,.10)}'
      +'.ew-footer-bottom{display:flex;align-items:center;justify-content:space-between;gap:16px;padding-top:12px}'
      +'.ew-footer-legal{display:flex;flex-wrap:wrap;gap:10px 16px}'
      +'.ew-footer-bottom .copyright{margin:0;color:#dfccb0;font-size:.72rem;text-align:right}'
      +'@media(max-width:700px){.ew-footer-inner{width:90%;padding:22px 0 12px}.ew-footer-brand{justify-content:flex-start;gap:9px;margin-bottom:16px}.ew-footer-globe{width:42px;height:42px;font-size:21px}.ew-footer-name{font-size:1.22rem}.ew-footer-brand p{font-size:.74rem}.ew-footer-brand .ew-footer-focus{font-size:.62rem}.ew-footer-grid{grid-template-columns:1fr 1fr;gap:16px 12px;padding:16px 0}.ew-footer-col h3{font-size:.8rem}.ew-footer-col a,.ew-footer-legal a{font-size:.69rem}.ew-footer-payment{gap:8px;padding:12px 0 8px;flex-wrap:nowrap}.ew-footer-payment h3{font-size:.68rem}.ew-footer-payment img{width:165px;border-radius:6px}.ew-footer-bottom{flex-direction:row;align-items:flex-start;gap:6px;padding-top:8px}.ew-footer-legal{gap:5px 8px}.ew-footer-bottom .copyright{font-size:.59rem;text-align:right;white-space:nowrap}}'
      +'@media(max-width:380px){.ew-footer-payment{gap:5px}.ew-footer-payment h3{font-size:.62rem}.ew-footer-payment img{width:145px}.ew-footer-bottom{flex-direction:column}.ew-footer-bottom .copyright{text-align:left}.ew-footer-grid{grid-template-columns:1fr 1fr}.ew-footer-brand{align-items:flex-start}}';
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
