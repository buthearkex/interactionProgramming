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
    //$('#dropdown-text').html('All' + '<span class="caret"></span>');

  });

  view.searchButton.click(function () {
    //get text in field
    var searchQuery = view.searchInput.val();
    console.log(searchQuery);
    var type = view.dropdown.text();
    view.update(type, searchQuery);
  });



}
