var SidebarView = function (container, model) {

    //these are for interacting
    this.plusButton = container.find("#plusGuest");
    this.minusButton = container.find("#minusGuest");
    this.confirmDinnerButton = container.find("#confirmDinnerButton");


    //these are only for displaying
    this.numberOfGuests = container.find("#numberOfGuests");
    //doesn't work for some reason, why?
    this.listedDishes = container.find("#listedDishes");
    var listedDishes = container.find("#listedDishes");
    this.totalDinnerCost = container.find("#totalDinnerCost");



    this.numberOfGuests.html(model.getNumberOfGuests());
    this.totalDinnerCost.html(model.getTotalMenuPrice());

    model.getFullMenu().forEach(function (menuItem) {
        console.log(this.listedDishes);
        listedDishes.append(
            "<div class='dishesList'>" +
            menuItem.name +
            "</div>" +
            "<span id='pending'>" +
            model.getPriceOfDish(menuItem.id) +
            "</span>"
        );
    });

    this.hide = function () {
        container.hide();
    }

    this.show = function () {
        container.show();
    }

}