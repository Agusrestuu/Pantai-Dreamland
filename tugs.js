//menu
var tombol = $(".tombol");
var menu = $("nav .menu ul");

function klikmenu() {
    tombol.click(function () {
        menu.toggle();
    });
    menu.click(function () {
        menu.toggle();
    });
}

$(document).ready(function () {
    var width = $(window).width();
    if (width < 800) {
        klikmenu();
    }
})

//lebar menu
$(window).resize(function () {
    var width = $(window).width();
    if (width > 799) {
        menu.css("display", "block");
    }
    else {
        menu.css("display", "none")
    }
    klikmenu();
})