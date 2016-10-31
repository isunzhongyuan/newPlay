// JavaScript Document

      $(function(){
	  $(".jqzoom").jqueryzoom({
					  xzoom: 300, //放大图的宽度(默认是 200)
					  yzoom: 300, //放大图的高度(默认是 200)
					  offset: 10, //离原图的距离(默认是 10)
					  position: "right", //放大图的定位(默认是 "right")
					  preload:1   
	  });
  });


      /*点击左侧产品小图片切换大图*/
	$(function(){
		$(".pdl ul li img").livequery("click",function(){ 
			  var imgSrc = $(this).attr("src");
			  var i = imgSrc.lastIndexOf(".");
			  var unit = imgSrc.substring(i);
			  imgSrc = imgSrc.substring(0,i);
			  var imgSrc_small = imgSrc + unit;
			  var imgSrc_big = imgSrc + unit;
			  $("#bigImg").attr({"src": imgSrc_small ,"jqimg": imgSrc_big });
			  $("#thickImg").attr("href", imgSrc_big);
		});
	});
