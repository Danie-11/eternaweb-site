// ===== Config =====
const WA_NUMBER = '33749723434';
const MAIL_TO   = 'contact@eternaweb.fr';

// ===== Helpers =====
const $  = (s, r=document)=>r.querySelector(s);
const $$ = (s, r=document)=>[...r.querySelectorAll(s)];
const isMobile = ()=>/Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);

// ===== Traductions =====
const I18N = {
  fr: {
    'nav.menu':'Menu','nav.cv':'CV','nav.portfolio':'Portfolio','nav.vitrine':'Vitrine','nav.tarifs':'Tarifs','nav.devis':'Vos consignes','nav.temoignages':'Témoignages','nav.modeles':'Modèles',
    'hero.title':'EternaWeb','hero.subtitle':'CV & vitrines express — en ligne en 48 heures','hero.lead':'✨ Un design premium, des intégrations rapides et un rendu clé en main.','cta.whatsapp':'WhatsApp','cta.paypal':'PayPal',
    'brief.h2':'Votre site en 3 étapes','brief.li1':'Choisissez une formule.','brief.li2':'Indiquez vos préférences (couleurs, style, intégrations).','brief.li3':'Je lance la création et vous envoie une maquette.',
    'btn.fill':'Vos consignes','btn.send':'Envoyer','btn.choose':'Je choisis cette formule',
    'devis.h2':'📝 Vos consignes','devis.sub':'Choisissez, décrivez, envoyez — je reçois vos consignes.','devis.type':'Type de site','devis.colors':'Palette / couleurs','devis.style':'Style visuel',
    'devis.style1':'Sobre & élégant','devis.style2':'Créatif & coloré','devis.style3':'Minimal & pro','devis.style4':'Nature & doux',
    'devis.integrations':'Intégrations souhaitées','devis.int.form':'Formulaire contact','devis.int.social':'Réseaux sociaux','devis.int.gallery':'Galerie',
    'devis.other':'Autres demandes','devis.name':'Prénom / Nom','devis.email':'Email','devis.note':'Aucun envoi serveur : votre logiciel e-mail s’ouvre avec le message prérempli.','devis.opt.cv':'CV','devis.opt.vitrine':'Vitrine','devis.opt.portfolio':'Portfolio','devis.opt.other':'Autre',
    'models.h2':'🎨 Modèles prêts','models.sub':'Choisis un style, ouvre la démo, et dis-moi lequel tu veux.','models.demo':'Voir le modèle',
    'models.cv.title':'CV — sobre & pro','models.cv.desc':'Idéal candidature ou profil pro.','models.port.title':'Portfolio — créatif','models.port.desc':'Parfait artistes & designers.','models.vit.title':'Vitrine — business','models.vit.desc':'Entreprises & indépendants.',
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
    'models.h2':'🎨 Ready-made templates','models.sub':'Pick a style, open the demo, and tell me which you want.','models.demo':'View template'
  },

  nl: {
    'nav.menu':'Menu','nav.cv':'CV','nav.portfolio':'Portfolio','nav.vitrine':'Vitrinesite','nav.tarifs':'Prijzen','nav.devis':'Uw instructies','nav.temoignages':'Getuigenissen','nav.modeles':'Modellen',
    'hero.title':'EternaWeb','hero.subtitle':'CV’s en vitrinesites — online binnen 48 uur','hero.lead':'✨ Premium ontwerp, snelle integraties en een kant-en-klaar resultaat.','cta.whatsapp':'WhatsApp','cta.paypal':'PayPal',
    'models.h2':'🎨 Klaar-staande modellen','models.sub':'Kies een stijl, open de demo en zeg me welke je wilt.','models.demo':'Bekijk model'
  },

  ru: {
    'nav.menu':'Меню','nav.cv':'Резюме','nav.portfolio':'Портфолио','nav.vitrine':'Витрина','nav.tarifs':'Тарифы','nav.devis':'Ваши пожелания','nav.temoignages':'Отзывы','nav.modeles':'Шаблоны',
    'hero.title':'EternaWeb','hero.subtitle':'Резюме и витринные сайты — онлайн за 48 часов','hero.lead':'✨ Премиум-дизайн, быстрая интеграция и готовый результат.','cta.whatsapp':'WhatsApp','cta.paypal':'PayPal',
    'models.h2':'🎨 Готовые шаблоны','models.sub':'Выберите стиль, откройте демо и скажите, какой вам нужен.','models.demo':'Смотреть шаблон'
  },

  de: {
    'nav.menu':'Menü','nav.cv':'Lebenslauf','nav.portfolio':'Portfolio','nav.vitrine':'Schaufenster','nav.tarifs':'Preise','nav.devis':'Ihr Briefing','nav.temoignages':'Referenzen','nav.modeles':'Vorlagen',
    'hero.title':'EternaWeb','hero.subtitle':'Lebensläufe & Schaufensterseiten — online in 48 Stunden','hero.lead':'✨ Premium-Design, schnelle Integrationen und ein schlüsselfertiges Ergebnis.','cta.whatsapp':'WhatsApp','cta.paypal':'PayPal',
    'models.h2':'🎨 Fertige Vorlagen','models.sub':'Wählen Sie einen Stil, öffnen Sie die Demo und sagen Sie mir, welchen Sie möchten.','models.demo':'Vorlage ansehen'
  },

  es: {
    'nav.menu':'Menú','nav.cv':'CV','nav.portfolio':'Portafolio','nav.vitrine':'Escaparate','nav.tarifs':'Precios','nav.devis':'Sus indicaciones','nav.temoignages':'Testimonios','nav.modeles':'Plantillas',
    'hero.title':'EternaWeb','hero.subtitle':'CV y sitios escaparate — en línea en 48 horas','hero.lead':'✨ Diseño premium, integraciones rápidas y un resultado llave en mano.','cta.whatsapp':'WhatsApp','cta.paypal':'PayPal',
    'models.h2':'🎨 Plantillas listas','models.sub':'Elige un estilo, abre la demo y dime cuál quieres.','models.demo':'Ver plantilla'
  },

  it: {
    'nav.menu':'Menù','nav.cv':'CV','nav.portfolio':'Portfolio','nav.vitrine':'Vetrina','nav.tarifs':'Prezzi','nav.devis':'Le tue indicazioni','nav.temoignages':'Testimonianze','nav.modeles':'Modelli',
    'hero.title':'EternaWeb','hero.subtitle':'CV e siti vetrina — online in 48 ore','hero.lead':'✨ Design premium, integrazioni rapide e un risultato chiavi in mano.','cta.whatsapp':'WhatsApp','cta.paypal':'PayPal',
    'models.h2':'🎨 Modelli pronti','models.sub':'Scegli uno stile, apri la demo e dimmi quale preferisci.','models.demo':'Vedi modello'
  }
};

// ===== Menu mobile =====
const menuBtn  = $('#menuBtn');
const mainMenu = $('#mainMenu');
menuBtn?.addEventListener('click', ()=>{
  mainMenu?.classList.toggle('show');
  menuBtn.setAttribute('aria-expanded', mainMenu?.classList.contains('show'));
});

// ===== Globe langues =====
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

// ===== Scroll vers #devis =====
function openDevis(){
  const d = $('#devis');
  if (!d) return;
  d.classList.add('show');
  d.scrollIntoView({ behavior:'smooth', block:'start' });
}
$('#goDevis')?.addEventListener('click', e=>{ e.preventDefault(); openDevis(); });
$('#goBrief')?.addEventListener('click', e=>{ e.preventDefault(); openDevis(); });
if (location.hash === '#devis') {
  openDevis();
  history.replaceState(null, '', location.pathname + location.search);
}

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
