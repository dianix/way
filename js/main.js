function initCarrusel() {
    $('.slider').slick({
        dots: true,
        arrows: true,
        lazyLoad: 'progressive',
        slidesToShow: 1,
        slidesToScroll: 1,
    });
}
function mensaje(){
    alert('Este es un mensaje activado por un botón de acción')
}
$(document).ready(initCarrusel)
$('.way-btn').click(mensaje)