$(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
        $('.navbar').addClass('bg-dark1');
        $('.navbar').addClass('navbar-light');
        // $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.navbar').removeClass('bg-dark1');
        $('.navbar').removeClass('navbar-light');
        // $('.scrolltop').stop(true, true).fadeOut();
    }   
});