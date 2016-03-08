dinnerPlannerApp.controller('PrintCtrl', function ($scope, Dinner) {

  $scope.getMenu = Dinner.getFullMenu();

});
