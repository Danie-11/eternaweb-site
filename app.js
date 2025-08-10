// ====== Config ======
const WA_NUMBER = '33749723434';        // Ton WhatsApp (sans +)
const MAIL_TO   = 'contact@eternaweb.fr';

// ====== Utils ======
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const isMobile = () => /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);

// ====== Menu mobile ======
const menuBtn  = $('#menuBtn');
const mainMenu = $('#mainMenu');
if (menuBtn && mainMenu) {
  menuBtn.addEventListener('click', () => {
    mainMenu.classList.toggle('show');
    menuBtn.setAttribute('aria-expanded', mainMenu.classList.contains('show'));
  });
}

// ====== Sélecteur de langue (globe) ======
const langTrigger = $('#langTrigger');
const langMenu    = $('#langMenu');

if (langTrigger && langMenu) {
  langTrigger.addEventListener('click', () => {
    const open = langMenu.classList.toggle('show');
    langTrigger.setAttribute('aria-expanded', open);
  });
  // fermer au clic extérieur / scroll
  document.addEventListener('click', (e) => {
    if (!langMenu.contains(e.target) && e.target !== langTrigger) {
      langMenu.classList.remove('show');
      langTrigger.setAttribute('aria-expanded', 'false');
    }
  });
  window.addEventListener('scroll', () => {
    langMenu.classList.remove('show');
    langTrigger.setAttribute('aria-expanded', 'false');
  });
}

// ====== i18n (FR/EN) ======
const I18N = {
  fr: {
    "nav.cv":"CV","nav.portfolio":"Portfolio","nav.vitrine":"Vitrine",
    "nav.devis":"Vos consignes","nav.tarifs":"Tarifs","nav.temoignages":"Témoignages",

    "hero.title":"EternaWeb",
    "hero.subtitle":"CV & vitrines express — en ligne en 48 heures",
    "hero.lead":"✨ Création de mini‑sites pros pour :",
    "hero.li1":"Présenter vos créations (artisanat, soins, coaching…)",
    "hero.li2":"Héberger un CV moderne ou un portfolio",
    "hero.li3":"Intégrer WhatsApp, PayPal ou SumUp",
    "hero.soon":"📢 Prochainement : galerie de sites & témoignages.",
    "cta.whatsapp":"WhatsApp","cta.paypal":"PayPal",

    "banner.tip":"💡 Astuce : remplissez le <a href=\"#devis\">Devis Express</a> — je reçois tout sur WhatsApp et je démarre direct.",

    "devis.h2":"📝 Vos consignes",
    "devis.sub":"Choisissez, décrivez, envoyez — je reçois vos consignes.",
    "devis.type":"Type de site",
    "devis.opt.cv":"CV","devis.opt.vitrine":"Vitrine","devis.opt.portfolio":"Portfolio","devis.opt.other":"Autre",
    "devis.colors":"Palette / couleurs",
    "devis.style":"Style visuel",
    "devis.style1":"Sobre & élégant","devis.style2":"Créatif & coloré","devis.style3":"Minimal & pro","devis.style4":"Nature & doux",
    "devis.integrations":"Intégrations souhaitées",
    "devis.int.form":"Formulaire contact","devis.int.social":"Réseaux sociaux","devis.int.gallery":"Galerie",
    "devis.other":"Autres demandes",
    "devis.name":"Prénom / Nom","devis.email":"Email",
    "btn.send":"Envoyer",
    "devis.note":"Aucun envoi serveur : votre logiciel e‑mail s’ouvre avec le message prérempli.",
     devis: {
  // ...tes clés existantes
  intro: "En quelques minutes, décrivez votre projet. Vous recevrez directement mes recommandations et un plan de création personnalisé."
},
btn: {
  // ...tes clés existantes
  fill: "✍️ Remplir vos consignes"
}
    "pricing.h2":"🧾 Formules EternaWeb","pricing.sub":"CV & mini‑sites vitrines express — hébergement inclus",
    "btn.choose":"Je choisis cette formule",

    "testi.h2":"💬 Témoignages",
    "testi.t1":"“Super réactive et professionnelle, mon site a été en ligne le jour même !”","testi.c1":"— Claire B.",
    "testi.t2":"“Design élégant, clair, et surtout… mes clients m’écrivent directement via WhatsApp !”","testi.c2":"— Malik T.",
    "testi.t3":"“Excellent rapport qualité/prix. Je recommande à 100 %.”","testi.c3":"— Sofia M.",

    "footer.info":"Infos utiles","footer.about":"À propos","footer.security":"Sécurité","footer.privacy":"Confidentialité","footer.code":"Code de conduite","footer.faq":"FAQ","footer.contact":"Contact"
  },
  en: {
    "nav.cv":"Resume","nav.portfolio":"Portfolio","nav.vitrine":"Showcase",
    "nav.devis":"Your brief","nav.tarifs":"Pricing","nav.temoignages":"Testimonials",

    "hero.title":"EternaWeb",
    "hero.subtitle":"Express resumes & showcases — online within 48 hours",
    "hero.lead":"✨ I build mini professional sites for:",
    "hero.li1":"Showcasing your work (crafts, wellness, coaching…)",
    "hero.li2":"Hosting a modern resume or portfolio",
    "hero.li3":"Integrating WhatsApp, PayPal or SumUp",
    "hero.soon":"📢 Coming soon: site gallery & testimonials.",
    "cta.whatsapp":"WhatsApp","cta.paypal":"PayPal",

    "banner.tip":"💡 Tip: fill the <a href=\"#devis\">Instant Brief</a> — I get it on WhatsApp and start right away.",

    "devis.h2":"📝 Your brief",
    "devis.sub":"Pick, describe, send — I receive your brief.",
    "devis.type":"Site type",
    "devis.opt.cv":"Resume","devis.opt.vitrine":"Showcase","devis.opt.portfolio":"Portfolio","devis.opt.other":"Other",
    "devis.colors":"Palette / colors",
    "devis.style":"Visual style",
    "devis.style1":"Simple & elegant","devis.style2":"Creative & colorful","devis.style3":"Minimal & pro","devis.style4":"Nature & soft",
    "devis.integrations":"Desired integrations",
    "devis.int.form":"Contact form","devis.int.social":"Social links","devis.int.gallery":"Gallery",
    "devis.other":"Other requests",
    "devis.name":"First / Last name","devis.email":"Email",
    "btn.send":"Send",
    "devis.note":"No server submit: your mail app opens with a prefilled message.",
devis: {
  // ...your existing keys
  intro: "In a few minutes, describe your project. You’ll immediately receive my recommendations and a tailored creation plan."
},
btn: {
  // ...your existing keys
  fill: "✍️ Fill your brief"
}
    "pricing.h2":"🧾 EternaWeb Plans","pricing.sub":"Express resumes & mini showcase sites — hosting included",
    "btn.choose":"I choose this plan",

    "testi.h2":"💬 Testimonials",
    "testi.t1":"“Super responsive and professional — my site was live the same day!”","testi.c1":"— Claire B.",
    "testi.t2":"“Clean, elegant design — clients contact me directly via WhatsApp!”","testi.c2":"— Malik T.",
    "testi.t3":"“Great value for money. 100% recommended.”","testi.c3":"— Sofia M.",

    "footer.info":"Useful info","footer.about":"About","footer.security":"Security","footer.privacy":"Privacy","footer.code":"Code of Conduct","footer.faq":"FAQ","footer.contact":"Contact"
  }
};

function applyLang(lang){
  const dict = I18N[lang] || I18N.fr;
  $$('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if (!dict[key]) return;
    if (dict[key].includes('<')) el.innerHTML = dict[key];
    else el.textContent = dict[key];
  });
  localStorage.setItem('lang', lang);
  document.documentElement.setAttribute('lang', lang);
}

// init langue + handlers
applyLang(localStorage.getItem('lang') || 'fr');
$$('.lang-menu .lang').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    applyLang(btn.dataset.lang);
    langMenu.classList.remove('show');
    langTrigger.setAttribute('aria-expanded','false');
  });
});

// ====== Boutons "Je choisis cette formule" ======
const planInput = $('#planInput');
$$('.choose-plan').forEach(btn => {
  btn.addEventListener('click', () => {
    const plan = btn.dataset.plan || '';
    localStorage.setItem('ew_selected_plan', plan);
    if (planInput) planInput.value = plan;

    if (isMobile()) {
      const t = encodeURIComponent(`Devis – plan sélectionné : ${plan}`);
      window.open(`https://wa.me/${WA_NUMBER}?text=${t}`, '_blank');
    }
    // Aller au formulaire
    $('#devis')?.scrollIntoView({behavior:'smooth', block:'start'});
  });
});

// Pré-remplir si retour
const savedPlan = localStorage.getItem('ew_selected_plan');
if (savedPlan && planInput) planInput.value = savedPlan;

// ====== Envoi du formulaire -> e‑mail + (option) ping WhatsApp ======
const devisForm = $('#devisForm');
const sendForm  = $('#sendForm');

if (devisForm && sendForm) {
  sendForm.addEventListener('click', (e) => {
    e.preventDefault();
    const get = (name) => devisForm.querySelector(`[name="${name}"]`)?.value?.trim() || '—';
    const checks = [...devisForm.querySelectorAll('input[name="int"]:checked')].map(i => i.value).join(', ') || '—';

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
    ];

    const subject = `EternaWeb – Devis ${get('plan')}`;
    const body    = encodeURIComponent(lignes.join('\n'));
    window.location.href = `mailto:${MAIL_TO}?subject=${encodeURIComponent(subject)}&body=${body}`;

    if (isMobile()) {
      const t2 = encodeURIComponent(`Devis complété – ${get('plan')} – ${get('nom')}`);
      setTimeout(() => window.open(`https://wa.me/${WA_NUMBER}?text=${t2}`, '_blank'), 400);
    }

    alert("✅ Presque terminé !\n\n1) Vérifie et ENVOIE l'email qui s'ouvre.\n2) Tu recevras ma réponse avec la checklist (textes, images, logo, accès...).");
 // Scroll doux depuis le bloc "Vos consignes"
document.getElementById('goBrief')?.addEventListener('click', (e)=>{
  e.preventDefault();
  document.getElementById('devis')?.scrollIntoView({behavior:'smooth', block:'start'});
});
  
}
