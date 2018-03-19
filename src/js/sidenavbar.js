$(document).ready(function(){
    var alturaMax = $(document).height() - $('.footer').height();
    $(document).scroll(function() {
        var posicionScroll = window.scrollY + window.innerHeight;
        if (posicionScroll > alturaMax) {
            $('aside').addClass('fixed');
        } else {
            $('aside').removeClass('fixed');
        }
    });
})