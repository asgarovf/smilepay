$("#navbarToggle").click(() => {
  if ($(".wrapper").hasClass("wrapper-visible")) {
    $(".wrapper").addClass("wrapper-hidden").removeClass("wrapper-visible");
    $("#bars").removeClass("fa-times").addClass("fa-bars");
    $("body").css("overflow", "visible");
  } else {
    $(".wrapper").addClass("wrapper-visible").removeClass("wrapper-hidden");
    $("#bars")
      .removeClass("fa-bars")
      .addClass("fa-times")
      .addClass("text-white");
  }
});

$("#lang-en").click(() => {
  if ($("#lang-menu").hasClass("nodisplay")) {
    $("#lang-menu").removeClass("nodisplay");
  } else {
    $("#lang-menu").addClass("nodisplay");
  }
});

$(document).ready(function () {
  $(this).scrollTop(0);

  $(document).scroll(function () {
    scroll_pos = $(this).scrollTop();
    var windowHeight = jQuery(window).height();
    var topOfWindow = $(window).scrollTop();

    if (scroll_pos > 20) {
      $("#navbar-main").addClass("nav-shadow");
    } else {
      $("#navbar-main").removeClass("nav-shadow");
    }

    var scrolltop = $("#phone_1").offset();
    var scrolltop2 = $("#phone_2").offset();
    if (topOfWindow + windowHeight - 200 > scrolltop.top) {
      $("#phone1-image-div").addClass("phone1-image-animation");
      $("#phone1-image-div-sm").addClass("phone1-image-animation");
      $("#phone1-text-div").addClass("phone1-text-div-animation");
    }

    if (topOfWindow + windowHeight - 750 > scrolltop.top) {
      $("#div2-images").addClass("div2-images-animation");
      $("#div2-images-sm").addClass("div2-images-animation");
      $("#div2-text").addClass("div2-text-animation");
    }

    if (topOfWindow + windowHeight - 200 > scrolltop2.top) {
      $("#phone2-image-div").addClass("phone1-image-animation");
      $("#phone2-image-div-sm").addClass("phone1-image-animation");
      $("#phone2-text-div").addClass("phone1-text-div-animation");
    }

    if (topOfWindow + windowHeight - 750 > scrolltop2.top) {
      $("#div3-images").addClass("div2-images-animation");
      $("#div3-images-sm").addClass("div2-images-animation");
      $("#div3-text").addClass("div2-text-animation");
    }
  });
});

window.onload = function () {
  setTimeout(function () {
    $(document).scrollTop(0);
    $(".loader-bg").fadeToggle();
    $("body").css("overflow-y", "visible");
  }, 1000);
};
