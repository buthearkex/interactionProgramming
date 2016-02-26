var ListOfDishesViewController = function (view, model) {

    view.startersFilter.click(function () {
        view.update("Starter");
    });

    view.mainFilter.click(function () {
        view.update("Main Dish");
    });

    view.dessertFilter.click(function () {
        view.update("Dessert");
    });


}