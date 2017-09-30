$(document).ready(function () {

    var menu = document.querySelector(".menu"),
        toggle = document.querySelector(".menu-toggle"),
        title = document.querySelector(".title-content");

    function toggleToggle() {
        toggle.classList.toggle("menu-open");
    };

    function toggleMenu() {
        menu.classList.toggle("active");
    };


    toggle.addEventListener("click", toggleToggle, false);
    toggle.addEventListener("click", toggleMenu, false);

    $(".contact-btn").click(function () {
        new Custombox.modal({
            content: {
                effect: 'fadein',
                target: '.modal-body'
            }
        }).open();

    });

    $('input,textarea').focus(function(){
        $(this).data('placeholder',$(this).attr('placeholder'))
        $(this).attr('placeholder','');
    });
    $('input,textarea').blur(function(){
        $(this).attr('placeholder',$(this).data('placeholder'));
    });


        $(".anchor-link").on("click", function (event) {
            event.preventDefault();

            var id  = $(this).attr('href'),

                top = $(id).offset().top;

            $('body,html').animate({scrollTop: top}, 1500);
        });
    

});