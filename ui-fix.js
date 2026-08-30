/* EternaWeb — sécurité UI + compactage accueil + avis */
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
  function setupAvis(){
    if(document.getElementById('eternaweb-avis-ui'))return;
    var section=document.getElementById('temoignages');
    if(!section)return;
    var style=document.createElement('style');style.id='eternaweb-avis-ui';
    style.textContent='#temoignages.avis-section{width:min(760px,92%);margin:18px auto 24px;padding:18px 16px;text-align:center;background:rgba(255,255,255,.94);border-radius:18px;box-shadow:0 8px 24px rgba(73,50,38,.08)}#temoignages.avis-section h2{margin:0 0 6px;color:#243d58}#temoignages .avis-sub{margin:0 auto 12px;color:#596879;font-size:.92rem}.avis-open-btn{border:0;cursor:pointer;padding:11px 18px;border-radius:10px;font-weight:700;font-size:.9rem;background:linear-gradient(180deg,#d7c39a,#c2a875);color:#fff;box-shadow:0 5px 12px rgba(80,60,35,.12)}.avis-open-btn:active{transform:translateY(1px)}#eternaweb-avis-modal{position:fixed;inset:0;z-index:9999;display:none;align-items:center;justify-content:center;padding:18px;background:rgba(25,28,34,.58)}#eternaweb-avis-modal.show{display:flex}.avis-modal-card{width:min(720px,96vw);max-height:90vh;overflow:auto;background:#fff;border-radius:20px;padding:22px 18px;box-shadow:0 18px 55px rgba(0,0,0,.25);position:relative}.avis-modal-card h3{margin:0 42px 5px;color:#243d58;font-size:1.45rem}.avis-modal-sub{margin:0 42px 16px;color:#5b6875;font-size:.9rem}.avis-close{position:absolute;right:12px;top:10px;width:40px;height:40px;border:1px solid #bbb;border-radius:9px;background:#fff;font-size:28px;line-height:36px;cursor:pointer;color:#333}.avis-list{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:18px}.avis-item{margin:0;padding:13px;border-radius:13px;background:#faf9f6;border:1px solid rgba(80,60,35,.10);font-size:.86rem;line-height:1.4;color:#3f4c58}.avis-item cite{display:block;margin-top:8px;font-style:normal;font-weight:700;color:#263f59}.avis-form{border-top:1px solid #e6e1d8;padding-top:16px}.avis-form h4{margin:0 0 10px;color:#243d58}.avis-fields{display:grid;grid-template-columns:1fr 1fr;gap:9px}.avis-form input,.avis-form textarea,.avis-form select{width:100%;box-sizing:border-box;border:1px solid #d8d5cf;border-radius:9px;padding:10px;font:inherit;background:#fff}.avis-form textarea{min-height:90px;resize:vertical;grid-column:1/-1}.avis-form .avis-submit{margin-top:10px;border:0;border-radius:10px;padding:10px 16px;background:#243d58;color:#fff;font-weight:700;cursor:pointer}.avis-note{margin:8px 0 0;font-size:.75rem;color:#707070}@media(max-width:600px){#temoignages.avis-section{width:88%;padding:12px 10px}.avis-list{grid-template-columns:1fr;gap:7px}.avis-modal-card{padding:18px 12px;border-radius:16px}.avis-fields{grid-template-columns:1fr}.avis-form textarea{grid-column:auto}.avis-modal-card h3{font-size:1.25rem}}';
    document.head.appendChild(style);
    section.classList.add('avis-section');
    section.innerHTML='<h2>⭐ Avis</h2><p class="avis-sub">Découvrez les retours et partagez votre expérience avec EternaWeb.</p><button type="button" class="avis-open-btn" id="openAvis">⭐ Voir les avis / laisser un avis</button>';
    var modal=document.createElement('div');modal.id='eternaweb-avis-modal';modal.setAttribute('aria-hidden','true');
    modal.innerHTML='<div class="avis-modal-card" role="dialog" aria-modal="true" aria-labelledby="avisModalTitle"><button type="button" class="avis-close" id="closeAvis" aria-label="Fermer">×</button><h3 id="avisModalTitle">⭐ Avis EternaWeb</h3><p class="avis-modal-sub">Quelques retours et la possibilité de laisser votre propre avis.</p><div class="avis-list"><blockquote class="avis-item">“Super réactive et professionnelle, mon site a été en ligne le jour même !”<cite>— Claire B.</cite></blockquote><blockquote class="avis-item">“Mon CV est beaucoup plus clair et professionnel. Je sais enfin comment présenter mon parcours !”<cite>— Malik T.</cite></blockquote><blockquote class="avis-item">“Excellent rapport qualité/prix. Je recommande à 100 %.”<cite>— Sofia M.</cite></blockquote></div><form class="avis-form" id="avisForm"><h4>💬 Laisser un avis</h4><div class="avis-fields"><input name="nom" type="text" required placeholder="Votre prénom ou nom"><select name="note" required><option value="">Votre note</option><option value="5/5">⭐⭐⭐⭐⭐ 5/5</option><option value="4/5">⭐⭐⭐⭐ 4/5</option><option value="3/5">⭐⭐⭐ 3/5</option><option value="2/5">⭐⭐ 2/5</option><option value="1/5">⭐ 1/5</option></select><textarea name="message" required placeholder="Votre avis sur EternaWeb…"></textarea></div><button type="submit" class="avis-submit">Envoyer mon avis</button><p class="avis-note">Votre avis sera préparé dans WhatsApp pour validation avant envoi.</p></form></div>';
    document.body.appendChild(modal);
    var open=document.getElementById('openAvis'),close=document.getElementById('closeAvis');
    function show(){modal.classList.add('show');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';}
    function hide(){modal.classList.remove('show');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';}
    if(open)open.addEventListener('click',show);if(close)close.addEventListener('click',hide);modal.addEventListener('click',function(e){if(e.target===modal)hide();});document.addEventListener('keydown',function(e){if(e.key==='Escape'&&modal.classList.contains('show'))hide();});
    var form=document.getElementById('avisForm');
    if(form)form.addEventListener('submit',function(e){e.preventDefault();var fd=new FormData(form);var nom=(fd.get('nom')||'').toString().trim();var note=(fd.get('note')||'').toString();var message=(fd.get('message')||'').toString().trim();if(!nom||!note||!message)return;var text='Bonjour EternaWeb, je souhaite laisser un avis.%0A%0APrénom/Nom : '+encodeURIComponent(nom)+'%0ANote : '+encodeURIComponent(note)+'%0AAvis : '+encodeURIComponent(message);window.open('https://wa.me/33749723434?text='+text,'_blank','noopener');});
    var navAvis=document.querySelector('#mainMenu a[href="#temoignages"]');if(navAvis)navAvis.textContent='Avis';
  }
  function loadHomeFix(){if(document.getElementById('homeFixScript'))return;var s=document.createElement('script');s.id='homeFixScript';s.src='./home-fix.js';s.defer=true;document.body.appendChild(s);}
  function init(){
    compactHome();setupAvis();
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
