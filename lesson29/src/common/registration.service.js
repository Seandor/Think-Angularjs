(function () {
'use strict';

angular.module('common')
.service('RegistrationService', RegistrationService);

RegistrationService.$inject = ['$q'];
function RegistrationService($q) {
  var service = this;
  service.localData = [];

  service.getRegistrationInfo = function () {
    var deferred = $q.defer();
    if (service.localData.length !== 0) {
      deferred.resolve(service.localData[0]);
    } else {
      deferred.reject();
    }
    return deferred.promise;
  };

  service.saveRegistrationInfo = function (userInfo) {
    var deferred = $q.defer();
    service.localData.push(userInfo);
    deferred.resolve();
    return deferred.promise;
  };
}

})();
