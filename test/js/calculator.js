$(document).ready(function () {
  //defold func
  $(function () {
    // $("label[for='premium']").trigger("click");
    $("#premium").prop("checked", true);
    ClickProtectDVS($("#row-protectDVS_banka"));
    ClickFilterDVS1($("#filterDVS__cheked-block1"));
    ClickRowJob1($("#service-cost__cheked-block1"));
  });
  //------recalculation func
  var washOilPrise = 0;
  var washOilTime = 0;
  var razMasloPrise = 0;
  var razMasloTime = 0;
  var newOilPrise = 0;
  var newOilTime = 0;
  var protectPrise = 0;
  var protectTime = 0;
  var filterDVSPrise = 0;
  var filterDVSTime = 0;
  var serviceCostPrise = 0;
  var serviceCostTime = 0;
  var salonPrise = 0;
  var salonTime = 0;
  var sumPrice = 0;
  var sumTime = 0;
  function SumPrice() {
    sumPrice =
      +washOilPrise +
      +razMasloPrise +
      +newOilPrise +
      +protectPrise +
      +filterDVSPrise +
      +serviceCostPrise +
      +salonPrise;
    if (+washOilPrise + +razMasloPrise > 0) {
      $("#services_select-clear").prop("checked", false);
      $(".checked-icon-clear").css("opacity", "0");
      $("#row-services-washDVS")
        .find(".img-svg-info path")
        .css("fill", "#16EAFD");
    } else {
      false;
    }

    $("#total-services_price-value").html(sumPrice.toLocaleString("ru"));
    sumTime =
      +washOilTime +
      +razMasloTime +
      +newOilTime +
      +protectTime +
      +filterDVSTime +
      +serviceCostTime +
      +salonTime;

    $("#all-time").html(sumTime);
    $("#total-time-value").html(sumTime);
  }

  //------ END recalculation func
  //----fun checking on != 0
  function selectNewOil(select, price) {
    if (price !== 0) {
      select.removeClass("disable-item");
    } else {
      select.addClass("disable-item");
    }
  }

  //---- END fun checking on != 0
  ///select packege
  function resetOil(package) {
    $('input[name="package"]').each(function () {
      if (this.value == package.data("packege")) {
        $(".btn-select-pack-txt").html($(this).siblings("label").text());
        $(this).prop("checked", true);
        $("#all-package").prop("checked", false);
        $("#all-packege-icon").css("opacity", "0");
      } else {
        console.log("now");
      }
    });
  }

  ////func выбора пекета
  function chengePack(inp) {
    if (inp == "luxury") {
      ClickRazOil($("#row-raz-maslo2"));
      ClickWashOil($("#row-wash-oil3"));
      ClickOil($("#row-lux"));
      ClickProtectDVS($("#row-protectDVS_max"));

      if (!$("#filterDVS-cheked2").is(":checked")) {
        $("#filterDVS-cheked2").prop("checked", true);
        ClickFilterDVS2($("#filterDVS__cheked-block2"));
      } else {
        false;
      }

      if (!$("#salon-cheked1").is(":checked")) {
        ClickRowSalon($("#salon-checked"));
      } else {
        false;
      }
    }
    if (inp == "premium-plus") {
      ClickRazOil($("#row-raz-maslo2"));
      ClickWashOil($("#row-wash-oil2"));
      ClickOil($("#row-premiumPlus"));
      ClickProtectDVS($("#row-protectDVS_max"));
      if (!$("#filterDVS-cheked2").is(":checked")) {
        $("#filterDVS-cheked2").prop("checked", true);
        ClickFilterDVS2($("#filterDVS__cheked-block2"));
      } else {
        false;
      }
      if (!$("#salon-cheked1").is(":checked")) {
        ClickRowSalon($("#salon-checked"));
      } else {
        false;
      }
    }
    if (inp == "premium") {
      ClickRazOil($("#row-raz-maslo2"));
      ClickWashOil($("#row-wash-oil1"));
      ClickOil($("#row-premium"));
      ClickProtectDVS($("#row-protectDVS_banka"));

      ClickProtectDVS($("#row-protectDVS_max"));

      if (!$("#filterDVS-cheked2").is(":checked")) {
        $("#filterDVS-cheked2").prop("checked", true);
        ClickFilterDVS2($("#filterDVS__cheked-block2"));
      } else {
        false;
      }
      if ($("#salon-cheked1").is(":checked")) {
        $("#salon-cheked2").prop("checked", false);
        ClickRowSalon($("#salon-checked"));
      } else {
        false;
      }
    }
    if (inp == "dealer") {
      ClickRazOil($("#row-raz-maslo1"));
      ClickWashOil($("#row-wash-oil1"));
      ClickOil($("#row-diler"));
      ClickProtectDVS($("#row-protectDVS_banka"));

      if ($("#filterDVS-cheked2").is(":checked")) {
        $("#filterDVS-cheked2").prop("checked", false);
        ClickFilterDVS2($("#filterDVS__cheked-block2"));
      } else {
        false;
      }

      if ($("#salon-cheked1").is(":checked")) {
        $("#salon-cheked2").prop("checked", false);
        ClickRowSalon($("#salon-checked"));
      } else {
        false;
      }
    }
  }
  ///click по выбору пакета
  $(".selected-package-item").on("click", function () {
    $(".btn-select-pack-txt").html($(this).text());
    $('input[name="package"]').change(function () {
      chengePack(this.value);

      if (!$("#all-package").is(":checked")) {
        $("#all-package").prop("checked", true);
        $("#all-packege-icon").css("opacity", "1");
      } else {
        false;
      }
    });
  });
  //-------END select packege

  //----func row-raz-maslo-tr-----
  function ClickRazOil(celector) {
    $(".raz-maslo").removeClass("label-txt-selected");
    $(".row-raz-maslo-tr").removeClass("disable-item");
    $(".row-raz-maslo-tr").addClass("disable-item");
    celector.removeClass("disable-item");
    celector.find("label").addClass("label-txt-selected");
    celector.find("input").prop("checked", true);
    razMasloPrise = 0;
    razMasloTime = 0;
    razMasloPrise = celector.find("input").val();
    razMasloTime = celector.find("input").data("time");
    var sumP = +washOilPrise + +razMasloPrise;
    var sumT = +washOilTime + +razMasloTime;
    SumPrice();
    $("#wash-services_price-value").html(
      sumP.toLocaleString("ru") + "<span>грн</span>"
    );
    if (sumT > 0) {
      $("#washOilTime").parent().css("display", "flex");
      $("#washOilTime").html(sumT);
    } else {
      $("#washOilTime").parent().css("display", "none");
    }

    var select = $(".row-wash");
    selectNewOil(select, sumP);
  }
  $(".row-raz-maslo-tr").on("click", function () {
    var celector = $(this);

    ClickRazOil(celector);
  });
  ///------End row-raz-maslo-tr----

  //----func row-wash-oil-tr-----
  function ClickWashOil(celector) {
    $(".wash-oil").removeClass("label-txt-selected");
    $(".row-wash-oil-tr").removeClass("disable-item");
    $(".row-wash-oil-tr").addClass("disable-item");
    celector.removeClass("disable-item");
    celector.find("label").addClass("label-txt-selected");
    celector.find("input").prop("checked", true);
    washOilPrise = 0;
    washOilTime = 0;
    washOilPrise = celector.find("input").val();
    washOilTime = celector.find("input").data("time");
    var sumP = +washOilPrise + +razMasloPrise;
    var sumT = +washOilTime + +razMasloTime;
    SumPrice();
    $("#wash-services_price-value").html(
      sumP.toLocaleString("ru") + "<span>грн</span>"
    );
    if (sumT > 0) {
      $("#washOilTime").parent().css("display", "flex");
      $("#washOilTime").html(sumT);
    } else {
      $("#washOilTime").parent().css("display", "none");
    }
    var select = $(".row-wash");
    selectNewOil(select, sumP);
  }
  $(".row-wash-oil-tr").on("click", function () {
    var celector = $(this);

    ClickWashOil(celector);
  });
  ///------End row-wash-oil-tr----

  ///-------seleck oil/////
  function ClickOil(celector) {
    $(".new-oil").removeClass("label-txt-selected");
    $(".rom-oil-tr").removeClass("disable-item");
    $(".rom-oil-tr").addClass("disable-item");
    celector.removeClass("disable-item");
    celector.find("label").addClass("label-txt-selected");

    celector.find("input").prop("checked", true);

    newOilPrise = +celector.find("input").val();
    newOilTime = celector.find("input").data("time");
    var dataPreice = celector.find("input").data("price");
    SumPrice();

    $("#newoil-services_price-value").html(
      newOilPrise.toLocaleString("ru-RU") + "<span>грн</span>"
    );
    if (+newOilTime > 0) {
      $("#newOilTime").parent().css("display", "flex");
      $("#newOilTime").html(newOilTime);
    } else {
      $("#newOilTime").parent().css("display", "none");
    }

    var txt1 = celector.find(".new-oil__name").text();
    // var txt2 = celector.find(".new-oil__price").text();
    $("#select-btn-txt").html(txt1 + " - " + dataPreice);
    var select = $(".row-new_oil");
    selectNewOil(select, newOilPrise);
    resetOil(celector.find("input"));
  }

  $(".rom-oil-tr").on("click", function () {
    var celector = $(this);

    ClickOil(celector);
  });

  // --- END click new oil

  ///------row-protect dvs

  function ClickProtectDVS(celector) {
    $(".protect-label").removeClass("label-txt-selected");
    $(".row-protectDVS").removeClass("disable-item");
    $(".row-protectDVS").addClass("disable-item");
    celector.removeClass("disable-item");
    celector.find("label").addClass("label-txt-selected");
    celector.find("input").prop("checked", true);
    protectPrise = 0;
    protectTime = 0;

    protectPrise = +celector.find("input").val();
    protectTime = celector.find("input").data("time");
    SumPrice();
    $("#protect-services_price-value").html(
      protectPrise.toLocaleString("ru") + "<span>грн</span>"
    );
    $("#protectTime").html(protectTime);
    var select = $(".row-protect_DVS");
    selectNewOil(select, protectPrise);
  }
  $(".row-protectDVS").on("click", function () {
    var celector = $(this);

    ClickProtectDVS(celector);
  });
  ///------End row-protect----

  ///------row-filterDVS
  function ClickFilterDVS1(celector) {
    var check = celector.find(".checked-icon");
    filterDVSPrise = 0;
    filterDVSTime = 0;

    check.css("opacity", "1");
    celector.find("input").prop("checked", true);
    celector.removeClass("disable-item");

    $(".filterDVS-input:checked").each(function () {
      filterDVSPrise += +$(this).val();
      filterDVSTime += +$(this).attr("data-time");
    });

    SumPrice();
    $("#filterDVS-services_price-value").html(
      filterDVSPrise.toLocaleString("ru") + "<span>грн</span>"
    );
    $("#filterDVSTime").html(filterDVSTime);
    var select = $(".row-filter_DVS");
    selectNewOil(select, filterDVSPrise);
  }

  //////
  function ClickFilterDVS2(celector) {
    var check = celector.find(".checked-icon");
    filterDVSPrise = 0;
    filterDVSTime = 0;

    if (celector.find("input").is(":checked")) {
      check.css("opacity", "1");
      celector.removeClass("disable-item");
      if (!$("#service-cost-cheked2").is(":checked")) {
        $("#service-cost-cheked2").prop("checked", true);
        ClickRowJob2($("#service-cost__cheked-block2"));
      } else {
        false;
      }
    } else {
      check.css("opacity", "0");
      celector.addClass("disable-item");
      if ($("#service-cost-cheked2").is(":checked")) {
        $("#service-cost-cheked2").prop("checked", false);
        ClickRowJob2($("#service-cost__cheked-block2"));
      } else {
        false;
      }
    }
    $(".filterDVS-input:checked").each(function () {
      filterDVSPrise += +$(this).val();
      filterDVSTime += +$(this).attr("data-time");
    });

    SumPrice();
    $("#filterDVS-services_price-value").html(
      filterDVSPrise.toLocaleString("ru") + "<span>грн</span>"
    );
    $("#filterDVSTime").html(filterDVSTime);
    var select = $(".row-filter_DVS");
    selectNewOil(select, filterDVSPrise);
  }
  $("#filterDVS__cheked-block2").on("click", function () {
    var celector = $(this);

    ClickFilterDVS2(celector);
  });
  ///------End row-filter dvs----

  function ClickRowJob1(celector) {
    serviceCostPrise = 0;
    serviceCostTime = 0;

    celector.find("input").prop("checked", true);
    $("#service-cost__cheked-block1").removeClass("disable-item");
    $(".service-cost-input:checked").each(function () {
      serviceCostPrise += +$(this).val();
      serviceCostTime += +$(this).attr("data-time");
    });

    SumPrice();
    $("#service-cost-services_price-value").html(
      serviceCostPrise.toLocaleString("ru") + "<span>грн</span>"
    );
    $("#serviceCostTime").html(serviceCostTime);
    var select = $(".row-job");
    selectNewOil(select, serviceCostPrise);
  }
  $("#service-cost__cheked-block1").on("click", function () {
    var celector = $(this);

    ClickRowJob1(celector);
  });

  function ClickRowJob2(celector) {
    serviceCostPrise = 0;
    serviceCostTime = 0;

    if (celector.find("input").is(":checked")) {
      $("#service-cost__cheked-block2").removeClass("disable-item");
      if (!$("#filterDVS-cheked2").is(":checked")) {
        $("#filterDVS-cheked2").prop("checked", true);
        ClickFilterDVS2($("#filterDVS__cheked-block2"));
      } else {
        false;
      }
    } else {
      $("#service-cost__cheked-block2").addClass("disable-item");
      if ($("#filterDVS-cheked2").is(":checked")) {
        $("#filterDVS-cheked2").prop("checked", false);
        ClickFilterDVS2($("#filterDVS__cheked-block2"));
      } else {
        false;
      }
    }
    $(".service-cost-input:checked").each(function () {
      serviceCostPrise += +$(this).val();
      serviceCostTime += +$(this).attr("data-time");
    });

    SumPrice();
    $("#service-cost-services_price-value").html(
      serviceCostPrise.toLocaleString("ru") + "<span>грн</span>"
    );
    $("#serviceCostTime").html(serviceCostTime);
    var select = $(".row-job");
    selectNewOil(select, serviceCostPrise);
  }
  $("#service-cost__cheked-block2").on("click", function () {
    var celector = $(this);

    ClickRowJob2(celector);
  });

  ///------End row-job----

  function ClickRowSalon(celector) {
    salonPrise = 0;
    salonTime = 0;

    if (!celector.find("input").is(":checked")) {
      $(".salon-input").prop("checked", true);
      $(".salon__cheked-block").removeClass("disable-item");
      $("#checked-icon-salon").css("opacity", "1");
    } else {
      $(".salon-input").prop("checked", false);
      $(".salon__cheked-block").addClass("disable-item");
      $("#checked-icon-salon").css("opacity", "0");
    }
    $(".salon-input:checked").each(function () {
      salonPrise += +$(this).val();
      salonTime += +$(this).attr("data-time");
    });

    SumPrice();
    if (salonPrise > 0) {
      $("#salon-services_price-value").html(
        salonPrise.toLocaleString("ru") + "<span>грн</span>"
      );
    } else {
      $("#salon-services_price-value").html("");
    }

    if (+salonTime > 0) {
      $("#salonTime").parent().css("display", "flex");
      $("#salonTime").html(salonTime);
    } else {
      $("#salonTime").parent().css("display", "none");
    }

    selectNewOil($(".row-salon"), +salonPrise);
  }
  $(".salon__cheked-block").on("click", function () {
    var celector = $(this);

    ClickRowSalon(celector);
  });
  ///------End row-salon----

  //--отмена выбраног
  $("label[for='services_select-clear']").click(function () {
    if ($("#services_select-clear").is(":checked")) {
      var inpRadio = $('input[name="raz-maslo"]');
      var inpRadio2 = $('input[name="wash-oil"]');
      inpRadio.prop("checked", false);
      inpRadio2.prop("checked", false);
      $(inpRadio.siblings("label")).removeClass("label-txt-selected");
      $(inpRadio2.siblings("label")).removeClass("label-txt-selected");
      $(".row-raz-maslo-tr").addClass("disable-item");
      $(".row-wash-oil-tr").addClass("disable-item");
      washOilPrise = 0;
      washOilTime = 0;
      razMasloPrise = 0;
      razMasloTime = 0;
      SumPrice();
      $("#wash-services_price-value").html("&#8212" + "<span>ГРН</span>");
      $("#washOilTime").html(+washOilTime + +razMasloTime);
      $("#services_select-washDVS").prop("checked", false);
      $(".label_checkbox-clear .checked-icon").css("opacity", "1");
      $(".row-wash").removeClass("disable-item");
      if ($("#all-package").is(":checked")) {
        $("#all-package").prop("checked", false);
        $("#all-packege-icon").css("opacity", "0");
      } else {
        false;
      }
    } else {
      $(".label_checkbox-clear .checked-icon").css("opacity", "0");
      $("#wash-services_price-value").html("");
      $(".row-wash").addClass("disable-item");
    }
  });

  //вибор пакета премиум
  $("label[for='all-package']").on("click", function () {
    defoldPakage();
  });

  function defoldPakage() {
    var inputPakage = $("#all-package");

    if (inputPakage.is(":checked")) {
      $('input[name="package"]:checked').each(function () {
        chengePack($(this).prop("id"));
      });
      $("#all-package").prop("checked", true);
      $("#all-packege-icon").css("opacity", "1");
    } else {
      $("#all-package").prop("checked", false);
      $("#all-packege-icon").css("opacity", "0");
    }
  }
  //modal windows
  $(document).mouseup(function (e) {
    var btnPack = $(".selected-option");
    var popap = $(".selected-package-options");

    if (
      !popap.is(e.target) &&
      popap.has(e.target).length === 0 &&
      !btnPack.is(e.target) &&
      btnPack.has(e.target).length === 0 &&
      popap.hasClass("d-block")
    ) {
      popap.removeClass("d-block");
      popap.addClass("d-none");
    }
    if (
      !popap.is(e.target) &&
      popap.has(e.target).length === 0 &&
      btnPack.is(e.target) &&
      btnPack.has(e.target).length > 0 &&
      popap.hasClass("d-block")
    ) {
      popap.removeClass("d-block");
      popap.addClass("d-none");
    } else {
      return false;
    }
  });

  $("#options-modal_newOil-btn").on("click", function () {
    var modal = $("#options-modal_newOil");
    var row = $("#row-services-oil");
    popapServices(modal, row);
  });
  $("#options-modal_washDVS-btn").on("click", function () {
    var modal = $("#options-modal_washDVS");
    var row = $("#row-services-washDVS");
    popapServices(modal, row);
  });
  function popapServices(modal, row) {
    var widthWindow = $(window).width();
    if (modal.hasClass("popap-out")) {
      modal.removeClass("popap-out");
      modal.addClass("popap-in");
      row.find(".row-services_options-btn").removeClass("btn-linear");
      row.find(".row-services_options-btn").addClass("btn-linear-black");
      row.addClass("row-services-active");
      row.find(".img-svg-info path").css("fill", "#000000");
      row.find(".select-btn-txt").css("color", "#000000");
      row.find(".img-svg path").css("fill", "#000000");
      row.find(".triange-icon").css("transform", "rotate(180deg)");
      if (widthWindow <= 586) {
        row.css({ width: "100%", padding: "0 15px" });
      } else {
        row.css("width", "100%");
      }
    } else {
      modal.removeClass("popap-in");
      modal.addClass("popap-out");
      row.find(".row-services_options-btn").removeClass("btn-linear-black");
      row.find(".row-services_options-btn").addClass("btn-linear");

      row.removeClass("row-services-active");
      var widthWindow = $(window).width();
      if (widthWindow <= 586) {
        row.find(".select-btn-txt").css("color", "#bd2bf8");
        row.find(".img-svg path").css("fill", "#bd2bf8");
        row.css({ width: "90%", padding: "0" });
      } else {
        row.find(".select-btn-txt").css("color", "#ffffff");
        row.find(".img-svg path").css("fill", "#ffffff");
        row.css({ width: "100%", padding: "12px 0px 12px 0" });
      }
      row.find(".img-svg-info path").css("fill", "#16EAFD");
      row.find(".triange-icon").css("transform", "rotate(0deg)");
    }
  }

  $("#total-btn").on("click", function () {
    var modal = $(".total-modal");
    ModalServices(modal);
  });
  $("#total-modal_btn-close").on("click", function () {
    var modal = $(".total-modal");
    ModalServices(modal);
  });
  function ModalServices(modal) {
    if (modal.css("display") == "none") {
      modal.css("display", "block");
    } else {
      modal.css("display", "none");
    }
  }

  $(".selected-option").on("click", function () {
    selAddClass();
  });

  function selAddClass() {
    var popap = $(".selected-package-options");
    if (popap.hasClass("d-none")) {
      popap.removeClass("d-none");
      popap.addClass("d-block");
    } else if (popap.hasClass("d-block")) {
      popap.removeClass("d-block");
      popap.addClass("d-none");
    } else {
      return false;
    }
  }

  var show_bottom_form = $("#show_bottom_form-cal");

  show_bottom_form.on("click", function () {
    var sumaOil = +washOilPrise + +razMasloPrise;
    if (
      newOilPrise > 0 &&
      ((+washOilPrise > 0 && 3 + razMasloPrise > 0) ||
        $("#services_select-clear").is(":checked"))
    ) {
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

      $(".contacts__content__close").click(function () {
        document.body.style.overflowY = "scroll";
        $(".contacts__content").animate(
          {
            top: "100vh",
          },
          900
        );
      });
    } else {
      $(function () {
        if (sumaOil == 0 || $("#services_select-clear").is(":checked")) {
          $("#row-services-washDVS")
            .find(".img-svg-info path")
            .css("fill", "red");
        }
        if (+washOilPrise == 0 || +razMasloPrise == 0) {
          $("#row-services-washDVS")
            .find(".img-svg-info path")
            .css("fill", "red");
        } else {
          $("#row-services-washDVS")
            .find(".img-svg-info path")
            .css("fill", "#16EAFD");
        }
      });
      $(function () {
        if (+newOilPrise == 0) {
          $("#row-services-oil").find(".img-svg-info path").css("fill", "red");
        } else {
          $("#row-services-oil")
            .find(".img-svg-info path")
            .css("fill", "#16EAFD");
        }
      });

      $("html, body").animate({ scrollTop: 50 }, 1000);
      return false;
    }
  });
});
