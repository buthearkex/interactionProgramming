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


    //procedural stuff (View 3)
    console.log(model.getAllDishes());
    model.getAllDishes().get().forEach(function (dish) {
        console.log("nakki");
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
    });


}