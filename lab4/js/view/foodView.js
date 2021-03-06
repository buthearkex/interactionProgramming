var FoodView = function (container, model) {

  model.addObserver(this);

  this.dishDetails = container.find("#dishDetails");
  this.backToSelectDishButton = container.find("#backToSelectDishButton");
  this.confirmDishButton = container.find("#confirmDishButton");
  this.ingredientList = container.find("#ingredientList");
  var ingreList = this.ingredientList;
  this.nbrOfGuests = container.find('.nbrGuests');
  this.foodDescription = container.find('#food-description');
  this.foodInstructions = container.find('#food-instructions');
  this.totalPrice = container.find('#totalPrice');

  this.savedId;
  this.datas;

  this.updateView = function (data) {
    if (!(typeof data === 'undefined')) {
      this.foodDescription.html(
        "<h2>" +
        data.Title +
        "</h2>" +
        "<img class='img-resposive big-pic' src='" +
        data.ImageURL +
        "'>" +
        "<p>" +
        data.Description +
        "</p>" +
        "<a id='backToSelectDishButton' class='btn btn-default'>Back to select dish</a>"
      );
      this.foodInstructions.html(
        "<p>" +
        data.Instructions +
        "</p>"
      );

      var price = 0;

      ingreList.empty();
      data.Ingredients.forEach(function (ingr) {
        ingreList.append(
          "<div class='row'>" +
          "<div class='col-sm-3'>" +
          ingr.Name +
          "</div>" +
          "<div class='col-sm-3'>" +
          Math.round(ingr.MetricQuantity * model.getNumberOfGuests()) +
          " " +
          ingr.Unit +
          "</div>" +
          "<div class='col-sm-3'>SEK</div>" +
          "<div class='col-sm-3'>" +
          Math.round(ingr.MetricQuantity * model.getNumberOfGuests()) +
          "</div>" +
          "</div>"
        );
        price += Math.round(ingr.MetricQuantity * model.getNumberOfGuests());
      });

      this.backToSelectDishButton = container.find("#backToSelectDishButton");

      this.confirmDishButton.attr('id', data.RecipeID);

      this.nbrOfGuests.html(model.getNumberOfGuests());

      this.totalPrice.html(price);
    } else {
      //show spinner
    }
    this.backToSelectDishButton = container.find("#backToSelectDishButton");
  }

  this.showError = function (error) {
    this.foodDescription.html(
      "<div>" +
      "There was an " +
      error +
      ". Please check your internet connection!" +
      "</div>"
    );
  }

  this.hide = function () {
    container.hide();
  }

  this.show = function (id) {
    this.savedId = id;
    model.getDish(id, 'food');

    container.show();
    //here we should show a spinner
  }

  this.update = function (data, dataType) {
    //here we should remove the spinner
    if (dataType === 'food') {
      this.savedId = data.RecipeID;
      this.datas = data;
      this.updateView(data);
    } else if (dataType === 'numberOfGuests') {
      this.updateView(this.datas);
      /*var mod = this;
      model.getFullMenu().forEach(function (dish) {
          if (dish.RecipeID == mod.savedId) {
              console.log('hop');
              this.updateView(dish);
          }
      });*/
    } else if (dataType === 'error') {
      this.showError(data);
    }
  }

  this.updateView();

}
