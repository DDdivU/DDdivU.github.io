$(document).ready(function() {
    // PORTFOLIO FILTRO

    $('.filter-btn').on('click', function() {

        let type = $(this).attr('id');
        let boxes = $('.project-box');

        $('.main-btn').removeClass('active');
        $(this).addClass('active');

        if (type == 'gf-btn') {
            eachBoxes('gf', boxes);
        } else if (type == 'mkt-btn') {
            eachBoxes('mkt', boxes);
        } else if (type == 'emp-btn') {
            eachBoxes('emp', boxes);
        } else if (type == 'lid-btn') {
            eachBoxes('lid', boxes);
        } else if (type == 'log-btn') {
            eachBoxes('log', boxes);
        } else if (type == 'lr-btn') {
            eachBoxes('lr', boxes);
        } else {
            eachBoxes('all', boxes);
        }
    });

    function eachBoxes(type, boxes) {
        if (type == 'all') {
            $(boxes).fadeIn();
        } else {
            $(boxes).each(function() {
                if (!$(this).hasClass(type)) {
                    $(this).fadeOut('slow');
                } else {
                    $(this).fadeIn();
                }
            })
        }
    }


    $([document.documentElement, document.body]).animate({
        scrollTop: $(scrollTo).offset().top - 70
    }, 1500);
});