/* globals _ */
/* globals PAGES */
/* globals ACTIVE_PAGE: true */


(function () {

  'use strict';

  function showHideAllPages() {
    _.each(PAGES,function(page){
      page.showHide();
    });
  }

  if (location.hash.length <= 2) {
    document.body.classList.add('startanimation');
  }
  showHideAllPages();

  window.addEventListener('resize', showHideAllPages);

}());
