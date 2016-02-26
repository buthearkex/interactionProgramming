var DinnerOverviewView = function (container, model) {

    model.addObserver(this);

    this.overviewFullMenuList = container.find('#overviewFullMenuList');
    this.printButton = container.find('#print');
    this.fullPrice = container.find('#full-price');

    this.updateMenu = function () {
        this.overviewFullMenuList.empty();
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

        this.fullPrice.html(
            "<div class='col-md-3 border'>" +
            "<p>Total:</p>" +
            "<div>" +
            "<p>" +
            model.getTotalMenuPrice() +
            " SEK</p>" +
            "</div>" +
            "</div>"
        );
    }

    this.hide = function () {
        container.hide();
    }

    this.show = function () {
        container.show();
    }

    this.update = function (obj) {
        this.updateMenu();
    }

    this.updateMenu();

}