$(function() {
    $('.slider__box').slick({
        prevArrow: '<img src="images/arrow-left.svg" alt="arrow-left" class="slider__arrow slider__arrow-left">',
        nextArrow: '<img src="images/arrow-right.svg" alt="arrow-right" class="slider__arrow slider__arrow-right">',
    });

    $('.menu__btn').on('click', function() {
        $('.menu__list').toggleClass('active');
    });

});