// =========================
// Config
// =========================
const WA_NUMBER = '33749723434';
const MAIL_TO   = 'contact@eternaweb.fr';

// Helpers rapides
const $  = (s, r=document)=>r.querySelector(s);
const $$ = (s, r=document)=>[...r.querySelectorAll(s)];
const isMobile = ()=>/Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);

// =========================
const I18N = {
  fr: {
    'nav.menu':'Menu','nav.cv':'CV','nav.portfolio':'Portfolio','nav.vitrine':'Vitrine',
    'nav.tarifs':'Tarifs','nav.devis':'Vos consignes','nav.temoignages':'Témoignages',
    'hero.title':'EternaWeb','hero.subtitle':'CV & vitrines express — en ligne en 48 heures',
    'hero.lead':'✨ Un design premium, des intégrations rapides et un rendu clé en main.',
    'cta.whatsapp':'WhatsApp','cta.paypal':'PayPal',
    'services.h2':'🚀 Nos services',
'services.sub':'Choisissez un type de mini-site 👇',
'services.demo':'Voir le service',
'services.cv.desc':'Idéal pour les candidatures ou profils pros.',
'services.port.desc':'Parfait pour artistes & designers.',
'services.vit.desc':'Pour entreprises & indépendants.',
    'devis.h2':'📝 Vos consignes','devis.sub':'Choisissez, décrivez, envoyez — je reçois vos consignes.',
    'devis.type':'Type de site','devis.opt.cv':'CV','devis.opt.vitrine':'Vitrine','devis.opt.portfolio':'Portfolio','devis.opt.other':'Autre',
    'devis.colors':'Palette / couleurs','devis.style':'Style visuel',
    'devis.style1':'Sobre & élégant','devis.style2':'Créatif & coloré','devis.style3':'Minimal & pro','devis.style4':'Nature & doux',
    'devis.integrations':'Intégrations souhaitées','devis.int.form':'Formulaire contact','devis.int.social':'Réseaux sociaux','devis.int.gallery':'Galerie',
    'devis.other':'Autres demandes','devis.name':'Prénom / Nom','devis.email':'Email',
    'devis.note':'Aucun envoi serveur : votre logiciel e-mail s’ouvre avec le message prérempli.',
    'btn.fill':'Vos consignes','btn.send':'Envoyer','btn.choose':'Je choisis cette formule',
    'pricing.h2':'🧾 Formules EternaWeb','pricing.sub':'CV & mini-sites vitrines express — hébergement inclus',
    'pricing.card1.title':'🌿 Pack Essentiel – 49 €','pricing.card1.li1':'CV en ligne simple (1 page)',
    'pricing.card1.li2':'Personnalisation avec infos + photo','pricing.card1.li3':'Design élégant & responsive',
    'pricing.card1.li4':'Livraison sous 48h','pricing.card1.note':'Idéal pour : candidatures',
    'pricing.card2.title':'✨ Pack Vitrine – 89 €','pricing.card2.li1':'Mini-site vitrine (2–3 pages)',
    'pricing.card2.li2':'Accueil + présentation produits/services','pricing.card2.li3':'Boutons WhatsApp, PayPal, réseaux',
    'pricing.card2.li4':'Design harmonieux & responsive','pricing.card2.note':'Idéal pour : artisans, freelances',
    'pricing.card3.title':'💎 Pack Premium – 129 €','pricing.card3.li1':'Tout le Pack Vitrine',
    'pricing.card3.li2':'Création/refonte logo','pricing.card3.li3':'Conseils branding','pricing.card3.li4':'SEO de base + Galerie/FAQ',
    'pricing.card3.note':'Idéal pour : lancement complet',
    'testi.h2':'💬 Témoignages','testi.t1':'“Super réactive et professionnelle, mon site a été en ligne le jour même !”','testi.c1':'— Claire B.',
    'testi.t2':'“Design élégant, clair, et surtout… mes clients m’écrivent directement via WhatsApp !”','testi.c2':'— Malik T.',
    'testi.t3':'“Excellent rapport qualité/prix. Je recommande à 100 %.”','testi.c3':'— Sofia M.',
    'footer.faq':'FAQ',
'footer.about':'À propos',
     'about.title': 'À propos de EternaWeb',
  'about.p1': 'EternaWeb est né d’un besoin simple : permettre à chacun de présenter son projet, son talent ou son offre avec clarté et professionnalisme, même sans compétences techniques.',
  'about.p2': '✨ En 2 jours, votre vitrine ou votre CV en ligne peut voir le jour, avec un style épuré, humain et intuitif. Que vous soyez artisan, coach, artiste, thérapeute ou en recherche d’emploi, vous méritez une présence en ligne qui vous reflète.',
  'about.missionTitle': 'Notre mission',
  'about.mission': 'Créer des sites simples, beaux et fonctionnels, pour révéler votre unicité au monde. Chez EternaWeb, on croit en la puissance du minimalisme allié à la bienveillance.',
  'about.targetTitle': 'À qui s’adresse EternaWeb ?',
  'about.li1': '• Aux artisans et créateurs qui veulent une vitrine douce et chaleureuse',
  'about.li2': '• Aux professionnels du bien-être en quête d’un espace simple et accueillant',
  'about.li3': '• Aux personnes en reconversion ou en recherche d’emploi, qui veulent un CV valorisant',
  'about.contact': '💌 Pour en savoir plus, discuter de votre projet ou demander un devis : <a href="mailto:contact@eternaweb.fr">contact@eternaweb.fr</a>',
  'about.back': '← Retour à l’accueil'
'footer.legal':'Mentions légales',
  'legal.title': 'Mentions légales - EternaWeb',
'legal.h1': 'Mentions légales',
'legal.editorTitle': 'Éditeur du site',
'legal.editorText': '<strong>EternaWeb</strong><br>Danielle Kabongo<br>Email : <a href="mailto:contact.eternaweb@gmail.com">contact.eternaweb@gmail.com</a>',
'legal.hostTitle': 'Hébergement',
'legal.hostText': 'Le site est hébergé gratuitement par <strong>GitHub Pages</strong><br>GitHub Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis<br>Site : <a href="https://pages.github.com/" target="_blank">pages.github.com</a>',
'legal.respTitle': 'Responsabilité',
'legal.respText': 'L’éditeur met à disposition des informations et services dans le cadre de la création de mini-sites vitrines. Cependant, il ne saurait être tenu responsable des erreurs ou de l’indisponibilité du site.',
'legal.ipTitle': 'Propriété intellectuelle',
'legal.ipText': 'Les contenus (textes, images, logos) créés par EternaWeb sont protégés. Toute reproduction sans autorisation est interdite.',
'legal.back': '← Retour à l’accueil',
'footer.privacy':'Confidentialité',
  'privacy.title': 'Confidentialité - EternaWeb',
'privacy.h1': 'Confidentialité',
'privacy.intro': 'La présente politique explique quelles données sont collectées lors de l’utilisation du site <strong>EternaWeb</strong>.',
'privacy.dataTitle': 'Données collectées',
'privacy.data1': 'Les données techniques collectées automatiquement par l’hébergeur GitHub (adresses IP, logs).',
'privacy.data2': 'Les informations transmises volontairement via les boutons de contact (WhatsApp, Instagram, Email, PayPal).',
'privacy.useTitle': 'Utilisation des données',
'privacy.useText': 'Les données sont utilisées uniquement pour permettre le bon fonctionnement du site et répondre aux demandes des utilisateurs. Aucune donnée n’est vendue ou transmise à des tiers en dehors des prestataires techniques (GitHub, WhatsApp, PayPal, Instagram).',
'privacy.rightsTitle': 'Droits des utilisateurs',
'privacy.rightsText': 'Conformément au RGPD, vous pouvez demander l’accès, la rectification ou la suppression de vos données en contactant : <a href="mailto:contact.eternaweb@gmail.com">contact.eternaweb@gmail.com</a>',
'privacy.cookiesTitle': 'Cookies',
'privacy.cookiesText': 'Le site n’utilise pas de cookies publicitaires. Seuls des cookies techniques peuvent être générés par GitHub Pages ou par les services tiers utilisés (WhatsApp, PayPal, Instagram).',
'privacy.back': '← Retour à l’accueil',
'footer.code':'Code de conduite',
  'code.title': 'Code de conduite - EternaWeb',
'code.h1': 'Code de conduite',
'code.intro': 'Chez <strong>EternaWeb</strong>, nous nous engageons à offrir un espace respectueux, sûr et bienveillant pour toutes et tous.',
'code.valuesTitle': '🌱 Nos valeurs fondamentales',
'code.value1': 'Respect mutuel, quelle que soit l’origine, l’identité ou les convictions',
'code.value2': 'Communication claire, douce et constructive',
'code.value3': 'Soutien et entraide dans les échanges',
'code.value4': 'Confidentialité des informations personnelles partagées',
'code.behaviorTitle': '🚫 Comportements inacceptables',
'code.behavior1': 'Tout type de harcèlement, intimidation ou langage discriminatoire',
'code.behavior2': 'Utilisation abusive des canaux de communication',
'code.behavior3': 'Partage non autorisé de données sensibles',
'code.engagementTitle': '🤝 Engagement de EternaWeb',
'code.engagement1': 'Nous nous réservons le droit de refuser tout projet ou échange qui ne respecte pas ce code de conduite.',
'code.engagement2': 'Nous encourageons chacun·e à faire preuve de courtoisie et à contribuer à une atmosphère de travail harmonieuse.',
'code.thanks': 'Merci d\'incarner l\'esprit EternaWeb : humain, éthique et inspiré ✨',
'code.back': '← Retour à l’accueil',
'footer.copy':'© 2025 EternaGlow — Tous droits réservés'
  },
  en: {
    'nav.menu':'Menu','nav.cv':'CV','nav.portfolio':'Portfolio','nav.vitrine':'Showcase',
    'nav.tarifs':'Pricing','nav.devis':'Your brief','nav.temoignages':'Testimonials',
    'hero.title':'EternaWeb','hero.subtitle':'CV & showcase sites — online in 48 hours',
    'hero.lead':'✨ Premium design, fast integrations, and a turnkey result.',
    'cta.whatsapp':'WhatsApp','cta.paypal':'PayPal',
    'services.h2':'🚀 Our Services',
    'services.sub':'Choose your mini-site type 👇',
    'services.demo':'View service',
    'services.cv.desc':'Ideal for professional resumes.',
    'services.port.desc':'Perfect for artists & designers.',
    'services.vit.desc':'For businesses & freelancers.',
    'devis.h2':'📝 Your brief','devis.sub':'Pick, describe, send — I receive your instructions.',
    'devis.type':'Site type','devis.opt.cv':'CV','devis.opt.vitrine':'Showcase','devis.opt.portfolio':'Portfolio','devis.opt.other':'Other',
    'devis.colors':'Palette / colors','devis.style':'Visual style',
    'devis.style1':'Sober & elegant','devis.style2':'Creative & colorful','devis.style3':'Minimal & pro','devis.style4':'Nature & soft',
    'devis.integrations':'Desired integrations','devis.int.form':'Contact form','devis.int.social':'Social media','devis.int.gallery':'Gallery',
    'devis.other':'Other requests','devis.name':'First / Last name','devis.email':'Email',
    'devis.note':'No server: your email app opens with a prefilled message.',
    'btn.fill':'Your brief','btn.send':'Send','btn.choose':'Choose this plan',
    'pricing.h2':'🧾 EternaWeb plans','pricing.sub':'CV & mini showcase sites — hosting included',
    'pricing.card1.title':'🌿 Essential – €49','pricing.card1.li1':'Simple online CV (1 page)',
    'pricing.card1.li2':'Personalization with info + photo','pricing.card1.li3':'Elegant & responsive design',
    'pricing.card1.li4':'Delivery within 48h','pricing.card1.note':'Ideal for job applications',
    'pricing.card2.title':'✨ Showcase – €89','pricing.card2.li1':'Mini site (2–3 pages)',
    'pricing.card2.li2':'Home + products/services','pricing.card2.li3':'WhatsApp, PayPal, social buttons',
    'pricing.card2.li4':'Harmonious, responsive design','pricing.card2.note':'Ideal for artisans, freelancers',
    'pricing.card3.title':'💎 Premium – €129','pricing.card3.li1':'Everything in Showcase',
    'pricing.card3.li2':'Logo creation/redesign','pricing.card3.li3':'Branding advice','pricing.card3.li4':'Basic SEO + Gallery/FAQ',
    'pricing.card3.note':'Ideal for a full launch',
    'testi.h2':'💬 Testimonials','testi.t1':'“Super responsive and professional — my site was online the same day!”','testi.c1':'— Claire B.',
    'testi.t2':'“Elegant, clear design — clients contact me directly via WhatsApp!”','testi.c2':'— Malik T.',
    'testi.t3':'“Excellent value for money. 100% recommended.”','testi.c3':'— Sofia M.',
    'footer.faq':'FAQ',
'footer.about':'About',
     'about.title': 'About EternaWeb',
  'about.p1': 'EternaWeb was born from a simple need: allowing anyone to present their project, talent or offer clearly and professionally, even without technical skills.',
  'about.p2': '✨ In just 2 days, your showcase or online CV can come to life — clean, human and intuitive. Whether you are a craftsman, coach, artist, therapist or job seeker, you deserve an online presence that reflects who you are.',
  'about.missionTitle': 'Our mission',
  'about.mission': 'We create simple, beautiful and functional websites to reveal your uniqueness to the world. At EternaWeb, we believe in the power of minimalism combined with kindness.',
  'about.targetTitle': 'Who is EternaWeb for?',
  'about.li1': '• For artisans and creators who want a warm and gentle showcase',
  'about.li2': '• For wellness professionals seeking a simple, welcoming space',
  'about.li3': '• For career changers or job seekers who want a standout CV',
  'about.contact': '💌 To learn more, discuss your project or request a quote: <a href="mailto:contact@eternaweb.fr">contact@eternaweb.fr</a>',
  'about.back': '← Back to home'
'footer.legal':'Legal Notice',
  'legal.title': 'Legal Notice - EternaWeb',
'legal.h1': 'Legal Notice',
'legal.editorTitle': 'Site publisher',
'legal.editorText': '<strong>EternaWeb</strong><br>Danielle Kabongo<br>Email: <a href="mailto:contact.eternaweb@gmail.com">contact.eternaweb@gmail.com</a>',
'legal.hostTitle': 'Hosting',
'legal.hostText': 'This site is hosted free of charge by <strong>GitHub Pages</strong><br>GitHub Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA<br>Website: <a href="https://pages.github.com/" target="_blank">pages.github.com</a>',
'legal.respTitle': 'Responsibility',
'legal.respText': 'The publisher provides information and services related to the creation of showcase mini-sites. However, it cannot be held liable for any errors or unavailability of the site.',
'legal.ipTitle': 'Intellectual property',
'legal.ipText': 'The content (texts, images, logos) created by EternaWeb is protected. Any reproduction without authorization is prohibited.',
'legal.back': '← Back to home',
'footer.privacy':'Privacy',
  'privacy.title': 'Privacy Policy - EternaWeb',
'privacy.h1': 'Privacy Policy',
'privacy.intro': 'This policy explains which data is collected when using the <strong>EternaWeb</strong> website.',
'privacy.dataTitle': 'Collected data',
'privacy.data1': 'Technical data automatically collected by the host GitHub (IP addresses, logs).',
'privacy.data2': 'Information voluntarily provided through contact buttons (WhatsApp, Instagram, Email, PayPal).',
'privacy.useTitle': 'Use of data',
'privacy.useText': 'Data is used solely to ensure the proper functioning of the site and to respond to user requests. No data is sold or shared with third parties, except for technical providers (GitHub, WhatsApp, PayPal, Instagram).',
'privacy.rightsTitle': 'User rights',
'privacy.rightsText': 'In accordance with GDPR, you may request access to, rectification, or deletion of your data by contacting: <a href="mailto:contact.eternaweb@gmail.com">contact.eternaweb@gmail.com</a>',
'privacy.cookiesTitle': 'Cookies',
'privacy.cookiesText': 'The site does not use advertising cookies. Only technical cookies may be generated by GitHub Pages or third-party services (WhatsApp, PayPal, Instagram).',
'privacy.back': '← Back to home',
'footer.code':'Code of Conduct',
  'code.title': 'Code of Conduct - EternaWeb',
'code.h1': 'Code of Conduct',
'code.intro': 'At <strong>EternaWeb</strong>, we are committed to offering a respectful, safe, and caring environment for everyone.',
'code.valuesTitle': '🌱 Our core values',
'code.value1': 'Mutual respect, regardless of origin, identity, or beliefs',
'code.value2': 'Clear, gentle, and constructive communication',
'code.value3': 'Support and collaboration in all exchanges',
'code.value4': 'Confidentiality of shared personal information',
'code.behaviorTitle': '🚫 Unacceptable behavior',
'code.behavior1': 'Any form of harassment, intimidation, or discriminatory language',
'code.behavior2': 'Abusive use of communication channels',
'code.behavior3': 'Unauthorized sharing of sensitive data',
'code.engagementTitle': '🤝 EternaWeb’s commitment',
'code.engagement1': 'We reserve the right to refuse any project or exchange that does not respect this code of conduct.',
'code.engagement2': 'We encourage everyone to act with courtesy and contribute to a harmonious work atmosphere.',
'code.thanks': 'Thank you for embodying the EternaWeb spirit: human, ethical, and inspired ✨',
'code.back': '← Back to home',
'footer.copy':'© 2025 EternaGlow — All rights reserved' 
  },
  
nl: {
    // --- Navigatie
    'nav.menu':'Menu','nav.cv':'CV','nav.portfolio':'Portfolio','nav.vitrine':'Vitrinesite',
    'nav.tarifs':'Prijzen','nav.devis':'Uw instructies','nav.temoignages':'Getuigenissen',

    // --- Hero
    'hero.title':'EternaWeb',
    'hero.subtitle':'CV’s en vitrinesites — online binnen 48 uur',
    'hero.lead':'✨ Premium ontwerp, snelle integraties en een kant-en-klaar resultaat.',
    'cta.whatsapp':'WhatsApp','cta.paypal':'PayPal',

    // --- Modellen
    'services.h2':'🚀 Onze diensten',
'services.sub':'Kies uw type mini-site 👇',
'services.demo':'Bekijk dienst',
'services.cv.desc':'Ideaal voor sollicitaties of professionele profielen.',
'services.port.desc':'Perfect voor artiesten en ontwerpers.',
'services.vit.desc':'Voor bedrijven en freelancers.',

    // --- Devis
    'devis.h2':'📝 Uw instructies',
    'devis.sub':'Kies, beschrijf, verzend — ik ontvang uw verzoek.',
    'devis.type':'Soort site',
    'devis.opt.cv':'CV','devis.opt.vitrine':'Vitrine','devis.opt.portfolio':'Portfolio','devis.opt.other':'Anders',
    'devis.colors':'Palet / kleuren',
    'devis.style':'Visuele stijl',
    'devis.style1':'Eenvoudig & elegant','devis.style2':'Creatief & kleurrijk','devis.style3':'Minimal & professioneel','devis.style4':'Natuurlijk & zacht',
    'devis.integrations':'Gewenste integraties',
    'devis.int.form':'Contactformulier','devis.int.social':'Sociale media','devis.int.gallery':'Galerij',
    'devis.other':'Andere verzoeken',
    'devis.name':'Voornaam / Achternaam',
    'devis.email':'E-mail',
    'devis.note':'Geen server: uw e-mailapp opent zich met een vooraf ingevuld bericht.',

    // --- Buttons
    'btn.fill':'Uw instructies','btn.send':'Verzenden','btn.choose':'Deze formule kiezen',

    // --- Prijzen
    'pricing.h2':'🧾 EternaWeb-pakketten',
    'pricing.sub':'CV & mini-vitrinesites — hosting inbegrepen',
    'pricing.card1.title':'🌿 Essentieel – €49',
    'pricing.card1.li1':'Eenvoudig online CV (1 pagina)',
    'pricing.card1.li2':'Personalisatie met info + foto',
    'pricing.card1.li3':'Elegant & responsief ontwerp',
    'pricing.card1.li4':'Levering binnen 48u',
    'pricing.card1.note':'Ideaal voor sollicitaties',

    'pricing.card2.title':'✨ Vitrine – €89',
    'pricing.card2.li1':'Mini-site vitrine (2–3 pagina’s)',
    'pricing.card2.li2':'Home + producten/diensten',
    'pricing.card2.li3':'WhatsApp, PayPal, sociale knoppen',
    'pricing.card2.li4':'Harmonieus & responsief ontwerp',
    'pricing.card2.note':'Ideaal voor ambachtslieden, freelancers',

    'pricing.card3.title':'💎 Premium – €129',
    'pricing.card3.li1':'Alles uit Vitrine',
    'pricing.card3.li2':'Logo creatie/herontwerp',
    'pricing.card3.li3':'Brandingadvies',
    'pricing.card3.li4':'Basis-SEO + Galerij/FAQ',
    'pricing.card3.note':'Ideaal voor een complete lancering',

    // --- Getuigenissen
    'testi.h2':'💬 Getuigenissen',
    'testi.t1':'“Super responsief en professioneel — mijn site stond dezelfde dag online!”','testi.c1':'— Claire B.',
    'testi.t2':'“Elegant, duidelijk ontwerp — klanten berichten me direct via WhatsApp!”','testi.c2':'— Malik T.',
    'testi.t3':'“Uitstekende prijs-kwaliteitverhouding. 100% aanbevolen.”','testi.c3':'— Sofia M.',

    // --- Footer
    'footer.faq':'FAQ',
'footer.about':'Over ons',
  'about.title': 'Over EternaWeb',
'about.p1': 'EternaWeb is ontstaan ​​uit een simpele behoefte: iedereen de mogelijkheid bieden om zijn of haar project, talent of aanbod helder en professioneel te presenteren, zelfs zonder technische kennis.',
'about.p2': '✨ Binnen 2 dagen kan je online showcase of cv klaar zijn, met een heldere, menselijke en intuïtieve stijl. Of je nu een ambachtsman, coach, kunstenaar, therapeut of werkzoekende bent, je verdient een online aanwezigheid die jou weerspiegelt.',
'about.missionTitle': 'Onze missie',
'about.mission': 'Eenvoudige, mooie en functionele websites creëren om jouw unieke karakter aan de wereld te laten zien. Bij EternaWeb geloven we in de kracht van minimalisme gecombineerd met vriendelijkheid.',
'about.targetTitle': 'Voor wie is EternaWeb bedoeld?',
'about.li1': '• Ambachtslieden en ontwerpers die een zachte en warme etalage willen',
'about.li2': '• Wellnessprofessionals die op zoek zijn naar een eenvoudige en gastvrije ruimte',
'about.li3': '• Mensen die zich omscholen of op zoek zijn naar een baan en een waardevol cv willen',
'about.contact': '💌 Voor meer informatie, om uw project te bespreken of een offerte aan te vragen: <a href="mailto:contact@eternaweb.fr">contact@eternaweb.fr</a>',
'about.back': '← Terug naar home'
'footer.legal':'Wettelijke vermeldingen',
'footer.privacy':'Privacy',
'footer.code':'Gedragscode',
'footer.copy':'© 2025 EternaGlow — Alle rechten voorbehouden'
  },

  de: {
    // --- Navigation
    'nav.menu':'Menü','nav.cv':'Lebenslauf','nav.portfolio':'Portfolio','nav.vitrine':'Schaufenster',
    'nav.tarifs':'Preise','nav.devis':'Ihr Briefing','nav.temoignages':'Referenzen',

    // --- Hero
    'hero.title':'EternaWeb',
    'hero.subtitle':'Lebensläufe & Schaufensterseiten — online in 48 Stunden',
    'hero.lead':'✨ Premium-Design, schnelle Integrationen und ein schlüsselfertiges Ergebnis.',
    'cta.whatsapp':'WhatsApp','cta.paypal':'PayPal',

    // --- Modelle
    'services.h2':'🚀 Unsere Leistungen',
'services.sub':'Wählen Sie Ihren Mini-Website-Typ 👇',
'services.demo':'Dienst ansehen',
'services.cv.desc':'Ideal für Bewerbungen oder berufliche Profile.',
'services.port.desc':'Perfekt für Künstler und Designer.',
'services.vit.desc':'Für Unternehmen und Freiberufler.',

    // --- Devis
    'devis.h2':'📝 Ihr Briefing',
    'devis.sub':'Auswählen, beschreiben, senden — ich erhalte Ihre Angaben.',
    'devis.type':'Seitentyp',
    'devis.opt.cv':'Lebenslauf','devis.opt.vitrine':'Schaufenster','devis.opt.portfolio':'Portfolio','devis.opt.other':'Andere',
    'devis.colors':'Palette / Farben',
    'devis.style':'Visueller Stil',
    'devis.style1':'Schlicht & elegant','devis.style2':'Kreativ & farbenfroh','devis.style3':'Minimal & professionell','devis.style4':'Natürlich & sanft',
    'devis.integrations':'Gewünschte Integrationen',
    'devis.int.form':'Kontaktformular','devis.int.social':'Soziale Medien','devis.int.gallery':'Galerie',
    'devis.other':'Weitere Wünsche',
    'devis.name':'Vor-/Nachname',
    'devis.email':'E-Mail',
    'devis.note':'Kein Server: Ihre Mail-App öffnet sich mit einer ausgefüllten Nachricht.',

    // --- Buttons
    'btn.fill':'Ihr Briefing','btn.send':'Senden','btn.choose':'Diesen Tarif wählen',

    // --- Preise
    'pricing.h2':'🧾 EternaWeb-Pakete',
    'pricing.sub':'Lebenslauf & Mini-Schaufensterseiten — Hosting inklusive',
    'pricing.card1.title':'🌿 Essenziell – 49 €',
    'pricing.card1.li1':'Einfacher Online-Lebenslauf (1 Seite)',
    'pricing.card1.li2':'Personalisierung mit Infos + Foto',
    'pricing.card1.li3':'Elegantes, responsives Design',
    'pricing.card1.li4':'Lieferung in 48 Std.',
    'pricing.card1.note':'Ideal für Bewerbungen',

    'pricing.card2.title':'✨ Schaufenster – 89 €',
    'pricing.card2.li1':'Mini-Seite (2–3 Seiten)',
    'pricing.card2.li2':'Start + Produkte/Dienstleistungen',
    'pricing.card2.li3':'WhatsApp, PayPal, Social Buttons',
    'pricing.card2.li4':'Harmonisches, responsives Design',
    'pricing.card2.note':'Ideal für Handwerker, Freiberufler',

    'pricing.card3.title':'💎 Premium – 129 €',
    'pricing.card3.li1':'Alles aus Schaufenster',
    'pricing.card3.li2':'Logo-Erstellung/Redesign',
    'pricing.card3.li3':'Branding-Beratung',
    'pricing.card3.li4':'Basis-SEO + Galerie/FAQ',
    'pricing.card3.note':'Ideal für den vollständigen Launch',

    // --- Referenzen
    'testi.h2':'💬 Referenzen',
    'testi.t1':'„Super schnell und professionell — meine Seite war noch am selben Tag online!“','testi.c1':'— Claire B.',
    'testi.t2':'„Elegantes, klares Design — Kunden schreiben mir direkt über WhatsApp!“','testi.c2':'— Malik T.',
    'testi.t3':'„Top Preis-Leistung. Absolute Empfehlung.“','testi.c3':'— Sofia M.',

    // --- Footer
    'footer.faq':'FAQ',
'footer.about':'Über uns',
'footer.legal':'Impressum',
'footer.privacy':'Datenschutz',
'footer.code':'Verhaltenskodex',
'footer.copy':'© 2025 EternaGlow — Alle Rechte vorbehalten'
  },

  ru: {
    // --- Навигация
    'nav.menu':'Меню','nav.cv':'Резюме','nav.portfolio':'Портфолио','nav.vitrine':'Витрина',
    'nav.tarifs':'Тарифы','nav.devis':'Ваши пожелания','nav.temoignages':'Отзывы',

    // --- Hero
    'hero.title':'EternaWeb',
    'hero.subtitle':'Резюме и витринные сайты — онлайн за 48 часов',
    'hero.lead':'✨ Премиум-дизайн, быстрая интеграция и готовый результат.',
    'cta.whatsapp':'WhatsApp','cta.paypal':'PayPal',

    // --- Модели
    'services.h2':'🚀 Наши услуги',
'services.sub':'Выберите тип мини-сайта 👇',
'services.demo':'Посмотреть услугу',
'services.cv.desc':'Идеально для откликов на вакансии или профиля специалиста.',
'services.port.desc':'Отлично подходит для художников и дизайнеров.',
'services.vit.desc':'Для компаний и фрилансеров.',

    // --- Devis
    'devis.h2':'📝 Ваши пожелания',
    'devis.sub':'Выберите, опишите, отправьте — я получу ваши инструкции.',
    'devis.type':'Тип сайта',
    'devis.opt.cv':'Резюме','devis.opt.vitrine':'Витрина','devis.opt.portfolio':'Портфолио','devis.opt.other':'Другое',
    'devis.colors':'Палитра / цвета',
    'devis.style':'Визуальный стиль',
    'devis.style1':'Сдержанный и элегантный','devis.style2':'Креативный и яркий','devis.style3':'Минималистичный и профессиональный','devis.style4':'Природный и мягкий',
    'devis.integrations':'Необходимые интеграции',
    'devis.int.form':'Контактная форма','devis.int.social':'Соцсети','devis.int.gallery':'Галерея',
    'devis.other':'Другие пожелания',
    'devis.name':'Имя / Фамилия',
    'devis.email':'Email',
    'devis.note':'Без сервера: ваше почтовое приложение откроется с заполненным письмом.',

    // --- Кнопки
    'btn.fill':'Ваши пожелания','btn.send':'Отправить','btn.choose':'Выбрать этот пакет',

    // --- Тарифы
    'pricing.h2':'🧾 Тарифы EternaWeb',
    'pricing.sub':'Резюме и мини-сайты-витрины — хостинг включён',
    'pricing.card1.title':'🌿 Базовый – 49 €',
    'pricing.card1.li1':'Простое онлайн-резюме (1 страница)',
    'pricing.card1.li2':'Персонализация: данные + фото',
    'pricing.card1.li3':'Элегантный адаптивный дизайн',
    'pricing.card1.li4':'Готово за 48 часов',
    'pricing.card1.note':'Идеально для откликов на вакансии',

    'pricing.card2.title':'✨ Витрина – 89 €',
    'pricing.card2.li1':'Мини-сайт (2–3 страницы)',
    'pricing.card2.li2':'Главная + услуги/товары',
    'pricing.card2.li3':'Кнопки WhatsApp, PayPal, соцсети',
    'pricing.card2.li4':'Гармоничный адаптивный дизайн',
    'pricing.card2.note':'Идеально для мастеров и фрилансеров',

    'pricing.card3.title':'💎 Премиум – 129 €',
    'pricing.card3.li1':'Всё из “Витрина”',
    'pricing.card3.li2':'Создание/редизайн логотипа',
    'pricing.card3.li3':'Консультация по брендингу',
    'pricing.card3.li4':'Базовое SEO + Галерея/FAQ',
    'pricing.card3.note':'Идеально для полного запуска',

    // --- Отзывы
    'testi.h2':'💬 Отзывы',
    'testi.t1':'«Очень оперативно и профессионально — мой сайт был онлайн в тот же день!»','testi.c1':'— Клер Б.',
    'testi.t2':'«Элегантный и понятный дизайн — клиенты пишут прямо в WhatsApp!»','testi.c2':'— Малик Т.',
    'testi.t3':'«Отличное соотношение цены и качества. Рекомендую!»','testi.c3':'— София М.',

    // --- Подвал
    // --- Подвал
'footer.info':'Полезная информация',
'footer.contact':'Контакты',
'footer.about':'О нас',
'footer.legal':'Юридическая информация',
'footer.privacy':'Конфиденциальность',
'footer.code':'Кодекс поведения',
'footer.faq':'FAQ',
'footer.copy':'© 2025 EternaGlow — Все права защищены'
  },

  es: {
    // --- Navegación
    'nav.menu':'Menú','nav.cv':'CV','nav.portfolio':'Portafolio','nav.vitrine':'Escaparate',
    'nav.tarifs':'Precios','nav.devis':'Sus indicaciones','nav.temoignages':'Testimonios',

    // --- Hero
    'hero.title':'EternaWeb',
    'hero.subtitle':'CV y sitios escaparate — en línea en 48 horas',
    'hero.lead':'✨ Diseño premium, integraciones rápidas y un resultado llave en mano.',
    'cta.whatsapp':'WhatsApp','cta.paypal':'PayPal',

    // --- Modelos
    'services.h2':'🚀 Nuestros servicios',
'services.sub':'Elige el tipo de mini-sitio 👇',
'services.demo':'Ver servicio',
'services.cv.desc':'Ideal para candidaturas o perfiles profesionales.',
'services.port.desc':'Perfecto para artistas y diseñadores.',
'services.vit.desc':'Para empresas y freelancers.',
    // --- Devis
    'devis.h2':'📝 Sus indicaciones',
    'devis.sub':'Elige, describe y envía — recibo tus instrucciones.',
    'devis.type':'Tipo de sitio',
    'devis.opt.cv':'CV','devis.opt.vitrine':'Escaparate','devis.opt.portfolio':'Portafolio','devis.opt.other':'Otro',
    'devis.colors':'Paleta / colores',
    'devis.style':'Estilo visual',
    'devis.style1':'Sobrio y elegante','devis.style2':'Creativo y colorido','devis.style3':'Minimal y profesional','devis.style4':'Natural y suave',
    'devis.integrations':'Integraciones deseadas',
    'devis.int.form':'Formulario de contacto','devis.int.social':'Redes sociales','devis.int.gallery':'Galería',
    'devis.other':'Otras solicitudes',
    'devis.name':'Nombre y apellidos',
    'devis.email':'Email',
    'devis.note':'Sin servidor: tu aplicación de correo se abrirá con un mensaje pre-relleno.',

    // --- Botones
    'btn.fill':'Sus indicaciones','btn.send':'Enviar','btn.choose':'Elegir este plan',

    // --- Precios
    'pricing.h2':'🧾 Planes EternaWeb',
    'pricing.sub':'CV y mini sitios escaparate — hosting incluido',
    'pricing.card1.title':'🌿 Esencial – 49 €',
    'pricing.card1.li1':'CV en línea simple (1 página)',
    'pricing.card1.li2':'Personalización con datos + foto',
    'pricing.card1.li3':'Diseño elegante y responsive',
    'pricing.card1.li4':'Entrega en 48 h',
    'pricing.card1.note':'Ideal para candidaturas',

    'pricing.card2.title':'✨ Escaparate – 89 €',
    'pricing.card2.li1':'Mini sitio (2–3 páginas)',
    'pricing.card2.li2':'Inicio + productos/servicios',
    'pricing.card2.li3':'Botones WhatsApp, PayPal, redes',
    'pricing.card2.li4':'Diseño armonioso y responsive',
    'pricing.card2.note':'Ideal para artesanos y freelancers',

    'pricing.card3.title':'💎 Premium – 129 €',
    'pricing.card3.li1':'Todo lo del plan Escaparate',
    'pricing.card3.li2':'Creación/rediseño de logo',
    'pricing.card3.li3':'Asesoría de branding',
    'pricing.card3.li4':'SEO básico + Galería/FAQ',
    'pricing.card3.note':'Ideal para un lanzamiento completo',

    // --- Testimonios
    'testi.h2':'💬 Testimonios',
    'testi.t1':'“Súper rápida y profesional: ¡mi sitio estuvo online el mismo día!”','testi.c1':'— Claire B.',
    'testi.t2':'“Diseño elegante y claro; ¡mis clientes me escriben por WhatsApp!”','testi.c2':'— Malik T.',
    'testi.t3':'“Excelente relación calidad-precio. 100% recomendado.”','testi.c3':'— Sofia M.',

    // --- Footer
    'footer.faq':'FAQ',
'footer.about':'Acerca de',
'footer.legal':'Aviso legal',
'footer.privacy':'Privacidad',
'footer.code':'Código de conducta',
'footer.copy':'© 2025 EternaGlow — Todos los derechos reservados'
  },

  it: {
    // --- Navigazione
    'nav.menu':'Menù','nav.cv':'CV','nav.portfolio':'Portfolio','nav.vitrine':'Vetrina',
    'nav.tarifs':'Prezzi','nav.devis':'Le tue indicazioni','nav.temoignages':'Testimonianze',

    // --- Hero
    'hero.title':'EternaWeb',
    'hero.subtitle':'CV e siti vetrina — online in 48 ore',
    'hero.lead':'✨ Design premium, integrazioni rapide e un risultato chiavi in mano.',
    'cta.whatsapp':'WhatsApp','cta.paypal':'PayPal',

    // --- Modelli
    'services.h2':'🚀 I nostri servizi',
'services.sub':'Scegli il tipo di mini-sito 👇',
'services.demo':'Vedi servizio',
'services.cv.desc':'Ideale per candidature o profili professionali.',
'services.port.desc':'Perfetto per artisti e designer.',
'services.vit.desc':'Per aziende e liberi professionisti.',
    // --- Devis
    'devis.h2':'📝 Le tue indicazioni',
    'devis.sub':'Scegli, descrivi e invia — ricevo le tue istruzioni.',
    'devis.type':'Tipo di sito',
    'devis.opt.cv':'CV','devis.opt.vitrine':'Vetrina','devis.opt.portfolio':'Portfolio','devis.opt.other':'Altro',
    'devis.colors':'Palette / colori',
    'devis.style':'Stile visivo',
    'devis.style1':'Sobrio & elegante','devis.style2':'Creativo & colorato','devis.style3':'Minimal & professionale','devis.style4':'Naturale & delicato',
    'devis.integrations':'Integrazioni desiderate',
    'devis.int.form':'Modulo di contatto','devis.int.social':'Social media','devis.int.gallery':'Galleria',
    'devis.other':'Altre richieste',
    'devis.name':'Nome / Cognome',
    'devis.email':'Email',
    'devis.note':'Nessun server: si apre la tua app email con un messaggio pre-compilato.',

    // --- Pulsanti
    'btn.fill':'Le tue indicazioni','btn.send':'Invia','btn.choose':'Scegli questo piano',

    // --- Prezzi
    'pricing.h2':'🧾 Piani EternaWeb',
    'pricing.sub':'CV & mini siti vetrina — hosting incluso',
    'pricing.card1.title':'🌿 Essenziale – 49 €',
    'pricing.card1.li1':'CV online semplice (1 pagina)',
    'pricing.card1.li2':'Personalizzazione con dati + foto',
    'pricing.card1.li3':'Design elegante e responsive',
    'pricing.card1.li4':'Consegna entro 48 h',
    'pricing.card1.note':'Ideale per candidature',

    'pricing.card2.title':'✨ Vetrina – 89 €',
    'pricing.card2.li1':'Mini sito (2–3 pagine)',
    'pricing.card2.li2':'Home + prodotti/servizi',
    'pricing.card2.li3':'Pulsanti WhatsApp, PayPal, social',
    'pricing.card2.li4':'Design armonioso e responsive',
    'pricing.card2.note':'Ideale per artigiani e freelance',

    'pricing.card3.title':'💎 Premium – 129 €',
    'pricing.card3.li1':'Tutto del piano Vetrina',
    'pricing.card3.li2':'Creazione/redo del logo',
    'pricing.card3.li3':'Consulenza branding',
    'pricing.card3.li4':'SEO base + Galleria/FAQ',
    'pricing.card3.note':'Ideale per un lancio completo',

    // --- Testimonianze
    'testi.h2':'💬 Testimonianze',
    'testi.t1':'“Super reattiva e professionale — il mio sito era online lo stesso giorno!”','testi.c1':'— Claire B.',
    'testi.t2':'“Design elegante e chiaro; i clienti mi scrivono direttamente su WhatsApp!”','testi.c2':'— Malik T.',
    'testi.t3':'“Ottimo rapporto qualità-prezzo. Consigliatissimo.”','testi.c3':'— Sofia M.',

    // --- Footer
    'footer.faq':'FAQ',
'footer.about':'Chi siamo',
'footer.legal':'Note legali',
'footer.privacy':'Privacy',
'footer.code':'Codice di condotta',
'footer.copy':'© 2025 EternaGlow — Tutti i diritti riservati'
  }
};
// =========================
// Menu mobile
// =========================
const menuBtn  = $('#menuBtn');
const mainMenu = $('#mainMenu');
menuBtn?.addEventListener('click', ()=>{
  mainMenu?.classList.toggle('show');
  menuBtn.setAttribute('aria-expanded', mainMenu?.classList.contains('show'));
});

// =========================
// Globe langues
// =========================
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

// =========================
// Application de la langue
// =========================
function applyLang(lang){
  const d = I18N[lang] || I18N.fr;
  $$('[data-i18n]').forEach(el=>{
    const k = el.getAttribute('data-i18n');
    const val = d[k];
    if (!val) return;
    if (/<[a-z][\s\S]*>/i.test(val)) el.innerHTML = val;
    else el.textContent = val;
  });
  localStorage.setItem('lang', lang);
  document.documentElement.setAttribute('lang', lang);
}
$$('#langMenu .lang-item').forEach(b=>{
  b.addEventListener('click', e=>{
    e.preventDefault();
    applyLang(b.dataset.lang);
    langMenu.classList.remove('show');
    langBtn.setAttribute('aria-expanded','false');
  });
});
applyLang(localStorage.getItem('lang') || 'fr');
// 🧩 Correction universelle : retraduire aussi les éléments ajoutés dynamiquement
document.addEventListener("DOMContentLoaded", () => {
  const currentLang = localStorage.getItem('lang') || 'fr';
  applyLang(currentLang);
});
// =========================
// Gestion du formulaire devis
// =========================
const planInput = $('#planInput');
function openDevis(plan = ''){
  const d = $('#devis');
  if (!d) return;
  if (plan && planInput) {
    planInput.value = plan;
    localStorage.setItem('ew_selected_plan', plan);
  }
  d.classList.add('show');
  d.scrollIntoView({ behavior:'smooth', block:'start' });
}
document.addEventListener('click', e => {
  const btn = e.target.closest('.choose-plan');
  if (!btn) return;
  const plan = btn.dataset.plan || '';
  openDevis(plan);
  if (isMobile()){
    const t = encodeURIComponent(`Devis – plan sélectionné : ${plan}`);
    window.open(`https://wa.me/${WA_NUMBER}?text=${t}`, '_blank');
  }
});
const savedPlan = localStorage.getItem('ew_selected_plan');
if (savedPlan && planInput) planInput.value = savedPlan;
document.querySelectorAll('a[href="#devis"], #goDevis, #goBrief').forEach(a=>{
  a.addEventListener('click', (e)=>{
    e.preventDefault();
    openDevis();
  });
});
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
// ===== Fermeture automatique du devis quand on clique ailleurs =====
document.addEventListener('click', (e)=>{
  const devis = $('#devis');
  if (!devis) return;

  // si on clique DANS le devis ou sur un bouton/lien qui l'ouvre → on ignore
  if (
    devis.contains(e.target) || 
    e.target.closest('a[href="#devis"]') || 
    e.target.closest('#goDevis') || 
    e.target.closest('.choose-plan')
  ) {
    return;
  }

  // sinon → on ferme
  devis.classList.remove('show');
});
// --- Ouvrir le devis quand on clique sur "Demander ce modèle"
$$('.open-devis').forEach(btn=>{
  btn.addEventListener('click', e=>{
    e.preventDefault();
    openDevis(); // utilise ta fonction déjà définie plus haut
  });
});
