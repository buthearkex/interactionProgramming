/*This is just to hide and show different views.
We do verything
else inthe specific controllers.*/
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

    listOfDishesView.allDishes.on("click", ".food-link", function () {
        listOfDishesView.hide();
        console.log(this.id);
        foodView.show(this.id);


        foodView.backToSelectDishButton.click(function () {
            foodView.hide();
            listOfDishesView.show();
        });
    });

    foodView.confirmDishButton.click(function () {
        foodView.hide();
        listOfDishesView.show();
    });

    foodView.dishDetails.on('click', '#backToSelectDishButton', function () {
        foodView.hide();
        listOfDishesView.show();
    });

    sidebarView.confirmDinnerButton.click(function () {
        if ($('#foodView').is(":visible")) {
            sidebarView.hide();
            foodView.hide();
            overviewBarView.show();
            dinnerOverviewView.show();
        } else {
            console.log('not visible');
            sidebarView.hide();
            listOfDishesView.hide();
            overviewBarView.show();
            dinnerOverviewView.show();
        }

        $("#wrapper").toggleClass("toggled");

    });

    overviewBarView.goBackButton.click(function () {
        overviewBarView.hide();
        dinnerOverviewView.hide();
        recipeView.hide();
        sidebarView.show();
        listOfDishesView.show();
        $("#wrapper").toggleClass("toggled");
    });

    dinnerOverviewView.printButton.click(function () {
        dinnerOverviewView.hide();
        recipeView.show();
    });

}