var DinnerOverviewView = function (container, model) {

    model.addObserver(this);

    this.overviewFullMenuList = container.find('#overviewFullMenuList');
    this.printButton = container.find('#print');
    this.fullPrice = container.find('#full-price');

    this.updateMenu = function (data) {
        this.overviewFullMenuList.empty();
        var overviewItems = model.getFullMenu();
        for (var i = 0; i < overviewItems.length; i++) {
            this.overviewFullMenuList.append(
                "<div class='col-md-3 thumbnail'>" +
                "<img class='img-responsive overview-pic' src='" +
                overviewItems[i].ImageURL +
                "'>" +
                "<p>" +
                overviewItems[i].Title +
                " " +
                Math.round(model.getPriceOfDish(overviewItems[i].RecipeID)) +
                " SEK</p>" +
                "</div>"
            );
        }

        this.fullPrice.html(
            "<div class='col-md-3 border'>" +
            "<p>Total:</p>" +
            "<div>" +
            "<p>" +
            Math.round(model.getTotalMenuPrice()) +
            " SEK</p>" +
            "</div>" +
            "</div>"
        );

        if (overviewItems.length == 0) {
            this.overviewFullMenuList.html(
                "<div>" +
                "You haven't selected any dishes!" +
                "</div>"
            );
        }
    }

    this.hide = function () {
        container.hide();
    }

    this.show = function () {
        container.show();
    }

    this.update = function (data, dataType) {
        if (dataType === 'menu') {
            this.updateMenu(data);
        }

    }

    this.updateMenu();

}