$(document).ready(function () {
  $("#car-poppy_block").on("click", function (event) {
    event.preventDefault();

    var selectCar = $("#car-poppy_list");
    if (selectCar.css("display") == "none") {
      selectCar.css("display", "block");
    } else {
      selectCar.css("display", "none");
    }
  });

  var modal = $(".popup-menu"),
    link = $(".open-btn");
  link.on("click", function () {
    if (!$(this).hasClass("close-btn")) {
      $(this).toggleClass("close-btn");
      document.body.style.overflow = "hidden";
      modal.toggleClass("popup-active");
      $(modal).css({ "border-bottom": "2px solid #fff" });
      $(modal).animate(
        { width: "94vw", left: 0 },
        {
          duration: 500,
          complete: function () {
            $(modal).animate(
              { top: 0, height: "100vh", width: "100vw" },
              {
                duration: 400,
                complete: function () {
                  $(modal).css({ "border-bottom": "none" });
                  $(".popup-menu-right li").each(function (index, item) {
                    setTimeout(function () {
                      $(item).slideDown(750);
                    }, 50 * index);
                    $(".popup-active .bgtitle").slideDown(500);
                  });
                },
              }
            );
          },
        }
      );
    } else {
      $(this).toggleClass("close-btn");
      $(".popup-active .bgtitle").hide(100);
      $(modal).css({ "border-bottom": "2px solid #fff" });
      $(".popup-menu-right li").css({ display: "none" });
      $(modal).css({ width: "94vw" });
      $(modal).animate(
        { top: "55px", height: 0 },
        {
          duration: 500,
          complete: function () {
            $(modal).animate(
              { width: 0, left: "94vw" },
              {
                duration: 400,
                complete: function () {
                  $(modal).css({ "border-bottom": "none" });
                  modal.toggleClass("popup-active");
                  document.body.style.overflowY = "auto";
                },
              }
            );
          },
        }
      );
    }
  });
  var show_bottom_form = $("#show_bottom_form-car-add");
  if (show_bottom_form) {
    $(".contacts__content__close").click(function () {
      document.body.style.overflowY = "scroll";
      $(".contacts__content").animate(
        {
          top: "100vh",
        },
        900
      );
    });
    show_bottom_form.on("click", function () {
      document.body.style.overflowY = "hidden";
      $(".contacts__content").animate(
        {
          top: 0,
        },
        {
          duration: 900,
          complete: function () {
            $("#request-name").focus();
            $("#request-marka").focus();
          },
        }
      );
    });
  }
  $(".img-svg").each(function () {
    var $img = $(this);
    var imgClass = $img.attr("class");
    var imgURL = $img.attr("src");
    $.get(
      imgURL,
      function (data) {
        var $svg = $(data).find("svg");
        if (typeof imgClass !== "undefined") {
          $svg = $svg.attr("class", imgClass + " replaced-svg");
        }
        $svg = $svg.removeAttr("xmlns:a");
        if (
          !$svg.attr("viewBox") &&
          $svg.attr("height") &&
          $svg.attr("width")
        ) {
          $svg.attr(
            "viewBox",
            "0 0 " + $svg.attr("height") + " " + $svg.attr("width")
          );
        }
        $img.replaceWith($svg);
      },
      "xml"
    );
  });
  $(".img-svg-info").each(function () {
    var $img = $(this);
    var imgClass = $img.attr("class");
    var imgURL = $img.attr("src");
    $.get(
      imgURL,
      function (data) {
        var $svg = $(data).find("svg");
        if (typeof imgClass !== "undefined") {
          $svg = $svg.attr("class", imgClass + " replaced-svg");
        }
        $svg = $svg.removeAttr("xmlns:a");
        if (
          !$svg.attr("viewBox") &&
          $svg.attr("height") &&
          $svg.attr("width")
        ) {
          $svg.attr(
            "viewBox",
            "0 0 " + $svg.attr("height") + " " + $svg.attr("width")
          );
        }
        $img.replaceWith($svg);
      },
      "xml"
    );
  });
});
