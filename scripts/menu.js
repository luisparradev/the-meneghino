jQuery(document).ready(function($) {
    $(document).on('click', '.main-menu-link', function(e) {
        e.preventDefault();
        if ($('.main-menu-link').hasClass('close-menu') == false) {
            $('.main-menu').addClass('open');
            $(this).addClass('close-menu');
            $('.burger').addClass('open');
            $('body').addClass('overlay-open');
            $('body').removeClass('show-mobile-services');
            if ($('.services-menu').hasClass('close-menu') == false) {
                $('.services-menu').removeClass('show-services');
            }
        } else {
            if ($(window).width() < 768 && $('body').hasClass('overlay-full')) {
                $('body').removeClass('overlay-full contact');
                $('.services-menu').removeClass('show-services');
                $('.opac').removeClass('opac');
            } else if ($('body').hasClass('service-showing')) {
                $('.main-menu').removeClass('main-menu-gone');
                $('.services-content').empty();
                $('body').removeClass('service-showing');
                $('.services-menu').removeClass('move-services-list');
                $('.s-opac').removeClass('s-opac');
                $('#menu-item-146').siblings().find('a').addClass('opac');
            } else {
                $('.main-menu').removeClass('open');
                $('.burger').removeClass('open');
                $(this).removeClass('close-menu');
                $('body').removeClass('overlay-open');
                $('.opac').removeClass('opac');
                if ($('body').hasClass('came-from-menu')) {
                    $('.services-menu').addClass('move-services-list');
                    $('.services-menu').addClass('show-services');
                } else {
                    $('.services-menu').removeClass('show-services');
                    $('.services-menu').removeClass('move-services-list');
                }
                $('body').removeClass('overlay-full contact');
                $('body').removeClass('contact');
                if ($('body').hasClass('cta-menu') && $('body').hasClass('single-project')) {
                    $('header').hide();
                    $('body').removeClass('cta-menu');
                }
                if ($('body').hasClass('cta-menu')) {
                    $('body').removeClass('cta-menu');
                }
                if ($('body').hasClass('service')) {
                    $('.services-content').show();
                }
                $('body').removeClass('show-mobile-services');
            }
        }
    });
    $('.main-menu .menu-item a[href*="services"]').on('click', function(e) {
        e.preventDefault();
        $('.menu-services-list').fadeIn();
        $('.s-opac').removeClass('s-opac');
        if ($(this).hasClass('opac')) {
            $(this).removeClass('opac');
            $(this).closest('li').siblings().find('a').addClass('opac');
        } else {
            $(this).closest('li').siblings().find('a').toggleClass('opac');
        }
        if ($('body').hasClass('contact')) {
            $('body').removeClass('contact');
        } else {
            $('body').toggleClass('overlay-full');
        }
        $('.services-menu').css('display', '');
        $('.services-menu').toggleClass('show-services');
        $('.services-content').hide();
        $('.services-menu').removeClass('move-services-list');
    });
    $('.close-menu').on('click', function() {
        $('.main-menu-link').trigger('click');
    });
});