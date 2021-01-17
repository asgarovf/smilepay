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
    if (topOfWindow + windowHeight - 50 > scrolltop.top) {
      $("#phone1-image-div").addClass("phone1-image-animation");
      $("#phone1-image-div-sm").addClass("phone1-image-animation");
      $("#phone1-text-div").addClass("phone1-text-div-animation");
    }

    if (topOfWindow + windowHeight - 750 > scrolltop.top) {
      $("#div2-images").addClass("div2-images-animation");
      $("#div2-images-sm").addClass("div2-images-animation");
      $("#div2-text").addClass("div2-text-animation");
    }

    if (topOfWindow + windowHeight - 50 > scrolltop2.top) {
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

setTimeout(function () {
  $(document).scrollTop(0);
  $(".loader-bg").fadeToggle();
  $("body").css("overflow-y", "visible");
}, 3500);

$("#q1-box").click(() => {
  if ($("#q1-box").hasClass("closed")) {
    $("#q1-box").removeClass("closed");
    $("#q1").slideDown();
    $("#q1-image-close").addClass("q-close");
    $("#q1-image-open").removeClass("q-close");
  } else {
    $("#q1-box").addClass("closed");
    $("#q1").slideUp();
    $("#q1-image-close").removeClass("q-close");
    $("#q1-image-open").addClass("q-close");
  }
});

$("#q2-box").click(() => {
  if ($("#q2-box").hasClass("closed")) {
    $("#q2-box").removeClass("closed");
    $("#q2").slideDown();
    $("#q2-image-close").addClass("q-close");
    $("#q2-image-open").removeClass("q-close");
  } else {
    $("#q2-box").addClass("closed");
    $("#q2").slideUp();
    $("#q2-image-close").removeClass("q-close");
    $("#q2-image-open").addClass("q-close");
  }
});

$("#q3-box").click(() => {
  if ($("#q3-box").hasClass("closed")) {
    $("#q3-box").removeClass("closed");
    $("#q3").slideDown();
    $("#q3-image-close").addClass("q-close");
    $("#q3-image-open").removeClass("q-close");
  } else {
    $("#q3-box").addClass("closed");
    $("#q3").slideUp();
    $("#q3-image-close").removeClass("q-close");
    $("#q3-image-open").addClass("q-close");
  }
});

$("#q4-box").click(() => {
  if ($("#q4-box").hasClass("closed")) {
    $("#q4-box").removeClass("closed");
    $("#q4").slideDown();
    $("#q4-image-close").addClass("q-close");
    $("#q4-image-open").removeClass("q-close");
  } else {
    $("#q4-box").addClass("closed");
    $("#q4").slideUp();
    $("#q4-image-close").removeClass("q-close");
    $("#q4-image-open").addClass("q-close");
  }
});

$("#q5-box").click(() => {
  if ($("#q5-box").hasClass("closed")) {
    $("#q5-box").removeClass("closed");
    $("#q5").slideDown();
    $("#q5-image-close").addClass("q-close");
    $("#q5-image-open").removeClass("q-close");
  } else {
    $("#q5-box").addClass("closed");
    $("#q5").slideUp();
    $("#q5-image-close").removeClass("q-close");
    $("#q5-image-open").addClass("q-close");
  }
});

$("#q6-box").click(() => {
  if ($("#q6-box").hasClass("closed")) {
    $("#q6-box").removeClass("closed");
    $("#q6").slideDown();
    $("#q6-image-close").addClass("q-close");
    $("#q6-image-open").removeClass("q-close");
  } else {
    $("#q6-box").addClass("closed");
    $("#q6").slideUp();
    $("#q6-image-close").removeClass("q-close");
    $("#q6-image-open").addClass("q-close");
  }
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    992: {
      items: 4,
    },
  },
  dots: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
});
