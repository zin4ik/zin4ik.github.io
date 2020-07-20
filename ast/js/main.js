(function ($) {

  new WOW().init();

  var pageHeight = $(".n-main").height();
  var headerHeight = $(".n-header").height();
  console.log("page Height - " + pageHeight);
  console.log("header Height - " + headerHeight);
  
   var scrollTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
  $(window).scroll(function(){
	if ($(this).scrollTop()  > $('#n-need-curs').offset().top) {
		console.log($('#n-need-curs').offset().top)
		console.log($(this).scrollTop())
	} if ($(this).scrollTop()  > 75){
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

})(jQuery);

// var image = document.getElementsByClassName('thumbnail');
// new simpleParallax(image, {
// 	delay: .6,
// 	transition: 'cubic-bezier(0,0,0,1)'
// });
