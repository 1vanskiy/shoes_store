$(document).ready(function () {
    $('.header-burger').click(function (event) {
        $('.header-burger, .header-menu').toggleClass('active');
        //for header-burger menu
    });
    $('.header-burger').click(function (event) {
        $('body').toggleClass('lock');
        //for lock scroll
    });
});