// Designed and Developed by Ayushi Pandey  

$(document).ready(function() {
    setTimeout(function() {
        $(".init_none").css("display", "block");
    }, 2900);

    setTimeout(function() {
        $('#loader').fadeOut(400, function() {
            $('#loader').remove();
        });
    }, 3200);

    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 600, 'linear');
    });

    if ($(this).scrollTop() > 400) {
        $('.navbar').addClass('bg-dark1');
        $('.navbar').addClass('navbar-light');

    } else {
        $('.navbar').removeClass('bg-dark1');
        $('.navbar').removeClass('navbar-light');
    }
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
        $('.navbar').addClass('bg-dark1');
        $('.navbar').addClass('navbar-light');
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.navbar').removeClass('bg-dark1');
        $('.navbar').removeClass('navbar-light');
        $('.scrolltop').stop(true, true).fadeOut();
    }
});

$(function() {
    $(".scroll").click(function() {
        $("html,body").animate({
            scrollTop: $("#home").offset().top
        }, 600, 'linear');
    })
})