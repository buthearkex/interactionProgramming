//probalby doesn't need the model though
var HomeViewController = function (view, model) {

  view.createNewDinnerButton.click(function () {
    //are we supposed to do this or should we call a function in the view?
    view.changeToSelectDish();
  });

}
