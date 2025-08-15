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

// ===== i18n (dictionnaires COMPLETS) =====
const I18N = {
  fr: {
    'nav.menu': 'Menu',
    'nav.cv': 'CV',
    'nav.portfolio': 'Portfolio',
    'nav.vitrine': 'Vitrine',
    'nav.tarifs': 'Tarifs',
    'nav.devis': 'Vos consignes',
    'nav.temoignages': 'Témoignages',

    'hero.title': 'EternaWeb',
    'hero.subtitle': 'CV & vitrines express — en ligne en 48 heures',
    'hero.lead': '✨ Création de mini‑sites pros pour :',
    'cta.whatsapp': 'WhatsApp',
    'cta.paypal': 'PayPal',

    'brief.h2': 'Votre site en 3 étapes',
    'brief.li1': 'Choisissez une formule.',
    'brief.li2': 'Indiquez vos préférences (couleurs, style, intégrations).',
    'brief.li3': 'Je lance la création et vous envoie une maquette.',
    'btn.fill': 'Vos consignes',
    'btn.send': 'Envoyer',
    'btn.choose': 'Je choisis cette formule',

    'devis.h2': '📝 Vos consignes',
    'devis.sub': 'Choisissez, décrivez, envoyez — je reçois vos consignes.',
    'devis.type': 'Type de site',
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
    'devis.note': 'Aucun envoi serveur : votre logiciel e‑mail s’ouvre avec le message prérempli.',

    'pricing.h2': '🧾 Formules EternaWeb',
    'pricing.sub': 'CV & mini‑sites vitrines express — hébergement inclus',
    'pricing.card1.title': '🌿 Pack Essentiel – 49 €',
    'pricing.card1.li1': 'CV en ligne simple (1 page)',
    'pricing.card1.li2': 'Personnalisation avec infos + photo',
    'pricing.card1.li3': 'Design élégant & responsive',
    'pricing.card1.li4': 'Livraison sous 48h',
    'pricing.card1.note': 'Idéal pour : candidatures',
    'pricing.card2.title': '✨ Pack Vitrine – 89 €',
    'pricing.card2.li1': 'Mini‑site vitrine (2–3 pages)',
    'pricing.card2.li2': 'Accueil + présentation produits/services',
    'pricing.card2.li3': 'Boutons WhatsApp, PayPal, réseaux',
    'pricing.card2.li4': 'Design harmonieux & responsive',
    'pricing.card2.note': 'Idéal pour : artisans, freelances',
    'pricing.card3.title': '💎 Pack Premium – 129 €',
    'pricing.card3.li1': 'Tout le Pack Vitrine',
    'pricing.card3.li2': 'Création/refonte logo',
    'pricing.card3.li3': 'Conseils branding',
    'pricing.card3.li4': 'SEO de base + Galerie/FAQ',
    'pricing.card3.note': 'Idéal pour : lancement complet',

    'testi.h2': '💬 Témoignages',
    'testi.t1': '“Super réactive et professionnelle, mon site a été en ligne le jour même !”',
    'testi.c1': '— Claire B.',
    'testi.t2': '“Design élégant, clair, et surtout… mes clients m’écrivent directement via WhatsApp !”',
    'testi.c2': '— Malik T.',
    'testi.t3': '“Excellent rapport qualité/prix. Je recommande à 100 %.”',
    'testi.c3': '— Sofia M.',

    'footer.info': 'Infos utiles',
    'footer.contact': 'Contact',
    'footer.about': 'À propos',
    'footer.security': 'Sécurité',
    'footer.privacy': 'Confidentialité',
    'footer.code': 'Code de conduite',
    'footer.faq': 'FAQ',
  },

  en: {
    'nav.menu': 'Menu',
    'nav.cv': 'CV',
    'nav.portfolio': 'Portfolio',
    'nav.vitrine': 'Showcase',
    'nav.tarifs': 'Pricing',
    'nav.devis': 'Your brief',
    'nav.temoignages': 'Testimonials',

    'hero.title': 'EternaWeb',
    'hero.subtitle': 'CV & showcase sites — online in 48 hours',
    'hero.lead': '✨ Create a professional mini‑site for:',
    'cta.whatsapp': 'WhatsApp',
    'cta.paypal': 'PayPal',

    'brief.h2': 'Your site in 3 steps',
    'brief.li1': 'Choose a plan.',
    'brief.li2': 'Share your preferences (colors, style, integrations).',
    'brief.li3': 'I build and send a quick mockup.',
    'btn.fill': 'Your brief',
    'btn.send': 'Send',
    'btn.choose': 'Choose this plan',

    'devis.h2': '📝 Your brief',
    'devis.sub': 'Pick, describe, send — I receive your instructions.',
    'devis.type': 'Site type',
    'devis.colors': 'Palette / colors',
    'devis.style': 'Visual style',
    'devis.style1': 'Sober & elegant',
    'devis.style2': 'Creative & colorful',
    'devis.style3': 'Minimal & pro',
    'devis.style4': 'Nature & soft',
    'devis.integrations': 'Desired integrations',
    'devis.int.form': 'Contact form',
    'devis.int.social': 'Social media',
    'devis.int.gallery': 'Gallery',
    'devis.other': 'Other requests',
    'devis.name': 'First / Last name',
    'devis.email': 'Email',
    'devis.note': 'No server: your email app opens with a prefilled message.',

    'pricing.h2': '🧾 EternaWeb plans',
    'pricing.sub': 'CV & mini showcase sites — hosting included',
    'pricing.card1.title': '🌿 Essential – €49',
    'pricing.card1.li1': 'Simple online CV (1 page)',
    'pricing.card1.li2': 'Personalization with info + photo',
    'pricing.card1.li3': 'Elegant & responsive design',
    'pricing.card1.li4': 'Delivery within 48h',
    'pricing.card1.note': 'Ideal for job applications',
    'pricing.card2.title': '✨ Showcase – €89',
    'pricing.card2.li1': 'Mini site (2–3 pages)',
    'pricing.card2.li2': 'Home + services/products',
    'pricing.card2.li3': 'WhatsApp, PayPal, social buttons',
    'pricing.card2.li4': 'Harmonious, responsive design',
    'pricing.card2.note': 'Ideal for artisans, freelancers',
    'pricing.card3.title': '💎 Premium – €129',
    'pricing.card3.li1': 'Everything in Showcase',
    'pricing.card3.li2': 'Logo creation/redesign',
    'pricing.card3.li3': 'Branding advice',
    'pricing.card3.li4': 'Basic SEO + Gallery/FAQ',
    'pricing.card3.note': 'Ideal for full launch',

    'testi.h2': '💬 Testimonials',
    'testi.t1': '“Super responsive and professional, my site was online the same day!”',
    'testi.c1': '— Claire B.',
    'testi.t2': '“Elegant design, clear, and clients contact me directly via WhatsApp!”',
    'testi.c2': '— Malik T.',
    'testi.t3': '“Excellent value for money. 100% recommend.”',
    'testi.c3': '— Sofia M.',

    'footer.info': 'Useful info',
    'footer.contact': 'Contact',
    'footer.about': 'About',
    'footer.security': 'Security',
    'footer.privacy': 'Privacy',
    'footer.code': 'Code of conduct',
    'footer.faq': 'FAQ',
  },

  nl:{
    'nav.menu': 'Menu',
    'nav.cv': 'CV',
    'nav.portfolio': 'Portfolio',
    'nav.vitrine': 'Vitrine',
    'nav.tarifs': 'Tarifs',
    'nav.devis': 'Vos consignes',
    'nav.temoignages': 'Témoignages',

    'hero.title': 'EternaWeb',
    'hero.subtitle': 'CV & vitrines express — en ligne en 48 heures',
    'hero.lead': '✨ Création de mini‑sites pros pour :',
    'cta.whatsapp': 'WhatsApp',
    'cta.paypal': 'PayPal',

    'brief.h2': 'Votre site en 3 étapes',
    'brief.li1': 'Choisissez une formule.',
    'brief.li2': 'Indiquez vos préférences (couleurs, style, intégrations).',
    'brief.li3': 'Je lance la création et vous envoie une maquette.',
    'btn.fill': 'Vos consignes',
    'btn.send': 'Envoyer',
    'btn.choose': 'Je choisis cette formule',

    'devis.h2': '📝 Vos consignes',
    'devis.sub': 'Choisissez, décrivez, envoyez — je reçois vos consignes.',
    'devis.type': 'Type de site',
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
    'devis.note': 'Aucun envoi serveur : votre logiciel e‑mail s’ouvre avec le message prérempli.',

    'pricing.h2': '🧾 Formules EternaWeb',
    'pricing.sub': 'CV & mini‑sites vitrines express — hébergement inclus',
    'pricing.card1.title': '🌿 Pack Essentiel – 49 €',
    'pricing.card1.li1': 'CV en ligne simple (1 page)',
    'pricing.card1.li2': 'Personnalisation avec infos + photo',
    'pricing.card1.li3': 'Design élégant & responsive',
    'pricing.card1.li4': 'Livraison sous 48h',
    'pricing.card1.note': 'Idéal pour : candidatures',
    'pricing.card2.title': '✨ Pack Vitrine – 89 €',
    'pricing.card2.li1': 'Mini‑site vitrine (2–3 pages)',
    'pricing.card2.li2': 'Accueil + présentation produits/services',
    'pricing.card2.li3': 'Boutons WhatsApp, PayPal, réseaux',
    'pricing.card2.li4': 'Design harmonieux & responsive',
    'pricing.card2.note': 'Idéal pour : artisans, freelances',
    'pricing.card3.title': '💎 Pack Premium – 129 €',
    'pricing.card3.li1': 'Tout le Pack Vitrine',
    'pricing.card3.li2': 'Création/refonte logo',
    'pricing.card3.li3': 'Conseils branding',
    'pricing.card3.li4': 'SEO de base + Galerie/FAQ',
    'pricing.card3.note': 'Idéal pour : lancement complet',

    'testi.h2': '💬 Témoignages',
    'testi.t1': '“Super réactive et professionnelle, mon site a été en ligne le jour même !”',
    'testi.c1': '— Claire B.',
    'testi.t2': '“Design élégant, clair, et surtout… mes clients m’écrivent directement via WhatsApp !”',
    'testi.c2': '— Malik T.',
    'testi.t3': '“Excellent rapport qualité/prix. Je recommande à 100 %.”',
    'testi.c3': '— Sofia M.',

    'footer.info': 'Infos utiles',
    'footer.contact': 'Contact',
    'footer.about': 'À propos',
    'footer.security': 'Sécurité',
    'footer.privacy': 'Confidentialité',
    'footer.code': 'Code de conduite',
    'footer.faq': 'FAQ',
  },

  ru:{
  'nav.menu': 'Menu',
    'nav.cv': 'CV',
    'nav.portfolio': 'Portfolio',
    'nav.vitrine': 'Vitrine',
    'nav.tarifs': 'Tarifs',
    'nav.devis': 'Vos consignes',
    'nav.temoignages': 'Témoignages',

    'hero.title': 'EternaWeb',
    'hero.subtitle': 'CV & vitrines express — en ligne en 48 heures',
    'hero.lead': '✨ Création de mini‑sites pros pour :',
    'cta.whatsapp': 'WhatsApp',
    'cta.paypal': 'PayPal',

    'brief.h2': 'Votre site en 3 étapes',
    'brief.li1': 'Choisissez une formule.',
    'brief.li2': 'Indiquez vos préférences (couleurs, style, intégrations).',
    'brief.li3': 'Je lance la création et vous envoie une maquette.',
    'btn.fill': 'Vos consignes',
    'btn.send': 'Envoyer',
    'btn.choose': 'Je choisis cette formule',

    'devis.h2': '📝 Vos consignes',
    'devis.sub': 'Choisissez, décrivez, envoyez — je reçois vos consignes.',
    'devis.type': 'Type de site',
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
    'devis.note': 'Aucun envoi serveur : votre logiciel e‑mail s’ouvre avec le message prérempli.',

    'pricing.h2': '🧾 Formules EternaWeb',
    'pricing.sub': 'CV & mini‑sites vitrines express — hébergement inclus',
    'pricing.card1.title': '🌿 Pack Essentiel – 49 €',
    'pricing.card1.li1': 'CV en ligne simple (1 page)',
    'pricing.card1.li2': 'Personnalisation avec infos + photo',
    'pricing.card1.li3': 'Design élégant & responsive',
    'pricing.card1.li4': 'Livraison sous 48h',
    'pricing.card1.note': 'Idéal pour : candidatures',
    'pricing.card2.title': '✨ Pack Vitrine – 89 €',
    'pricing.card2.li1': 'Mini‑site vitrine (2–3 pages)',
    'pricing.card2.li2': 'Accueil + présentation produits/services',
    'pricing.card2.li3': 'Boutons WhatsApp, PayPal, réseaux',
    'pricing.card2.li4': 'Design harmonieux & responsive',
    'pricing.card2.note': 'Idéal pour : artisans, freelances',
    'pricing.card3.title': '💎 Pack Premium – 129 €',
    'pricing.card3.li1': 'Tout le Pack Vitrine',
    'pricing.card3.li2': 'Création/refonte logo',
    'pricing.card3.li3': 'Conseils branding',
    'pricing.card3.li4': 'SEO de base + Galerie/FAQ',
    'pricing.card3.note': 'Idéal pour : lancement complet',

    'testi.h2': '💬 Témoignages',
    'testi.t1': '“Super réactive et professionnelle, mon site a été en ligne le jour même !”',
    'testi.c1': '— Claire B.',
    'testi.t2': '“Design élégant, clair, et surtout… mes clients m’écrivent directement via WhatsApp !”',
    'testi.c2': '— Malik T.',
    'testi.t3': '“Excellent rapport qualité/prix. Je recommande à 100 %.”',
    'testi.c3': '— Sofia M.',

    'footer.info': 'Infos utiles',
    'footer.contact': 'Contact',
    'footer.about': 'À propos',
    'footer.security': 'Sécurité',
    'footer.privacy': 'Confidentialité',
    'footer.code': 'Code de conduite',
    'footer.faq': 'FAQ',
  },

};

// Héritages simples depuis FR pour compléter NL/RU
I18N.nl = {
  ...I18N.fr,
  'nav.vitrine':'Vitrine', // tu peux traduire si tu veux
  'nav.tarifs':'Tarieven',
  'nav.devis':'Uw instructies',
  'nav.temoignages':'Getuigenissen',

  'hero.subtitle': 'CV- en vitrinesites — online binnen 48 uur',
  'hero.lead'    : '✨ Professionele minisites maken voor:',
  'btn.fill'     : 'Uw instructies',
  'btn.send'     : 'Verzenden',

  'pricing.h2': '🧾 EternaWeb‑pakketten',
  'pricing.sub': 'CV & vitrinesites — hosting inbegrepen',
};

I18N.ru = {
  ...I18N.fr,
  'nav.vitrine':'Витрина',
  'nav.tarifs':'Тарифы',
  'nav.devis':'Ваши пожелания',
  'nav.temoignages':'Отзывы',

  'hero.subtitle': 'Резюме и витринные сайты — онлайн за 48 часов',
  'hero.lead'    : '✨ Создание профессиональных мини‑сайтов для:',
  'btn.fill'     : 'Ваши пожелания',
  'btn.send'     : 'Отправить',

  'pricing.h2': '🧾 Тарифы EternaWeb',
  'pricing.sub': 'CV и мини‑сайты‑витрины — хостинг включён',
};

// Appliquer la langue
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

// Init (après avoir défini I18N)
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
$$('.choose-plan').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const plan = btn.dataset.plan || '';
    localStorage.setItem('ew_selected_plan', plan);
    if (planInput) planInput.value = plan;

    if (isMobile()){
      const t = encodeURIComponent(`Devis – plan sélectionné : ${plan}`);
      window.open(`https://wa.me/${WA_NUMBER}?text=${t}`, '_blank');
    }
    openDevis();
  });
});
const savedPlan = localStorage.getItem('ew_selected_plan');
if (savedPlan && planInput) planInput.value = savedPlan;

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
(function(){
  const keysInDOM = [...document.querySelectorAll('[data-i18n]')].map(el=>el.getAttribute('data-i18n'));
  const uniq = [...new Set(keysInDOM)];
  for (const lang of Object.keys(I18N)){
    const missing = uniq.filter(k => I18N[lang][k] == null);
    console.log(`[${lang}] manquants:`, missing);
  }
})();
