/* EternaWeb — nettoyage final des anciennes coordonnées */
(function(){
  'use strict';
  function clean(){
    var replacements=[
      ['contact@eternaweb.com','contact@eternaweb.fr'],
      ['contact@eternaweb.fr.com','contact@eternaweb.fr'],
      ['eternaweb.contact@gmail.com','contact@eternaweb.fr'],
      ['eternaweb.com','eternaweb.fr']
    ];
    document.querySelectorAll('a[href]').forEach(function(a){
      var href=a.getAttribute('href');
      if(!href)return;
      replacements.forEach(function(pair){href=href.split(pair[0]).join(pair[1]);});
      a.setAttribute('href',href);
    });
    var walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null);
    var node;
    while(node=walker.nextNode()){
      var value=node.nodeValue;
      var next=value;
      replacements.forEach(function(pair){next=next.split(pair[0]).join(pair[1]);});
      if(next!==value)node.nodeValue=next;
    }
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',clean,{once:true});else clean();
})();
