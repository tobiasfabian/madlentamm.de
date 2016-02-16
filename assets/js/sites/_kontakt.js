(function () {

  'use strict';

  var id = 'kontakt';
  var scrollContainerElement = document.querySelector('.scroll-container');
  var kontaktElement = document.getElementById(id);
  var squareElement = kontaktElement.querySelector('.kontakt--square');
  var kontaktNavElement = document.getElementById('nav').querySelector('a[href="#!kontakt"]');
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
    kontaktNavElement.classList.add('active');
    if (window.innerWidth >= 768) {
      scrollContainerElement.style.transform = 'translate3d(0,-75%,0)';
    } else {
      scrollContainerElement.style.transform = 'translate3d(-75%,0,0)';
    }
    kontaktElement.hidden = false;
    ACTIVE_PAGE = selfObject;
  }

  function hide() {
    kontaktNavElement.classList.remove('active');
    kontaktElement.hidden = true;
  }

  function showHide() {
    var hash = location.hash.substr(2);
    if (hash === 'kontakt') {
      requestAnimationFrame(show);
    } else {
      requestAnimationFrame(hide);
    }
  }

  function moveSquare(e) {
    if (!kontaktElement.hidden) {
      var width = window.innerWidth;
      var height = window.innerHeight;
      var moveX = (width / 2 - e.clientX) / 800;
      var moveY = -(height / 2 - e.clientY) / 30000 + 1;
      requestAnimationFrame(function () {
        squareElement.style.transform = 'scale(' + moveY + ') rotate(' + moveX + 'deg)';
      });
    }
  }

  window.addEventListener('hashchange', showHide);
  window.addEventListener('mousemove', moveSquare);

  init();

}());
