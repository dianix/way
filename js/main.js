function initCarrusel() {
    $('.slider').slick({
        dots: true,
        arrows: true,
        lazyLoad: 'progressive',
        slidesToShow: 1,
        slidesToScroll: 1,
        // responsive: [{
        //         breakpoint: 960,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 1
        //         }
        //     },
        //     {
        //         breakpoint: 370,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1
        //         }
        //     },
        // ]
    });
}
$(document).ready(initCarrusel)