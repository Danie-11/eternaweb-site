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
    btn.addEventListener('click',function(e){
      e.preventDefault();
      window.location.href='./cv.html?plan='+encodeURIComponent(plan)+'#formules';
    });
  });
}

function fixPrimaryButtonText(){
  if(document.getElementById('ew-home-button-fix'))return;
  var style=document.createElement('style');
  style.id='ew-home-button-fix';
  style.textContent='.models .btn-primary,.models .btn-primary:visited,.models .btn-primary:hover,.models .btn-primary:focus{color:#fff!important;text-decoration:none!important;}';
  document.head.appendChild(style);
}

function simplifyHome(){
  var services=document.getElementById('services');
  if(services&&!services.dataset.ewHomeSimplified){
    services.dataset.ewHomeSimplified='1';
    var title=services.querySelector('h2');
    var sub=services.querySelector('p');
    var btn=services.querySelector('.btn');
    if(title)title.textContent='Nos exemples CV';
    if(sub)sub.textContent='Découvrez quelques modèles de CV EternaWeb';
    if(btn){
      btn.textContent='📄';
      btn.setAttribute('aria-label','Voir les exemples de CV');
      btn.setAttribute('title','Voir les exemples de CV');
    }
  }
  var pricing=document.getElementById('formules');
  if(pricing)pricing.style.display='none';
}

function setAboutMenu(){
  var link=document.querySelector('#mainMenu a[data-i18n="nav.temoignages"]');
  if(!link)return;
  link.textContent='À propos';
  link.setAttribute('data-i18n','nav.about');
  link.href='./a-propos.html';
}

function loadPaymentUI(){
  if(document.getElementById('eternawebPaymentScript'))return;
  var script=document.createElement('script');
  script.id='eternawebPaymentScript';
  script.src='./payment-ui.js?v=20260908';
  script.defer=true;
  document.body.appendChild(script);
}

function addFooter(){
  var footer=document.querySelector('footer.footer');
  if(!footer||footer.dataset.ewFooterDone)return;
  footer.dataset.ewFooterDone='1';
  footer.innerHTML=''
    +'<div class="ew-footer-inner">'
    +'<div class="ew-footer-brand">'
    +'<div class="ew-footer-globe" aria-hidden="true">🌐</div>'
    +'<div><div class="ew-footer-name">EternaWeb</div><p>Votre réussite en ligne, sans attendre.</p><p class="ew-footer-focus">CV professionnels · modernes · prêts à l’emploi</p></div>'
    +'</div>'
    +'<div class="ew-footer-grid">'
    +'<div class="ew-footer-col"><h3>Navigation</h3><a href="./index.html">Accueil</a><a href="./cv.html">CV</a><a href="#devis" id="ewFooterDevis">Vos informations</a><a href="./a-propos.html">À propos</a></div>'
    +'<div class="ew-footer-col"><h3>Services</h3><a href="./cv.html#formules">CV Starter</a><a href="./cv.html#formules">CV Boost</a><a href="./cv.html#formules">CV Premium</a><a href="./cv.html#formules">Lettre de motivation</a></div>'
    +'<div class="ew-footer-col"><h3>Contact</h3><a href="mailto:contact@eternaweb.fr">✉ contact@eternaweb.fr</a><a href="https://wa.me/33749723434" target="_blank" rel="noopener">💬 WhatsApp</a><a href="./faq.html">FAQ</a></div>'
    +'</div>'
    +'<div class="ew-footer-payment" aria-label="Moyens de paiement acceptés"><h3>🔒 Paiement sécurisé</h3><img src="images/payment-methods-eternaweb.svg" alt="Moyens de paiement acceptés : CB, Visa, Mastercard et PayPal"></div>'
    +'<div class="ew-footer-bottom"><div class="ew-footer-legal"><a href="./mentions-legales.html">Mentions légales</a><a href="./confidentialite.html">Confidentialité</a><a href="./code-de-conduite.html">Code de conduite</a></div><p class="copyright">© 2026 EternaWeb — Tous droits réservés</p></div>'
    +'</div>';

  var style=document.getElementById('ew-footer-style');
  if(!style){
    style=document.createElement('style');
    style.id='ew-footer-style';
    style.textContent=''
      +'.footer{width:100%!important;margin:28px 0 0!important;padding:0!important;background:#4b3028!important;color:#fff0e6!important;border-radius:0!important;overflow:hidden!important}'
      +'.ew-footer-inner{width:min(1120px,92%);margin:0 auto;padding:42px 0 20px}'
      +'.ew-footer-brand{display:flex;align-items:center;justify-content:center;gap:16px;text-align:left;margin-bottom:30px}'
      +'.ew-footer-globe{width:58px;height:58px;display:flex;align-items:center;justify-content:center;border:1px solid rgba(235,215,181,.45);border-radius:50%;background:rgba(235,215,181,.10);font-size:30px;flex:none}'
      +'.ew-footer-name{font-family:"Playfair Display",serif;font-size:1.65rem;font-weight:700;color:#f0d9ad;letter-spacing:.02em}'
      +'.ew-footer-brand p{margin:3px 0 0;color:#fff0e6;font-size:.92rem}'
      +'.ew-footer-brand .ew-footer-focus{color:#e2cda9;font-size:.78rem}'
      +'.ew-footer-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:30px;padding:26px 0;border-top:1px solid rgba(235,215,181,.20);border-bottom:1px solid rgba(235,215,181,.20)}'
      +'.ew-footer-col{display:flex;flex-direction:column;gap:8px}'
      +'.ew-footer-col h3,.ew-footer-payment h3{margin:0 0 7px;color:#f0d9ad;font-size:.95rem}'
      +'.ew-footer-col a,.ew-footer-legal a{color:#fff0e6!important;text-decoration:none;font-size:.84rem}'
      +'.ew-footer-col a:hover,.ew-footer-legal a:hover{text-decoration:underline;color:#f0d9ad!important}'
      +'.ew-footer-payment{display:flex;align-items:center;justify-content:center;gap:20px;text-align:center;padding:18px 0 14px;border-bottom:1px solid rgba(235,215,181,.20)}'
      +'.ew-footer-payment h3{margin:0!important;white-space:nowrap;font-size:.9rem!important}'
      +'.ew-footer-payment img{display:block;width:min(100%,300px);height:auto;margin:0;border-radius:10px;box-shadow:0 4px 14px rgba(0,0,0,.12)}'
      +'.ew-footer-bottom{display:flex;align-items:center;justify-content:space-between;gap:18px;padding-top:14px}'
      +'.ew-footer-legal{display:flex;flex-wrap:wrap;gap:12px 18px}'
      +'.ew-footer-bottom .copyright{margin:0;color:#dfccb0;font-size:.75rem;text-align:right}'
      +'@media(max-width:700px){.ew-footer-inner{width:90%;padding:24px 0 12px}.ew-footer-brand{justify-content:flex-start;gap:10px;margin-bottom:16px}.ew-footer-globe{width:44px;height:44px;font-size:22px}.ew-footer-name{font-size:1.25rem}.ew-footer-brand p{font-size:.76rem}.ew-footer-brand .ew-footer-focus{font-size:.64rem}.ew-footer-grid{grid-template-columns:1fr 1fr;gap:16px 12px;padding:16px 0}.ew-footer-col{gap:5px}.ew-footer-col h3{font-size:.8rem;margin-bottom:3px}.ew-footer-col a{font-size:.7rem}.ew-footer-payment{gap:10px;padding:12px 0 10px}.ew-footer-payment h3{font-size:.7rem!important}.ew-footer-payment img{width:min(100%,220px);border-radius:8px}.ew-footer-bottom{flex-direction:row;align-items:flex-end;gap:8px;padding-top:10px}.ew-footer-legal{gap:6px 10px}.ew-footer-legal a{font-size:.66rem}.ew-footer-bottom .copyright{font-size:.6rem;white-space:nowrap}}'
      +'@media(max-width:380px){.ew-footer-grid{grid-template-columns:1fr 1fr;gap:12px 8px}.ew-footer-brand{margin-bottom:12px}.ew-footer-name{font-size:1.15rem}.ew-footer-brand p{font-size:.7rem}.ew-footer-brand .ew-footer-focus{font-size:.58rem}.ew-footer-col a{font-size:.66rem}.ew-footer-payment{gap:7px}.ew-footer-payment h3{font-size:.62rem!important}.ew-footer-payment img{width:185px}.ew-footer-legal{gap:5px 8px}.ew-footer-legal a{font-size:.6rem}.ew-footer-bottom .copyright{font-size:.55rem}}';
    document.head.appendChild(style);
  }

  var devisLink=document.getElementById('ewFooterDevis');
  if(devisLink)devisLink.addEventListener('click',function(e){
    e.preventDefault();
    if(typeof window.openDevis==='function')window.openDevis();
    else{
      var d=document.getElementById('devis');
      if(d){d.classList.add('show','devis-open');d.setAttribute('aria-hidden','false');d.scrollIntoView({behavior:'smooth',block:'start'});}
    }
  });
}

function openFormFromCv(){
  var params=new URLSearchParams(window.location.search);
  var plan=params.get('plan');
  if(!plan||!document.getElementById('devis'))return;
  var names={starter:'CV Starter',boost:'CV Boost',premium:'CV Premium',letter:'Lettre de motivation – 7,99 €'};
  var selected=names[plan]||plan;
  try{localStorage.setItem('ew_selected_plan',selected)}catch(e){}
  function go(){
    if(typeof window.openDevis==='function')window.openDevis(selected);
    else{
      var d=document.getElementById('devis');
      var input=document.getElementById('planInput');
      var display=document.getElementById('planDisplay');
      if(input)input.value=selected;
      if(display)display.value=selected;
      if(d){d.classList.add('show','devis-open');d.setAttribute('aria-hidden','false');d.scrollIntoView({behavior:'smooth',block:'start'});}
    }
    window.dispatchEvent(new Event('eternaweb:plan-changed'));
  }
  setTimeout(go,120);
}

function start(){
  setFormulaLinks();
  fixPrimaryButtonText();
  simplifyHome();
  setAboutMenu();
  loadPaymentUI();
  addFooter();
  openFormFromCv();
}

if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});
else start();
})();
