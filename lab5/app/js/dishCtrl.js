// Dinner controller that we use whenever we want to display detailed
// information for one dish
dinnerPlannerApp.controller('DishCtrl', function ($scope, $routeParams, Dinner) {

  // TODO in Lab 5: you need to get the dish according to the routing parameter
  // $routingParams.paramName
  // Check the app.js to figure out what is the paramName in this case

  $scope.getNumberOfGuests = function () {
    return Dinner.getNumberOfGuests();
  }

  $scope.getInfo = function () {
    $scope.status = "Searching...";
    Dinner.Dish.get({
      id: $routeParams.dishId
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

  $scope.setToMenu = function (dish) {
    Dinner.addDishToMenu(dish);
  }

});
