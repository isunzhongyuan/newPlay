// JavaScript Document
/*搜索导航停留在顶部*/
$(function(){
	var custop=$("#fixed_title").offset().top;
	$(window).scroll(function(){
		var cusnavtop=$(this).scrollTop();
		if(cusnavtop>custop){
			$(".fixed_title").addClass("cusnav_fixed");
			}
		else{
			$(".fixed_title").removeClass("cusnav_fixed");
			}
		})
	})