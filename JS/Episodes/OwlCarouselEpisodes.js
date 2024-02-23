export async function Episodes() {
    $(document).ready(function () {
      $('.owl-carousel').owlCarousel({
          autoplay: true, 
          dots: true, // Asegúrate de incluir dots: true en la configuración principal
          autoplayTimeout:3000,
          autoplayHoverPause:true,
          rewind: true,
          responsiveClass:true,
          margin: 10,
          responsive:{
              0:{
                  center: true,
                  items:1
              },
              769:{
                  center: false,
                  items:2
              },
              1025:{
                  dots: true, // Incluye dots: true en todas las configuraciones responsivas
                  center: false,
                  items:3
              }
          }
      })
    });
  }
