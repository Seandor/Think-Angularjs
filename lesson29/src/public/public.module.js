(function () {
"use strict";
// if a module like common module, didn't required by some other module,
// the common module code won't be used.
angular.module('public', ['ui.router', 'common']);

})();
