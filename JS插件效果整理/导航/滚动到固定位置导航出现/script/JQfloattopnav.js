// JavaScript Document
/*顶部浮动导航滑出二级菜单*/
$(function(){
    var showTop = $("#f_first").offset().top;
	$(window).scroll(function(){
		var bsltop=$(this).scrollTop();
		if(bsltop>showTop){
			$(".floattopnav").show();
			}
		else{
			$(".floattopnav").hide();
			}
		})
	})