dinnerPlannerApp.controller('OverviewCtrl', function ($scope, Dinner) {

  $scope.getMenu = Dinner.getFullMenu();

  $scope.getDishPrice = function (data) {
    return Dinner.getPriceOfDish(data);
  }

  $scope.getTotalMenuPrice = function () {
    return Dinner.getTotalMenuPrice();
  }

});
