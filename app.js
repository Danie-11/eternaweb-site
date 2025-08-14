// ===== Config =====
const WA_NUMBER = '33749723434';          // WhatsApp (sans +)
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
// Important: utilise #langBtn et .lang-item (aligne ça aussi dans ton HTML)
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

// ===== i18n =====
const I18N = {
  fr: { /* ... ton objet fr identique ... */ },
  en: { /* ... ton objet en identique ... */ }
};

function applyLang(lang){
  const d = I18N[lang] || I18N.fr;
  $$('[data-i18n]').forEach(el=>{
    const k = el.getAttribute('data-i18n');
    if (!d[k]) return;
    if (typeof d[k] === 'string' && d[k].includes('<')) el.innerHTML = d[k];
    else el.textContent = d[k];
  });
  localStorage.setItem('lang', lang);
  document.documentElement.setAttribute('lang', lang);
}

// init + handlers langue (note: .lang-item)
applyLang(localStorage.getItem('lang') || 'fr');
$$('#langMenu .lang-item').forEach(b=>{
  b.addEventListener('click', ()=>{
    applyLang(b.dataset.lang);
    langMenu.classList.remove('show');
    langBtn.setAttribute('aria-expanded','false');
  });
});

// ===== Scroll vers #devis =====
function openDevis(){
  const d = $('#devis');
  if (!d) return;
  d.classList.add('show'); // au cas où tu styles .show
  d.scrollIntoView({ behavior:'smooth', block:'start' });
}

$('#goDevis')?.addEventListener('click', (e)=>{ e.preventDefault(); openDevis(); });
$('#goBrief')?.addEventListener('click', (e)=>{ e.preventDefault(); openDevis(); });

if (location.hash === '#devis') {
  // ouvre directement si l’ancre est présente
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

// ===== FAQ =====
const faqBtn   = $('#faqBtn');
const faqPanel = $('#faqPanel');
const faqClose = faqPanel?.querySelector('.faq-close');

faqBtn?.addEventListener('click', ()=>{
  faqPanel?.classList.add('open');
  faqPanel?.removeAttribute('hidden');
  faqBtn.setAttribute('aria-expanded','true');
});

faqClose?.addEventListener('click', ()=>{
  faqPanel?.classList.remove('open');
  faqPanel?.setAttribute('hidden','');
  faqBtn?.setAttribute('aria-expanded','false');
});

faqPanel?.addEventListener('click', (e)=>{
  if (e.target === faqPanel) faqClose?.click();
});
function openDevis(){
  const d = $('#devis');
  if (!d) return;
  d.classList.add('show');            // <— important
  d.scrollIntoView({behavior:'smooth', block:'start'});
}
