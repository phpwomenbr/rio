$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('a[href="#top"]').fadeIn();
        } else {
            $('a[href="#top"]').fadeOut();
        }
    });

    $('a[href="#top"]').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

	$('#btnSobre').click(function(){
        $('html, body').animate({scrollTop: $('#sobre').offset().top}, 800);
    });

    $('#btnLocal').click(function(){
        $('html, body').animate({scrollTop: $('#local').offset().top}, 800);
    });

    $('#btnCronograma').click(function(){
        $('html, body').animate({scrollTop: $('#cronograma').offset().top}, 800);
    });

});