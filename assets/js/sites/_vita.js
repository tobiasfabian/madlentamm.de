(function () {

  'use strict';

  var id = 'vita';
  var scrollContainerElement = document.querySelector('.scroll-container');
  var vitaElement = document.getElementById(id);
  var vitaNavElement = document.getElementById('nav').querySelector('a[href="#!vita"]');
  var selfObject;

  function init() {
    selfObject = {
      id: id,
      page: true,
      showHide: showHide
    };
    PAGES.push(selfObject);
  }

  function show() {
    if (window.innerWidth >= 768) {
      vitaNavElement.classList.add('active');
      scrollContainerElement.style.webkitTransform = 'translate(0, -25%)';
      scrollContainerElement.style.transform = 'translate(0, -25%)';
      ACTIVE_PAGE = selfObject;
    } else {
      scrollTo(document.documentElement, vitaElement.offsetTop, 400);
      scrollTo(document.body, vitaElement.offsetTop, 400);
    }
    vitaElement.hidden = false;
  }

  function hide() {
    vitaNavElement.classList.remove('active');
    if (window.innerWidth >= 768) {
      vitaElement.hidden = true;
    }
  }

  function showHide() {
    var hash = location.hash.substr(2);
    if (hash === 'vita') {
      requestAnimationFrame(show);
    } else {
      requestAnimationFrame(hide);
    }
  }

  window.addEventListener('hashchange', showHide);

  init();

}());
