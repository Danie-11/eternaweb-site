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

  'cv.pack1.title': '📝 Pack Starter – 14,99 €',
  'cv.pack1.li1': 'Correction orthographique et grammaticale',
  'cv.pack1.li2': 'Mise en page simple et structurée (Word/PDF)',
  'cv.pack1.note': '👉 Idéal pour stage, job étudiant ou premier emploi',
  'cv.pack2.title': '🚀 Pack Boost – 29,99 €',
  'cv.pack2.li1': 'Tout le Pack Starter',
  'cv.pack2.li2': 'Optimisation du contenu (ATS friendly)',
  'cv.pack2.li3': 'Ajout de mots-clés stratégiques',
  'cv.pack2.li4': 'Pour une meilleure répétabilitépar les recruteurs',
  'cv.pack3.title': '🌐 Pack Premium – 59,99 €',
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
    'faq.title': 'FAQ - EternaWeb',
'faq.h1': 'FAQ - EternaWeb',
'faq.q1': '✨ En combien de temps mon site est-il prêt ?',
'faq.a1': 'En général, en 1 heure maximum si toutes les infos sont prêtes !',
'faq.q2': '📲 Peut-on intégrer WhatsApp et PayPal ?',
'faq.a2': 'Oui, ton mini-site peut contenir des boutons directs pour commander.',
'faq.q3': '📄 Que dois-je fournir pour démarrer ?',
'faq.a3': 'Textes (ou points clés), 3–5 photos/logo, palette de couleurs, liens utiles (réseaux, Drive).',
'faq.q4': '🎨 Puis-je changer les couleurs et la mise en page ?',
'faq.a4': 'Oui, plusieurs allers-retours inclus pour ajuster style, couleurs et sections.',
'faq.q5': '🌐 Proposez-vous l’hébergement ?',
'faq.a5': 'Oui, hébergement inclus dans les formules (vitrine & premium). Migration possible.',
'faq.q6': '💡 Et si j’ai d’autres questions ?',
'faq.a6': 'Tu peux me les poser ci-dessous 👇',
'faq.labelEmail': 'Ton adresse e-mail :',
'faq.labelMsg': 'Ta question :',
'faq.btn': 'Envoyer la question',
'faq.back': '← Retour à l’accueil',
     'footer.about':'À propos',

// FAQ pour les CV
    faqCv: {
      title: 'FAQ – CV & mini-site CV - EternaWeb',
      h1: 'FAQ – CV & mini-site CV - EternaWeb',
'faqCv.q1': '✨ En combien de temps mon CV est-il prêt ?',
'faqCv.a1': 'En général sous 24 à 48 h, selon la formule choisie et la rapidité de réception des informations.',
'faqCv.q2': '📄 À qui s’adresse le service CV ?',
'faqCv.a2': 'Étudiants & jobs étudiants<br>Stages<br>Premier emploi<br>Reconversion professionnelle<br>Reprise d’activité<br>👉 Tous secteurs.',
'faqCv.q3': '📄 À qui s’adresse EternaWeb ?',
'faqCv.a3': 'Étudiants, chercheurs d’emploi, créateurs, freelances et entrepreneurs souhaitant une présence professionnelle moderne et efficace.',
'faqCv.q4': '⏱️ En combien de temps mon CV ou site est-il prêt ?',
'faqCv.a4': 'CV : 24 à 48h selon la formule.<br>Mini-site / portfolio : en moyenne 48h si les contenus sont fournis.',
'faqCv.q5': '🤖 Pourquoi parlez-vous d’optimisation ATS ?',
'faqCv.a5': 'Les recruteurs utilisent des logiciels de tri (ATS). J’intègre des mots-clés stratégiques pour améliorer la visibilité de ton CV auprès des recruteurs et des robots.',
'faqCv.q6': '📦 Quelles sont les formules CV ?',
'faqCv.a6': '<strong>Starter – 4,99 €</strong> : correction + mise en page structurée<br><strong>Boost – 9,99 €</strong> : optimisation ATS + mots-clés<br><strong>Premium – 19,99 €<[...]'
    },
    
  "portfolio.title": "FAQ – Portfolio / Créateurs & Freelances - EternaWeb",
  "portfolio.h1": "FAQ – Portfolio / Créateurs & Freelances",
  "portfolio.q1": "✨ À qui s'adresse le portfolio ?",
  "portfolio.a1": "Créateurs<br>Freelances<br>Photographes<br>Artisans<br>Entrepreneurs<br>Marques personnelles",
  "portfolio.q2": "⏱️ En combien de temps mon portfolio est-il prêt ?",
  "portfolio.a2": "En moyenne 48 h, si tous les contenus sont fournis.",
  "portfolio.q3": "📦 Quelles sont les formules Portfolio ?",
  "portfolio.a3": "<strong>Pack Créatif – 29,99 €</strong><br>✔ Mini-site (2–3 pages)<br>✔ Galerie photos / vidéos<br>✔ Présentation du créateur<br><br><strong>Pack Premium – 59[...]",
  "portfolio.q4": "📊 Puis-je voir combien de personnes visitent mon site ?",
  "portfolio.a4": "Oui. Les statistiques de visites sont incluses dans le Pack Premium.",
  "portfolio.q5": "🎨 Puis-je personnaliser le design ?",
  "portfolio.a5": "Oui :<br>couleurs<br>style<br>structure<br>Le site est adapté à ton univers créatif.",
  "portfolio.q6": "🌍 L'hébergement est-il inclus ?",
  "portfolio.a6": "Oui, l'hébergement est inclus pendant 1 an. Migration possible si besoin.",
  "portfolio.q7": "📎 Que dois-je fournir ?",
  "portfolio.a7": "Textes ou idées<br>Photos / vidéos<br>Liens réseaux (si existants)",
  "portfolio.q8": "❓ Besoin d'un devis sur mesure ?",
  "portfolio.a8": "Un devis personnalisé est possible sur demande.",
  "portfolio.back": "← Retour à l’accueil",
    
     'about.title': 'À propos de EternaWeb',
  'about.p1': 'EternaWeb est né d’un besoin simple : permettre à chacun de présenter son projet, son talent ou son offre avec clarté et professionnalisme, même sans compétences techniques[...]
  'about.p2': '✨ En 2 jours, votre vitrine ou votre CV en ligne peut voir le jour — un style épuré, humain et intuitif. Que vous soyez artisan, coach, artiste, thérapeute ou en recherche[...]
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
'legal.hostText': 'Le site est hébergé gratuitement par <strong>GitHub Pages</strong><br>GitHub Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis<br>Site : <a href="https[...]'
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
  }, { passive: true }); // make scroll listener passive for better performance
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
    if (/<[a-z][\s\S]*>/i.test(val)) el.innerHTML = val; // WARNING: innerHTML used for controlled translations only. If translations are loaded externally, sanitize to avoid XSS.
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
// Gestion du formulaire devis (adapted to #informations)
// =========================
const planInput = $('#planInput');
function openDevis(plan = ''){
  const d = $('#informations'); // adapted selector
  if (!d) return;
  if (plan && planInput) {
    planInput.value = plan;
    try{ localStorage.setItem('ew_selected_plan', plan); }catch(e){}
  }
  d.classList.add('show');
  d.scrollIntoView({ behavior:'smooth', block:'start' });
  // Focus the first focusable element for accessibility
  setTimeout(()=>{
    const focusable = d.querySelector('input, textarea, select, button, a[href], [tabindex]:not([tabindex="-1"])');
    if (focusable) focusable.focus();
    // Note: full focus trap would be better (future improvement)
  }, 300);
}
$$('.choose-plan').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const plan = btn.dataset.plan || '';
    openDevis(plan);
    if (isMobile()){
      const t = encodeURIComponent(`Devis – plan sélectionné : ${plan} — page: ${location.href}`);
      window.open(`https://wa.me/${WA_NUMBER}?text=${t}`, '_blank');
    }
  });
});
const savedPlan = localStorage.getItem('ew_selected_plan');
if (savedPlan && planInput) planInput.value = savedPlan;
// Update opener handlers to target #informations
document.querySelectorAll('a[href="#informations"], #goInformations, #goBrief').forEach(a=>{
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
  const infos = $('#informations'); // adapted selector
  if (!infos) return;

  // si on clique DANS la section infos ou sur un bouton/lien qui l'ouvre → on ignore
  if (
    infos.contains(e.target) || 
    e.target.closest('a[href="#informations"]') || 
    e.target.closest('#goInformations') || 
    e.target.closest('.choose-plan')
  ) {
    return;
  }

  // sinon → on ferme
  infos.classList.remove('show');
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
    try{ localStorage.setItem('ew_selected_plan', plan); }catch(e){}

    // Si la page a un #informations, on l'ouvre
    const infos = document.querySelector('#informations');
    if (infos) {
      infos.classList.add('show');
      return;
    }

    // Sinon on redirige vers la page d'accueil et on ouvrira le devis automatiquement
    window.location.href = 'index.html#informations';
  });
});
// --- Unified handler for ".choose-plan" buttons (saves plan, opens devis, opens WhatsApp)
(function(){
  // wait until DOM and openDevis are available
  function bindChoosePlan(){
    if (typeof openDevis !== 'function' || typeof WA_NUMBER === 'undefined'){
      // try again later
      if (window._choosePlanRetryCount === undefined) window._choosePlanRetryCount = 0;
      if (window._choosePlanRetryCount < 20){ window._choosePlanRetryCount++; setTimeout(bindChoosePlan, 200); }
      return;
    }

    // remove previously attached handlers (best-effort)
    document.querySelectorAll('.choose-plan').forEach(btn=>{
      const clone = btn.cloneNode(true);
      btn.parentNode.replaceChild(clone, btn);
    });

    // attach unified handler
    document.querySelectorAll('.choose-plan').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const plan = btn.dataset.plan || 'Portfolio';

        // Save selected plan
        try{ localStorage.setItem('ew_selected_plan', plan); }catch(e){}

        // Open the infos modal/form if available
        try{ openDevis(plan); }catch(e){}

        // Prepare WhatsApp message
        const text = `Devis – plan sélectionné : ${plan} — page: ${location.href}`;
        const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

        // Open WhatsApp in a new tab/window. On mobile this will open the app.
        try{ window.open(waUrl, '_blank'); }catch(err){ window.location.href = waUrl; }

        // If there is no #informations element on this page, redirect to index with anchor
        const infos = document.querySelector('#informations');
        if (!infos){
          // small delay to allow localStorage write / popup
          setTimeout(()=>{ window.location.href = 'index.html#informations'; }, 250);
        }
      });
    });
  }

  if (document.readyState === 'complete' || document.readyState === 'interactive') bindChoosePlan();
  else document.addEventListener('DOMContentLoaded', bindChoosePlan);
})();
