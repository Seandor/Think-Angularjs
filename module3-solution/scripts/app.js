(function () {
"use strict";

angular.module("NarrowItDownApp", [])
.controller("NarrowItDownController", NarrowItDownController)
.directive("foundItems", FoundItems)
.service("MenuSearchService", MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

function FoundItems() {
  var ddo = {
    templateUrl: "views/foundItems.html",
    scope: {
      items: "<",
      errorMessage: "<",
      onRemove: "&"
    },
    controller: FoundItemsDerectiveController,
		controllerAs: 'found',
    bindToController: true
  };

  return ddo;
}

function FoundItemsDerectiveController() {

}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var list = this;
  list.searchTerm = "";
  list.errorMessage = "";

  list.getSearchResult = function (searchTerm) {
    if (searchTerm) {
      var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

      promise.then(function (result) {
        // console.log("search Term is: ", list.searchTerm);
        // console.log("search result is: ", result);
        if (result.length !== 0) {
          list.found = result;
          list.errorMessage = "";
        } else {
          list.errorMessage = "Nothing found";
        }
      });
    } else {
      list.errorMessage = "Nothing found";
      list.found = "";
    }

  };

  list.removeFoundItems = function (index) {
    list.found.splice(index, 1);
  };
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    })
    .then(function (response) {
      var menuItems = response.data.menu_items;
      var foundItems = [];
      for (var i = 0; i < menuItems.length; i++) {
        if (menuItems[i].description.toLowerCase().indexOf(searchTerm) !== -1) {
          foundItems.push(menuItems[i]);
        }
      }
      return foundItems;
    })
    .catch(function (error) {
      console.log("Something went terribly wrong!");
    });
  };
}

})();
