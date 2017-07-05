/**
 * Created by Administrator on 2017/7/3 0003.
 */
/*小的轮播图*/
$(window).load(function (){
    var first=$(".carousel ul li").eq(0)   //复制第一张图片 追加至图片的最后
    first.clone().appendTo($(".carousel ul"));   //克隆第一张
    var imgs=$(".carousel ul img");    //获取所有图片
    console.log(imgs);
    var width=0;
    for (var i = 0; i < imgs.length; i++) {
      width+=$(imgs[i]).width()
    }
    $(".carousel ul").width(width);    //计算装图片的父盒子的宽度
    /*自动滚动*/
    var $carousel=$(".carousel ul");  //装图片的父盒子整体移动  绝对定位
    var index=0;
    var wid=imgs.width();
    var timer=setInterval(animate,2000)   //定时移动
    /*鼠标移入移出  定时器停止继续*/
    $carousel.parent(".carousel").mouseenter(function (){  //给按钮和图片整体所在的父盒子设置鼠标移入和移出
      clearInterval(timer)
    })
    $carousel.parent(".carousel").mouseleave(function (){
       timer=setInterval(animate,2000);
    })
    /*点击按钮切换*/
    /*右按钮*/
    $(".carousel ol li:first-child").click(function (){   //右按钮点击  直接是调用定时器内部的运动函数

        animate();
    })
    /*左按钮*/
    $(".carousel ol li:nth-child(2)").click(function (){
        if( index==0){    //点击的时候,先判断当前的index值,设置好后再运动
            index=imgs.length-1;
            $carousel.css("left",(-wid*(imgs.length-1)));
        }
        index--;
        $carousel.animate({"left":(-wid*index)},200);
    })


    /*运动主体*/
    function animate(){
        if( index>=imgs.length-1){
            index=0;
            $carousel.css("left",0);
        }
        index++;
        $carousel.animate({"left":(-wid*index)},200);
        console.log(index);
    }

})


