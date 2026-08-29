/* =========================================================
   EternaWeb — correctif i18n
   app.js = petit chargeur ; l'ancien moteur est conservé dans app-core.js.
   ========================================================= */
(function () {
  'use strict';

  const core = document.createElement('script');
  core.src = './app-core.js';
  core.defer = true;

  core.onload = function () {
    const CV = {
      fr: {
        'cv.title':'Mes Modèles de CV','cv.intro':"Découvrez nos modèles : clairs, modernes et prêts à l’emploi.",
        'cv.model1.kicker':'CV professionnel','cv.model1.title':'CV Structuré','cv.model1.text':'Une présentation professionnelle, claire et organisée, pensée pour les candidatures administratives, techniques et généralistes.',
        'cv.model2.kicker':'CV en ligne','cv.model2.title':'CV Moderne','cv.model2.text':'Un CV présenté comme une véritable page professionnelle en ligne, accessible sur ordinateur comme sur mobile.',
        'cv.letter.kicker':'Candidature','cv.letter.title':'Lettre de motivation personnalisée','cv.letter.text':'Une lettre personnalisée, cohérente avec votre CV et adaptée au poste visé.',
        'cv.preview':'Voir l’aperçu','cv.letter.preview':'Voir l’exemple','cv.pricing.h2':'💼 Formules CV','cv.pricing.sub':'Des solutions CV professionnelles, adaptées à vos besoins.',
        'cv.pack1.title':'📝 Pack Starter – 14,99 €','cv.pack1.li1':'Correction orthographique et grammaticale','cv.pack1.li2':'Mise en page simple et structurée (Word/PDF)','cv.pack1.note':'👉 Idéal pour stage, job étudiant ou premier emploi',
        'cv.pack2.title':'🚀 Pack Boost – 29,99 €','cv.pack2.li1':'Inclus toutes les fonctionnalités du Pack Starter','cv.pack2.li2':'Optimisation du contenu (ATS friendly)','cv.pack2.li3':'Ajout de mots-clés stratégiques','cv.pack2.li4':'Pour une meilleure visibilité auprès des recruteurs',
        'cv.pack3.title':'🌐 Pack Premium – 59,99 €','cv.pack3.li1':'Inclus toutes les fonctionnalités du Pack Boost','cv.pack3.li2':'Création d’un CV en ligne (mini-site personnel)','cv.pack3.li3':'Hébergement inclus 1 an','cv.pack3.li4':'Design moderne (ordinateur & mobile)','cv.pack3.li5':'QR code intégré','cv.pack3.li6':'Pour vous démarquer face aux autres candidats',
        'cv.pack4.title':'📄 Lettre de motivation personnalisée – 7,99 €','cv.pack4.li1':'Structure professionnelle','cv.pack4.li2':'Argumentation claire et convaincante','cv.pack4.li3':'Adaptation à l’offre d’emploi','cv.pack4.li4':'Correction orthographique et grammaticale','cv.pack4.li5':'Livraison en Word/PDF',
        'cv.back':'⬅ Retour à l’accueil','footer.contact':'💬 Me contacter'
      },
      en: {
        'cv.title':'My CV Templates','cv.intro':'Discover our templates: clear, modern and ready to use.',
        'cv.model1.kicker':'Professional CV','cv.model1.title':'Structured CV','cv.model1.text':'A clear, professional and well-organised presentation designed for administrative, technical and general applications.',
        'cv.model2.kicker':'Online CV','cv.model2.title':'Modern CV','cv.model2.text':'A CV presented as a true professional online page, accessible on both desktop and mobile.',
        'cv.letter.kicker':'Application','cv.letter.title':'Personalized Cover Letter','cv.letter.text':'A personalized cover letter, consistent with your CV and tailored to the position you are applying for.',
        'cv.preview':'View preview','cv.letter.preview':'View example','cv.pricing.h2':'💼 CV Packages','cv.pricing.sub':'Professional CV solutions tailored to your needs.',
        'cv.pack1.title':'📝 Starter Package – €14.99','cv.pack1.li1':'Spelling and grammar correction','cv.pack1.li2':'Simple, structured layout (Word/PDF)','cv.pack1.note':'👉 Ideal for internships, student jobs or a first position',
        'cv.pack2.title':'🚀 Boost Package – €29.99','cv.pack2.li1':'Includes all Starter Package features','cv.pack2.li2':'Content optimisation (ATS-friendly)','cv.pack2.li3':'Strategic keyword integration','cv.pack2.li4':'For better visibility with recruiters',
        'cv.pack3.title':'🌐 Premium Package – €59.99','cv.pack3.li1':'Includes all Boost Package features','cv.pack3.li2':'Creation of an online CV (personal mini-site)','cv.pack3.li3':'Hosting included for 1 year','cv.pack3.li4':'Modern design (desktop & mobile)','cv.pack3.li5':'Integrated QR code','cv.pack3.li6':'Stand out from other candidates',
        'cv.pack4.title':'📄 Personalized Cover Letter – €7.99','cv.pack4.li1':'Professional structure','cv.pack4.li2':'Clear and convincing argumentation','cv.pack4.li3':'Tailored to the job offer','cv.pack4.li4':'Spelling and grammar correction','cv.pack4.li5':'Delivery in Word/PDF',
        'cv.back':'⬅ Back to home','footer.contact':'💬 Contact me'
      },
      es: {
        'cv.title':'Mis modelos de CV','cv.intro':'Descubre nuestros modelos: claros, modernos y listos para usar.','cv.model1.kicker':'CV profesional','cv.model1.title':'CV estructurado','cv.model1.text':'Una presentación profesional, clara y organizada, pensada para candidaturas administrativas, técnicas y generales.','cv.model2.kicker':'CV en línea','cv.model2.title':'CV moderno','cv.model2.text':'Un CV presentado como una verdadera página profesional en línea, accesible desde ordenador y móvil.','cv.letter.kicker':'Candidatura','cv.letter.title':'Carta de motivación personalizada','cv.letter.text':'Una carta personalizada, coherente con tu CV y adaptada al puesto deseado.','cv.preview':'Ver la vista previa','cv.letter.preview':'Ver el ejemplo','cv.pricing.h2':'💼 Paquetes CV','cv.pricing.sub':'Soluciones profesionales de CV adaptadas a tus necesidades.','cv.pack1.title':'📝 Pack Starter – 14,99 €','cv.pack1.li1':'Corrección ortográfica y gramatical','cv.pack1.li2':'Diseño sencillo y estructurado (Word/PDF)','cv.pack1.note':'👉 Ideal para prácticas, trabajo estudiantil o primer empleo','cv.pack2.title':'🚀 Pack Boost – 29,99 €','cv.pack2.li1':'Incluye todas las funciones del Pack Starter','cv.pack2.li2':'Optimización del contenido (ATS-friendly)','cv.pack2.li3':'Añadido de palabras clave estratégicas','cv.pack2.li4':'Para una mayor visibilidad ante los reclutadores','cv.pack3.title':'🌐 Pack Premium – 59,99 €','cv.pack3.li1':'Incluye todas las funciones del Pack Boost','cv.pack3.li2':'Creación de un CV en línea (mini sitio personal)','cv.pack3.li3':'Alojamiento incluido durante 1 año','cv.pack3.li4':'Diseño moderno (ordenador y móvil)','cv.pack3.li5':'Código QR integrado','cv.pack3.li6':'Para destacar frente a otros candidatos','cv.pack4.title':'📄 Carta de motivación personalizada – 7,99 €','cv.pack4.li1':'Estructura profesional','cv.pack4.li2':'Argumentación clara y convincente','cv.pack4.li3':'Adaptación a la oferta de empleo','cv.pack4.li4':'Corrección ortográfica y gramatical','cv.pack4.li5':'Entrega en Word/PDF','cv.back':'⬅ Volver al inicio','footer.contact':'💬 Contactarme'
      },
      it: {'cv.title':'I miei modelli di CV','cv.intro':'Scopri i nostri modelli: chiari, moderni e pronti all’uso.','cv.model1.kicker':'CV professionale','cv.model1.title':'CV strutturato','cv.model1.text':'Una presentazione professionale, chiara e organizzata, pensata per candidature amministrative, tecniche e generali.','cv.model2.kicker':'CV online','cv.model2.title':'CV moderno','cv.model2.text':'Un CV presentato come una vera pagina professionale online, accessibile da computer e mobile.','cv.letter.kicker':'Candidatura','cv.letter.title':'Lettera di motivazione personalizzata','cv.letter.text':'Una lettera personalizzata, coerente con il tuo CV e adattata alla posizione desiderata.','cv.preview':'Vedi anteprima','cv.letter.preview':'Vedi esempio','cv.pricing.h2':'💼 Pacchetti CV','cv.pricing.sub':'Soluzioni CV professionali adatte alle tue esigenze.','cv.back':'⬅ Torna alla home','footer.contact':'💬 Contattami'},
      de: {'cv.title':'Meine CV-Vorlagen','cv.intro':'Entdecken Sie unsere Vorlagen: klar, modern und sofort einsatzbereit.','cv.model1.kicker':'Professioneller CV','cv.model1.title':'Strukturierter CV','cv.model1.text':'Eine klare, professionelle und gut strukturierte Darstellung für administrative, technische und allgemeine Bewerbungen.','cv.model2.kicker':'Online-CV','cv.model2.title':'Moderner CV','cv.model2.text':'Ein CV als professionelle Online-Seite, auf Desktop und Mobilgeräten verfügbar.','cv.letter.kicker':'Bewerbung','cv.letter.title':'Individuelles Anschreiben','cv.letter.text':'Ein persönliches Anschreiben, passend zu Ihrem CV und zur gewünschten Stelle.','cv.preview':'Vorschau ansehen','cv.letter.preview':'Beispiel ansehen','cv.pricing.h2':'💼 CV-Pakete','cv.pricing.sub':'Professionelle CV-Lösungen, passend zu Ihren Bedürfnissen.','cv.back':'⬅ Zur Startseite','footer.contact':'💬 Kontakt'},
      nl: {'cv.title':'Mijn CV-modellen','cv.intro':'Ontdek onze modellen: duidelijk, modern en klaar voor gebruik.','cv.model1.kicker':'Professioneel CV','cv.model1.title':'Gestructureerd CV','cv.model1.text':'Een duidelijke, professionele en georganiseerde presentatie voor administratieve, technische en algemene sollicitaties.','cv.model2.kicker':'Online CV','cv.model2.title':'Modern CV','cv.model2.text':'Een CV als echte professionele online pagina, toegankelijk op computer en mobiel.','cv.letter.kicker':'Sollicitatie','cv.letter.title':'Persoonlijke motivatiebrief','cv.letter.text':'Een persoonlijke brief die aansluit bij uw CV en de gewenste functie.','cv.preview':'Voorbeeld bekijken','cv.letter.preview':'Voorbeeld bekijken','cv.pricing.h2':'💼 CV-pakketten','cv.pricing.sub':'Professionele CV-oplossingen afgestemd op uw behoeften.','cv.back':'⬅ Terug naar home','footer.contact':'💬 Contact'},
      et: {'cv.title':'Minu CV-mallid','cv.intro':'Avastage meie mudelid: selged, moodsad ja kasutusvalmis.','cv.model1.kicker':'Professionaalne CV','cv.model1.title':'Struktureeritud CV','cv.model1.text':'Selge ja professionaalne esitlus haldus-, tehniliste ja üldiste kandideerimiste jaoks.','cv.model2.kicker':'Veebipõhine CV','cv.model2.title':'Moodne CV','cv.model2.text':'CV kui professionaalne veebileht, mis on kasutatav arvutis ja mobiilis.','cv.letter.kicker':'Kandideerimine','cv.letter.title':'Isikupärastatud motivatsioonikiri','cv.letter.text':'Isikupärastatud kiri, mis sobib teie CV ja soovitud ametikohaga.','cv.preview':'Vaata eelvaadet','cv.letter.preview':'Vaata näidet','cv.pricing.h2':'💼 CV-paketid','cv.pricing.sub':'Professionaalsed CV-lahendused vastavalt teie vajadustele.','cv.back':'⬅ Tagasi avalehele','footer.contact':'💬 Võta ühendust'},
      ru: {'cv.title':'Мои шаблоны CV','cv.intro':'Ознакомьтесь с нашими шаблонами: понятными, современными и готовыми к использованию.','cv.model1.kicker':'Профессиональное резюме','cv.model1.title':'Структурированное резюме','cv.model1.text':'Чёткая и профессиональная презентация для административных, технических и общих вакансий.','cv.model2.kicker':'Онлайн-CV','cv.model2.title':'Современное резюме','cv.model2.text':'Резюме в формате профессиональной веб-страницы, доступной на компьютере и мобильном устройстве.','cv.letter.kicker':'Кандидатура','cv.letter.title':'Персональное мотивационное письмо','cv.letter.text':'Персональное письмо, согласованное с вашим CV и адаптированное к вакансии.','cv.preview':'Посмотреть пример','cv.letter.preview':'Посмотреть пример','cv.pricing.h2':'💼 Пакеты CV','cv.pricing.sub':'Профессиональные решения для CV, адаптированные под ваши потребности.','cv.back':'⬅ Вернуться на главную','footer.contact':'💬 Связаться'}
    };

    Object.keys(CV).forEach(lang => {
      if (typeof COMMON !== 'undefined' && COMMON[lang]) Object.assign(COMMON[lang], CV[lang]);
    });

    const aboutLists = {
      fr:['• Aux personnes en recherche d’emploi, en reconversion ou à la recherche d’un premier poste','• Aux étudiants qui souhaitent valoriser leur profil et leurs compétences','• Aux artisans, créateurs et entrepreneurs qui souhaitent présenter leur activité','• Aux freelances et professionnels qui veulent développer leur présence en ligne','• À toute personne souhaitant disposer d’un CV moderne, professionnel et personnalisé.'],
      en:['• Job seekers, career changers and first-job candidates','• Students who want to highlight their profile and skills','• Artisans, creators and entrepreneurs who want to present their business','• Freelancers and professionals who want to develop their online presence','• Anyone looking for a modern, professional and personalised CV']
    };

    const originalApplyLang = typeof applyLang === 'function' ? applyLang : null;

    function patchPage(lang) {
      const d = (typeof COMMON !== 'undefined' && COMMON[lang]) || {};
      document.querySelectorAll('.showcase-kicker').forEach((el, i) => {
        const key = ['cv.model1.kicker','cv.model2.kicker','cv.letter.kicker'][i];
        if (d[key]) el.textContent = d[key];
      });
      document.querySelectorAll('.cv-action span[data-i18n="cv.preview"]').forEach((el, i) => {
        const key = i === 2 ? 'cv.letter.preview' : 'cv.preview';
        if (d[key]) el.textContent = d[key];
      });
      document.querySelectorAll('.cv-action').forEach((btn, i) => {
        const key = ['cv.model1.title','cv.model2.title','cv.letter.title'][i];
        if (d[key]) btn.dataset.previewTitle = d[key];
      });
      const about = aboutLists[lang] || aboutLists.fr;
      document.querySelectorAll('li[data-i18n="about"]').forEach((el, i) => {
        if (about[i]) el.textContent = about[i];
      });
      document.querySelectorAll('.footer-contact').forEach(el => {
        if (d['footer.contact']) el.innerHTML = d['footer.contact'];
      });
    }

    if (originalApplyLang) {
      applyLang = function (lang) {
        originalApplyLang(lang);
        patchPage(lang);
      };
    }

    if (document.readyState !== 'loading' && typeof init === 'function') init();
    console.log('🌍 EternaWeb i18n : correctifs CV + À propos + footer actifs');
  };

  document.head.appendChild(core);
})();
