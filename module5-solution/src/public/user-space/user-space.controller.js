(function () {
"use strict";

angular.module('public')
.controller('UserspaceController', UserspaceController);

UserspaceController.$inject = ['RegistrationService'];

function UserspaceController(RegistrationService) {
  var userCtrl = this;
  userCtrl.registered = false;

  RegistrationService.getRegistrationInfo().then(function (response) {
    userCtrl.userInfo = response;
    userCtrl.registered = true;
  }).catch(function (error) {
    userCtrl.registered = false;
  });
}

})();
