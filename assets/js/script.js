(function(){

  _.each(PAGES,function(page){
    page.showHide();
  });
  if (location.hash.length <= 2) {
    document.body.classList.add('startanimation');
  }

})();
