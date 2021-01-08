(function($){

    $(document).ready(function(){
      var widthWindow = $(window).width();
      resizeFunction(widthWindow);
      $(window).scroll(function(){
        if ($(window).scrollTop() > 400) {
            $('.header').addClass('header-scroll');
        }
        else {
            $('.header').removeClass('header-scroll')
        }
    });

    $(window).resize(function() {
         widthWindow = $(window).width();
        resizeFunction(widthWindow);
         
      });

      function resizeFunction(w){
           if(w < 1023){
          $('.header__nav').appendTo('.header__mob-nav');
          $('.header__block-contact .tel-link').appendTo('.header__mob-tell');
             if(w<576){
            $('.mob-576').appendTo('.header__mob-block');
            }
            else{
              $('.mob-576').appendTo('.header__block-callback');
            }
          }
        
        else{
          $('.header__nav').appendTo('.row_nav');
          $('.tel-link').appendTo('.header__block-contact');
        }
      }
      $(".header__block-btn").on('click', function(){
        var mobMenu = $(".header__mob-menu");
        if (mobMenu.is(':visible')) {
          mobMenu.hide(500);
        }else{
          mobMenu.show(500);
        }
      
      })
      $(".header__mob-menu").on('click', function(){

        var mobMenu = $(this);
        if (mobMenu.is(':visible')) {
          mobMenu.hide(500);
        }else{
          mobMenu.show(500);
        }
      
      })
      //#slider-baner
      if($('#slider-baner').length){

        $('#slider-baner').slick({
          // dots: true,
          infinite: true,
          speed: 500,
          autoplay: true,
          autoplaySpeed: 2000,
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          cssEase: 'linear'
          // adaptiveHeight: true
        }); 
      }

      //#slider-brends
      if($('#slider-brends').length){

        $('#slider-brends').slick({
          infinite: true,
          speed: 1000,
          autoplay: true,
          autoplaySpeed: 3000,
          slidesToShow: 6,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 4,
              }
            }
          ]
        }); 
      }
     
    })

})(jQuery);