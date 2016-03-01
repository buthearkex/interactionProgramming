var ListOfDishesViewController = function (view, model) {

    view.startersFilter.click(function () {
        view.updateButtons("starter", view.searchInput.val());
        view.dropdown.html('starter ' + '<span class="caret"></span>');
    });

    view.mainFilter.click(function () {
        view.updateButtons("main dish", view.searchInput.val());
        view.dropdown.html('main dish ' + '<span class="caret"></span>');
    });

    view.dessertFilter.click(function () {
        view.updateButtons("dessert", view.searchInput.val());
        view.dropdown.html('dessert ' + '<span class="caret"></span>');
    });

    view.allFilter.click(function () {
        view.updateButtons("all", view.searchInput.val());
        view.dropdown.html('all ' + '<span class="caret"></span>');

    });

    view.searchButton.click(function () {
        var searchQuery = view.searchInput.val();
        var type = view.dropdown.text().trim();
        view.updateButtons(type, searchQuery);
    });



}