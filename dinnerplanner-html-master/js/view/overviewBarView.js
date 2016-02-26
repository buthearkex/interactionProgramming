var OverviewBarView = function (container, model) {

    model.addObserver(this);

    this.goBackButton = container.find("#go-back");
    this.nbrOfGuests = container.find('#numberOfGuests');

    this.updateNumberOfGuests = function () {
        this.nbrOfGuests.html(model.getNumberOfGuests());
    };

    this.hide = function () {
        container.hide();
    }
    this.show = function () {
        container.show();
    }

    this.update = function () {
        this.updateNumberOfGuests();
    }

    this.nbrOfGuests.html(model.getNumberOfGuests());
}