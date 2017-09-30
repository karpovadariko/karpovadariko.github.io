$(document).ready(function () {
    var touch = $('.touch-menu');
    var menu = $('.nav');

    $(touch).on('click', function (e) {
        e.preventDefault();
        menu.slideToggle();
    });
    $(window).resize(function () {
        var wid = $(window).width();
        if(wid > 767 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });

    $(".tab-item").not(":first").hide();
    $(".wrapper .tab").click(function() {
        $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab-item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
    
});


