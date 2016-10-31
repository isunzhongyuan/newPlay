$(function(){
	$(".pros_ku2 .pos2 .pos_k li").each(function(){
		$(this).click(function(){
			$(".pros_ku2 .pos2 .pos_k li").css("border","1px solid #E6E6E6");
			$(this).css("border","1px solid #ff7430");
		})
	});
});

$(function(){
  $(".pros_ku3 .shop").hide();
  $(".pros_ku3 .pos4 .pos4_bth").click(function(){
	$(".pros_ku3 .shop").toggle();
  })
  $(".pros_ku3 .shop .close").click(function(){
	$(".pros_ku3 .shop").hide();
  })
  $(".pros_ku3 .shop .shop_btn .shop_hide").click(function(){
	$(".pros_ku3 .shop").hide();
  })
})

$(function(){
	var shop_bwtop=$(window).height();
	$(window).scroll(function(){
		var shop_bsltop=$(this).scrollTop();
		if(shop_bsltop>shop_bwtop){
			$(".fixed_shop").show();
			}
		else{
			$(".fixed_shop").hide();
			}
		})

	})