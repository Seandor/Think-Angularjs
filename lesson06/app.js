(function () {
"use strict";

angular.module("MsgApp", [])
.controller('MsgController', MsgController);

function MsgController($scope) {
	$scope.name = "Yaakov";
	$scope.stateOfBeing = "hungry";

	$scope.sayMessage = function () {
		return "Yaakov likes to eat healthy snacks at night!";
	};

	$scope.feedYaakov = function () {
		$scope.stateOfBeing = "fed";
	};
}

})();