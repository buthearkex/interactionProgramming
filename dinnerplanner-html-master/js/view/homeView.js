var HomeView = function (container, model) {
    this.createNewDinnerButton = container.find("#createNewDinnerButton");

    this.hide = function () {
        container.hide();
    }

    this.show = function () {
        container.show();
    }
}