var SidebarViewController = function (view, model) {

    view.plusButton.click(function () {
        model.setNumberOfGuests(model.getNumberOfGuests() + 1);
    });

    view.minusButton.click(function () {
        model.setNumberOfGuests(model.getNumberOfGuests() - 1);
    });

    view.sidebarNav.on('click', ".removeDishButton", function (event) {
        model.removeDishFromMenu(this.id);
    });

}