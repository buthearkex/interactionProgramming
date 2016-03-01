//DinnerModel Object constructor
var DinnerModel = function () {

    this.apiKey = '18f3cT02U9f6yRl3OKDpP8NA537kxYKu';

    //OBSERVABLE
    this.observers = [];

    //add new observer/listener to the array
    this.addObserver = function (observer) {
        this.observers.push(observer);
    }

    //call the update method on all the observers in the array
    this.notifyObservers = function (obj, dataType) {
        this.observers.forEach(function (observer) {
            observer.update(obj, dataType);
        });
    }


    //TODO Lab 2 implement the data structure that will hold number of guest
    // and selected dinner options for dinner menu
    this.nbrGuests = 10;
    this.menu = [];

    this.setNumberOfGuests = function (num) {
        this.nbrGuests = num;
        this.notifyObservers('numberOfGuests');
    }

    // should return 
    this.getNumberOfGuests = function () {
        return this.nbrGuests;
    }

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

    //Returns all the dishes on the menu.
    this.getFullMenu = function () {
        return this.menu;
    }

    //Returns all ingredients for all the dishes on the menu.
    this.getAllIngredients = function () {
        var allIngredients = [];
        menu.forEach(function (dish) {
            allIngredients.push(dish.ingredients);
        });
        return allIngredients;
    }

    //Returns the total price of the menu (all the ingredients multiplied by number of guests).
    this.getTotalMenuPrice = function () {
        var mod = this;
        var totalPrice = 0;
        this.menu.forEach(function (dish) {
            dish.Ingredients.forEach(function (ingr) {
                totalPrice += ingr.MetricQuantity;
            });
            /*dish.Ingredients.forEach(function (ingredient) {
                totalPrice += ingredient.price;
            });*/
        });
        return totalPrice * this.getNumberOfGuests();
        //totalPrice = totalPrice * this.getNumberOfGuests();
        //return totalPrice;
    }

    //Adds the passed dish to the menu. If the dish of that type already exists on the menu
    //it is removed from the menu and the new one added.
    this.addDishToMenu = function (id) {
        /*var addedDishType;
        var dishAdded = false;
        dishes.forEach(function (dish) {

            if (dish.id == id) {

                addedDishType = dish.type;
                menu.forEach(function (menuDish, index) {

                    if (menuDish.type == addedDishType) {
                        //remove and add
                        menu.splice(index, 1);
                        menu.push(dish);
                        dishAdded = true;
                    }
                });
                if (!dishAdded) {
                    menu.push(dish);
                    return;
                }
            }
        });*/
        /*var sameFound = false;
this.menu.forEach(function (dish) {
    if (dish.Title === data.Title) {
        sameFound = true;
    }
});
if (!sameFound) {
    menu.push(data);
}*/
        this.getDish(id, 'menu');

        /*var mod = this;
        this.menu.forEach(function (menuItem) {
            mod.getDish(menuItem.RecipeID, 'menu');
        });*/
        //this.notifyObservers('newDish');
    }

    //Removes dish from menu
    this.removeDishFromMenu = function (id) {
        console.log('mitav');
        var mod = this;
        this.menu.forEach(function (dish, index) {
            if (dish.RecipeID == id) {
                console.log('hoppa');

                mod.menu.splice(index, 1);
                mod.notifyObservers(id, "removed");
                return;
            }
        });

    }

    //Mikko's adidtional helper method
    this.getPriceOfDish = function (id) {
        var price = 0;
        this.menu.forEach(function (dish) {
            if (dish.RecipeID == id) {
                dish.Ingredients.forEach(function (ingredient) {
                    price += ingredient.Unit * nbrGuests;
                });
            }
        });
        return price;
    }

    //function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
    //you can use the filter argument to filter out the dish by name or ingredient (use for search)
    //if you don't pass any filter all the dishes will be returned
    this.getAllDishes = function (type, filter) {

        var titleKey = 'filter';
        var anyKey = 'type';
        var pages = 1;
        var perPage = 20;

        var modelHolder = this;

        //BigOven JSON API Request
        $.ajax({
            type: "GET",
            dataType: 'json',
            cache: false,
            url: 'http://api.bigoven.com/recipes?' +
                'title_kw=' +
                titleKey +
                '&' +
                'any_kw=' +
                anyKey +
                '&pg=' +
                pages +
                '&rpp=' +
                perPage +
                '&api_key=' +
                this.apiKey,
            success: function (data) {
                //console.log(data);
                modelHolder.notifyObservers(data, 'dishesList');
            },
            error: function (xhr, status, error) {
                console.error(error);
            }
        });

        //Old way to get dishes
        /* return $(dishes).filter(function (index, dish) {
     var found = true;
     if (filter) {
         found = false;
         $.each(dish.ingredients, function (index, ingredient) {
             if (ingredient.name.indexOf(filter) != -1) {
                 found = true;
             }
         });
         if (dish.name.indexOf(filter) != -1) {
             found = true;
         }
     }
     return dish.type == type && found;
 });*/
    }

    //function that returns a dish of specific ID
    this.getDish = function (id, message) {
        //http://api.bigoven.com/recipe/237837?api_key=8vtk7KykflO5IzB96kb0mpot0sU40096

        console.log('http://api.bigoven.com/recipe/' +
            id +
            '?&api_key=' +
            this.apiKey);
        console.log(id);

        var modelHolder = this;

        $.ajax({
            type: "GET",
            dataType: 'json',
            cache: false,
            url: 'http://api.bigoven.com/recipe/' +
                id +
                '?&api_key=' +
                this.apiKey,
            success: function (data) {
                console.log(data);
                if (message === "menu") {
                    modelHolder.putToMenu(data);
                }
                modelHolder.notifyObservers(data, message);
            },
            error: function (xhr, status, error) {
                console.error(error);
            }
        });


        /*for (key in dishes) {
            if (dishes[key].id == id) {
                return dishes[key];
            }
        }*/
    }

    this.putToMenu = function (data) {

        var sameFound = false;
        this.menu.forEach(function (dish) {
            if (dish.Title === data.Title) {
                sameFound = true;
            }
        });
        if (!sameFound) {
            this.menu.push(data);
        }
    }

    // the dishes variable contains an array of all the 
    // dishes in the database. each dish has id, name, type,
    // image (name of the image file), description and
    // array of ingredients. Each ingredient has name, 
    // quantity (a number), price (a number) and unit (string 
    // defining the unit i.e. "g", "slices", "ml". Unit
    // can sometimes be empty like in the example of eggs where
    // you just say "5 eggs" and not "5 pieces of eggs" or anything else.
    var dishes = [{
            'id': 1,
            'name': 'French toast',
            'type': 'starter',
            'image': 'toast.jpg',
            'description': "In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
            'ingredients': [{
                'name': 'eggs',
                'quantity': 0.5,
                'unit': '',
                'price': 10
			}, {
                'name': 'milk',
                'quantity': 30,
                'unit': 'ml',
                'price': 6
			}, {
                'name': 'brown sugar',
                'quantity': 7,
                'unit': 'g',
                'price': 1
			}, {
                'name': 'ground nutmeg',
                'quantity': 0.5,
                'unit': 'g',
                'price': 12
			}, {
                'name': 'white bread',
                'quantity': 2,
                'unit': 'slices',
                'price': 2
			}]
		}, {
            'id': 2,
            'name': 'Sourdough Starter',
            'type': 'starter',
            'image': 'sourdough.jpg',
            'description': "Here is how you make it... Lore ipsum...",
            'ingredients': [{
                'name': 'active dry yeast',
                'quantity': 0.5,
                'unit': 'g',
                'price': 4
			}, {
                'name': 'warm water',
                'quantity': 30,
                'unit': 'ml',
                'price': 0
			}, {
                'name': 'all-purpose flour',
                'quantity': 15,
                'unit': 'g',
                'price': 2
			}, {
                'name': 'milk',
                'quantity': 30,
                'unit': 'ml',
                'price': 6
			}]
		}, {
            'id': 3,
            'name': 'Baked Brie with Peaches',
            'type': 'starter',
            'image': 'bakedbrie.jpg',
            'description': "Here is how you make it... Lore ipsum...",
            'ingredients': [{
                'name': 'round Brie cheese',
                'quantity': 10,
                'unit': 'g',
                'price': 8
			}, {
                'name': 'raspberry preserves',
                'quantity': 15,
                'unit': 'g',
                'price': 10
			}, {
                'name': 'peaches',
                'quantity': 1,
                'unit': '',
                'price': 4
			}, {
                'name': 'milk',
                'quantity': 30,
                'unit': 'ml',
                'price': 6
			}]
		}, {
            'id': 100,
            'name': 'Meat balls',
            'type': 'main dish',
            'image': 'meatballs.jpg',
            'description': "Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
            'ingredients': [{
                'name': 'extra lean ground beef',
                'quantity': 115,
                'unit': 'g',
                'price': 20
			}, {
                'name': 'sea salt',
                'quantity': 0.7,
                'unit': 'g',
                'price': 3
			}, {
                'name': 'small onion, diced',
                'quantity': 0.25,
                'unit': '',
                'price': 2
			}, {
                'name': 'garlic salt',
                'quantity': 0.7,
                'unit': 'g',
                'price': 2
			}, {
                'name': 'Italian seasoning',
                'quantity': 0.6,
                'unit': 'g',
                'price': 3
			}, {
                'name': 'dried oregano',
                'quantity': 0.3,
                'unit': 'g',
                'price': 3
			}, {
                'name': 'crushed red pepper flakes',
                'quantity': 0.6,
                'unit': 'g',
                'price': 3
			}, {
                'name': 'Worcestershire sauce',
                'quantity': 6,
                'unit': 'ml',
                'price': 7
			}, {
                'name': 'milk',
                'quantity': 20,
                'unit': 'ml',
                'price': 4
			}, {
                'name': 'grated Parmesan cheese',
                'quantity': 5,
                'unit': 'g',
                'price': 8
			}, {
                'name': 'seasoned bread crumbs',
                'quantity': 15,
                'unit': 'g',
                'price': 4
			}]
		}, {
            'id': 101,
            'name': 'MD 2',
            'type': 'main dish',
            'image': 'bakedbrie.jpg',
            'description': "Here is how you make it... Lore ipsum...",
            'ingredients': [{
                'name': 'ingredient 1',
                'quantity': 1,
                'unit': 'pieces',
                'price': 8
			}, {
                'name': 'ingredient 2',
                'quantity': 15,
                'unit': 'g',
                'price': 7
			}, {
                'name': 'ingredient 3',
                'quantity': 10,
                'unit': 'ml',
                'price': 4
			}]
		}, {
            'id': 102,
            'name': 'MD 3',
            'type': 'main dish',
            'image': 'meatballs.jpg',
            'description': "Here is how you make it... Lore ipsum...",
            'ingredients': [{
                'name': 'ingredient 1',
                'quantity': 2,
                'unit': 'pieces',
                'price': 8
			}, {
                'name': 'ingredient 2',
                'quantity': 10,
                'unit': 'g',
                'price': 7
			}, {
                'name': 'ingredient 3',
                'quantity': 5,
                'unit': 'ml',
                'price': 4
			}]
		}, {
            'id': 102,
            'name': 'MD 4',
            'type': 'main dish',
            'image': 'meatballs.jpg',
            'description': "Here is how you make it... Lore ipsum...",
            'ingredients': [{
                'name': 'ingredient 1',
                'quantity': 1,
                'unit': 'pieces',
                'price': 4
			}, {
                'name': 'ingredient 2',
                'quantity': 12,
                'unit': 'g',
                'price': 7
			}, {
                'name': 'ingredient 3',
                'quantity': 6,
                'unit': 'ml',
                'price': 4
			}]
		}, {
            'id': 200,
            'name': 'Chocolat Ice cream',
            'type': 'dessert',
            'image': 'icecream.jpg',
            'description': "Here is how you make it... Lore ipsum...",
            'ingredients': [{
                'name': 'ice cream',
                'quantity': 100,
                'unit': 'ml',
                'price': 6
			}]
		}, {
            'id': 201,
            'name': 'Vanilla Ice cream',
            'type': 'dessert',
            'image': 'icecream.jpg',
            'description': "Here is how you make it... Lore ipsum...",
            'ingredients': [{
                'name': 'ice cream',
                'quantity': 100,
                'unit': 'ml',
                'price': 6
			}]
		}, {
            'id': 202,
            'name': 'Strawberry',
            'type': 'dessert',
            'image': 'icecream.jpg',
            'description': "Here is how you make it... Lore ipsum...",
            'ingredients': [{
                'name': 'ice cream',
                'quantity': 100,
                'unit': 'ml',
                'price': 6
			}]
		}
	];

}