(function () {
"use strict";

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
	$scope.dishes = "";
	$scope.message = "";
	$scope.messageColor = "#ccc";

	$scope.check = function () {
		if ($scope.dishes === "") {
			$scope.message = "Please enter data first!";
			$scope.messageColor = "red";
			return;
		}
		var numberOfDishes = 0;
		var dishData = $scope.dishes.split(',');
		for (var idx = 0; idx < dishData.length; idx++) {
			console.log(dishData[idx].trim());
			if (dishData[idx].trim()) {
				numberOfDishes += 1;
			}
		}
		$scope.messageColor = "green";
		$scope.message = numberOfDishes <= 3 ? "Enjoy!" : "Too much!";
	};
}
})();