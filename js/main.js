$(document).ready(function(){
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