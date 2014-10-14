var delta = 0;
var currentSlideIndex = 0;
var scrollThreshold = 360;
var slides = $(".slideleft");
var numSlides = slides.length;
var sdegree = 0;


function elementScroll (e) {
 
   console.log (Math.abs(delta));

  // --- Scrolling up ---
  if (e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0) { 
      
     sdegree = sdegree - 1 ;
     var srotate = "rotate(" + sdegree + "deg)";
     $(".slideleft").css({"-moz-transform" : srotate, "-webkit-transform" : srotate});

    delta--;
 
    if ( Math.abs(delta) >= scrollThreshold) {
    prevSlide();
    }
  }
 
  // --- Scrolling down ---
  else {

     sdegree = sdegree + 1 ;
     var srotate = "rotate(" + sdegree + "deg)";
     $(".slideleft").css({"-moz-transform" : srotate, "-webkit-transform" : srotate});

    delta++;
 
    if (delta >= scrollThreshold) {
      sdegree ++ ;
      nextSlide();
    }
  }
 
  // Prevent page from scrolling
  return false;
}
 
function showSlide() {
 
  // reset
  delta = 0;

  slides.each(function(i, slide) {
    $('.copy').addClass('out');
    $(slide).toggleClass('in', (i >= currentSlideIndex));
  });
 
}
 
function prevSlide() {
 
  currentSlideIndex--;
 
  if (currentSlideIndex < 0) {
    currentSlideIndex = 0;
  }
 
  showSlide();
}
 
function nextSlide() {
 
  currentSlideIndex++;
 
  if (currentSlideIndex > numSlides) { 
    currentSlideIndex = numSlides;
  }
 
  showSlide();
}
 
$(window).on({
  'DOMMouseScroll mousewheel': elementScroll
});
