/* EternaWeb — accueil : traduction du mode d'emploi et des formules */
(function(){
  'use strict';
  var T={
    fr:{modeTitle:'✨ Mode d’emploi ✨',modeSub:'4 étapes simples pour obtenir votre document professionnel',s1:'Choisissez votre formule',d1:'Sélectionnez le pack qui correspond à vos besoins : Starter, Boost, Premium ou Lettre de motivation.',s2:'La page d’informations s’ouvre',d2:'Après votre choix, la page d’informations s’ouvre automatiquement. Vous pouvez alors remplir vos informations et ajouter vos documents.',s3:'Validez et payez en ligne',d3:'Effectuez le paiement sécurisé pour confirmer votre commande en toute simplicité.',s4:'Recevez votre document',d4:'Nous traitons votre demande et vous recevez votre document professionnel prêt à l’emploi.',ph:'Nos formules',ps:'Des solutions CV professionnelles, adaptées à vos besoins.'},
    en:{modeTitle:'✨ How it works ✨',modeSub:'4 simple steps to get your professional document',s1:'Choose your package',d1:'Select the package that matches your needs: Starter, Boost, Premium or Cover Letter.',s2:'The information page opens',d2:'After your choice, the information page opens automatically. You can then fill in your details and add your documents.',s3:'Confirm and pay online',d3:'Make the secure payment to confirm your order quickly and easily.',s4:'Receive your document',d4:'We process your request and you receive your professional document ready to use.',ph:'Our packages',ps:'Professional CV solutions tailored to your needs.'},
    nl:{modeTitle:'✨ Zo werkt het ✨',modeSub:'4 eenvoudige stappen voor uw professionele document',s1:'Kies uw pakket',d1:'Selecteer het pakket dat bij uw behoeften past: Starter, Boost, Premium of motivatiebrief.',s2:'De informatiepagina wordt geopend',d2:'Na uw keuze wordt de informatiepagina automatisch geopend. U kunt uw gegevens invullen en documenten toevoegen.',s3:'Bevestig en betaal online',d3:'Voer de veilige betaling uit om uw bestelling eenvoudig te bevestigen.',s4:'Ontvang uw document',d4:'Wij verwerken uw aanvraag en u ontvangt uw professionele document, klaar voor gebruik.',ph:'Onze pakketten',ps:'Professionele CV-oplossingen, afgestemd op uw behoeften.'},
    et:{modeTitle:'✨ Kuidas see töötab ✨',modeSub:'4 lihtsat sammu professionaalse dokumendi saamiseks',s1:'Valige pakett',d1:'Valige oma vajadustele vastav pakett: Starter, Boost, Premium või motivatsioonikiri.',s2:'Infoleht avaneb',d2:'Pärast valikut avaneb infoleht automaatselt. Seejärel saate sisestada oma andmed ja lisada dokumendid.',s3:'Kinnitage ja makske veebis',d3:'Tehke turvaline makse, et oma tellimus lihtsalt kinnitada.',s4:'Saate oma dokumendi',d4:'Töötleme teie taotlust ja saate kasutusvalmis professionaalse dokumendi.',ph:'Meie paketid',ps:'Professionaalsed CV-lahendused vastavalt teie vajadustele.'},
    ru:{modeTitle:'✨ Как это работает ✨',modeSub:'4 простых шага для получения профессионального документа',s1:'Выберите пакет',d1:'Выберите пакет, который соответствует вашим потребностям: Starter, Boost, Premium или мотивационное письмо.',s2:'Открывается страница информации',d2:'После выбора страница информации открывается автоматически. Вы можете заполнить данные и добавить документы.',s3:'Подтвердите и оплатите онлайн',d3:'Выполните безопасную оплату, чтобы подтвердить заказ.',s4:'Получите документ',d4:'Мы обработаем ваш запрос, и вы получите готовый к использованию профессиональный документ.',ph:'Наши пакеты',ps:'Профессиональные решения для резюме, адаптированные под ваши потребности.'},
    de:{modeTitle:'✨ So funktioniert es ✨',modeSub:'4 einfache Schritte zu Ihrem professionellen Dokument',s1:'Wählen Sie Ihr Paket',d1:'Wählen Sie das Paket, das zu Ihren Bedürfnissen passt: Starter, Boost, Premium oder Anschreiben.',s2:'Die Informationsseite öffnet sich',d2:'Nach Ihrer Auswahl öffnet sich die Informationsseite automatisch. Dort können Sie Ihre Angaben eintragen und Dokumente hinzufügen.',s3:'Bestätigen und online bezahlen',d3:'Führen Sie die sichere Zahlung durch, um Ihre Bestellung einfach zu bestätigen.',s4:'Erhalten Sie Ihr Dokument',d4:'Wir bearbeiten Ihre Anfrage und Sie erhalten Ihr professionelles, einsatzbereites Dokument.',ph:'Unsere Pakete',ps:'Professionelle CV-Lösungen, passend zu Ihren Bedürfnissen.'},
    es:{modeTitle:'✨ Cómo funciona ✨',modeSub:'4 pasos sencillos para obtener tu documento profesional',s1:'Elige tu plan',d1:'Selecciona el plan que corresponde a tus necesidades: Starter, Boost, Premium o Carta de motivación.',s2:'Se abre la página de información',d2:'Después de elegir, la página de información se abre automáticamente. Puedes completar tus datos y añadir tus documentos.',s3:'Confirma y paga en línea',d3:'Realiza el pago seguro para confirmar tu pedido de forma sencilla.',s4:'Recibe tu documento',d4:'Procesamos tu solicitud y recibes tu documento profesional listo para usar.',ph:'Nuestros planes',ps:'Soluciones profesionales de CV adaptadas a tus necesidades.'},
    it:{modeTitle:'✨ Come funziona ✨',modeSub:'4 semplici passaggi per ottenere il tuo documento professionale',s1:'Scegli il tuo pacchetto',d1:'Seleziona il pacchetto più adatto alle tue esigenze: Starter, Boost, Premium o Lettera di motivazione.',s2:'Si apre la pagina delle informazioni',d2:'Dopo la scelta, la pagina delle informazioni si apre automaticamente. Puoi inserire i tuoi dati e aggiungere i documenti.',s3:'Conferma e paga online',d3:'Effettua il pagamento sicuro per confermare il tuo ordine in modo semplice.',s4:'Ricevi il tuo documento',d4:'Elaboriamo la tua richiesta e ricevi il tuo documento professionale pronto all’uso.',ph:'I nostri pacchetti',ps:'Soluzioni professionali per il CV, adattate alle tue esigenze.'}
  };
  function applyHome(lang){
    var t=T[lang]||T.fr;
    var title=document.getElementById('mode-title');
    if(!title)return;
    title.textContent=t.modeTitle;
    var sub=document.querySelector('.mode-sub');if(sub)sub.textContent=t.modeSub;
    var hs=document.querySelectorAll('.mode-step h3'), ps=document.querySelectorAll('.mode-step p');
    [t.s1,t.s2,t.s3,t.s4].forEach(function(v,i){if(hs[i])hs[i].textContent=v;if(ps[i])ps[i].textContent=[t.d1,t.d2,t.d3,t.d4][i]});
    var ph=document.querySelector('.pricing-home h2');if(ph)ph.textContent=t.ph;
    var psub=document.querySelector('.pricing-home>p');if(psub)psub.textContent=t.ps;
  }
  function hook(){
    var original=window.applyLang;
    if(typeof original==='function'&&!original.__homeWrapped){
      function wrapped(lang){original(lang);applyHome(lang);}
      wrapped.__homeWrapped=true;window.applyLang=wrapped;
    }
    var lang='fr';try{lang=localStorage.getItem('eternaweb-lang')||'fr';}catch(e){}
    applyHome(lang);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',hook,{once:true});else hook();
})();
