/**
 * Created by Administrator on 2017/6/27 0027.
 */
/*点击关闭按钮  广告消失*/
$(".close").click(function (){
  $(".advert").hide();
})

/*个人中心鼠标移入*/
$(".drop_list").mouseenter(function (){
  $(this).children(".self_center").addClass("active").siblings(".drop").slideDown(200);
})
$(".drop_list").mouseleave(function () {
    $(this).children(".self_center").removeClass("active").siblings(".drop").hide();
});

/*浏览历史*/
$(".history").click(function (){
    $(this).children(".self_center").toggleClass("active").siblings(".history_drop").toggle();
})

/*团800*/
$(".tuan800").hover(function (){
        $(this).children(".self_center").addClass("active").siblings(".tuan_drop").slideDown(400);
},function (){
        $(this).children(".self_center").removeClass("active").siblings(".tuan_drop").hide();
}
)


/*邮递到家的X隐藏*/
$(".transport").mouseenter(function(){
    $(this).children(".cover").css("background","none");
})
$(".transport").mouseleave(function(){
    $(this).children(".cover").css("background","#fefbea");
})
$(".transport").children(".cover").click(function(){
    console.log(1);
    $(".transport").hide();
})

/*美食列表*/
$(".theme").parent("li").mouseenter(function (){
    $(this).find(".theme").addClass("active").siblings(".hd_content").show();

})
$(".theme").parent("li").mouseleave(function (){
    $(this).find(".theme").removeClass("active").siblings(".hd_content").hide();

})


/*中间轮播图*/
var num=$(".main_ban>a").length;
var html="";
for (var i = 0; i < num; i++) {
  html+='<li>'+(i+1)+'</li>'
}  
$(".main_ban>ul").html(html);
$(".main_ban>ul>li").eq(0).addClass("cur");
var index=0;
function carousel(){
    index++;
    if( index>num-1){
        index=0;
    }
   // console.log(index);
    $(".main_ban a").eq(index).addClass('active').siblings().removeClass("active")
    $('.main_ban ul li').eq(index).addClass("cur").siblings().removeClass("cur")
}
var timer=setInterval(carousel,1000);
$('.main_ban ul li').mouseenter(function (){
    clearInterval(timer);
    index=$(this).index();
    $(".main_ban a").eq(index).addClass("active").siblings().removeClass("active")
    $(this).addClass("cur").siblings().removeClass("cur")

})
$('.main_ban ul li').mouseleave(function (){
    timer=setInterval(carousel,1000);
})

/*导航列表 鼠标移入移出显示和隐藏*/
    $(".group li").hover(function (){
        if( $(this).find(".group_hide").html()!=0){
            console.log(1);
            $(this).find(".group_hide").show();
        }

    },function (){
        $(this).find(".group_hide").hide();
 })

/*tab栏*/
var lis=$(".tab_lf li");
for (var i = 1; i < lis.length; i++) {
  $(lis[i]).mouseenter(function (){
    $(this).addClass("first");
  })
    $(lis[i]).mouseleave(function (){
        $(this).removeClass("first");
    })
}


/*美食天下*/
$(".detail_box").hover(function(){
    $(this).find(".hide_detail").show();
    $(this).addClass("active");
    $(this).find(".hide_command").show();
},function () {
    $(this).find(".hide_detail").hide();
    $(this).removeClass("active");
    $(this).find(".hide_command").hide();
})
