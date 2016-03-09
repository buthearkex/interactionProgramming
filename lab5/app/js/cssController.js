dinnerPlannerApp.controller('CssCtrl', function ($scope, Dinner) {

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


});