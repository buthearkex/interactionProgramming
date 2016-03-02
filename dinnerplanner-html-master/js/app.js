$(function () {
  //We instantiate our model
  var model = new DinnerModel();

  var homeView = new HomeView($('#home-screen'), model);
  //var homeViewController = new HomeViewController(homeView, model);

  var sidebarView = new SidebarView($('#sidebar-wrapper'), model);
  var sidebarViewController = new SidebarViewController(sidebarView, model);

  var listOfDishesView = new ListOfDishesView($('#list-of-dishes'), model);
  var listOfDishesViewController = new ListOfDishesViewController(listOfDishesView, model);

  var foodView = new FoodView($('#foodView'), model);
  var foodViewController = new FoodViewController(foodView, model);

  var overviewBarView = new OverviewBarView($('#overview-bar'), model);
  var overviewBarViewController = new OverviewBarViewController(overviewBarView, model);

  var dinnerOverviewView = new DinnerOverviewView($('#dinner-overview'), model);
  var dinnerOverviewViewController = new DinnerOverviewViewController(dinnerOverviewView, model);

  var recipeView = new RecipeView($('#printableRecipe'), model);
  var recipeViewController = new RecipeViewController(recipeView, model);

  var mainController = new MainController(homeView, sidebarView, listOfDishesView, foodView, overviewBarView, dinnerOverviewView, recipeView, model);


  $('input.deletable').wrap('<span class="deleteicon" />').after($('<span/>').click(function () {
    $(this).prev('input').val('').focus();
  }));

  var toggle = false;
  $('#hamburger').click(function () {
    if (!toggle) {
      $('#page-content-wrapper').css('padding-left', '250px');
      $('#sidebar-wrapper').css('width', '250px');
      toggle = true;
    } else {
      $('#page-content-wrapper').css('padding-left', '0px');
      $('#sidebar-wrapper').css('width', '0px');
      toggle = false;
    }
  });

  $(window).resize(function () {

    if ($(window).width() > '768') {
      console.log('naki');
      $('#page-content-wrapper').css('padding-left', '0px');
    } else {
      $('#sidebar-wrapper').css('width', '0px');
    }
  });

});
