/* =========================================================
   EternaWeb — moteur unique
   ========================================================= */
console.log('✅ EternaWeb app.js chargé');

const WA_NUMBER = '33749723434';
const MAIL_TO = 'eternaweb.contact@gmail.com';
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* ---------- Traductions ---------- */
const COMMON = {
  fr: {
    'announce':'🚀 CV livré sous 48 à 72 h • Paiement sécurisé • Support WhatsApp',
    'nav.menu':'Menu','nav.cv':'CV','nav.devis':'Vos informations','nav.temoignages':'Témoignages',
    'hero.subtitle':'CV professionnel — prêt en 48h','hero.lead':'✨ Un design premium, des intégrations rapides et un rendu clé en main.',
    'cta.whatsapp':'WhatsApp','cta.paypal':'PayPal','services.h2':'🚀 Nos services','services.sub':'Découvrez nos solutions CV','services.cv':'📄 CV',
    'devis.h2':'📝 Vos informations','devis.sub':'Choisissez, décrivez, envoyez — je reçois vos consignes.','devis.type':'Type de CV','devis.opt.cv':'CV',
    'devis.colors':'Palette / couleurs','devis.colorsPlaceholder':'Ex. beige & doré, brun café…','devis.style':'Style visuel','devis.style1':'Sobre & élégant','devis.style2':'Créatif & coloré','devis.style3':'Minimal & pro','devis.style4':'Nature & doux',
    'devis.plan':'Formule choisie','devis.planPlaceholder':'Choisissez une formule depuis la page CV…','devis.integrations':'Options souhaitées','devis.int.pdf':'CV PDF','devis.int.online':'CV en ligne','devis.int.qr':'QR code','devis.int.letter':'Lettre de motivation',
    'devis.file':'Ajouter un CV, une lettre ou un ancien document','devis.fileHint':'Sélectionnez un fichier PDF, Word ou DOCX.','devis.drive':'Lien Drive / document déjà partagé','devis.drivePlaceholder':'Collez votre lien Drive ici…','devis.other':'Autres demandes','devis.otherPlaceholder':'Ce que vous souhaitez préciser…',
    'devis.name':'Prénom / Nom','devis.email':'Email','devis.note':'Votre message est envoyé directement à EternaWeb','btn.send':'Envoyer','btn.choose':'Je choisis cette formule',
    'testi.h2':'💬 Témoignages','testi.t1':'“Super réactive et professionnelle, mon site a été en ligne le jour même !”','testi.c1':'— Claire B.','testi.t2':'“Design élégant, clair, et surtout… mes clients m’écrivent directement via WhatsApp !”','testi.c2':'— Malik T.','testi.t3':'“Excellent rapport qualité/prix. Je recommande à 100 %.”','testi.c3':'— Sofia M.',
    'footer.faq':'FAQ','footer.about':'À propos','footer.legal':'Mentions légales','footer.privacy':'Confidentialité','footer.code':'Code de conduite','footer.copy':'© 2025 EternaWeb — Tous droits réservés',
    'faq.title':'FAQ - EternaWeb','faq.h1':'FAQ - EternaWeb','faq.q1':'✨ En combien de temps mon site est-il prêt ?','faq.a1':'En général, votre CV en ligne est prêt sous 48 à 72 heures, à condition que toutes les informations nécessaires aient été fournies.','faq.q2':'📲 Peut-on intégrer WhatsApp et PayPal ?','faq.a2':'Oui, votre CV en ligne peut contenir des boutons directs vers WhatsApp et PayPal, selon vos besoins.','faq.q3':'📄 Que dois-je fournir pour démarrer ?','faq.a3':'Veuillez remplir le formulaire dans l’onglet « Vos informations ». Vous y trouverez toutes les informations nécessaires pour préparer votre CV en ligne.','faq.q4':'🎨 Puis-je changer les couleurs et la mise en page ?','faq.a4':'Oui. Vous pourrez personnaliser la couleur du fond ou ajouter une image comme fond d’écran, afin d’adapter votre CV à votre style.','faq.q5':'🌐 Proposez-vous l’hébergement ?','faq.a5':'Oui. L’hébergement est inclus pendant 1 an dans le Pack Premium.','faq.q6':'💡 Et si j’ai d’autres questions ?','faq.a6':'Vous pouvez me les poser ci-dessous 👇','faq.labelEmail':'Votre adresse e-mail :','faq.labelMsg':'Votre question :','faq.btn':'Envoyer la question','faq.back':'← Retour à l’accueil',
    'faqCv.title':'FAQ – CV & mini-site CV - EternaWeb','faqCv.h1':'FAQ – CV & mini-site CV - EternaWeb','faqCv.q1':'✨ En combien de temps mon CV est-il prêt ?','faqCv.a1':'En général sous 24 à 48 h, selon la formule choisie et la réception des informations nécessaires.','faqCv.q2':'📄 À qui s’adresse le service CV ?','faqCv.a2':'Le service CV s’adresse notamment aux étudiants,<br>personnes à la recherche d’un emploi,<br>candidats à un premier poste,<br>personnes en reconversion ou en reprise d’activité.<br>👉 Tous secteurs.','faqCv.q3':'📄 À qui s’adresse EternaWeb ?','faqCv.a3':'EternaWeb accompagne les étudiants, chercheurs d’emploi, créateurs, freelances et entrepreneurs qui souhaitent présenter leur profil ou leur activité de manière professionnelle et moderne.','faqCv.q4':'🤖 Pourquoi parlez-vous d’optimisation ATS ?','faqCv.a4':'Les recruteurs utilisent des logiciels appelés ATS (Applicant Tracking Systems) pour trier les candidatures. L’optimisation consiste à intégrer des mots-clés pertinents et une structure adaptée afin de faciliter la lecture de votre CV par ces outils et d’améliorer sa visibilité.','faqCv.q5':'📦 Quelles sont les formules CV ?','faqCv.a5':'<strong>Starter – 14,99 €</strong> : correction + mise en page structurée<br><strong>Boost – 29,99 €</strong> : optimisation ATS + mots-clés<br><strong>Premium – 59,99 €</strong> : CV + CV en ligne + QR code + hébergement 1 an<br><strong>Lettre de motivation – 7,99 €</strong> : structure professionnelle + argumentation + adaptation à l’offre + correction + livraison Word/PDF','faqCv.q6':'🌐 L’hébergement est-il inclus ?','faqCv.a6':'Oui. L’hébergement du CV en ligne est inclus pendant 1 an dans le Pack Premium.','faqCv.q7':'💬 Puis-je demander des modifications ?','faqCv.a7':'Oui, des ajustements sont inclus selon la formule choisie. Les modalités peuvent varier selon le pack.','faqCv.q8':'💡 Une question spécifique ?','faqCv.a8':'Vous pouvez nous contacter directement via le formulaire de contact disponible ci-dessous 👇','faqCv.back':'← Retour à l’accueil',
    'about.title':'À propos de EternaWeb','about.p1':'EternaWeb est né d’une idée simple : aider chacun à présenter son profil, son activité, son projet ou son talent avec clarté et professionnalisme, sans avoir besoin de compétences techniques.','about.p2':'✨ EternaWeb propose des solutions accessibles et personnalisées : CV professionnels, CV en ligne, lettres de motivation. Chaque réalisation est pensée pour être claire, moderne, responsive et adaptée à son utilisateur.','about.missionTitle':'Notre mission','about.mission':'Créer des solutions numériques simples, élégantes et utiles, qui permettent à chacun de mieux se présenter et de gagner en visibilité.<br>Chez EternaWeb, nous croyons qu’une présence professionnelle en ligne ne devrait être ni compliquée ni inaccessible.','about.targetTitle':'À qui s’adresse EternaWeb ?','about.li1':'• Aux personnes en recherche d’emploi, en reconversion ou à la recherche d’un premier poste','about.li2':'• Aux étudiants qui souhaitent valoriser leur profil et leurs compétences','about.li3':'• Aux artisans, créateurs et entrepreneurs qui souhaitent présenter leur activité','about.li4':'• Aux freelances et professionnels qui veulent développer leur présence en ligne','about.li5':'• À toute personne souhaitant disposer d’un CV moderne, professionnel et personnalisé','about.contact':'💌 Pour en savoir plus, discuter de votre projet ou demander un devis : <a href="mailto:eternaweb.contact@gmail.com">eternaweb.contact@gmail.com</a>','about.back':'← Retour à l’accueil',
    'legal.title':'Mentions légales - EternaWeb','legal.h1':'Mentions légales','legal.editorTitle':'Éditeur du site','legal.editorText':'<strong>EternaWeb</strong><br>Danielle Kabongo<br>Email : <a href="mailto:eternaweb.contact@gmail.com">eternaweb.contact@gmail.com</a>','legal.hostTitle':'Hébergement','legal.hostText':'Le site est hébergé gratuitement par <strong>GitHub Pages</strong>','legal.respTitle':'Responsabilité','legal.respText':'L’éditeur met à disposition des informations et services dans le cadre de la création de CV professionnel, CV en ligne et lettres de motivation.','legal.ipTitle':'Propriété intellectuelle','legal.ipText':'Les contenus créés par EternaWeb sont protégés. Toute reproduction sans autorisation est interdite.','legal.back':'← Retour à l’accueil',
    'privacy.title':'Confidentialité - EternaWeb','privacy.h1':'Confidentialité','privacy.intro':'La présente politique explique quelles données sont collectées lors de l’utilisation du site <strong>EternaWeb</strong>.','privacy.dataTitle':'Données collectées','privacy.data1':'Les données techniques collectées automatiquement par l’hébergeur GitHub.','privacy.data2':'Les informations transmises volontairement via les boutons de contact.','privacy.useTitle':'Utilisation des données','privacy.useText':'Les données sont utilisées uniquement pour permettre le fonctionnement du site et répondre aux demandes des utilisateurs.','privacy.rightsTitle':'Droits des utilisateurs','privacy.rightsText':'Conformément au RGPD, vous pouvez demander l’accès, la rectification ou la suppression de vos données en contactant EternaWeb.','privacy.cookiesTitle':'Cookies','privacy.cookiesText':'Le site n’utilise pas de cookies publicitaires.','privacy.back':'← Retour à l’accueil',
    'code.title':'Code de conduite - EternaWeb','code.h1':'Code de conduite','code.intro':'Chez <strong>EternaWeb</strong>, nous nous engageons à offrir un espace respectueux, sûr et bienveillant pour toutes et tous.','code.valuesTitle':'🌱 Nos valeurs fondamentales','code.value1':'Respect mutuel, quelle que soit l’origine, l’identité ou les convictions','code.value2':'Communication claire, douce et constructive','code.value3':'Soutien et entraide dans les échanges','code.value4':'Confidentialité des informations personnelles partagées','code.behaviorTitle':'🚫 Comportements inacceptables','code.behavior1':'Tout type de harcèlement, intimidation ou langage discriminatoire','code.behavior2':'Utilisation abusive des canaux de communication','code.behavior3':'Partage non autorisé de données sensibles','code.engagementTitle':'🤝 Engagement de EternaWeb','code.engagement1':'Nous nous réservons le droit de refuser tout projet ou échange qui ne respecte pas ce code de conduite.','code.engagement2':'Nous encourageons chacun·e à faire preuve de courtoisie et à contribuer à une atmosphère de travail harmonieuse.','code.thanks':'Merci d’incarner l’esprit EternaWeb : humain, éthique et inspiré ✨','code.back':'← Retour à l’accueil'
  },
  en: {
    'announce':'🚀 CV delivered within 48–72h • Secure payment • WhatsApp support','nav.menu':'Menu','nav.cv':'CV','nav.devis':'Your information','nav.temoignages':'Testimonials','hero.subtitle':'Professional CV — ready in 48h','hero.lead':'✨ Premium design, fast integration and a turnkey result.','cta.whatsapp':'WhatsApp','cta.paypal':'PayPal','services.h2':'🚀 Our services','services.sub':'Discover our CV solutions','services.cv':'📄 CV','devis.h2':'📝 Your information','devis.sub':'Choose, describe and send — I receive your instructions.','devis.type':'CV type','devis.opt.cv':'CV','devis.colors':'Palette / colours','devis.colorsPlaceholder':'E.g. beige & gold, coffee brown…','devis.style':'Visual style','devis.style1':'Simple & elegant','devis.style2':'Creative & colourful','devis.style3':'Minimal & professional','devis.style4':'Natural & soft','devis.plan':'Selected package','devis.planPlaceholder':'Choose a package from the CV page…','devis.integrations':'Desired options','devis.int.pdf':'CV PDF','devis.int.online':'Online CV','devis.int.qr':'QR code','devis.int.letter':'Cover letter','devis.file':'Add a CV, cover letter or previous document','devis.fileHint':'Select a PDF, Word or DOCX file.','devis.drive':'Drive link / shared document','devis.drivePlaceholder':'Paste your Drive link here…','devis.other':'Other requests','devis.otherPlaceholder':'Anything else you would like to specify…','devis.name':'First / Last name','devis.email':'Email','devis.note':'Your message is sent directly to EternaWeb','btn.send':'Send','btn.choose':'I choose this package','testi.h2':'💬 Testimonials','testi.t1':'“Super responsive and professional — my site was online the same day!”','testi.c1':'— Claire B.','testi.t2':'“Elegant, clear design — my clients can contact me directly via WhatsApp!”','testi.c2':'— Malik T.','testi.t3':'“Excellent value for money. 100% recommended.”','testi.c3':'— Sofia M.','footer.faq':'FAQ','footer.about':'About','footer.legal':'Legal notice','footer.privacy':'Privacy','footer.code':'Code of Conduct','footer.copy':'© 2025 EternaWeb — All rights reserved',
    'faq.title':'FAQ - EternaWeb','faq.h1':'FAQ - EternaWeb','faq.q1':'✨ How long does it take to have my site ready?','faq.a1':'Your online CV is generally ready within 48 to 72 hours, provided all required information has been supplied.','faq.q2':'📲 Can WhatsApp and PayPal be integrated?','faq.a2':'Yes, your online CV can include direct WhatsApp and PayPal buttons, according to your needs.','faq.q3':'📄 What do I need to provide to get started?','faq.a3':'Please complete the form in the “Your information” section. It contains everything needed to prepare your online CV.','faq.q4':'🎨 Can I change the colours and layout?','faq.a4':'Yes. You can customise the background colour or add an image as your background.','faq.q5':'🌐 Do you provide hosting?','faq.a5':'Yes. Hosting is included for 1 year in the Premium Package.','faq.q6':'💡 What if I have other questions?','faq.a6':'You can ask them below 👇','faq.labelEmail':'Your email address:','faq.labelMsg':'Your question:','faq.btn':'Send question','faq.back':'← Back to home',
    'faqCv.title':'FAQ – CV & online CV - EternaWeb','faqCv.h1':'FAQ – CV & online CV - EternaWeb','faqCv.q1':'✨ How long does it take to receive my CV?','faqCv.a1':'Usually within 24 to 48 hours, depending on the selected package and receipt of the required information.','faqCv.q2':'📄 Who is the CV service for?','faqCv.a2':'Students,<br>job seekers,<br>first-job candidates,<br>career changers and people returning to work.<br>👉 All sectors.','faqCv.q3':'📄 Who is EternaWeb for?','faqCv.a3':'EternaWeb supports students, job seekers, creators, freelancers and entrepreneurs who want to present their profile or business professionally.','faqCv.q4':'🤖 Why do you mention ATS optimisation?','faqCv.a4':'Recruiters use Applicant Tracking Systems (ATS) to sort applications. I use relevant keywords and an adapted structure to make your CV easier for these systems to read and more visible.','faqCv.q5':'📦 What CV packages are available?','faqCv.a5':'<strong>Starter – €14.99</strong>: proofreading + structured layout<br><strong>Boost – €29.99</strong>: ATS optimisation + keywords<br><strong>Premium – €59.99</strong>: CV + online CV + QR code + 1-year hosting<br><strong>Cover letter – €7.99</strong>: professional structure + argumentation + job-offer adaptation + proofreading + Word/PDF delivery','faqCv.q6':'🌐 Is hosting included?','faqCv.a6':'Yes. Online CV hosting is included for 1 year in the Premium Package.','faqCv.q7':'💬 Can I request changes?','faqCv.a7':'Yes, adjustments are included depending on the selected package.','faqCv.q8':'💡 A specific question?','faqCv.a8':'You can contact us directly through the contact form below 👇','faqCv.back':'← Back to home',
    'about.title':'About EternaWeb','about.p1':'EternaWeb was born from a simple idea: helping everyone present their profile, business, project or talent clearly and professionally, without technical skills.','about.p2':'✨ EternaWeb offers accessible and personalised solutions: professional CVs, online CVs and cover letters. Each project is designed to be clear, modern, responsive and adapted to its user.','about.missionTitle':'Our mission','about.mission':'Create simple, elegant and useful digital solutions that help everyone present themselves better and gain visibility.<br>At EternaWeb, we believe a professional online presence should not be complicated or inaccessible.','about.targetTitle':'Who is EternaWeb for?','about.li1':'• Job seekers, career changers and first-job candidates','about.li2':'• Students who want to highlight their profile and skills','about.li3':'• Artisans, creators and entrepreneurs who want to present their business','about.li4':'• Freelancers and professionals who want to develop their online presence','about.li5':'• Anyone looking for a modern, professional and personalised CV','about.contact':'💌 To learn more, discuss your project or request a quote: <a href="mailto:eternaweb.contact@gmail.com">eternaweb.contact@gmail.com</a>','about.back':'← Back to home',
    'legal.title':'Legal notice - EternaWeb','legal.h1':'Legal notice','legal.editorTitle':'Site publisher','legal.editorText':'<strong>EternaWeb</strong><br>Danielle Kabongo<br>Email: <a href="mailto:eternaweb.contact@gmail.com">eternaweb.contact@gmail.com</a>','legal.hostTitle':'Hosting','legal.hostText':'This site is hosted free of charge by <strong>GitHub Pages</strong>','legal.respTitle':'Responsibility','legal.respText':'The publisher provides information and services related to professional CVs, online CVs and cover letters.','legal.ipTitle':'Intellectual property','legal.ipText':'Content created by EternaWeb is protected. Reproduction without permission is prohibited.','legal.back':'← Back to home',
    'privacy.title':'Privacy - EternaWeb','privacy.h1':'Privacy','privacy.intro':'This policy explains which data is collected when using the <strong>EternaWeb</strong> website.','privacy.dataTitle':'Collected data','privacy.data1':'Technical data automatically collected by GitHub hosting.','privacy.data2':'Information voluntarily provided through contact buttons.','privacy.useTitle':'Use of data','privacy.useText':'Data is used only to operate the site and respond to user requests.','privacy.rightsTitle':'User rights','privacy.rightsText':'Under GDPR, you may request access, correction or deletion of your data by contacting EternaWeb.','privacy.cookiesTitle':'Cookies','privacy.cookiesText':'The site does not use advertising cookies.','privacy.back':'← Back to home',
    'code.title':'Code of Conduct - EternaWeb','code.h1':'Code of Conduct','code.intro':'At <strong>EternaWeb</strong>, we are committed to providing a respectful, safe and caring space for everyone.','code.valuesTitle':'🌱 Our core values','code.value1':'Mutual respect, regardless of origin, identity or beliefs','code.value2':'Clear, kind and constructive communication','code.value3':'Support and cooperation','code.value4':'Confidentiality of shared personal information','code.behaviorTitle':'🚫 Unacceptable behaviour','code.behavior1':'Harassment, intimidation or discriminatory language','code.behavior2':'Abusive use of communication channels','code.behavior3':'Unauthorised sharing of sensitive data','code.engagementTitle':'🤝 EternaWeb’s commitment','code.engagement1':'We reserve the right to refuse projects or exchanges that do not respect this code.','code.engagement2':'We encourage courtesy and a harmonious working environment.','code.thanks':'Thank you for embodying the EternaWeb spirit: human, ethical and inspired ✨','code.back':'← Back to home'
  }
};

/* Les autres langues reprennent les mêmes clés essentielles et ajoutent les textes
   traduits. Les clés absentes retombent volontairement sur le français afin qu'aucun
   élément ne disparaisse lors d'un changement de langue. */
const EXTRA = {
  es:{'announce':'🚀 CV entregado en 48–72 h • Pago seguro • Soporte WhatsApp','nav.devis':'Tus indicaciones','nav.temoignages':'Testimonios','hero.subtitle':'CV profesional — listo en 48 h','services.h2':'🚀 Nuestros servicios','services.sub':'Descubre nuestras soluciones de CV','devis.h2':'📝 Tus indicaciones','devis.sub':'Elige, describe y envía — recibo tus instrucciones.','devis.type':'Tipo de CV','devis.colors':'Paleta / colores','devis.style':'Estilo visual','devis.style1':'Sencillo y elegante','devis.style2':'Creativo y colorido','devis.style3':'Minimalista y profesional','devis.style4':'Natural y suave','devis.plan':'Plan elegido','devis.integrations':'Opciones deseadas','devis.int.pdf':'CV PDF','devis.int.online':'CV en línea','devis.int.qr':'Código QR','devis.int.letter':'Carta de motivación','devis.file':'Añadir CV, carta o documento anterior','devis.fileHint':'Selecciona un archivo PDF, Word o DOCX.','devis.drive':'Enlace de Drive / documento compartido','devis.other':'Otras solicitudes','devis.name':'Nombre / Apellido','devis.email':'Correo electrónico','btn.send':'Enviar','btn.choose':'Elijo este plan','footer.about':'Acerca de','footer.legal':'Aviso legal','footer.privacy':'Privacidad','footer.code':'Código de conducta'},
  it:{'announce':'🚀 CV consegnato in 48–72 h • Pagamento sicuro • Supporto WhatsApp','nav.devis':'Le tue informazioni','nav.temoignages':'Testimonianze','hero.subtitle':'CV professionale — pronto in 48 ore','services.h2':'🚀 I nostri servizi','services.sub':'Scopri le nostre soluzioni CV','devis.h2':'📝 Le tue informazioni','devis.sub':'Scegli, descrivi, invia — ricevo le tue istruzioni.','devis.type':'Tipo di CV','devis.colors':'Palette / colori','devis.style':'Stile visivo','devis.style1':'Sobrio ed elegante','devis.style2':'Creativo e colorato','devis.style3':'Minimal e professionale','devis.style4':'Naturale e delicato','devis.plan':'Pacchetto scelto','devis.integrations':'Opzioni desiderate','devis.int.pdf':'CV PDF','devis.int.online':'CV online','devis.int.qr':'Codice QR','devis.int.letter':'Lettera di motivazione','devis.file':'Aggiungi CV, lettera o documento precedente','devis.fileHint':'Seleziona un file PDF, Word o DOCX.','devis.drive':'Link Drive / documento condiviso','devis.other':'Altre richieste','devis.name':'Nome / Cognome','devis.email':'Email','btn.send':'Invia','btn.choose':'Scelgo questo pacchetto','footer.about':'Chi siamo','footer.legal':'Note legali','footer.privacy':'Privacy','footer.code':'Codice di condotta'},
  de:{'announce':'🚀 CV innerhalb von 48–72 Std. • Sichere Zahlung • WhatsApp-Support','nav.devis':'Ihre Angaben','nav.temoignages':'Referenzen','hero.subtitle':'Professioneller Lebenslauf — fertig in 48 Std.','services.h2':'🚀 Unsere Leistungen','services.sub':'Entdecken Sie unsere CV-Lösungen','devis.h2':'📝 Ihre Angaben','devis.sub':'Wählen, beschreiben, senden — ich erhalte Ihre Angaben.','devis.type':'CV-Typ','devis.colors':'Farbpalette','devis.style':'Visueller Stil','devis.style1':'Schlicht & elegant','devis.style2':'Kreativ & farbenfroh','devis.style3':'Minimal & professionell','devis.style4':'Natürlich & sanft','devis.plan':'Gewähltes Paket','devis.integrations':'Gewünschte Optionen','devis.int.pdf':'CV PDF','devis.int.online':'Online-CV','devis.int.qr':'QR-Code','devis.int.letter':'Anschreiben','devis.file':'Lebenslauf, Anschreiben oder früheres Dokument hinzufügen','devis.fileHint':'PDF-, Word- oder DOCX-Datei auswählen.','devis.drive':'Drive-Link / geteiltes Dokument','devis.other':'Weitere Wünsche','devis.name':'Vor- / Nachname','devis.email':'E-Mail','btn.send':'Senden','btn.choose':'Ich wähle dieses Paket','footer.about':'Über uns','footer.legal':'Impressum','footer.privacy':'Datenschutz','footer.code':'Verhaltenskodex'},
  nl:{'announce':'🚀 CV geleverd binnen 48–72 uur • Veilig betalen • WhatsApp-support','nav.devis':'Uw informatie','nav.temoignages':'Getuigenissen','hero.subtitle':'Professioneel cv — klaar binnen 48 uur','services.h2':'🚀 Onze diensten','services.sub':'Ontdek onze CV-oplossingen','devis.h2':'📝 Uw informatie','devis.sub':'Kies, beschrijf en verstuur — ik ontvang uw instructies.','devis.type':'Type CV','devis.colors':'Kleurenpalet','devis.style':'Visuele stijl','devis.style1':'Eenvoudig & elegant','devis.style2':'Creatief & kleurrijk','devis.style3':'Minimalistisch & professioneel','devis.style4':'Natuurlijk & zacht','devis.plan':'Gekozen pakket','devis.integrations':'Gewenste opties','devis.int.pdf':'CV PDF','devis.int.online':'Online CV','devis.int.qr':'QR-code','devis.int.letter':'Motivatiebrief','devis.file':'CV, brief of vorig document toevoegen','devis.fileHint':'Selecteer een PDF-, Word- of DOCX-bestand.','devis.drive':'Drive-link / gedeeld document','devis.other':'Andere verzoeken','devis.name':'Voornaam / achternaam','devis.email':'E-mail','btn.send':'Verzenden','btn.choose':'Ik kies dit pakket','footer.about':'Over ons','footer.legal':'Juridische informatie','footer.privacy':'Privacy','footer.code':'Gedragscode'},
  et:{'announce':'🚀 CV valmib 48–72 tunniga • Turvaline makse • WhatsAppi tugi','nav.devis':'Teie teave','nav.temoignages':'Iseloomustused','hero.subtitle':'Professionaalne CV — valmis 48 tunniga','services.h2':'🚀 Meie teenused','services.sub':'Avastage meie CV-lahendused','devis.h2':'📝 Teie teave','devis.sub':'Valige, kirjeldage ja saatke — saan teie juhised kätte.','devis.type':'CV tüüp','devis.colors':'Värvipalett','devis.style':'Visuaalne stiil','devis.style1':'Lihtne ja elegantne','devis.style2':'Loominguline ja värviline','devis.style3':'Minimalistlik ja professionaalne','devis.style4':'Looduslik ja pehme','devis.plan':'Valitud pakett','devis.integrations':'Soovitud valikud','devis.int.pdf':'CV PDF','devis.int.online':'Veebipõhine CV','devis.int.qr':'QR-kood','devis.int.letter':'Motivatsioonikiri','devis.file':'Lisa CV, kiri või varasem dokument','devis.fileHint':'Valige PDF-, Word- või DOCX-fail.','devis.drive':'Drive’i link / jagatud dokument','devis.other':'Muud soovid','devis.name':'Ees- ja perekonnanimi','devis.email':'E-post','btn.send':'Saada','btn.choose':'Valin selle paketi','footer.about':'Meist','footer.legal':'Õiguslik teave','footer.privacy':'Privaatsus','footer.code':'Käitumiskoodeks'},
  ru:{'announce':'🚀 CV готово за 48–72 часа • Безопасная оплата • Поддержка WhatsApp','nav.devis':'Ваша информация','nav.temoignages':'Отзывы','hero.subtitle':'Профессиональное резюме — готово за 48 часов','services.h2':'🚀 Наши услуги','services.sub':'Ознакомьтесь с решениями для CV','devis.h2':'📝 Ваша информация','devis.sub':'Выберите, опишите и отправьте — я получу ваши инструкции.','devis.type':'Тип резюме','devis.colors':'Палитра / цвета','devis.style':'Визуальный стиль','devis.style1':'Строгий и элегантный','devis.style2':'Креативный и яркий','devis.style3':'Минималистичный и профессиональный','devis.style4':'Нежный и природный','devis.plan':'Выбранный тариф','devis.integrations':'Желаемые опции','devis.int.pdf':'CV PDF','devis.int.online':'Онлайн-CV','devis.int.qr':'QR-код','devis.int.letter':'Мотивационное письмо','devis.file':'Добавить CV, письмо или предыдущий документ','devis.fileHint':'Выберите файл PDF, Word или DOCX.','devis.drive':'Ссылка Drive / общий документ','devis.other':'Другие запросы','devis.name':'Имя / Фамилия','devis.email':'Электронная почта','btn.send':'Отправить','btn.choose':'Выбираю этот тариф','footer.about':'О нас','footer.legal':'Юридическая информация','footer.privacy':'Конфиденциальность','footer.code':'Кодекс поведения'},
};

for (const lang of Object.keys(EXTRA)) COMMON[lang] = {...COMMON.fr, ...EXTRA[lang]};
for (const lang of Object.keys(COMMON)) {
  if (!COMMON[lang]['cv.pack4.title']) COMMON[lang]['cv.pack4.title'] = lang==='fr'?'📄 Lettre de motivation personnalisée – 7,99 €':'📄 Personalized cover letter – €7.99';
}

/* ---------- Langue ---------- */
function dict(lang){ return COMMON[lang] || COMMON.fr; }
function applyLang(lang){
  const d = dict(lang);
  document.documentElement.lang = lang;
  $$('[data-i18n]').forEach(el=>{
    const key = el.dataset.i18n;
    if (d[key] !== undefined) el.innerHTML = d[key];
  });
  $$('[data-i18n-placeholder]').forEach(el=>{
    const key = el.dataset.i18nPlaceholder;
    if (d[key] !== undefined) el.placeholder = d[key];
  });
  localStorage.setItem('eternaweb-lang', lang);
  const lm=$('#langMenu'), lb=$('#langBtn');
  if(lm) lm.classList.remove('show');
  if(lb) lb.setAttribute('aria-expanded','false');
}

function initLanguage(){
  const saved = localStorage.getItem('eternaweb-lang') || 'fr';
  applyLang(saved);
  $$('.lang-item').forEach(item=>item.addEventListener('click',e=>{
    e.preventDefault(); e.stopPropagation(); applyLang(item.dataset.lang || 'fr');
  }));
}

/* ---------- Navigation ---------- */
function scrollToId(id){
  const el=document.getElementById(id); if(!el) return false;
  el.scrollIntoView({behavior:'smooth',block:'start'}); return true;
}
function openDevis(plan=''){
  const d=$('#devis'); if(!d) return;
  if(plan){
    const input=$('#planInput'); const display=$('#planDisplay');
    if(input) input.value=plan;
    if(display) display.value=plan;
    localStorage.setItem('ew_selected_plan',plan);
  }
  d.classList.add('show'); d.classList.add('devis-open');
  d.scrollIntoView({behavior:'smooth',block:'start'});
}
function closeDevis(){ const d=$('#devis'); if(d) d.classList.remove('show','devis-open'); }

function initNavigation(){
  const menuBtn=$('#menuBtn'), mainMenu=$('#mainMenu');
  if(menuBtn&&mainMenu) menuBtn.addEventListener('click',e=>{
    e.preventDefault(); e.stopPropagation(); const open=mainMenu.classList.toggle('show'); mainMenu.classList.toggle('open',open); menuBtn.setAttribute('aria-expanded',String(open));
  });
  const langBtn=$('#langBtn'), langMenu=$('#langMenu');
  if(langBtn&&langMenu) langBtn.addEventListener('click',e=>{
    e.preventDefault(); e.stopPropagation(); const open=langMenu.classList.toggle('show'); langBtn.setAttribute('aria-expanded',String(open));
  });
  const close=$('#closeDevis'); if(close) close.addEventListener('click',e=>{e.preventDefault();closeDevis();});
  document.addEventListener('click',e=>{
    if(mainMenu&&!mainMenu.contains(e.target)&&e.target!==menuBtn){mainMenu.classList.remove('show','open');if(menuBtn)menuBtn.setAttribute('aria-expanded','false');}
    if(langMenu&&!langMenu.contains(e.target)&&e.target!==langBtn){langMenu.classList.remove('show');if(langBtn)langBtn.setAttribute('aria-expanded','false');}
  });
  $$('a[href="#temoignages"]').forEach(a=>a.addEventListener('click',e=>{if(scrollToId('temoignages'))e.preventDefault();}));
  $$('a[href="#devis"],#goDevis').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();openDevis();}));
}

/* ---------- Formules ---------- */
function initPlans(){
  const saved=localStorage.getItem('ew_selected_plan');
  const input=$('#planInput'),display=$('#planDisplay');
  if(saved){if(input)input.value=saved;if(display)display.value=saved;}
  $$('.choose-plan').forEach(btn=>btn.addEventListener('click',e=>{
    e.preventDefault(); openDevis(btn.dataset.plan || '');
  }));
}

/* ---------- Fichier ---------- */
function initFile(){
  const f=$('#devisFile'), n=$('#fileName'); if(!f) return;
  f.addEventListener('change',()=>{ if(n) n.textContent=f.files&&f.files[0] ? `📎 ${f.files[0].name}` : (dict(document.documentElement.lang)['devis.fileHint']||''); });
}

/* ---------- Formulaire ---------- */
function initForm(){
  const send=$('#sendForm'),form=$('#devisForm'); if(!send||!form)return;
  send.addEventListener('click',()=>{
    if(!form.reportValidity()) return;
    const fd=new FormData(form);
    const options=fd.getAll('int').join(', ')||'Aucune';
    const file=$('#devisFile')?.files?.[0]?.name || 'Aucun';
    const body=[
      'Bonjour EternaWeb,','',
      `Formule : ${fd.get('plan')||'Non choisie'}`,
      `Type : ${fd.get('type')||'CV'}`,
      `Couleurs : ${fd.get('couleurs')||'Non précisé'}`,
      `Style : ${fd.get('style')||'Non précisé'}`,
      `Options : ${options}`,
      `Document sélectionné : ${file}`,
      `Lien Drive : ${fd.get('drive')||'Aucun'}`,
      `Autres demandes : ${fd.get('contenu')||'Aucune'}`,
      `Nom : ${fd.get('nom')||''}`,
      `Email : ${fd.get('email')||''}`,'','Merci.'
    ].join('\n');
    window.location.href=`mailto:${MAIL_TO}?subject=${encodeURIComponent(`EternaWeb – ${fd.get('plan')||'Demande de devis'}`)}&body=${encodeURIComponent(body)}`;
  });
}

/* ---------- Initialisation ---------- */
function init(){
  initLanguage(); initNavigation(); initPlans(); initFile(); initForm();
  console.log('🚀 EternaWeb : moteur unique initialisé');
}
document.addEventListener('DOMContentLoaded',init);
