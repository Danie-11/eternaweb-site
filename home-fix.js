/* EternaWeb — accueil : navigation + présentation + commande */
(function(){
'use strict';
function setFormulaLinks(){
 document.querySelectorAll('.pricing-home .card .choose-plan').forEach(function(btn,i){
  if(btn.dataset.formulaLinkDone)return;
  btn.dataset.formulaLinkDone='1';
  var plan=['starter','boost','premium','letter'][i]||'starter';
  btn.textContent='Voir la formule'; btn.setAttribute('aria-label','Voir la formule'); btn.type='button';
  btn.addEventListener('click',function(e){e.preventDefault();window.location.href='./cv.html?plan='+encodeURIComponent(plan)+'#formules';});
 });
}
function fixPrimaryButtonText(){
 var style=document.getElementById('ew-home-button-fix'); if(style)return;
 style=document.createElement('style'); style.id='ew-home-button-fix';
 style.textContent='.models .btn-primary,.models .btn-primary:visited,.models .btn-primary:hover,.models .btn-primary:focus{color:#fff!important;text-decoration:none!important;}';
 document.head.appendChild(style);
}
function simplifyHome(){
 var services=document.getElementById('services');
 if(services&&!services.dataset.ewHomeSimplified){
  services.dataset.ewHomeSimplified='1';
  var title=services.querySelector('h2'), sub=services.querySelector('p'), btn=services.querySelector('.btn');
  if(title)title.textContent='Nos exemples CV';
  if(sub)sub.textContent='Découvrez quelques modèles de CV EternaWeb';
  if(btn){btn.textContent='📄';btn.setAttribute('aria-label','Voir les exemples de CV');btn.setAttribute('title','Voir les exemples de CV');}
 }
 var pricing=document.getElementById('formules');
 if(pricing){pricing.style.display='none';}
}
function setAboutMenu(){
 var link=document.querySelector('#mainMenu a[data-i18n="nav.temoignages"]');
 if(!link)return;
 link.textContent='À propos'; link.setAttribute('data-i18n','nav.about'); link.href='./a-propos.html';
}
function loadPaymentUI(){
 if(document.getElementById('eternawebPaymentScript'))return;
 var script=document.createElement('script'); script.id='eternawebPaymentScript'; script.src='./payment-ui.js'; script.defer=true; document.body.appendChild(script);
}
function openFormFromCv(){
 var params=new URLSearchParams(window.location.search), plan=params.get('plan');
 if(!plan||!document.getElementById('devis'))return;
 var names={starter:'CV Starter',boost:'CV Boost',premium:'CV Premium',letter:'Lettre de motivation – 7,99 €'}, selected=names[plan]||plan;
 try{localStorage.setItem('ew_selected_plan',selected)}catch(e){}
 function go(){
  if(typeof window.openDevis==='function')window.openDevis(selected);
  else{var d=document.getElementById('devis'),input=document.getElementById('planInput'),display=document.getElementById('planDisplay');if(input)input.value=selected;if(display)display.value=selected;if(d){d.classList.add('show','devis-open');d.setAttribute('aria-hidden','false');d.scrollIntoView({behavior:'smooth',block:'start'});}}
  window.dispatchEvent(new Event('eternaweb:plan-changed'));
 }
 setTimeout(go,120);
}
function start(){setFormulaLinks();fixPrimaryButtonText();simplifyHome();setAboutMenu();loadPaymentUI();openFormFromCv();}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();