$(document).ready(function(){
  $('.hello').addClass('animated fadeOutDown fast delay-4s');
  $('.scene').addClass('ready-scene animated fadeOutDown fast delay-4s');
  $('header').addClass('ready-header animated fadeIn fast delay-4s');
  $('.intro').addClass('ready-intro animated fadeInUp fast delay-4s');
  $('.arrow').addClass('ready-header animated fadeInDown fast delay-4s');
  $('.why-right').addClass('why-ready');

  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: true,
    fade: true,
  });

});

$("a[href^='#contact']").click(function(e) {
  e.preventDefault();

  var position = $($(this).attr("href")).offset().top;

  $("body, html").animate({
    scrollTop: position
  } /* speed */ );
});

var wow = new WOW({
    mobile: false, // trigger animations on mobile devices (default is true)
});
wow.init();

$(".js-rotating").Morphext({
    // The [in] animation type. Refer to Animate.css for a list of available animations.
    animation: "fadeIn",
    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
    separator: ",",
    // The delay between the changing of each phrase in milliseconds.
    speed: 2000,
    complete: function () {
        // Called after the entrance animation is executed.
    }
});

$(".js-rotating-2").Morphext({
    // The [in] animation type. Refer to Animate.css for a list of available animations.
    animation: "fadeIn",
    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
    separator: ",",
    // The delay between the changing of each phrase in milliseconds.
    speed: 3000,
    complete: function () {
        // Called after the entrance animation is executed.
    }
});

new Vidage('.vidage');
