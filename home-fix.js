/* EternaWeb — accueil : navigation des formules */
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
function openFormFromCv(){
 var params=new URLSearchParams(window.location.search);
 var plan=params.get('plan');
 if(!plan || !document.getElementById('devis'))return;
 var names={starter:'CV Starter',boost:'CV Boost',premium:'CV Premium',letter:'Lettre de motivation – 7,99 €'};
 var selected=names[plan]||plan;
 try{localStorage.setItem('ew_selected_plan',selected)}catch(e){}
 function go(){
  if(typeof window.openDevis==='function') window.openDevis(selected);
  else {
   var d=document.getElementById('devis');
   var input=document.getElementById('planInput'),display=document.getElementById('planDisplay');
   if(input)input.value=selected;if(display)display.value=selected;
   if(d){d.classList.add('show','devis-open');d.setAttribute('aria-hidden','false');d.scrollIntoView({behavior:'smooth',block:'start'});}
  }
 }
 setTimeout(go,120);
}
function start(){setFormulaLinks();openFormFromCv();}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();