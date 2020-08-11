$(document).ready(function () {
  if (".nnb .trainers__image".length) {
    $(".nnb .trainers__image").removeClass("active");
    $(".nnb .trainers__image:first-child ").addClass("active");
  }

  if ($(".wow").length) {
    new WOW().init();
  }
  var show = "1";

  $(window).scroll(function () {
    var scrollPege = $(this).scrollTop();
    var windowHeight = $(window).height();

    if ($(".we__count").length) {
      var countBlockTop = $(".we__count").offset().top;
      if (show == "1") {
        if (countBlockTop < +scrollPege + +windowHeight) {
          show = "2";
          console.log("scroll");
          $(".we__item-number").countTo({
            from: 0,
            speed: 1000,
            refreshInterval: 10,
          });
        }
      }
    }
if($('.alfa-comunication__baner-img').length){
  var alfaComun= $('.alfa-comunication__baner-img').offset().top;
  if(+ scrollPege + +windowHeight>alfaComun){
    // $('.alfa-comunication__baner-user').addClass('border-user-animate');
    $('.alfa-comunication__baner-user img').addClass('user-animate');
  }
}
    /*if($('.subheader').length){
        var blockTop = $('.trainings').offset().top;
        if(scrollPege>blockTop && scrollPege< (+blockTop + +windowHeight)){
       
           if(!$(".subheader").hasClass("subheader-active")){
              $(".subheader").addClass("subheader-active");
             }
           else{
             if($(".subheader").hasClass("subheader-active")){
               $(".subheader").removeClass("subheader-active");
              }
           }
        
        }
     }*/

    if ($(".n-section-quote-right").length) {
      if (scrollPege > $(".n-section-quote-right").offset().top - 70) {
        $(".quote_ava-fon").css("width", "0px");
      }
    }

    if (scrollPege > 100) {
      $(".header").removeClass("header-grey").addClass("header-red");
    }
    if (scrollPege < 100 || scrollPege == 0) {
      $(".header").removeClass("header-red").addClass("header-grey");
    }
    if ($(".we__community-img").length) {
      if (
        scrollPege + windowHeight / 2 >
        $(".we__community-img").offset().top
      ) {
        $(".we__community-img-mask-anime").css("width", "0px");
      }
    }

    if ($(".reviews__video").length) {
      if (scrollPege + windowHeight / 2 > $(".reviews__video").offset().top) {
        $(".reviews__video").addClass("draw-video");
        $(".reviews__video iframe").css("opacity", "1");
      }
    }
  });

  function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
  function numSpaceAll() {
    $(".we__item-number").each(function () {
      var numb = numberWithSpaces($(this).text());
      $(this).text(numb);
    });
  }
  numSpaceAll();

  var elMore = $(".more");
  elMore.each(function (i, elem) {
    $(this)
      .addClass("data-morebtn" + i)
      .attr("data-morebtn", i);
  });

  $(".more p").click(function () {
    var more = $(this);
    $("html, body").animate(
      {
        scrollTop: more.offset().top + 70,
      },
      1000
    );
  });

  if ($("#info-curse1")) {
    $("#info-curse1").show(1000);
  }

  $(".n-need-curs-slider-dot-item").on("click", function () {
    var dot = $(this).attr("data-infocurse");
    var textBlock = $(".n-need-curs-slider-info-item");
    textBlock.css("display", "none");
    $(".n-need-curs-slider-dot-item")
      .removeClass("slider-dot-on")
      .addClass("slider-dot-off");
    $(this).removeClass("slider-dot-off").addClass("slider-dot-on");
    $("#" + dot).show(1000);
  });

  $(".n-program-curs-dots-item").on("click", function () {
    var dot = $(this).attr("data-id");
    console.log(dot);
    var itemtBlock = $(".one-b");
    itemtBlock.removeClass("acb");

    $("#" + dot).addClass("acb");
  });
});

//АЛЬФА КОММУНИКАЦИЯ

$(document).ready(function () {


//   var owl = $("#owl-carousel4");
//   owl.owlCarousel({
//     margin: 0,
//     loop: true,
//     animateOut:false,
//     smartSpeed: 500,
//     autoplay: false,
//     rewind: true,
//     callbacks:true,
//     nav: true,
//     navText: [
//       "<img src='./img/prev.png'/>",
//       "<img src='./img/next.png'/>",
//     ],
//     dots: false,
//     margin: 10,
//     center: false,
//     autoplayTimeout: 5000,
//     autoplayHoverPause: true,
//     items: 1,
//   });

//   owl.on('changed.owl.carousel', function(event) {
//     console.log('Этот консоль лог не срабатывает');
// })
  // function callback(event) {
  //   console.log('Этот консоль лог не срабатывает');
  // }

  if ($(".fear__item-title").length) {
    $(".fear__item-title").on("click", function () {
      var btn = $(this);
      $(".fear__item-popap").css('display','none');
      btn.siblings(".fear__item-popap").fadeIn(500);
    });
  }

  if ($(".program-curs__tab-item").length) {
    $(".program-curs__tab-item").on("click", function () {
      var dot = $(this).attr("data-id");
      var textBlock = $(".alfa-program__sheet");
      textBlock.css("display", "none");
      $(".program-curs__tab-item").removeClass("tab-item-active");
      $(this).addClass("tab-item-active");
      $("#" + dot).fadeIn(1000);
    });
  }
});

$("a.fancybox").click(function () {
  if ($(".reviews__rev").height() > 300) {
    $(".ght").toggleClass(" aff");
  }
});
$(function () {
  var s = $("label");
  s.each(function (indx, el) {
    $(":checkbox", el).click(function (event) {
      $(el)[($(el).has(":checked").length ? "add" : "remove") + "Class"](
        "orange"
      );
    });
  });
});
var div = document.querySelector(".trainers__table:first-child");
var diva = document.querySelector(".trainers__nav a:first-child");
var divfon = document.querySelector(".back-fonn .poz-abs:nth-child(1)");
window.onload = () => {
  div.className += " active";
  diva.className += " active";
  divfon.className += " yes";
};
$(document).ready(function () {
  var owl = $("#owl-carousel");
  var sumCarousel = $("#owl-carousel .owl-item").length;
  owl.owlCarousel({
    margin: 0,
    loop: false,
    animateOut: "fadeOut",
    smartSpeed: 450,
    autoplay: true,
    rewind: true,
    autoWidth: true,
    nav: true,
    navText: [
      "<img src='/wp-content/themes/aclub/img/prev.png'/>",
      "<img src='/wp-content/themes/aclub/img/next.png'/>",
    ],
    dots: false,
    margin: 10,
    center: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        startPosition: +sumCarousel,
      },
      600: {
        items: 4,
        startPosition: +sumCarousel - 3,
      },
      1000: {
        items: 4,
        startPosition: +sumCarousel - 3,
      },
    },
  });
});
$(document).ready(function () {
  var owl = $("#owl-carousel1");
  owl.owlCarousel({
    margin: 0,
    loop: true,
    animateOut: "fadeOut",
    smartSpeed: 450,
    navText: [
      "<img src='/wp-content/themes/aclub/img/prev.png'/>",
      "<img src='/wp-content/themes/aclub/img/next.png'/>",
    ],
    autoplay: false,
    nav: true,
    dots: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });
});
$(document).ready(function () {
  var owl = $("#owl-carousel2");
  var sumCarousel2 = $("#owl-carousel2 .owl-item").length - 1;
  owl.owlCarousel({
    margin: 0,
    loop: false,
    animateOut: "fadeOut",
    smartSpeed: 450,
    navText: [
      "<img src='/wp-content/themes/aclub/img/prev.png'/>",
      "<img src='/wp-content/themes/aclub/img/next.png'/>",
    ],
    autoplay: true,

    nav: true,
    dots: true,
    rewind: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        startPosition: 1,
      },
      600: {
        items: 2,
        startPosition: 2,
      },
      1000: {
        items: 3,
        startPosition: 2,
      },
    },
  });
});
$(document).ready(function () {
  /*var owl = $('#owl-carousel5');
owl.owlCarousel({
margin: 0, loop: true,
animateOut: 'fadeOut',
smartSpeed: 450,
autoplay: false,
nav: true,
dots: false,
navText : ["<img src='/wp-content/themes/aclub/img/prev.png'/>","<img src='/wp-content/themes/aclub/img/next.png'/>"],
autoplayTimeout: 5000,
autoplayHoverPause: true,
responsive: {
0: {
items: 1
},
600: {
items: 2
},
1000: {
items: 4
}
}
});*/

  var owl = $("#owl-carousel3");
  owl.owlCarousel({
    margin: 0,
    loop: true,
    animateOut: "fadeOut",
    smartSpeed: 450,
    autoplay: true,
    nav: true,
    dots: false,
    navText: [
      "<img src='/wp-content/themes/aclub/img/prev.png'/>",
      "<img src='/wp-content/themes/aclub/img/next.png'/>",
    ],
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
});
$(document).ready(function () {
  var owl = $("#owl-carousel-single");
  owl.owlCarousel({
    margin: 0,
    loop: true,
    animateOut: "fadeOut",
    smartSpeed: 450,
    navText: [
      "<img src='/wp-content/themes/aclub/img/prev.png'/>",
      "<img src='/wp-content/themes/aclub/img/next.png'/>",
    ],
    autoplay: false,
    nav: true,
    dots: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});
$(document).ready(function () {
  var owl = $("#owl-carousel11");
  owl.owlCarousel({
    margin: 0,
    loop: true,
    animateOut: "fadeOut",
    smartSpeed: 450,
    autoplay: false,
    nav: true,
    dots: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 4,
      },
    },
  });
});
$(function () {
  $('.secondary__buttons a[href^="#"]').on("click", function (event) {
    event.preventDefault();
    var sc = $(this).attr("href"),
      dn = $(sc).offset().top;
    $("html, body").animate({ scrollTop: dn }, 1000);
  });
});
var distance = 200,
  box = $(".blog__tab-container");
$("a.blog__tab-arrow").on("click", function () {
  box.stop().animate({
    scrollLeft: "+=" + distance * $(this).data("factor"),
  });
});

var distance1 = 200,
  box1 = $(".include__table");
$("a.include__nav ").on("click", function () {
  box1.stop().animate({
    scrollLeft: "+=" + distance * $(this).data("factor1"),
  });
});

$(document).ready(function () {
  $(".include__tabs").click(function () {
    $(this).toggleClass("ax99");
  });

  $("a.trainers__profile:nth-child(1)").click(function () {
    $(".trainers__modal-content").removeClass("ax");
    $(".trainers.trainers-modal").toggleClass("axtive");
    $(".trainers__modal-content:nth-child(1)").toggleClass("ax");
  });
  $("a.trainers__profile:nth-child(2").click(function () {
    $(".trainers__modal-content").removeClass("ax");
    $(".trainers.trainers-modal").toggleClass("axtive");
    $(".trainers__modal-content:nth-child(2)").toggleClass("ax");
  });
  $("a.trainers__profile:nth-child(3)").click(function () {
    $(".trainers__modal-content").removeClass("ax");
    $(".trainers.trainers-modal").toggleClass("axtive");
    $(".trainers__modal-content:nth-child(3)").toggleClass("ax");
  });
  $("a.trainers__profile:nth-child(4)").click(function () {
    $(".trainers__modal-content").removeClass("ax");
    $(".trainers.trainers-modal").toggleClass("axtive");
    $(".trainers__modal-content:nth-child(4)").toggleClass("ax");
  });
  $(".trainers-modal__close").click(function () {
    $(".trainers__modal-content").removeClass("ax");
    $(".trainers.trainers-modal").removeClass("axtive");
  });
  $(".include__tabs a:first-child").click(function () {
    $(".include__tabs a").removeClass("active");
    $(this).toggleClass("active");
    $(".include__table").removeClass("avc");
    $(".include__table.h1").toggleClass("avc");
  });
  $(".include__tabs a:nth-child(2)").click(function () {
    $(".include__tabs a").removeClass("active");
    $(this).toggleClass("active");
    $(".include__table").removeClass("avc");
    $(".include__table.h2").toggleClass("avc");
  });
  $(".include__tabs a:nth-child(3)").click(function () {
    $(".include__tabs a").removeClass("active");
    $(this).toggleClass("active");
    $(".include__table").removeClass("avc");
    $(".include__table.h3").toggleClass("avc");
  });
  $(".need__nav a:first-child").click(function () {
    $(".need__nav a").removeClass("active");
    $(this).toggleClass("active");
    $(".need__slide").removeClass("active2");
    $(".need__slide:first-child").toggleClass("active2");
  });
  $(".need__nav a:nth-child(2)").click(function () {
    $(".need__nav a").removeClass("active");
    $(this).toggleClass("active");
    $(".need__slide").removeClass("active2");
    $(".need__slide:nth-child(2)").toggleClass("active2");
  });
  $(".need__nav a:nth-child(3)").click(function () {
    $(".need__nav a").removeClass("active");
    $(this).toggleClass("active");
    $(".need__slide").removeClass("active2");
    $(".need__slide:nth-child(3)").toggleClass("active2");
  });
  $(".program__nav a:nth-child(1)").click(function () {
    $(".program__nav a").removeClass("active");
    $(this).toggleClass("active");
    $(".one-b").removeClass("acb");
    $(".one-b:nth-child(1)").toggleClass("acb");
  });
  $(".program__nav a:nth-child(2)").click(function () {
    $(".program__nav a").removeClass("active");
    $(this).toggleClass("active");
    $(".one-b").removeClass("acb");
    $(".one-b:nth-child(2)").toggleClass("acb");
  });
  $(".program__nav a:nth-child(3)").click(function () {
    $(".program__nav a").removeClass("active");
    $(this).toggleClass("active");
    $(".one-b").removeClass("acb");
    $(".one-b:nth-child(3)").toggleClass("acb");
  });
  $(".program__nav a:nth-child(4)").click(function () {
    $(".program__nav a").removeClass("active");
    $(this).toggleClass("active");
    $(".one-b").removeClass("acb");
    $(".one-b:nth-child(4)").toggleClass("acb");
  });
  $(".program__nav a:nth-child(5)").click(function () {
    $(".program__nav a").removeClass("active");
    $(this).toggleClass("active");
    $(".one-b").removeClass("acb");
    $(".one-b:nth-child(5)").toggleClass("acb");
  });
  $(".program__nav a:nth-child(6)").click(function () {
    $(".program__nav a").removeClass("active");
    $(this).toggleClass("active");
    $(".one-b").removeClass("acb");
    $(".one-b:nth-child(6)").toggleClass("acb");
  });
  $(".program__nav a:nth-child(7)").click(function () {
    $(".program__nav a").removeClass("active");
    $(this).toggleClass("active");
    $(".one-b").removeClass("acb");
    $(".one-b:nth-child(7)").toggleClass("acb");
  });
  $(".program__nav a:nth-child(8)").click(function () {
    $(".program__nav a").removeClass("active");
    $(this).toggleClass("active");
    $(".one-b").removeClass("acb");
    $(".one-b:nth-child(8)").toggleClass("acb");
  });
  $(".program__nav-mobile a:nth-child(1)").click(function () {
    $(".program__nav-mobile a").removeClass("active");
    $(this).toggleClass("active");
    $(".one-b").removeClass("acb");
    $(".one-b:nth-child(1)").toggleClass("acb");
  });
  $(".program__nav-mobile a:nth-child(2)").click(function () {
    $(".program__nav-mobile a").removeClass("active");
    $(this).toggleClass("active");
    $(".one-b").removeClass("acb");
    $(".one-b:nth-child(2)").toggleClass("acb");
  });
  $(".program__nav-mobile a:nth-child(3)").click(function () {
    $(".program__nav-mobile a").removeClass("active");
    $(this).toggleClass("active");
    $(".one-b").removeClass("acb");
    $(".one-b:nth-child(3)").toggleClass("acb");
  });
  $(".program__nav-mobile a:nth-child(4)").click(function () {
    $(".program__nav-mobile a").removeClass("active");
    $(this).toggleClass("active");
    $(".one-b").removeClass("acb");
    $(".one-b:nth-child(4)").toggleClass("acb");
  });
  $(".program__nav-mobile a:nth-child(5)").click(function () {
    $(".program__nav-mobile a").removeClass("active");
    $(this).toggleClass("active");
    $(".one-b").removeClass("acb");
    $(".one-b:nth-child(5)").toggleClass("acb");
  });
  $(".program__nav-mobile a:nth-child(6)").click(function () {
    $(".program__nav-mobile a").removeClass("active");
    $(this).toggleClass("active");
    $(".one-b").removeClass("acb");
    $(".one-b:nth-child(6)").toggleClass("acb");
  });
  $(".program__nav-mobile a:nth-child(7)").click(function () {
    $(".program__nav-mobile a").removeClass("active");
    $(this).toggleClass("active");
    $(".one-b").removeClass("acb");
    $(".one-b:nth-child(7)").toggleClass("acb");
  });
  $(".program__nav-mobile a:nth-child(8)").click(function () {
    $(".program__nav-mobile a").removeClass("active");
    $(this).toggleClass("active");
    $(".one-b").removeClass("acb");
    $(".one-b:nth-child(8)").toggleClass("acb");
  });
});
$(document).ready(function () {
  $("a.header__burger").click(function () {
    $(this).toggleClass("active112");
    $(".header__links").toggleClass("opened");
  });
});
$(document).ready(function () {
  $(".blog__tab button").click(function () {
    $(".blog__tab button").removeClass("active");
    $(this).toggleClass("active");
  });
  $(".blog__tab button.cat-2").click(function () {
    $(".blog__slide").removeClass("opac");
    $(".blog__slide").toggleClass("opac");
    $(".blog__slide.cat-2").removeClass("opac");
  });
  $(".blog__tab button.cat-1").click(function () {
    $(".blog__slide").removeClass("opac");
    $(".blog__slide").toggleClass("opac");
    $(".blog__slide.cat-1").removeClass("opac");
  });
  $(".blog__tab button.cat-3").click(function () {
    $(".blog__slide").removeClass("opac");
    $(".blog__slide").toggleClass("opac");
    $(".blog__slide.cat-3").removeClass("opac");
  });
  $(".blog__tab button.cat-4").click(function () {
    $(".blog__slide").removeClass("opac");
    $(".blog__slide").toggleClass("opac");
    $(".blog__slide.cat-4").removeClass("opac");
  });
  $(".blog__tab button.cat-5").click(function () {
    $(".blog__slide").removeClass("opac");
    $(".blog__slide").toggleClass("opac");
    $(".blog__slide.cat-5").removeClass("opac");
  });
  $(".blog__tab button.cat-6").click(function () {
    $(".blog__slide").removeClass("opac");
    $(".blog__slide").toggleClass("opac");
    $(".blog__slide.cat-6").removeClass("opac");
  });
});
$(document).ready(function () {
  $(".subheader__links a.group").click(function () {
    $(".subheader__links a").removeClass("active");
    $("a.group").toggleClass("active");
    $(".trainings__item").removeClass("opac");
    $(".trainings__item").toggleClass("opac");
    $(".trainings__item.group").removeClass("opac");
  });
  $(".subheader__links a.korp").click(function () {
    $(".subheader__links a").removeClass("active");
    $("a.korp").toggleClass("active");
    $(".trainings__item").removeClass("opac");
    $(".trainings__item").toggleClass("opac");
    $(".trainings__item.korp").removeClass("opac");
  });
  $(".subheader__links a.onl").click(function () {
    $(".subheader__links a").removeClass("active");
    $("a.onl").toggleClass("active");
    $(".trainings__item").removeClass("opac");
    $(".trainings__item").toggleClass("opac");
    $(".trainings__item.onl").removeClass("opac");
  });
  $(".subheader__links a.indi").click(function () {
    $(".subheader__links a").removeClass("active");
    $("a.indi").toggleClass("active");
    $(".trainings__item").removeClass("opac");
    $(".trainings__item").toggleClass("opac");
    $(".trainings__item.indi").removeClass("opac");
  });
  $(".subheader__links a.vce").click(function () {
    $(".subheader__links a").removeClass("active");
    $("a.vce").toggleClass("active");
    $(".trainings__item").removeClass("opac");
  });
});
$(document).ready(function () {
  $("a.ttr601").click(function () {
    $(".back-fonn .poz-abs").removeClass("yes");
    $(".back-fonn .poz-abs:nth-child(1)").toggleClass("yes");
    $(".trainers__nav a").removeClass("active");
    $(".trainers__table").removeClass("active");
    $("a.trainers__profile").removeClass("active");
    $(this).toggleClass("active");
    $(".trainers__table.ttt601").toggleClass("active");
    $("a.trainers__profile.knopka601").toggleClass("active");
    $("img.trainers__image").removeClass("active");
    $("img.trainers__image.ttr601").toggleClass("active");
    $(".trainers__image").removeClass("active");
    $(".trainers__image:nth-child(1)").toggleClass("active");
  });
  $("a.ttr611").click(function () {
    $(".back-fonn .poz-abs").removeClass("yes");
    $(".back-fonn .poz-abs:nth-child(2)").toggleClass("yes");
    $(".trainers__nav a").removeClass("active");
    $(".trainers__table").removeClass("active");
    $("a.trainers__profile").removeClass("active");
    $(this).toggleClass("active");
    $(".trainers__table.ttt611").toggleClass("active");
    $("a.trainers__profile.knopka611").toggleClass("active");
    $("img.trainers__image").removeClass("active");
    $("img.trainers__image.t1tr611").toggleClass("active");
    $(".trainers__image").removeClass("active");
    $(".trainers__image:nth-child(2)").toggleClass("active");
  });
  $("a.ttr612").click(function () {
    $(".back-fonn .poz-abs").removeClass("yes");
    $(".back-fonn .poz-abs:nth-child(3)").toggleClass("yes");
    $(".trainers__nav a").removeClass("active");
    $(".trainers__table").removeClass("active");
    $("a.trainers__profile").removeClass("active");
    $(this).toggleClass("active");
    $(".trainers__table.ttt612").toggleClass("active");
    $("a.trainers__profile.knopka612").toggleClass("active");
    $("img.trainers__image").removeClass("active");
    $("img.trainers__image.t1tr612").toggleClass("active");
    $(".trainers__image").removeClass("active");
    $(".trainers__image:nth-child(3)").toggleClass("active");
  });
  $("a.ttr613").click(function () {
    $(".back-fonn .poz-abs").removeClass("yes");
    $(".back-fonn .poz-abs:nth-child(4)").toggleClass("yes");
    $(".trainers__nav a").removeClass("active");
    $(".trainers__table").removeClass("active");
    $("a.trainers__profile").removeClass("active");
    $(this).toggleClass("active");
    $(".trainers__table.ttt613").toggleClass("active");
    $("a.trainers__profile.knopka613").toggleClass("active");
    $("img.trainers__image").removeClass("active");
    $("img.trainers__image.t1tr613").toggleClass("active");
    $(".trainers__image").removeClass("active");
    $(".trainers__image:nth-child(4)").toggleClass("active");
  });
});
$(document).ready(function () {
  $("a.trainers__arrow").click(function () {
    $(this).toggleClass("active1");
    $(".trainers__nav").toggleClass("active3");
  });
});

var elCloc = document.getElementById("countdown");
if (elCloc) {
  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector(".days");
    var hoursSpan = clock.querySelector(".hours");
    var minutesSpan = clock.querySelector(".minutes");
    var secondsSpan = clock.querySelector(".seconds");
    function updateClock() {
      var t = getTimeRemaining(endtime);
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
      minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
      secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
  var deadline = "2020-11-21";
  initializeClock("countdown", deadline);
}
