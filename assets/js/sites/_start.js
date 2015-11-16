(function(){

  var startElement = document.getElementById('start');
  var articles = [];

  function init(){
    _.each(startElement.querySelectorAll('.article'),function(articleElement){
      new Article(articleElement);
    })
  }

  function Article(articleElement) {

    var aElement = articleElement.querySelector('a');
    var textElement = articleElement.querySelector('.text');
    var self = this;

    function init(){
      articles.push(self);
    }

    function handleClick(){
      if (!articleElement.classList.contains('open')) {
        open();
      } else {
        close();
        unsetOthersInactive();
      }
    }

    function setOthersInactive(){
      _.each(articles,function(article){
        if (article !== self) {
          article.setInactive();
        }
      });
    }

    function unsetOthersInactive(){
      _.each(articles,function(article){
        if (article !== self) {
          article.unsetInactive();
        }
      });
    }

    function closeOthers(){
      _.each(articles,function(article){
        if (article !== self) {
          article.close();
        }
      });
    }

    function open(){
      document.body.classList.remove('startanimation');
      closeOthers();
      setOthersInactive();
      self.unsetInactive();
      textElement.hidden = false;
      textElement.offsetWidth;
      articleElement.classList.add('open');
    }

    function close(){
      if (articleElement.classList.contains('open')) {
        articleElement.classList.remove('open');
        setTimeout(function(){
          textElement.hidden = true;
        },250);
      }
    }

    function setInactive(){
      articleElement.classList.add('inactive');
    }
    function unsetInactive(){
      articleElement.classList.remove('inactive');
    }

    this.open = open;
    this.close = close;
    this.setInactive = setInactive;
    this.unsetInactive = unsetInactive;

    aElement.addEventListener('click',handleClick);

    init();

  }

  function closeAllArticles(){
    _.each(articles,function(article){
      article.close();
      article.unsetInactive();
    });
  }

  function show(){
    startElement.hidden = false;
    startElement.offsetWidth;
    startElement.classList.remove('hidden');
  }

  function hide(){
    startElement.classList.add('hidden');
    setTimeout(function(){
      startElement.hidden = true;
    },500);
  }

  window.addEventListener('hashchange',function(){
    var hash = location.hash.substr(2);
    if (hash === '') {
      show();
    } else {
      hide();
    }
  });

  startElement.addEventListener('click',function(e){
    if (e.target === this || e.target.parentElement === this) {
      closeAllArticles();
    }
  });

  init();

})();
