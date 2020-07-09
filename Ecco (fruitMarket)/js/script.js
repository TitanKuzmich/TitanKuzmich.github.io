jQuery(function ($) {
  "use strict";

  	//responsive menu
  	if($('.fa-bars').length){
  		$('.fa-bars').on('click', function(){
  			$('.header_top .inner_header nav ul').show();
  			$(this).hide();
  			$('.fa-times').show();

  		});

  		$('.fa-times').on('click', function(){
  			$('.header_top .inner_header nav ul').hide();
  			$(this).hide();
  			$('.fa-bars').show();
  		});
  	}

	//header slider
	if($('.home_slider').length){
		$('.home_slider').slick({
		    vertical:true,
		    arrows: false,
		    dots: true
	 	});
	}

	//twitter slider
	if($('.content_slider_tweeter').length){
		$('.content_slider_tweeter').slick({
		    vertical:true,
		    appendArrows: $('.tweet_slider .arrows'),
		  	prevArrow: "<span class=\"top\"><i class=\"fas fa-arrow-up\"></i></span>",
		  	nextArrow: "<span class=\"down\"><i class=\"fas fa-arrow-down\"></i></span>"
	 	});
	}


	//carousel shop slider
	if($('.shop_carousel').length){
	  	$('.shop_carousel').slick({
		  infinite: true,
		  slidesToShow: 4,
		  slidesToScroll: 1,
		  appendArrows: $('.shop_slider_navigation'),
		  prevArrow: "<div class=\"left\"><i class=\"fas fa-arrow-left\"></i></div>",
		  nextArrow: "<div class=\"right\"><i class=\"fas fa-arrow-right\"></i></div>"
		});
	}

	//testimonial slider
	if($('.testimonial_carousel').length){
	  	$('.testimonial_carousel').slick({
		  infinite: true,
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  appendArrows: $('.testimonial_slider_box'),
		  prevArrow: "<div class=\"left_arrow\"><div class=\"left\"><i class=\"fas fa-arrow-left\"></i></div></div>",
		  nextArrow: "<div class=\"right_arrow\"><div class=\"right\"><i class=\"fas fa-arrow-right\"></i></div></div>"
		});

		$('.testimonial_carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
			var tabs_container = $('.testimonials_tab_container');

		  	tabs_container.find($('.tab-item')).hide();
		  	tabs_container.find($('.tab-' + nextSlide)).show();
		});
	}
	

	if($('.open_video').length){
		$('.open_video').magnificPopup({
	   		disableOn: 700,
	        type: 'iframe',
	        mainClass: 'mfp-fade',
	        removalDelay: 160,
	        preloader: false,
		});
	}

	if($('.testy_gallery').length){
		$('.testy_gallery').magnificPopup({
          type: 'image',
          closeOnContentClick: true,
          mainClass: 'mfp-img-mobile',
          image: {
            verticalFit: true
        	}
    	});
	}
});

