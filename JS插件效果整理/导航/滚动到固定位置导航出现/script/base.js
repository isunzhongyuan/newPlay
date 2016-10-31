// JavaScript Document
/*@author lingydan @date 2015-04-07 */
$(function(){
	$(".index_content .floor .right .pros ul li:odd").css("margin-left","-1px");
	$(".index_content .floor .right .pros ul li:odd").css("border-right","0px");
	$(".footer_nav ul li:last").css("margin-right","0");
	$(".nav .subnav .box ul li:last").css("background","none");
	$(".foodnav .foodnavbg ul li:last").css("border-bottom","0");
	$(".food_content .floor .left ul li:last").css("border-bottom","0");
	$(".step ul li:odd").css("margin-right","0");
	})
/*顶部菜单弹出*/
$(function(){
	$(".top ul").find("li").each(function(){
		$(this).children(".t_sel").mouseenter(function(){
		 $(this).addClass("on");
		 $(this).children(".box").show().css("opacity",0.1).animate({top:'31px', opacity: 1},300);
		})
	    $(this).children(".t_sel").mouseleave(function(){
		 $(this).removeClass("on");                   
		 $(this).children(".box").hide().animate({top:'25px'},10);
		})
		})
	})
/*头部微信*/
$(function(){
	$(".header .hd_wx .del").click(function(){
		$(".header .hd_wx").hide();
		})
	})
/*导航滑出二级菜单*/
$(function(){
	$(".nav .subnav .box ul").find("li").each(function(){
		$(this).mouseenter(function(){
			$(this).addClass("hover");
			$(this).children(".subbox").show().css("opacity",0.1).animate({paddingLeft:'15px', opacity: 1},500);
			})
		$(this).mouseleave(function(){
			$(this).removeClass("hover");
			$(this).children(".subbox").hide().animate({paddingLeft:'0px'},10);
			
			})
		})	
	})


/*鼠标滑过图片向左移动10px*/
 $(function(){
  $(".index_content .index_customers .tab_content ul li").find("img").each(function(){
	  $(this).mouseenter(function(){
		$(this).animate({left:'-10px',opacity:'1'},300);  
		  })
	  $(this).mouseleave(function(){
		$(this).animate({left:'0px',opacity:'1'},300);  
		  })
	  
	  })	 
	 
	 })
/*热销榜鼠标滑过显示图片*/
$(function(){
 $(".index_content .floor .right .hotpros ul").find("li").each(function(){
	 $(this).mouseenter(function(){
		$(this).addClass("on").siblings().removeClass("on");   
	  })
  
	 
	 })
 })
 /*浮动导航*/
 /*$(function(){
	var wtop=$(window).height();
	$(window).scroll(function(){
		var sltop=$(this).scrollTop();
		if(sltop>wtop){
			$(".floatnav").show();
			}
		else{
			$(".floatnav").hide();
			}
		})
	
	$(".floatnav ul li a").mouseenter(function(){
	  $(this).children(".txt").show();
	})
	$(".floatnav ul li a").mouseleave(function(){
	  $(this).children(".txt").hide();
	})
	})*/
 /*返回顶部*/
 $(function(){
	var bwtop=$(window).height();
	$(window).scroll(function(){
		var bsltop=$(this).scrollTop();
		if(bsltop>bwtop){
			$(".backtop").show();
			}
		else{
			$(".backtop").hide();
			}
		})

	})
/*闪团侧导航*/
$(function(){
	var custop=182;
	$(window).scroll(function(){
		var cusnavtop=$(this).scrollTop();
		if(cusnavtop>custop){
			$(".cusnav").addClass("cusnav_fixed");
			}
		else{
			$(".cusnav").removeClass("cusnav_fixed");
			}
		})
	})

/*食品频道页导航*/
$(function(){
	$(".foodnav .foodnavbg ul").find("li").each(function(){
		$(this).mouseenter(function(){
			$(this).addClass("li_on").animate();
			//$(".on_bg").hide();
			$(".over_bg").show();
			$(".on_bg",	this).stop().animate({'top':'40px'},	250); // move down - hide
			$(".over_bg",	this).stop().animate({'top':'0px'},		120); // move down - show
			})
		$(this).mouseleave(function(){
			$(this).removeClass("li_on").animate();
			$(".over_bg").hide();
			//$(".on_bg").show();
			$(".on_bg",	this).stop().animate({'top':'0px'},	250); // move down - hide
			$(".over_bg",	this).stop().animate({'top':'-40px'},120); // move down - show
			})
		})
	})
/*食品频道页促销*/
$(function(){
	$(".promotions_r .main ul").find("li").each(function(){
		$(this).hover(function(){
			$(this).addClass("li_on");
			$(this).children(".lable").css('background-position','-188px -75px');
			})
		$(this).mouseleave(function(){
			$(this).removeClass("li_on");
			$(this).children(".lable").css('background-position','-100px -74px');
			})
		})
	})
/*食品频道页楼层特效*/
$(function(){
	$(".food_content .floor .right .foodpros ul").find("li").each(function(){
		$(this).mouseenter(function(){
			$(this).addClass("li_on");
			})
		$(this).mouseleave(function(){
			$(this).removeClass("li_on");
			})
		})
	})
/*爱美丽侧导航*/
$(function(){
	$(".btf_content .btfbanner .btfnav ul").find("li").each(function(){
		$(this).mouseenter(function(){
			$(this).addClass("li_on");
			})
		$(this).mouseleave(function(){
			$(this).removeClass("li_on");
			})
		})
	})
/*$(function(){
		 var $btf_nav=$(".btfnav ul li");
		 $btf_nav.hover(function(){
			 $(this).addClass("selected").siblings().removeClass("selected");
			 var index =$btf_nav.index(this); 
			 $("div.btf_subbox > div").eq(index).show().siblings().hide();
			 }).hover(function(){
			 $(this).addClass("selected");
			 },function(){
				 $(this).removeClass("selected");	
				 $(".btf_content .btfbanner .btfnav .btf_box").hide(); 
				 }
			 );
		 });*/
/*爱美丽楼层侧导航*/
$(function(){
	$(".floor .box .f_right .f_right_r .floornav ul ").find("li").each(function(){
		$(this).mouseenter(function(){
			$(this).addClass("li_on");
			})
		$(this).mouseleave(function(){
			$(this).removeClass("li_on");
			})
		})
	})
/*数码左侧小图的轮播效果*/	
   $(function() {        
		slidesFn("idNum","idSlider");
		slidesFn("idNum1","idSlider1");
		slidesFn("idNum2","idSlider2");
		slidesFn("idNum3","idSlider3");
		slidesFn("idNum4","idSlider4");
		slidesFn("idNum5","idSlider5");
    });	
	function slidesFn(id1,id2){
		var len = $("li","#"+id1).length; var index = 0; var adTimer; var adwidth = $("#"+id2).parent().width();
		$("li","#"+id1).mouseover(function () {
            index = $("li","#"+id1).index(this);
            showImg(index);
        }).eq(0).mouseover();
        //滑入 停止动画，滑出开始动画.
        $("#"+id2).parent().hover(function () {
            clearInterval(adTimer);
        }, function () {
            adTimer = setInterval(function () {
                showImg(index)
                index++;
                if (index == len) { index = 0; }
            }, 2000);
        }).trigger("mouseleave");
        function showImg(index) {
            $("#"+id2).stop(true, false).animate({ left: -adwidth * index }, 500);
            $("li","#"+id1).removeClass("on").eq(index).addClass("on");
        }
	}
/*闪团产品列表*/
$(function(){
	$(".floor .box ul ").find("li").each(function(){
		$(this).mouseenter(function(){
			$(this).addClass("li_on");
			})
		$(this).mouseleave(function(){
			$(this).removeClass("li_on");
			})
		})
	})
	
/*秒杀图片放大移动10px*/
 $(function(){
  $("#focus .scroll ul li dl dt").find("img").each(function(){
	  $(this).mouseenter(function(){
		$(this).animate({width:'240px',height:'240px',opacity:'1'},200);  
		  })
	  $(this).mouseleave(function(){
		$(this).animate({width:'230px',height:'230px',opacity:'1'},100);  
		  })
	  
	  })	 
	 
	 })

 $(function(){
  $(".spike_online .content .tab_content .nextissue ul li .pic").find("img").each(function(){
	  $(this).mouseenter(function(){
		$(this).animate({width:'240px',height:'240px',opacity:'1'},200);  
		  })
	  $(this).mouseleave(function(){
		$(this).animate({width:'230px',height:'230px',opacity:'1'},100);  
		  })
	  
	  })	 
	 
	 })
	 
/*产品选择*/
    $(function(){
			 $(".pros_list_content .pros_chioce dl dd.pb_collapse span").toggle(function(){
				 $(this).addClass("s_sq");
				 $(this).html("收起");
				 $(".pros_list_content .pros_chioce dl dd.pb_collapse .m_show").show();
				 },
				 function(){
				 $(this).removeClass("s_sq");
				 $(this).html("更多");
				 $(".pros_list_content .pros_chioce dl dd.pb_collapse .m_show").hide();
				 }
				 );
			 
		 })
    $(function(){
			 $(".pros_list_content .pros_chioce dl dd.jg_collapse span").toggle(function(){
				 $(this).addClass("s_sq");
				 $(this).html("收起");
				 $(".pros_list_content .pros_chioce dl dd.jg_collapse .m_show").show();
				 },
				 function(){
				 $(this).removeClass("s_sq");
				 $(this).html("更多");
				 $(".pros_list_content .pros_chioce dl dd.jg_collapse .m_show").hide();
				 }
				 );
			 
		 })
    $(function(){
			 $(".pros_list_content .pros_chioce dl dd.lb_collapse span").toggle(function(){
				 $(this).addClass("s_sq");
				 $(this).html("收起");
				 $(".pros_list_content .pros_chioce dl dd.lb_collapse .m_show").show();
				 },
				 function(){
				 $(this).removeClass("s_sq");
				 $(this).html("更多");
				 $(".pros_list_content .pros_chioce dl dd.lb_collapse .m_show").hide();
				 }
				 );
			 
		 })
		 $(function(){
			 $(".pros_list_content .pros_chioce dl dd.cd_collapse span").toggle(function(){
				 $(this).addClass("s_sq");
				 $(this).html("收起");
				 $(".pros_list_content .pros_chioce dl dd.cd_collapse .m_show").show();
				 },
				 function(){
				 $(this).removeClass("s_sq");
				 $(this).html("更多");
				 $(".pros_list_content .pros_chioce dl dd.cd_collapse .m_show").hide();
				 }
				 );
			 
		 })
/*麦德龙侧导航*/
$(function(){
	$(".banner_content .subnav ul").find("li").each(function(){
		$(this).mouseover(function(){
			$(this).addClass("on").siblings().removeClass("on");
			})
		$(this).mouseout(function(){
			//$(this).removeClass("on");
			})
		})
	})
/*麦德龙楼层*/
$(function(){
	$(".floor .f_right ul").find("li").each(function(){
		$(this).mouseover(function(){
			$(this).addClass("on");
			})
		$(this).mouseout(function(){
			$(this).removeClass("on");
			})
		})
	})
/*详情页晒单*/
 $(function initevent(){
	 $(" .appraisal dl dd").find(".appraisal_photos").each(function(){
		 $(this).children("ul").find("li").each(function(){
	     
		 $(this).click(function(){
		  $(this).addClass("on").siblings().removeClass("on");
		  var smallimg=$(this).children("img").attr("src");
		  $(this).parents("ul").siblings(".bigpic").show();
		  $(this).parents("ul").siblings(".bigpic").children("img").attr({"src": smallimg});
		 }) 
		 $(".del_bigpic").click(function(){
			$(this).parent(".bigpic").hide();
			$(this).parent().siblings().children("li").removeClass("on"); 
			 })
		 })
		 })
	 
	 
	 
	 })
/*右侧导航*/
 $(function(){
	 var navbar_nav=$(".navbar_nav ul li");
	 var tag=0;
	 navbar_nav.click(function(){
	   $(this).addClass("selected").siblings().removeClass("selected");
	   var index =navbar_nav.index(this); 
	   $("div.navbar_content > div").eq(index).animate(test(index)).siblings().animate(test(index)); 
	 }) 
	  $(function(){
		$(document).bind("click",function(e){
		var target = $(e.target);
		if(target.closest("#navbar ").length == 0){
		$(".navbar_content .box").animate({right:"-282px"},10);
		$(".navbar_nav ul li").removeClass("selected");
		}
		})
	  })
 })
 function test(tag)
 {   
     var nn= $("div.navbar_content > div").eq(tag);
	 var mm= nn.css("right");
	 if(mm=="-282px"){
	  nn.animate({right:"0"},500).siblings().animate({right:"-282px"},50);
	  //$(".navbar_nav ul li").removeClass("selected");
	 }
	 if(mm=="0px"){
	  $(".navbar_nav ul li").removeClass("selected");
	  nn.animate({right:"-282px"},500);
	 }

 }

 /*------------------------------------------------------------------------------------------------------------------------------------------------------*/
$(function(){
	$(".pros_list_content .pros_list .box .pros_left ul li").mouseenter(function(){
	   	$(this).find(".xuan").animate({height:'392',},100);
	}).mouseleave(function(){
	    	$(".pros_list_content .pros_list .box .pros_left ul li").find(".xuan").animate({height:'355',},100);
	});
});

$(function(){
	$(".box .pros_left ul li").mouseenter(function(){
	   	$(this).css("z-index","666");
	}).mouseleave(function(){
	    	$(".box .pros_left ul li").css("z-index","5");
	});
});
/*--------------------------------------------------------------------------------------------------------*/
$(function(){
	$(".title .salse").mouseenter(function(){
	   	$(this).find(".pros_ul").css("display","block");
	}).mouseleave(function(){
	    	$(".title .salse").find(".pros_ul").css("display","none");
	});
});
/*-----------------------------------customers_pros_detail.html---(tab_ul)------------------------------------------------------------------------*/
$(function(){
	var bwtop=$(window).height();
	$(window).scroll(function(){
		var bsltop=$(this).scrollTop();
		if(bsltop>bwtop){
			$(".pros_below .tab_ul").css({"position":"fixed","top":"0","z-index":"999"});
			}
		else{
			$(".pros_below .tab_ul").css("position","relative");
			}
		})

	})
/*--------------------------------------------------------the_daily侧边栏_新品团购---------------------------------------------------------------------------------------*/
$(function(){
	$(".picList li .picList_txt .kuai .kuai_btn").hide();
	$(".picScroll-top .picList li").mouseenter(function(){
	   	$(this).find(".kuai_prices").css("display","none");
	   	$(this).find(".kuai_btn").fadeIn(200);
	}).mouseleave(function(){
		$(this).find(".kuai_btn").fadeOut(200);
	    	$(this).find(".kuai_prices").css("display","block");
	});
});
/*--------the_daily侧边栏顶部跟随-------*/
 $(function(){
	var bwtop=$(window).height();
	$(window).scroll(function(){
		var bsltop=$(this).scrollTop();
		if(bsltop>bwtop){
			$(".free_unnin").css({"position":"fixed","top":"0","z-index":"999"});
			}
		else{
			$(".free_unnin").css("position","relative");
			}
		})

	})
 /*------------------------------------------------unlimited.html-------------------------------------------------------------------*/

$(function(){
	$(".unlim_evey .evey_con .start").mouseenter(function(){
		$(this).find(".evey_down").css("background-color","#ff5a54");
	   	$(this).find(".p4").css("color","#fff");
	   	$(this).find(".p1").css("color","#ffee10");
	   	$(this).find(".evey_right").css("color","#ff7455");
	   	$(this).find(".evey_right").removeClass("evey_bg1");
	   	$(this).find(".evey_right").addClass("evey_bg3");
	}).mouseleave(function(){
		$(".unlim_evey .evey_con .start").find(".evey_down").css("background-color","#fff");
	    	$(".unlim_evey .evey_con .start").find(".p4").css("color","#555");
	    	$(".unlim_evey .evey_con .start").find(".p1").css("color","#ff9906");
	    	$(this).find(".evey_right").css("color","#fff");
	    	$(this).find(".evey_right").removeClass("evey_bg3");
	    	$(this).find(".evey_right").addClass("evey_bg1");
	});
});