// EternaWeb — correctif autonome globe + Vos informations
(function(){
  'use strict';

  // Ce dictionnaire volontairement autonome permet au globe de fonctionner
  // même si un autre script du site contient une erreur JavaScript.
  var D = {
    fr:{
      'nav.menu':'Menu','nav.cv':'CV','nav.devis':'Vos informations','nav.temoignages':'Témoignages',
      'hero.title':'EternaWeb','hero.subtitle':'CV professionnel — prêt en 48h','hero.lead':'✨ Un design premium, des intégrations rapides et un rendu clé en main.',
      'cta.whatsapp':'WhatsApp','cta.paypal':'PayPal','services.h2':'🚀 Nos services','services.sub':'Choisissez un type de mini-site 👇','services.cv.desc':'Idéal pour les candidatures ou profils pros.','services.port.desc':'Parfait pour artistes & designers.','services.vit.desc':'Pour entreprises & indépendants.',
      'devis.h2':'📝 Vos informations','devis.sub':'Choisissez, décrivez, envoyez — je reçois vos consignes.','devis.type':'Type de CV','devis.colors':'Palette / couleurs','devis.style':'Style visuel','devis.style1':'Sobre & élégant','devis.style2':'Créatif & coloré','devis.style3':'Minimal & pro','devis.style4':'Nature & doux','devis.integrations':'Options souhaitées','devis.other':'Autres demandes','devis.name':'Prénom / Nom','devis.email':'Email','btn.send':'Envoyer',
      'testi.h2':'💬 Témoignages','testi.t1':'“Super réactive et professionnelle, mon site a été en ligne le jour même !”','testi.c1':'— Claire B.','testi.t2':'“Design élégant, clair, et surtout… mes clients m’écrivent directement via WhatsApp !”','testi.c2':'— Malik T.','testi.t3':'“Excellent rapport qualité/prix. Je recommande à 100 %.”','testi.c3':'— Sofia M.',
      'footer.faq':'FAQ','footer.about':'À propos','footer.legal':'Mentions légales','footer.privacy':'Confidentialité','footer.code':'Code de conduite','footer.copy':'© 2025 EternaWeb — Tous droits réservés'
    },
    en:{
      'nav.menu':'Menu','nav.cv':'CV','nav.devis':'Your information','nav.temoignages':'Testimonials','hero.title':'EternaWeb','hero.subtitle':'Professional CV — ready in 48 hours','hero.lead':'✨ Premium design, fast integrations and a turnkey result.','cta.whatsapp':'WhatsApp','cta.paypal':'PayPal','services.h2':'🚀 Our services','services.sub':'Choose your mini-site type 👇','services.cv.desc':'Ideal for applications and professional profiles.','services.port.desc':'Perfect for artists & designers.','services.vit.desc':'For businesses & freelancers.','devis.h2':'📝 Your information','devis.sub':'Choose, describe, send — I receive your instructions.','devis.type':'CV type','devis.colors':'Palette / colors','devis.style':'Visual style','devis.style1':'Clean & elegant','devis.style2':'Creative & colorful','devis.style3':'Minimal & professional','devis.style4':'Natural & soft','devis.integrations':'Requested options','devis.other':'Other requests','devis.name':'First / Last name','devis.email':'Email','btn.send':'Send','testi.h2':'💬 Testimonials','footer.faq':'FAQ','footer.about':'About','footer.legal':'Legal notice','footer.privacy':'Privacy','footer.code':'Code of Conduct','footer.copy':'© 2025 EternaWeb — All rights reserved'
    },
    nl:{
      'nav.menu':'Menu','nav.cv':'CV','nav.devis':'Jouw gegevens','nav.temoignages':'Getuigenissen','hero.title':'EternaWeb','hero.subtitle':'Professioneel cv — klaar binnen 48 uur','hero.lead':'✨ Premium ontwerp, snelle integraties en een kant-en-klaar resultaat.','cta.whatsapp':'WhatsApp','cta.paypal':'PayPal','services.h2':'🚀 Onze diensten','services.sub':'Kies een type mini-site 👇','services.cv.desc':'Ideaal voor sollicitaties of professionele profielen.','services.port.desc':'Perfect voor artiesten en ontwerpers.','services.vit.desc':'Voor bedrijven en freelancers.','devis.h2':'📝 Jouw gegevens','devis.sub':'Kies, beschrijf en verstuur — ik ontvang je instructies.','devis.type':'Type CV','devis.colors':'Palet / kleuren','devis.style':'Visuele stijl','devis.style1':'Sober & elegant','devis.style2':'Creatief & kleurrijk','devis.style3':'Minimaal & professioneel','devis.style4':'Natuurlijk & zacht','devis.integrations':'Gewenste opties','devis.other':'Andere wensen','devis.name':'Voor- / achternaam','devis.email':'E-mail','btn.send':'Versturen','testi.h2':'💬 Getuigenissen','footer.faq':'FAQ','footer.about':'Over ons','footer.legal':'Juridische informatie','footer.privacy':'Privacy','footer.code':'Gedragscode','footer.copy':'© 2025 EternaWeb — Alle rechten voorbehouden'
    },
    et:{
      'nav.menu':'Menüü','nav.cv':'CV','nav.devis':'Teie teave','nav.temoignages':'Tagasiside','hero.title':'EternaWeb','hero.subtitle':'Professionaalne CV – valmis 48 tunniga','hero.lead':'✨ Premium disain, kiire teostus ja valmis lahendus.','cta.whatsapp':'WhatsApp','cta.paypal':'PayPal','services.h2':'Meie teenused','services.sub':'Vali sobiv mini-veebileht 👇','services.cv.desc':'Sobib tööle kandideerimiseks.','services.port.desc':'Kunstnikele ja disaineritele.','services.vit.desc':'Ettevõtetele ja iseseisvatele.','devis.h2':'📝 Teie teave','devis.sub':'Valige, kirjeldage ja saatke — saan teie juhised kätte.','devis.type':'CV tüüp','devis.colors':'Värvipalett','devis.style':'Visuaalne stiil','devis.style1':'Tagasihoidlik ja elegantne','devis.style2':'Loov ja värvikas','devis.style3':'Minimalistlik ja professionaalne','devis.style4':'Loomulik ja pehme','devis.integrations':'Soovitud valikud','devis.other':'Muud soovid','devis.name':'Ees- ja perekonnanimi','devis.email':'E-post','btn.send':'Saada','testi.h2':'💬 Tagasiside','footer.faq':'KKK','footer.about':'Meist','footer.legal':'Õiguslik teave','footer.privacy':'Privaatsus','footer.code':'Käitumiskoodeks','footer.copy':'© 2025 EternaWeb — Kõik õigused kaitstud'
    },
    ru:{
      'nav.menu':'Меню','nav.cv':'Резюме','nav.devis':'Ваша информация','nav.temoignages':'Отзывы','hero.title':'EternaWeb','hero.subtitle':'Профессиональное резюме — готово за 48 часов','hero.lead':'✨ Премиальный дизайн, быстрая интеграция и готовый результат.','cta.whatsapp':'WhatsApp','cta.paypal':'PayPal','services.h2':'🚀 Наши услуги','services.sub':'Выберите тип мини-сайта 👇','services.cv.desc':'Для откликов и профессиональных профилей.','services.port.desc':'Для художников и дизайнеров.','services.vit.desc':'Для компаний и самозанятых.','devis.h2':'📝 Ваша информация','devis.sub':'Выберите, опишите и отправьте — я получу ваши инструкции.','devis.type':'Тип резюме','devis.colors':'Палитра / цвета','devis.style':'Визуальный стиль','devis.style1':'Сдержанный и элегантный','devis.style2':'Креативный и яркий','devis.style3':'Минималистичный и профессиональный','devis.style4':'Натуральный и мягкий','devis.integrations':'Желаемые опции','devis.other':'Другие пожелания','devis.name':'Имя / фамилия','devis.email':'Электронная почта','btn.send':'Отправить','testi.h2':'💬 Отзывы','footer.faq':'FAQ','footer.about':'О нас','footer.legal':'Юридическая информация','footer.privacy':'Конфиденциальность','footer.code':'Кодекс поведения','footer.copy':'© 2025 EternaWeb — Все права защищены'
    },
    de:{
      'nav.menu':'Menü','nav.cv':'Lebenslauf','nav.devis':'Ihre Angaben','nav.temoignages':'Referenzen','hero.title':'EternaWeb','hero.subtitle':'Professioneller Lebenslauf — fertig in 48 Stunden','hero.lead':'✨ Premium-Design, schnelle Integrationen und ein schlüsselfertiges Ergebnis.','cta.whatsapp':'WhatsApp','cta.paypal':'PayPal','services.h2':'🚀 Unsere Leistungen','services.sub':'Wählen Sie einen Mini-Webseitentyp 👇','services.cv.desc':'Ideal für Bewerbungen und berufliche Profile.','services.port.desc':'Perfekt für Künstler und Designer.','services.vit.desc':'Für Unternehmen und Selbstständige.','devis.h2':'📝 Ihre Angaben','devis.sub':'Auswählen, beschreiben, senden — ich erhalte Ihre Vorgaben.','devis.type':'Lebenslauf-Typ','devis.colors':'Farbpalette','devis.style':'Visueller Stil','devis.style1':'Schlicht & elegant','devis.style2':'Kreativ & farbenfroh','devis.style3':'Minimal & professionell','devis.style4':'Natürlich & sanft','devis.integrations':'Gewünschte Optionen','devis.other':'Weitere Wünsche','devis.name':'Vor- / Nachname','devis.email':'E-Mail','btn.send':'Senden','testi.h2':'💬 Referenzen','footer.faq':'FAQ','footer.about':'Über uns','footer.legal':'Impressum','footer.privacy':'Datenschutz','footer.code':'Verhaltenskodex','footer.copy':'© 2025 EternaWeb — Alle Rechte vorbehalten'
    },
    es:{
      'nav.menu':'Menú','nav.cv':'CV','nav.devis':'Tus datos','nav.temoignages':'Testimonios','hero.title':'EternaWeb','hero.subtitle':'CV profesional — listo en 48 h','hero.lead':'✨ Diseño premium, integraciones rápidas y resultado llave en mano.','cta.whatsapp':'WhatsApp','cta.paypal':'PayPal','services.h2':'🚀 Nuestros servicios','services.sub':'Elige un tipo de mini-sitio 👇','services.cv.desc':'Ideal para candidaturas y perfiles profesionales.','services.port.desc':'Perfecto para artistas y diseñadores.','services.vit.desc':'Para empresas y autónomos.','devis.h2':'📝 Tus datos','devis.sub':'Elige, describe y envía — recibo tus indicaciones.','devis.type':'Tipo de CV','devis.colors':'Paleta / colores','devis.style':'Estilo visual','devis.style1':'Sobrio y elegante','devis.style2':'Creativo y colorido','devis.style3':'Minimalista y profesional','devis.style4':'Natural y suave','devis.integrations':'Opciones deseadas','devis.other':'Otras solicitudes','devis.name':'Nombre y apellidos','devis.email':'Correo electrónico','btn.send':'Enviar','testi.h2':'💬 Testimonios','footer.faq':'FAQ','footer.about':'Acerca de','footer.legal':'Aviso legal','footer.privacy':'Privacidad','footer.code':'Código de conducta','footer.copy':'© 2025 EternaWeb — Todos los derechos reservados'
    },
    it:{
      'nav.menu':'Menu','nav.cv':'CV','nav.devis':'Le tue informazioni','nav.temoignages':'Testimonianze','hero.title':'EternaWeb','hero.subtitle':'CV professionale — pronto in 48 ore','hero.lead':'✨ Design premium, integrazioni rapide e risultato chiavi in mano.','cta.whatsapp':'WhatsApp','cta.paypal':'PayPal','services.h2':'🚀 I nostri servizi','services.sub':'Scegli un tipo di mini-sito 👇','services.cv.desc':'Ideale per candidature e profili professionali.','services.port.desc':'Perfetto per artisti e designer.','services.vit.desc':'Per aziende e lavoratori autonomi.','devis.h2':'📝 Le tue informazioni','devis.sub':'Scegli, descrivi e invia — ricevo le tue indicazioni.','devis.type':'Tipo di CV','devis.colors':'Palette / colori','devis.style':'Stile visivo','devis.style1':'Sobrio ed elegante','devis.style2':'Creativo e colorato','devis.style3':'Minimal e professionale','devis.style4':'Naturale e delicato','devis.integrations':'Opzioni desiderate','devis.other':'Altre richieste','devis.name':'Nome e cognome','devis.email':'Email','btn.send':'Invia','testi.h2':'💬 Testimonianze','footer.faq':'FAQ','footer.about':'Chi siamo','footer.legal':'Note legali','footer.privacy':'Privacy','footer.code':'Codice di condotta','footer.copy':'© 2025 EternaWeb — Tutti i diritti riservati'
    }
  };

  window.ETERNAWEB_I18N = D;

  function applyLang(lang){
    var d=D[lang]||D.fr;
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var key=el.getAttribute('data-i18n');
      if(!Object.prototype.hasOwnProperty.call(d,key)) return;
      var value=d[key];
      if(typeof value!=='string') return;
      if(/<[^>]+>/.test(value)) el.innerHTML=value; else el.textContent=value;
    });
    document.documentElement.lang=lang;
    try{localStorage.setItem('lang',lang);}catch(e){}
    return true;
  }

  function init(){
    var info=document.getElementById('goInformations');
    var target=document.getElementById('informations');
    if(info&&target){
      info.onclick=function(e){
        e.preventDefault(); e.stopPropagation();
        target.scrollIntoView({behavior:'smooth',block:'start'});
        if(history.replaceState) history.replaceState(null,'','#informations');
        return false;
      };
    }

    var btn=document.getElementById('langBtn');
    var menu=document.getElementById('langMenu');
    if(btn&&menu){
      menu.style.zIndex='99999';
      menu.style.pointerEvents='auto';
      btn.onclick=function(e){
        e.preventDefault(); e.stopPropagation();
        var open=menu.classList.contains('show')||menu.style.display==='flex';
        menu.classList.toggle('show',!open);
        menu.style.display=open?'none':'flex';
        menu.style.flexDirection='column';
        btn.setAttribute('aria-expanded',String(!open));
      };
      menu.querySelectorAll('.lang-item').forEach(function(item){
        item.onclick=function(e){
          e.preventDefault(); e.stopPropagation();
          var lang=item.getAttribute('data-lang');
          applyLang(lang);
          menu.classList.remove('show'); menu.style.display='none';
          btn.setAttribute('aria-expanded','false');
        };
      });
    }

    var saved='fr';
    try{saved=localStorage.getItem('lang')||'fr';}catch(e){}
    applyLang(D[saved]?saved:'fr');
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
})();
