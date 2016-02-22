var ListOfDishesView = function (container, model) {
  this.allDishes = container.find('#allDishes');

  var dishes = model.getAllDishes().prevObject;
  for (var i = 0; i < dishes.length; i++) {
    this.allDishes.append(
      "<div class='col-md-3'>" +
      "<a href='food.html'>" +
      "<img class='img-responsive food-pic' src='images/" +
      dishes[i].image +
      "'>" +
      "<h2>" +
      dishes[i].name +
      "</h2>" +
      "</a>" +
      "<p>" +
      dishes[i].description +
      "</p>" +
      "</div>"
    );
  }
}
