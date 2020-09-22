jQuery(function() {

  "use strict";

/* —-------------------------------------------------------------------------
* Abrir Menu (Hamburguesa)
* —-----------------------------------------------------------------------— */
jQuery(document).ready(function() {
jQuery('nav').on( 'click', 'li', function(){
  jQuery('.navbar-collapse').removeClass('open');
  jQuery('.navbar-toggler').removeClass('opened');
});
var toggle = document.querySelector('.nav-toggle');
var overlay = document.querySelector('#overlay');
  
  toggle.addEventListener('click', function(e) {
    this.classList.toggle('opened');
    this.classList.toggle('active');
    overlay.classList.toggle('open');
  });
});

/* —-------------------------------------------------------------------------
*  Sticky menu (Menu pegajoso)
* —-----------------------------------------------------------------------— */
var $header = jQuery('nav'),
    $headerHeight = 90;

var navScroll = {
    
  init:function(){
    jQuery(window).on('scroll',function(){
      navScroll.navDrop();
    })
  },
  
  navDrop:function(){
    var $scrollTop = jQuery(window).scrollTop();
    
    if($scrollTop > $headerHeight){
      $header.addClass('scrolled'); 
    }
    else if($scrollTop == 0) {
      $header.removeClass('scrolled');
    }
    
  }
}
navScroll.init();

var sections = jQuery('section')
  , nav = jQuery('nav')
  , nav_height = nav.outerHeight();

jQuery(window).on('scroll', function () {
  var cur_pos = jQuery(this).scrollTop();
  
  sections.each(function() {
    var top = jQuery(this).offset().top - nav_height,
        bottom = top + jQuery(this).outerHeight();
    
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
      
      jQuery(this).addClass('active');
      nav.find('a[href="#'+jQuery(this).attr('id')+'"]').addClass('active');
    }
  });
});

jQuery('a[href^="#"]').on("click", function (event) {
    event.preventDefault();
    var id  = jQuery(this).attr('href'),
        top = jQuery(id).offset().top - 0;
    jQuery('body,html').animate({scrollTop: top}, 1500);

});

});( jQuery )