(function(){

  var vitaElement = document.getElementById('vita');

  function show(){
    document.body.classList.remove('startanimation');
    vitaElement.hidden = false;
    vitaElement.offsetWidth;
    vitaElement.classList.remove('hidden');
  }

  function hide(){
    vitaElement.classList.add('hidden');
    setTimeout(function(){
      vitaElement.hidden = true;
    },500);
  }

  window.addEventListener('hashchange',function(){
    var hash = location.hash.substr(2);
    if (hash === 'vita') {
      show();
    } else {
      hide();
    }
  });

})();
