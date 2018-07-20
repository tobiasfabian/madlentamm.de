(function(){

  'use strict';

  var windowElements = document.querySelectorAll('.window');

  _.each(windowElements, function(windowElement) {
    new Window(windowElement);
  });

  function Window(element) {

    var id = element.id;
    var aElement = document.querySelector('a[href="#!' +  id + '"]');

    function init() {
      var selfObject = {
        id: id,
        window: true,
        element: element,
        goBackToActivePage: goBackToActivePage,
        showHide: showHide
      };
      PAGES.push(selfObject);
    }

    function show() {
      aElement.classList.add('active');
      element.hidden = false;
    }

    function hide() {
      aElement.classList.remove('active');
      element.hidden = true;
    }

    function showHide() {
      var hash = location.hash.substr(2);
      if (hash === id) {
        show();
      } else {
        hide();
      }
    }

    function goBackToActivePage() {
      location.hash = '!'+ACTIVE_PAGE.id;
    }

    element.addEventListener('click', function (e) {
      if (e.target === element) {
        e.preventDefault();
        goBackToActivePage();
      }
    });

    aElement.addEventListener('click', function (e) {
      if (!element.hidden){
        e.preventDefault();
        goBackToActivePage();
      }
    });

    window.addEventListener('hashchange', showHide);

    init();

  }

}());
