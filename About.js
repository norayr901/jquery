$(function(){
    $({ counter: 0 }).animate({ counter: 232 }, {
        duration: 2000,
        easing: 'linear',
        step: function(){
            $('.number1').text(Math.ceil(this.counter))
        }
    });

    $({ counter: 0 }).animate({ counter: 521 }, {
        duration: 2000,
        easing: 'linear',
        step: function(){
            $('.number2').text(Math.ceil(this.counter))
        }
    });

    $({ counter: 0 }).animate({ counter: 1453 }, {
        duration: 2000,
        easing: 'linear',
        step: function(){
            $('.number3').text(Math.ceil(this.counter))
        }
    });

    $({ counter: 0 }).animate({ counter: 32 }, {
        duration: 2000,
        easing: 'linear',
        step: function(){
            $('.number4').text(Math.ceil(this.counter))
        }
    });

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
});