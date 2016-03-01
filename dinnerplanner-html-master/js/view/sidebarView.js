var SidebarView = function (container, model) {

    model.addObserver(this);

    //these are for interacting
    this.plusButton = container.find("#plusGuest");
    this.minusButton = container.find("#minusGuest");
    this.confirmDinnerButton = container.find("#confirmDinnerButton");
    this.sidebarNav = container.find('.sidebar-nav');



    //these are only for displaying
    this.numberOfGuests = container.find("#numberOfGuests");
    //doesn't work for some reason, why?
    this.listedDishes = container.find("#listedDishes");
    var listedDishes = container.find("#listedDishes");
    this.totalDinnerCost = container.find("#totalDinnerCost");

    this.updateNumberOfGuests = function () {
        this.numberOfGuests.html(model.getNumberOfGuests());
    }

    this.updateTotalDinnerCost = function () {
        this.totalDinnerCost.html(model.getTotalMenuPrice());
    }

    this.updateDishes = function (data) {
        if (!(typeof data === 'undefined')) {
            console.log(data);
            listedDishes.empty();
            var price = 0;
            data.Ingredients.forEach(function (ingr) {
                price += ingr.MetricQuantity * model.getNumberOfGuests();
            });

            listedDishes.append(
                "<div class='dishesList'>" +
                data.Title +
                "</div>" +
                "<span id='pending'>" +
                price +
                "</span>" +
                "<span id='" +
                data.RecipeID +
                "' class='btn btn-default removeDishButton'>x</span>"
            );
            this.removeDishButton = container.find(".removeDishButton");
        }
    }

    this.hide = function () {
        container.hide();
    }

    this.show = function () {
        container.show();
    }

    this.update = function (data, dataType) {
        console.log(data, dataType);
        if (dataType == "numberOfGuests") {
            this.updateNumberOfGuests();
            this.updateDishes();
            this.updateTotalDinnerCost();
        } else if (dataType === "menu") {
            this.updateDishes(data);
        }
        /*else {
    this.updateTotalDinnerCost();
    this.updateDishes();
    this.updateTotalDinnerCost();
}*/

    }

    //call the functions at the end to set initial values
    /*this.updateNumberOfGuests();
this.updateTotalDinnerCost();
this.updateDishes();*/
}