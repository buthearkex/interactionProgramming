var ListOfDishesView = function (container, model) {

    this.allDishes = container.find('#allDishes');
    this.startersFilter = container.find('#starters-filter');
    this.mainFilter = container.find('#main-filter');
    this.dessertFilter = container.find('#dessert-filter');
    this.allFilter = container.find('#all-filter');

    this.updateAllDishes = function (type) {
        console.log(type);
        var dishes = model.getAllDishes().prevObject;
        this.allDishes.empty();
        for (var i = 0; i < dishes.length; i++) {
            //console.log(dishes[i].type + "hho");
            if (dishes[i].type == type || type == "all") {
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
        this.foodLinks = container.find('.food-link');
    }

    this.hide = function () {
        container.hide();
    }
    this.show = function () {
        container.show();
    }


    this.update = function (type) {
        if (type == "starter") {
            this.updateAllDishes(type);
        } else if (type == "main dish") {
            this.updateAllDishes(type);
        } else if (type == "dessert") {
            this.updateAllDishes(type);
        } else {
            this.updateAllDishes("all");
        }
    }

    this.updateAllDishes("all");

    this.foodLinks = container.find('.food-link');

}