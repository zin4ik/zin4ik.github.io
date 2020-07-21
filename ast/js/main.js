
$(document).ready(function(){

	new WOW().init();

	// var pageHeight = $(".n-main").height();
	// var headerHeight = $(".n-header").height();
	// console.log("page Height - " + pageHeight);
	// console.log("header Height - " + headerHeight);
	
	// var scrollTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
	$(window).scroll(function(){
		var scrollPege =$(this).scrollTop();
		// console.log(scrollPege)
		if (scrollPege  > $('#n-need-curs').offset().top) {
			// console.log($('#n-need-curs').offset().top)
			// console.log(scrollPege)
		} if(scrollPege  > $('.n-section-quote-right').offset().top){
			$('.quote_ava-fon').css("width","0px");
			// console.log($('#n-section-quote_ava').offset().top)
			// console.log("edef")
		}
		if (scrollPege  > 75){
			$('.n-header').removeClass('n-header-top').addClass('n-header-fix');
			$('.n-header-logo-img').removeClass('header-logo-img-scroll').addClass('header-logo-img-top');
		
		}
		if ($(this).scrollTop()  < 75){
			$('.n-header').removeClass('n-header-fix').addClass('n-header-top');
			$('.n-header-logo-img').removeClass('header-logo-img-top').addClass('header-logo-img-scroll');

		}
	});

	$('.n-need-curs-slider-dot-item').on('click', function(){
		var dot=$(this).attr('data-infocurse');
	var textBlock = $('.n-need-curs-slider-info-item');
	textBlock.css('display','none');
	$('.n-need-curs-slider-dot-item').removeClass('slider-dot-on').addClass('slider-dot-off');
	$(this).removeClass('slider-dot-off').addClass('slider-dot-on');
	$("#"+dot).show(500);	
	})
	
	$('.n-program-curs-dots-item').on('click', function(){
		var dot=$(this).attr('data-id');
		console.log(dot)
	var itemtBlock = $('.n-program-curs-item');
	itemtBlock.css('display','none');
	$('.n-program-curs-dots-item').removeClass('curs-dot-active');
	$(this).addClass('curs-dot-active');
	$("#"+dot).slideDown(1000);	
	})	
});

// var image = document.getElementsByClassName('thumbnail');
// new simpleParallax(image, {
// 	delay: .6,
// 	transition: 'cubic-bezier(0,0,0,1)'
// });
