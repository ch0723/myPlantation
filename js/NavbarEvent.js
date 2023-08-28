/* 1 按下nav-link後就關閉offcanvas視窗 */
$("#offcanvasNavbar a").click(function () {
    $('.offcanvas').offcanvas('hide');

    setTimeout(function () {
        $(".btn-close").trigger("click");
    }, 500);
});

/* 2 只要下滑視窗就讓Navbar出現遮罩背景 */
$(function () {
    $(document).scroll(function () {
        var $nav = $(".Navbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});