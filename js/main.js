/**
 * Created by HZH on 2017-3-7.
 */
$(function(){


    function resize(){
        var windowWidth=$(window).width();
        var isSmallScreen=windowWidth< 768;//768
        $('#main-ad> .carousel-inner> .item').each(function(i , item){
            var  $item=$(item);

            var imgSrc=$item.data(isSmallScreen? 'image-xs': 'image-lg');
            $item.css('backgroundImage','url("'+imgSrc+'")');

            if(isSmallScreen){
                $item.html('<img src="'+imgSrc+'">');
            }else{
                $item.empty();
            }
        });
        var $ulContainer=$('.nav-tabs');

        var width=30;
        $ulContainer.children().each(function(index,ele){
            width += ele.clientWidth;
        });
        if(width>$(window).width())
            $ulContainer.css('width',width).parent().css('overflow-x','scroll');
    }

    $(window).on('resize',resize).trigger('resize');

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    var $newstitle=$('.news-title');
    $('#news .nav-pills a').on('click',function(){
         $this=$(this);
        var title=$this.data('title');
        $newstitle.text(title);

    })


    //1.获取手指在轮播图元素上的一个活动方向（左右）
    var $carousel=$('.carousel');
    var startX,endX;
    var offset=50;
    $carousel.on('touchstart',function(e){
        startX=e.originalEvent.touches[0].clientX;
    })
    $carousel.on('touchmove',function(e){
        endX=e.originalEvent.touches[0].clientX
    })

    $carousel.on('touchend',function(e){
        var distance=Math.abs(startX-endX);
        if(distance>offset){
            //2.根据获得方向选择上一张或者下一张
            $(this).carousel(startX>endX? 'next':'prev');
        }
    })

   var $navli=$('#nav_list .navbar-nav li');
    $navli.on('mouseover',function(){
    	var $this=$(this);
    	$this.addClass('active').siblings('li').removeClass('active');

    }).on('mouseout',function(){
    	var $this=$(this);
    	$this.removeClass('active');
    });


});