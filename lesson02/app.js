(function () {

'use strict';

angular.module('myFirstApp', [])
.controller('MyFirstController', function ($scope) {
	$scope.name = "Sean";
	$scope.sayHello = function () {
		return "Hello Coursera!";
	};
});

})();