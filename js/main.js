$(window).load(function(){
    $('.box').each(function(){
        layer = $(this).children('.layer-img');
        illustration = layer.children('a').children('.illustration');
        if(illustration.width()<layer.width()){
            illustration.css('height', 'auto').css('width', '100%').css('bottom',(illustration.height()-layer.height())/2);
        }
//        $(this).addClass('thumbnail');
    });
});

$(document).ready(function(){

    $('#masterNav .container-fluid').width($('#main').width());

    $('#masterNav .navbar-nav').each(function(){
        $(this).css('margin-top', ($('.navbar').height()-$(this).outerHeight()));
    });
    $(this).children('.navbar-form').css('margin-top', $('.navbar').height()-$('.navbar-form').outerHeight());
});

$(window).resize(function(){
    $('.container-fluid').width($('#main').width());
});

// HABILLAGE
$(document).ready(function(){
    if($('#pubLayer').length){
        $('body').css('padding-bottom', '0');
        $('#navBorder').css('margin-bottom', '0');
        $('.container').addClass('shadowForContainer');
    }
});
// ./HABILLAGE
