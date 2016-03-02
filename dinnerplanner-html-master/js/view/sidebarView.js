var SidebarView = function (container, model) {

  model.addObserver(this);

  //these are for interacting
  this.plusButton = container.find("#plusGuest");
  this.minusButton = container.find("#minusGuest");
  this.confirmDinnerButton = container.find("#confirmDinnerButton");
  this.sidebarNav = container.find('.sidebar-nav');



  //these are only for displaying
  this.numberOfGuests = container.find("#numberOfGuests");
  //doesn't work for some reason, why?
  this.listedDishes = container.find("#listedDishes");
  var listedDishes = container.find("#listedDishes");
  this.totalDinnerCost = container.find("#totalDinnerCost");

  this.updateNumberOfGuests = function () {
    this.numberOfGuests.html(model.getNumberOfGuests());
  }

  this.updateTotalDinnerCost = function () {
    this.totalDinnerCost.html(
      "<div>Total: " +
      Math.round(model.getTotalMenuPrice()) +
      " SEK</div>"
    );
  }

  this.updateDishes = function () {
    listedDishes.empty();

    model.menu.forEach(function (dish) {
      listedDishes.append(
        "<div class='dishesList'>" +
        dish.Title +
        "</div>" +
        "<span id='pending'>" +
        Math.round(model.getTotalMenuPrice()) +
        "</span>" +
        "<img id='" +
        dish.RecipeID +
        "' class='removeDishButton' src='../../images/delete.jpg'></img>"
      );
    });

    this.removeDishButton = container.find(".removeDishButton");

  }

  this.hide = function () {
    container.hide();
  }

  this.show = function () {
    container.show();
  }

  this.update = function (data, dataType) {
    this.updateNumberOfGuests();
    this.updateDishes();
    this.updateTotalDinnerCost();

    /*if (dataType == "numberOfGuests") {
        this.updateNumberOfGuests();
        this.updateDishes();
        this.updateTotalDinnerCost();
    } else if (dataType === "menu") {
        this.updateDishes();
    } else if (dataType === "removed") {
        this.updateDishes();
    }*/
    /*else {
    this.updateTotalDinnerCost();
    this.updateDishes();
    this.updateTotalDinnerCost();
}*/

  }

  //call the functions at the end to set initial values
  /*this.updateNumberOfGuests();
this.updateTotalDinnerCost();
this.updateDishes();*/
}
