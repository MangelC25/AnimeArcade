export async function Episodes() {
  $(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      autoplay: true,
      dots: true, // Asegúrate de incluir dots: true en la configuración principal
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      rewind: true,
      responsiveClass: true,
      responsive: {
        0: {
          center: true,
          items: 1,
        },
        769: {
          center: false,
          items: 2,
        },
        1024: {
          center: false,
          items: 2,
        },
        1280: {
          center: false,
          margin: 1,
          items: 3,
        },
        1520: {
          center: false,
          items: 3,
        }
      },
    });
  });
}
