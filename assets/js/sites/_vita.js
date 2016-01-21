(function(){

  var id = 'vita';
  var scrollContainerElement = document.querySelector('.scroll-container');
  var vitaElement = document.getElementById(id);
  var vitaImageElement = vitaElement.querySelector('.vita--image');
  var vitaNavElement = document.getElementById('nav').querySelector('a[href="#!vita"]');
  var bodyElement = document.body;
  var selfObject;

  function init(){
    selfObject = {
      id: id,
      page: true,
      showHide: showHide
    };
    PAGES.push(selfObject);
  }


  function show(){
    vitaNavElement.classList.add('active');
    scrollContainerElement.style.transform = 'translate3d(0,-25%,0)';
    vitaElement.hidden = false;
    ACTIVE_PAGE = selfObject;
  }

  function hide(){
    vitaNavElement.classList.remove('active');
    vitaElement.hidden = true;
  }

  function showHide(){
    var hash = location.hash.substr(2);
    if (hash === 'vita') {
      requestAnimationFrame(show);
    } else {
      requestAnimationFrame(hide);
    }
  }

  window.addEventListener('hashchange',showHide);

  init();

})();
