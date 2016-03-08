// Here we create an Angular service that we will use for our 
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.
dinnerPlannerApp.factory('Dinner', function ($resource, $cookieStore) {

  if (!$cookieStore.get('numberOfGuest')) {
    var numberOfGuest = 2;
  } else {
    var numberOfGuest = $cookieStore.get('numberOfGuest');
  }
  this.menu = [];
  this.API_KEY = 'r02x0R09O76JMCMc4nuM0PJXawUHpBUL';


  this.setNumberOfGuests = function (num) {
    numberOfGuest = num;
    $cookieStore.put('numberOfGuest', num);
  }

  this.getNumberOfGuests = function () {
    return numberOfGuest;
  }

  //Returns all the dishes on the menu.
  this.getFullMenu = function () {
    return this.menu;
  }

  this.addDishToMenu = function (dish) {
    this.menu.push(dish);
  }

  this.removeDishFromMenu = function (id) {
    var mod = this;
    this.menu.forEach(function (dish, index) {
      if (dish.RecipeID == id) {
        mod.menu.splice(index, 1);
        return;
      }
    });
  }

  this.getTotalMenuPrice = function () {
    var totalPrice = 0;
    if (this.menu.length == 0) {
      return 0;
    }
    this.menu.forEach(function (dish) {
      dish.Ingredients.forEach(function (ingr) {
        totalPrice += ingr.MetricQuantity;
      });
    });
    return totalPrice * this.getNumberOfGuests();
  }


  // TODO in Lab 5: Add your model code from previous labs
  // feel free to remove above example code
  // you will need to modify the model (getDish and getAllDishes) 
  // a bit to take the advantage of Angular resource service
  // check lab 5 instructions for details



  this.DishSearch = $resource('http://api.bigoven.com/recipes', {
    pg: 1,
    rpp: 25,
    api_key: this.API_KEY
  });

  this.Dish = $resource('http://api.bigoven.com/recipe/:id', {
    api_key: this.API_KEY
  });


  //Returns the dish that is on the menu for selected type 
  this.getSelectedDish = function (type) {
    //only one dish per type
    var selectedDish;
    menu.forEach(function (dish) {
      if (dish.type == type) {
        selectedDish = dish;
      }
    });
    return selectedDish;
  }



  //Returns all ingredients for all the dishes on the menu.
  this.getAllIngredients = function () {
    var allIngredients = [];
    menu.forEach(function (dish) {
      allIngredients.push(dish.ingredients);
    });
    return allIngredients;
  }



  //Mikko's adidtional helper method
  this.getPriceOfDish = function (data) {
    var price = 0;
    num = numberOfGuest;
    data.Ingredients.forEach(function (ingr) {
      price += ingr.MetricQuantity * num;
    });
    return price;
  }

  // Angular service needs to return an object that has all the
  // methods created in it. You can consider that this is instead
  // of calling var model = new DinnerModel() we did in the previous labs
  // This is because Angular takes care of creating it when needed.
  return this;

});
