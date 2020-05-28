jQuery(document).ready(function ($) {
  new WOW().init();
  //nav menu
  // Cache selectors
  var lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight() + 15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function () {
      var item = $($(this).attr("href"));
      if (item.length) {
        return item;
      }
    });

  // Bind click handler to menu items
  // so we can get a fancy scroll animation
  menuItems.click(function (e) {
    var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
    $("html, body").stop().animate(
      {
        scrollTop: offsetTop,
      },
      1000
    );
    e.preventDefault();
  });

  // Bind to scroll
  $(window).scroll(function () {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function () {
      if ($(this).offset().top < fromTop) return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
      lastId = id;
      // Set/remove active class
      menuItems
        .addClass("text-white-50")
        .parent()
        .removeClass("active-menu")
        .end()
        .filter("[href='#" + id + "' ]")
        .removeClass("text-white-50")
        .parent()
        .addClass("active-menu");
    }
  });

  //click collapse

  $(".accordion__btn").on("click", function () {
    var btn = $(this);
    var id = btn.attr("data-target");
    console.log($(id));
    $(id).on("hidden.bs.collapse", function () {
      console.log("click3");
      btn.children(".fa-minus").css("opacity", "0");
      btn.children(".fa-plus").css("opacity", "1");
    });
    $(id).on("shown.bs.collapse", function () {
      console.log("click2");
      btn.children(".fa-minus").css("opacity", "1");
      btn.children(".fa-plus").css("opacity", "0");
    });
  });

  //slick slider
  $(".variable-width").slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    autoplay: true,
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".blog__card").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    vertical: true,
    autoplay: false,
    prevArrow: $(".card-prev"),
    nextArrow: $(".card-next"),
    verticalSwiping: true,
  });
  //text-overflow
  function cropTitle() {
    $(".blog__card-block_descr").each(function () {
      var $title = $(this).find("p");
      while ($title.height() > $(this).height()) {
        $title.text(
          $title
            .text()
            .split(" ")
            .slice(0, $title.text().split(" ").length - 1)
            .join(" ") + "..."
        );
      }
    });
  }
  cropTitle();

  //--/text-overflow

  //send masege
  $(".form-block_title").on("click", function () {
    var formBlock = $(".form-block");
    if (formBlock.hasClass("form-block-active")) {
      formBlock.removeClass("form-block-active");
    } else {
      formBlock.addClass("form-block-active");
    }
  });
});
