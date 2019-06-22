$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
      loop: true,
      items: 1,
      dots: true,
  });

  owl = $('.owl-carousel').owlCarousel();
  $(".prev").click(function () {
      owl.trigger('prev.owl.carousel');
  });
  
  $(".next").click(function () {
      owl.trigger('next.owl.carousel');
  });


    $('.menu-adaptive').click(function(){
        $('.menu').toggleClass('block')
        $('.header').toggleClass('height')
    })

    function scrollwindow() {
        $(window).resize(function () {
            let windowWidth = $(window).width();
            if (windowWidth > 781) {
                $('.menu').removeClass("block");
                $('.header').removeClass("height")
            }
        })
    }
    scrollwindow();

    new WOW().init();

});