(function () {
'use strict';

angular.module('common')
.component('loading', {
  template: '<img src="images/spinner.svg" ng-if="$ctrl.show">',
  controller: LoadingController
});

LoadingController.$inject = ['$rootScope'];
function LoadingController($rootScope) {
  var $ctrl = this;
  var removeListener;

  $ctrl.$onInit = function () {
    $ctrl.show = false;
    removeListener = $rootScope.$on('spinner:activate', onSpinnerActivate);
  };

  $ctrl.$onDestroy = function () {
    removeListener();
  };

  function onSpinnerActivate(event, data) {
    $ctrl.show = data.on;
  }
}

})();
