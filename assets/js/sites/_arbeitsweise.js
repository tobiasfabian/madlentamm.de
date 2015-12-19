(function(){

  var id = 'arbeitsweise';
  var scrollContainerElement = document.querySelector('.scroll-container');
  var arbeitsweiseElement = document.getElementById(id);
  var arbeitsweiseNavElement = document.getElementById('nav').querySelector('a[href="#!arbeitsweise"]');
  var selfObject;

  function init(){
    selfObject = {
      id: id,
      page: true,
      showHide: showHide
    };
    PAGES.push(selfObject);
  }

  (function Gallery(){

    var galleryElement = arbeitsweiseElement.querySelector('.arbeitsweise--gallery');
    var imagesElement = arbeitsweiseElement.querySelector('.arbeitsweise--gallery--images');
    var containerElement = imagesElement.querySelector('.arbeitsweise--gallery--images--container');
    var previousElement = galleryElement.querySelector('.arbeitsweise--gallery--nav--previous');
    var nextElement = galleryElement.querySelector('.arbeitsweise--gallery--nav--next');

    var images = containerElement.children;
    var imageIndex = 0;

    function moveContainerElement(){
      var x = imageIndex*100;
      containerElement.style.transform = 'translate3d(-'+x+'%,0,0)';
    }

    function showPreviousImage(){
      imageIndex--;
      if (imageIndex >= 0) {
        moveContainerElement();
      } else {
        imageIndex = images.length-1;
        var duration = (images.length-1)*150;
        containerElement.style.transitionDuration = duration+'ms';
        moveContainerElement();
        setTimeout(function(){
          containerElement.style.transitionDuration = null;
        },duration);
      }
    }

    function showNextImage(){
      imageIndex++;
      if (imageIndex < images.length) {
        moveContainerElement();
      } else {
        imageIndex = 0;
        var duration = (images.length-1)*150;
        containerElement.style.transitionDuration = duration+'ms';
        moveContainerElement();
        setTimeout(function(){
          containerElement.style.transitionDuration = null;
        },duration);
      }
    }

    previousElement.addEventListener('click',showPreviousImage);
    nextElement.addEventListener('click',showNextImage);

  })();

  function show(){
    arbeitsweiseNavElement.classList.add('active');
    scrollContainerElement.style.transform = 'translate3d(0,-50%,0)';
    arbeitsweiseElement.hidden = false;
    ACTIVE_PAGE = selfObject;
  }

  function hide(){
    arbeitsweiseNavElement.classList.remove('active');
    arbeitsweiseElement.hidden = true;
  }

  function showHide(){
    var hash = location.hash.substr(2);
    if (hash === 'arbeitsweise') {
      requestAnimationFrame(show);
    } else {
      requestAnimationFrame(hide);
    }
  }

  function moveSquare(e){
    //
  }

  window.addEventListener('hashchange',showHide);
  window.addEventListener('mousemove',moveSquare);

  init();

})();
