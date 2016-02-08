$(function () {
    //We instantiate our model
    var model = new DinnerModel();

        model.setNumberOfGuests(10);
        model.addDishToMenu(1);
        console.log(model.nbrGuests);


    //And create the needed controllers and views
    var exampleView = new ExampleView($("#exampleView"));

});