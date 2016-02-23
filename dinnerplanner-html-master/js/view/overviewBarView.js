var OverviewBarView = function (container, model) {

    this.goBackButton = container.find("#go-back");
    this.nbrOfGuests = container.find('#numberOfGuests');

    this.nbrOfGuests.html(model.getNumberOfGuests());

    this.hide = function () {
        container.hide();
    }
    this.show = function () {
        container.show();
    }
}