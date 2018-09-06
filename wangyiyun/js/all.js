 $('.lockbtn').click(function(event) {
        if ($('.lockbtn').hasClass('locked')) {
            $('.lockbtn').removeClass('locked').addClass('unlock')
        } else {
            $('.lockbtn').removeClass('unlock').addClass('locked')
        }
    });

    function hide() {
        $('.musicbar').removeClass('show').addClass('hide');
        $('.lock').removeClass('show').addClass('hide');
    }

    function show() {
        $('.musicbar').removeClass('hide').addClass('show');
        $('.lock').removeClass('hide').addClass('show');
    }


    $(document).mousemove(function(e) {
        clearTimeout(timer2);
        var y = e.clientY;
        var x = $(window).height() - 60;
        if ($('.lockbtn').hasClass('unlock')) {
            if (y > x) {
                show()
            } else {

                timer2 = setTimeout("hide()", 400);
            }
        }
    });
    $(window).scroll(function(event) {
        if ($(window).scrollTop() > 160) {
            $('.topbtn').show()
        } else {
            $('.topbtn').hide()
        }
    })
    $('.topbtn').click(function(event) {
        $('html,body').animate({
            'scrollTop': $('header').offset().top
        }, 500)
    });
$('.bar_login p').mouseenter(function(event) {
        $('.login_list').show();

    });
    $('.bar_login').mouseleave(function(event) {
        $('.login_list').hide()
    });