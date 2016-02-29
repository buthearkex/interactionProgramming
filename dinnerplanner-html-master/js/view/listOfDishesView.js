var ListOfDishesView = function (container, model) {

    this.allDishes = container.find('#allDishes');
    this.startersFilter = container.find('#starters-filter');
    this.mainFilter = container.find('#main-filter');
    this.dessertFilter = container.find('#dessert-filter');
    this.allFilter = container.find('#all-filter');
    this.searchInput = container.find('#search-input');
    this.searchButton = container.find('#search-button');
    this.dropdown = container.find('#dropdown-text');

    this.updateAllDishes = function (type, filter) {
        if (!filter && type == 'all') {
            var dishes = model.getAllDishes().prevObject;
        } else if (!filter) {
            var dishes = model.getAllDishes(type);
        } else if (type == 'all' && filter) {
            var dishes = model.getAllDishes('starter', filter);
            var mains = model.getAllDishes('main dish', filter);
            var desserts = model.getAllDishes('dessert', filter);

            this.handleAllTypes(dishes, mains, desserts);
            return;
        } else {
            var dishes = model.getAllDishes(type, filter);
        }

        this.allDishes.empty();
        if (!dishes.length == 0) {
            this.updateHTMLArray(dishes);
        }
        this.foodLinks = container.find('.food-link');
    }

    this.handleAllTypes = function (starters, mains, desserts) {
        starters = starters.toArray();
        mains = mains.toArray();
        desserts = desserts.toArray();
        var dishes = starters.concat(mains, desserts);

        this.allDishes.empty();
        if (dishes.length != 0) {
            this.updateHTMLArray(dishes);
        }
    }

    this.updateHTMLArray = function (dishes) {

        for (var i = 0; i < dishes.length; i++) {
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

    this.updateHTML = function (dish) {

        this.allDishes.append(
            "<div class='col-md-3'>" +
            "<a id='" +
            dish.id +
            "' class='food-link'>" +
            "<img class='img-responsive food-pic' src='images/" +
            dish.image +
            "'>" +
            "<h2>" +
            dish.name +
            "</h2>" +
            "</a>" +
            "<p>" +
            dish.description +
            "</p>" +
            "</div>"
        );

    }

    this.hide = function () {
        container.hide();
    }
    this.show = function () {
        container.show();
    }


    this.update = function (type, filter) {

        if (type === "starter") {
            this.updateAllDishes(type, filter);
        } else if (type === "main dish") {
            this.updateAllDishes(type, filter);
        } else if (type === "dessert") {
            this.updateAllDishes(type, filter);
        } else {
            this.updateAllDishes("all", filter);
        }
    }

    this.updateAllDishes("all");

    this.foodLinks = container.find('.food-link');

}