(function(){

  'use strict';

  var aElements = document.querySelectorAll('header h2 a');

  _.each(aElements, function(aElement) {
    new Window(aElement);
  });

  function Window(aElement) {

    var id = aElement.dataset.id;
    var element = document.getElementById(id);

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
