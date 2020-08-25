(function ($) {
  $(".item_slider").owlCarousel({
    items: 4,
    loop: true,
    pagination: false,
    responsiveClass: true,
    autoplay: false,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    autoplaySpeed: 5000,
    navigation: true,
    navigationText: [
      "<i class='fa fa-long-arrow-left'></i>",
      "<i class='fa fa-long-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      425: {
        items: 2,
      },
      768: {
        items: 3,
      },
    },
  });
  if ($(window).width < 425) {
  }
  $(".testimonial-carousel").owlCarousel({
    items: 1,
    loop: true,
    navigation: false,
    responsiveClass: true,
    autoPlay: true,
    slideSpeed: 2000,
    itemsDesktop: [1199, 1],
    itemsDesktopSmall: [979, 1],
    itemsTablet: [768, 1],
    itemsMobile: [480, 1],
  });
  $(".phone-carousel").owlCarousel({
    items: 1,
    loop: true,
    navigation: false,
    responsiveClass: true,
    autoplay: true,
    autoplayHoverPause: true,
  });
  $("#noviteti").addClass("active");

  $('li[role="presentation"]').click(function (e) {
    $(this)
      .siblings()
      .each(function (i, el) {
        $(el).removeClass("active");
      });
    $(this).addClass("active");
  });

  var plusIcon = `<svg width="20px" height="20px" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
  <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
</svg>`;
  var minusIcon = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-dash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M3.5 8a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5z"/>
</svg>`;
  $(".mean-expand").html(plusIcon);

  $("#toggle-menu").click(function (e) {
    console.log("clicked");
    $(".mobile-menu").toggleClass("show");
  });
  $(".mean-expand").click(function (e) {
    $(this).toggleClass("clicked");
    if ($(this).hasClass("clicked")) {
      $(this).html(minusIcon);
    } else {
      console.log($(this).hasClass("clicked"));
      $(this).html(plusIcon);
    }
    $(this).parent().find("ul").toggleClass("d-none");
  });
})(jQuery);

function filterImages(images, filter) {
  switch (filter) {
    case "all":
      return images.each((i, el) => {
        console.log($(el));
        $(el).removeClass("d-none");
      });

    case "majice":
      images.filter(function (i, el) {
        const { title } = $(el).data();
        if (title === filter) {
          $(el).addClass("d-block animate__animated animate__fadeInUp");
          $(el).removeClass("d-none");
        } else {
          $(el).removeClass("d-block animate__fadeInUp");
          $(el).addClass("d-none animate__fadeOut");
        }
      });
      break;
    case "kosulje":
      images.each(function (i, el) {
        const { title } = $(el).data();
        if (title === filter) {
          $(el).addClass("d-block animate__animated animate__fadeInUp");
          $(el).removeClass("d-none");
        } else {
          $(el).removeClass("d-block");
          $(el).addClass("d-none");
        }
      });
    case "pantalone":
      images.each(function (i, el) {
        const { title } = $(el).data();
        if (title === filter) {
          $(el).addClass("d-block animate__animated animate__fadeInUp");
          e;
          $(el).removeClass("d-none");
        } else {
          $(el).removeClass("d-block");
          $(el).addClass("d-none");
        }
      });
    default:
      return images;
  }
}
$(".filter").click(function () {
  const { filter } = $(this).data();
  $(this).addClass("active");
  $(this).siblings().removeClass("active");
  console.log(filter);
  const images = $(".single-image");
  console.log(images);
  filterImages(images, filter);
});
