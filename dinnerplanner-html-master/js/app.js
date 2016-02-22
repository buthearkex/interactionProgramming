$(function () {
  //We instantiate our model
  var model = new DinnerModel();

  model.addDishToMenu(1);
  model.addDishToMenu(1);
  model.addDishToMenu(100);
  model.addDishToMenu(200);

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
  /*var exampleView = new ExampleView($("#exampleView"), model);
var exampleViewController = new ExampleViewController(exampleView, model);*/

  var homeView = new HomeView($('#home-screen'), model);
  var homeViewController = new HomeViewController(homeView, model);

  var sidebarView = new SidebarView($('#sidebar-wrapper'), model);
  var sidebarViewController = new SidebarViewController(sidebarView, model);

  var listOfDishesView = new ListOfDishesView($('#list-of-dishes'), model);

  //we should ask where they want us to do this
  $('#wrapper').hide();
});
