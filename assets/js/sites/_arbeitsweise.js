(function () {

  'use strict';

  var id = 'arbeitsweise';
  var scrollContainerElement = document.querySelector('.scroll-container');
  var arbeitsweiseElement = document.getElementById(id);
  var arbeitsweiseNavElement = document.getElementById('nav').querySelector('a[href="#!arbeitsweise"]');
  var selfObject;

  function init() {
    selfObject = {
      id: id,
      page: true,
      showHide: showHide
    };
    PAGES.push(selfObject);
  }

  (function Gallery() {

    var galleryElement = arbeitsweiseElement.querySelector('.arbeitsweise--gallery');
    var imagesElement = arbeitsweiseElement.querySelector('.arbeitsweise--gallery--images');
    var imagesContainerElement = imagesElement.querySelector('.arbeitsweise--gallery--images--container');
    var alternativePreviousElement = imagesElement.querySelector('.arbeitsweise--gallery--images--alternative-nav--previous');
    var alternativeNextElement = imagesElement.querySelector('.arbeitsweise--gallery--images--alternative-nav--next');
    var previousElement = galleryElement.querySelector('.arbeitsweise--gallery--nav--previous');
    var nextElement = galleryElement.querySelector('.arbeitsweise--gallery--nav--next');
    var captionsContainerElement = galleryElement.querySelector('.arbeitsweise--gallery--captions--container');

    var images = imagesContainerElement.children;
    var imageIndex = 0;

    function moveContainerElements() {
      var x = imageIndex * 100;
      imagesContainerElement.style.transform = 'translate3d(-'+x+'%,0,0)';
      captionsContainerElement.style.transform = 'translate3d(-'+x+'%,0,0)';
    }

    function handleNavAppearance() {
      if (imageIndex === 0) {
        previousElement.classList.add('inactive');
      } else {
        previousElement.classList.remove('inactive');
      }
      if(imageIndex === images.length - 1) {
        nextElement.classList.add('inactive');
      } else {
        nextElement.classList.remove('inactive');
      }
    }

    function showPreviousImage() {
      imageIndex--;
      if (imageIndex >= 0) {
        moveContainerElements();
      } else {
        imageIndex = images.length - 1;
        var duration = (images.length - 1) * 100;
        imagesContainerElement.style.transitionDuration = duration+'ms';
        captionsContainerElement.style.transitionDuration = duration+'ms';
        moveContainerElements();
        setTimeout(function () {
          imagesContainerElement.style.transitionDuration = null;
          captionsContainerElement.style.transitionDuration = null;
        }, duration);
      }
      handleNavAppearance();
    }

    function showNextImage() {
      imageIndex++;
      if (imageIndex < images.length) {
        moveContainerElements();
      } else {
        imageIndex = 0;
        var duration = (images.length-1)*100;
        imagesContainerElement.style.transitionDuration = duration + 'ms';
        captionsContainerElement.style.transitionDuration = duration + 'ms';
        moveContainerElements();
        setTimeout(function () {
          imagesContainerElement.style.transitionDuration = null;
          captionsContainerElement.style.transitionDuration = null;
        }, duration);
      }
      handleNavAppearance();
    }

    previousElement.addEventListener('click', showPreviousImage);
    nextElement.addEventListener('click', showNextImage);
    alternativePreviousElement.addEventListener('click', showPreviousImage);
    alternativeNextElement.addEventListener('click', showNextImage);
    document.addEventListener('keydown',function (e) {
      if (location.hash.substr(2) === 'arbeitsweise') {
        if (e.keyCode === 39 || e.keyCode === 74) { // key left
          showNextImage();
        } else if (e.keyCode === 37) { // key left
          showPreviousImage();
        }
      }
    });

    handleNavAppearance();

  }());

  function show() {
    arbeitsweiseNavElement.classList.add('active');
    if (window.innerWidth >= 768) {
      scrollContainerElement.style.transform = 'translate3d(0,-50%,0)';
    } else {
      scrollContainerElement.style.transform = 'translate3d(-50%,0,0)';
    }
    arbeitsweiseElement.hidden = false;
    ACTIVE_PAGE = selfObject;
  }

  function hide() {
    arbeitsweiseNavElement.classList.remove('active');
    arbeitsweiseElement.hidden = true;
  }

  function showHide() {
    var hash = location.hash.substr(2);
    if (hash === 'arbeitsweise') {
      requestAnimationFrame(show);
    } else {
      requestAnimationFrame(hide);
    }
  }

  window.addEventListener('hashchange', showHide);

  init();

}());
