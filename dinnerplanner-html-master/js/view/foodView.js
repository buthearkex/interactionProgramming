var menuItems = model.getFullMenu();
var ingreds = menuItems[0].ingredients;
for (var i = 0; i < ingreds.length; i++) {
    $('#ingredientList').append(
        "<div class='row'>" +
        "<div class='col-sm-3'>" +
        ingreds[i].name +
        "</div>" +
        "<div class='col-sm-3'>" +
        ingreds[i].quantity +
        "</div>" +
        "<div class='col-sm-3'>SEK</div>" +
        "<div class='col-sm-3'>" +
        ingreds[i].price +
        "</div>" +
        "</div>"
    );
}