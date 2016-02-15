//ExampleView Object constructor
var ExampleView = function (container) {

    // Get all the relevant elements of the view (ones that show data
    // and/or ones that responed to interaction)
	
	//*** we need to make all of these ids in the html files!

	//home screen
    this.createNewDinnerButton = container.find("#createNewDinnerButton");

	//my dinner sidebar
    this.numberOfGuests = container.find("#numberOfGuests");
    this.plusButton = container.find("#plusGuest");
    this.minusButton = container.find("#minusGuest");
    this.selectedDish = container.find("selectedDish");
    this.selectedDishCost = container.find("selectedDishCost");
    this.totalDinnerCost = container.find("#totalDinnerCost");
    this.confirmDinnerButton = container.find("#confirmDinnerButton");

    //select dish screen

    

    this.numberOfGuests.html(model.getNumberOfGuests());

}