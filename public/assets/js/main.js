(function ($) {
	"use strict";
	
	/*----------------------------
	Responsive menu Active
	------------------------------ */
	$(".mainmenu ul#primary-menu").slicknav({
		allowParentLinks: true,
		prependTo: '.responsive-menu'
	});
	
	/*----------------------------
    START - Menubar scroll animation
    ------------------------------ */
	jQuery(window).on('scroll', function() {
		if ($(this).scrollTop() > 480) {
			$('.menubar').addClass("sticky");
		} else {
			$('.menubar').removeClass("sticky");
		}
	});
	
	/*----------------------------
    START - Slider activation
    ------------------------------ */
	$('.hero-area').owlCarousel({
		items:1,
		loop:true,
		autoplay: true,
		autoplayTimeout:4000,
		dots: false,
		nav: true,
		navText: ["<i class='icofont icofont-curved-left'></i>", "<i class='icofont icofont-curved-right'></i>"],
	});
	$('.testimonial-slider').owlCarousel({
		dots:true,
		loop:true,
		autoplay: false,
		autoplayTimeout:4000,
		margin:0,
		items:1,
		nav: false,
	}); 
	$('.partner-slider').owlCarousel({
		dots:false,
		loop:true,
		autoplay: true,
		autoplayTimeout:4000,
		margin: 30,
		items:1,
		nav: false,
		responsive:{
			567:{
				items:2,
			},
			768:{
				items:3,
			},
			992:{
				items:4,
			}
		}
	});
	$('.service-slider').owlCarousel({
		dots:true,
		loop:true,
		autoplay: true,
		autoplayTimeout:4000,
		margin: 30,
		nav: false,
		responsive:{
			0:{
				items:1,
			},
			768:{
				items:2,
			},
			992:{
				items:3,
			}
		}
	});
	$('.testimonial-slide').owlCarousel({
		dots:true,
		loop:true,
		autoplay: true,
		autoplayTimeout:4000,
		items:1,
		nav: false,
		responsive:{
			992:{
				items:2,
                margin: 30,
			}
		}
	});
	
	/*----------------------------
    START - Counterup
    ------------------------------ */
	$('.counter').counterUp({
		delay: 20,
		time: 500
	});
    
	/*----------------------------
    START - Range
    ------------------------------ */
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 1100,
      values: [ 0, 20 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $"  + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	
	
	/*----------------------------
	START - videos popup
	------------------------------ */
	$('.popup-youtube').magnificPopup({type:'iframe'});
	//iframe scripts
	$.extend(true, $.magnificPopup.defaults, {  
		iframe: {
			patterns: {
				//youtube videos
				youtube: {
					index: 'youtube.com/', 
					id: 'v=', 
					src: 'https://www.youtube.com/embed/%id%?autoplay=1' 
				}
			}
		}
	});
	
	/*----------------------------
    START - Video
    ------------------------------ */
	if($.fn.YTPlayer){
		$(".player").YTPlayer();
	}
    
	/*----------------------------
    START - Scroll to Top
    ------------------------------ */
	$(window).on('scroll', function() {
		if ($(this).scrollTop() > 600) {
			$('.scrollToTop i').fadeIn();
		} else {
			$('.scrollToTop i').fadeOut();
		}
	});
	$('.scrollToTop i').on('click', function () {
		$('html, body').animate({scrollTop : 0},2000);
		return false;
	});
	
	/*----------------------------
    START - Preloader
    ------------------------------ */
	jQuery(window).on('load', function () {
		jQuery("#preloader").fadeOut(500);
	});

}(jQuery));