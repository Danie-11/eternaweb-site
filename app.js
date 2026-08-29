console.log("✅ app.js chargé");

const WA_NUMBER = '33749723434';
const MAIL_TO = 'eternaweb.contact@gmail.com';
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];

/* =========================
   EternaWeb — moteur unique
   Navigation + langues + formulaire
   ========================= */

const I18N = {
  fr: {
    'nav.menu':'Menu','nav.cv':'CV','nav.devis':'Vos informations','nav.temoignages':'Témoignages',
    'hero.subtitle':'CV professionnel — prêt en 48h','hero.lead':'✨ Un design premium, des intégrations rapides et un rendu clé en main.',
    'cta.whatsapp':'WhatsApp','cta.paypal':'PayPal','services.h2':'🚀 Nos services','services.sub':'Découvrez nos solutions CV',
    'devis.h2':'📝 Vos informations','devis.sub':'Choisissez, décrivez, envoyez — je reçois vos consignes.','devis.type':'Type de CV',
    'devis.colors':'Palette / couleurs','devis.style':'Style visuel','devis.style1':'Sobre & élégant','devis.style2':'Créatif & coloré','devis.style3':'Minimal & pro','devis.style4':'Nature & doux',
    'devis.integrations':'Options souhaitées','devis.other':'Autres demandes','devis.name':'Prénom / Nom','devis.email':'Email','devis.note':'Votre message est envoyé directement à EternaWeb','btn.send':'Envoyer',
    'testi.h2':'💬 Témoignages','testi.t1':'“Super réactive et professionnelle, mon site a été en ligne le jour même !”','testi.c1':'— Claire B.',
    'testi.t2':'“Design élégant, clair, et surtout… mes clients m’écrivent directement via WhatsApp !”','testi.c2':'— Malik T.','testi.t3':'“Excellent rapport qualité/prix. Je recommande à 100 %.”','testi.c3':'— Sofia M.',
    'footer.faq':'FAQ','footer.about':'À propos','footer.legal':'Mentions légales','footer.privacy':'Confidentialité','footer.code':'Code de conduite','footer.copy':'© 2025 EternaWeb — Tous droits réservés',
    'faq.back':'← Retour à l’accueil','about.back':'← Retour à l’accueil','legal.back':'← Retour à l’accueil','privacy.back':'← Retour à l’accueil','code.back':'← Retour à l’accueil'
  },
  en: {
    'nav.menu':'Menu','nav.cv':'CV','nav.devis':'Your information','nav.temoignages':'Testimonials',
    'hero.subtitle':'Professional CV — ready in 48h','hero.lead':'✨ Premium design, fast integration and a turnkey result.',
    'cta.whatsapp':'WhatsApp','cta.paypal':'PayPal','services.h2':'🚀 Our services','services.sub':'Discover our CV solutions',
    'devis.h2':'📝 Your information','devis.sub':'Choose, describe and send — I receive your instructions.','devis.type':'CV type',
    'devis.colors':'Palette / colours','devis.style':'Visual style','devis.style1':'Simple & elegant','devis.style2':'Creative & colourful','devis.style3':'Minimal & professional','devis.style4':'Natural & soft',
    'devis.integrations':'Desired options','devis.other':'Other requests','devis.name':'First / Last name','devis.email':'Email','devis.note':'Your message is sent directly to EternaWeb','btn.send':'Send',
    'testi.h2':'💬 Testimonials','testi.t1':'“Super responsive and professional — my site was online the same day!”','testi.c1':'— Claire B.',
    'testi.t2':'“Elegant, clear design — and my clients can contact me directly via WhatsApp!”','testi.c2':'— Malik T.','testi.t3':'“Excellent value for money. 100% recommended.”','testi.c3':'— Sofia M.',
    'footer.faq':'FAQ','footer.about':'About','footer.legal':'Legal notice','footer.privacy':'Privacy','footer.code':'Code of Conduct','footer.copy':'© 2025 EternaWeb — All rights reserved',
    'faq.back':'← Back to home','about.back':'← Back to home','legal.back':'← Back to home','privacy.back':'← Back to home','code.back':'← Back to home'
  },
  nl: {
    'nav.menu':'Menu','nav.cv':'CV','nav.devis':'Uw informatie','nav.temoignages':'Getuigenissen',
    'hero.subtitle':'Professioneel cv — klaar binnen 48 uur','hero.lead':'✨ Premium ontwerp, snelle integratie en een kant-en-klaar resultaat.',
    'cta.whatsapp':'WhatsApp','cta.paypal':'PayPal','services.h2':'🚀 Onze diensten','services.sub':'Ontdek onze CV-oplossingen',
    'devis.h2':'📝 Uw informatie','devis.sub':'Kies, beschrijf en verstuur — ik ontvang uw instructies.','devis.type':'Type CV',
    'devis.colors':'Palet / kleuren','devis.style':'Visuele stijl','devis.style1':'Eenvoudig & elegant','devis.style2':'Creatief & kleurrijk','devis.style3':'Minimalistisch & professioneel','devis.style4':'Natuurlijk & zacht',
    'devis.integrations':'Gewenste opties','devis.other':'Andere verzoeken','devis.name':'Voornaam / achternaam','devis.email':'E-mail','devis.note':'Uw bericht wordt rechtstreeks naar EternaWeb gestuurd','btn.send':'Verzenden',
    'testi.h2':'💬 Getuigenissen','testi.t1':'“Super snel en professioneel — mijn site stond dezelfde dag online!”','testi.c1':'— Claire B.','testi.t2':'“Elegant en duidelijk ontwerp — mijn klanten kunnen me rechtstreeks via WhatsApp berichten!”','testi.c2':'— Malik T.','testi.t3':'“Uitstekende prijs-kwaliteitverhouding. 100% aanbevolen.”','testi.c3':'— Sofia M.',
    'footer.faq':'FAQ','footer.about':'Over ons','footer.legal':'Juridische informatie','footer.privacy':'Privacy','footer.code':'Gedragscode','footer.copy':'© 2025 EternaWeb — Alle rechten voorbehouden',
    'faq.back':'← Terug naar home','about.back':'← Terug naar home','legal.back':'← Terug naar home','privacy.back':'← Terug naar home','code.back':'← Terug naar home'
  },
  et: {
    'nav.menu':'Menüü','nav.cv':'CV','nav.devis':'Teie teave','nav.temoignages':'Iseloomustused',
    'hero.subtitle':'Professionaalne CV – valmis 48 tunniga','hero.lead':'✨ Premium disain, kiire teostus ja valmis lahendus.',
    'cta.whatsapp':'WhatsApp','cta.paypal':'PayPal','services.h2':'🚀 Meie teenused','services.sub':'Avastage meie CV-lahendused',
    'devis.h2':'📝 Teie teave','devis.sub':'Valige, kirjeldage ja saatke — saan teie juhised kätte.','devis.type':'CV tüüp','devis.colors':'Värvipalett','devis.style':'Visuaalne stiil','devis.style1':'Lihtne ja elegantne','devis.style2':'Loominguline ja värviline','devis.style3':'Minimalistlik ja professionaalne','devis.style4':'Looduslik ja pehme','devis.integrations':'Soovitud valikud','devis.other':'Muud soovid','devis.name':'Ees- ja perekonnanimi','devis.email':'E-post','devis.note':'Teie sõnum saadetakse otse EternaWebile','btn.send':'Saada',
    'testi.h2':'💬 Iseloomustused','testi.t1':'“Väga kiire ja professionaalne — minu sait oli samal päeval veebis!”','testi.c1':'— Claire B.','testi.t2':'“Elegantne ja selge disain — kliendid saavad minuga otse WhatsAppis ühendust võtta!”','testi.c2':'— Malik T.','testi.t3':'“Suurepärane hinna ja kvaliteedi suhe. Soovitan 100%.”','testi.c3':'— Sofia M.',
    'footer.faq':'KKK','footer.about':'Meist','footer.legal':'Õiguslik teave','footer.privacy':'Privaatsus','footer.code':'Käitumiskoodeks','footer.copy':'© 2025 EternaWeb — Kõik õigused kaitstud','faq.back':'← Tagasi avalehele','about.back':'← Tagasi avalehele','legal.back':'← Tagasi avalehele','privacy.back':'← Tagasi avalehele','code.back':'← Tagasi avalehele'
  },
  ru: {
    'nav.menu':'Меню','nav.cv':'Резюме','nav.devis':'Ваша информация','nav.temoignages':'Отзывы','hero.subtitle':'Профессиональное резюме — готово за 48 часов','hero.lead':'✨ Премиальный дизайн, быстрая интеграция и готовое решение.','cta.whatsapp':'WhatsApp','cta.paypal':'PayPal','services.h2':'🚀 Наши услуги','services.sub':'Откройте наши решения для резюме','devis.h2':'📝 Ваша информация','devis.sub':'Выберите, опишите и отправьте — я получу ваши инструкции.','devis.type':'Тип резюме','devis.colors':'Палитра / цвета','devis.style':'Визуальный стиль','devis.style1':'Сдержанный и элегантный','devis.style2':'Креативный и яркий','devis.style3':'Минималистичный и профессиональный','devis.style4':'Натуральный и мягкий','devis.integrations':'Желаемые опции','devis.other':'Другие пожелания','devis.name':'Имя / Фамилия','devis.email':'Email','devis.note':'Ваше сообщение отправляется напрямую в EternaWeb','btn.send':'Отправить','testi.h2':'💬 Отзывы','testi.t1':'“Очень быстро и профессионально — мой сайт был готов в тот же день!”','testi.c1':'— Claire B.','testi.t2':'“Элегантный и понятный дизайн — клиенты сразу пишут мне в WhatsApp!”','testi.c2':'— Malik T.','testi.t3':'“Отличное соотношение цены и качества. Рекомендую на 100%.”','testi.c3':'— Sofia M.','footer.faq':'FAQ','footer.about':'О нас','footer.legal':'Юридическая информация','footer.privacy':'Конфиденциальность','footer.code':'Кодекс поведения','footer.copy':'© 2025 EternaWeb — Все права защищены','faq.back':'← На главную','about.back':'← На главную','legal.back':'← На главную','privacy.back':'← На главную','code.back':'← На главную'
  },
  de: {
    'nav.menu':'Menü','nav.cv':'Lebenslauf','nav.devis':'Ihre Informationen','nav.temoignages':'Bewertungen','hero.subtitle':'Professioneller Lebenslauf — fertig in 48 Std.','hero.lead':'✨ Premium-Design, schnelle Integration und eine fertige Lösung.','cta.whatsapp':'WhatsApp','cta.paypal':'PayPal','services.h2':'🚀 Unsere Leistungen','services.sub':'Entdecken Sie unsere CV-Lösungen','devis.h2':'📝 Ihre Informationen','devis.sub':'Auswählen, beschreiben und senden — ich erhalte Ihre Vorgaben.','devis.type':'CV-Typ','devis.colors':'Farbpalette','devis.style':'Visueller Stil','devis.style1':'Schlicht & elegant','devis.style2':'Kreativ & farbenfroh','devis.style3':'Minimalistisch & professionell','devis.style4':'Natürlich & sanft','devis.integrations':'Gewünschte Optionen','devis.other':'Weitere Wünsche','devis.name':'Vor- / Nachname','devis.email':'E-Mail','devis.note':'Ihre Nachricht wird direkt an EternaWeb gesendet','btn.send':'Senden','testi.h2':'💬 Bewertungen','testi.t1':'“Sehr schnell und professionell — meine Website war noch am selben Tag online!”','testi.c1':'— Claire B.','testi.t2':'“Elegantes, klares Design — meine Kunden schreiben mir direkt über WhatsApp!”','testi.c2':'— Malik T.','testi.t3':'“Hervorragendes Preis-Leistungs-Verhältnis. 100 % empfehlenswert.”','testi.c3':'— Sofia M.','footer.faq':'FAQ','footer.about':'Über uns','footer.legal':'Impressum','footer.privacy':'Datenschutz','footer.code':'Verhaltenskodex','footer.copy':'© 2025 EternaWeb — Alle Rechte vorbehalten','faq.back':'← Zur Startseite','about.back':'← Zur Startseite','legal.back':'← Zur Startseite','privacy.back':'← Zur Startseite','code.back':'← Zur Startseite'
  },
  es: {
    'nav.menu':'Menú','nav.cv':'CV','nav.devis':'Tus datos','nav.temoignages':'Testimonios','hero.subtitle':'CV profesional — listo en 48 h','hero.lead':'✨ Diseño premium, integración rápida y resultado listo para usar.','cta.whatsapp':'WhatsApp','cta.paypal':'PayPal','services.h2':'🚀 Nuestros servicios','services.sub':'Descubre nuestras soluciones CV','devis.h2':'📝 Tus datos','devis.sub':'Elige, describe y envía — recibo tus indicaciones.','devis.type':'Tipo de CV','devis.colors':'Paleta / colores','devis.style':'Estilo visual','devis.style1':'Sencillo y elegante','devis.style2':'Creativo y colorido','devis.style3':'Minimalista y profesional','devis.style4':'Natural y suave','devis.integrations':'Opciones deseadas','devis.other':'Otras solicitudes','devis.name':'Nombre / Apellido','devis.email':'Correo electrónico','devis.note':'Tu mensaje se envía directamente a EternaWeb','btn.send':'Enviar','testi.h2':'💬 Testimonios','testi.t1':'“¡Súper rápida y profesional, mi sitio estuvo en línea el mismo día!”','testi.c1':'— Claire B.','testi.t2':'“Diseño elegante y claro; mis clientes me escriben directamente por WhatsApp.”','testi.c2':'— Malik T.','testi.t3':'“Excelente relación calidad-precio. ¡Recomiendo al 100 %!”','testi.c3':'— Sofia M.','footer.faq':'FAQ','footer.about':'Sobre nosotros','footer.legal':'Aviso legal','footer.privacy':'Privacidad','footer.code':'Código de conducta','footer.copy':'© 2025 EternaWeb — Todos los derechos reservados','faq.back':'← Volver al inicio','about.back':'← Volver al inicio','legal.back':'← Volver al inicio','privacy.back':'← Volver al inicio','code.back':'← Volver al inicio'
  },
  it: {
    'nav.menu':'Menu','nav.cv':'CV','nav.devis':'Le tue informazioni','nav.temoignages':'Testimonianze','hero.subtitle':'CV professionale — pronto in 48 ore','hero.lead':'✨ Design premium, integrazione rapida e risultato chiavi in mano.','cta.whatsapp':'WhatsApp','cta.paypal':'PayPal','services.h2':'🚀 I nostri servizi','services.sub':'Scopri le nostre soluzioni CV','devis.h2':'📝 Le tue informazioni','devis.sub':'Scegli, descrivi e invia — ricevo le tue indicazioni.','devis.type':'Tipo di CV','devis.colors':'Palette / colori','devis.style':'Stile visivo','devis.style1':'Semplice ed elegante','devis.style2':'Creativo e colorato','devis.style3':'Minimal e professionale','devis.style4':'Naturale e delicato','devis.integrations':'Opzioni desiderate','devis.other':'Altre richieste','devis.name':'Nome / Cognome','devis.email':'Email','devis.note':'Il tuo messaggio viene inviato direttamente a EternaWeb','btn.send':'Invia','testi.h2':'💬 Testimonianze','testi.t1':'“Super veloce e professionale — il mio sito era online lo stesso giorno!”','testi.c1':'— Claire B.','testi.t2':'“Design elegante e chiaro — i miei clienti mi scrivono direttamente su WhatsApp!”','testi.c2':'— Malik T.','testi.t3':'“Ottimo rapporto qualità/prezzo. Consigliato al 100%.”','testi.c3':'— Sofia M.','footer.faq':'FAQ','footer.about':'Chi siamo','footer.legal':'Note legali','footer.privacy':'Privacy','footer.code':'Codice di condotta','footer.copy':'© 2025 EternaWeb — Tutti i diritti riservati','faq.back':'← Torna alla home','about.back':'← Torna alla home','legal.back':'← Torna alla home','privacy.back':'← Torna alla home','code.back':'← Torna alla home'
  }
};

function applyLanguage(lang){
  const dict = I18N[lang] || I18N.fr;
  document.documentElement.lang = lang;
  $$('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  localStorage.setItem('eternaweb-lang', lang);
  const menu = $('#langMenu');
  if(menu){ menu.classList.remove('open'); }
  const btn = $('#langBtn');
  if(btn) btn.setAttribute('aria-expanded','false');
}

function initLanguage(){
  const saved = localStorage.getItem('eternaweb-lang') || 'fr';
  applyLanguage(saved);
  $$('.lang-item').forEach(item => item.addEventListener('click', () => applyLanguage(item.dataset.lang)));
}

function scrollToId(id){
  const el = document.getElementById(id);
  if(!el) return false;
  el.scrollIntoView({behavior:'smooth', block:'start'});
  return true;
}

function initNavigation(){
  const menuBtn = $('#menuBtn');
  const mainMenu = $('#mainMenu');
  if(menuBtn && mainMenu){
    menuBtn.addEventListener('click', e => {
      e.stopPropagation();
      const open = mainMenu.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(open));
    });
  }

  const langBtn = $('#langBtn');
  const langMenu = $('#langMenu');
  if(langBtn && langMenu){
    langBtn.addEventListener('click', e => {
      e.stopPropagation();
      const open = langMenu.classList.toggle('open');
      langBtn.setAttribute('aria-expanded', String(open));
    });
  }

  document.addEventListener('click', e => {
    if(mainMenu && !mainMenu.contains(e.target) && e.target !== menuBtn){
      mainMenu.classList.remove('open');
      if(menuBtn) menuBtn.setAttribute('aria-expanded','false');
    }
    if(langMenu && !langMenu.contains(e.target) && e.target !== langBtn){
      langMenu.classList.remove('open');
      if(langBtn) langBtn.setAttribute('aria-expanded','false');
    }
  });

  const goDevis = $('#goDevis');
  if(goDevis){
    goDevis.addEventListener('click', e => {
      if(scrollToId('devis')) e.preventDefault();
      if(mainMenu){ mainMenu.classList.remove('open'); }
    });
  }

  $$('a[href="#temoignages"]').forEach(a => a.addEventListener('click', e => {
    if(scrollToId('temoignages')) e.preventDefault();
    if(mainMenu) mainMenu.classList.remove('open');
  }));

  $$('a[href="#devis"]').forEach(a => a.addEventListener('click', e => {
    if(scrollToId('devis')) e.preventDefault();
  }));
}

function initForm(){
  const send = $('#sendForm');
  const form = $('#devisForm');
  if(!send || !form) return;
  send.addEventListener('click', () => {
    if(!form.reportValidity()) return;
    const fd = new FormData(form);
    const options = fd.getAll('int').join(', ') || 'Aucune';
    const body = [
      'Bonjour EternaWeb,','',
      `Type : ${fd.get('type') || 'CV'}`,
      `Couleurs : ${fd.get('couleurs') || 'Non précisé'}`,
      `Style : ${fd.get('style') || 'Non précisé'}`,
      `Options : ${options}`,
      `Autres demandes : ${fd.get('contenu') || 'Aucune'}`,
      `Nom : ${fd.get('nom') || ''}`,
      `Email : ${fd.get('email') || ''}`,'','Merci.'
    ].join('\n');
    window.location.href = `mailto:${MAIL_TO}?subject=${encodeURIComponent('Demande EternaWeb')}&body=${encodeURIComponent(body)}`;
  });
}

function init(){
  initLanguage();
  initNavigation();
  initForm();
  console.log('🚀 EternaWeb : navigation, langues et formulaire initialisés');
}

document.addEventListener('DOMContentLoaded', init);
