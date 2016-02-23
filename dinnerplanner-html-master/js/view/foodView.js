var FoodView = function (container, model) {

    this.dishDetails = container.find("#dishDetails");
    this.backToSelectDishButton = container.find("#backToSelectDishButton");
    this.confirmDishButton = container.find("#confirmDishButton");
    this.ingredientList = container.find("#ingredientList");
    this.nbrOfGuests = container.find('.nbrGuests');


    this.nbrOfGuests.html(model.getNumberOfGuests());


    var menuItems = model.getFullMenu();
    var ingreds = menuItems[0].ingredients;
    for (var i = 0; i < ingreds.length; i++) {
        this.ingredientList.append(
            "<div class='row'>" +
            "<div class='col-sm-3'>" +
            ingreds[i].name +
            "</div>" +
            "<div class='col-sm-3'>" +
            ingreds[i].quantity +
            "</div>" +
            "<div class='col-sm-3'>SEK</div>" +
            "<div class='col-sm-3'>" +
            ingreds[i].price +
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