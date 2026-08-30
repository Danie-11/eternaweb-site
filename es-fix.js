/* EternaWeb — correctif espagnol pour la page CV */
(function () {
  'use strict';

  const ES_CV = {
    'announce':'🚀 CV entregado en 48–72 h • Pago seguro • Soporte por WhatsApp',
    'cv.title':'Mis modelos de CV',
    'cv.intro':'Descubre nuestros modelos: claros, modernos y listos para usar.',
    'cv.model1.kicker':'CV PROFESIONAL',
    'cv.model1.title':'CV Estructurado',
    'cv.model1.text':'Una presentación profesional, clara y organizada, pensada para candidaturas administrativas, técnicas y generales.',
    'cv.model2.kicker':'CV EN LÍNEA',
    'cv.model2.title':'CV Moderno',
    'cv.model2.text':'Un CV presentado como una verdadera página profesional en línea, accesible tanto desde ordenador como desde móvil.',
    'cv.letter.kicker':'CANDIDATURA',
    'cv.letter.title':'Carta de motivación personalizada',
    'cv.letter.text':'Una carta personalizada, coherente con tu CV y adaptada al puesto al que aspiras.',
    'cv.preview':'Ver la vista previa',
    'cv.letter.preview':'Ver el ejemplo',
    'cv.pricing.h2':'💼 Planes de CV',
    'cv.pricing.sub':'Soluciones profesionales de CV, adaptadas a tus necesidades.',
    'cv.pack1.title':'📝 Pack Starter – 14,99 €',
    'cv.pack2.title':'🚀 Pack Boost – 29,99 €',
    'cv.pack3.title':'🌐 Pack Premium – 59,99 €',
    'cv.pack4.title':'📄 Carta de motivación personalizada – 7,99 €',
    'cv.back':'← Volver al inicio',
    'footer.contact':'💬 Contacto'
  };

  function applySpanishFix() {
    if (typeof COMMON === 'undefined' || !COMMON.es || typeof applyLang !== 'function') return false;
    Object.assign(COMMON.es, ES_CV);
    const lang = localStorage.getItem('eternaweb-lang') || 'fr';
    if (lang === 'es') applyLang('es');
    return true;
  }

  if (applySpanishFix()) return;

  let tries = 0;
  const timer = setInterval(function () {
    tries++;
    if (applySpanishFix() || tries > 200) clearInterval(timer);
  }, 50);
})();
