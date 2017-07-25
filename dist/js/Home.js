$(function(){
    $('.header .guide .project').hover(function(){
        $(this).find('.down_box').stop().slideDown(200);
    },function(){
        $(this).find('.down_box').stop().slideUp(100);
    });
}) 
$(function(){
    var img=['dist/images/banner01_bg.jpg','dist/images/banner02_bg.jpg','dist/images/banner01_bg.jpg'];
    index=0;
    $('.banner .btn_ban .ban_btn .btn_left').on('click',function(){
        index--;
        if(index<0){
            index=img.length-1;
        }
        bannerBg();
        
    });
    $('.banner .btn_ban .ban_btn .btn_right').on('click',function(){
        index++;
        if(index>img.length-1){
            index=0;
        }
        bannerBg();
    });
    $('.banner .btn_ban .ban_btn .btn_cen span').on('click',function(){
        index=$(this).index();
        bannerBg();
    });
    function bannerBg(){
        $('.banner .ban').attr('src',img[index]);
        $('.banner .btn_ban .ban_btn .btn_cen span').css({background:'#D6D8DF'});
        $('.banner .btn_ban .ban_btn .btn_cen span').eq(index).css({background:'#006FD6'});
        if(index==0){
            fade();
        }else if(index==1){
            fade1();
        }else{
            fade2();
        }
    }
     function fade(){
            aa(); 
            $('.banner .info .img1').fadeIn();
            $('.banner .info .img2').fadeIn();
            $('.banner .info .img3').fadeIn();
            $('.banner .info .img1').fadeIn();
            $('.banner .info .img1').animate({
                left:'38%'  
            },600);
            $('.banner .info .img2').animate({
                right: '26%'
            },600);  
        }
        function fade1(){
            aa(); 
            $('.banner .info .img4').fadeIn();
            $('.banner .info .img5').fadeIn();
            $('.banner .info .img6').fadeIn();
            $('.banner .info .img4').animate({
                left:'20%'  
            },600);
            $('.banner .info .img6').animate({
                right: '53%'
            },600);  
        }
        function fade2(){
            aa(); 
            $('.banner .info .img7').fadeIn();
            $('.banner .info .img8').fadeIn();
            $('.banner .info .img9').fadeIn();
            $('.banner .info .img7').animate({
                left:'38%'  
            },600);
            $('.banner .info .img8').animate({
                right: '30%'
            },600);   
        }
        function aa(){
            $('.banner .info .img1').hide();
            $('.banner .info .img2').hide();
            $('.banner .info .img3').hide();
            $('.banner .info .img4').hide();
            $('.banner .info .img5').hide();
            $('.banner .info .img6').hide();
            $('.banner .info .img7').hide();
            $('.banner .info .img8').hide();
            $('.banner .info .img9').hide();
            $('.banner .info .img1').animate({
                left:'0%'  
            });
             $('.banner .info .img2').animate({
                right: '0%'
            });  
             $('.banner .info .img4').animate({
                left:'0%'  
            });
             $('.banner .info .img6').animate({
                right: '0%'
            });  
             $('.banner .info .img7').animate({
                left:'0%'  
            });
            $('.banner .info .img8').animate({
                right: '0%'
            });   
        }
            $('.banner .info .img3').fadeIn();
            $('.banner .info .img1').fadeIn();
            $('.banner .info .img2').fadeIn();
            $('.banner .info .img1').animate({
                left:'38%'  
            },600);
            $('.banner .info .img2').animate({
                right: '26%'
            },600);  
})
$(function(){
    index=0;
    var arr=$('.contentss .common .com_con .contents').find('.content');
    $('.contentss .common .com_con .change_line .cont_before').on('click',function(){
        index--;
        if(index<0){
            index=arr.length-1
        }
        left();
        cntShow();
    });
     $('.contentss .common .com_con .change_line .cont_next').on('click',function(){
        index++;
        if(index>arr.length-1){
            index=0
        }
        right();
        cntShow();
    });
     $('.contentss .common .com_con .con_left .linebtn i').on('click',function(){
        var i = index;
        index=$(this).parent().index();
        if(i>index){
            left();
        }else if(i<index){
            right();
        }
        cntShow();
    });
    function cntShow(){
         $('.contentss .common .com_con .contents .content').eq(index).siblings().hide();
         $('.contentss .common .com_con .con_left .linebtn i').eq(index).parent().addClass('new');
         $('.contentss .common .com_con .con_left .linebtn i').eq(index).parent().siblings().removeClass('new');
    }
    function left(){
        $('.contentss .common .com_con .contents .content').eq(index).show().css({
            left:'-1000px'
        });
        $('.contentss .common .com_con .contents .content').eq(index).animate({
            left:'5%'
        });
    }
    function right(){
        $('.contentss .common .com_con .contents .content').eq(index).show().css({
            right:'-1000px'
        });
        $('.contentss .common .com_con .contents .content').eq(index).animate({
            right:'5%'
        });
    }
    $('.contentss .common .com_con .contents .content').eq(0).show().css({
            left:'-1000px'
        });
        $('.contentss .common .com_con .contents .content').eq(0).animate({
            left:'5%'
        });
    $('.contentss .common .com_con .contents .content').eq(0).siblings().hide();
    $('.contentss .common .com_con .con_left .linebtn i').eq(0).parent().addClass('new');
    $('.contentss .common .com_con .con_left .linebtn i').eq(0).parent().siblings().removeClass('new');

})
$(function(){
    var arry = $('.profession .pro_cen').find('.cen_cont');
    var a = arry.find('.pro_last');
    var b = arry.find('.pro_cen');
    index = 0;
    $('.profession .pro_cen .cen_cont .pro_last').on('click',function(){
        index = a.index($(this));
        console.log(index);
        if($('.profession .pro_cen .cen_cont .pro_last').eq(index).hasClass("next_act") == true){
			$('.profession .pro_cen .cen_cont .pro_last').eq(index).removeClass("next_act");
             $('.profession .pro_cen .cen_cont .cen_cont_bottom').eq(index).slideToggle(400);
		}else{
			$('.profession .pro_cen .cen_cont .pro_last').eq(index).addClass("next_act");
            $('.profession .pro_cen .cen_cont .cen_cont_bottom').eq(index).slideToggle(400);
		}
    });
    $('.profession .pro_cen .cen_cont .pro_cen').on('click',function(){
        index = b.index($(this));
        if($('.profession .pro_cen .cen_cont .pro_last').eq(index).hasClass("next_act") == true){
			$('.profession .pro_cen .cen_cont .pro_last').eq(index).removeClass("next_act");
             $('.profession .pro_cen .cen_cont .cen_cont_bottom').eq(index).slideToggle(400);
		}else{
			$('.profession .pro_cen .cen_cont .pro_last').eq(index).addClass("next_act");
            $('.profession .pro_cen .cen_cont .cen_cont_bottom').eq(index).slideToggle(400);
		}
    })
})
$(function(){
    index = 0;
    $(".team .tem_cen .tem_cont .team_move .team_warp .warp_cont .head").hover(function(){
		$(this).find("span").stop().fadeIn(500);
	},function(){
		$(this).find("span").stop().fadeOut(500);
	})
    $(".team .tem_cen .tem_cont .ban_btn .btn_left").on('click',function(){
        index--;
        if(index<0){
            index = 2;
        }
        $(".team .tem_cen .tem_cont .team_move").animate({left:(('-1130'*index)+500)+'px'},300);
        teamSlide();
    })
    $(".team .tem_cen .tem_cont .ban_btn .btn_right").on('click',function(){
        index++;
        if(index>2){
            index=0;
        }
        $(".team .tem_cen .tem_cont .team_move").animate({left:(('-1130'*index)-500)+'px'},300);
        teamSlide();
    })
     $(".team .tem_cen .tem_cont .ban_btn .btn_cen span").on('click',function(){
        if($(this).index()>index){
            index = $(this).index();
            $(".team .tem_cen .tem_cont .team_move").animate({left:(('-1130'*index)-500)+'px'},300);
        }else{
            index = $(this).index();
            $(".team .tem_cen .tem_cont .team_move").animate({left:(('-1130'*index)+500)+'px'},300);
        }
        teamSlide();
    })
    function teamSlide(){
        $(".team .tem_cen .tem_cont .team_move").animate({left:('-1130'*index)+'px'});
        $(".team .tem_cen .tem_cont .ban_btn .btn_cen span").css({background:'#D6D8DF'});
        $(".team .tem_cen .tem_cont .ban_btn .btn_cen span").eq(index).css({background:'#006FD6'});
    }
})
$(function(){
    var map = new BMap.Map('allmap');
    var poi = new BMap.Point(106.523035,29.545208);
    map.centerAndZoom(poi, 20);
    //map.enableScrollWheelZoom();
     var content = '<div style="margin:0;line-height:20px;padding:2px;">' +
                    '<img src="dist/images/pr.jpg" alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>' +
                    '地址：重庆市渝中区大坪正街19号<br/>电话：(023)68711888<br/>简介：商户描述：英利国际广场位于大坪CBD，据渝中区“十二五”规划重点发展区域，未来将形成金融创新产业、电子信息... ' +
                  '</div>';
    var searchInfoWindow = null;
	searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
			title  : "英利·大融城(大坪店)",      //标题
			width  : 290,             //宽度
			height : 105,              //高度
			panel  : "panel",         //检索结果面板
			enableAutoPan : true,     //自动平移
			searchTypes   :[
				BMAPLIB_TAB_SEARCH,   //周边检索
				BMAPLIB_TAB_TO_HERE,  //到这里去
				BMAPLIB_TAB_FROM_HERE //从这里出发
			]
		});
    var marker = new BMap.Marker(poi); //创建marker对象
    marker.enableDragging(); //marker可拖拽
    marker.addEventListener("click", function(e){
	    searchInfoWindow.open(marker);
    })
    map.addOverlay(marker); //在地图中添加marker
    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
})
$(function(){
    $(window).scroll(function () {
        if ($(window).scrollTop() > 700) {
            $('.fixed').show();
        }else {
			$('.fixed').hide();
		}
    });
    $('.fixed .fix_top').on('click',function(){
        $("html, body").animate({scrollTop:0}, 'slow');
    })
})
$(function(){
    $('.footer .common .music').find('span').on('click',function(){
        $('.footer .common .music').find('span audio').$this(index).play();
    })
})