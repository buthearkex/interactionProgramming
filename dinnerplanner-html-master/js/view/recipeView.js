var RecipeView = function (container, model) {

    this.recipe = container.find('#recipe-container');

    var menuItems = model.getFullMenu();
    for (var i = 0; i < menuItems.length; i++) {
        this.recipe.append(
            "<div class='row'>" +
            "<div class='col-md-5'>" +
            "<img class='food-pic' src='images/" +
            menuItems[i].image +
            "'>" +
            "<h3>" +
            menuItems[i].name +
            "</h3>" +
            "<p>" +
            menuItems[i].description +
            "</p>" +
            "</div>" +
            "<div class='col-md-7'>" +
            "<h4>PREPARATION</h4>" +
            "<p>" +
            menuItems[i].description +
            "</p>" +
            "</div>" +
            "</div>"
        );
    }

    this.hide = function () {
        container.hide();
    }

    this.show = function () {
        container.show();
    }

}