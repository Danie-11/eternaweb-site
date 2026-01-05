console.log("✅ app.js chargé");
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
    'devis.h2': '📝 Vos consignes',
  'devis.sub': 'Choisissez, décrivez, envoyez — je reçois vos consignes.',
  'devis.type': 'Type de site',
  'devis.opt.cv': 'CV',
  'devis.opt.vitrine': 'Vitrine',
  'devis.opt.portfolio': 'Portfolio',
  'devis.opt.other': 'Autre',
  'devis.colors': 'Palette / couleurs',
  'devis.style': 'Style visuel',
  'devis.style1': 'Sobre & élégant',
  'devis.style2': 'Créatif & coloré',
  'devis.style3': 'Minimal & pro',
  'devis.style4': 'Nature & doux',
  'devis.integrations': 'Intégrations souhaitées',
  'devis.int.form': 'Formulaire contact',
  'devis.int.social': 'Réseaux sociaux',
  'devis.int.gallery': 'Galerie',
  'devis.other': 'Autres demandes',
  'devis.name': 'Prénom / Nom',
  'devis.email': 'Email',
  'devis.note': 'Aucun envoi serveur : votre logiciel e-mail s’ouvre avec le message prérempli.',
  'btn.fill': 'Vos consignes',
  'btn.send': 'Envoyer',
  'btn.choose': 'Je choisis cette formule',

     // PORTFOLIO
  'portfolio.section.title': '🎨 Modèles de Portfolio',
  'portfolio.section.desc': 'Idéal pour artistes, créateurs et designers.',
  'portfolio.pricing.title': '💼 Formules Portfolio',
  'portfolio.pricing.desc': 'Exposez vos créations avec élégance.',

    'portfolio.pack1.title': '📂 Pack Créatif – 29,99 €',
  'portfolio.pack1.li1': 'Mini-site (2–3 pages)',
  'portfolio.pack1.li2': 'Galerie photos/vidéos',
  'portfolio.pack1.li3': 'Présentation créateur',
  'portfolio.pack2.title': '🌟 Pack Premium – 59,99 €',
  'portfolio.pack2.li1': 'Tout le Pack Créatif',
  'portfolio.pack2.li2': 'Section blog',
  'portfolio.pack2.li3': 'Optimisation SEO',
  'portfolio.pack2.li4': 'Statistiques incluses',

     // CV
  'cv.section.title': '🚀 Nos formules CV',
  'cv.section.desc': 'Choisissez la formule adaptée à vos besoins.',
  'cv.pricing.title': '💼 Formules CV en ligne',
  'cv.pricing.desc': 'Mettez en valeur vos compétences avec un design clair et professionnel.',

  'cv.pack1.title': '📝 Pack Starter – 4,99 €',
  'cv.pack1.li1': 'Correction orthographique et grammaticale',
  'cv.pack1.li2': 'Mise en page simple et structurée (Word/PDF)',
  'cv.pack1.note': '👉 Idéal pour stage, job étudiant ou premier emploi',
  'cv.pack2.title': '🚀 Pack Boost – 9,99 €',
  'cv.pack2.li1': 'Tout le Pack Starter',
  'cv.pack2.li2': 'Optimisation du contenu (ATS friendly)',
  'cv.pack2.li3': 'Ajout de mots-clés stratégiques',
  'cv.pack2.li4': 'Pour une meilleure répétabilité par les recruteurs',
  'cv.pack3.title': '🌐 Pack Premium – 19,99 €',
  'cv.pack3.li1': 'Tout le Pack Boost',
  'cv.pack3.li2': 'Création d’un CV en ligne (mini-site personnel)',
  'cv.pack3.li3': 'Hébergement inclus 1 an',
  'cv.pack3.li4': 'Design moderne (ordinateur & mobile)',
  'cv.pack3.li5': 'QR code intégré',
  'cv.pack3.li6': 'Pour vous démarquer face aux autres candidats',

    'testi.h2':'💬 Témoignages','testi.t1':'“Super réactive et professionnelle, mon site a été en ligne le jour même !”','testi.c1':'— Claire B.',
    'testi.t2':'“Design élégant, clair, et surtout… mes clients m’écrivent directement via WhatsApp !”','testi.c2':'— Malik T.',
    'testi.t3':'“Excellent rapport qualité/prix. Je recommande à 100 %.”','testi.c3':'— Sofia M.',
         'footer.faq':'FAQ',
    'faq.title': 'FAQ – CV & mini-site CV - EternaWeb',
'faq.h1': 'FAQ – CV & mini-site CV - EternaWeb',
'faq.q1': '✨ En combien de temps mon CV est-il prêt ?',
'faq.a1': 'En général sous 24 à 48 h, selon la formule choisie et la rapidité de réception des informations.',
'faq.q2': '📄 À qui s\'adresse le service CV ?',
'faq.a2': 'Étudiants & jobs étudiants<br>Stages<br>Premier emploi<br>Reconversion professionnelle<br>Reprise d\'activité<br>👉 Tous secteurs.',
'faq.q3': '📄 À qui s\'adresse EternaWeb ?',
'faq.a3': 'Étudiants, chercheurs d\'emploi, créateurs, freelances et entrepreneurs souhaitant une présence professionnelle moderne et efficace.',
'faq.q4': '⏱️ En combien de temps mon CV ou site est-il prêt ?',
'faq.a4': 'CV : 24 à 48h selon la formule.<br>Mini-site / portfolio : en moyenne 48h si les contenus sont fournis.',
'faq.q5': '🤖 Pourquoi parlez-vous d\'optimisation ATS ?',
'faq.a5': 'Les recruteurs utilisent des logiciels de tri (ATS). J\'intègre des mots-clés stratégiques pour améliorer la visibilité de ton CV auprès des recruteurs et des robots.',
'faq.q6': '📦 Quelles sont les formules CV ?',
'faq.a6': '<strong>Starter – 4,99 €</strong> : correction + mise en page structurée<br><strong>Boost – 9,99 €</strong> : optimisation ATS + mots-clés<br><strong>Premium – 19,99 €</strong> : CV + mini-site + QR code',
'faq.q7': '🌐 L\'hébergement est-il inclus ?',
'faq.a7': 'Oui, hébergement inclus 1 an. Migration possible si besoin.',
'faq.q8': '💬 Puis-je demander des modifications ?',
'faq.a8': 'Oui, des ajustements sont inclus selon la formule choisie.',
'faq.q9': '💡 Une question spécifique ?',
'faq.a9': 'Tu peux me contacter directement ci-dessous 👇',
'faq.back': '← Retour à l\'accueil',
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
  'about.back': '← Retour à l’accueil',
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
    'devis.h2': '📝 Your instructions',
  'devis.sub': 'Choose, describe, send — I receive your brief directly.',
  'devis.type': 'Type of site',
  'devis.opt.cv': 'CV',
  'devis.opt.vitrine': 'Showcase',
  'devis.opt.portfolio': 'Portfolio',
  'devis.opt.other': 'Other',
  'devis.colors': 'Palette / colors',
  'devis.style': 'Visual style',
  'devis.style1': 'Clean & elegant',
  'devis.style2': 'Creative & colorful',
  'devis.style3': 'Minimal & professional',
  'devis.style4': 'Natural & soft',
  'devis.integrations': 'Desired integrations',
  'devis.int.form': 'Contact form',
  'devis.int.social': 'Social media links',
  'devis.int.gallery': 'Gallery',
  'devis.other': 'Other requests',
  'devis.name': 'First / Last name',
  'devis.email': 'Email',
  'devis.note': 'No server sending: your email app opens with the message pre-filled.',
  'btn.fill': 'Your brief',
  'btn.send': 'Send',
  'btn.choose': 'I choose this plan',
    
    // PORTFOLIO
  'portfolio.section.title': '🎨 Portfolio Templates',
  'portfolio.section.desc': 'Perfect for artists, creators and designers.',
  'portfolio.pricing.title': '💼 Portfolio Plans',
  'portfolio.pricing.desc': 'Showcase your work with style and elegance.',

     'portfolio.pack1.title': '📂 Creative Pack – €29,99',
  'portfolio.pack1.li1': 'Mini-site (2–3 pages)',
  'portfolio.pack1.li2': 'Photo/video gallery',
  'portfolio.pack1.li3': 'Creator presentation',
  'portfolio.pack2.title': '🌟 Premium Pack – €59,99',
  'portfolio.pack2.li1': 'Everything in Creative Pack',
  'portfolio.pack2.li2': 'Blog section',
  'portfolio.pack2.li3': 'SEO optimization',
  'portfolio.pack2.li4': 'Included statistics',

    // CV
   'cv.h2': '📄 CV Templates',
  'cv.sub': 'Choose a style that fits your profile.',
  'cv.pricing.title': '💼 Online CV Plans',
  'cv.pricing.desc': 'Highlight your skills with a clean, professional layout.',
    
  'cv.pack1.title': '📝 Starter Pack – €4,99',
  'cv.pack1.li1': 'Spelling and grammar correction',
  'cv.pack1.li2': 'Simple, structured layout (Word/PDF)',
  'cv.pack1.note': '👉 Ideal for internships, student jobs or first jobs',
  'cv.pack2.title': '🚀 Boost Pack – €9,99',
  'cv.pack2.li1': 'Includes Starter Pack',
  'cv.pack2.li2': 'Content optimization (ATS friendly)',
  'cv.pack2.li3': 'Addition of strategic keywords',
  'cv.pack2.li4': 'For better repeatability by recruiters',
  'cv.pack3.title': '🌐 Premium Pack – €19,99',
  'cv.pack3.li1': 'Includes Boost Pack',
  'cv.pack3.li2': 'Online CV creation (personal mini-site)',
  'cv.pack3.li3': '1-year hosting included',
  'cv.pack3.li4': 'Modern responsive design',
  'cv.pack3.li5': 'Integrated QR code',
  'cv.pack3.li6': 'To stand out from other candidates',


    'testi.h2':'💬 Testimonials','testi.t1':'“Super responsive and professional — my site was online the same day!”','testi.c1':'— Claire B.',
    'testi.t2':'“Elegant, clear design — clients contact me directly via WhatsApp!”','testi.c2':'— Malik T.',
    'testi.t3':'“Excellent value for money. 100% recommended.”','testi.c3':'— Sofia M.',
           'footer.faq':'FAQ',
      'faq.title': 'FAQ – Resumes & mini-site CV - EternaWeb',
'faq.h1': 'FAQ – Resumes & mini-site CV - EternaWeb',
'faq.q1': '✨ How long until my CV is ready?',
'faq.a1': 'Usually within 24 to 48 hours, depending on the chosen package and how quickly we receive the information.',
'faq.q2': '📄 Who is the CV service for?',
'faq.a2': 'Students & student jobs<br>Internships<br>First job<br>Career change<br>Return to work<br>👉 All sectors.',
'faq.q3': '📄 Who is EternaWeb for?',
'faq.a3': 'Students, jobseekers, creators, freelancers and entrepreneurs looking for a modern and effective professional presence.',
'faq.q4': '⏱️ How long until my CV or site is ready?',
'faq.a4': 'CV: 24 to 48 hours depending on the package.<br>Mini-site / portfolio: on average 48 hours if the content is provided.',
'faq.q5': '🤖 Why do you mention ATS optimization?',
'faq.a5': 'Recruiters use sorting software (ATS). I include strategic keywords to improve your CV visibility for recruiters and applicant tracking systems.',
'faq.q6': '📦 What CV packages are available?',
'faq.a6': '<strong>Starter – €4.99</strong>: proofreading + structured layout<br><strong>Boost – €9.99</strong>: ATS optimization + keywords<br><strong>Premium – €19.99</strong>: CV + mini-site + QR code',
'faq.q7': '🌐 Is hosting included?',
'faq.a7': 'Yes, hosting included for 1 year. Migration possible if needed.',
'faq.q8': '💬 Can I request changes?',
'faq.a8': 'Yes, adjustments are included depending on the chosen package.',
'faq.q9': '💡 Any specific question?',
'faq.a9': 'You can contact me directly below 👇',
'faq.back': '← Back to home',
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
  'about.back': '← Back to home',
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

  et: {
  'nav.menu':'Menüü',
  'nav.cv':'CV',
  'nav.portfolio':'Portfoolio',
  'nav.vitrine':'Veebileht',
  'nav.tarifs':'Hinnad',
  'nav.devis':'Juhised',

  'hero.title':'EternaWeb',
  'hero.subtitle':'CV ja veebilehed — valmis 48 tunniga',
  'hero.lead':'Premium disain, kiire teostus ja valmis lahendus.',

  'services.h2':'Meie teenused',
  'services.sub':'Vali sobiv mini-veebileht',
  'services.cv.desc':'Sobib tööle kandideerimiseks',
  'services.port.desc':'Kunstnikele ja disaineritele',
  'services.vit.desc':'Ettevõtetele ja iseseisvatele',

  'portfolio.pricing.title':'Portfoolio paketid',
  'portfolio.pack1.title':'Loovpakett – 29,99 €',
  'portfolio.pack2.title':'Premium-pakett – 59,99 €',

  'cv.pricing.title':'CV paketid',
  'cv.pack1.title':'Starter – 4,99 €',
  'cv.pack2.title':'Boost – 9,99 €',
  'cv.pack3.title':'Premium – 19,99 €',

  'footer.copy':'© 2025 EternaWeb — Kõik õigused kaitstud'
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
    'devis.h2': '📝 Tus indicaciones',
  'devis.sub': 'Elige, describe y envía — recibo tus instrucciones directamente.',
  'devis.type': 'Tipo de sitio',
  'devis.opt.cv': 'CV',
  'devis.opt.vitrine': 'Vitrina',
  'devis.opt.portfolio': 'Portafolio',
  'devis.opt.other': 'Otro',
  'devis.colors': 'Paleta / colores',
  'devis.style': 'Estilo visual',
  'devis.style1': 'Sencillo y elegante',
  'devis.style2': 'Creativo y colorido',
  'devis.style3': 'Minimalista y profesional',
  'devis.style4': 'Natural y suave',
  'devis.integrations': 'Integraciones deseadas',
  'devis.int.form': 'Formulario de contacto',
  'devis.int.social': 'Redes sociales',
  'devis.int.gallery': 'Galería',
  'devis.other': 'Otras solicitudes',
  'devis.name': 'Nombre / Apellido',
  'devis.email': 'Correo electrónico',
  'devis.note': 'Sin envío al servidor: tu aplicación de correo se abre con el mensaje rellenado.',
  'btn.fill': 'Tus indicaciones',
  'btn.send': 'Enviar',
  'btn.choose': 'Elijo este plan',

    // --- Buttons
    'btn.fill':'Uw instructies','btn.send':'Verzenden','btn.choose':'Deze formule kiezen',

   // PORTFOLIO
  'portfolio.section.title': '🎨 Portfolio-modellen',
  'portfolio.section.desc': 'Ideaal voor kunstenaars, makers en ontwerpers.',
  'portfolio.pricing.title': '💼 Portfolio-pakketten',
  'portfolio.pricing.desc': 'Toon je creaties met stijl en elegantie.',

    'portfolio.pack1.title': '📂 Creatief Pakket – 29,99 €',
  'portfolio.pack1.li1': 'Mini-site (2–3 pagina’s)',
  'portfolio.pack1.li2': 'Foto-/videogalerij',
  'portfolio.pack1.li3': 'Presentatie van de maker',
  'portfolio.pack2.title': '🌟 Premium Pakket – 59,99 €',
  'portfolio.pack2.li1': 'Alles in het Creatief Pakket',
  'portfolio.pack2.li2': 'Blogsectie',
  'portfolio.pack2.li3': 'SEO-optimalisatie',
  'portfolio.pack2.li4': 'Statistieken inbegrepen',

  // CV
  'cv.h2': '📄 CV-modellen',
  'cv.sub': 'Kies een stijl die bij je profiel past.',
  'cv.pricing.title': '💼 Online CV-pakketten',
  'cv.pricing.desc': 'Breng je vaardigheden naar voren met een helder en professioneel ontwerp.',

  'cv.pack1.title': '📝 Starter Pakket – 4,99 €',
  'cv.pack1.li1': 'Spelling- en grammaticacontrole',
  'cv.pack1.li2': 'Eenvoudige en gestructureerde opmaak (Word/PDF)',
  'cv.pack1.note': '👉 Ideaal voor stage, studentenjob of eerste baan',
  'cv.pack2.title': '🚀 Boost Pakket – 9,99 €',
  'cv.pack2.li1': 'Alles van het Pack Starter',
  'cv.pack2.li2': 'Optimalisatie van de inhoud (ATS-vriendelijk)',
  'cv.pack2.li3': 'Toevoeging van strategische zoekwoorden',
  'cv.pack2.li4': 'Voor een betere vindbaarheid bij recruiters',
  'cv.pack3.title': '🌐 Premium Pakket – 19,99 €',
  'cv.pack3.li1': 'Bevat het Boost Pakket',
  'cv.pack3.li2': 'Online CV (persoonlijke mini-site)',
  'cv.pack3.li3': 'Hosting inbegrepen voor 1 jaar',
  'cv.pack3.li4': 'Modern design (desktop & mobiel)',
  'cv.pack3.li5': 'Geïntegreerde QR-code',
  'cv.pack3.li6': 'Om u te onderscheiden van andere kandidaten',


    // --- Getuigenissen
    'testi.h2':'💬 Getuigenissen',
    'testi.t1':'“Super responsief en professioneel — mijn site stond dezelfde dag online!”','testi.c1':'— Claire B.',
    'testi.t2':'“Elegant, duidelijk ontwerp — klanten berichten me direct via WhatsApp!”','testi.c2':'— Malik T.',
    'testi.t3':'“Uitstekende prijs-kwaliteitverhouding. 100% aanbevolen.”','testi.c3':'— Sofia M.',

    // --- Footer
  'footer.faq':'FAQ',
  'faq.title': 'FAQ - EternaWeb',
  'faq.h1': 'FAQ - EternaWeb',
  'faq.q1': '✨ Hoe lang duurt het voordat mijn site klaar is?',
  'faq.a1': 'Meestal binnen één uur als alle informatie klaarstaat!',
  'faq.q2': '📲 Kunnen WhatsApp en PayPal worden geïntegreerd?',
  'faq.a2': 'Ja, je mini-site kan directe knoppen bevatten om te bestellen of contact op te nemen.',
  'faq.q3': '📄 Wat moet ik aanleveren om te starten?',
  'faq.a3': 'Teksten (of kernpunten), 3–5 foto\'s/logo, kleurenpalet en nuttige links (socials, Drive).',
  'faq.q4': '🎨 Kan ik de kleuren en indeling wijzigen?',
  'faq.a4': 'Ja, meerdere revisies zijn inbegrepen om stijl, kleuren en secties aan te passen.',
  'faq.q5': '🌐 Bieden jullie hosting aan?',
  'faq.a5': 'Ja, hosting is inbegrepen bij de vitrine- en premium-pakketten. Migratie is mogelijk.',
  'faq.q6': '💡 En als ik nog vragen heb?',
  'faq.a6': 'Je kunt ze hieronder stellen 👇',
  'faq.labelEmail': 'Je e-mailadres:',
  'faq.labelMsg': 'Je vraag:',
  'faq.btn': 'Verstuur je vraag',
  'faq.back': '← Terug naar startpagina',

  'footer.about':'Over ons',
  'about.title': 'Over EternaWeb',
  'about.p1': 'EternaWeb is ontstaan uit een simpele behoefte: iedereen de mogelijkheid bieden om zijn of haar project, talent of aanbod helder en professioneel te presenteren, zelfs zonder technische kennis.',
  'about.p2': '✨ Binnen 2 dagen kan je online showcase of cv klaar zijn, met een heldere, menselijke en intuïtieve stijl. Of je nu een ambachtsman, coach, kunstenaar, therapeut of werkzoekende bent, je verdient een online aanwezigheid die jou weerspiegelt.',
  'about.missionTitle': 'Onze missie',
  'about.mission': 'Eenvoudige, mooie en functionele websites creëren om jouw unieke karakter aan de wereld te laten zien. Bij EternaWeb geloven we in de kracht van minimalisme gecombineerd met vriendelijkheid.',
  'about.targetTitle': 'Voor wie is EternaWeb bedoeld?',
  'about.li1': '• Ambachtslieden en ontwerpers die een zachte en warme etalage willen',
  'about.li2': '• Wellnessprofessionals die op zoek zijn naar een eenvoudige en gastvrije ruimte',
  'about.li3': '• Mensen die zich omscholen of op zoek zijn naar een baan en een waardevol cv willen',
  'about.contact': '💌 Voor meer informatie, om uw project te bespreken of een offerte aan te vragen: <a href="mailto:contact@eternaweb.fr">contact@eternaweb.fr</a>',
  'about.back': '← Terug naar home',

  'footer.legal':'Wettelijke vermeldingen',
  'legal.title': 'Wettelijke vermeldingen - EternaWeb',
  'legal.h1': 'Wettelijke vermeldingen',
  'legal.editorTitle': 'Website-uitgever',
  'legal.editorText': '<strong>EternaWeb</strong><br>Danielle Kabongo<br>Email: <a href="mailto:contact.eternaweb@gmail.com">contact.eternaweb@gmail.com</a>',
  'legal.hostTitle': 'Hosting',
  'legal.hostText': 'De website wordt gratis gehost door <strong>GitHub Pages</strong><br>GitHub Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, Verenigde Staten<br>Website: <a href="https://pages.github.com/" target="_blank">pages.github.com</a>',
  'legal.respTitle': 'Aansprakelijkheid',
  'legal.respText': 'De uitgever biedt informatie en diensten aan in het kader van de creatie van mini-vitrinesites, maar kan niet aansprakelijk worden gesteld voor fouten of onbeschikbaarheid van de site.',
  'legal.ipTitle': 'Intellectueel eigendom',
  'legal.ipText': 'De inhoud (teksten, afbeeldingen, logo’s) die door EternaWeb is gemaakt, is beschermd. Reproductie zonder toestemming is verboden.',
  'legal.back': '← Terug naar startpagina',

  'footer.privacy':'Privacy',
  'privacy.title': 'Privacybeleid - EternaWeb',
  'privacy.h1': 'Privacybeleid',
  'privacy.intro': 'Dit beleid legt uit welke gegevens worden verzameld bij het gebruik van de website <strong>EternaWeb</strong>.',
  'privacy.dataTitle': 'Verzamelde gegevens',
  'privacy.data1': 'Technische gegevens die automatisch worden verzameld door de host GitHub (IP-adressen, logbestanden).',
  'privacy.data2': 'Informatie die vrijwillig wordt verstrekt via contactknoppen (WhatsApp, Instagram, e-mail, PayPal).',
  'privacy.useTitle': 'Gebruik van gegevens',
  'privacy.useText': 'De gegevens worden uitsluitend gebruikt voor de goede werking van de website en om te reageren op gebruikersaanvragen. Er worden geen gegevens verkocht of gedeeld met derden, behalve technische partners (GitHub, WhatsApp, PayPal, Instagram).',
  'privacy.rightsTitle': 'Rechten van gebruikers',
  'privacy.rightsText': 'In overeenstemming met de AVG kunt u toegang, correctie of verwijdering van uw gegevens aanvragen via: <a href="mailto:contact.eternaweb@gmail.com">contact.eternaweb@gmail.com</a>',
  'privacy.cookiesTitle': 'Cookies',
  'privacy.cookiesText': 'De site gebruikt geen advertentiecookies. Alleen technische cookies kunnen worden geplaatst door GitHub Pages of derde diensten (WhatsApp, PayPal, Instagram).',
  'privacy.back': '← Terug naar startpagina',

  'footer.code':'Gedragscode',
  'code.title': 'Gedragscode - EternaWeb',
  'code.h1': 'Gedragscode',
  'code.intro': 'Bij <strong>EternaWeb</strong> streven we naar een respectvolle, veilige en zorgzame omgeving voor iedereen.',
  'code.valuesTitle': '🌱 Onze kernwaarden',
  'code.value1': 'Wederzijds respect, ongeacht afkomst, identiteit of overtuiging',
  'code.value2': 'Duidelijke, vriendelijke en opbouwende communicatie',
  'code.value3': 'Ondersteuning en samenwerking in elk contact',
  'code.value4': 'Vertrouwelijkheid van gedeelde persoonlijke informatie',
  'code.behaviorTitle': '🚫 Onacceptabel gedrag',
  'code.behavior1': 'Elke vorm van intimidatie, pesterij of discriminerend taalgebruik',
  'code.behavior2': 'Misbruik van communicatiemiddelen',
  'code.behavior3': 'Ongeoorloofd delen van gevoelige gegevens',
  'code.engagementTitle': '🤝 EternaWeb’s engagement',
  'code.engagement1': 'We behouden ons het recht voor om elk project of contact te weigeren dat deze gedragscode niet respecteert.',
  'code.engagement2': 'We moedigen iedereen aan om hoffelijk te zijn en bij te dragen aan een harmonieuze werksfeer.',
  'code.thanks': 'Dank dat je de geest van EternaWeb belichaamt: menselijk, ethisch en inspirerend ✨',
  'code.back': '← Terug naar startpagina',

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
    'devis.h2': '📝 Ihre Angaben',
  'devis.sub': 'Wählen, beschreiben, senden — ich erhalte Ihre Angaben direkt.',
  'devis.type': 'Website-Typ',
  'devis.opt.cv': 'Lebenslauf',
  'devis.opt.vitrine': 'Vitrine',
  'devis.opt.portfolio': 'Portfolio',
  'devis.opt.other': 'Andere',
  'devis.colors': 'Farbpalette',
  'devis.style': 'Visueller Stil',
  'devis.style1': 'Schlicht & elegant',
  'devis.style2': 'Kreativ & farbenfroh',
  'devis.style3': 'Minimal & professionell',
  'devis.style4': 'Natürlich & sanft',
  'devis.integrations': 'Gewünschte Integrationen',
  'devis.int.form': 'Kontaktformular',
  'devis.int.social': 'Soziale Netzwerke',
  'devis.int.gallery': 'Galerie',
  'devis.other': 'Weitere Wünsche',
  'devis.name': 'Vor- / Nachname',
  'devis.email': 'E-Mail',
  'devis.note': 'Kein Serverversand: Ihre E-Mail-App öffnet sich mit einer vorgefüllten Nachricht.',
  'btn.fill': 'Ihre Angaben',
  'btn.send': 'Senden',
  'btn.choose': 'Ich wähle dieses Paket',

    // --- Buttons
    'btn.fill':'Ihr Briefing','btn.send':'Senden','btn.choose':'Diesen Tarif wählen',

    // PORTFOLIO
  'portfolio.section.title': '🎨 Portfolio-Vorlagen',
  'portfolio.section.desc': 'Ideal für Künstler, Kreative und Designer.',
  'portfolio.pricing.title': '💼 Portfolio-Tarife',
  'portfolio.pricing.desc': 'Präsentieren Sie Ihre Arbeiten mit Eleganz.',

    
    'portfolio.pack1.title': '📂 Kreativ-Paket – 29,99 €',
  'portfolio.pack1.li1': 'Mini-Website (2–3 Seiten)',
  'portfolio.pack1.li2': 'Foto-/Video-Galerie',
  'portfolio.pack1.li3': 'Ersteller-Präsentation',
  'portfolio.pack2.title': '🌟 Premium-Paket – 59,99 €',
  'portfolio.pack2.li1': 'Alles im Kreativ-Paket',
  'portfolio.pack2.li2': 'Blog-Sektion',
  'portfolio.pack2.li3': 'SEO-Optimierung',
  'portfolio.pack2.li4': 'Inklusive Statistiken',

    // CV
  'cv.h2': '📄 Lebenslauf-Vorlagen',
  'cv.sub': 'Wählen Sie einen Stil, der zu Ihrem Profil passt.',
  'cv.pricing.title': '💼 Online-Lebenslauf-Pakete',
  'cv.pricing.desc': 'Heben Sie Ihre Fähigkeiten mit einem klaren, professionellen Design hervor.',

  'cv.pack1.title': '📝 Starter-Paket – 4,99 €',
  'cv.pack1.li1': 'Rechtschreib- und Grammatikprüfung',
  'cv.pack1.li2': 'Einfache und strukturierte Gestaltung (Word/PDF)',
  'cv.pack1.note': '👉 Ideal für Praktikum, Studentenjob oder erste Arbeitsstelle',
  'cv.pack2.title': '🚀 Boost-Paket – 9,99 €',
  'cv.pack2.li1': 'Beinhaltet Starter-Paket',
  'cv.pack2.li2': 'Inhaltsoptimierung (ATS-kompatibel)',
  'cv.pack2.li3': 'Hinzufügen strategischer Schlüsselwörter',
  'cv.pack2.li4': 'Für eine bessere Auffindbarkeit bei Recruitern',
  'cv.pack3.title': '🌐 Premium-Paket – 19,99 €',
  'cv.pack3.li1': 'Beinhaltet Boost-Paket',
  'cv.pack3.li2': 'Online-Lebenslauf (persönliche Mini-Website)',
  'cv.pack3.li3': '1 Jahr Hosting inklusive',
  'cv.pack3.li4': 'Modernes Design (Desktop & Mobil)',
  'cv.pack3.li5': 'Integrierter QR-Code',
  'cv.pack3.li6': 'Um sich von anderen Bewerbern abzuheben',


    // --- Referenzen
    'testi.h2':'💬 Referenzen',
    'testi.t1':'„Super schnell und professionell — meine Seite war noch am selben Tag online!“','testi.c1':'— Claire B.',
    'testi.t2':'„Elegantes, klares Design — Kunden schreiben mir direkt über WhatsApp!“','testi.c2':'— Malik T.',
    'testi.t3':'„Top Preis-Leistung. Absolute Empfehlung.“','testi.c3':'— Sofia M.',

    // --- Footer
  'footer.faq':'FAQ',
  'faq.title': 'FAQ - EternaWeb',
  'faq.h1': 'FAQ - EternaWeb',
  'faq.q1': '✨ Wie lange dauert es, bis meine Website fertig ist?',
  'faq.a1': 'In der Regel innerhalb einer Stunde, wenn alle Informationen bereit sind!',
  'faq.q2': '📲 Können WhatsApp und PayPal integriert werden?',
  'faq.a2': 'Ja, deine Mini-Website kann direkte Schaltflächen für Bestellungen oder Kontakt enthalten.',
  'faq.q3': '📄 Was muss ich bereitstellen, um zu starten?',
  'faq.a3': 'Texte (oder Stichpunkte), 3–5 Fotos/Logo, Farbpalette und nützliche Links (Socials, Drive).',
  'faq.q4': '🎨 Kann ich Farben und Layout ändern?',
  'faq.a4': 'Ja, mehrere Überarbeitungen sind inbegriffen, um Stil, Farben und Abschnitte anzupassen.',
  'faq.q5': '🌐 Bieten Sie Hosting an?',
  'faq.a5': 'Ja, Hosting ist in den Showcase- und Premium-Paketen enthalten. Migration ist möglich.',
  'faq.q6': '💡 Und wenn ich weitere Fragen habe?',
  'faq.a6': 'Du kannst sie unten stellen 👇',
  'faq.labelEmail': 'Deine E-Mail-Adresse:',
  'faq.labelMsg': 'Deine Frage:',
  'faq.btn': 'Frage senden',
  'faq.back': '← Zurück zur Startseite',

  'footer.about':'Über uns',
  'about.title': 'Über EternaWeb',
  'about.p1': 'EternaWeb entstand aus dem einfachen Wunsch, jedem zu ermöglichen, sein Projekt, Talent oder Angebot klar und professionell zu präsentieren — auch ohne technische Kenntnisse.',
  'about.p2': '✨ Innerhalb von 2 Tagen kann Ihre Online-Vitrine oder Ihr Lebenslauf online sein – mit einem klaren, menschlichen und intuitiven Design. Ob Handwerker, Coach, Künstler, Therapeut oder Arbeitssuchender – Sie verdienen eine Online-Präsenz, die Sie widerspiegelt.',
  'about.missionTitle': 'Unsere Mission',
  'about.mission': 'Einfache, schöne und funktionale Websites zu erstellen, um Ihre Einzigartigkeit der Welt zu zeigen. Bei EternaWeb glauben wir an die Kraft von Minimalismus und Freundlichkeit.',
  'about.targetTitle': 'Für wen ist EternaWeb gedacht?',
  'about.li1': '• Für Handwerker und Kreative, die eine warme, sanfte Präsentation wünschen',
  'about.li2': '• Für Wellness-Profis, die einen ruhigen und einladenden Raum suchen',
  'about.li3': '• Für Menschen im Berufswechsel oder Arbeitssuchende, die einen aussagekräftigen Lebenslauf wünschen',
  'about.contact': '💌 Weitere Informationen oder ein Angebot anfordern: <a href="mailto:contact@eternaweb.fr">contact@eternaweb.fr</a>',
  'about.back': '← Zurück zur Startseite',

  'footer.legal':'Impressum',
  'legal.title': 'Impressum - EternaWeb',
  'legal.h1': 'Impressum',
  'legal.editorTitle': 'Herausgeber der Website',
  'legal.editorText': '<strong>EternaWeb</strong><br>Danielle Kabongo<br>E-Mail: <a href="mailto:contact.eternaweb@gmail.com">contact.eternaweb@gmail.com</a>',
  'legal.hostTitle': 'Hosting',
  'legal.hostText': 'Diese Website wird kostenlos von <strong>GitHub Pages</strong> gehostet<br>GitHub Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA<br>Website: <a href="https://pages.github.com/" target="_blank">pages.github.com</a>',
  'legal.respTitle': 'Haftung',
  'legal.respText': 'Der Herausgeber stellt Informationen und Dienstleistungen im Rahmen der Erstellung von Mini-Schaufensterseiten zur Verfügung, kann jedoch nicht für Fehler oder Nichtverfügbarkeit der Website verantwortlich gemacht werden.',
  'legal.ipTitle': 'Urheberrecht',
  'legal.ipText': 'Die von EternaWeb erstellten Inhalte (Texte, Bilder, Logos) sind urheberrechtlich geschützt. Eine Vervielfältigung ohne Genehmigung ist verboten.',
  'legal.back': '← Zurück zur Startseite',

  'footer.privacy':'Datenschutz',
  'privacy.title': 'Datenschutz - EternaWeb',
  'privacy.h1': 'Datenschutz',
  'privacy.intro': 'Diese Richtlinie erklärt, welche Daten beim Besuch der Website <strong>EternaWeb</strong> erhoben werden.',
  'privacy.dataTitle': 'Erhobene Daten',
  'privacy.data1': 'Technische Daten, die automatisch vom Hosting-Dienst GitHub erfasst werden (IP-Adressen, Protokolle).',
  'privacy.data2': 'Freiwillig übermittelte Informationen über Kontaktbuttons (WhatsApp, Instagram, E-Mail, PayPal).',
  'privacy.useTitle': 'Verwendung der Daten',
  'privacy.useText': 'Die Daten werden ausschließlich verwendet, um den ordnungsgemäßen Betrieb der Website sicherzustellen und Benutzeranfragen zu beantworten. Es erfolgt kein Verkauf oder Weitergabe an Dritte außer an technische Anbieter (GitHub, WhatsApp, PayPal, Instagram).',
  'privacy.rightsTitle': 'Rechte der Benutzer',
  'privacy.rightsText': 'Gemäß der DSGVO können Sie den Zugriff, die Berichtigung oder die Löschung Ihrer Daten anfordern, indem Sie sich an folgende Adresse wenden: <a href="mailto:contact.eternaweb@gmail.com">contact.eternaweb@gmail.com</a>',
  'privacy.cookiesTitle': 'Cookies',
  'privacy.cookiesText': 'Die Website verwendet keine Werbe-Cookies. Es können lediglich technische Cookies von GitHub Pages oder den verwendeten Drittanbietern (WhatsApp, PayPal, Instagram) erstellt werden.',
  'privacy.back': '← Zurück zur Startseite',

  'footer.code':'Verhaltenskodex',
  'code.title': 'Verhaltenskodex - EternaWeb',
  'code.h1': 'Verhaltenskodex',
  'code.intro': 'Bei <strong>EternaWeb</strong> verpflichten wir uns, ein respektvolles, sicheres und fürsorgliches Umfeld für alle zu schaffen.',
  'code.valuesTitle': '🌱 Unsere Grundwerte',
  'code.value1': 'Gegenseitiger Respekt, unabhängig von Herkunft, Identität oder Überzeugung',
  'code.value2': 'Klare, freundliche und konstruktive Kommunikation',
  'code.value3': 'Unterstützung und Zusammenarbeit in allen Interaktionen',
  'code.value4': 'Vertraulichkeit persönlicher Informationen',
  'code.behaviorTitle': '🚫 Unzulässiges Verhalten',
  'code.behavior1': 'Jegliche Form von Belästigung, Einschüchterung oder diskriminierender Sprache',
  'code.behavior2': 'Missbräuchliche Nutzung von Kommunikationskanälen',
  'code.behavior3': 'Unbefugte Weitergabe sensibler Daten',
  'code.engagementTitle': '🤝 EternaWebs Engagement',
  'code.engagement1': 'Wir behalten uns das Recht vor, Projekte oder Kooperationen abzulehnen, die diesen Kodex nicht respektieren.',
  'code.engagement2': 'Wir ermutigen alle, höflich zu handeln und zu einer harmonischen Arbeitsatmosphäre beizutragen.',
  'code.thanks': 'Danke, dass Sie den EternaWeb-Geist verkörpern: menschlich, ethisch und inspiriert ✨',
  'code.back': '← Zurück zur Startseite',

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
    'devis.h2': '📝 Ваши инструкции',
  'devis.sub': 'Выберите, опишите, отправьте — я получу ваши данные напрямую.',
  'devis.type': 'Тип сайта',
  'devis.opt.cv': 'Резюме',
  'devis.opt.vitrine': 'Витрина',
  'devis.opt.portfolio': 'Портфолио',
  'devis.opt.other': 'Другое',
  'devis.colors': 'Палитра / цвета',
  'devis.style': 'Визуальный стиль',
  'devis.style1': 'Строгий и элегантный',
  'devis.style2': 'Креативный и яркий',
  'devis.style3': 'Минималистичный и профессиональный',
  'devis.style4': 'Нежный и природный',
  'devis.integrations': 'Желаемые интеграции',
  'devis.int.form': 'Форма обратной связи',
  'devis.int.social': 'Социальные сети',
  'devis.int.gallery': 'Галерея',
  'devis.other': 'Другие запросы',
  'devis.name': 'Имя / Фамилия',
  'devis.email': 'Электронная почта',
  'devis.note': 'Без отправки на сервер: ваше почтовое приложение откроется с готовым письмом.',
  'btn.fill': 'Ваши инструкции',
  'btn.send': 'Отправить',
  'btn.choose': 'Выбираю этот пакет',

    // --- Кнопки
    'btn.fill':'Ваши пожелания','btn.send':'Отправить','btn.choose':'Выбрать этот пакет',

    // PORTFOLIO
  'portfolio.section.title': '🎨 Шаблоны портфолио',
  'portfolio.section.desc': 'Идеально для художников, создателей и дизайнеров.',
  'portfolio.pricing.title': '💼 Тарифы портфолио',
  'portfolio.pricing.desc': 'Покажите свои работы с элегантностью.',

     'portfolio.pack1.title': '📂 Креативный пакет – 29,99 €',
  'portfolio.pack1.li1': 'Мини-сайт (2–3 страницы)',
  'portfolio.pack1.li2': 'Галерея фото/видео',
  'portfolio.pack1.li3': 'Презентация автора',
  'portfolio.pack2.title': '🌟 Премиум пакет – 59,99 €',
  'portfolio.pack2.li1': 'Всё из Креативного пакета',
  'portfolio.pack2.li2': 'Раздел блог',
  'portfolio.pack2.li3': 'SEO-оптимизация',
  'portfolio.pack2.li4': 'Включена статистика',
    
 // CV
  'cv.h2': '📄 Шаблоны резюме',
  'cv.sub': 'Выберите стиль, который соответствует вашему профилю.',
  'cv.pricing.title': '💼 Онлайн-пакеты резюме',
  'cv.pricing.desc': 'Подчеркните свои навыки с чистым и профессиональным дизайном.',

  'cv.pack1.title': '📝 Стартовый пакет – 4,99 €',
  'cv.pack1.li1': 'Проверка орфографии и грамматики',
  'cv.pack1.li2': 'Простое и структурированное оформление (Word/PDF)',
  'cv.pack1.note': '👉 Идеально для стажировки, студенческой работы или первой должности',
  'cv.pack2.title': '🚀 Пакет Boost – 9,99 €',
  'cv.pack2.li1': 'Включает Стартовый пакет',
  'cv.pack2.li2': 'Оптимизация контента (совместимо с ATS)',
  'cv.pack2.li3': 'Добавление стратегических ключевых слов',
  'cv.pack2.li4': 'Для лучшей видимости среди рекрутеров',
  'cv.pack3.title': '🌐 Премиум пакет – 19,99 €',
  'cv.pack3.li1': 'Включает Boost пакет',
  'cv.pack3.li2': 'Создание онлайн-резюме (мини-сайт)',
  'cv.pack3.li3': 'Хостинг включён на 1 год',
  'cv.pack3.li4': 'Современный дизайн (ПК и мобильный)',
  'cv.pack3.li5': 'Встроенный QR-код',
  'cv.pack3.li6': 'Чтобы выделиться среди других кандидатов',


    // --- Отзывы
    'testi.h2':'💬 Отзывы',
    'testi.t1':'«Очень оперативно и профессионально — мой сайт был онлайн в тот же день!»','testi.c1':'— Клер Б.',
    'testi.t2':'«Элегантный и понятный дизайн — клиенты пишут прямо в WhatsApp!»','testi.c2':'— Малик Т.',
    'testi.t3':'«Отличное соотношение цены и качества. Рекомендую!»','testi.c3':'— София М.',

    // --- Подвал
  'footer.faq': 'FAQ',
  'faq.title': 'Часто задаваемые вопросы - EternaWeb',
  'faq.h1': 'Часто задаваемые вопросы - EternaWeb',
  'faq.q1': '✨ За какое время мой сайт будет готов?',
  'faq.a1': 'Обычно в течение одного часа, если вся информация уже готова!',
  'faq.q2': '📲 Можно ли интегрировать WhatsApp и PayPal?',
  'faq.a2': 'Да, ваш мини-сайт может содержать прямые кнопки для заказов.',
  'faq.q3': '📄 Что нужно предоставить для начала?',
  'faq.a3': 'Тексты (или основные идеи), 3–5 фото/логотип, цветовая палитра, полезные ссылки (соцсети, Google Drive).',
  'faq.q4': '🎨 Можно ли изменить цвета и оформление?',
  'faq.a4': 'Да, несколько корректировок включены для настройки стиля, цветов и секций.',
  'faq.q5': '🌐 Предоставляете ли вы хостинг?',
  'faq.a5': 'Да, хостинг включён в тарифы (витрина и премиум). Возможна миграция.',
  'faq.q6': '💡 А если у меня есть другие вопросы?',
  'faq.a6': 'Вы можете задать их ниже 👇',
  'faq.labelEmail': 'Ваш адрес электронной почты:',
  'faq.labelMsg': 'Ваш вопрос:',
  'faq.btn': 'Отправить вопрос',
  'faq.back': '← Вернуться на главную',

  'footer.about': 'О нас',
  'about.title': 'О EternaWeb',
  'about.p1': 'EternaWeb появилась из простой идеи: помочь каждому представить свой проект, талант или предложение ясно и профессионально — даже без технических навыков.',
  'about.p2': '✨ Всего за 2 дня ваш сайт-витрина или онлайн-резюме может быть готов — в чистом, интуитивном и человекоориентированном дизайне. Будь вы мастер, коуч, художник, терапевт или ищете работу — вы заслуживаете онлайн-присутствие, которое отражает вас.',
  'about.missionTitle': 'Наша миссия',
  'about.mission': 'Создавать простые, красивые и функциональные сайты, чтобы показать вашу уникальность миру. В EternaWeb мы верим в силу минимализма и доброжелательности.',
  'about.targetTitle': 'Для кого EternaWeb?',
  'about.li1': '• Для мастеров и создателей, которые хотят уютную и тёплую витрину',
  'about.li2': '• Для специалистов в сфере благополучия, ищущих простое и спокойное пространство',
  'about.li3': '• Для людей в переходный период или в поиске работы, которые хотят привлекательное резюме',
  'about.contact': '💌 Чтобы узнать больше или запросить предложение: <a href="mailto:contact@eternaweb.fr">contact@eternaweb.fr</a>',
  'about.back': '← Вернуться на главную',

  'footer.legal': 'Юридическая информация',
  'legal.title': 'Юридическая информация - EternaWeb',
  'legal.h1': 'Юридическая информация',
  'legal.editorTitle': 'Издатель сайта',
  'legal.editorText': '<strong>EternaWeb</strong><br>Danielle Kabongo<br>Email: <a href="mailto:contact@eternaweb.fr">contact@eternaweb.fr</a>',
  'legal.hostTitle': 'Хостинг',
  'legal.hostText': 'Сайт бесплатно размещён на <strong>GitHub Pages</strong><br>GitHub Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, США<br>Сайт: <a href="https://pages.github.com/" target="_blank">pages.github.com</a>',
  'legal.respTitle': 'Ответственность',
  'legal.respText': 'Редактор предоставляет информацию и услуги в рамках создания мини-сайтов-витрин. Однако он не несёт ответственности за ошибки или недоступность сайта.',
  'legal.ipTitle': 'Интеллектуальная собственность',
  'legal.ipText': 'Контент (тексты, изображения, логотипы), созданный EternaWeb, защищён. Любое воспроизведение без разрешения запрещено.',
  'legal.back': '← Вернуться на главную',

  'footer.privacy': 'Конфиденциальность',
  'privacy.title': 'Конфиденциальность - EternaWeb',
  'privacy.h1': 'Конфиденциальность',
  'privacy.intro': 'Настоящая политика объясняет, какие данные собираются при использовании сайта <strong>EternaWeb</strong>.',
  'privacy.dataTitle': 'Собираемые данные',
  'privacy.data1': 'Технические данные, автоматически собираемые хостингом GitHub (IP-адреса, журналы).',
  'privacy.data2': 'Информация, переданная добровольно через кнопки контакта (WhatsApp, Instagram, Email, PayPal).',
  'privacy.useTitle': 'Использование данных',
  'privacy.useText': 'Данные используются только для обеспечения работы сайта и ответа на запросы пользователей. Никакие данные не продаются и не передаются третьим лицам, кроме технических поставщиков (GitHub, WhatsApp, PayPal, Instagram).',
  'privacy.rightsTitle': 'Права пользователей',
  'privacy.rightsText': 'В соответствии с GDPR вы можете запросить доступ, исправление или удаление своих данных, написав на: <a href="mailto:contact@eternaweb.fr">contact@eternaweb.fr</a>',
  'privacy.cookiesTitle': 'Cookies',
  'privacy.cookiesText': 'Сайт не использует рекламные cookies. Используются только технические cookies, создаваемые GitHub Pages или сторонними сервисами (WhatsApp, PayPal, Instagram).',
  'privacy.back': '← Вернуться на главную',

  'footer.code': 'Кодекс поведения',
  'code.title': 'Кодекс поведения - EternaWeb',
  'code.h1': 'Кодекс поведения',
  'code.intro': 'В <strong>EternaWeb</strong> мы стремимся обеспечить уважительное, безопасное и доброжелательное пространство для всех.',
  'code.valuesTitle': '🌱 Наши основные ценности',
  'code.value1': 'Взаимное уважение, независимо от происхождения, идентичности или убеждений',
  'code.value2': 'Ясное, мягкое и конструктивное общение',
  'code.value3': 'Поддержка и взаимопомощь в общении',
  'code.value4': 'Конфиденциальность личной информации',
  'code.behaviorTitle': '🚫 Недопустимое поведение',
  'code.behavior1': 'Любые формы домогательств, запугивания или дискриминации',
  'code.behavior2': 'Злоупотребление каналами связи',
  'code.behavior3': 'Несанкционированное распространение конфиденциальных данных',
  'code.engagementTitle': '🤝 Обязательства EternaWeb',
  'code.engagement1': 'Мы оставляем за собой право отказаться от любого проекта или общения, не соответствующего этому кодексу поведения.',
  'code.engagement2': 'Мы призываем всех быть вежливыми и способствовать созданию гармоничной рабочей атмосферы.',
  'code.thanks': 'Спасибо, что воплощаете дух EternaWeb: человечный, этичный и вдохновляющий ✨',
  'code.back': '← Вернуться на главную',

  'footer.copy': '© 2025 EternaWeb — Все права защищены'
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
    'devis.h2': '📝 Tus indicaciones',
  'devis.sub': 'Elige, describe y envía — recibo tus instrucciones directamente.',
  'devis.type': 'Tipo de sitio',
  'devis.opt.cv': 'CV',
  'devis.opt.vitrine': 'Vitrina',
  'devis.opt.portfolio': 'Portafolio',
  'devis.opt.other': 'Otro',
  'devis.colors': 'Paleta / colores',
  'devis.style': 'Estilo visual',
  'devis.style1': 'Sencillo y elegante',
  'devis.style2': 'Creativo y colorido',
  'devis.style3': 'Minimalista y profesional',
  'devis.style4': 'Natural y suave',
  'devis.integrations': 'Integraciones deseadas',
  'devis.int.form': 'Formulario de contacto',
  'devis.int.social': 'Redes sociales',
  'devis.int.gallery': 'Galería',
  'devis.other': 'Otras solicitudes',
  'devis.name': 'Nombre / Apellido',
  'devis.email': 'Correo electrónico',
  'devis.note': 'Sin envío al servidor: tu aplicación de correo se abre con el mensaje rellenado.',
  'btn.fill': 'Tus indicaciones',
  'btn.send': 'Enviar',
  'btn.choose': 'Elijo este plan',

    // --- Botones
    'btn.fill':'Sus indicaciones','btn.send':'Enviar','btn.choose':'Elegir este plan',

    // PORTFOLIO
  'portfolio.section.title': '🎨 Plantillas de Portafolio',
  'portfolio.section.desc': 'Ideal para artistas, creadores y diseñadores.',
  'portfolio.pricing.title': '💼 Planes de Portafolio',
  'portfolio.pricing.desc': 'Muestra tus creaciones con elegancia.',

     'portfolio.pack1.title': '📂 Paquete Creativo – 29,99 €',
  'portfolio.pack1.li1': 'Mini sitio (2–3 páginas)',
  'portfolio.pack1.li2': 'Galería de fotos/vídeos',
  'portfolio.pack1.li3': 'Presentación del creador',
  'portfolio.pack2.title': '🌟 Paquete Premium – 59,99 €',
  'portfolio.pack2.li1': 'Todo el Paquete Creativo',
  'portfolio.pack2.li2': 'Sección de blog',
  'portfolio.pack2.li3': 'Optimización SEO',
  'portfolio.pack2.li4': 'Estadísticas incluidas',

    // CV
  'cv.h2': '📄 Modelos de CV',
  'cv.sub': 'Elige un estilo que se adapte a tu perfil.',
  'cv.pricing.title': '💼 Planes de CV en línea',
  'cv.pricing.desc': 'Resalta tus habilidades con un diseño claro y profesional.',

  'cv.pack1.title': '📝 Paquete Inicial – 4,99 €',
  'cv.pack1.li1': 'Corrección ortográfica y gramatical',
  'cv.pack1.li2': 'Diseño simple y estructurado (Word/PDF)',
  'cv.pack1.note': '👉 Ideal para prácticas, trabajo de estudiante o primer empleo',
  'cv.pack2.title': '🚀 Paquete Impulso – 9,99 €',
  'cv.pack2.li1': 'Incluye el Paquete Inicial',
  'cv.pack2.li2': 'Optimización del contenido (compatible con ATS)',
  'cv.pack2.li3': 'Añadido de palabras clave estratégicas',
  'cv.pack2.li4': 'Para una mejor visibilidad ante los reclutadores',
  'cv.pack3.title': '🌐 Paquete Premium – 19,99 €',
  'cv.pack3.li1': 'Incluye el Paquete Impulso',
  'cv.pack3.li2': 'Creación de CV en línea (mini sitio personal)',
  'cv.pack3.li3': 'Alojamiento incluido por 1 año',
  'cv.pack3.li4': 'Diseño moderno (ordenador y móvil)',
  'cv.pack3.li5': 'Código QR integrado',
  'cv.pack3.li6': 'Para destacar entre otros candidatos', 


    // --- Testimonios
    'testi.h2':'💬 Testimonios',
    'testi.t1':'“Súper rápida y profesional: ¡mi sitio estuvo online el mismo día!”','testi.c1':'— Claire B.',
    'testi.t2':'“Diseño elegante y claro; ¡mis clientes me escriben por WhatsApp!”','testi.c2':'— Malik T.',
    'testi.t3':'“Excelente relación calidad-precio. 100% recomendado.”','testi.c3':'— Sofia M.',

    // --- Footer
  'footer.faq':'FAQ',
  'faq.title': 'FAQ - EternaWeb',
  'faq.h1': 'Preguntas frecuentes - EternaWeb',
  'faq.q1': '✨ ¿Cuánto tiempo tarda en estar lista mi web?',
  'faq.a1': 'Normalmente, en menos de una hora si toda la información está lista.',
  'faq.q2': '📲 ¿Se pueden integrar WhatsApp y PayPal?',
  'faq.a2': 'Sí, tu mini-sitio puede incluir botones directos para pedidos o contacto.',
  'faq.q3': '📄 ¿Qué debo proporcionar para comenzar?',
  'faq.a3': 'Textos (o puntos clave), 3–5 fotos/logo, paleta de colores y enlaces útiles (redes, Drive).',
  'faq.q4': '🎨 ¿Puedo cambiar los colores y el diseño?',
  'faq.a4': 'Sí, se incluyen varias revisiones para ajustar el estilo, los colores y las secciones.',
  'faq.q5': '🌐 ¿Ofrecen alojamiento web?',
  'faq.a5': 'Sí, el alojamiento está incluido en los planes vitrina y premium. Migración disponible.',
  'faq.q6': '💡 ¿Y si tengo más preguntas?',
  'faq.a6': 'Puedes enviarlas a continuación 👇',
  'faq.labelEmail': 'Tu dirección de correo:',
  'faq.labelMsg': 'Tu pregunta:',
  'faq.btn': 'Enviar pregunta',
  'faq.back': '← Volver al inicio',

  'footer.about':'Acerca de',
  'about.title': 'Acerca de EternaWeb',
  'about.p1': 'EternaWeb nació de una idea sencilla: ayudar a todos a presentar su proyecto, talento u oferta con claridad y profesionalismo, incluso sin conocimientos técnicos.',
  'about.p2': '✨ En solo 2 días, tu vitrina o CV en línea puede estar lista, con un estilo limpio, humano e intuitivo. Ya seas artesano, coach, artista, terapeuta o buscador de empleo, mereces una presencia en línea que te represente.',
  'about.missionTitle': 'Nuestra misión',
  'about.mission': 'Crear sitios web simples, hermosos y funcionales para mostrar tu singularidad al mundo. En EternaWeb creemos en el poder del minimalismo combinado con la amabilidad.',
  'about.targetTitle': '¿A quién se dirige EternaWeb?',
  'about.li1': '• A los artesanos y creadores que desean una vitrina cálida y acogedora',
  'about.li2': '• A los profesionales del bienestar que buscan un espacio simple y tranquilo',
  'about.li3': '• A las personas en transición o búsqueda laboral que desean un CV atractivo',
  'about.contact': '💌 Para más información o para solicitar un presupuesto: <a href="mailto:contact@eternaweb.fr">contact@eternaweb.fr</a>',
  'about.back': '← Volver al inicio',

  'footer.legal':'Aviso legal',
  'legal.title': 'Aviso legal - EternaWeb',
  'legal.h1': 'Aviso legal',
  'legal.editorTitle': 'Editor del sitio',
  'legal.editorText': '<strong>EternaWeb</strong><br>Danielle Kabongo<br>Email: <a href="mailto:contact.eternaweb@gmail.com">contact.eternaweb@gmail.com</a>',
  'legal.hostTitle': 'Alojamiento',
  'legal.hostText': 'El sitio está alojado gratuitamente por <strong>GitHub Pages</strong><br>GitHub Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, Estados Unidos<br>Sitio: <a href="https://pages.github.com/" target="_blank">pages.github.com</a>',
  'legal.respTitle': 'Responsabilidad',
  'legal.respText': 'El editor ofrece información y servicios relacionados con la creación de mini sitios vitrina, pero no puede ser considerado responsable de errores o de la indisponibilidad del sitio.',
  'legal.ipTitle': 'Propiedad intelectual',
  'legal.ipText': 'Los contenidos (textos, imágenes, logotipos) creados por EternaWeb están protegidos. Toda reproducción sin autorización está prohibida.',
  'legal.back': '← Volver al inicio',

  'footer.privacy':'Privacidad',
  'privacy.title': 'Privacidad - EternaWeb',
  'privacy.h1': 'Privacidad',
  'privacy.intro': 'Esta política explica qué datos se recopilan al usar el sitio web <strong>EternaWeb</strong>.',
  'privacy.dataTitle': 'Datos recopilados',
  'privacy.data1': 'Datos técnicos recopilados automáticamente por el servicio de alojamiento GitHub (direcciones IP, registros).',
  'privacy.data2': 'Información transmitida voluntariamente a través de los botones de contacto (WhatsApp, Instagram, correo electrónico, PayPal).',
  'privacy.useTitle': 'Uso de los datos',
  'privacy.useText': 'Los datos se utilizan únicamente para garantizar el correcto funcionamiento del sitio y responder a las solicitudes de los usuarios. Ningún dato se vende ni se comparte con terceros, salvo con los proveedores técnicos (GitHub, WhatsApp, PayPal, Instagram).',
  'privacy.rightsTitle': 'Derechos de los usuarios',
  'privacy.rightsText': 'De acuerdo con el RGPD, puedes solicitar el acceso, la rectificación o la eliminación de tus datos escribiendo a: <a href="mailto:contact.eternaweb@gmail.com">contact.eternaweb@gmail.com</a>',
  'privacy.cookiesTitle': 'Cookies',
  'privacy.cookiesText': 'El sitio no utiliza cookies publicitarias. Solo se pueden generar cookies técnicas por GitHub Pages o servicios de terceros (WhatsApp, PayPal, Instagram).',
  'privacy.back': '← Volver al inicio',

  'footer.code':'Código de conducta',
  'code.title': 'Código de conducta - EternaWeb',
  'code.h1': 'Código de conducta',
  'code.intro': 'En <strong>EternaWeb</strong>, nos comprometemos a ofrecer un entorno respetuoso, seguro y amable para todas las personas.',
  'code.valuesTitle': '🌱 Nuestros valores fundamentales',
  'code.value1': 'Respeto mutuo, sin importar el origen, la identidad o las creencias',
  'code.value2': 'Comunicación clara, amable y constructiva',
  'code.value3': 'Apoyo y cooperación en todas las interacciones',
  'code.value4': 'Confidencialidad de la información personal compartida',
  'code.behaviorTitle': '🚫 Comportamientos inaceptables',
  'code.behavior1': 'Cualquier forma de acoso, intimidación o lenguaje discriminatorio',
  'code.behavior2': 'Uso abusivo de los canales de comunicación',
  'code.behavior3': 'Compartir datos sensibles sin autorización',
  'code.engagementTitle': '🤝 Compromiso de EternaWeb',
  'code.engagement1': 'Nos reservamos el derecho de rechazar cualquier proyecto o colaboración que no respete este código de conducta.',
  'code.engagement2': 'Animamos a todos a actuar con cortesía y a contribuir a un ambiente de trabajo armonioso.',
  'code.thanks': 'Gracias por encarnar el espíritu de EternaWeb: humano, ético e inspirador ✨',
  'code.back': '← Volver al inicio',

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
    'devis.h2': '📝 Le tue istruzioni',
  'devis.sub': 'Scegli, descrivi, invia — ricevo direttamente le tue istruzioni.',
  'devis.type': 'Tipo di sito',
  'devis.opt.cv': 'CV',
  'devis.opt.vitrine': 'Vetrina',
  'devis.opt.portfolio': 'Portfolio',
  'devis.opt.other': 'Altro',
  'devis.colors': 'Palette / colori',
  'devis.style': 'Stile visivo',
  'devis.style1': 'Sobrio ed elegante',
  'devis.style2': 'Creativo e colorato',
  'devis.style3': 'Minimal e professionale',
  'devis.style4': 'Naturale e delicato',
  'devis.integrations': 'Integrazioni desiderate',
  'devis.int.form': 'Modulo di contatto',
  'devis.int.social': 'Social network',
  'devis.int.gallery': 'Galleria',
  'devis.other': 'Altre richieste',
  'devis.name': 'Nome / Cognome',
  'devis.email': 'Email',
  'devis.note': 'Nessun invio al server: la tua app email si apre con il messaggio precompilato.',
  'btn.fill': 'Le tue istruzioni',
  'btn.send': 'Invia',
  'btn.choose': 'Scelgo questo pacchetto',

    // --- Pulsanti
    'btn.fill':'Le tue indicazioni','btn.send':'Invia','btn.choose':'Scegli questo piano',

    // PORTFOLIO
  'portfolio.section.title': '🎨 Modelli di Portfolio',
  'portfolio.section.desc': 'Ideale per artisti, creatori e designer.',
  'portfolio.pricing.title': '💼 Pacchetti Portfolio',
  'portfolio.pricing.desc': 'Mostra le tue creazioni con eleganza.',

    'portfolio.pack1.title': '📂 Pacchetto Creativo – 29,99 €',
  'portfolio.pack1.li1': 'Mini-sito (2–3 pagine)',
  'portfolio.pack1.li2': 'Galleria foto/video',
  'portfolio.pack1.li3': 'Presentazione del creatore',
  'portfolio.pack2.title': '🌟 Pacchetto Premium – 59,99 €',
  'portfolio.pack2.li1': 'Tutto il Pacchetto Creativo',
  'portfolio.pack2.li2': 'Sezione blog',
  'portfolio.pack2.li3': 'Ottimizzazione SEO',
  'portfolio.pack2.li4': 'Statistiche incluse',

     // CV
  'cv.h2': '📄 Modelli di CV',
  'cv.sub': 'Scegli uno stile che si adatta al tuo profilo.',
  'cv.pricing.title': '💼 Pacchetti CV online',
  'cv.pricing.desc': 'Metti in risalto le tue competenze con un design chiaro e professionale.',

  'cv.pack1.title': '📝 Pacchetto Starter – 4,99 €',
  'cv.pack1.li1': 'Correzione ortografica e grammaticale',
  'cv.pack1.li2': 'Impaginazione semplice e strutturata (Word/PDF)',
  'cv.pack1.note': '👉 Ideale per stage, lavoro studentesco o primo impiego',
  'cv.pack2.title': '🚀 Pacchetto Boost – 9,99 €',
  'cv.pack2.li1': 'Include il Pacchetto Starter',
  'cv.pack2.li2': 'Ottimizzazione del contenuto (compatibile ATS)',
  'cv.pack2.li3': 'Aggiunta di parole chiave strategiche',
  'cv.pack2.li4': 'Per una migliore visibilità presso i recruiter',
  'cv.pack3.title': '🌐 Pacchetto Premium – 19,99 €',
  'cv.pack3.li1': 'Include il Pacchetto Boost',
  'cv.pack3.li2': 'Creazione di un CV online (mini-sito personale)',
  'cv.pack3.li3': 'Hosting incluso per 1 anno',
  'cv.pack3.li4': 'Design moderno (desktop e mobile)',
  'cv.pack3.li5': 'Codice QR integrato',
  'cv.pack3.li6': 'Per distinguerti dagli altri candidati',   

    // --- Testimonianze
    'testi.h2':'💬 Testimonianze',
    'testi.t1':'“Super reattiva e professionale — il mio sito era online lo stesso giorno!”','testi.c1':'— Claire B.',
    'testi.t2':'“Design elegante e chiaro; i clienti mi scrivono direttamente su WhatsApp!”','testi.c2':'— Malik T.',
    'testi.t3':'“Ottimo rapporto qualità-prezzo. Consigliatissimo.”','testi.c3':'— Sofia M.',

    // --- Footer
  'footer.faq':'FAQ',
  'faq.title': 'FAQ - EternaWeb',
  'faq.h1': 'FAQ - EternaWeb',
  'faq.q1': '✨ Quanto tempo ci vuole per avere il mio sito pronto?',
  'faq.a1': 'Di solito entro un’ora se tutte le informazioni sono pronte!',
  'faq.q2': '📲 Si possono integrare WhatsApp e PayPal?',
  'faq.a2': 'Sì, il tuo mini-sito può includere pulsanti diretti per ordini o contatti.',
  'faq.q3': '📄 Cosa devo fornire per iniziare?',
  'faq.a3': 'Testi (o punti chiave), 3–5 foto/logo, palette di colori e link utili (social, Drive).',
  'faq.q4': '🎨 Posso cambiare colori e layout?',
  'faq.a4': 'Sì, sono incluse diverse revisioni per regolare stile, colori e sezioni.',
  'faq.q5': '🌐 Fornite anche l’hosting?',
  'faq.a5': 'Sì, l’hosting è incluso nei pacchetti vetrina e premium. Migrazione possibile.',
  'faq.q6': '💡 E se ho altre domande?',
  'faq.a6': 'Puoi scriverle qui sotto 👇',
  'faq.labelEmail': 'Il tuo indirizzo e-mail:',
  'faq.labelMsg': 'La tua domanda:',
  'faq.btn': 'Invia la domanda',
  'faq.back': '← Torna alla home',

  'footer.about':'Chi siamo',
  'about.title': 'Chi siamo - EternaWeb',
  'about.p1': 'EternaWeb nasce da un bisogno semplice: permettere a chiunque di presentare il proprio progetto, talento o offerta con chiarezza e professionalità, anche senza competenze tecniche.',
  'about.p2': '✨ In soli due giorni, la tua vetrina o il tuo CV online possono prendere vita, con uno stile pulito, umano e intuitivo. Che tu sia artigiano, coach, artista, terapeuta o in cerca di lavoro, meriti una presenza online che ti rappresenti davvero.',
  'about.missionTitle': 'La nostra missione',
  'about.mission': 'Creare siti semplici, belli e funzionali per mostrare la tua unicità al mondo. In EternaWeb crediamo nel potere del minimalismo unito alla gentilezza.',
  'about.targetTitle': 'A chi si rivolge EternaWeb?',
  'about.li1': '• Agli artigiani e ai creatori che desiderano una vetrina calda e accogliente',
  'about.li2': '• Ai professionisti del benessere che cercano uno spazio semplice e sereno',
  'about.li3': '• A chi è in transizione o in cerca di lavoro e vuole un CV valorizzante',
  'about.contact': '💌 Per maggiori informazioni o per richiedere un preventivo: <a href="mailto:contact@eternaweb.fr">contact@eternaweb.fr</a>',
  'about.back': '← Torna alla home',

  'footer.legal':'Note legali',
  'legal.title': 'Note legali - EternaWeb',
  'legal.h1': 'Note legali',
  'legal.editorTitle': 'Editore del sito',
  'legal.editorText': '<strong>EternaWeb</strong><br>Danielle Kabongo<br>Email: <a href="mailto:contact.eternaweb@gmail.com">contact.eternaweb@gmail.com</a>',
  'legal.hostTitle': 'Hosting',
  'legal.hostText': 'Il sito è ospitato gratuitamente da <strong>GitHub Pages</strong><br>GitHub Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, Stati Uniti<br>Sito: <a href="https://pages.github.com/" target="_blank">pages.github.com</a>',
  'legal.respTitle': 'Responsabilità',
  'legal.respText': 'L’editore fornisce informazioni e servizi legati alla creazione di mini-siti vetrina, ma non può essere ritenuto responsabile per errori o indisponibilità del sito.',
  'legal.ipTitle': 'Proprietà intellettuale',
  'legal.ipText': 'I contenuti (testi, immagini, loghi) creati da EternaWeb sono protetti. Qualsiasi riproduzione senza autorizzazione è vietata.',
  'legal.back': '← Torna alla home',

  'footer.privacy':'Privacy',
  'privacy.title': 'Privacy - EternaWeb',
  'privacy.h1': 'Privacy',
  'privacy.intro': 'La presente informativa spiega quali dati vengono raccolti durante l’uso del sito <strong>EternaWeb</strong>.',
  'privacy.dataTitle': 'Dati raccolti',
  'privacy.data1': 'Dati tecnici raccolti automaticamente dall’host GitHub (indirizzi IP, log).',
  'privacy.data2': 'Informazioni fornite volontariamente tramite i pulsanti di contatto (WhatsApp, Instagram, Email, PayPal).',
  'privacy.useTitle': 'Utilizzo dei dati',
  'privacy.useText': 'I dati vengono utilizzati esclusivamente per garantire il corretto funzionamento del sito e per rispondere alle richieste degli utenti. Nessun dato viene venduto o condiviso con terze parti, salvo con i fornitori tecnici (GitHub, WhatsApp, PayPal, Instagram).',
  'privacy.rightsTitle': 'Diritti degli utenti',
  'privacy.rightsText': 'In conformità con il GDPR, puoi richiedere l’accesso, la rettifica o la cancellazione dei tuoi dati scrivendo a: <a href="mailto:contact.eternaweb@gmail.com">contact.eternaweb@gmail.com</a>',
  'privacy.cookiesTitle': 'Cookies',
  'privacy.cookiesText': 'Il sito non utilizza cookie pubblicitari. Solo cookie tecnici possono essere generati da GitHub Pages o da servizi di terze parti (WhatsApp, PayPal, Instagram).',
  'privacy.back': '← Torna alla home',

  'footer.code':'Codice di condotta',
  'code.title': 'Codice di condotta - EternaWeb',
  'code.h1': 'Codice di condotta',
  'code.intro': 'In <strong>EternaWeb</strong> ci impegniamo a offrire un ambiente rispettoso, sicuro e accogliente per tutti.',
  'code.valuesTitle': '🌱 I nostri valori fondamentali',
  'code.value1': 'Rispetto reciproco, indipendentemente da origine, identità o convinzioni',
  'code.value2': 'Comunicazione chiara, gentile e costruttiva',
  'code.value3': 'Sostegno e collaborazione negli scambi',
  'code.value4': 'Riservatezza delle informazioni personali condivise',
  'code.behaviorTitle': '🚫 Comportamenti inaccettabili',
  'code.behavior1': 'Qualsiasi forma di molestia, intimidazione o linguaggio discriminatorio',
  'code.behavior2': 'Uso improprio dei canali di comunicazione',
  'code.behavior3': 'Condivisione non autorizzata di dati sensibili',
  'code.engagementTitle': '🤝 Impegno di EternaWeb',
  'code.engagement1': 'Ci riserviamo il diritto di rifiutare qualsiasi progetto o collaborazione che non rispetti questo codice di condotta.',
  'code.engagement2': 'Incoraggiamo tutti ad agire con cortesia e a contribuire a un’atmosfera di lavoro armoniosa.',
  'code.thanks': 'Grazie per incarnare lo spirito di EternaWeb: umano, etico e ispirato ✨',
  'code.back': '← Torna alla home',

  'footer.copy':'© 2025 EternaGlow — Tutti i diritti riservati'
},
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
$$('.choose-plan').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const plan = btn.dataset.plan || '';
    openDevis(plan);
    if (isMobile()){
      const t = encodeURIComponent(`Devis – plan sélectionné : ${plan}`);
      window.open(`https://wa.me/${WA_NUMBER}?text=${t}`, '_blank');
    }
  });
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
// =========================
// Correction Portfolio : bouton "Je choisis cette formule"
// =========================
document.querySelectorAll('.choose-plan').forEach(btn => {
  btn.addEventListener('click', () => {
    const plan = btn.dataset.plan || 'Portfolio';
    localStorage.setItem('ew_selected_plan', plan);

    // Si la page a un #devis, on l'ouvre
    const devis = document.querySelector('#devis');
    if (devis) {
      devis.classList.add('show');
      return;
    }

    // Sinon on redirige vers la page d'accueil et on ouvrira le devis automatiquement
    window.location.href = 'index.html#devis';
  });
});
