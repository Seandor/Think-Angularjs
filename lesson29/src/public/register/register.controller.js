(function () {
"use strict";

angular.module('public')
.controller('RegisterController', RegisterController);

RegisterController.$inject = ['RegistrationService', 'MenuService', '$state'];

function RegisterController(RegistrationService, MenuService, $state) {
  var regCtrl = this;

  regCtrl.submit = function () {
    var favDish = regCtrl.user.favdish;
    MenuService.getMenuItems(favDish).then(function (res) {
      if (res.menu_items.length !== 0) {
        regCtrl.user.favoriteDish = res.menu_items[0];
        RegistrationService.saveRegistrationInfo(regCtrl.user).then(function () {
          $state.go('public.userspace');
        });
      } else {
        regCtrl.dishInValid = true;
      }
    });
  };
}

})();
