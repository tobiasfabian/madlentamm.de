(function(){

  if (location.hash.length > 2) {
    _.each(PAGES,function(page){
      page.showHide();
    });
  } else {
    document.body.classList.add('startanimation');
  }

})();
