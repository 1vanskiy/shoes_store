$(document).ready(function () {
    $('.header-burger').click(function (event) {
        $('.header-burger, .header-menu').toggleClass('active');
    });
    $('.header-burger').click(function (event) {
        $('body').toggleClass('lock');
    });
});