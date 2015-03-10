
// Resizing box images
$(window).load(function(){
    boxImageSizing();
});
$(window).resize(function(){
    boxImageSizing();
});
// ./Resizing box images
function boxImageSizing(){
    $('.box').each(function(){
        layer = $(this).children('.layer-img');
        illustration = layer.children('a').children('.illustration');
        if(illustration.width()<layer.width()){
            illustration.css('height', 'auto').css('width', '100%').css('bottom',(illustration.height()-layer.height())/2);
        }
    });
}

$(document).ready(function(){
    // ? 
    $('#masterNav .container-fluid').width($('#main').width());
    // aligne les .navbar-nav de masterNav en bas de la navbar
    $('#masterNav .navbar-nav').each(function(){
        $(this).css('margin-top', ($('.navbar').height()-$(this).outerHeight()));
    });
    // Logo principal
    $('#masterNav img').css('margin-top', ($('#masterNav').outerHeight()-$('#masterNav img').outerHeight())/2);
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



// Deploiment contentNav
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
    // Point de déploiment de la navBar secondaire
    trigger = $('#contentNav_layer').offset().top;
    if($(document).scrollTop() >= trigger){
        nav.addClass('deployNav');
        setTimeout(function(){
            nav.css('top', '0');
            logo.addClass('on');
        },200);
        nav.children('.container-fluid').css('width', $('#main').outerWidth());
    }else{
            logo.removeClass('on');
            nav.removeClass('deployNav');
            nav.css('top', '');
            nav.children('.container-fluid').css('width', 'auto');
    }
});
// ./Deploiment contentNav