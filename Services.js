$(function (){
    $(window).bind('scroll', function() {
        var $navheight = $(window).height() - 950;
    
        if($(window).scrollTop() > $navheight){
            $('nav').addClass('fixd')
        }else{
            $('nav').removeClass('fixd')
        }
    });

    $('#errorbtn').on('click', function(){
        $('.errordiv').addClass('active')
    })

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
})