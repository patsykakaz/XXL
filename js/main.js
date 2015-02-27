$(window).load(function(){
    BlackBoxMarker = 0;
    i = 0;
    $('.box').each(function(){

        layer = $(this).children('.layer-img');
        illustration = layer.children('.illustration');

        if(illustration.width()<layer.width()){
            illustration.css('height', 'auto').css('width', '100%').css('bottom',(illustration.height()-layer.height())/2);
        }

        $(this).addClass('thumbnail');
    });
});

$(document).ready(function(){

    $('.container-fluid').width($('#main').width());

    $('.navbar-nav').each(function(){
        $(this).css('margin-top', $('.navbar').height()-$(this).outerHeight());
    });
    $('.navbar-form').css('margin-top', ($('.navbar').height()-$('.navbar-form').outerHeight())/1);
});

$(window).resize(function(){
$('.container-fluid').width($('#main').width());
});