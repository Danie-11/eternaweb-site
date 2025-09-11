// ===== Config =====
I18N.it = {
const WA_NUMBER = '33749723434';
  // --- Navigazione
const MAIL_TO   = 'contact@eternaweb.fr';
  'nav.menu':'Menù','nav.cv':'CV','nav.portfolio':'Portfolio','nav.vitrine':'Vetrina','nav.tarifs':'Prezzi','nav.devis':'Le tue indicazioni','nav.temoignages':'Testimonianze','nav.modeles':'Modelli',


// ===== Helpers =====
  // --- Hero
const $  = (s, r=document)=>r.querySelector(s);
  'hero.title':'EternaWeb','hero.subtitle':'CV e siti vetrina — online in 48 ore','hero.lead':'✨ Design premium, integrazioni rapide e un risultato chiavi in mano.',
const $$ = (s, r=document)=>[...r.querySelectorAll(s)];
  'cta.whatsapp':'WhatsApp','cta.paypal':'PayPal',
const isMobile = ()=>/Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);


  // --- Passaggi
// ===== Menu mobile =====
  'brief.h2':'Il tuo sito in 3 passi',
const menuBtn  = $('#menuBtn');
  'brief.li1':'Scegli un pacchetto.','brief.li2':'Indica preferenze (colori, stile, integrazioni).','brief.li3':'Creo e invio una bozza rapida.',
const mainMenu = $('#mainMenu');

menuBtn?.addEventListener('click', ()=>{
  // --- Bottoni
  mainMenu?.classList.toggle('show');
  'btn.fill':'Le tue indicazioni','btn.send':'Invia','btn.choose':'Scegli questo piano',
  menuBtn.setAttribute('aria-expanded', mainMenu?.classList.contains('show'));

});
  // --- Devis

  'devis.h2':'📝 Le tue indicazioni','devis.sub':'Scegli, descrivi, invia — ricevo le tue istruzioni.',
// ===== Lang switch (globe) =====
  'devis.type':'Tipo di sito','devis.colors':'Palette / colori','devis.style':'Stile visivo',
const langBtn  = $('#langBtn');
  'devis.style1':'Sobrio & elegante','devis.style2':'Creativo & colorato','devis.style3':'Minimal & professionale','devis.style4':'Naturale & delicato',
const langMenu = $('#langMenu');
  'devis.integrations':'Integrazioni desiderate','devis.int.form':'Modulo di contatto','devis.int.social':'Social media','devis.int.gallery':'Galleria',

  'devis.other':'Altre richieste','devis.name':'Nome / Cognome','devis.email':'Email','devis.note':'Nessun server: si apre la tua app email con un messaggio pre-compilato.',
if (langBtn && langMenu){

  langBtn.addEventListener('click', ()=>{
  // --- Prezzi
    const open = langMenu.classList.toggle('show');
  'pricing.h2':'🧾 Piani EternaWeb','pricing.sub':'CV & mini siti vetrina — hosting incluso',
    langBtn.setAttribute('aria-expanded', String(open));
  'pricing.card1.title':'🌿 Essenziale – 49 €','pricing.card1.li1':'CV online semplice (1 pagina)','pricing.card1.li2':'Personalizzazione con dati + foto','pricing.card1.li3':'Design elegante e responsive','pricing.card1.li4':'Consegna entro 48 h','pricing.card1.note':'Ideale per candidature',
  });
  'pricing.card2.title':'✨ Vetrina – 89 €','pricing.card2.li1':'Mini sito (2–3 pagine)','pricing.card2.li2':'Home + prodotti/servizi','pricing.card2.li3':'Pulsanti WhatsApp, PayPal, social','pricing.card2.li4':'Design armonioso e responsive','pricing.card2.note':'Ideale per artigiani e freelance',
  document.addEventListener('click', (e)=>{
  'pricing.card3.title':'💎 Premium – 129 €','pricing.card3.li1':'Tutto del piano Vetrina','pricing.card3.li2':'Creazione/redo del logo','pricing.card3.li3':'Consulenza branding','pricing.card3.li4':'SEO base + Galleria/FAQ','pricing.card3.note':'Ideale per un lancio completo',
    if (!langMenu.contains(e.target) && e.target !== langBtn){

      langMenu.classList.remove('show');
  // --- Testimonianze
      langBtn.setAttribute('aria-expanded','false');
  'testi.h2':'💬 Testimonianze',
    }
  'testi.t1':'“Super reattiva e professionale — il mio sito era online lo stesso giorno!”','testi.c1':'— Claire B.',
  });
  'testi.t2':'“Design elegante e chiaro; i clienti mi scrivono direttamente su WhatsApp!”','testi.c2':'— Malik T.',
  window.addEventListener('scroll', ()=>{
  'testi.t3':'“Ottimo rapporto qualità-prezzo. Consigliatissimo.”','testi.c3':'— Sofia M.',
    langMenu.classList.remove('show');

    langBtn.setAttribute('aria-expanded','false');
  // --- Footer
  });
  'footer.info':'Info utili','footer.contact':'Contatti','footer.about':'Chi siamo','footer.security':'Sicurezza','footer.privacy':'Privacy','footer.code':'Codice di condotta','footer.faq':'FAQ',
}

const I18N = {
  // --- Modelli

const I18N = {
  fr: {
    'nav.menu':'Menu','nav.cv':'CV','nav.portfolio':'Portfolio','nav.vitrine':'Vitrine','nav.tarifs':'Tarifs','nav.devis':'Vos consignes','nav.temoignages':'Témoignages','nav.modeles':'Modèles',
    'hero.title':'EternaWeb','hero.subtitle':'CV & vitrines express — en ligne en 48 heures','hero.lead':'✨ Un design premium, des intégrations rapides et un rendu clé en main.','cta.whatsapp':'WhatsApp','cta.paypal':'PayPal',
    'brief.h2':'Votre site en 3 étapes','brief.li1':'Choisissez une formule.','brief.li2':'Indiquez vos préférences (couleurs, style, intégrations).','brief.li3':'Je lance la création et vous envoie une maquette.',
    'btn.fill':'Vos consignes','btn.send':'Envoyer','btn.choose':'Je choisis cette formule',
    'devis.h2':'📝 Vos consignes','devis.sub':'Choisissez, décrivez, envoyez — je reçois vos consignes.','devis.type':'Type de site','devis.colors':'Palette / couleurs','devis.style':'Style visuel',
    'devis.style1':'Sobre & élégant','devis.style2':'Créatif & coloré','devis.style3':'Minimal & pro','devis.style4':'Nature & doux',
    'devis.integrations':'Intégrations souhaitées','devis.int.form':'Formulaire contact','devis.int.social':'Réseaux sociaux','devis.int.gallery':'Galerie',
    'devis.other':'Autres demandes','devis.name':'Prénom / Nom','devis.email':'Email','devis.note':'Aucun envoi serveur : votre logiciel e-mail s’ouvre avec le message prérempli.',
    'devis.opt.cv':'CV','devis.opt.vitrine':'Vitrine','devis.opt.portfolio':'Portfolio','devis.opt.other':'Autre',
    'models.h2':'🎨 Modèles prêts','models.sub':'Choisis un style, ouvre la démo, et dis-moi lequel tu veux.','models.demo':'Voir le modèle',
    'models.cv.title':'CV — sobre & pro','models.cv.desc':'Idéal candidature ou profil pro.',
    'models.port.title':'Portfolio — créatif','models.port.desc':'Parfait artistes & designers.',
    'models.vit.title':'Vitrine — business','models.vit.desc':'Entreprises & indépendants.',
    'pricing.h2':'🧾 Formules EternaWeb','pricing.sub':'CV & mini-sites vitrines express — hébergement inclus',
    'pricing.card1.title':'🌿 Pack Essentiel – 49 €','pricing.card1.li1':'CV en ligne simple (1 page)','pricing.card1.li2':'Personnalisation avec infos + photo','pricing.card1.li3':'Design élégant & responsive','pricing.card1.li4':'Livraison sous 48h','pricing.card1.note':'Idéal pour : candidatures',
    'pricing.card2.title':'✨ Pack Vitrine – 89 €','pricing.card2.li1':'Mini-site vitrine (2–3 pages)','pricing.card2.li2':'Accueil + présentation produits/services','pricing.card2.li3':'Boutons WhatsApp, PayPal, réseaux','pricing.card2.li4':'Design harmonieux & responsive','pricing.card2.note':'Idéal pour : artisans, freelances',
    'pricing.card3.title':'💎 Pack Premium – 129 €','pricing.card3.li1':'Tout le Pack Vitrine','pricing.card3.li2':'Création/refonte logo','pricing.card3.li3':'Conseils branding','pricing.card3.li4':'SEO de base + Galerie/FAQ','pricing.card3.note':'Idéal pour : lancement complet',
    'testi.h2':'💬 Témoignages','testi.t1':'“Super réactive et professionnelle, mon site a été en ligne le jour même !”','testi.c1':'— Claire B.','testi.t2':'“Design élégant, clair, et surtout… mes clients m’écrivent directement via WhatsApp !”','testi.c2':'— Malik T.','testi.t3':'“Excellent rapport qualité/prix. Je recommande à 100 %.”','testi.c3':'— Sofia M.',
    'footer.info':'Infos utiles','footer.contact':'Contact','footer.about':'À propos','footer.security':'Sécurité','footer.privacy':'Confidentialité','footer.code':'Code de conduite','footer.faq':'FAQ'
  },

  en: {
    'nav.menu':'Menu','nav.cv':'CV','nav.portfolio':'Portfolio','nav.vitrine':'Showcase','nav.tarifs':'Pricing','nav.devis':'Your brief','nav.temoignages':'Testimonials','nav.modeles':'Templates',
    'hero.title':'EternaWeb','hero.subtitle':'CV & showcase sites — online in 48 hours','hero.lead':'✨ Premium design, fast integrations, and a turnkey result.','cta.whatsapp':'WhatsApp','cta.paypal':'PayPal',
    'brief.h2':'Your site in 3 steps','brief.li1':'Choose a plan.','brief.li2':'Share your preferences (colors, style, integrations).','brief.li3':'I build and send a quick mockup.',
    'btn.fill':'Your brief','btn.send':'Send','btn.choose':'Choose this plan',
    'devis.h2':'📝 Your brief','devis.sub':'Pick, describe, send — I receive your instructions.','devis.type':'Site type','devis.colors':'Palette / colors','devis.style':'Visual style',
    'devis.style1':'Sober & elegant','devis.style2':'Creative & colorful','devis.style3':'Minimal & pro','devis.style4':'Nature & soft',
    'devis.integrations':'Desired integrations','devis.int.form':'Contact form','devis.int.social':'Social media','devis.int.gallery':'Gallery',
    'devis.other':'Other requests','devis.name':'First / Last name','devis.email':'Email','devis.note':'No server: your email app opens with a prefilled message.',
    'devis.opt.cv':'CV','devis.opt.vitrine':'Showcase','devis.opt.portfolio':'Portfolio','devis.opt.other':'Other',
    'models.h2':'🎨 Ready-made templates','models.sub':'Pick a style, open the demo, and tell me which you want.','models.demo':'View template',
    'models.cv.title':'CV — clean & pro','models.cv.desc':'Great for job applications.',
    'models.port.title':'Portfolio — creative','models.port.desc':'Perfect for artists & designers.',
    'models.vit.title':'Showcase — business','models.vit.desc':'For businesses & freelancers.',
    'pricing.h2':'🧾 EternaWeb plans','pricing.sub':'CV & mini showcase sites — hosting included',
    'pricing.card1.title':'🌿 Essential – €49','pricing.card1.li1':'Simple online CV (1 page)','pricing.card1.li2':'Personalization with info + photo','pricing.card1.li3':'Elegant & responsive design','pricing.card1.li4':'Delivery within 48h','pricing.card1.note':'Ideal for job applications',
    'pricing.card2.title':'✨ Showcase – €89','pricing.card2.li1':'Mini site (2–3 pages)','pricing.card2.li2':'Home + products/services','pricing.card2.li3':'WhatsApp, PayPal, social buttons','pricing.card2.li4':'Harmonious, responsive design','pricing.card2.note':'Ideal for artisans, freelancers',
    'pricing.card3.title':'💎 Premium – €129','pricing.card3.li1':'Everything in Showcase','pricing.card3.li2':'Logo creation/redesign','pricing.card3.li3':'Branding advice','pricing.card3.li4':'Basic SEO + Gallery/FAQ','pricing.card3.note':'Ideal for a full launch',
    'testi.h2':'💬 Testimonials','testi.t1':'“Super responsive and professional — my site was online the same day!”','testi.c1':'— Claire B.','testi.t2':'“Elegant, clear design — clients contact me directly via WhatsApp!”','testi.c2':'— Malik T.','testi.t3':'“Excellent value for money. 100% recommended.”','testi.c3':'— Sofia M.',
    'footer.info':'Useful info','footer.contact':'Contact','footer.about':'About','footer.security':'Security','footer.privacy':'Privacy','footer.code':'Code of conduct','footer.faq':'FAQ'
  },

  nl: {
    'nav.menu':'Menu','nav.cv':'CV','nav.portfolio':'Portfolio','nav.vitrine':'Vitrinesite','nav.tarifs':'Prijzen','nav.devis':'Uw instructies','nav.temoignages':'Getuigenissen','nav.modeles':'Modellen',
    'hero.title':'EternaWeb','hero.subtitle':'CV’s en vitrinesites — online binnen 48 uur','hero.lead':'✨ Premium ontwerp, snelle integraties en een kant-en-klaar resultaat.','cta.whatsapp':'WhatsApp','cta.paypal':'PayPal',
    'brief.h2':'Uw site in 3 stappen','brief.li1':'Kies een pakket.','brief.li2':'Deel uw voorkeuren (kleuren, stijl, integraties).','brief.li3':'Ik bouw en stuur een snelle mock-up.',
    'btn.fill':'Uw instructies','btn.send':'Verzenden','btn.choose':'Deze formule kiezen',
    'devis.h2':'📝 Uw instructies','devis.sub':'Kies, beschrijf, verzend — ik ontvang uw verzoek.','devis.type':'Soort site','devis.colors':'Palet / kleuren','devis.style':'Visuele stijl',
    'devis.style1':'Eenvoudig & elegant','devis.style2':'Creatief & kleurrijk','devis.style3':'Minimal & professioneel','devis.style4':'Natuurlijk & zacht',
    'devis.integrations':'Gewenste integraties','devis.int.form':'Contactformulier','devis.int.social':'Sociale media','devis.int.gallery':'Galerij',
    'devis.other':'Andere verzoeken','devis.name':'Voornaam / Achternaam','devis.email':'E-mail','devis.note':'Geen server: uw e-mailapp opent met een vooraf ingevuld bericht.',
    'devis.opt.cv':'CV','devis.opt.vitrine':'Vitrine','devis.opt.portfolio':'Portfolio','devis.opt.other':'Andere',
    'models.h2':'🎨 Klaar-staande modellen','models.sub':'Kies een stijl, open de demo en zeg me welke je wilt.','models.demo':'Bekijk model',
    'models.cv.title':'CV — strak & professioneel','models.cv.desc':'Ideaal voor sollicitaties.',
    'models.port.title':'Portfolio — creatief','models.port.desc':'Perfect voor kunstenaars & ontwerpers.',
    'models.vit.title':'Vitrine — zakelijk','models.vit.desc':'Voor bedrijven & freelancers.',
    'pricing.h2':'🧾 EternaWeb-pakketten','pricing.sub':'CV & mini-vitrinesites — hosting inbegrepen',
    'pricing.card1.title':'🌿 Essentieel – €49','pricing.card1.li1':'Eenvoudig online CV (1 pagina)','pricing.card1.li2':'Personalisatie met info + foto','pricing.card1.li3':'Elegant & responsief ontwerp','pricing.card1.li4':'Levering binnen 48u','pricing.card1.note':'Ideaal voor sollicitaties',
    'pricing.card2.title':'✨ Vitrine – €89','pricing.card2.li1':'Mini-site (2–3 pagina’s)','pricing.card2.li2':'Home + producten/diensten','pricing.card2.li3':'WhatsApp, PayPal, sociale knoppen','pricing.card2.li4':'Harmonieus & responsief ontwerp','pricing.card2.note':'Ideaal voor ambachtslieden, freelancers',
    'pricing.card3.title':'💎 Premium – €129','pricing.card3.li1':'Alles uit Vitrine','pricing.card3.li2':'Logo creatie/herontwerp','pricing.card3.li3':'Brandingadvies','pricing.card3.li4':'Basis-SEO + Galerij/FAQ','pricing.card3.note':'Ideaal voor een complete lancering',
    'testi.h2':'💬 Getuigenissen','testi.t1':'“Super responsief en professioneel — mijn site stond dezelfde dag online!”','testi.c1':'— Claire B.','testi.t2':'“Elegant, duidelijk ontwerp — klanten berichten me direct via WhatsApp!”','testi.c2':'— Malik T.','testi.t3':'“Uitstekende prijs-kwaliteitverhouding. 100% aanbevolen.”','testi.c3':'— Sofia M.',
    'footer.info':'Nuttige info','footer.contact':'Contact','footer.about':'Over','footer.security':'Beveiliging','footer.privacy':'Privacy','footer.code':'Gedragscode','footer.faq':'FAQ'
  },

  ru: {
    'nav.menu':'Меню','nav.cv':'Резюме','nav.portfolio':'Портфолио','nav.vitrine':'Витрина','nav.tarifs':'Тарифы','nav.devis':'Ваши пожелания','nav.temoignages':'Отзывы','nav.modeles':'Шаблоны',
    'hero.title':'EternaWeb','hero.subtitle':'Резюме и витринные сайты — онлайн за 48 часов','hero.lead':'✨ Премиум-дизайн, быстрая интеграция и готовый результат.','cta.whatsapp':'WhatsApp','cta.paypal':'PayPal',
    'brief.h2':'Ваш сайт в 3 шага','brief.li1':'Выберите пакет.','brief.li2':'Укажите предпочтения (цвета, стиль, интеграции).','brief.li3':'Сделаю и пришлю быстрый макет.',
    'btn.fill':'Ваши пожелания','btn.send':'Отправить','btn.choose':'Выбрать этот пакет',
    'devis.h2':'📝 Ваши пожелания','devis.sub':'Выберите, опишите, отправьте — я получу ваши инструкции.','devis.type':'Тип сайта','devis.colors':'Палитра / цвета','devis.style':'Визуальный стиль',
    'devis.style1':'Сдержанный и элегантный','devis.style2':'Креативный и яркий','devis.style3':'Минималистичный и профессиональный','devis.style4':'Природный и мягкий',
    'devis.integrations':'Необходимые интеграции','devis.int.form':'Контактная форма','devis.int.social':'Соцсети','devis.int.gallery':'Галерея',
    'devis.other':'Другие пожелания','devis.name':'Имя / Фамилия','devis.email':'Email','devis.note':'Без сервера: ваше почтовое приложение откроется с заполненным письмом.',
    'devis.opt.cv':'Резюме','devis.opt.vitrine':'Витрина','devis.opt.portfolio':'Портфолио','devis.opt.other':'Другое',
    'models.h2':'🎨 Готовые шаблоны','models.sub':'Выберите стиль, откройте демо и скажите, какой вам нужен.','models.demo':'Смотреть шаблон',
    'models.cv.title':'Резюме — профессионально','models.cv.desc':'Идеально для откликов на вакансии.',
    'models.port.title':'Портфолио — креативное','models.port.desc':'Подходит художникам и дизайнерам.',
    'models.vit.title':'Витрина — бизнес','models.vit.desc':'Для компаний и фрилансеров.',
    'pricing.h2':'🧾 Тарифы EternaWeb','pricing.sub':'Резюме и мини-витрины — хостинг включён',
    'pricing.card1.title':'🌿 Essential – 49 €','pricing.card1.li1':'Простой онлайн-резюме (1 страница)','pricing.card1.li2':'Персонализация: данные + фото','pricing.card1.li3':'Элегантный адаптивный дизайн','pricing.card1.li4':'Готово за 48 часов','pricing.card1.note':'Идеально для вакансий',
    'pricing.card2.title':'✨ Витрина – 89 €','pricing.card2.li1':'Мини-сайт (2–3 страницы)','pricing.card2.li2':'Главная + услуги/товары','pricing.card2.li3':'Кнопки WhatsApp, PayPal, соцсети','pricing.card2.li4':'Адаптивный дизайн','pricing.card2.note':'Идеально для мастеров и фрилансеров',
    'pricing.card3.title':'💎 Premium – 129 €','pricing.card3.li1':'Всё из “Витрина”','pricing.card3.li2':'Создание/редизайн логотипа','pricing.card3.li3':'Брендинг-консультация','pricing.card3.li4':'Базовое SEO + Галерея/FAQ','pricing.card3.note':'Идеально для запуска',
    'testi.h2':'💬 Отзывы','testi.t1':'«Очень оперативно и профессионально — мой сайт был онлайн в тот же день!»','testi.c1':'— Клер Б.','testi.t2':'«Элегантный и понятный дизайн — клиенты пишут прямо в WhatsApp!»','testi.c2':'— Малик Т.','testi.t3':'«Отличное соотношение цены и качества. Рекомендую!»','testi.c3':'— София М.',
    'footer.info':'Полезная информация','footer.contact':'Контакты','footer.about':'О нас','footer.security':'Безопасность','footer.privacy':'Конфиденциальность','footer.code':'Кодекс поведения','footer.faq':'FAQ'
  },

  de: {
    'nav.menu':'Menü','nav.cv':'Lebenslauf','nav.portfolio':'Portfolio','nav.vitrine':'Schaufenster','nav.tarifs':'Preise','nav.devis':'Ihr Briefing','nav.temoignages':'Referenzen','nav.modeles':'Vorlagen',
    'hero.title':'EternaWeb','hero.subtitle':'Lebensläufe & Schaufensterseiten — online in 48 Stunden','hero.lead':'✨ Premium-Design, schnelle Integrationen und ein schlüsselfertiges Ergebnis.','cta.whatsapp':'WhatsApp','cta.paypal':'PayPal',
    'brief.h2':'Ihre Website in 3 Schritten','brief.li1':'Wählen Sie ein Paket.','brief.li2':'Teilen Sie Ihre Präferenzen (Farben, Stil, Integrationen).','brief.li3':'Ich erstelle und sende ein schnelles Mockup.',
    'btn.fill':'Ihr Briefing','btn.send':'Senden','btn.choose':'Diesen Tarif wählen',
    'devis.h2':'📝 Ihr Briefing','devis.sub':'Auswählen, beschreiben, senden — ich erhalte Ihre Angaben.','devis.type':'Seitentyp','devis.colors':'Palette / Farben','devis.style':'Visueller Stil',
    'devis.style1':'Schlicht & elegant','devis.style2':'Kreativ & farbenfroh','devis.style3':'Minimal & professionell','devis.style4':'Natürlich & sanft',
    'devis.integrations':'Gewünschte Integrationen','devis.int.form':'Kontaktformular','devis.int.social':'Soziale Medien','devis.int.gallery':'Galerie',
    'devis.other':'Weitere Wünsche','devis.name':'Vor-/Nachname','devis.email':'E-Mail','devis.note':'Kein Server: Ihre Mail-App öffnet sich mit einer ausgefüllten Nachricht.',
    'devis.opt.cv':'Lebenslauf','devis.opt.vitrine':'Schaufenster','devis.opt.portfolio':'Portfolio','devis.opt.other':'Andere',
    'models.h2':'🎨 Fertige Vorlagen','models.sub':'Wählen Sie einen Stil, öffnen Sie die Demo und sagen Sie mir, welchen Sie möchten.','models.demo':'Vorlage ansehen',
    'models.cv.title':'Lebenslauf — klar & professionell','models.cv.desc':'Ideal für Bewerbungen.',
    'models.port.title':'Portfolio — kreativ','models.port.desc':'Perfekt für Künstler & Designer.',
    'models.vit.title':'Schaufenster — Business','models.vit.desc':'Für Unternehmen & Freiberufler.',
    'pricing.h2':'🧾 EternaWeb-Pakete','pricing.sub':'Lebenslauf & Mini-Schaufensterseiten — Hosting inklusive',
    'pricing.card1.title':'🌿 Essenziell – 49 €','pricing.card1.li1':'Einfacher Online-Lebenslauf (1 Seite)','pricing.card1.li2':'Personalisierung mit Infos + Foto','pricing.card1.li3':'Elegantes, responsives Design','pricing.card1.li4':'Lieferung in 48 Std.','pricing.card1.note':'Ideal für Bewerbungen',
    'pricing.card2.title':'✨ Schaufenster – 89 €','pricing.card2.li1':'Mini-Seite (2–3 Seiten)','pricing.card2.li2':'Start + Produkte/Dienstleistungen','pricing.card2.li3':'WhatsApp, PayPal, Social Buttons','pricing.card2.li4':'Harmonisches, responsives Design','pricing.card2.note':'Ideal für Handwerker, Freiberufler',
    'pricing.card3.title':'💎 Premium – 129 €','pricing.card3.li1':'Alles aus Schaufenster','pricing.card3.li2':'Logo-Erstellung/Redesign','pricing.card3.li3':'Branding-Beratung','pricing.card3.li4':'Basis-SEO + Galerie/FAQ','pricing.card3.note':'Ideal für den vollständigen Launch',
    'testi.h2':'💬 Referenzen','testi.t1':'„Super schnell und professionell — meine Seite war noch am selben Tag online!“','testi.c1':'— Claire B.','testi.t2':'„Elegantes, klares Design — Kunden schreiben mir direkt über WhatsApp!“','testi.c2':'— Malik T.','testi.t3':'„Top Preis-Leistung. Absolute Empfehlung.“','testi.c3':'— Sofia M.',
    'footer.info':'Nützliche Infos','footer.contact':'Kontakt','footer.about':'Über uns','footer.security':'Sicherheit','footer.privacy':'Datenschutz','footer.code':'Verhaltenskodex','footer.faq':'FAQ'
  },

  es: {
    'nav.menu':'Menú','nav.cv':'CV','nav.portfolio':'Portafolio','nav.vitrine':'Escaparate','nav.tarifs':'Precios','nav.devis':'Sus indicaciones','nav.temoignages':'Testimonios','nav.modeles':'Plantillas',
    'hero.title':'EternaWeb','hero.subtitle':'CV y sitios escaparate — en línea en 48 horas','hero.lead':'✨ Diseño premium, integraciones rápidas y un resultado llave en mano.','cta.whatsapp':'WhatsApp','cta.paypal':'PayPal',
    'brief.h2':'Tu sitio en 3 pasos','brief.li1':'Elige un plan.','brief.li2':'Indica tus preferencias (colores, estilo, integraciones).','brief.li3':'Creo y te envío un mockup rápido.',
    'btn.fill':'Sus indicaciones','btn.send':'Enviar','btn.choose':'Elegir este plan',
    'devis.h2':'📝 Sus indicaciones','devis.sub':'Elige, describe y envía — recibo tus instrucciones.','devis.type':'Tipo de sitio','devis.colors':'Paleta / colores','devis.style':'Estilo visual',
    'devis.style1':'Sobrio y elegante','devis.style2':'Creativo y colorido','devis.style3':'Minimal y profesional','devis.style4':'Natural y suave',
    'devis.integrations':'Integraciones deseadas','devis.int.form':'Formulario de contacto','devis.int.social':'Redes sociales','devis.int.gallery':'Galería',
    'devis.other':'Otras solicitudes','devis.name':'Nombre y apellidos','devis.email':'Email','devis.note':'Sin servidor: tu app de correo se abrirá con un mensaje pre-relleno.',
    'devis.opt.cv':'CV','devis.opt.vitrine':'Escaparate','devis.opt.portfolio':'Portafolio','devis.opt.other':'Otro',
    'models.h2':'🎨 Plantillas listas','models.sub':'Elige un estilo, abre la demo y dime cuál quieres.','models.demo':'Ver plantilla',
    'models.cv.title':'CV — limpio & pro','models.cv.desc':'Ideal para candidaturas.',
    'models.port.title':'Portafolio — creativo','models.port.desc':'Perfecto para artistas & diseñadores.',
    'models.vit.title':'Escaparate — negocios','models.vit.desc':'Para empresas & freelancers.',
    'pricing.h2':'🧾 Planes EternaWeb','pricing.sub':'CV y mini sitios escaparate — hosting incluido',
    'pricing.card1.title':'🌿 Esencial – 49 €','pricing.card1.li1':'CV en línea simple (1 página)','pricing.card1.li2':'Personalización con datos + foto','pricing.card1.li3':'Diseño elegante y responsive','pricing.card1.li4':'Entrega en 48 h','pricing.card1.note':'Ideal para candidaturas',
    'pricing.card2.title':'✨ Escaparate – 89 €','pricing.card2.li1':'Mini sitio (2–3 páginas)','pricing.card2.li2':'Inicio + productos/servicios','pricing.card2.li3':'Botones WhatsApp, PayPal, redes','pricing.card2.li4':'Diseño armonioso y responsive','pricing.card2.note':'Ideal para artesanos y freelancers',
    'pricing.card3.title':'💎 Premium – 129 €','pricing.card3.li1':'Todo lo del plan Escaparate','pricing.card3.li2':'Creación/rediseño de logo','pricing.card3.li3':'Asesoría de branding','pricing.card3.li4':'SEO básico + Galería/FAQ','pricing.card3.note':'Ideal para un lanzamiento completo',
    'testi.h2':'💬 Testimonios','testi.t1':'“Súper rápida y profesional: ¡mi sitio estuvo online el mismo día!”','testi.c1':'— Claire B.','testi.t2':'“Diseño elegante y claro; ¡mis clientes me escriben por WhatsApp!”','testi.c2':'— Malik T.','testi.t3':'“Excelente relación calidad-precio. 100% recomendado.”','testi.c3':'— Sofia M.',
    'footer.info':'Información útil','footer.contact':'Contacto','footer.about':'Acerca de','footer.security':'Seguridad','footer.privacy':'Privacidad','footer.code':'Código de conducta','footer.faq':'FAQ'
  },

  it: {
    'nav.menu':'Menù','nav.cv':'CV','nav.portfolio':'Portfolio','nav.vitrine':'Vetrina','nav.tarifs':'Prezzi','nav.devis':'Le tue indicazioni','nav.temoignages':'Testimonianze','nav.modeles':'Modelli',
    'hero.title':'EternaWeb','hero.subtitle':'CV e siti vetrina — online in 48 ore','hero.lead':'✨ Design premium, integrazioni rapide e un risultato chiavi in mano.','cta.whatsapp':'WhatsApp','cta.paypal':'PayPal',
    'brief.h2':'Il tuo sito in 3 passi','brief.li1':'Scegli un pacchetto.','brief.li2':'Indica preferenze (colori, stile, integrazioni).','brief.li3':'Creo e invio una bozza rapida.',
    'btn.fill':'Le tue indicazioni','btn.send':'Invia','btn.choose':'Scegli questo piano',
    'devis.h2':'📝 Le tue indicazioni','devis.sub':'Scegli, descrivi, invia — ricevo le tue istruzioni.','devis.type':'Tipo di sito','devis.colors':'Palette / colori','devis.style':'Stile visivo',
    'devis.style1':'Sobrio & elegante','devis.style2':'Creativo & colorato','devis.style3':'Minimal & professionale','devis.style4':'Naturale & delicato',
    'devis.integrations':'Integrazioni desiderate','devis.int.form':'Modulo di contatto','devis.int.social':'Social media','devis.int.gallery':'Galleria',
    'devis.other':'Altre richieste','devis.name':'Nome / Cognome','devis.email':'Email','devis.note':'Nessun server: si apre la tua app email con un messaggio pre-compilato.',
    'devis.opt.cv':'CV','devis.opt.vitrine':'Vetrina','devis.opt.portfolio':'Portfolio','devis.opt.other':'Altro',
    'models.h2':'🎨 Modelli pronti','models.sub':'Scegli uno stile, apri la demo e dimmi quale preferisci.','models.demo':'Vedi modello',
    'models.cv.title':'CV — pulito & pro','models.cv.desc':'Ideale per candidature.',
    'models.port.title':'Portfolio — creativo','models.port.desc':'Perfetto per artisti & designer.',
    'models.vit.title':'Vetrina — business','models.vit.desc':'Per aziende & freelance.',
    'pricing.h2':'🧾 Piani EternaWeb','pricing.sub':'CV & mini siti vetrina — hosting incluso',
    'pricing.card1.title':'🌿 Essenziale – 49 €','pricing.card1.li1':'CV online semplice (1 pagina)','pricing.card1.li2':'Personalizzazione con dati + foto','pricing.card1.li3':'Design elegante e responsive','pricing.card1.li4':'Consegna entro 48 h','pricing.card1.note':'Ideale per candidature',
    'pricing.card2.title':'✨ Vetrina – 89 €','pricing.card2.li1':'Mini sito (2–3 pagine)','pricing.card2.li2':'Home + prodotti/servizi','pricing.card2.li3':'Pulsanti WhatsApp, PayPal, social','pricing.card2.li4':'Design armonioso e responsive','pricing.card2.note':'Ideale per artigiani e freelance',
    'pricing.card3.title':'💎 Premium – 129 €','pricing.card3.li1':'Tutto del piano Vetrina','pricing.card3.li2':'Creazione/redo del logo','pricing.card3.li3':'Consulenza branding','pricing.card3.li4':'SEO base + Galleria/FAQ','pricing.card3.note':'Ideale per un lancio completo',
    'testi.h2':'💬 Testimonianze','testi.t1':'“Super reattiva e professionale — il mio sito era online lo stesso giorno!”','testi.c1':'— Claire B.','testi.t2':'“Design elegante e chiaro; i clienti mi scrivono direttamente su WhatsApp!”','testi.c2':'— Malik T.','testi.t3':'“Ottimo rapporto qualità-prezzo. Consigliatissimo.”','testi.c3':'— Sofia M.',
    'footer.info':'Info utili','footer.contact':'Contatti','footer.about':'Chi siamo','footer.security':'Sicurezza','footer.privacy':'Privacy','footer.code':'Codice di condotta','footer.faq':'FAQ'
  }
};  

  // ===== I18N =====
 I18N.fr = {
  // --- Navigation
  'nav.menu':'Menu','nav.cv':'CV','nav.portfolio':'Portfolio','nav.vitrine':'Vitrine','nav.tarifs':'Tarifs','nav.devis':'Vos consignes','nav.temoignages':'Témoignages','nav.modeles':'Modèles',

  // --- Hero
  'hero.title':'EternaWeb','hero.subtitle':'CV & vitrines express — en ligne en 48 heures','hero.lead':'✨ Un design premium, des intégrations rapides et un rendu clé en main.',
  'cta.whatsapp':'WhatsApp','cta.paypal':'PayPal',

  // --- Brief
  'brief.h2':'Votre site en 3 étapes',
  'brief.li1':'Choisissez une formule.','brief.li2':'Indiquez vos préférences (couleurs, style, intégrations).','brief.li3':'Je lance la création et vous envoie une maquette.',

  // --- Boutons
  'btn.fill':'Vos consignes','btn.send':'Envoyer','btn.choose':'Je choisis cette formule',

  // --- Devis
  'devis.h2':'📝 Vos consignes','devis.sub':'Choisissez, décrivez, envoyez — je reçois vos consignes.',
  'devis.type':'Type de site','devis.colors':'Palette / couleurs','devis.style':'Style visuel',
  'devis.style1':'Sobre & élégant','devis.style2':'Créatif & coloré','devis.style3':'Minimal & pro','devis.style4':'Nature & doux',
  'devis.integrations':'Intégrations souhaitées','devis.int.form':'Formulaire contact','devis.int.social':'Réseaux sociaux','devis.int.gallery':'Galerie',
  'devis.other':'Autres demandes','devis.name':'Prénom / Nom','devis.email':'Email','devis.note':'Aucun envoi serveur : votre logiciel e-mail s’ouvre avec le message prérempli.',

  // --- Pricing
  'pricing.h2':'🧾 Formules EternaWeb','pricing.sub':'CV & mini-sites vitrines express — hébergement inclus',
  'pricing.card1.title':'🌿 Pack Essentiel – 49 €','pricing.card1.li1':'CV en ligne simple (1 page)','pricing.card1.li2':'Personnalisation avec infos + photo','pricing.card1.li3':'Design élégant & responsive','pricing.card1.li4':'Livraison sous 48h','pricing.card1.note':'Idéal pour : candidatures',
  'pricing.card2.title':'✨ Pack Vitrine – 89 €','pricing.card2.li1':'Mini-site vitrine (2–3 pages)','pricing.card2.li2':'Accueil + présentation produits/services','pricing.card2.li3':'Boutons WhatsApp, PayPal, réseaux','pricing.card2.li4':'Design harmonieux & responsive','pricing.card2.note':'Idéal pour : artisans, freelances',
  'pricing.card3.title':'💎 Pack Premium – 129 €','pricing.card3.li1':'Tout le Pack Vitrine','pricing.card3.li2':'Création/refonte logo','pricing.card3.li3':'Conseils branding','pricing.card3.li4':'SEO de base + Galerie/FAQ','pricing.card3.note':'Idéal pour : lancement complet',

  // --- Témoignages
  'testi.h2':'💬 Témoignages',
  'testi.t1':'“Super réactive et professionnelle, mon site a été en ligne le jour même !”','testi.c1':'— Claire B.',
  'testi.t2':'“Design élégant, clair, et surtout… mes clients m’écrivent directement via WhatsApp !”','testi.c2':'— Malik T.',
  'testi.t3':'“Excellent rapport qualité/prix. Je recommande à 100 %.”','testi.c3':'— Sofia M.',

  // --- Footer
  'footer.info':'Infos utiles','footer.contact':'Contact','footer.about':'À propos','footer.security':'Sécurité','footer.privacy':'Confidentialité','footer.code':'Code de conduite','footer.faq':'FAQ',

  // --- Modèles prêts
  'models.h2':'🎨 Modèles prêts','models.sub':'Choisis un style, ouvre la démo, et dis-moi lequel tu veux.','models.demo':'Voir le modèle',
  'models.cv.title':'CV — sobre & pro','models.cv.desc':'Idéal candidature ou profil pro.',
  'models.port.title':'Portfolio — créatif','models.port.desc':'Parfait artistes & designers.',
  'models.vit.title':'Vitrine — business','models.vit.desc':'Entreprises & indépendants.',

  // --- Pages spécifiques
  'cv.h1':'Danielle Kabongo','cv.role':'Cheffe de projet digital','cv.profil':'Profil','cv.skills':'Compétences','cv.exp':'Expériences','cv.contact':'Contact',
  'port.h1':'Studio Eterna','port.tag':'Identités visuelles, UI, sites élégants.','port.about':'À propos',
  'vit.h1':'Cabinet Or & Co','vit.tag':'Conseil, expertise, accompagnement PME.','vit.services':'Nos services','vit.testi':'Témoignages','vit.contact':'Contact'
};

  I18N.en = {
  // --- Navigation
  'nav.menu':'Menu','nav.cv':'CV','nav.portfolio':'Portfolio','nav.vitrine':'Showcase','nav.tarifs':'Pricing','nav.devis':'Your brief','nav.temoignages':'Testimonials','nav.modeles':'Templates',

  // --- Hero
  'hero.title':'EternaWeb','hero.subtitle':'CV & showcase sites — online in 48 hours','hero.lead':'✨ Premium design, fast integrations, and a turnkey result.',
  'cta.whatsapp':'WhatsApp','cta.paypal':'PayPal',

  // --- Brief
  'brief.h2':'Your site in 3 steps',
  'brief.li1':'Choose a plan.','brief.li2':'Share your preferences (colors, style, integrations).','brief.li3':'I build and send a quick mockup.',

  // --- Buttons
  'btn.fill':'Your brief','btn.send':'Send','btn.choose':'Choose this plan',

  // --- Devis
  'devis.h2':'📝 Your brief','devis.sub':'Pick, describe, send — I receive your instructions.',
  'devis.type':'Site type','devis.colors':'Palette / colors','devis.style':'Visual style',
  'devis.style1':'Sober & elegant','devis.style2':'Creative & colorful','devis.style3':'Minimal & pro','devis.style4':'Nature & soft',
  'devis.integrations':'Desired integrations','devis.int.form':'Contact form','devis.int.social':'Social media','devis.int.gallery':'Gallery',
  'devis.other':'Other requests','devis.name':'First / Last name','devis.email':'Email','devis.note':'No server: your email app opens with a prefilled message.',

  // --- Pricing
  'pricing.h2':'🧾 EternaWeb plans','pricing.sub':'CV & mini showcase sites — hosting included',
  'pricing.card1.title':'🌿 Essential – €49','pricing.card1.li1':'Simple online CV (1 page)','pricing.card1.li2':'Personalization with info + photo','pricing.card1.li3':'Elegant & responsive design','pricing.card1.li4':'Delivery within 48h','pricing.card1.note':'Ideal for job applications',
  'pricing.card2.title':'✨ Showcase – €89','pricing.card2.li1':'Mini site (2–3 pages)','pricing.card2.li2':'Home + products/services','pricing.card2.li3':'WhatsApp, PayPal, social buttons','pricing.card2.li4':'Harmonious, responsive design','pricing.card2.note':'Ideal for artisans, freelancers',
  'pricing.card3.title':'💎 Premium – €129','pricing.card3.li1':'Everything in Showcase','pricing.card3.li2':'Logo creation/redesign','pricing.card3.li3':'Branding advice','pricing.card3.li4':'Basic SEO + Gallery/FAQ','pricing.card3.note':'Ideal for a full launch',

  // --- Testimonials
  'testi.h2':'💬 Testimonials',
  'testi.t1':'“Super responsive and professional — my site was online the same day!”','testi.c1':'— Claire B.',
  'testi.t2':'“Elegant, clear design — clients contact me directly via WhatsApp!”','testi.c2':'— Malik T.',
  'testi.t3':'“Excellent value for money. 100% recommended.”','testi.c3':'— Sofia M.',

  // --- Footer
  'footer.info':'Useful info','footer.contact':'Contact','footer.about':'About','footer.security':'Security','footer.privacy':'Privacy','footer.code':'Code of conduct','footer.faq':'FAQ',

  // --- Templates
  'models.h2':'🎨 Ready-made templates','models.sub':'Pick a style, open the demo, and tell me which you want.','models.demo':'View template',
  'models.cv.title':'CV — clean & pro','models.cv.desc':'Great for job applications.',
  'models.port.title':'Portfolio — creative','models.port.desc':'Perfect for artists & designers.',
  'models.vit.title':'Showcase — business','models.vit.desc':'For businesses & freelancers.',

  // --- Page specifics
  'cv.h1':'Danielle Kabongo','cv.role':'Digital Project Lead','cv.profil':'Profile','cv.skills':'Skills','cv.exp':'Experience','cv.contact':'Contact',
  'port.h1':'Studio Eterna','port.tag':'Visual identities, UI, elegant sites.','port.about':'About',
  'vit.h1':'Or & Co Consulting','vit.tag':'Consulting, expertise, SME support.','vit.services':'Our services','vit.testi':'Testimonials','vit.contact':'Contact'
};

  I18N.nl = {
  // --- Navigatie
  'nav.menu':'Menu','nav.cv':'CV','nav.portfolio':'Portfolio','nav.vitrine':'Vitrinesite','nav.tarifs':'Prijzen','nav.devis':'Uw instructies','nav.temoignages':'Getuigenissen','nav.modeles':'Sjablonen',

  // --- Hero
  'hero.title':'EternaWeb','hero.subtitle':'CV’s en vitrinesites — online binnen 48 uur','hero.lead':'✨ Premium ontwerp, snelle integraties en een kant-en-klaar resultaat.',
  'cta.whatsapp':'WhatsApp','cta.paypal':'PayPal',

  // --- Stappen
  'brief.h2':'Uw site in 3 stappen',
  'brief.li1':'Kies een pakket.','brief.li2':'Deel uw voorkeuren (kleuren, stijl, integraties).','brief.li3':'Ik bouw en stuur een snelle mock-up.',

  // --- Knoppen
  'btn.fill':'Uw instructies','btn.send':'Verzenden','btn.choose':'Deze formule kiezen',

  // --- Devis
  'devis.h2':'📝 Uw instructies','devis.sub':'Kies, beschrijf, verzend — ik ontvang uw verzoek.',
  'devis.type':'Soort site','devis.colors':'Palet / kleuren','devis.style':'Visuele stijl',
  'devis.style1':'Eenvoudig & elegant','devis.style2':'Creatief & kleurrijk','devis.style3':'Minimal & professioneel','devis.style4':'Natuurlijk & zacht',
  'devis.integrations':'Gewenste integraties','devis.int.form':'Contactformulier','devis.int.social':'Sociale media','devis.int.gallery':'Galerij',
  'devis.other':'Andere verzoeken','devis.name':'Voornaam / Achternaam','devis.email':'E-mail','devis.note':'Geen server: uw e-mailapp opent met een vooraf ingevuld bericht.',

  // --- Tarieven
  'pricing.h2':'🧾 EternaWeb-pakketten','pricing.sub':'CV & mini-vitrinesites — hosting inbegrepen',
  'pricing.card1.title':'🌿 Essentieel – €49','pricing.card1.li1':'Eenvoudig online CV (1 pagina)','pricing.card1.li2':'Personalisatie met info + foto','pricing.card1.li3':'Elegant & responsief ontwerp','pricing.card1.li4':'Levering binnen 48u','pricing.card1.note':'Ideaal voor sollicitaties',
  'pricing.card2.title':'✨ Vitrine – €89','pricing.card2.li1':'Mini-site (2–3 pagina’s)','pricing.card2.li2':'Home + producten/diensten','pricing.card2.li3':'WhatsApp, PayPal, sociale knoppen','pricing.card2.li4':'Harmonieus & responsief ontwerp','pricing.card2.note':'Ideaal voor ambachtslieden, freelancers',
  'pricing.card3.title':'💎 Premium – €129','pricing.card3.li1':'Alles uit Vitrine','pricing.card3.li2':'Logo creatie/herontwerp','pricing.card3.li3':'Brandingadvies','pricing.card3.li4':'Basis-SEO + Galerij/FAQ','pricing.card3.note':'Ideaal voor een complete lancering',

  // --- Getuigenissen
  'testi.h2':'💬 Getuigenissen',
  'testi.t1':'“Super responsief en professioneel — mijn site stond dezelfde dag online!”','testi.c1':'— Claire B.',
  'testi.t2':'“Elegant, duidelijk ontwerp — klanten berichten me direct via WhatsApp!”','testi.c2':'— Malik T.',
  'testi.t3':'“Uitstekende prijs-kwaliteitverhouding. 100% aanbevolen.”','testi.c3':'— Sofia M.',

  // --- Footer
  'footer.info':'Nuttige info','footer.contact':'Contact','footer.about':'Over','footer.security':'Beveiliging','footer.privacy':'Privacy','footer.code':'Gedragscode','footer.faq':'FAQ',

  // --- Sjablonen
  'models.h2':'🎨 Klaarstaande sjablonen','models.sub':'Kies een stijl, open de demo en zeg me welke u wilt.','models.demo':'Bekijk sjabloon',
  'models.cv.title':'CV — eenvoudig & professioneel','models.cv.desc':'Ideaal voor sollicitaties.',
  'models.port.title':'Portfolio — creatief','models.port.desc':'Perfect voor artiesten & ontwerpers.',
  'models.vit.title':'Vitrine — business','models.vit.desc':'Voor bedrijven & freelancers.',

  // --- Pagina’s
  'cv.h1':'Danielle Kabongo','cv.role':'Digital Project Lead','cv.profil':'Profiel','cv.skills':'Vaardigheden','cv.exp':'Ervaring','cv.contact':'Contact',
  'port.h1':'Studio Eterna','port.tag':'Visuele identiteiten, UI, elegante sites.','port.about':'Over',
  'vit.h1':'Or & Co Consulting','vit.tag':'Consultancy, expertise, KMO-ondersteuning.','vit.services':'Onze diensten','vit.testi':'Getuigenissen','vit.contact':'Contact'
};

 I18N.ru = {
  // --- Навигация
  'nav.menu':'Меню','nav.cv':'Резюме','nav.portfolio':'Портфолио','nav.vitrine':'Витрина','nav.tarifs':'Тарифы','nav.devis':'Ваши пожелания','nav.temoignages':'Отзывы','nav.modeles':'Шаблоны',

  // --- Hero
  'hero.title':'EternaWeb','hero.subtitle':'Резюме и витринные сайты — онлайн за 48 часов','hero.lead':'✨ Премиум-дизайн, быстрая интеграция и готовый результат.',
  'cta.whatsapp':'WhatsApp','cta.paypal':'PayPal',

  // --- Этапы
  'brief.h2':'Ваш сайт в 3 шага',
  'brief.li1':'Выберите пакет.','brief.li2':'Укажите предпочтения (цвета, стиль, интеграции).','brief.li3':'Я создам и пришлю быстрый макет.',

  // --- Кнопки
  'btn.fill':'Ваши пожелания','btn.send':'Отправить','btn.choose':'Выбрать этот пакет',

  // --- Devis
  'devis.h2':'📝 Ваши пожелания','devis.sub':'Выберите, опишите, отправьте — я получу ваши инструкции.',
  'devis.type':'Тип сайта','devis.colors':'Палитра / цвета','devis.style':'Визуальный стиль',
  'devis.style1':'Сдержанный и элегантный','devis.style2':'Креативный и яркий','devis.style3':'Минималистичный и профессиональный','devis.style4':'Природный и мягкий',
  'devis.integrations':'Необходимые интеграции','devis.int.form':'Контактная форма','devis.int.social':'Соцсети','devis.int.gallery':'Галерея',
  'devis.other':'Другие пожелания','devis.name':'Имя / Фамилия','devis.email':'Email','devis.note':'Без сервера: ваше почтовое приложение откроется с заполненным письмом.',

  // --- Тарифы
  'pricing.h2':'🧾 Тарифы EternaWeb','pricing.sub':'Резюме и мини-сайты-витрины — хостинг включён',
  'pricing.card1.title':'🌿 Essential – 49 €','pricing.card1.li1':'Простое онлайн-резюме (1 страница)','pricing.card1.li2':'Персонализация: данные + фото','pricing.card1.li3':'Элегантный адаптивный дизайн','pricing.card1.li4':'Готово за 48 часов','pricing.card1.note':'Идеально для откликов на вакансии',
  'pricing.card2.title':'✨ Витрина – 89 €','pricing.card2.li1':'Мини-сайт (2–3 страницы)','pricing.card2.li2':'Главная + услуги/товары','pricing.card2.li3':'Кнопки WhatsApp, PayPal, соцсети','pricing.card2.li4':'Гармоничный адаптивный дизайн','pricing.card2.note':'Идеально для мастеров и фрилансеров',
  'pricing.card3.title':'💎 Premium – 129 €','pricing.card3.li1':'Всё из пакета «Витрина»','pricing.card3.li2':'Создание/редизайн логотипа','pricing.card3.li3':'Брендинг-консультация','pricing.card3.li4':'Базовое SEO + Галерея/FAQ','pricing.card3.note':'Идеально для полного запуска',

  // --- Отзывы
  'testi.h2':'💬 Отзывы',
  'testi.t1':'«Очень оперативно и профессионально — мой сайт был онлайн в тот же день!»','testi.c1':'— Клер Б.',
  'testi.t2':'«Элегантный и понятный дизайн — клиенты пишут прямо в WhatsApp!»','testi.c2':'— Малик Т.',
  'testi.t3':'«Отличное соотношение цены и качества. Рекомендую!»','testi.c3':'— София М.',

  // --- Footer
  'footer.info':'Полезная информация','footer.contact':'Контакты','footer.about':'О нас','footer.security':'Безопасность','footer.privacy':'Конфиденциальность','footer.code':'Кодекс поведения','footer.faq':'FAQ',

  // --- Шаблоны
  'models.h2':'🎨 Готовые шаблоны','models.sub':'Выберите стиль, откройте демо и скажите, какой вам нужен.','models.demo':'Посмотреть шаблон',
  'models.cv.title':'Резюме — просто и профессионально','models.cv.desc':'Идеально для откликов на вакансии.',
  'models.port.title':'Портфолио — креативное','models.port.desc':'Идеально для художников и дизайнеров.',
  'models.vit.title':'Витрина — бизнес','models.vit.desc':'Для компаний и фрилансеров.',

  // --- Страницы
  'cv.h1':'Даниэль Кабонго','cv.role':'Руководитель цифровых проектов','cv.profil':'Профиль','cv.skills':'Навыки','cv.exp':'Опыт','cv.contact':'Контакт',
  'port.h1':'Студия Eterna','port.tag':'Визуальные идентичности, UI, элегантные сайты.','port.about':'О нас',
  'vit.h1':'Or & Co Consulting','vit.tag':'Консалтинг, экспертиза, поддержка МСП.','vit.services':'Наши услуги','vit.testi':'Отзывы','vit.contact':'Контакт'
};

 I18N.de = {
  // --- Navigation
  'nav.menu':'Menü','nav.cv':'Lebenslauf','nav.portfolio':'Portfolio','nav.vitrine':'Schaufenster','nav.tarifs':'Preise','nav.devis':'Ihr Briefing','nav.temoignages':'Referenzen','nav.modeles':'Vorlagen',

  // --- Hero
  'hero.title':'EternaWeb','hero.subtitle':'Lebensläufe & Schaufensterseiten — online in 48 Stunden','hero.lead':'✨ Premium-Design, schnelle Integrationen und ein schlüsselfertiges Ergebnis.',
  'cta.whatsapp':'WhatsApp','cta.paypal':'PayPal',

  // --- Schritte
  'brief.h2':'Ihre Website in 3 Schritten',
  'brief.li1':'Wählen Sie ein Paket.','brief.li2':'Teilen Sie Ihre Präferenzen (Farben, Stil, Integrationen).','brief.li3':'Ich erstelle und sende ein schnelles Mockup.',

  // --- Buttons
  'btn.fill':'Ihr Briefing','btn.send':'Senden','btn.choose':'Diesen Tarif wählen',

  // --- Devis
  'devis.h2':'📝 Ihr Briefing','devis.sub':'Auswählen, beschreiben, senden — ich erhalte Ihre Angaben.',
  'devis.type':'Seitentyp','devis.colors':'Palette / Farben','devis.style':'Visueller Stil',
  'devis.style1':'Schlicht & elegant','devis.style2':'Kreativ & farbenfroh','devis.style3':'Minimal & professionell','devis.style4':'Natürlich & sanft',
  'devis.integrations':'Gewünschte Integrationen','devis.int.form':'Kontaktformular','devis.int.social':'Soziale Medien','devis.int.gallery':'Galerie',
  'devis.other':'Weitere Wünsche','devis.name':'Vor-/Nachname','devis.email':'E-Mail','devis.note':'Kein Server: Ihre Mail-App öffnet sich mit einer ausgefüllten Nachricht.',

  // --- Preise
  'pricing.h2':'🧾 EternaWeb-Pakete','pricing.sub':'Lebenslauf & Mini-Schaufensterseiten — Hosting inklusive',
  'pricing.card1.title':'🌿 Essenziell – 49 €','pricing.card1.li1':'Einfacher Online-Lebenslauf (1 Seite)','pricing.card1.li2':'Personalisierung mit Infos + Foto','pricing.card1.li3':'Elegantes, responsives Design','pricing.card1.li4':'Lieferung in 48 Std.','pricing.card1.note':'Ideal für Bewerbungen',
  'pricing.card2.title':'✨ Schaufenster – 89 €','pricing.card2.li1':'Mini-Seite (2–3 Seiten)','pricing.card2.li2':'Start + Produkte/Dienstleistungen','pricing.card2.li3':'WhatsApp, PayPal, Social Buttons','pricing.card2.li4':'Harmonisches, responsives Design','pricing.card2.note':'Ideal für Handwerker, Freiberufler',
  'pricing.card3.title':'💎 Premium – 129 €','pricing.card3.li1':'Alles aus Schaufenster','pricing.card3.li2':'Logo-Erstellung/Redesign','pricing.card3.li3':'Branding-Beratung','pricing.card3.li4':'Basis-SEO + Galerie/FAQ','pricing.card3.note':'Ideal für den vollständigen Launch',

  // --- Testimonials
  'testi.h2':'💬 Referenzen',
  'testi.t1':'„Super schnell und professionell — meine Seite war noch am selben Tag online!“','testi.c1':'— Claire B.',
  'testi.t2':'„Elegantes, klares Design — Kunden schreiben mir direkt über WhatsApp!“','testi.c2':'— Malik T.',
  'testi.t3':'„Top Preis-Leistung. Absolute Empfehlung.“','testi.c3':'— Sofia M.',
// ===== Config =====
const WA_NUMBER = '33749723434';
const MAIL_TO   = 'contact@eternaweb.fr';

// ===== Helpers =====
const $  = (s, r=document)=>r.querySelector(s);
const $$ = (s, r=document)=>[...r.querySelectorAll(s)];
const isMobile = ()=>/Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);

// ===== Menu mobile =====
const menuBtn  = $('#menuBtn');
const mainMenu = $('#mainMenu');
menuBtn?.addEventListener('click', ()=>{
  mainMenu?.classList.toggle('show');
  menuBtn.setAttribute('aria-expanded', mainMenu?.classList.contains('show'));
});

// ===== Langues =====
const I18N = {
  fr: {
    'nav.menu':'Menu','nav.cv':'CV','nav.portfolio':'Portfolio','nav.vitrine':'Vitrine','nav.tarifs':'Tarifs','nav.devis':'Vos consignes','nav.temoignages':'Témoignages','nav.modeles':'Modèles',
    'hero.title':'EternaWeb','hero.subtitle':'CV & vitrines express — en ligne en 48 heures','hero.lead':'✨ Un design premium, des intégrations rapides et un rendu clé en main.','cta.whatsapp':'WhatsApp','cta.paypal':'PayPal',
    'brief.h2':'Votre site en 3 étapes','brief.li1':'Choisissez une formule.','brief.li2':'Indiquez vos préférences (couleurs, style, intégrations).','brief.li3':'Je lance la création et vous envoie une maquette.',
    'btn.fill':'Vos consignes','btn.send':'Envoyer','btn.choose':'Je choisis cette formule',
    'devis.h2':'📝 Vos consignes','devis.sub':'Choisissez, décrivez, envoyez — je reçois vos consignes.','devis.type':'Type de site','devis.colors':'Palette / couleurs','devis.style':'Style visuel',
    'devis.style1':'Sobre & élégant','devis.style2':'Créatif & coloré','devis.style3':'Minimal & pro','devis.style4':'Nature & doux',
    'devis.integrations':'Intégrations souhaitées','devis.int.form':'Formulaire contact','devis.int.social':'Réseaux sociaux','devis.int.gallery':'Galerie',
    'devis.other':'Autres demandes','devis.name':'Prénom / Nom','devis.email':'Email','devis.note':'Aucun envoi serveur : votre logiciel e-mail s’ouvre avec le message prérempli.',
    'devis.opt.cv':'CV','devis.opt.vitrine':'Vitrine','devis.opt.portfolio':'Portfolio','devis.opt.other':'Autre',
    'models.h2':'🎨 Modèles prêts','models.sub':'Choisis un style, ouvre la démo, et dis-moi lequel tu veux.','models.demo':'Voir le modèle',
    'models.cv.title':'CV — sobre & pro','models.cv.desc':'Idéal candidature ou profil pro.',
    'models.port.title':'Portfolio — créatif','models.port.desc':'Parfait artistes & designers.',
    'models.vit.title':'Vitrine — business','models.vit.desc':'Entreprises & indépendants.',
    'pricing.h2':'🧾 Formules EternaWeb','pricing.sub':'CV & mini-sites vitrines express — hébergement inclus',
    'pricing.card1.title':'🌿 Pack Essentiel – 49 €','pricing.card1.li1':'CV en ligne simple (1 page)','pricing.card1.li2':'Personnalisation avec infos + photo','pricing.card1.li3':'Design élégant & responsive','pricing.card1.li4':'Livraison sous 48h','pricing.card1.note':'Idéal pour : candidatures',
    'pricing.card2.title':'✨ Pack Vitrine – 89 €','pricing.card2.li1':'Mini-site vitrine (2–3 pages)','pricing.card2.li2':'Accueil + présentation produits/services','pricing.card2.li3':'Boutons WhatsApp, PayPal, réseaux','pricing.card2.li4':'Design harmonieux & responsive','pricing.card2.note':'Idéal pour : artisans, freelances',
    'pricing.card3.title':'💎 Pack Premium – 129 €','pricing.card3.li1':'Tout le Pack Vitrine','pricing.card3.li2':'Création/refonte logo','pricing.card3.li3':'Conseils branding','pricing.card3.li4':'SEO de base + Galerie/FAQ','pricing.card3.note':'Idéal pour : lancement complet',
    'testi.h2':'💬 Témoignages','testi.t1':'“Super réactive et professionnelle, mon site a été en ligne le jour même !”','testi.c1':'— Claire B.','testi.t2':'“Design élégant, clair, et surtout… mes clients m’écrivent directement via WhatsApp !”','testi.c2':'— Malik T.','testi.t3':'“Excellent rapport qualité/prix. Je recommande à 100 %.”','testi.c3':'— Sofia M.',
    'footer.info':'Infos utiles','footer.contact':'Contact','footer.about':'À propos','footer.security':'Sécurité','footer.privacy':'Confidentialité','footer.code':'Code de conduite','footer.faq':'FAQ',
    'cv.h1':'Danielle Kabongo','cv.role':'Cheffe de projet digital','cv.profil':'Profil','cv.skills':'Compétences','cv.exp':'Expériences','cv.contact':'Contact',
    'port.h1':'Studio Eterna','port.tag':'Identités visuelles, UI, sites élégants.','port.about':'À propos',
    'vit.h1':'Cabinet Or & Co','vit.tag':'Conseil, expertise, accompagnement PME.','vit.services':'Nos services','vit.testi':'Témoignages','vit.contact':'Contact'
  },

  // ⚡ Ajoute ici tes autres langues (en, nl, ru, de, es, it)
};

// ===== Lang switch (globe) =====
const langBtn  = $('#langBtn');
const langMenu = $('#langMenu');

if (langBtn && langMenu){
  langBtn.addEventListener('click', ()=>{
    const open = langMenu.classList.toggle('show');
    langBtn.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('click', (e)=>{
    if (!langMenu.contains(e.target) && e.target !== langBtn){
      langMenu.classList.remove('show');
      langBtn.setAttribute('aria-expanded','false');
    }
  });
  window.addEventListener('scroll', ()=>{
    langMenu.classList.remove('show');
    langBtn.setAttribute('aria-expanded','false');
  });
}

// ===== Appliquer la langue =====
function applyLang(lang){
  const d = I18N[lang] || I18N.fr;
  $$('[data-i18n]').forEach(el=>{
    const k = el.getAttribute('data-i18n');
    const val = d[k];
    if (val == null) return;
    if (/<[a-z][\s\S]*>/i.test(val)) el.innerHTML = val;
    else el.textContent = val;
  });
  localStorage.setItem('lang', lang);
  document.documentElement.setAttribute('lang', lang);
}

// Click sur un item du menu
$$('#langMenu .lang-item').forEach(b=>{
  b.addEventListener('click', (e)=>{
    e.preventDefault();
    applyLang(b.dataset.lang);
    langMenu.classList.remove('show');
    langBtn.setAttribute('aria-expanded','false');
  });
});

// Init
applyLang(localStorage.getItem('lang') || 'fr');

// ===== Scroll vers #devis =====
function openDevis(){
  const d = $('#devis');
  if (!d) return;
  d.classList.add('show');
  d.scrollIntoView({ behavior:'smooth', block:'start' });
}
$('#goDevis')?.addEventListener('click', (e)=>{ e.preventDefault(); openDevis(); });
$('#goBrief')?.addEventListener('click', (e)=>{ e.preventDefault(); openDevis(); });
if (location.hash === '#devis') {
  openDevis();
  history.replaceState(null, '', location.pathname + location.search);
}

// ===== Choix de plan =====
const planInput = $('#planInput');
document.querySelectorAll('a[href="#devis"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    e.preventDefault();
    openDevis();
  });
});

// ===== Envoi du formulaire (mailto) =====
const devisForm = $('#devisForm');
const sendForm  = $('#sendForm');
if (devisForm && sendForm){
  sendForm.addEventListener('click', (e)=>{
    e.preventDefault();
    const get = (n)=>devisForm.querySelector(`[name="${n}"]`)?.value?.trim() || '—';
    const checks = [...devisForm.querySelectorAll('input[name="int"]:checked')].map(i=>i.value).join(', ') || '—';

    const lignes = [
      'Devis EternaWeb',
      '---------------------------',
      `Formule : ${get('plan')}`,
      `Type de site : ${get('type')}`,
      `Couleurs : ${get('couleurs')}`,
      `Style : ${get('style')}`,
      `Intégrations : ${checks}`,
      `Autres demandes : ${get('contenu')}`,
      `Nom : ${get('nom')}`,
      `Email : ${get('email')}`,
      `Raison sociale : ${get('raison_sociale')}`,
    ];

    const subject = `EternaWeb – Devis ${get('plan')}`;
    const body    = encodeURIComponent(lignes.join('\n'));
    window.location.href = `mailto:${MAIL_TO}?subject=${encodeURIComponent(subject)}&body=${body}`;

    if (isMobile()){
      const t2 = encodeURIComponent(`Devis complété – ${get('plan')} – ${get('nom')}`);
      setTimeout(()=>window.open(`https://wa.me/${WA_NUMBER}?text=${t2}`,'_blank'),400);
    }

    alert("✅ Presque terminé !\n\n1) Vérifie et ENVOIE l'email qui s'ouvre.\n2) Tu recevras ma réponse avec la checklist (textes, images, logo, accès...).");
  });
}
