var ListOfDishesView = function (container, model) {

    model.addObserver(this);

    this.allDishes = container.find('#allDishes');
    this.startersFilter = container.find('#starters-filter');
    this.mainFilter = container.find('#main-filter');
    this.dessertFilter = container.find('#dessert-filter');
    this.allFilter = container.find('#all-filter');
    this.searchInput = container.find('#search-input');
    this.searchButton = container.find('#search-button');
    this.dropdown = container.find('#dropdown-text');

    this.updateAllDishes = function (type, filter) {
        var dishes = model.getAllDishes(type, filter);
        //if (!dishes) {
            //show spinner
        //}

        /*this.allDishes.empty();
        if (!dishes.length == 0) {
        console.log(dishes);
        this.updateHTMLArray(dishes);
        }
        this.foodLinks = container.find('.food-link');*/
    }

    /*this.handleAllTypes = function (starters, mains, desserts) {
        starters = starters.toArray();
        mains = mains.toArray();
        desserts = desserts.toArray();
        var dishes = starters.concat(mains, desserts);

        this.allDishes.empty();
        if (dishes.length != 0) {
            this.updateHTMLArray(dishes);
        }
    }*/

    this.updateHTMLArray = function (dishes) {
        this.allDishes.empty();
        for (var i = 0; i < dishes.length; i++) {
            this.allDishes.append(
                "<div class='col-md-4'>" +
                "<a id='" +
                dishes[i].RecipeID +
                "' class='food-link'>" +
                "<img class='img-responsive food-pic' src='" +
                dishes[i].ImageURL +
                "'>" +
                "<h2>" +
                dishes[i].Title +
                "</h2>" +
                "</a>" +
                /*"<p>" +
dishes[i].description +
    "</p>" +*/
                "</div>"
            );
        }
        this.foodLinks = container.find('.food-link');
    }

    this.hide = function () {
        container.hide();
    }
    this.show = function () {
        container.show();
    }

    this.update = function (data, dataType) {
        if (dataType === "dishesList") {
            //check for errors if()
            console.log(data);
            console.log(data.Results);
            this.updateHTMLArray(data.Results);
        }
    }


    this.updateAllDishes();

    this.foodLinks = container.find('.food-link');

}