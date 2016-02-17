//ExampleView Object constructor
var ExampleView = function (container, model) {

    // Get all the relevant elements of the view (ones that show data
    // and/or ones that responed to interaction)

    //*** we need to make all of these ids in the html files!

    //GET ELEMENTS

    //home screen (View 1)
    this.createNewDinnerButton = container.find("#createNewDinnerButton");

    //my dinner sidebar (View 2)
    this.numberOfGuests = container.find("#numberOfGuests");
    this.plusButton = container.find("#plusGuest");
    this.minusButton = container.find("#minusGuest");
    this.fullMenuList = container.find("#fullMenuList");
    this.totalDinnerCost = container.find("#totalDinnerCost");
    this.confirmDinnerButton = container.find("#confirmDinnerButton");
    //this.removeDishButton = container.find("#removeDishButton"); //this function exists in dinnerModel, so I'm guessing it will be used in View 2?

    //select dish (View 3)
    this.searchBar = container.find("#searchBar");
    this.searchButton = container.find("#searchButton");
    this.dishTypeSelector = container.find("#dishTypeSelector");
    this.allDishes = container.find("#allDishes");

    //dish details (View 4)
    this.backToSelectDishButton = container.find("#backToSelectDishButton");
    this.confirmDishButton = container.find("#confirmDishButton");
    this.dishDetails = container.find("#dishDetails");

    //dinner overview (View 5)
    this.printRecipeButton = container.find("#printRecipeButton");
    this.overviewBackButton = container.find("#overviewBackButton");
    this.overviewFullMenuList = container.find("#overviewFullMenuList");
    this.overviewTotalDinnerCost = container.find("#overviewTotalDinnerCost");

    //instructions screen (View 6)
    this.instructionsBackButton = container.find("#instructionsBackButton");
    this.instructionsFullMenuList = container.find("#instructionsFullMenuList");



    //GET DATA

    //my dinner sidebar (View 2)
    this.numberOfGuests.html(model.getNumberOfGuests());
    this.fullMenuList.html(model.getFullMenu());
    this.totalDinnerCost.html(model.getTotalMenuPrice());
    //.html() method writes to the html, so this is not needed, onlu when some functionality is required
    //this.removeDishButton.html(model.removeDishFromMenu());



    //dish details (View 4)
    this.dishDetails.html(model.getDish()); //takes id parameter
    this.confirmDishButton.html(model.addDishToMenu()); //takes id parameter

    //dinner overview (View 5)
    this.overviewFullMenuList.html(model.getFullMenu());
    this.overviewTotalDinnerCost.html(model.getTotalMenuPrice());

    //instructions screen (View 6)
    this.overviewFullMenuList.html(model.getFullMenu());

    //don't know why this is not working, some jQuery issue
    //this.allDishes.append("<div>nakki</div>");
    //and to be honest I don't get why they're giving the container as a jQuery object, makes it complicated

    //instead I'm using this style, but will have to fix this later
    //$('#allDishes').append("<div>nakki</div>");
    //procedural stuff (View 3)
    //console.log(model.getAllDishes().prevObject[0]);
    var dishes = model.getAllDishes().prevObject;
    for (var i = 0; i < dishes.length; i++) {
        $('#allDishes').append(
            "<div class='col-md-3'>" +
            "<a href='food.html'>" +
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


    /* model.getAllDishes().prevObject.forEach(function (dish) {
      this.allDishes.html(
        "<div class='col-md-3'>" +
        "<img class='img-responsive food-pic' src='" +
        dish.image +
        "'>" +
        "<h2>" +
        dish.name +
        "</h2>" +
        "<p>" +
        dish.description +
        "</p>" +
        "</div>"
      );
    });*/

    //adding food to overview screen
    var overviewItems = model.getFullMenu();
    for (var i = 0; i < overviewItems.length; i++) {
        $('#overviewFullMenuList').append(
            "<div class='col-md-3 thumbnail'>" +
            "<img class='img-responsive overview-pic' src='images/" +
            overviewItems[i].image +
            "'>" +
            "<p>" +
            model.getPriceOfDish(overviewItems[i].id) +
            " SEK</p>" +
            "</div>"
        );
    }

    $('#overviewFullMenuList').append(
        "<div class='col-md-3 border'>" +
        "<p>Total:</p>" +
        "<div>" +
        "<p>" +
        model.getTotalMenuPrice() +
        " SEK</p>" +
        "</div>" +
        "</div>"
    );

    //adding number of Guests to dinnerPreparation.html
    $("#numberOfGuests").html(model.getNumberOfGuests());

    //adding food to final screen
    var menuItems = model.getFullMenu();
    console.log(menuItems);
    for (var i = 0; i < menuItems.length; i++) {
        $('#printableRecipe').append(
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

        $('#listedDishes').append(
            "<div class='dishesList'>" +
            menuItems[i].name +
            "</div>" +
            "<span id='pending'>" +
            model.getPriceOfDish(menuItems[i].id) +
            "</span>"
        );
    }

    $('#totalDinnerCost').html(model.getTotalMenuPrice());

    $('.nbrGuests').html(model.getNumberOfGuests());

    /*var ingreds = menuItems[0].ingredients;
    for (var i = 0; i < ingreds.length; i++) {
        $('#ingredientList').append(
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
    }*/

}