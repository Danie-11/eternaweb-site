/* EternaWeb — menu principal : À propos → CGV */
(function(){
  'use strict';
  function fix(){
    var link=document.querySelector('#mainMenu a[data-i18n="nav.a-propos"],#mainMenu a[href*="a-propos.html"]');
    if(!link)return;
    link.textContent='CGV';
    link.setAttribute('data-i18n','nav.cgv');
    link.href='./cgv.html';
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',fix,{once:true});
  else fix();
})();
