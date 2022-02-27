window.addEventListener('load', function(event){
    AOS.init();
});

(function( $ ) {
    "use strict";
    $(function() {
        function animated_contents() {
            $(".zt-skill-bar > div ").each(function (i) {
                var $this  = $(this),
                skills = $this.data('width');
                
                $this.css({'width' : skills + '%'});
                
            });
        }
        
            if(jQuery().appear) {
                $('.zt-skill-bar').appear().on('appear', function() {
                    animated_contents();
                });
            } else {
                animated_contents();
            }
    });
  }(jQuery));





  $(function(){
      $(window).scroll(function(){
          if($(this).scrollTop() >= 300){
              $('.scrollToTop').fadeIn();
          }else{
              $('.scrollToTop').fadeOut();
          }
      });

      $('.scrollToTop').click(function(e){
          e.preventDefault();
          $('html, body').stop().animate({scrollTop:0},500);
      });
  });


//   function doSomething(){
//       alert("시발!");
//   }

//   $(function (){
//     $(window).scroll(function(){
//         doSomething();
//     });
//   });