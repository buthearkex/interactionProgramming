var FoodView = function (container, model) {

    model.addObserver(this);

    this.dishDetails = container.find("#dishDetails");
    this.backToSelectDishButton = container.find("#backToSelectDishButton");
    this.confirmDishButton = container.find("#confirmDishButton");
    this.ingredientList = container.find("#ingredientList");
    var ingreList = this.ingredientList;
    this.nbrOfGuests = container.find('.nbrGuests');
    this.foodDescription = container.find('#food-description');
    this.totalPrice = container.find('#totalPrice');

    this.savedId;

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
                    ingr.quantity * model.getNumberOfGuests() +
                    "</div>" +
                    "<div class='col-sm-3'>SEK</div>" +
                    "<div class='col-sm-3'>" +
                    ingr.price * model.getNumberOfGuests() +
                    "</div>" +
                    "</div>"
                );
            });

            this.backToSelectDishButton = container.find("#backToSelectDishButton");

            this.confirmDishButton.attr('id', id);

            this.nbrOfGuests.html(model.getNumberOfGuests());

            this.totalPrice.html(model.getPriceOfDish(id));
        }
    }

    this.hide = function () {
        container.hide();
    }

    this.show = function (id) {
        this.savedId = id;
        this.updateView(id);
        container.show();
    }

    this.update = function () {
        this.updateView(this.savedId);
    }

    this.updateView();

}