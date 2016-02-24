var FoodViewController = function (view, model) {

    view.confirmDishButton.click(function (event) {
        model.addDishToMenu(this.id);
    });

}