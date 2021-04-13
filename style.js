jQuery(document).ready(function($) {
    $('.slider').slick({
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      touchMove: false,
      draggable: false,
      accessibility: false,
      responsive: [{
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true
        }
      },

      {
         breakpoint: 980,
         settings: {
          slidesToShow: 1,
          slidesToScroll: 1
         }
      }]
  });
});
