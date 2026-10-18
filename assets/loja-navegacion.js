/* Back button stays within the Aula when there is a safe same-site referrer;
   otherwise it follows the documented parent page. No history/storage tracking. */
(function(){
'use strict';
document.querySelectorAll('[data-loja-volver]').forEach(function(btn){
  btn.addEventListener('click',function(){
    var fallback=btn.getAttribute('data-fallback')||'index.html';
    var safe=false;
    try{
      var ref=new URL(document.referrer);
      var here=new URL(window.location.href);
      var root='/aula-activos-comunitarios/';
      safe=ref.origin===here.origin && ref.pathname.indexOf(root)===0 && ref.pathname!==here.pathname;
    }catch(e){}
    if(safe&&window.history.length>1){window.history.back();}
    else {window.location.assign(fallback);}
  });
});
})();