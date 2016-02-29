var ListOfDishesViewController = function (view, model) {

    view.startersFilter.click(function () {
        view.update("starter");
        view.dropdown.html('starter ' + '<span class="caret"></span>');
    });

    view.mainFilter.click(function () {
        view.update("main dish");
        view.dropdown.html('main dish ' + '<span class="caret"></span>');
    });

    view.dessertFilter.click(function () {
        view.update("dessert");
        view.dropdown.html('dessert ' + '<span class="caret"></span>');
    });

    view.allFilter.click(function () {
        view.update("all");
        console.log(view.dropdown);
        view.dropdown.html('all ' + '<span class="caret"></span>');

    });

    view.searchButton.click(function () {
        var searchQuery = view.searchInput.val();
        var type = view.dropdown.text().trim();
        view.update(type, searchQuery);
    });



}