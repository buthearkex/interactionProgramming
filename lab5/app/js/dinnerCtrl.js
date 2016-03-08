// Dinner controller that we use whenever we have view that needs to 
// display or modify the dinner menu
dinnerPlannerApp.controller('DinnerCtrl', function ($scope, Dinner) {

  $scope.numberOfGuests = Dinner.getNumberOfGuests();

  $scope.fullMenu = Dinner.getFullMenu();

  $scope.setNumberOfGuest = function (number) {
    Dinner.setNumberOfGuests(number);
  }

  $scope.getTotalMenuPrice = function () {
    return Dinner.getTotalMenuPrice();
  }

  $scope.getDishPrice = function (data) {
    return Dinner.getPriceOfDish(data);
  }

  $scope.removeDish = function (id) {
    Dinner.removeDishFromMenu(id);
  }

  /*$scope.init = function () {
  Dinner.getFullIDs.forEach(ids) {
    Dinner.Dish.get({
      id: ids
    }, function (data) {
      $scope.dish = data;
      $scope.getTotalPrice = function () {
        return Dinner.getPriceOfDish($scope.dish);
      }
      $scope.status = "Showing result";
    }, function (data) {
      $scope.status = "There was an error";
    });
  }
}*/
  
  // TODO in Lab 5: Implement the methods to get the dinner menu
  // add dish to menu and get total menu price

});
