var HomeView = function (container, model) {
  this.createNewDinnerButton = container.find("#createNewDinnerButton");

  this.changeToSelectDish = function () {
    container.hide();

    //dirty hack: we need to ask how they want us to do this
    $('#wrapper').show();
  }
}
