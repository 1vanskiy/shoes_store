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

$(function () {
    $('.product-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
    });
    $('.btn-fav').click(function () {
        $(this).toggleClass('change');
    });
    $('.main-trending-slider').slick({
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 2000,
        autoPlayTimer: 2000,
        speed: 1000,
    })
});


