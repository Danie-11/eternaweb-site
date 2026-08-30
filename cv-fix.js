/* EternaWeb — CV page fix
   - navigation des formules
   - traductions complètes de cv.html pour toutes les langues
   - aucun retour involontaire au français/anglais
*/
(function(){
  'use strict';

  var CV = {
    fr:{
      title:'Mes Modèles de CV', intro:'Découvrez nos modèles : clairs, modernes et prêts à l’emploi.',
      k1:'CV professionnel', t1:'CV Structuré', d1:'Une présentation professionnelle, claire et organisée, pensée pour les candidatures administratives, techniques et généralistes.',
      k2:'CV en ligne', t2:'CV Moderne', d2:'Un CV présenté comme une véritable page professionnelle en ligne, accessible sur ordinateur comme sur mobile.',
      k3:'Candidature', t3:'Lettre de motivation personnalisée', d3:'Une lettre personnalisée, cohérente avec votre CV et adaptée au poste visé.', preview:'Voir l’aperçu', example:'Voir l’exemple',
      pricing:'💼 Formules CV', pricingSub:'Des solutions CV professionnelles, adaptées à vos besoins.',
      p1:'📝 Pack Starter – 14,99 €', p1a:'Correction orthographique et grammaticale', p1b:'Mise en page simple et structurée (Word/PDF)', p1n:'👉 Idéal pour stage, job étudiant ou premier emploi',
      p2:'🚀 Pack Boost – 29,99 €', p2a:'Inclus toutes les fonctionnalités du Pack Starter', p2b:'Optimisation du contenu (ATS friendly)', p2c:'Ajout de mots-clés stratégiques', p2d:'Pour une meilleure visibilité auprès des recruteurs',
      p3:'🌐 Pack Premium – 59,99 €', p3a:'Inclus toutes les fonctionnalités du Pack Boost', p3b:'Création d’un CV en ligne (mini-site personnel)', p3c:'Hébergement inclus 1 an', p3d:'Design moderne (ordinateur & mobile)', p3e:'QR code intégré', p3f:'Pour vous démarquer face aux autres candidats',
      p4:'📄 Lettre de motivation personnalisée – 7,99 €', p4a:'Structure professionnelle', p4b:'Argumentation claire et convaincante', p4c:'Adaptation à l’offre d’emploi', p4d:'Correction orthographique et grammaticale', p4e:'Livraison en Word/PDF', choose:'Je choisis cette formule', back:'← Retour à l’accueil'
    },
    en:{
      title:'My CV Templates', intro:'Discover our templates: clear, modern and ready to use.', k1:'PROFESSIONAL CV', t1:'Structured CV', d1:'A clear, organised and professional presentation designed for administrative, technical and general applications.',
      k2:'ONLINE CV', t2:'Modern CV', d2:'A CV presented as a genuine professional web page, accessible on both desktop and mobile.', k3:'APPLICATION', t3:'Personalised cover letter', d3:'A personalised cover letter, consistent with your CV and tailored to the position you are applying for.', preview:'View preview', example:'View example',
      pricing:'💼 CV Packages', pricingSub:'Professional CV solutions tailored to your needs.', p1:'📝 Starter Package – €14.99', p1a:'Spelling and grammar correction', p1b:'Simple, structured layout (Word/PDF)', p1n:'👉 Ideal for internships, student jobs or a first job',
      p2:'🚀 Boost Package – €29.99', p2a:'Includes all Starter Package features', p2b:'Content optimisation (ATS-friendly)', p2c:'Strategic keyword integration', p2d:'For greater visibility with recruiters',
      p3:'🌐 Premium Package – €59.99', p3a:'Includes all Boost Package features', p3b:'Online CV creation (personal mini-site)', p3c:'1 year of hosting included', p3d:'Modern design (desktop & mobile)', p3e:'Integrated QR code', p3f:'Stand out from other candidates',
      p4:'📄 Personalised cover letter – €7.99', p4a:'Professional structure', p4b:'Clear and convincing argumentation', p4c:'Tailored to the job offer', p4d:'Spelling and grammar correction', p4e:'Delivery in Word/PDF', choose:'I choose this package', back:'← Back to home'
    },
    nl:{
      title:'Mijn CV-modellen', intro:'Ontdek onze modellen: duidelijk, modern en klaar voor gebruik.', k1:'PROFESSIONEEL CV', t1:'Gestructureerd CV', d1:'Een duidelijke, professionele en overzichtelijke presentatie, ontworpen voor administratieve, technische en algemene sollicitaties.',
      k2:'ONLINE CV', t2:'Modern CV', d2:'Een CV als echte professionele webpagina, toegankelijk op computer en mobiel.', k3:'SOLLICITATIE', t3:'Persoonlijke motivatiebrief', d3:'Een persoonlijke brief die aansluit bij je CV en is afgestemd op de functie waarop je solliciteert.', preview:'Voorbeeld bekijken', example:'Voorbeeld bekijken',
      pricing:'💼 CV-pakketten', pricingSub:'Professionele CV-oplossingen, afgestemd op jouw behoeften.', p1:'📝 Starterpakket – €14,99', p1a:'Spelling- en grammaticacontrole', p1b:'Eenvoudige en gestructureerde opmaak (Word/PDF)', p1n:'👉 Ideaal voor stage, studentenbaan of eerste baan',
      p2:'🚀 Boostpakket – €29,99', p2a:'Inclusief alle functies van het Starterpakket', p2b:'Optimalisatie van de inhoud (ATS-vriendelijk)', p2c:'Strategische zoekwoorden toevoegen', p2d:'Voor een betere zichtbaarheid bij recruiters',
      p3:'🌐 Premiumpakket – €59,99', p3a:'Inclusief alle functies van het Boostpakket', p3b:'Een online CV maken (persoonlijke minisite)', p3c:'1 jaar hosting inbegrepen', p3d:'Modern design (computer & mobiel)', p3e:'Geïntegreerde QR-code', p3f:'Om je te onderscheiden van andere kandidaten',
      p4:'📄 Persoonlijke motivatiebrief – €7,99', p4a:'Professionele structuur', p4b:'Duidelijke en overtuigende argumentatie', p4c:'Afgestemd op de vacature', p4d:'Spelling- en grammaticacontrole', p4e:'Levering in Word/PDF', choose:'Ik kies dit pakket', back:'← Terug naar home'
    },
    de:{
      title:'Meine CV-Vorlagen', intro:'Entdecken Sie unsere Vorlagen: klar, modern und sofort einsatzbereit.', k1:'PROFESSIONELLER LEBENSLAUF', t1:'Strukturierter Lebenslauf', d1:'Eine klare, professionelle und übersichtliche Darstellung für administrative, technische und allgemeine Bewerbungen.',
      k2:'ONLINE-CV', t2:'Moderner Lebenslauf', d2:'Ein Lebenslauf als echte professionelle Webseite, auf Computer und Smartphone zugänglich.', k3:'BEWERBUNG', t3:'Individuelles Anschreiben', d3:'Ein persönliches Anschreiben, das zu Ihrem Lebenslauf passt und auf die gewünschte Stelle zugeschnitten ist.', preview:'Vorschau ansehen', example:'Beispiel ansehen',
      pricing:'💼 CV-Pakete', pricingSub:'Professionelle CV-Lösungen, passend zu Ihren Bedürfnissen.', p1:'📝 Starter-Paket – 14,99 €', p1a:'Rechtschreib- und Grammatikprüfung', p1b:'Einfache und strukturierte Gestaltung (Word/PDF)', p1n:'👉 Ideal für Praktikum, Studentenjob oder Berufseinstieg',
      p2:'🚀 Boost-Paket – 29,99 €', p2a:'Enthält alle Funktionen des Starter-Pakets', p2b:'Inhaltsoptimierung (ATS-freundlich)', p2c:'Strategische Schlüsselwörter hinzufügen', p2d:'Für bessere Sichtbarkeit bei Recruitern',
      p3:'🌐 Premium-Paket – 59,99 €', p3a:'Enthält alle Funktionen des Boost-Pakets', p3b:'Erstellung eines Online-CVs (persönliche Mini-Website)', p3c:'1 Jahr Hosting inklusive', p3d:'Modernes Design (Computer & Mobilgerät)', p3e:'Integrierter QR-Code', p3f:'Damit Sie sich von anderen Bewerbern abheben',
      p4:'📄 Individuelles Anschreiben – 7,99 €', p4a:'Professionelle Struktur', p4b:'Klare und überzeugende Argumentation', p4c:'An die Stellenanzeige angepasst', p4d:'Rechtschreib- und Grammatikprüfung', p4e:'Lieferung als Word/PDF', choose:'Ich wähle dieses Paket', back:'← Zur Startseite'
    },
    it:{
      title:'I miei modelli di CV', intro:'Scopri i nostri modelli: chiari, moderni e pronti all’uso.', k1:'CV PROFESSIONALE', t1:'CV Strutturato', d1:'Una presentazione professionale, chiara e organizzata, pensata per candidature amministrative, tecniche e generali.',
      k2:'CV ONLINE', t2:'CV Moderno', d2:'Un CV presentato come una vera pagina professionale online, accessibile da computer e smartphone.', k3:'CANDIDATURA', t3:'Lettera di motivazione personalizzata', d3:'Una lettera personalizzata, coerente con il tuo CV e adattata alla posizione desiderata.', preview:'Vedi anteprima', example:'Vedi esempio',
      pricing:'💼 Pacchetti CV', pricingSub:'Soluzioni professionali per il CV, adattate alle tue esigenze.', p1:'📝 Pacchetto Starter – 14,99 €', p1a:'Correzione ortografica e grammaticale', p1b:'Impaginazione semplice e strutturata (Word/PDF)', p1n:'👉 Ideale per stage, lavoro studentesco o primo impiego',
      p2:'🚀 Pacchetto Boost – 29,99 €', p2a:'Include tutte le funzionalità del Pacchetto Starter', p2b:'Ottimizzazione dei contenuti (ATS-friendly)', p2c:'Aggiunta di parole chiave strategiche', p2d:'Per una maggiore visibilità presso i recruiter',
      p3:'🌐 Pacchetto Premium – 59,99 €', p3a:'Include tutte le funzionalità del Pacchetto Boost', p3b:'Creazione di un CV online (mini-sito personale)', p3c:'Hosting incluso per 1 anno', p3d:'Design moderno (computer e mobile)', p3e:'Codice QR integrato', p3f:'Per distinguerti dagli altri candidati',
      p4:'📄 Lettera di motivazione personalizzata – 7,99 €', p4a:'Struttura professionale', p4b:'Argomentazione chiara e convincente', p4c:'Adattamento all’offerta di lavoro', p4d:'Correzione ortografica e grammaticale', p4e:'Consegna in Word/PDF', choose:'Scelgo questo pacchetto', back:'← Torna alla home'
    },
    es:{
      title:'Mis modelos de CV', intro:'Descubre nuestros modelos: claros, modernos y listos para usar.', k1:'CV PROFESIONAL', t1:'CV Estructurado', d1:'Una presentación profesional, clara y organizada, pensada para candidaturas administrativas, técnicas y generales.',
      k2:'CV EN LÍNEA', t2:'CV Moderno', d2:'Un CV presentado como una verdadera página profesional en línea, accesible tanto desde ordenador como desde móvil.', k3:'CANDIDATURA', t3:'Carta de motivación personalizada', d3:'Una carta personalizada, coherente con tu CV y adaptada al puesto al que aspiras.', preview:'Ver la vista previa', example:'Ver el ejemplo',
      pricing:'💼 Planes de CV', pricingSub:'Soluciones profesionales de CV, adaptadas a tus necesidades.', p1:'📝 Pack Starter – 14,99 €', p1a:'Corrección ortográfica y gramatical', p1b:'Diseño sencillo y estructurado (Word/PDF)', p1n:'👉 Ideal para prácticas, trabajo estudiantil o primer empleo',
      p2:'🚀 Pack Boost – 29,99 €', p2a:'Incluye todas las funciones del Pack Starter', p2b:'Optimización del contenido (compatible con ATS)', p2c:'Añadido de palabras clave estratégicas', p2d:'Para una mayor visibilidad ante los reclutadores',
      p3:'🌐 Pack Premium – 59,99 €', p3a:'Incluye todas las funciones del Pack Boost', p3b:'Creación de un CV en línea (mini sitio personal)', p3c:'Alojamiento incluido durante 1 año', p3d:'Diseño moderno (ordenador y móvil)', p3e:'Código QR integrado', p3f:'Para destacar frente a otros candidatos',
      p4:'📄 Carta de motivación personalizada – 7,99 €', p4a:'Estructura profesional', p4b:'Argumentación clara y convincente', p4c:'Adaptación a la oferta de empleo', p4d:'Corrección ortográfica y gramatical', p4e:'Entrega en Word/PDF', choose:'Elijo este plan', back:'← Volver al inicio'
    },
    ru:{
      title:'Мои шаблоны резюме', intro:'Ознакомьтесь с нашими шаблонами: понятными, современными и готовыми к использованию.', k1:'ПРОФЕССИОНАЛЬНОЕ РЕЗЮМЕ', t1:'Структурированное резюме', d1:'Профессиональная, понятная и организованная презентация для административных, технических и других вакансий.',
      k2:'ОНЛАЙН-РЕЗЮМЕ', t2:'Современное резюме', d2:'Резюме в формате профессиональной веб-страницы, доступное на компьютере и мобильном устройстве.', k3:'ЗАЯВКА', t3:'Персонализированное мотивационное письмо', d3:'Персонализированное письмо, согласованное с вашим резюме и адаптированное под выбранную должность.', preview:'Посмотреть превью', example:'Посмотреть пример',
      pricing:'💼 Пакеты резюме', pricingSub:'Профессиональные решения для резюме, адаптированные под ваши потребности.', p1:'📝 Пакет Starter – 14,99 €', p1a:'Орфографическая и грамматическая проверка', p1b:'Простое структурированное оформление (Word/PDF)', p1n:'👉 Идеально для стажировки, студенческой работы или первой работы',
      p2:'🚀 Пакет Boost – 29,99 €', p2a:'Включает все функции пакета Starter', p2b:'Оптимизация содержания (для ATS)', p2c:'Добавление стратегических ключевых слов', p2d:'Для повышения заметности среди рекрутеров',
      p3:'🌐 Пакет Premium – 59,99 €', p3a:'Включает все функции пакета Boost', p3b:'Создание онлайн-резюме (персональный мини-сайт)', p3c:'Хостинг включён на 1 год', p3d:'Современный дизайн (компьютер и мобильные устройства)', p3e:'Интегрированный QR-код', p3f:'Чтобы выделиться среди других кандидатов',
      p4:'📄 Персонализированное мотивационное письмо – 7,99 €', p4a:'Профессиональная структура', p4b:'Чёткая и убедительная аргументация', p4c:'Адаптация к вакансии', p4d:'Орфографическая и грамматическая проверка', p4e:'Доставка в Word/PDF', choose:'Я выбираю этот пакет', back:'← Вернуться на главную'
    },
    et:{
      title:'Minu CV-mallid', intro:'Avasta meie mallid: selged, kaasaegsed ja kasutusvalmis.', k1:'PROFESSIONAALNE CV', t1:'Struktureeritud CV', d1:'Selge, professionaalne ja korrastatud esitlus, mis sobib haldus-, tehnilistele ja üldistele kandideerimistele.',
      k2:'VEEBIPÕHINE CV', t2:'Kaasaegne CV', d2:'CV kui tõeline professionaalne veebileht, millele pääseb ligi arvutist ja mobiilist.', k3:'KANDIDEERIMINE', t3:'Isikupärastatud motivatsioonikiri', d3:'Isikupärastatud kiri, mis sobib sinu CV-ga ja on kohandatud soovitud ametikohale.', preview:'Vaata eelvaadet', example:'Vaata näidet',
      pricing:'💼 CV-paketid', pricingSub:'Professionaalsed CV-lahendused, mis on kohandatud sinu vajadustele.', p1:'📝 Starter-pakett – 14,99 €', p1a:'Õigekirja- ja grammatikakontroll', p1b:'Lihtne ja struktureeritud kujundus (Word/PDF)', p1n:'👉 Ideaalne praktikaks, üliõpilastööks või esimeseks töökohaks',
      p2:'🚀 Boost-pakett – 29,99 €', p2a:'Sisaldab kõiki Starter-paketi funktsioone', p2b:'Sisu optimeerimine (ATS-sõbralik)', p2c:'Strateegiliste märksõnade lisamine', p2d:'Parema nähtavuse saavutamiseks värbajate seas',
      p3:'🌐 Premium-pakett – 59,99 €', p3a:'Sisaldab kõiki Boost-paketi funktsioone', p3b:'Veebipõhise CV loomine (isiklik minisait)', p3c:'1 aasta majutust sisaldub hinnas', p3d:'Kaasaegne kujundus (arvuti ja mobiil)', p3e:'Integreeritud QR-kood', p3f:'Et teistest kandidaatidest eristuda',
      p4:'📄 Isikupärastatud motivatsioonikiri – 7,99 €', p4a:'Professionaalne struktuur', p4b:'Selge ja veenev argumentatsioon', p4c:'Kohandamine tööpakkumisega', p4d:'Õigekirja- ja grammatikakontroll', p4e:'Kättetoimetamine Word/PDF-vormingus', choose:'Valin selle paketi', back:'← Tagasi avalehele'
    }
  };

  function lang(){
    try { return localStorage.getItem('eternaweb-lang') || document.documentElement.lang || 'fr'; } catch(e){ return 'fr'; }
  }

  function applyCV(){
    var L=lang(), d=CV[L]||CV.fr;
    var map={
      'cv.title':'title','cv.intro':'intro','cv.model1.title':'t1','cv.model1.text':'d1','cv.model2.title':'t2','cv.model2.text':'d2','cv.letter.title':'t3','cv.letter.text':'d3',
      'cv.preview':'preview','cv.letter.preview':'example','cv.pricing.h2':'pricing','cv.pricing.sub':'pricingSub',
      'cv.pack1.title':'p1','cv.pack1.li1':'p1a','cv.pack1.li2':'p1b','cv.pack1.note':'p1n','cv.pack2.title':'p2','cv.pack2.li1':'p2a','cv.pack2.li2':'p2b','cv.pack2.li3':'p2c','cv.pack2.li4':'p2d',
      'cv.pack3.title':'p3','cv.pack3.li1':'p3a','cv.pack3.li2':'p3b','cv.pack3.li3':'p3c','cv.pack3.li4':'p3d','cv.pack3.li5':'p3e','cv.pack3.li6':'p3f',
      'cv.pack4.title':'p4','cv.pack4.li1':'p4a','cv.pack4.li2':'p4b','cv.pack4.li3':'p4c','cv.pack4.li4':'p4d','cv.pack4.li5':'p4e','btn.choose':'choose','cv.back':'back'
    };
    Object.keys(map).forEach(function(k){ var el=document.querySelectorAll('[data-i18n="'+k+'"]'); el.forEach(function(x){ if(d[map[k]]) x.innerHTML=d[map[k]]; }); });
    var kickers=[d.k1,d.k2,d.k3]; document.querySelectorAll('.showcase-kicker').forEach(function(x,i){if(kickers[i])x.textContent=kickers[i];});
  }

  function goToDevis(plan){ window.location.href='./index.html?plan='+encodeURIComponent(plan||'')+'#devis'; }

  function init(){
    document.querySelectorAll('.choose-plan').forEach(function(btn){ btn.addEventListener('click',function(e){e.preventDefault();e.stopImmediatePropagation();goToDevis(btn.dataset.plan||'');},true); });
    var params=new URLSearchParams(window.location.search), plan=params.get('plan');
    if(plan && document.getElementById('devis')){
      try{localStorage.setItem('ew_selected_plan',plan);}catch(e){}
      if(typeof window.openDevis==='function') window.openDevis(plan); else { var devis=document.getElementById('devis'); devis.classList.add('show','devis-open'); devis.setAttribute('aria-hidden','false'); var input=document.getElementById('planInput'),display=document.getElementById('planDisplay'); if(input)input.value=plan;if(display)display.value=plan;devis.scrollIntoView({behavior:'smooth',block:'start'}); }
      window.history.replaceState({},document.title,'./index.html#devis');
    }
    if(document.getElementById('devisForm')){var script=document.createElement('script');script.src='./direct-send.js';script.defer=true;document.head.appendChild(script);}
    applyCV();
  }

  function wait(){
    applyCV();
    if(typeof COMMON!=='undefined' && typeof applyLang==='function'){
      var old=applyLang;
      if(!old.__cvWrapped){
        applyLang=function(l){old(l);setTimeout(applyCV,0);};
        applyLang.__cvWrapped=true;
      }
      applyCV();
      return;
    }
    if(!wait.count)wait.count=0; if(++wait.count<200)setTimeout(wait,50);
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
  wait();
})();