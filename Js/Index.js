

$(window).on('scroll',function() 
{
  var scrollTop = $(window).scrollTop();
  if (scrollTop >= 100) {
    $('body').addClass(fixed-header)
  } else {
    $('body').removeClass('fixed-header')
  }
})

$(document).ready(function() {
  new Typed('$type-it', {
    strings: ['Designer','Developer','Freelancer'],
    typeSpeed: 100,
    loop:true
  })});

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
    }
})