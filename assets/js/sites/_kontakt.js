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
    if (window.innerWidth >= 768) {
      kontaktNavElement.classList.add('active');
      scrollContainerElement.style.webkitTransform = 'translate(0, -75%)';
      scrollContainerElement.style.transform = 'translate(0, -75%)';
      ACTIVE_PAGE = selfObject;
    } else {
      scrollTo(document.documentElement, kontaktElement.offsetTop, 400);
      scrollTo(document.body, kontaktElement.offsetTop, 400);
    }
    kontaktElement.hidden = false;
  }

  function hide() {
    kontaktNavElement.classList.remove('active');
    if (window.innerWidth >= 768) {
      kontaktElement.hidden = true;
    }
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
