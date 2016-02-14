(function(){

  var mainElement = document.querySelector('.main');
  var navElement = document.getElementById('nav');
  var hamburgerElement = navElement.querySelector('.hamburger');

  function handleClick(e) {
    if (window.innerWidth < 768) {
      e.preventDefault();
      if (navElement.classList.contains('active')) {
        hideNav();
      } else {
        showNav();
      }
    }
  }

  function showNav() {
    navElement.classList.add('active');
    mainElement.classList.add('inactive');
  }

  function hideNav() {
    navElement.classList.remove('active');
    mainElement.classList.remove('inactive');
  }

  hamburgerElement.addEventListener('click',handleClick);
  window.addEventListener('hashchange',hideNav);

})();
