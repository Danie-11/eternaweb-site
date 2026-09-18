/* EternaWeb — nettoyage final + bloc Pourquoi EternaWeb sur l'accueil */
(function(){
  'use strict';

  function clean(){
    var replacements=[
      ['contact@eternaweb.com','contact@eternaweb.fr'],
      ['contact@eternaweb.fr.com','contact@eternaweb.fr'],
      ['eternaweb.contact@gmail.com','contact@eternaweb.fr'],
      ['eternaweb.com','eternaweb.fr']
    ];
    document.querySelectorAll('a[href]').forEach(function(a){
      var href=a.getAttribute('href');
      if(!href)return;
      replacements.forEach(function(pair){href=href.split(pair[0]).join(pair[1]);});
      a.setAttribute('href',href);
    });
    var walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null);
    var node;
    while(node=walker.nextNode()){
      var value=node.nodeValue;
      var next=value;
      replacements.forEach(function(pair){next=next.split(pair[0]).join(pair[1]);});
      if(next!==value)node.nodeValue=next;
    }
  }

  function addHomeBenefits(){
    var path=window.location.pathname.replace(/\/+$/,'');
    var isHome=(path===''||path==='/'||/\/index\.html$/i.test(path));
    if(!isHome || document.getElementById('home-benefits'))return;
    var hero=document.querySelector('.hero-gold');
    if(!hero)return;

    var style=document.createElement('style');
    style.id='home-benefits-style';
    style.textContent=''+
      '#home-benefits{width:min(1100px,100%);margin:20px auto 24px;padding:26px 20px;background:#fff;border:1px solid rgba(92,65,48,.10);border-radius:22px;box-shadow:0 8px 22px rgba(73,50,38,.07);text-align:center;box-sizing:border-box}'+
      '#home-benefits h2{margin:0 0 18px;color:#3f2b21;font-size:clamp(1.45rem,3vw,2rem)}'+
      '#home-benefits .benefit-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}'+
      '#home-benefits .benefit{padding:15px 10px}'+
      '#home-benefits .benefit strong{display:block;margin-bottom:5px;color:#3f2b21}'+
      '#home-benefits .benefit span{font-size:.9rem;line-height:1.45;color:#62564f}'+
      '@media(max-width:800px){#home-benefits .benefit-grid{grid-template-columns:repeat(2,1fr)}}'+
      '@media(max-width:600px){#home-benefits{padding:22px 13px;border-radius:18px;margin-top:16px}#home-benefits .benefit-grid{grid-template-columns:1fr 1fr;gap:6px}#home-benefits .benefit{padding:12px 6px}#home-benefits .benefit span{font-size:.82rem}}';
    document.head.appendChild(style);

    var section=document.createElement('section');
    section.id='home-benefits';
    section.setAttribute('aria-labelledby','home-benefits-title');
    section.innerHTML='<h2 id="home-benefits-title">Pourquoi EternaWeb ?</h2>'+
      '<div class="benefit-grid">'+
      '<div class="benefit"><strong>🎯 Clair</strong><span>Votre parcours est présenté pour que l’essentiel soit rapidement visible.</span></div>'+
      '<div class="benefit"><strong>✨ Personnalisé</strong><span>Votre CV est adapté à votre profil et à votre objectif.</span></div>'+
      '<div class="benefit"><strong>⚡ Rapide</strong><span>Pour les commandes accompagnées, livraison sous 24 à 48 h.</span></div>'+
      '<div class="benefit"><strong>💳 Sécurisé</strong><span>Paiement en ligne sécurisé et commande confirmée avant traitement.</span></div>'+
      '</div>';
    hero.insertAdjacentElement('afterend',section);
  }

  function updateModeEmploi(){
    var steps=document.querySelectorAll('.mode-emploi .mode-step');
    if(steps.length<4)return;
    var data=[
      ['Choisissez votre formule','Starter, Boost, Premium ou Lettre de motivation.'],
      ['Remplissez vos informations','Après avoir choisi votre formule, renseignez vos informations et ajoutez votre CV ou vos documents si nécessaire.'],
      ['Validez et payez en ligne','Votre commande est confirmée après le paiement sécurisé.'],
      ['Recevez votre document','EternaWeb traite votre demande et vous recevez votre document sous 24 à 48 h.']
    ];
    steps.forEach(function(step,index){
      if(!data[index])return;
      var title=step.querySelector('h3');
      var text=step.querySelector('p');
      if(title)title.textContent=data[index][0];
      if(text)text.textContent=data[index][1];
    });
  }

  function init(){
    clean();
    addHomeBenefits();
    updateModeEmploi();
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();