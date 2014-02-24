/*
 Ridiculously Responsive Social Sharing Buttons
 Team: @dbox, @seagoat
 Site: http://www.kurtnoble.com/labs/rrssb
 Twitter: @therealkni

        ___           ___
       /__/|         /__/\        ___
      |  |:|         \  \:\      /  /\
      |  |:|          \  \:\    /  /:/
    __|  |:|      _____\__\:\  /__/::\
   /__/\_|:|____ /__/::::::::\ \__\/\:\__
   \  \:\/:::::/ \  \:\~~\~~\/    \  \:\/\
    \  \::/~~~~   \  \:\  ~~~      \__\::/
     \  \:\        \  \:\          /__/:/
      \  \:\        \  \:\         \__\/
       \__\/         \__\/
*/


;(function(window, $, undefined) {
	'use strict';
	
	
	/*
	 * Global variables
	 */
	var smallBtnCount;
	
	
	/*
	 * Utility functions
	 */
	var setPercentBtns = function() {
		var numOfButtons = $('.rrssb-buttons li').length;
		var initBtnWidth = 100 / numOfButtons;
		
		// set initial width of buttons
		$('.rrssb-buttons li').css('width', initBtnWidth + '%').attr('data-initwidth',initBtnWidth);
	};
	
	var makeExtremityBtns = function() {
		//get button width
		var containerWidth = parseFloat($('.rrssb-buttons').width());
		var buttonWidth = $('.rrssb-buttons li').not('.small').first().width();
		
		// enlarge buttons if they get wide enough
		if (buttonWidth > 170 && smallBtnCount < 1) {
			$('.rrssb-buttons').addClass('large-format');
		} else {
			$('.rrssb-buttons').removeClass('large-format');
		}
	
		if (containerWidth < 200) {
			$('.rrssb-buttons').removeClass('small-format').addClass('tiny-format');
		} else {
			$('.rrssb-buttons').removeClass('tiny-format');
		}
	};
	
	var checkSize = function() {
		$('.rrssb-buttons li:not(.small)').each(function(index) {
			// record width of container
			var containerWidth = $('.rrssb-buttons').width();
			var txtWidth = parseFloat($(this).attr('data-size')) + 55;
			var btnWidth = parseFloat($(this).width());
	
			if (txtWidth > btnWidth) {
				$('.rrssb-buttons li').not('.small').last().addClass('small').css('width', '42px').attr('data-break', containerWidth);
				$('.rrssb-buttons ').attr('data-break', containerWidth);
				return false;
			}
		});
	};
	
	var sizeSmallBtns = function() {
		var regButtonCount,
				regPercent,
				pixelsOff,
				magicWidth,
				smallBtnFraction;
	
		// readjust buttons for small display
		smallBtnCount = $('.rrssb-buttons li.small').length;
		$('.smallbtnsdude span').html(smallBtnCount);
		
		// make sure there are small buttons
		if (smallBtnCount > 0 && smallBtnCount !== $('.rrssb-buttons li').length) {
			$('.rrssb-buttons').removeClass('small-format');
			
			//make sure small buttons are square when not all small
			$('.rrssb-buttons li.small').css('width','42px');
			pixelsOff = smallBtnCount * 42;
			regButtonCount = $('.rrssb-buttons li').not('.small').length;
			regPercent = 100 / regButtonCount;
			smallBtnFraction = pixelsOff / regButtonCount;
	
			if (navigator.userAgent.indexOf('Chrome') >= 0 || navigator.userAgent.indexOf('Safari') >= 0) {
				magicWidth = '-webkit-calc('+regPercent+'% - '+smallBtnFraction+'px)';
			} else if (navigator.userAgent.indexOf('Firefox') >= 0) {
				magicWidth = '-moz-calc('+regPercent+'% - '+smallBtnFraction+'px)';
			} else {
				magicWidth = 'calc('+regPercent+'% - '+smallBtnFraction+'px)';
			}
			$('.rrssb-buttons li').not('.small').css('width', magicWidth);
		} else if (smallBtnCount === $('.rrssb-buttons li').length) {
			
			// if all buttons are small, change back to percentage
			$('.rrssb-buttons').addClass('small-format');
			setPercentBtns();
		} else {
			$('.rrssb-buttons').removeClass('small-format');
			setPercentBtns();
		}
		makeExtremityBtns();
	};
	
	var rrssbInit = function() {
		setPercentBtns();
	
		// grab initial text width of each button and add as data attr
		$('.rrssb-buttons li .text').each(function(index) {
			var txtWdth = parseFloat($(this).width());
			$(this).closest('li').attr('data-size', txtWdth);
		});
		$('.rrssb-buttons li:not(.small)').each(function(index) {
			checkSize();
			rrssbMagicLayout(sizeSmallBtns);
		});
	};
	
	var rrssbMagicLayout = function(callback) {
		var totalTxt = 0;
		var containerWidth = $('.rrssb-buttons').width();
		smallBtnCount = $('.rrssb-buttons li.small').length;
		checkSize();
		
		if (smallBtnCount > 0) {
			if (containerWidth > parseFloat($('.rrssb-buttons').attr('data-break'))) {
				$('.rrssb-buttons li.small').first().removeClass('small').css('width', $('.rrssb-buttons li:last-child').attr('data-initwidth') + '%');
				var nextBreak = $('.rrssb-buttons li.small').attr('data-break');
				$('.rrssb-buttons').attr('data-break', nextBreak);
			}
		}
		callback();
	};
	
	// make sure resize only fires when done resizing
	var waitForFinalEvent = (function() {
		var timers = {};
		
		return function (callback, ms, uniqueId) {
			if (!uniqueId) {
				uniqueId = "Don't call this twice without a uniqueId";
			}
			if (timers[uniqueId]) {
				clearTimeout (timers[uniqueId]);
			}
			timers[uniqueId] = setTimeout(callback, ms);
		};
	})();
	
	
	/*
	 * Event listners
	 */
	$(window).resize(function () {
		rrssbMagicLayout(sizeSmallBtns);
	});
	
	// init load
	$(document).ready(function(){
		rrssbInit();
	});

})(window, $);