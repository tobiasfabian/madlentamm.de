(function(){

<<<<<<< HEAD
  var vitaElement = document.getElementById('vita');
  var vitaNavElement = document.getElementById('nav').querySelector('a[href="#!vita"]');
=======
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

  function Images(){

    var image01 = vitaImageElement.querySelector('img:nth-child(1)');
    var image02 = vitaImageElement.querySelector('img:nth-child(2)');
    var image03 = vitaImageElement.querySelector('img:nth-child(3)');
    var image04 = vitaImageElement.querySelector('img:nth-child(4)');
    var image05 = vitaImageElement.querySelector('img:nth-child(5)');

    var images = [image01,image02,image03,image04,image05];

    function init(){
      reset();
    }

    function show(){
      for(var i = 0; i < images.length; i++) {
        var delay = (i+1)*150;
        _.delay(function(image){
          image.hidden = false;
        },delay,images[i]);
      }
    }

    function hide(){
      for(var i = images.length-1; i >= 0; i--) {
        var delay = (Math.abs(i-images.length)+1)*150;
        _.delay(function(image){
          image.hidden = true;
        },delay,images[i]);
      }
    }

    function reset(){
      _.each(images,function(image){
        image.hidden = true;
      });
    }

    init();

    this.show = show;
    this.hide = hide;
    this.reset = reset;

  };

  var images = new Images();

>>>>>>> light

  function show(){
    vitaNavElement.classList.add('active');
    scrollContainerElement.style.transform = 'translate3d(0,-25%,0)';
    vitaElement.hidden = false;
<<<<<<< HEAD
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
=======
    ACTIVE_PAGE = selfObject;
    images.show();
  }

  function hide(){
    vitaNavElement.classList.remove('active');
    vitaElement.hidden = true;
    images.hide();
>>>>>>> light
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
