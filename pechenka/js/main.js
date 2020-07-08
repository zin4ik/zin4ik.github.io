$(document).ready(function () {
  var messege = sessionStorage.getItem("mykey2");
  var userTitel = sessionStorage.getItem("mykey1");
  var sitePage = "https://sitetestig2.imfast.io/";
  var encodeUserTitel = "";
  var encodeMessege = "";
  var descrTo = "";
  var descrAfter = "";
  var inpName="";
  var inpMess="";

  if (!userTitel == "") {
    encodeUserTitel = encodeURIComponent(replaceAllStr(userTitel));
  }
  if (!messege == "") {
    encodeMessege = encodeURIComponent(replaceAllStr(messege));
  }
  var linkSite = sitePage + "?n=" + encodeUserTitel + "@" + encodeMessege;
  function replaceAllStr(str) {
    var arh = "";
    for (var i = 0; i < str.length; i++) {
      if (str[i] == " ") {
        arh = arh + "_";
        continue;
      }
      if (str[i] == "&" || str[i] == "<" || str[i] == "{") {
        arh = arh + "_";
        continue;
      } else {
        arh = arh + str[i];
      }
    }

    return arh;
  }

  if ($("#you-messege")) {
    $("#you-messege").text(messege);
    $("#you-name").text(userTitel);
  }
  if ($("#phone")) {
    console.log($("#phone").val())
    $("#phone").mask("+7(999) 999-99-99");
  }



  /////////////

  function playAudio() {
    var myAudio = new Audio();
    myAudio.src = "./audio/crackers-crumble_gj-unped.mp3";
    volume = 1;
    myAudio.play();
  }
  var topBastket = "120px";
  var widthBastket = "120px";
  $(window).resize(function () {
    var widthWindow = $(window).width();
    if (widthWindow > 1440) {
      topBastket = "150px";
      widthBastket = "250px";
    }
    if (widthWindow <= 1440 && widthWindow > 576) {
      topBastket = "150px";
      widthBastket = "200px";
    }
    if (widthWindow <= 576) {
      topBastket = "120px";
      widthBastket = "120px";
    }
  });
  $(window).resize();
  $(".bastket-block-img").addClass("bastket-block-img-anime");

  setTimeout(() => {
    $(".bastket-block").addClass("bastket-block-anime");
    $(".pechenka-block-whole").animate(
      {
        opacity: "1",
        width: widthBastket,
        top: topBastket,
      },
      100,
      function () {
        $(".pechenka-block-hint").fadeIn(300);
        $(".pechenka-block-whole").addClass("pechenka-block-whole-anime");
      }
    );
  }, 5000);

  $(".pechenka-block-whole").click(function () {
    playAudio();
    setTimeout(() => {
      $(".pechenka-block-whole").hide();
      $(".pechenka-block-hint").hide();
      $(".bastket-block").hide();
      $(".header-txt").hide();
      $(".pechenka-block-massage").fadeIn(1500);
      $(".btn-share").fadeIn(1000);
      $(".bg-animation-heart_img").css("animation", "none");
    }, 1000);
  });

  ///////////////

  // $(window).on("load", function () {
  //   function playAudio() {
  //     var myAudio = new Audio();
  //     myAudio.src = "./audio/crackers-crumble_gj-unped.mp3";
  //     volume = 1;
  //     myAudio.play();
  //   }
  //   var topBastket = "120px";
  //   var widthBastket = "120px";
  //   $(window).resize(function () {
  //     var widthWindow = $(window).width();
  //     if (widthWindow > 1440) {
  //       topBastket = "150px";
  //       widthBastket = "250px";
  //     }
  //     if (widthWindow <= 1440 && widthWindow > 576) {
  //       topBastket = "150px";
  //       widthBastket = "200px";
  //     }
  //     if (widthWindow <= 576) {
  //       topBastket = "120px";
  //       widthBastket = "120px";
  //     }
  //   });
  //   $(window).resize();
  //   $(".bastket-block-img").addClass("bastket-block-img-anime");

  //   setTimeout(() => {
  //     $(".bastket-block").addClass("bastket-block-anime");
  //     $(".pechenka-block-whole").animate(
  //       {
  //         opacity: "1",
  //         width: widthBastket,
  //         top: topBastket,
  //       },
  //       100,
  //       function () {
  //         $(".pechenka-block-hint").fadeIn(300);
  //         $(".pechenka-block-whole").addClass("pechenka-block-whole-anime");
  //       }
  //     );
  //   }, 5000);

  //   $(".pechenka-block-whole").click(function () {
  //     playAudio();
  //     setTimeout(() => {
  //       $(".pechenka-block-whole").hide();
  //       $(".pechenka-block-hint").hide();
  //       $(".bastket-block").hide();
  //       $(".header-txt").hide();
  //       $(".pechenka-block-massage").fadeIn(1500);
  //       $(".btn-share").fadeIn(1000);
  //       $(".bg-animation-heart_img").css("animation", "none");
  //     }, 1000);
  //   });
  // });
  ///selected massege
  $(".select-inp").on("click", function () {
    var txt = $(this).val();
    inpMess=txt;
    btnLink();
    sessionStorage.setItem("mykey2", txt);
  });
  $("#userName").on("focusout", function () {
    var titel = $("#userName").val();
    inpName=titel;
    btnLink();
    sessionStorage.setItem("mykey1", titel);
  });
  $("#userMess").on("focusout", function () {
    var userMess = $("#userMess").val();
    inpMess=userMess;
    btnLink();
    if (!userMess == "") {
      sessionStorage.setItem("mykey2", userMess);
      $(".block-txt-list li").css("opacity", "0.5");
      $("#userMess").css("opacity", "1");
    }
  });
  $(".block-txt-list li").on("click", function () {
    $(".block-txt-list li").css("opacity", "0.5");
    $("#userMess").css("opacity", "0.5");
    $(this).css("opacity", "1");
  });

  function btnLink(){
    if(inpMess !="" && inpName!=""){
      $('#btn-share').removeClass('disabled')
    }
    
  }
  function linkSiteAdressAdd() {
    $(".link-adress-mess").each(function () {
      descrTo = $(this).attr("data-descrTo");
      descrAfter = $(this).attr("data-descrAfter");
      var strDesc = descrTo + " " + descrAfter;

      if ($(this).attr("href")) {
        var txt = $(this).attr("href");
        var txtNew = txt + strDesc + linkSite;
        $(this).attr("href", txtNew);
      }
    });

    console.log(linkSite.replace(" ", "_"));
  }
  linkSiteAdressAdd();
  //ограничения на ввод
  var maxLen = 35;
  $("#userMess").keyup(function () {
    var $this = $(this);
    if ($this.val().length > maxLen) $this.val($this.val().substr(0, maxLen));
  });

  //буфер
  $(".share-social-link").on("click", function () {
    var str = descrTo + " " + descrAfter + " " + linkSite;
    copytext(str);
  });
  function copytext(str) {
    var $tmp = $("<textarea>");
    $("body").append($tmp);
    $tmp.val(str).select();
    document.execCommand("copy");
    $tmp.remove();
  }

  var urlParams = new URLSearchParams(window.location.search);
  var nameParam = urlParams.get("n");
  var leter1 = "";
  var leter2 = "";
  if (!nameParam == "") {
    storage(nameParam);
    if (!leter1 == "") {
      var userName = document.getElementById("userName");

      if (userName) {
        userName.innerHTML = leter1;
      }
    }
    if (!leter2 == "") {
      var userTxt = document.getElementById("userTxt");
      if (userTxt) {
        userTxt.innerHTML = leter2.replace("_", " ");
      }
    }
  }
  function storage(string) {
    var bool = true;

    for (var i = 0; i < string.length; i++) {
      if (string[i] == "@") {
        bool = false;
        continue;
      }
      if (bool == true) {
        if (string[i] == "_") {
          leter1 = leter1 + " ";
          continue;
        } else {
          leter1 = leter1 + string[i];
        }
      }
      if (bool == false) {
        if (string[i] == "_") {
          leter2 = leter2 + " ";
          continue;
        } else {
          leter2 = leter2 + string[i];
        }
      } else {
        continue;
      }
    }
    console.log(leter1);
    console.log(leter2);
  }
});
