(function($){
	"use strict";
	
		/**
		 *  mobile menu
		 */
		
			$('.js-mbl-button').click(function(){
				if ($('.js-mbl-menu').is(':visible')){
					$('.js-mbl-menu').fadeOut();
				} else{
				$('.js-mbl-menu').fadeIn();
				}
			});
			$('.js-mbl-menu a').click(function(){
				$('.js-mbl-menu').fadeOut();
			});
		
		
		/**
		 *  nice scroll
		 */
		$("html").niceScroll();
		
		/**
		 * fixed background
		 */
		$('.cbp-so-scroller').each(function(){
			new cbpScroller( this );
		});
		
		
		/**
		 *  animated list
		 */
		$('.js-animated-list').each(function(){
			var cont = $(this);
			var items = cont.children('.animated-list-item');
			items.each(function(){
				var item = $(this);
				item.children('.animated-list-title').click(function(){
					var itemHasClass= item.hasClass('selected');
					items.removeClass('selected');
					items.find('.animated-list-body').stop(true,true).hide();
					if (!itemHasClass){
						item.find('.animated-list-body').slideDown();
						item.addClass('selected');
					}
				});
			});
		});
		
		/**
		 *  mobile slider
		 */
		$(window).resize(function(){
			if ($(this).width() > 720){
			 $('.services_cont_slider').css('margin-left',0);
			 window.paralaxSliderDisable = true;
			}else{
			 window.paralaxSliderDisable = false;
			}
		   });
		$(function(){
			$(window).resize();
			$('.services_cont_slider').parallaxSlider({
				speed_cont: 800,
				SEL_paging: '#service_paging'
			});
		});
		
		/**
		 *  counters
		 */
		$(window).scroll( function(){
			$('.getaloan-cont').each( function(i){

				var bottom_of_object = $(this).offset().top;
				var bottom_of_window = $(window).scrollTop() + $(window).height();
				if( bottom_of_window > bottom_of_object ){

					$('#counter-1').countTo({
						from: 0,
						to: $('#counter-1').data('countto'),
						speed: 1500,
						refreshInterval: 30,
						onComplete: function(value) {
						}
					});
					$('#counter-2').countTo({
						from: 0,
						to: $('#counter-2').data('countto'),
						speed: 1500,
						refreshInterval: 30,
						onComplete: function(value) {
						}
					});
					$('#counter-3').countTo({
						from: 0,
						to: $('#counter-3').data('countto'),
						speed: 1500,
						refreshInterval: 30,
						onComplete: function(value) {
						}
					});
					$('#counter-4').countTo({
						from: 0,
						to: $('#counter-4').data('countto'),
						speed: 1500,
						refreshInterval: 30,
						onComplete: function(value) {
						}
					});

					$(this).find('[id*="counter-"]').attr('id', '');
				}
			}); 
		});
	
})(jQuery);
$( "#intro input" ).focus(function() {
document.onkeyup = function (e) {
    e = e || window.event;

document.getElementById('bottom-location').value=document.getElementById('top-location').value;
document.getElementById('bottom-amount').value=document.getElementById('top-amount').value;
};
});
$( "#intro input" ).focusout(function() {
document.onkeyup = function (e) {
    e = e || window.event;

document.getElementById('bottom-location').value=document.getElementById('bottom-location').value;
document.getElementById('bottom-amount').value=document.getElementById('bottom-amount').value;
};
});



