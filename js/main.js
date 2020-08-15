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
    itemsDesktop: [1199, 4],
    itemsDesktopSmall: [979, 3],
    itemsTablet: [767, 1],
    itemsMobile: [480, 1],
  });
  $(".testimonial-carousel").owlCarousel({
    items: 1,
    loop: true,
    navigation: false,
    responsiveClass: true,
    autoPlay: false,
    slideSpeed: 2000,
    itemsDesktop: [1199, 1],
    itemsDesktopSmall: [979, 1],
    itemsTablet: [768, 1],
    itemsMobile: [480, 1],
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
})(jQuery);
