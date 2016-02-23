var DinnerOverviewView = function (container, model) {

    this.overviewFullMenuList = container.find('#overviewFullMenuList');
    this.printButton = container.find('#print');

    var overviewItems = model.getFullMenu();
    for (var i = 0; i < overviewItems.length; i++) {
        this.overviewFullMenuList.append(
            "<div class='col-md-3 thumbnail'>" +
            "<img class='img-responsive overview-pic' src='images/" +
            overviewItems[i].image +
            "'>" +
            "<p>" +
            model.getPriceOfDish(overviewItems[i].id) +
            " SEK</p>" +
            "</div>"
        );
    }

    this.overviewFullMenuList.append(
        "<div class='col-md-3 border'>" +
        "<p>Total:</p>" +
        "<div>" +
        "<p>" +
        model.getTotalMenuPrice() +
        " SEK</p>" +
        "</div>" +
        "</div>"
    );


    this.hide = function () {
        container.hide();
    }

    this.show = function () {
        container.show();
    }


}