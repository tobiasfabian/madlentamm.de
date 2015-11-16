(function(){

  var vitaElement = document.getElementById('vita');
  var vitaNavElement = document.getElementById('nav').querySelector('a[href="#!vita"]');

  function show(){
    document.body.classList.remove('startanimation');
    vitaElement.hidden = false;
    vitaElement.offsetWidth;
    vitaNavElement.classList.add('active');
    vitaElement.classList.remove('hidden');
  }

  function hide(){
    vitaElement.classList.add('hidden');
    vitaNavElement.classList.remove('active');
    setTimeout(function(){
      vitaElement.hidden = true;
    },600);
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
