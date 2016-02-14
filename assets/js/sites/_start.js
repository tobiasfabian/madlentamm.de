(function(){

  var id = 'start';
  var scrollContainerElement = document.querySelector('.scroll-container');
  var startElement = document.getElementById(id);
  var startNavElement = document.getElementById('nav').querySelectorAll('a[href="#!"]')[1];
  var terms = [];
  var openTerm;
  var draw = SVG('start--drawing');
  var moveIsAllowed = true;
  var selfObject;

  function init(){
    _.each(startElement.querySelectorAll('.start--term'),function(termElement){
      new Term(termElement);
    })
    selfObject = {
      id: '',
      page: true,
      showHide: showHide
    };
    PAGES.push(selfObject);
    ACTIVE_PAGE = selfObject;
  }

  function Term(termElement) {

    var aElement = termElement.querySelector('a');
    var h1Element = aElement.querySelector('h1');
    var textElement = termElement.querySelector('.text');
    var self = this;
    var linesTo = [];
    var id = termElement.dataset.id;
    var lines = [];
    var randomMove = _.random(150, 250);
    var moveX = 0;
    var moveY = 0;

    function init(){
      terms.push(self);
      linesTo = termElement.dataset.connection.split(',');
    }

    function getX(termElement,h1Element){
      var x = termElement.offsetLeft - 15 + 40 - moveX;
      return x;
    }
    function getY(termElement,h1Element){
      var y = termElement.offsetTop + h1Element.offsetHeight/2 + 40 - moveY;
      return y;
    }
    function getX2(termElement,h1Element){
      var x = termElement.offsetLeft - 15 + 40 - moveX;
      return x;
    }
    function getY2(termElement,h1Element){
      var y = termElement.offsetTop + h1Element.offsetHeight/2 + 40 - moveY;
      return y;
    }

    function drawLines(){
      if (window.innerWidth >= 768) {
        var x1 = getX(termElement,h1Element);
        var y1 = getY(termElement,h1Element);
        _.each(linesTo,function(to){
          var line = draw.line(x1, y1, x1, y1);
          line.filter(function(add){
            add.gaussianBlur(1);
          });
          var term = _.find(terms,function(term){
            return to === term.id;
          });
          line.toTerm = term;
          lines.push(line);
          try {
            var x2 = getX2(term.termElement,term.h1Element);
            var y2 = getY(term.termElement,term.h1Element);
            line.animate(200, '<', 0).plot([[x1,y1],[x2,y2]]);
          } catch(error) {
            console.error(error);
            console.error('id: '+id);
          }
        });
      }
    }

    function removeLines(){
      _.each(lines,function(line){
        var x1 = getX(termElement,h1Element);
        var y1 = getY(termElement,h1Element);
        line.animate(200, '<', 0).plot([[x1,y1],[x1,y1]]).after(function(){
          this.remove();
        });
      })
    }

    function updateLines(){
      _.each(lines,function(line){
        var x1 = getX(termElement,h1Element);
        var y1 = getY(termElement,h1Element);
        var term = line.toTerm;
        try {
          var x2 = getX2(term.termElement,term.h1Element);
          var y2 = getY(term.termElement,term.h1Element);
          line.plot([[x1,y1],[x2,y2]]);
        } catch(error) {
          console.error(error);
          console.error('id: '+id);
        }
      });
    }

    function handleClick(e){
      moveIsAllowed = true;
      _.each(terms,function(term){
        term.moveElement(e);
      });
      if (!termElement.classList.contains('open')) {
        open();
      } else {
        close();
        unsetOthersInactive();
      }
    }

    function setOthersInactive(){
      _.each(terms,function(term){
        if (term !== self) {
          term.setInactive();
        }
      });
    }

    function unsetOthersInactive(){
      _.each(terms,function(term){
        if (term !== self) {
          term.unsetInactive();
        }
      });
    }

    function closeOthers(){
      _.each(terms,function(term){
        if (term !== self) {
          term.close();
        }
      });
    }

    function open(){
      document.body.classList.remove('startanimation');
      closeOthers();
      setOthersInactive();
      unsetInactive();
      textElement.hidden = false;
      if (window.innerWidth < 768) {
        var height = textElement.offsetHeight;
        textElement.style.height = '0';
        textElement.style.paddingTop = '0';
        textElement.style.paddingBottom = '0';
        textElement.offsetWidth;
        textElement.style.height = height + 'px';
        textElement.style.padding = null;
      }
      termElement.classList.add('open');
      drawLines();
      openTerm = self;
      moveIsAllowed = false;
    }

    function close(){
      if (termElement.classList.contains('open')) {
        termElement.classList.remove('open');
        removeLines();
        moveIsAllowed = true;
        if (window.innerWidth < 768) {
          textElement.style.height = '0';
        }
        setTimeout(function(){
          textElement.hidden = true;
          textElement.style.height = null;
        },200);
      }
    }

    function setInactive(){
      termElement.classList.add('inactive');
    }
    function unsetInactive(){
      termElement.classList.remove('inactive');
    }

    function moveElement(e){
      if (moveIsAllowed && window.innerWidth >= 768) {
        var width = window.innerWidth;
        var height = window.innerHeight;
        moveX = (width/2 - e.clientX) / randomMove;
        moveY = (height/2 - e.clientY) / randomMove;
        requestAnimationFrame(function(){
          termElement.style.transform = 'translate3d('+moveX+'px,'+moveY+'px,0)';
        });
        // updateLines()
      }
    }

    aElement.addEventListener('click',handleClick);
    window.addEventListener('mousemove',moveElement);

    this.open = open;
    this.close = close;
    this.setInactive = setInactive;
    this.unsetInactive = unsetInactive;
    this.id = id;
    this.termElement = termElement;
    this.h1Element = h1Element;
    this.updateLines = updateLines;
    this.moveElement = moveElement;

    init();

  }

  function closeAllterms(){
    _.each(terms,function(term){
      term.close();
      term.unsetInactive();
    });
  }

  function show(){
    startNavElement.classList.add('active');
    scrollContainerElement.style.transform = 'translate3d(0,0%,0)';
    startElement.hidden = false;
    ACTIVE_PAGE = selfObject;
  }

  function hide(){
    startNavElement.classList.remove('active');
    closeAllterms();
    startElement.hidden = true;
  }

  function showHide(){
    var hash = location.hash.substr(2);
    if (hash === '') {
      requestAnimationFrame(show);
    } else {
      requestAnimationFrame(hide);
    }
  }

  window.addEventListener('hashchange',showHide);
  window.addEventListener('resize',function(){
    if (openTerm) {
      openTerm.updateLines();
    }
  })


  startElement.addEventListener('click',function(e){
    if (e.target === this
      || e.target.parentElement === this
      || e.target.classList.contains('start--term')) {
      closeAllterms();
    }
    _.each(terms,function(term){
      term.moveElement(e);
    });
  });

  init();

})();
