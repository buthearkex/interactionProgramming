var FoodView = function (container, model) {

    this.dishDetails = container.find("#dishDetails");
    this.backToSelectDishButton = container.find("#backToSelectDishButton");
    this.confirmDishButton = container.find("#confirmDishButton");
    this.ingredientList = container.find("#ingredientList");
    var ingreList = this.ingredientList;
    this.nbrOfGuests = container.find('.nbrGuests');
    this.foodDescription = container.find('#food-description');


    this.nbrOfGuests.html(model.getNumberOfGuests());

    this.updateView = function (id) {
        if (!(typeof id === 'undefined')) {
            this.foodDescription.html(
                "<h2>" +
                model.getDish(id).name +
                "</h2>" +
                "<img class='img-resposive' src='../images/" +
                model.getDish(id).image +
                "'>" +
                "<p>" +
                model.getDish(id).description +
                "</p>" +
                "<a id='backToSelectDishButton' class='btn btn-default'>Back to select dish</a>"
            );

            ingreList.empty();
            model.getDish(id).ingredients.forEach(function (ingr) {
                ingreList.append(
                    "<div class='row'>" +
                    "<div class='col-sm-3'>" +
                    ingr.name +
                    "</div>" +
                    "<div class='col-sm-3'>" +
                    ingr.quantity +
                    "</div>" +
                    "<div class='col-sm-3'>SEK</div>" +
                    "<div class='col-sm-3'>" +
                    ingr.price +
                    "</div>" +
                    "</div>"
                );
            });

            this.backToSelectDishButton = container.find("#backToSelectDishButton");

            this.confirmDishButton.attr('id', id);
        }
    }

    this.hide = function () {
        container.hide();
    }

    this.show = function (id) {
        this.updateView(id);
        container.show();
    }

    this.updateView();

}