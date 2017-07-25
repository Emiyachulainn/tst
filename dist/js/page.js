$(function(){
    index = 0;
    $('.content .next .tran .tran_right').on('click',function(){
        index++;
        if(index>2){
            index=2;
            $('.content .next .tran').animate({left:('-1300'*2)+'px'});
        }else{
            Slide();
        }
    })
     $('.content .next .tran .tran_left').on('click',function(){
        index--;
        if(index<0){
            index=0;
            $('.content .next .tran').animate({left:0});
        }else{
            Slide();
        }
    })
    function Slide(){
         $('.content .next .tran').animate({left:('-1300'*index)+'px'});
         $('.content .next .tran .tran_right').animate({left:(1200+('1300'*index))+'px'});
         $('.content .next .tran .tran_left').animate({left:(('1300'*index)+60)+'px'});
    }
})
$(function(){
    index = 0;
     $(document).on("mousewheel DOMMouseScroll", function (e) {
    var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1));
    if (delta > 0) {
            index--;
            if(index<0){
                index=0;
                $('.content .cont').animate({top:('-744'*index)+'px'});
            }else{
                 $('.content .cont').animate({top:('-744'*index)+'px'});
            }

        } else if (delta < 0) {
            index++;
            if(index>4){
                index=4;
                $('.content .cont').animate({top:('-744'*index)+'px'});
            }else{
                 $('.content .cont').animate({top:('-744'*index)+'px'});
            }
        }
    });
})