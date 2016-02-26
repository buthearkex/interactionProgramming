var ListOfDishesView = function (container, model) {

    this.allDishes = container.find('#allDishes');
    this.startersFilter = container.find('#starters-filter');
    this.mainFilter = container.find('#main-filter');
    this.dessertFilter = container.find('#dessert-filter');

    this.updateAllDishes = function (type) {
        var dishes = model.getAllDishes().prevObject;
        for (var i = 0; i < dishes.length; i++) {
            if (dishes[i].type == type || type == "All") {
                this.allDishes.append(
                    "<div class='col-md-3'>" +
                    "<a id='" +
                    dishes[i].id +
                    "' class='food-link'>" +
                    "<img class='img-responsive food-pic' src='images/" +
                    dishes[i].image +
                    "'>" +
                    "<h2>" +
                    dishes[i].name +
                    "</h2>" +
                    "</a>" +
                    "<p>" +
                    dishes[i].description +
                    "</p>" +
                    "</div>"
                );
            }
        }
    }

    this.hide = function () {
        container.hide();
    }
    this.show = function () {
        container.show();
    }


    this.update = function (type) {
        if (type == "Starter") {
            this.updateAllDishes("Starter");
        } else if (type == "Main Dish") {
            this.updateAllDishes("Main");
        } else if (type == "Dessert") {
            this.updateAllDishes("Dessert");
        } else {
            this.updateAllDishes("All");
        }

    }

    this.updateAllDishes("All");

    this.foodLinks = container.find('.food-link');

}