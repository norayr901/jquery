$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $('#scrollToTop').fadeIn();
    } else {
        $('#scrollToTop').fadeOut();
    }
});

$('#scrollToTop').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 800);
});

$(window).bind('scroll', function() {
    var $navheight = $(window).height() - 950;

    if($(window).scrollTop() > $navheight){
        $('nav').addClass('fixd')
    }else{
        $('nav').removeClass('fixd')
    }
});

$('.sec4').on('click', 'img', function(){
    $(this).toggleClass('active')
})

$('#errorbtn').on('click', function(){
    $('.errordiv').addClass('active')
})