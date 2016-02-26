var ListOfDishesViewController = function (view, model) {

    view.startersFilter.click(function () {
        view.update("starter");
    });

    view.mainFilter.click(function () {
        view.update("main dish");
    });

    view.dessertFilter.click(function () {
        view.update("dessert");
    });

    view.allFilter.click(function () {
        view.update("all");
    });


}