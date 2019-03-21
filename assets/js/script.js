/* globals _ */
/* globals PAGES */
/* globals ACTIVE_PAGE: true */


(function () {

  'use strict';

  function showHideAllPages() {
    var scrollContainerElement = document.querySelector('.scroll-container');
    _.each(PAGES,function(page){
      page.showHide();
    });
    if (window.innerWidth < 768) {
      scrollContainerElement.style.webkitTransform = '';
      scrollContainerElement.style.transform = '';
    }
  }

  if (location.hash.length <= 2) {
    document.body.classList.add('startanimation');
  }
  showHideAllPages();

  window.addEventListener('resize', showHideAllPages);

}());
