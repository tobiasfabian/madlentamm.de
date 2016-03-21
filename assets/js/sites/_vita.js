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
    vitaNavElement.classList.add('active');
    if (window.innerWidth >= 768) {
      scrollContainerElement.style.webkitTransform = 'translate(0, -25%)';
      scrollContainerElement.style.transform = 'translate(0, -25%)';
    } else {
      scrollContainerElement.style.webkitTransform = 'translate(-25%, 0)';
      scrollContainerElement.style.transform = 'translate(-25%, 0)';
    }
    vitaElement.hidden = false;
    ACTIVE_PAGE = selfObject;
  }

  function hide() {
    vitaNavElement.classList.remove('active');
    vitaElement.hidden = true;
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
