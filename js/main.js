$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#button-up').fadeIn();
        } else {
            $('#button-up').fadeOut();
        }
    });
    $('#button-up').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

jQuery('.plit_imgs ul.plit_img_small li:first-child').addClass('small_act');
jQuery('.plit_imgs ul.plit_img_small li a').on('click', function () {
    jQuery('.plit_imgs ul.plit_img_small li').removeClass('small_act');
    jQuery(this).parent('li').addClass('small_act');
    jQuery('.plit_imgs ul.plit_img_big li').hide();
    jQuery('.plit_imgs ul.plit_img_big li.' + jQuery(this).attr('id')).show();
    jQuery('.plit_img_big li a img').each(function () {
        var topact = (567 * jQuery(this).height() / jQuery(this).width() - 398);
        if (topact > 0)
            jQuery(this).css({
                'marginTop': '-' + (topact / 2) + 'px'
            });
    });

    return false;
});

// scroll to child

jQuery('.plit_content_list ul li a').on('click', function () {
    jQuery('html, body').animate({
        scrollTop: (jQuery('#sub_' + jQuery(this).attr('id')).offset().top) - 165
    }, 1000);
    return false;
})