'use strict';
(function () {
  var DEBOUNCE_INTERVAL = 500;

  var lastTimeout = null;
  var debounce = function (fun) {

    return function () {
      var args = arguments;
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(function () {
        fun.apply(null, args);
      }, DEBOUNCE_INTERVAL);
    };
  };
  window.debounse = {
    debounce: debounce
  };
})();
