$(document).ready(function(){
    BlackBoxMarker = 0;
    i = 0;
    $('.box').each(function(){
        refHeight = $(this).height();
        captionHeight = $(this).children('.item-caption').outerHeight();
        $(this).find('.layer-img').css('height', refHeight-captionHeight);
        imgTarget = $(this).children('.layer-img').find('img');
        if(imgTarget.height()>refHeight){
            imgTarget.css('bottom', (imgTarget.height()-refHeight)/2);
        }else{
        	// imgTarget.css('height', imgTarget.height()-captionHeight+'px');
        }
        // $(this).children('.item-caption').css('height', captionHeight);

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