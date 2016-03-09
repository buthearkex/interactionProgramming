// Dinner controller that we use whenever we have view that needs to 
// display or modify the dinner menu
dinnerPlannerApp.controller('DinnerCtrl', function ($scope, Dinner) {

    $scope.firstTime = true;

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
      
    }*/

    $scope.init = function (query) {
        if ($scope.firstTime) {
            $scope.status = "updating...";
            Dinner.load();
            $scope.status = "updated!";
            $scope.firstTime = false;
        }
    }

    $scope.setCSS = function () {
        if ($('#wrapper').css('padding-left') == '250px') {
            $("#wrapper").css('padding-left', '0px');
        } else {
            $("#wrapper").css('padding-left', '250px');
        }
    }

    $scope.setPadding = function () {
        $("#wrapper").css('padding-left', '0px');
    }

    // TODO in Lab 5: Implement the methods to get the dinner menu
    // add dish to menu and get total menu price

});