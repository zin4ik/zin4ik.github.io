jQuery(document).ready(function() {
  /* ===адаптивне меню===*/
  $(window).resize(function() {
    var widthWindow = $(window).width();
    if (widthWindow <= 768) {
      $(".header_menu_mob").append($(".header__nav"));
    }
    if (widthWindow > 768) {
      $(".header_menu_despot").append($(".header__nav"));
    }
  });
  // вызовем событие resize
  $(window).resize();
  //функ. cklick
  $(function() {
    $("#pull").click(function() {
      $(".header_menu_mob")
        .stop()
        .fadeToggle();
    });
  });

  // ф-ция печатной машинки
  $(function() {
    $(".home__txt_p").typeIt({
      strings: ["I`m web development`s."] // строки выводимые в печать
    });
  });
  //ініціалізація WOW
  $(function() {
    new WOW().init();
  });

  // var portfolioParalax = $("#scene");
  // var parallaxIns = new Parallax(portfolioParalax);

  //плавный скрол от меню
  $("#menu").on("click", "a", function(event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr("href"),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $("body,html").animate({ scrollTop: top }, 1500);
  });

  //scroll
  $(window).scroll(function() {
    if ($(window).scrollTop() > 75) {
      // console.log("hello");

      $(".header__nav").css("background-color", "rgba(36, 88, 122, 0.9)");
      $(".header__link").css("color", "#ffffff");
      $(".header__menu").animate(
        {
          marginTop: "5px",
          marginBottom: "5px"
        },
        500
      );
    } else {
      $(".header__nav").css("background-color", "rgba(36, 88, 122, 0.2)");
      $(".header__link").css("color", "#333333");
      // $(".header__menu").animate(
      //   {
      //     marginTop: "25px",
      //     marginBottom: "25px"
      //   },
      //   500
      // );
    }
  });

  //zoom
  $(".zoom_close").on("click", function() {
    $(".zoomscrin").removeClass("zoom_on");
    $(".zoomscrin").addClass("zoom_off");
  });

  $(".zoom_item").on("click", function() {
    $("#zoom_img").empty();
    var itemAttr = $(this).attr("data-img");
    if (itemAttr !== undefined) {
      $("#zoom_img").append(
        '<img id="active_img_zoom " src="' + itemAttr + '" alt="/">'
      );

      $(".zoomscrin").removeClass("zoom_off");
      $(".zoomscrin").addClass("zoom_on");
    } else {
      false;
    }
  });

  $("#form").submit(function(e) {
    e.preventDefault();
    console.log('new url: "php/mail.php"');
    var form_data = $(this).serialize();
    $.ajax({
      type: "POST",
      url: "php/mail.php",
      dataType: "html",
      data: form_data,
      success: function(data) {
        // сoбытиe пoслe удaчнoгo oбрaщeния к сeрвeру и пoлучeния oтвeтa
        alert("все ок"); // пoкaжeм eё тeкст
      }
    });

    return false;
  });
});
