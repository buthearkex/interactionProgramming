var RecipeView = function (container, model) {

  model.addObserver(this);

  this.recipe = container.find('#recipe-container');

  this.updateRecipe = function () {
    var menuItems = model.getFullMenu();
    this.recipe.empty();
    for (var i = 0; i < menuItems.length; i++) {
      this.recipe.append(
        "<div class='row recip'>" +
        "<div class='col-md-5'>" +
        "<img class='food-pic' src='" +
        menuItems[i].ImageURL +
        "'>" +
        "<h3>" +
        menuItems[i].Title +
        "</h3>" +
        "<p>" +
        menuItems[i].Description +
        "</p>" +
        "</div>" +
        "<div class='col-md-7'>" +
        "<h4>PREPARATION</h4>" +
        "<p>" +
        menuItems[i].Description +
        "</p>" +
        "</div>" +
        "</div>"
      );
    }
    if (menuItems.length == 0) {
      this.recipe.html(
        "<div>" +
        "You haven't selected any dishes!" +
        "</div>"
      );
    }
  }

  this.hide = function () {
    container.hide();
  }

  this.show = function () {
    container.show();
  }

  this.update = function (data, dataType) {
    if (dataType == 'menu') {
      this.updateRecipe();
    }
  }

  this.updateRecipe();
}
