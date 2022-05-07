$('.section__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    verticalSwiping: true,
    // rtl: true,
    dtu: true,
    vertical: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    // responsive: [
    //   {
    //     breakpoint: 1280,
    //     settings: {
    //       arrows: false,
    //       dots: true,
    //       slidesToShow: 2
    //     }
    //   },  
    //   {
    //     breakpoint: 920,
    //     settings: {
    //       slidesToShow: 1,
    //       dots: true,
    //       arrows: false,
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //     }
    //   }
    // ]
  });

//   $('.one-time').slick({
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     adaptiveHeight: true
//   });













// let left = 0,
//     moving = document.getElementById('moving'),
//     timerId = 0;

// timerId = setInterval( function() { //This function is called by the browser every 33 milliseconds
//     if( top++ > 200 ) {
//         clearInterval( timerId ); //Stop the interval because left is > 200
//     }
//     moving.style.left = left + "px";
// }, 90 );
