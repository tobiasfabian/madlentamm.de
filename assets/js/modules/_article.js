function articles(){
  function Article(articleElement) {

    var aElement = articleElement.querySelector('a');
    var textElement = articleElement.querySelector('.text');

    aElement.addEventListener('click',toggleOpen);

    function toggleOpen() {
      if (!articleElement.classList.contains('active')) {
        setAllArticlesToHidden(articleElement);
        textElement.hidden = false;
        textElement.offsetWidth;
        articleElement.classList.remove('hidden');
        articleElement.classList.add('active');
      } else {
        removeHiddenFromAllArticles();
        articleElement.classList.remove('active');
      }
    }

  }

  function closeAllArticles(exeptArticleElement) {
    _.each(articleElements,function(articleElement){
      if (articleElement !== exeptArticleElement) {
        articleElement.classList.remove('active');
        setTimeout(function(){
          articleElement.hidden = true;
        },350);
      }
    });
  }

  function setAllArticlesToHidden(exeptArticleElement) {
    _.each(articleElements,function(articleElement){
      articleElement.classList.remove('active');
      if (articleElement !== exeptArticleElement) {
        articleElement.classList.add('hidden');
      }
    });
  }

  function removeHiddenFromAllArticles() {
    _.each(articleElements,function(articleElement){
      articleElement.classList.remove('hidden');
    });
  }

  var articleElements = document.querySelectorAll('.article');
  _.each(articleElements,function(articleElement){
    new Article(articleElement);
  })
}

articles();
