// JavaScript Document
/*
* @author lingyadan
* @date 2014-8-26
* contnet 字体样式
*/
/*tab选项卡*/
$(function(){
		 var $tab_nav=$(".tab_nav ul li");
		 $tab_nav.mouseenter(function(){
			 $(this).addClass("selected").siblings().removeClass("selected");
			 var index =$tab_nav.index(this); 
			 $("div.tab_content > div").eq(index).show().siblings().hide();
			 })
		 });
