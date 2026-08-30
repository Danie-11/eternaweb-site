/* EternaWeb — accueil : navigation des formules */
(function(){
'use strict';
function setFormulaLinks(){
 document.querySelectorAll('.pricing-home .card .choose-plan').forEach(function(btn,i){
  if(btn.dataset.formulaLinkDone)return;
  btn.dataset.formulaLinkDone='1';
  var card=btn.closest('.card');
  var title=card&&card.querySelector('h3')?card.querySelector('h3').textContent.trim():'';
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
function start(){setFormulaLinks();}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();