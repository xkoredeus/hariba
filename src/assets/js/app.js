$(() => {
    $(window).on('load', function () {
        $('.preloader__wrp').fadeOut();
    });
});
$(() => {
    $(window).scroll(function windowScroll() {
        $(this).scrollTop() > 4 ? $('body').addClass('sticky-header') : $('body').removeClass('sticky-header');
    });
});
$(() => {
    $('.header__hmb').on('click', function headerHambClick () {
        $('.layout')
            .toggleClass('menu-open')
            .removeClass('feed-open');
    });
    $('.js-popup__open').on('click', function popupBtnClick () {
        $('.layout').addClass('feed-open').removeClass('menu-open');
    });
    $('.js-popup__close').on('click', function popupCloseBtnClick () {
        $('.layout').removeClass('feed-open');
    });
    $('.js-menu__close').on('click', function popupCloseBtnClick () {
        $('.layout').removeClass('menu-open');
    });
    $('.js-layout__overlay').on('click', function popupOverlayClick () {
        $('.layout').removeClass('feed-open');
    });

    $('.header__nav-link').on('click', function headerNavLinkClick (event) {
        event.preventDefault();
        $('.layout').removeClass('menu-open');
        const id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 900);
    });
});
$(() => {
    $(".js-select").select2({
        minimumResultsForSearch: -1,
    });
});
$(() => {
    $('[data-fancybox]').fancybox({
        animationDuration : 600,
        animationEffect   : 'slide-in-in',
        touch : false
    });
    // $('.menu__close').on('click', function menuCloseBtnClick() {
    //     $.fancybox.close();
    // });
});
// $(() => {
//     $('.port__slider').owlCarousel({
//         loop: false,
//         dots: true,
//         smartSpeed: 800,
//         margin: 2.5,
//         navText: ["<svg width='18' height='34' viewBox='0 0 18 34' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M17 1L1 17L17 33' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>","<svg width='18' height='34' viewBox='0 0 18 34' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 1L17 17L1 33' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>"],
//         responsive : {
//             0   : {
//                 items: 1,
//                 nav: false,
//             },
//             600 : {
//                 items: 2,
//                 nav: true,
//             }
//         }
//     });
// });