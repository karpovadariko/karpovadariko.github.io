$(document).ready(function () {

    /*tabs*/

    $(".tab-item").not(":first").hide();
    $(".tab-wrapper .tab").click(function () {
        $(".tab-wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab-item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

   /*slider*/

    var mySwiper = new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        effect: 'fade',
        speed: 500
    })

    /*mobile menu*/

    $(".menu-toggle").click(function() {
        $(this).toggleClass("active");
        $(".mobile-menu").toggleClass("active");
    });

});




