jQuery(document).ready(function($) {
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
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1
        }
      }
    ]
  });
  $(".blog__card").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    vertical: true,
    autoplay: false,
    prevArrow: $('.card-prev'),
    nextArrow: $('.card-next'),
    verticalSwiping: true
  });
  //text-overflow
  function cropTitle() {
    $(".blog__card-block_descr").each(function() {
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
  $(".form-block_title").on("click", function() {
    var formBlock = $(".form-block");
    if (formBlock.hasClass("form-block-active")) {
      formBlock.removeClass("form-block-active");
    } else {
      formBlock.addClass("form-block-active");
    }
  });
});
