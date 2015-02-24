$(document).ready(function(){
    BlackBoxMarker = 0;
    i = 0;
    $('.box').each(function(){
        refHeight = $(this).height();
        $(this).find('.layer-img').css('height', refHeight*0.7);
        imgTarget = $(this).children('.layer-img').find('img');
        if(imgTarget.height()>refHeight*0.7){
            imgTarget.css('top', -(imgTarget.height()-refHeight*0.7)/2);
        }
        $(this).children('.item-caption').css('height', refHeight*0.3);

        if(BlackBoxMarker < ($('.box').length)/4){
            randNum = Math.floor((Math.random()*3)+1);
            if(randNum == 3 && !($('.box:eq('+i+')').hasClass('bigbox'))){
                $('.box:eq('+i+')').addClass('blackbox');
                BlackBoxMarker+=1; 
            }
        }
        i +=1 ;
    });
});