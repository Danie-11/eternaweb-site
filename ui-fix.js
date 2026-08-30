/* EternaWeb — sécurité UI + compactage accueil */
(function(){
  'use strict';
  function ready(fn){if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',fn,{once:true});else fn();}
  function openDevisFallback(){var devis=document.getElementById('devis');if(!devis)return;devis.classList.add('show','devis-open');devis.setAttribute('aria-hidden','false');try{devis.scrollIntoView({behavior:'smooth',block:'start'});}catch(e){devis.scrollIntoView();}}
  function compactHome(){
    if(document.getElementById('eternaweb-compact-home'))return;
    var s=document.createElement('style');s.id='eternaweb-compact-home';
    s.textContent=''+
    '@media(max-width:600px){'+
      '.hero-gold{width:92%!important;margin:10px auto!important;padding:8px!important;border-radius:15px!important}'+
      '.hero-gold .hero-wrap{gap:.35rem!important;padding:.55rem .25rem!important}'+
      '.hero-gold img.hero-logo{width:62px!important;max-width:62px!important}'+
      '.hero-gold .gold-sub{font-size:18px!important;line-height:1.25!important;margin:0 0 2px!important}'+
      '.hero-gold .gold-lead{font-size:13px!important;line-height:1.35!important;margin:0!important;max-width:340px}'+
      '.hero-gold .cta-row{margin-top:7px!important}'+
      '#services.models{width:max-content!important;max-width:92%!important;padding:8px 14px!important;margin:8px auto!important;border-radius:13px!important}'+
      '#services.models h2,#services.models p{display:none!important}'+
      '#services.models .cta-row{margin:0!important}'+
      '#services.models .btn{padding:7px 14px!important;font-size:12px!important}'+
      '.pricing-home{width:96%!important;margin:12px auto 16px!important;padding:14px 8px!important;border-radius:16px!important}'+
      '.pricing-home h2{font-size:1.45rem!important;margin-bottom:3px!important}'+
      '.pricing-home>p{font-size:.82rem!important;line-height:1.3!important;margin:0 auto 10px!important}'+
      '.pricing-home .pricing-cards{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:8px!important;margin-top:8px!important}'+
      '.pricing-home .card{min-width:0!important;width:auto!important;max-width:none!important;padding:10px 9px!important;border-radius:12px!important;box-shadow:0 4px 10px rgba(0,0,0,.08)!important}'+
      '.pricing-home .card h3{font-size:.78rem!important;line-height:1.22!important;margin-bottom:5px!important}'+
      '.pricing-home .card ul{font-size:.70rem!important;line-height:1.28!important;margin:6px 0 8px!important;padding-left:14px!important}'+
      '.pricing-home .card li{margin-bottom:2px!important}'+
      '.pricing-home .card p{font-size:.68rem!important;line-height:1.25!important;margin:5px 0 7px!important}'+
      '.pricing-home .card .btn{width:100%!important;padding:7px 4px!important;font-size:.63rem!important;line-height:1.15!important;border-radius:8px!important}'+
      '#temoignages.testimonials{width:88%!important;max-width:390px!important;margin:14px auto!important;padding:10px 12px!important;border-radius:14px!important}'+
      '#temoignages h2{font-size:1.05rem!important;margin-bottom:5px!important}'+
      '#temoignages .t-grid{gap:2px!important}'+
      '#temoignages blockquote{padding:5px 4px!important;font-size:.68rem!important;line-height:1.25!important}'+
      '#temoignages blockquote cite{margin-top:2px!important;font-size:.68rem!important}'+
      '.footer{width:94%!important;margin:14px auto 0!important;padding:10px 8px!important;border-radius:12px!important}'+
      '.footer-info{gap:7px 10px!important;font-size:.65rem!important;line-height:1.2!important}'+
      '.copyright{font-size:.62rem!important}'+
    '}'+
    '@media(max-width:380px){.pricing-home .card h3{font-size:.72rem!important}.pricing-home .card ul{font-size:.64rem!important}.pricing-home .card p{font-size:.62rem!important}.pricing-home .card .btn{font-size:.58rem!important}}'+
    '@media(min-width:601px){'+
      '.hero-gold{max-width:860px!important;padding:20px 18px!important}'+
      '.hero-gold img.hero-logo{width:82px!important;max-width:82px!important}'+
      '#services.models{max-width:420px!important;padding:14px 20px!important}'+
      '.pricing-home{max-width:1120px!important;padding:24px 18px!important}'+
      '.pricing-home .pricing-cards{gap:16px!important}'+
      '.pricing-home .card{padding:18px!important}'+
      '#temoignages.testimonials{max-width:760px!important;padding:14px 16px!important}'+
      '#temoignages .t-grid{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:8px!important}'+
      '#temoignages blockquote{padding:8px!important;font-size:.86rem!important}'+
    '}';
    document.head.appendChild(s);
  }
  function loadHomeFix(){if(document.getElementById('homeFixScript'))return;var s=document.createElement('script');s.id='homeFixScript';s.src='./home-fix.js';s.defer=true;document.body.appendChild(s);}
  function init(){
    compactHome();
    var menuBtn=document.getElementById('menuBtn'),mainMenu=document.getElementById('mainMenu'),langBtn=document.getElementById('langBtn'),langMenu=document.getElementById('langMenu'),goDevis=document.getElementById('goDevis');
    if(document.getElementById('services'))loadHomeFix();
    if(menuBtn&&mainMenu&&!menuBtn.dataset.uiFixBound){menuBtn.dataset.uiFixBound='1';menuBtn.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();var open=mainMenu.classList.toggle('show');menuBtn.setAttribute('aria-expanded',String(open));});}
    if(langBtn&&langMenu&&!langBtn.dataset.uiFixBound){langBtn.dataset.uiFixBound='1';langBtn.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();var open=langMenu.classList.toggle('show');langBtn.setAttribute('aria-expanded',String(open));});}
    document.querySelectorAll('.lang-item[data-lang]').forEach(function(item){if(item.dataset.uiFixBound)return;item.dataset.uiFixBound='1';item.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();var lang=(item.dataset.lang||'fr').toLowerCase();try{localStorage.setItem('eternaweb-lang',lang);}catch(err){}if(typeof window.applyLang==='function')window.applyLang(lang);else document.documentElement.lang=lang;if(langMenu)langMenu.classList.remove('show');if(langBtn)langBtn.setAttribute('aria-expanded','false');});});
    if(goDevis&&!goDevis.dataset.uiFixBound){goDevis.dataset.uiFixBound='1';goDevis.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();if(typeof window.openDevis==='function')window.openDevis();else openDevisFallback();});}
    document.addEventListener('click',function(e){if(langMenu&&langBtn&&!langBtn.contains(e.target)&&!langMenu.contains(e.target)){langMenu.classList.remove('show');langBtn.setAttribute('aria-expanded','false');}if(mainMenu&&menuBtn&&!menuBtn.contains(e.target)&&!mainMenu.contains(e.target)){mainMenu.classList.remove('show');menuBtn.setAttribute('aria-expanded','false');}});
  }
  ready(init);
})();
