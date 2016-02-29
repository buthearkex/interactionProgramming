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
        console.log(type + " " + filter);
        if (!filter && type == 'all') {

            var dishes = model.getAllDishes().prevObject;

            console.log(dishes);
        } else if (!filter) {
            var dishes = model.getAllDishes(type);
            console.log(dishes + 'ei');
        } else if (type == 'all' && filter) {
            var dishes = model.getAllDishes('starter', filter);
            var mains = model.getAllDishes('main dish', filter);
            var desserts = model.getAllDishes('dessert', filter);

            this.handleAllTypes(dishes, mains, desserts);
            return;
        } else {
            var dishes = model.getAllDishes(type, filter);
        }

        console.log(dishes);

        this.allDishes.empty();



        if (!dishes.length == 0) {
            this.updateHTMLArray(dishes);
            console.log('several');
        }
        /*if (typeof dishes[0] == 'undefined') {
            console.log('hople');
        }
        this.updateHTML(dishes);
        console.log('just one');*/
        /* } else {



 }*/


        //var dishes = model.getAllDishes().prevObject;

        this.foodLinks = container.find('.food-link');
    }

    this.handleAllTypes = function (starters, mains, desserts) {
        starters = starters.toArray();
        console.log(starters);
        //starters = starters.slice(0, starters.length - 2);

        mains = mains.toArray();
        console.log(mains);
        //mains = mains.slice(0, starters.length - 2);

        desserts = desserts.toArray();
        console.log(desserts);
        //desserts = desserts.slice(0, desserts.length - 2);

        var dishes = starters.concat(mains, desserts);

        console.log(dishes);
        console.log('joo');

        if (dishes.length != 0) {
            this.allDishes.empty();
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
        console.log(type);
        console.log('type ' + type);
        console.log(type === 'starter');

        if (type === "starter") {
            this.updateAllDishes(type, filter);
        } else if (type === "main dish") {
            this.updateAllDishes(type, filter);
        } else if (type === "dessert") {
            this.updateAllDishes(type, filter);
        } else {
            //this is the problem
            this.updateAllDishes("all", filter);
        }
    }

    this.updateAllDishes("all");

    this.foodLinks = container.find('.food-link');

}