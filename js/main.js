$(window).load(function(){
    $('.box').each(function(){
        layer = $(this).children('.layer-img');
        illustration = layer.children('a').children('.illustration');
        if(illustration.width()<layer.width()){
            illustration.css('height', 'auto').css('width', '100%').css('bottom',(illustration.height()-layer.height())/2);
        }
    });
});

$(document).ready(function(){

    $('#masterNav .container-fluid').width($('#main').width());

    $('#masterNav .navbar-nav').each(function(){
        $(this).css('margin-top', ($('.navbar').height()-$(this).outerHeight()));
    });
    // Logo principal
    $('#masterNav img').css('margin-top', ($('#masterNav').outerHeight()-$('#masterNav img').outerHeight())/2);
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


$(document).ready(function(){
    // layer pour éviter le scintillement de la navbar lors du déploiement 
    $('#contentNav_layer').css('height', $('#contentNav').outerHeight());
    // positionnement du logo pour la deployNav
    $('#logo_deploy').css('left', ($(window).width()-$('#main').outerWidth())/2-$('#logo_deploy').outerWidth());
    // Padding automatique selon la taille du logo
    $('#logo_deploy').css('padding-top', ($('#contentNav').outerHeight()-$('#logo_deploy').outerHeight())/2);
})
$(document).scroll(function(){
    nav = $('#contentNav');
    logo = $('#logo_deploy');
    trigger = $('#contentNav_layer').offset().top;
    nav.children('.container-fluid').css('width', $('#main').outerWidth());
    if($(document).scrollTop() >= trigger){
        nav.addClass('deployNav');
        setTimeout(function(){
            nav.css('top', '0');
            logo.addClass('on');
        },200);
    }else{
            logo.removeClass('on');
            nav.removeClass('deployNav');
            nav.css('top', '');
    }
});