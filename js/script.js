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
    if (scroll_pos > 20) {
      $("#navbar-main").addClass("nav-shadow");
    } else {
      $("#navbar-main").removeClass("nav-shadow");
    }

    var scrolltop = $("#phone_1").offset();
    var scrolltop2 = $("#phone_2").offset();
    if (scroll_pos > scrolltop.top - 800) {
      $("#phone1-image-div").addClass("phone1-image-animation");
      $("#phone1-image-div-sm").addClass("phone1-image-animation");
      $("#phone1-text-div").addClass("phone1-text-div-animation");
    }

    if (scroll_pos > scrolltop.top) {
      $("#div2-images").addClass("div2-images-animation");
      $("#div2-images-sm").addClass("div2-images-animation");
      $("#div2-text").addClass("div2-text-animation");
    }

    if (scroll_pos > scrolltop2.top - 500) {
      $("#phone2-image-div").addClass("phone1-image-animation");
      $("#phone2-image-div-sm").addClass("phone1-image-animation");
      $("#phone2-text-div").addClass("phone1-text-div-animation");
    }

    if (scroll_pos > scrolltop2.top - 100) {
      $("#div3-images").addClass("div2-images-animation");
      $("#div3-images-sm").addClass("div2-images-animation");
      $("#div3-text").addClass("div2-text-animation");
    }
  });
});
