$(function () {
    //We instantiate our model
    var model = new DinnerModel();

    //MIKKO'S TESTS
    /*model.setNumberOfGuests(10);
console.log(model.getNumberOfGuests());

model.addDishToMenu(1);
model.addDishToMenu(1);
model.addDishToMenu(100);
model.removeDishFromMenu(100);

console.log(model.getFullMenu());
console.log(model.getSelectedDish("main dish"));
console.log(model.getAllIngredients());
console.log(model.getTotalMenuPrice());*/

    //And create the needed controllers and views
    var exampleView = new ExampleView($("#exampleView"));

});