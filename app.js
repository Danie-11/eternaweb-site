// ===== Config =====
const WA_NUMBER = '33749723434';
const MAIL_TO   = 'contact@eternaweb.fr';

// ===== Helpers =====
const $  = (s, r=document)=>r.querySelector(s);
const $$ = (s, r=document)=>[...r.querySelectorAll(s)];
const isMobile = ()=>/Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);

// ===== Menu =====
$('#menuBtn')?.addEventListener('click', ()=>{
  const m = $('#mainMenu');
  m?.classList.toggle('show');
  $('#menuBtn').setAttribute('aria-expanded', m?.classList.contains('show'));
});

// ===== Langue =====
const langBtn = $('#langBtn');
const langMenu = $('#langMenu');
langBtn?.addEventListener('click', ()=>{
  const open = langMenu.classList.toggle('show');
  langBtn.setAttribute('aria-expanded', open);
});
document.addEventListener('click', e=>{
  if (!langMenu?.contains(e.target) && e.target !== langBtn){
    langMenu?.classList.remove('show');
    langBtn?.setAttribute('aria-expanded','false');
  }
});

// ===== Bouton ❓ vers FAQ du footer =====
$('#faqBtn')?.addEventListener('click', ()=>{
  const footer = $('#footerFAQ');
  footer?.scrollIntoView({behavior:'smooth', block:'start'});
});

// ===== Smooth scroll vers devis =====
function openDevis(){
  $('#devis')?.scrollIntoView({behavior:'smooth', block:'start'});
}
$('#goBrief')?.addEventListener('click', e=>{
  e.preventDefault(); openDevis();
});

// ===== Choix plan =====
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

// ===== Envoi du devis =====
$('#sendForm')?.addEventListener('click', e=>{
  e.preventDefault();
  const form = $('#devisForm');
  const get = n => form.querySelector(`[name="${n}"]`)?.value?.trim() || '—';
  const body = encodeURIComponent([
    'Devis EternaWeb',
    '---------------------------',
    `Formule : ${get('plan')}`,
    `Type de site : ${get('type')}`,
    `Couleurs : ${get('couleurs')}`,
    `Style : ${get('style')}`,
    `Autres demandes : ${get('contenu')}`,
    `Nom : ${get('nom')}`,
    `Email : ${get('email')}`,
  ].join('\n'));
  const subject = encodeURIComponent(`EternaWeb – Devis ${get('plan')}`);
  location.href = `mailto:${MAIL_TO}?subject=${subject}&body=${body}`;
  if (isMobile()){
    const t2 = encodeURIComponent(`Devis complété – ${get('plan')} – ${get('nom')}`);
    setTimeout(()=>window.open(`https://wa.me/${WA_NUMBER}?text=${t2}`,'_blank'),400);
  }
  alert("✅ Presque terminé !\n\nVérifie et envoie l'e-mail qui s'ouvre.");
});
