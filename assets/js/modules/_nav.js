(function () {

  'use strict';

  var mainElement = document.querySelector('.main');
  var navElement = document.getElementById('nav');
  var hamburgerElement = navElement.querySelector('.hamburger');
  var aElements = navElement.querySelectorAll('a');

  function handleClickHamburgerElement(e) {
    if (window.innerWidth < 768) {
      e.preventDefault();
      if (navElement.classList.contains('active')) {
        hideNav();
      } else {
        showNav();
      }
    }
  }

  function handleClickAElement() {
    if (this.classList.contains('active')) {
      hideNav();
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

  hamburgerElement.addEventListener('click', handleClickHamburgerElement);
  _.each(aElements, function (aElement) {
    aElement.addEventListener('click', handleClickAElement);
  });
  window.addEventListener('hashchange', hideNav);

}());
