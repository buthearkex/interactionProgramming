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

    this.updateDishes = function () {
        listedDishes.empty();
        model.getFullMenu().forEach(function (menuItem, index) {
            listedDishes.append(
                "<div class='dishesList'>" +
                menuItem.name +
                "</div>" +
                "<span id='pending'>" +
                model.getPriceOfDish(menuItem.id) +
                "</span>" +
                "<span id='" +
                menuItem.id +
                "' class='btn btn-default removeDishButton'>x</span>"
            );
        });
        this.removeDishButton = container.find(".removeDishButton");
    }

    this.hide = function () {
        container.hide();
    }

    this.show = function () {
        container.show();
    }

    this.update = function (obj) {
        if (obj == "numberOfGuests") {
            this.updateNumberOfGuests();
            this.updateDishes();
            this.updateTotalDinnerCost();
        } else {
            this.updateTotalDinnerCost();
            this.updateDishes();
            this.updateTotalDinnerCost();
        }

    }

    //call the functions at the end to set initial values
    this.updateNumberOfGuests();
    this.updateTotalDinnerCost();
    this.updateDishes();
}