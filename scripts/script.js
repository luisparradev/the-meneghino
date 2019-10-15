jQuery(document).ready(function($) {
    var pathname = window.location.pathname;
    var url = window.location.href;
    if (location.hostname == 'localhost') {
        var site_name = 'http://localhost/lss2020';
    } else if (location.hostname == 'lss.local') {
        var site_name = 'https://lss.local';
    } else {
        var site_name = 'https://longstoryshortdesign.co.uk';
    }

    function stellar_stellar() {
        $.stellar({
            hideDistantElements: false,
            responsive: true,
            horizontalScrolling: false,
            verticalOffset: 0,
        });
    }
    $(window).load(function() {
        stellar_stellar();
    });
    if ($(window).width() < 768) {
        $('.home-section-video').removeClass('home-section next-section full-section');
    }
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.close-menu, .overlay.open, .services-menu.show-services').length) {
            if ($('.overlay.open').is(":visible")) {
                $('.burger').trigger('click');
            }
        }
    });
    if ($('body.home video').length) {
        $('body.home video').get(0).pause();
    }
    if ($('body').hasClass('home')) {
        $.scrollify({
            section: ".full-section",
            easing: "easeOutQuad",
            scrollSpeed: 900,
            updateHash: false,
            standardScrollElements: ".normal-scroll",
            interstitialSection: ".half-section",
            before: function(i, panels) {
                var ref = panels[i].attr("data-section-name");
                $(".pagination-lines .active").removeClass("active");
                $(".pagination-lines").find("a[href=\"#" + ref + "\"]").addClass("active");
                if ($('body').hasClass('home') || $('body').hasClass('page-template-page-about')) {
                    before_scroll();
                }
                setTimeout(function() {
                    pagination_numbers();
                }, 600);
            },
            after: function() {
                if ($('.home-section-video, .home-section-services').hasClass('current-section')) {
                    $('body.home video').get(0).play();
                } else {
                    $('body.home video').get(0).pause();
                }
            },
            afterRender: function() {
                if ($(window).width() < 500) {
                    setTimeout(function() {
                        $('body.home video').get(0).play();
                    }, 2000);
                }
                var pagination = "<ul class=\"pagination-lines\">";
                $(".full-section").each(function() {
                    pagination += "<li><a href=\"#" + $(this).attr("data-section-name") + "\"></a></li>";
                });
                pagination += "</ul>";
                $(".projects").append(pagination);
                $(".pagination-lines a").on("click", function() {
                    $.scrollify.move($(this).attr("href"));
                    $('#intro-vid-wrap').removeClass('video-stay')
                    return false;
                });
                $('.pagination-lines').find('li:first-child a').addClass('active');
                pagination_numbers();
                var current = $.scrollify.current(),
                    prev = $.scrollify.current().prev('.full-section'),
                    next = $.scrollify.current().next('.full-section');
                $(prev).addClass('previous-section');
                $(current).addClass('current-section');
                $(next).addClass('next-section');
                if ($('.related-project-1').hasClass('current-section')) {
                    $('.home-section-services').addClass('previous-section');
                }
                if ($('.home-section-services').hasClass('current-section')) {
                    $('.related-project-1').addClass('next-section');
                }
                if ($('.last-project').hasClass('current-section')) {
                    $('.home-section-testimonials').addClass('next-section');
                }
                if ($('.home-section-testimonials').hasClass('current-section')) {
                    $('.last-project').addClass('previous-section');
                }
                if ($('body').hasClass('home')) {
                    $('#content, .projects').css('background-color', $(current).data('colour'));
                }
                if ($(window).width() <= 1024) {
                    window.onload = function() {
                        setTimeout(function() {
                            scrollTo(0, 0);
                            var elem = document.getElementById('content')
                            elem.style.backgroundColor = 'rgb(26, 26, 26)';
                        }, 100);
                    }
                }
                $.scrollify.update();
                var current_section_name = $('.current-section').data('section-name');
                $('.pagination-lines').find('a').removeClass('active');
                $('.pagination-lines').find('a[href="#' + current_section_name + '"]').addClass('active');
            },
            afterResize: function() {
                $.scrollify.update();
            }
        });
    }
    $('.our-featured-projects').on('click', function() {
        $.scrollify.next();
        return false;
    });

    function before_scroll() {
        var current = $.scrollify.current(),
            prev = $.scrollify.current().prev('.full-section'),
            next = $.scrollify.current().next('.full-section');
        if ($('.home-section-video').hasClass('previous-section')) {
            $('#intro-vid-wrap').addClass('fixed-video');
            setTimeout(function() {
                $('#intro-vid-wrap').removeClass('fixed-video');
            }, 1000);
        }
        $('.previous-section').removeClass('previous-section');
        $('.current-section').removeClass('current-section');
        $('.next-section').removeClass('next-section');
        $(prev).addClass('previous-section');
        $(current).addClass('current-section');
        if ($('.related-project-1').hasClass('current-section')) {
            $('.home-section-services').addClass('previous-section');
        }
        if ($('.last-project').hasClass('current-section')) {
            $('.home-section-cta').addClass('next-section');
        }
        if ($('.home-section-services').hasClass('next-section')) {
            $('#intro-vid-wrap').addClass('fixed-video');
            setTimeout(function() {
                $('#intro-vid-wrap').removeClass('fixed-video');
            }, 1000);
        }
        $(next).addClass('next-section');
        if ($('.home-section-services').hasClass('current-section')) {
            $('.home-section-services').removeClass('previous-section');
            $('.related-project-1').addClass('next-section');
        }
        if ($('.home-section-cta').hasClass('current-section')) {
            $('.home-section-cta').removeClass('next-section');
            $('.last-project').addClass('previous-section');
        }
        if ($('body').hasClass('home')) {
            $('#content, .projects').css('background-color', $(current).data('colour'));
        }
        if ($('.related-project-1').hasClass('current-section')) {
            $('#intro-vid-wrap').addClass('fixed-video-up');
            setTimeout(function() {
                $('#intro-vid-wrap').removeClass('fixed-video-up').addClass('video-stay');
            }, 750);
        } else if ($('.related-project-1').hasClass('next-section')) {
            $('#intro-vid-wrap').removeClass('video-stay').addClass('fixed-video-down');
            setTimeout(function() {
                $('#intro-vid-wrap').removeClass('fixed-video-down');
            }, 750);
        }
    }

    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this,
                args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };
    if ($('.home-section-cta').length) {
        var cta_position = $('.home-section-cta').position().top;
    }
    if ($('body').hasClass('home')) {
        setTimeout(function() {
            $('#preloader').fadeOut('slow', function() {
                $(this).remove();
            });
        }, 3000);
    } else {
        $(window).load(function() {
            $('#preloader').fadeOut('slow', function() {
                $(this).remove();
            });
        });
    }
    $(window).on('load resize', set_project_image_height);

    function set_project_image_height() {
        if ($('.project-image').length) {
            var project_image_width = $('.project-image').width();
            $('.project-image').each(function() {
                $(this).css('height', project_image_width * 0.6);
            });
        }
    }
    $('.testimonials').slick({
        fade: true,
        arrows: false,
        dots: true,
        adaptiveHeight: true
    });

    function cta_services() {
        $('header').show();
        $('.burger').addClass('open close-menu');
        $('body').addClass('overlay-open overlay-full cta-menu');
        $('.main-menu').addClass('open');
        $('.services-menu').removeClass('show-services');
        $('.services-menu').addClass('show-services');
        $('.came-from-menu .services-menu').show();
        $('.services-content').hide();
        $('.services-menu').removeClass('move-services-list');
        $('.burger-wrap').fadeIn();
        $('#content').css('z-index', '1');
        $('.menu-item a[href*="services"]').closest('li').siblings().find('a').addClass('opac');
        return false;
    };
    $('.our-services').on('click', cta_services);

    function back_arrow() {
        if ($(window).scrollTop() == 0) {
            back_function();
        } else if ($(window).scrollTop() > $(document).height() / 2) {
            $("html, body").animate({
                scrollTop: 0
            }, 1000, 'easeOutQuad', back_function);
        } else {
            $("html, body").animate({
                scrollTop: 0
            }, 500, 'easeOutQuad', back_function);
        }
    }
    $(document).on('click', '.back-arrow', back_arrow);

    function back_function() {
        $('.open-project').siblings().show();
        $('.project-item .section-cta').hide();
        $('.project-content').empty().hide();
        $('.project-item').css('position', 'relative');
        $('.back-arrow').fadeOut(function() {
            $('.burger-wrap').fadeIn();
        });
        $(this).closest('.project-item').removeClass('current-section');
        $(this).closest('.project-item').next('next-section');
        var the_bg_colour = $(this).closest('.project-item').attr('data-colour');
        $('#content').css('background-color', the_bg_colour);
        $('.home-section-top').show();
        $('.home-section-video').show();
        $('.home-section-services').show();
        $('.home-section-agency').show();
        $('.home-section-testimonials').show();
        $('.home-section-cta').show();
        $('.all-projects').show();
        $('.came-from-menu .services-menu').show().addClass('show-services move-services-list');
        $('.project-img').removeClass('normal-scroll');
        if ($('body').hasClass('home')) {
            $('.project-item').addClass('full-section').removeClass('normal-scroll');
        }
        $('.project-item').each(function() {
            var position_on_page = $(this).position().top;
            $(this).attr('data-height', position_on_page);
        });
        if ($('body').hasClass('page-id-2') || $('body').hasClass('page-template-default')) {
            var project_position = $('.open-project').data('height') + $(window).height() * 3;
            $('html, body').scrollTop(project_position);
        }
        if ($('body').hasClass('home')) {
            $('.project-item').removeClass('open-project next-project').css('display', '');
        } else {
            $('.project-item').removeClass('open-project');
            $('.next-project').css('position', '').hide();
        }
        $('.service-link').removeClass('open-project');
        $('.project-img').removeClass('open-project');
        $('body').removeClass('single-project');
        $('body').removeClass('move-off-top');
        if ($(window).width() > 1024) {
            $('.project-img').css('background-attachment', '');
        }
        element_colours();
        $('#content').css('z-index', '1');
        $('.next-text').hide();
        $('.project-content-to-load').empty();
        $('.header').show();
        $('#content').removeClass('no-line');
        if ($('body').hasClass('home')) {
            window.history.pushState('back', '', '/');
            _gaq.push(['_trackPageview', '/']);
            $.ajax({
                url: window.location.href,
                success: function(data) {
                    var title = $(data).filter("title").text();
                    document.title = title;
                }
            });
            $.scrollify.enable();
            before_scroll();
            $('.project-img').addClass('view-project');
        } else {
            window.history.pushState('back', '', '/projects');
            _gaq.push(['_trackPageview', '/projects']);
            $('.project-img').addClass('service-link');
            if ($('.active-project').length) {
                $('.active-project').removeClass('active-project');
            }
        }
        setTimeout(function() {
            $('.current-section').closest('.projects').addClass('with-border');
            $('.project-item').css('position', '');
        }, 400);
        $('.project-img').css('height', '');
        var current_section_name = $('.current-section').data('section-name');
        $('.pagination-lines').find('a').removeClass('active');
        $('.pagination-lines').find('a[href="#' + current_section_name + '"]').addClass('active');
        $('body').removeClass('project-hover');
        if ($('body').hasClass('home')) {
            $('body').css('overflow', 'hidden');
        }
        return false;
    }
    $(window).on("popstate", function() {
        if ($('body').hasClass('home') && $('body').hasClass('single-project')) {
            $('.open-project').find('.back-arrow').trigger('click');
        } else if ($('body').hasClass('single') && $('body').hasClass('single-project')) {
            window.history.go(0);
        } else if ($(window).width() < 768) {
            window.history.go(0);
            location.reload();
        } else {
            window.history.go(0);
        }
    });

    function project_positions() {
        $('.project-item').each(function() {
            var position_on_page = $(this).position().top;
            $(this).attr('data-height', position_on_page);
        });
    }
    project_positions();
    var desktop = debounce(function() {
        if ($(window).width() > 1024) {
            $('.services-menu a').on('click', function() {
                $('body').addClass('changing-service');
                $('.projects-wrapper').removeClass('related-projects-scroll-up');
                $('.services-menu').addClass('move-services-list');
                $('.main-menu').addClass('main-menu-gone');
                $('body').removeClass('overlay-open overlay-full');
                $('.main-menu').removeClass('open main-menu-gone');
                $('#content').empty();
                $('*').removeClass('current-section, previous-section');
                $('body').removeClass('home page page-template page-template-default error404 elementor-default page-template-page-home page-template-page-home-php single-services home-services white-bg').addClass('services-template-default single');
                $('#content').append('<div class="service-content full-section"></div>');
                $('#content').append('<div class="related-projects projects-wrapper"></div>');
                $('#content').append('<div class="colour-overlay"></div>');
                var post_link = $(this).attr("href");
                var destination_div = ".service-content";
                var projects_destination_div = ".related-projects";
                var slug = $(this).data('slug');
                $(destination_div).fadeOut(0, function() {
                    var content_to_load = ' .full-content-to-load';
                    $.ajax({
                        url: post_link,
                        success: function(data) {
                            data = data.replace("<body", "<container").replace("body>", "container>");
                            var classes = $(data).filter("container").attr("class");
                            $("body").attr("class", classes);
                        }
                    });
                    $(this).load(post_link + content_to_load, function() {
                        $(this).fadeIn();
                        $.scrollify.update();
                        $('.services-list li a').hide();
                        $('.services-list a[data-slug="' + slug + '"]').closest('li').siblings().find('a').addClass('s-opac');
                        set_project_image_height();
                        window.history.pushState(slug, '', '/services/' + slug);
                        _gaq.push(['_trackPageview', '/services/' + slug]);
                        $.ajax({
                            url: window.location.href,
                            success: function(data) {
                                var title = $(data).filter("title").text();
                                document.title = title;
                            }
                        });
                        setTimeout(function() {
                            $('.services-menu.show-services.move-services-list .menu-services-list').fadeOut(function() {
                                $('.burger').trigger('click');
                                console.log('3');
                                $('.services-menu.show-services.move-services-list .menu-services-list').show();
                            });
                            $('.services-list li a').fadeIn();
                        }, 700);
                    });
                });
                $(projects_destination_div).fadeOut(0, function() {
                    $(this).load(post_link + ' .projects-wrapper', function() {
                        $(this).fadeIn(400, function() {
                            $('.our-services').on('click', cta_services);
                            $('body').addClass('services-template-default');
                            $('body').removeClass('changing-service');
                            $.stellar('refresh');
                            $('html, body').animate({
                                scrollTop: 1
                            });
                            setTimeout(function() {
                                $('.projects-wrapper').addClass('related-projects-scroll-up');
                            }, 1000);
                        });
                    });
                });
                return false;
            });
            $(document).on('click', '.next-service', function(e) {
                e.preventDefault();
                var next_href = $(this).attr('href');
                $("html, body").animate({
                    scrollTop: 0
                }, 1000, 'easeOutQuad', function() {
                    $('.services-home-content').fadeOut();
                    $('.related-projects').fadeOut();
                    $('.services-list a[href="' + next_href + '"]').addClass('s-opac').trigger('click');
                });
                return false;
            });
            $(document).on('click', '.view-project', function(e) {
                e.preventDefault();
                $.scrollify.disable();
                $('body').css('overflow', 'hidden');
                $('.scrollbar').show();
                $('.back-arrow').css('pointer-events', 'none');
                $('#content').addClass('no-line');
                $('.burger-wrap').fadeOut(function() {
                    $('.white-loader').fadeIn();
                });
                $('.project-img').css('height', '100vh');
                $('.projects').removeClass('with-border');
                $('.service-content').hide();
                $('.home-section-top').hide();
                $('.home-section-video').hide();
                $('.home-section-services').hide();
                $('.home-section-agency').hide();
                $('.home-section-testimonials').hide();
                $('.home-section-cta').hide();
                $('.load-more-projects').hide();
                $('.all-projects').hide();
                $('.came-from-menu .services-menu').hide();
                $('.current-section, .next-section, .previous-section').removeClass('current-section next-section previous-section');
                $('.project-item').removeClass('invert');
                $('.project-img').removeClass('view-project');
                var post_link = $(this).attr("href");
                var projects_destination_div = $(this).closest('.project-item').find(".project-content");
                var slug = $(this).closest('.project-item').data('slug');
                $(projects_destination_div).fadeOut(0, function() {
                    $(this).load(post_link + ' .project-content-to-load', function() {
                        $(this).fadeIn(400, function() {
                            $('.project-item').removeClass('full-section').addClass('normal-scroll');
                            $('.section-cta.half-section').css('display', 'none');
                            var post_styles = post_link + ' #elementor-frontend-stylesheet';
                            var project_id = $(this).closest('.project-item').data('id');
                            $.get(site_name + '/wp-content/uploads/elementor/css/post-' + project_id + '.css', function(data) {
                                $('head').append('<style>' + data + '</style>');
                            });
                            var lightdark = $('.open-project').data('lightdark');
                            if (lightdark == 'dark') {
                                $('.open-project .project-img, .open-project .project-introduction').addClass('invert');
                            }
                            element_colours();
                            if ($(window).width() > 1024) {
                                $('.open-project .project-img').css('background-attachment', 'fixed');
                            }
                            setTimeout(function() {
                                $('body, html').animate({
                                    scrollTop: 220
                                });
                                $('.white-loader').fadeOut(function() {
                                    $('.open-project .back-arrow').fadeIn();
                                });
                            }, 700);
                            $('.back-arrow').css('pointer-events', '');
                            $('.scrollbar').hide();
                            $('body').css('overflow', 'visible');
                        });
                    });
                });
                if ($('body').hasClass('home')) {
                    var position = $(this).closest('.project-item').position().top;
                    $('#content').attr('data-position', position);
                }
                $('body').removeClass('page page-template page-template-page-home page-template-page-home-php single-services').addClass('single-project move-off-top');
                $(this).closest('.project-item').addClass('open-project');
                $('.open-project').next('.project-item').addClass('next-project');
                $('.open-project').siblings().hide();
                $('#content').css('z-index', '5');
                $('.project-item .section-cta').show();
                window.scrollTo(0, 0);
                $(this).closest('.project-item').next().find('.next-text').show();
                window.history.pushState(slug, '', '/projects/' + slug);
                _gaq.push(['_trackPageview', '/projects/' + slug]);
                $.ajax({
                    url: window.location.href,
                    success: function(data) {
                        var title = $(data).filter("title").text();
                        document.title = title;
                    }
                });
                $('.our-services').on('click', cta_services);
                $('.next-project').show();
                return false;
            });
            $(document).on({
                mouseenter: function() {
                    if ($(window).width() > 1024) {
                        if ($('body').hasClass('post-type-archive-project') || $('body').hasClass('services-template-default')) {
                            var this_project = $(this).closest('.project'),
                                colour = this_project.data('colour'),
                                overlay = $('.colour-overlay'),
                                body = $('body');
                            $('.project').find('*').removeClass('project-top');
                            if (this_project.is(":in-viewport")) {
                                this_project.find('*').addClass('project-top');
                            }
                            overlay.css("background-color", colour);
                            body.addClass('show-colour-overlay');
                        } else if ($('body').hasClass('home')) {
                            $('body').addClass('project-hover');
                        }
                    }
                },
                mouseleave: function() {
                    if ($(window).width() > 1024) {
                        if ($('body').hasClass('post-type-archive-project') || $('body').hasClass('services-template-default')) {
                            console.log('5');
                            var overlay = $('.colour-overlay'),
                                body = $('body');
                            body.removeClass('show-colour-overlay');
                        } else if ($('body').hasClass('home')) {
                            $('body').removeClass('project-hover');
                        }
                    }
                }
            }, '.project-link, .view-project');
        } else {
            $('.mobile-services-button').on('click', function(e) {
                e.preventDefault();
                if ($('body').hasClass('show-mobile-services')) {
                    $('body').removeClass('show-mobile-services');
                } else {
                    $('body').addClass('show-mobile-services');
                    $('.buttonfff').hide();
                }
                return false;
            });
            $(document).on('click', '.view-project', function(e) {
                e.preventDefault();
                var href = $(this).attr('href');
                window.location = href;
            });
        }
    }, 250);
    desktop();
    window.addEventListener('resize', desktop);
    $('.home').on('click', '.next-project', function(e) {
        e.preventDefault();
        $('.back-arrow').css('pointer-events', 'none');
        $('.next-project').find('.next-text').fadeOut(100);
        $(this).next().find('.next-text').show();
        var nextslug = $(this).attr('data-slug');
        window.history.pushState('home', '', '/projects/' + nextslug);
        _gaq.push(['_trackPageview', '/projects/' + nextslug]);
        $.ajax({
            url: window.location.href,
            success: function(data) {
                var title = $(data).filter("title").text();
                document.title = title;
            }
        });
        var post_link = $('.next-project').find('.view-project').attr("href");
        var projects_destination_div = $('.next-project').find('.project-content');
        var slug = $('.next-project').data('slug');
        $('.white-loader').fadeIn();
        $(projects_destination_div).fadeOut(0, function() {
            $(this).load(post_link + ' .project-content-to-load', function() {
                $(this).fadeIn();
                var post_styles = post_link + ' #elementor-frontend-stylesheet';
                var project_id = $(this).closest('.project-item').data('id');
                $.get(site_name + '/wp-content/uploads/elementor/css/post-' + project_id + '.css', function(data) {
                    $('head').append('<style>' + data + '</style>');
                });
                $('.back-arrow').css('pointer-events', '');
                setTimeout(function() {
                    $('body, html').animate({
                        scrollTop: 220
                    });
                    $('.white-loader').fadeOut(function() {
                        $('.open-project .back-arrow').fadeIn();
                    });
                }, 700);
            });
        });
        $('body').css('overflow', 'hidden');
        $('.open-project').addClass('fade-up-out');
        var win_h = $(window).height() - $('.next-project').height();
        $('.next-project').addClass('easing-upward').css({
            "transform": "translate3d(0, -" + win_h + "px, 0)"
        });
        setTimeout(function() {
            $('.open-project').removeClass('open-project fade-up-out').hide();
            $('.easing-upward').removeClass('easing-upward').css({
                "transform": ""
            });
            window.scrollTo(0, 0);
            $('.next-project').addClass('open-project').removeClass('next-project');
            $('.open-project').next('.project-item').addClass('next-project');
            $('body').css('overflow', 'visible');
            var current_position = $('.open-project').data('height');
            $('#content').attr('data-position', current_position);
            if ($(window).width() > 1024) {
                $('.open-project .project-img').css('background-attachment', 'fixed');
            }
            $('.next-project').show();
            var the_bg_colour = $('.open-project').attr('data-colour');
            $('#content').css('background-color', the_bg_colour);
            $('.projects').css('background-color', the_bg_colour);
        }, 500);
    });
    var last_bit_url = pathname.split("/")[3];
    $('.services-list li a').each(function() {
        if ($(this).data('slug') == last_bit_url) {
            $(this).closest('li').siblings().find('a').addClass('s-opac');
        }
    });
    if ($('.projects-wrapper').length) {
        setTimeout(function() {
            $('.projects-wrapper').addClass('related-projects-scroll-up');
        }, 1000);
    }
    $(document).on('click', '.services-list a', service_link);

    function service_link(e) {
        e.preventDefault();
        $('.projects-wrapper').removeClass('related-projects-scroll-up');
        $('html, body').animate({
            scrollTop: 0
        }, 400);
        $('body').addClass('ratatat');
        setTimeout(function() {
            $('body').removeClass('ratatat')
        }, 900);
        $('.home-section-services h2').addClass('move-services-title');
        $('.services-list').addClass('move-services');
        $('body').removeClass('home page page-template page-template-page-home page-template-page-home-php single-services white-bg');
        $('.home-section-services').css('background-color', '#fff');
        $('.s-opac').removeClass('s-opac');
        if ($(this).hasClass('s-opac')) {
            $(this).removeClass('s-opac');
            $(this).closest('li').siblings().find('a').addClass('s-opac');
        } else {
            $(this).closest('li').siblings().find('a').toggleClass('s-opac');
        }
        $('.home-section:not(.home-section-services)').remove();
        $('.home-section-services .numbers').remove();
        var post_link = $(this).attr("href");
        var destination_div = ".services-home-content";
        if ($('.related-projects').length) {
            var projects_destination_div = ".related-projects";
        } else {
            var projects_destination_div = ".projects";
        }
        var slug = $(this).data('slug');
        $(destination_div).fadeOut(400, function() {
            $(this).load(post_link + ' .half-content-to-load', function() {
                $(this).fadeIn(400, function() {
                    $.scrollify.update();
                    $.stellar('refresh');
                    window.history.pushState(slug, '', '/services/' + slug);
                    _gaq.push(['_trackPageview', '/services/' + slug]);
                    $.ajax({
                        url: window.location.href,
                        success: function(data) {
                            var title = $(data).filter("title").text();
                            document.title = title;
                        }
                    });
                });
            });
        });
        $(projects_destination_div).fadeOut(400, function() {
            $(this).load(post_link + ' .projects-wrapper', function() {
                $(this).fadeIn(400, function() {
                    $.stellar('refresh');
                    $('html, body').animate({
                        scrollTop: 1
                    });
                    setTimeout(function() {
                        $('.projects-wrapper').addClass('related-projects-scroll-up');
                    }, 1000);
                });
            });
        });
        return false;
    }

    function pagination_numbers() {
        var project_index = $.scrollify.current().data('index');
        if (project_index == null) {
            var project_index = $('.project-item').size();
        }
        $('.top-number').html(("0" + project_index).slice(-2));
    }
    pagination_count();

    function pagination_count() {
        var items = $('.project-item').size();
        $('.bot-number').html(("0" + items).slice(-2));
    }
    $(window).on('load scroll', function(e) {
        if ($('.elementor-invisible').is(":in-viewport( 400 )")) {
            $('.elementor-invisible:in-viewport( 400 )').css('opacity', '0');
            $('.elementor-invisible:in-viewport( 400 )').removeClass('elementor-invisible').animate({
                'opacity': 1
            }, 1500);
        }
    });
    $(window).on('load scroll', function(e) {
        if ($('body').height() <= ($(window).height() + $(window).scrollTop() + 1)) {
            $('#content').addClass('no-line');
        } else {
            $('#content').removeClass('no-line');
        }
        $('body:not(.page-id-1788):not(.home) video').each(function() {
            if ($(window).width() > 425) {
                console.log(1);
                if ($(this).visible(true)) {
                    console.log(2);
                    $(this)[0].play();
                } else {
                    $(this)[0].pause();
                }
            } else {
                console.log(3);
                $(this)[0].play();
            }
        });
        if ($(window).scrollTop() >= $('body').height() - $(window).height()) {
            $('.scroll-down').hide();
        } else {
            $('.scroll-down').show();
        }
        if ($(window).scrollTop() >= ($(window).height() * 3) && $(window).scrollTop() <= cta_position - ($(window).height() * 2)) {
            $('.projects').addClass('with-border');
        } else {
            $('.projects').removeClass('with-border');
        }
        e.stopPropagation();
    });
    element_colours();

    function element_colours() {
        $(window).on('load scroll', function() {
            if (Array.prototype.some.call($('.invert'), function(element) {
                scrollPosition = $(window).scrollTop();
                elementTop = $(element).offset().top;
                elementBottom = $(element).outerHeight() + elementTop;
                if (scrollPosition >= elementTop - 50 && scrollPosition <= elementBottom - 50) {
                    return true;
                } else {
                    return false;
                }
            })) {
                $('body').addClass('white-elements');
            } else {
                $('body').removeClass('white-elements');
            }
        });
    }
    $('.changing-text').each(function(index) {
        var characters = $(this).text().split("");
        $this = $(this);
        $this.empty();
        $.each(characters, function(i, el) {
            $this.append("<span>" + el + "</span");
        });
    });
    $('.changing-text-wrap').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        arrows: false,
    });
    var timelineBlocks = $('.cd-timeline-block'),
        offset = 0.8;
    hideBlocks(timelineBlocks, offset);
    $(window).on('scroll', function() {
        (!window.requestAnimationFrame) ? setTimeout(function() {
            showBlocks(timelineBlocks, offset);
        }, 100): window.requestAnimationFrame(function() {
            showBlocks(timelineBlocks, offset);
        });
    });

    function hideBlocks(blocks, offset) {
        blocks.each(function() {
            ($(this).offset().top > $(window).scrollTop() + $(window).height() * offset) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
        });
    }

    function showBlocks(blocks, offset) {
        blocks.each(function() {
            ($(this).offset().top <= $(window).scrollTop() + $(window).height() * offset && $(this).find('.cd-timeline-img').hasClass('is-hidden')) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
        });
    }
    if ($('body').hasClass('blog')) {
        window.sr = ScrollReveal({
            opacity: 1,
            viewFactor: 0,
            easing: 'ease-in-out',
            delay: 0,
            mobile: true,
            reset: false
        });
        var $gridder = $('.grid').masonry({
            columnWidth: '.grid-sizer',
            gutter: '.gutter-sizer',
            itemSelector: '.post',
            percentPosition: true
        });
        $gridder.imagesLoaded().progress(function() {
            console.log('log');
            $gridder.masonry('layout');
        });
        sr.reveal('.featured__container .post__image img', {
            origin: "bottom",
            duration: 650,
            distance: '250px',
            scale: 1,
            delay: 1000
        });
        sr.reveal('.featured__container .post__text', {
            origin: "bottom",
            duration: 600,
            distance: '300px',
            scale: 1,
            delay: 1000
        });
        sr.reveal('.posts .post .post__image__wrap--appear', {
            origin: "bottom",
            viewFactor: 0.85,
            duration: 800,
            scale: 1.3
        });
    }
    if ($('body').hasClass('single-post')) {
        window.sr = ScrollReveal({
            opacity: 1,
            viewFactor: 0,
            easing: 'ease-in-out',
            delay: 0,
            mobile: true,
            reset: false
        });
        sr.reveal('.single__hero', {
            origin: "bottom",
            duration: 650,
            distance: '250px',
            scale: 1,
            delay: 500
        });
    }
    if ($('body').hasClass('home')) {
        $(document).on('click', '#content:not(.no-line) .next-slide', function(e) {
            e.preventDefault();
            $.scrollify.next();
        });
        $(document).on('click', '.no-line .next-slide', function(e) {
            e.preventDefault();
            $.scrollify.move(0);
        });
        $(document).on('click', '.service-section h4', function(e) {
            e.preventDefault();
            var window_width = $(window).width();
            if (window_width < 992) {
                $(this).closest('.service-section').siblings().find('ul').slideUp();
                $(this).next().slideToggle();
            }
        });
    }
});