(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        if(target.attr('id')!= 'about'){document.getElementById('prof-name-block').style.display="block"}else{document.getElementById('prof-name-block').style.display = "none"};
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });



  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });


  // removeSection = function(e){
  //   $(e).parents("#sideNav > div").remove();
  //   $('#sideNav').each(function(){
  //     $(this).scrollspy('refresh');
  //   });
  // };

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });
  $(window).on('activate.bs.scrollspy', function (e,obj) {
      if(obj.relatedTarget != "#about"){
        $(#'prof-name-block').style.display="block"
      }
      else{
      $('#prof-name-block').style.display = "none"};
  })

})(jQuery); // End of use strict
