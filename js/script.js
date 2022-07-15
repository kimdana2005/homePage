$(document).ready(function() {

	$('a[name=modal]').click(function(e) {
    e.preventDefault();
    var id = $(this).attr('href');
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    $('#mask').css({'width':maskWidth,'height':maskHeight});
    $('#mask').fadeIn(1000);
    $('#mask').fadeTo("slow",0.8);
    var winH = $(window).height();
    var winW = $(window).width();
    $(id).css('top',  winH/2-$(id).height()/2);
    $(id).css('left', winW/2-$(id).width()/2);
    $(id).fadeIn(2000);
    });
    $('.window .close').click(function (e) {
    e.preventDefault();
    $('#mask, .window').hide();
    });
    $('#mask').click(function () {
    $(this).hide();
    $('.window').hide();
    });


	$('#accordeon .acc-head').on('click', f_acc);

			$(".slider").each(function() {

				var repeats = 5, // кількість повторювань автоматичного прокручування
						interval = 3, // інтервал в секундах
						repeat = true, // чи треба автоматично прокручувати (true/false)
						slider = $(this),
						repeatCount = 0,
						elements = $(slider).find("li").length;

				$(slider)
					.append("<div class='nav'></div>")
					.find("li").each(function() {
						$(slider).find(".nav").append("<span data-slide='"+$(this).index()+"'></span>");
						$(this).attr("data-slide", $(this).index());
					})
					.end()
					.find("span").first().addClass("on");


				if (repeat) {
					repeat = setInterval(function() {
						if (repeatCount >= repeats - 1) {
							window.clearInterval(repeat);
						}

						var index = $(slider).find('.on').data("slide"),
								nextIndex = index + 1 < elements ? index + 1 : 0;

						sliderJS(nextIndex, slider);

						repeatCount += 1;
					}, interval * 1000);
				}

			});


etTimeout(function() {
       $('#popup').bPopup();
	   }, 1000);
});


	function bclose() {
	$("#popup").bPopup().close();
	return false;
}

function bopen() {
	$('#popup').bPopup();
	return false;
}


	function sliderJS(index, slider) {
		var ul = $(slider).find("ul"),
				bl = $(slider).find("li[data-slide=" + index + "]"),
				step = $(bl).width();

		$(slider)
			.find("span").removeClass("on")
			.end()
			.find("span[data-slide=" + index + "]").addClass("on");

		$(ul).animate({
			marginLeft: "-" + step * index
		}, 500);
	}

	function f_acc(){
  $('#accordeon .acc-body').not($(this).next()).slideUp(1000);
    $(this).next().slideToggle(2000);
}


	$(document).on("click", ".slider .nav span", function(e) {
		e.preventDefault();
		var slider = $(this).closest(".slider"),
				index = $(this).data("slide");
		sliderJS(index, slider);
	});
