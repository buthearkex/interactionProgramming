var MainController = function (homeView, sidebarView, listOfDishesView, foodView, overviewBarView, dinnerOverviewView, recipeView, model) {

    sidebarView.hide();
    listOfDishesView.hide();
    foodView.hide();
    overviewBarView.hide();
    dinnerOverviewView.hide();
    recipeView.hide();

    homeView.createNewDinnerButton.click(function () {
        homeView.hide();
        sidebarView.show();
        listOfDishesView.show();
    });

    listOfDishesView.foodLinks.click(function (event) {
        listOfDishesView.hide();
        foodView.show(event.target.id);
    });

    foodView.backToSelectDishButton.click(function () {
        foodView.hide();
        listOfDishesView.show();
    });

    foodView.confirmDishButton.click(function () {
        foodView.hide();
        listOfDishesView.show();
    });

    sidebarView.confirmDinnerButton.click(function () {
        sidebarView.hide();
        listOfDishesView.hide();
        overviewBarView.show();
        dinnerOverviewView.show();
    });

    overviewBarView.goBackButton.click(function () {
        overviewBarView.hide();
        dinnerOverviewView.hide();
        recipeView.hide();
        sidebarView.show();
        listOfDishesView.show();
    });

    dinnerOverviewView.printButton.click(function () {
        dinnerOverviewView.hide();
        recipeView.show();
    });

}