(function(){

  var delta = 0;
  var scrollingAllowed = true;

  function showNextPage(){
    var index = _.findIndex(PAGES,function(page){
      return page === ACTIVE_PAGE;
    });
    if (index !== -1 && PAGES[index+1] && PAGES[index+1].page) {
      location.hash = '#!'+PAGES[index+1].id;
      delta = 0;
      scrollingAllowed = false;
      setTimeout(function(){
        scrollingAllowed = true;
      },1000)
    }
  }

  function showPreviousPage(){
    var index = _.findIndex(PAGES,function(page){
      return page === ACTIVE_PAGE;
    });
    if (index !== -1 && PAGES[index-1] && PAGES[index-1].page) {
      location.hash = '#!'+PAGES[index-1].id;
      delta = 0;
      scrollingAllowed = false;
      setTimeout(function(){
        scrollingAllowed = true;
      },1000)
    }
  }

  function handleMousewheel(e){
    e.preventDefault();
    if (scrollingAllowed) {
      delta += e.wheelDelta || -e.deltaY;
      if (delta < -10) {
        showNextPage();
      } else if (delta > 10) {
        showPreviousPage();
      }
    }
  }

  // document.addEventListener('mousewheel',handleMousewheel);
  document.addEventListener('wheel',handleMousewheel);
  document.addEventListener('keydown',function(e){
    if (e.keyCode === 40 || e.keyCode === 74) { // key down or j
      showNextPage();
    } else if (e.keyCode === 38 ||  e.keyCode === 75) { // key up or k
      showPreviousPage();
    } else if (e.keyCode === 27) { // esc
      var openWindow = _.find(PAGES,function(page){
        return page.window && !page.element.hidden;
      });
      if (openWindow) {
        openWindow.goBackToActivePage();
      }
    }
  })

})();
