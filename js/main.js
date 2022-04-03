$(function () {
	$(".slider__blog").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: false,
		arrows: true,
		dots: false,
		responsive: [
      {
				breakpoint: 1350,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: false,
				},
			},
			{
				breakpoint: 950,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 540,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		]
  });

  $(".menu__btn").on("click", function () {
    $(".menu__list-left").toggleClass("menu__list-left--active");
    $(".menu__list-right").toggleClass("menu__list-right--active");
  });

  var mixer = mixitup(".portfolio__content");
});



