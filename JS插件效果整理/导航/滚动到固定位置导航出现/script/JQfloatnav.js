// JavaScript Document
$(function(){
    //优势页面点击子导航
	var subNav_active = $(".curret");
	var subNav_scroll = function(target){
		subNav_active.removeClass("curret");
		target.parent().addClass("curret");
		subNav_active = target.parent();
	};
	$(".floatnav ul li a").click(function(){
		subNav_scroll($(this));
		var target = $(this).attr("href");
		var targetScroll = $(target).offset().top;
		$("html,body").animate({scrollTop:targetScroll},300);
		return false;
	});
	//页面跳转时定位
	if(window.location.hash){
		var targetScroll = $(window.location.hash).offset().top ;
		$("html,body").animate({scrollTop:targetScroll},300);
	}
	var footerTop = $(".floatnav").offset().top;
	$(window).scroll(function(){
		var $this = $(this);
		var targetTop = $(this).scrollTop()+80;
		
		
		var height = $(window).height();
		var oneTop = $("#f_first").offset().top+20;
		//alert(oneTop);
		var twoTop = $("#f_second").offset().top-80;
		var threeTop= $("#f_third").offset().top-80;
		var fourTop= $("#f_fourth").offset().top-80;
		var fiveTop = $("#f_fifth").offset().top-80;
		var sixTop = $("#f_sixth").offset().top-80;
		if(targetTop>oneTop)
		{
			$(".floatnav").show();
			$(".floatnav").addClass("fixedSubNav");
		}
		else
		{
			$(".floatnav").hide();
			$(".floatnav").removeClass("fixedSubNav");
		}
		
		if(targetTop>oneTop&&targetTop<twoTop){
			subNav_scroll($(".f_nav_s1"));
		}else if(targetTop>twoTop&& targetTop<threeTop ){
			subNav_scroll($(".f_nav_s2"));
		}else if(targetTop>threeTop&& targetTop<fourTop ){
			subNav_scroll($(".f_nav_s3"));
		}else if(targetTop>fourTop&& targetTop<fiveTop  ){
			subNav_scroll($(".f_nav_s4"));
		}else if(targetTop>fiveTop&&targetTop<sixTop ){
			subNav_scroll($(".f_nav_s5"));
		}else if(targetTop>sixTop&&targetTop<sixTop+420){
			subNav_scroll($(".f_nav_s6"));
		}
	})
}());