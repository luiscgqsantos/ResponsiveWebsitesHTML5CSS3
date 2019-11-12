$(document).ready(function () {

    //Sticjy Navigation
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });

    //Scroll on Buttons
    $('.js--scroll-to-plan').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-plans').offset().top
        }, 1000);
    });

    $('.js--scrol-to-start').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-features').offset().top
        }, 1000);
    });

    //Navigation scroll
    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });


    //Animations
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: "50%"
    });

    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: "50%"
    });

    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: "50%"
    });

    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: "50%"
    });

    //Mobile navigation
    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(200);

        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });

    //Maps
    var map = new GMaps({
        div: '.map',
        lat: 41.1531913,
        lng: -8.55555,
        zoom: 13
    });

    map.addMarker({
        lat: 41.153361,
        lng: -8.6135287,
        title: 'Mindera',
        infoWindow: {
            content: '<p>Our HQ!</p>'
        }
    });
});