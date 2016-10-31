// JavaScript Document
$(function(){
  //$("#login_bg").css("height",$(".login_content").height());
//绑定删除按钮的触发事件
$(".login_show").click(function(){
  $(".mask").css("opacity","0.5").show();
  showDialog();
  $("#login").show();
  $("#login_bg").show();
});
/** 根据当前页面于滚动条的位置，设置提示对话框的TOP和left*/
function showDialog(){
  var objw=$(window);//当前窗口
  var objc=$("#login");//当前对话框
  var brsw=objw.width();
  var brsh=objw.height();
  var sclL=objw.scrollLeft();
  var sclT=objw.scrollTop();
  var curw=objc.width();
  var curh=objc.height();
  //计算对话框居中时的左边距
  var left=sclL+(brsw -curw)/2;
  var top=(brsh-curh)/2;
  //设置对话框居中
  objc.css({"left":left,"top":top});
}

//当页面窗口大小改变时触发的事件
$(window).resize(function(){
  if(!$("#login").is(":visible")){
   return;
  }
  showDialog();
  });
//注册关窗口单击事件
$(".icon_hidden").click(function(){
 $("#login").hide();
 $("#login_bg").hide();
 $(".mask").hide();

});
//确定按钮事假
$("#ok").click(function(){
 $("#login").hide();
 $("#login_bg").hide();
 $(".mask").hide();


});


});