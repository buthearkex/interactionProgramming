var FoodViewController = function (view, model) {

    view.confirmDishButton.click(function (event) {
        console.log(this.id);
        model.addDishToMenu(this.id);
    });

}