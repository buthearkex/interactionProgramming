var RecipeView = function (container, model) {

    model.addObserver(this);

    this.recipe = container.find('#recipe-container');

    this.updateRecipe = function () {
        console.log(menuItems);
        var menuItems = model.getFullMenu();
        this.recipe.empty();
        for (var i = 0; i < menuItems.length; i++) {
            this.recipe.html(
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
        console.log('recipe update');

    }

    this.hide = function () {
        container.hide();
    }

    this.show = function () {
        container.show();
    }

    this.update = function (obj) {
        if (obj == 'newDish') {
            this.updateRecipe();
        } else if (obj == 'removedDish') {
            this.updateRecipe();
        }
    }

    this.updateRecipe();
}