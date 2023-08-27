$("#offcanvasNavbar a").click(function () {
    $('.offcanvas').offcanvas('hide');

    setTimeout(function () {
        $(".btn-close").trigger("click");
    }, 500);
});