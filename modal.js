$(document).ready(function () {

    $(function () {
        $('.modal-open').click(function () {
            $('#shop-modal').fadeIn();
        });

        $('.modal-close').click(function () {
            $('#shop-modal').fadeOut();
        });
    });


    // $(".narrow-down").click(function () {
    //     var $narrowOpen = $(this).find('.narrow-open');

    //     if ($narrowOpen.hasClass("open")) {
    //         $narrowOpen.removeClass("open");
    //         $narrowOpen.slideUp();
    //     }
    //     else {
    //         $narrowOpen.addClass("open");
    //         $narrowOpen.slideDown();
    //     }
    // });
});

