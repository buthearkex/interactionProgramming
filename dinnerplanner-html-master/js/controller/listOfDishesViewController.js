var ListOfDishesViewController = function (view, model) {

    view.startersFilter.click(function () {
        view.updateAllDishes("starter", view.searchInput.val());
        view.dropdown.html('starter ' + '<span class="caret"></span>');
    });

    view.mainFilter.click(function () {
        view.updateAllDishes("main dish", view.searchInput.val());
        view.dropdown.html('main dish ' + '<span class="caret"></span>');
    });

    view.dessertFilter.click(function () {
        view.updateAllDishes("dessert", view.searchInput.val());
        view.dropdown.html('dessert ' + '<span class="caret"></span>');
    });

    view.allFilter.click(function () {
        view.updateAllDishes("", view.searchInput.val());
        view.dropdown.html('all ' + '<span class="caret"></span>');

    });

    view.searchButton.click(function () {
        var searchQuery = view.searchInput.val();
        var type = view.dropdown.text().trim();
        model.getAllDishes(type, searchQuery);
    });



}