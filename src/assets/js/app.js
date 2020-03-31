$(() => {
    $(window).on('load', function () {
        $('.preloader__wrp').fadeOut();
    });
});
$(() => {
    $('.js-header__menu-btn').on('click', function headerHambClick () {
        $('body')
            .toggleClass('menu-open');
    });
    $('.js-link--anchor').on('click', function anchorLinkClick (event) {
        event.preventDefault();
        $('body').removeClass('menu-open');
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
});
$(() => {
    $('.dir__slider').owlCarousel({
        loop: false,
        dots: false,
        items: 1,
        smartSpeed: 800,
        // navText: ["<svg width='23' height='25'><use xlink:href='#string-arrow--left'></use></svg>","<svg width='23' height='25'><use xlink:href='#string-arrow--right'></use></svg>"],
        navText: ["<svg width='18' height='34' viewBox='0 0 18 34' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M17 1L1 17L17 33' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>", "<svg width='18' height='34' viewBox='0 0 18 34' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 1L17 17L1 33' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>"],
        responsive: {
            0: {
                nav: true,
                autoHeight: true,
            },
            1200: {
                nav: false,
                autoHeight: false,
            }
        }
    });
// .on({"translated.owl.carousel": isLast()});

// function isLast() {
//     let activeOwlItemIndex = $(".owl-item.active").index();    };
});
$(() => {
    $('.js-dir__switch-button--prev').on('click', function dirSwitchPrevClick () {
        $('.owl-carousel').trigger('prev.owl.carousel');
    });
    $('.js-dir__switch-button--next').on('click', function dirSwitchNextClick () {
        $('.owl-carousel').trigger('next.owl.carousel');
    });
});