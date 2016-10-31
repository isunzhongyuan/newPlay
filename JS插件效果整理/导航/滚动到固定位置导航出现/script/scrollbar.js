// var h = $(".new_content").height();
// $(".js").css("height", h);
// alert(h);
// setTimeout('$(".js").html(c);',0);

// }
// var c = $(".new_content").html();
// $(".js").html(c);
// var h1 = $(".js").height();
// alert(h1);

$(function () {
	var c = $(".new_content").html();
	$(".js").html(c);
	setTimeout(function () {
		$(".js").fadeIn("fast", function () {
			$('#pane1').jScrollPane({
				animateTo : true,
				animateInterval : 50,
				animateStep : 5
			});
			$('a.scroll-to-element-demo').bind(
				'click',
				function () {
				$this = $(this);
				var destinationSelector = $(this).attr('rel');
				$('.scroll-pane', $this.parent().parent().parent()).each(
					function () {
					this.scrollTo(destinationSelector);
				});
				return false;
			});
		})

	},300)
});
