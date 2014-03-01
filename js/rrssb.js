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

	var backUpFromSmall = function() {
		var totalBtnSze = 0, totalTxtSze = 0, upCandidate, nextBackUp;

		if (smallBtnCount === $('.rrssb-buttons li').length) {
			var btnCalc = smallBtnCount * 42;
			var containerWidth = parseFloat($('.rrssb-buttons').width());
			upCandidate = $('.rrssb-buttons li.small').first();
			nextBackUp = parseFloat($(upCandidate).attr('data-size')) + 55;

			if ((btnCalc + nextBackUp) < containerWidth) {
				$('.rrssb-buttons').removeClass('small-format');
				$('.rrssb-buttons li.small').first().removeClass('small');

				sizeSmallBtns();
			}

		} else {
			$('.rrssb-buttons li').not('.small').each(function(index) {
				var txtWidth = parseFloat($(this).attr('data-size')) + 55;
				var btnWidth = parseFloat($(this).width());

				totalBtnSze = totalBtnSze + btnWidth;
				totalTxtSze = totalTxtSze + txtWidth;
			});

			var spaceLeft = totalBtnSze - totalTxtSze;
			upCandidate = $('.rrssb-buttons li.small').first();
			nextBackUp = parseFloat($(upCandidate).attr('data-size')) + 55;

			if (nextBackUp < spaceLeft) {
				$(upCandidate).removeClass('small');
				sizeSmallBtns();
			}
		}
	};

	var checkSize = function(init) {
		var elems = $('.rrssb-buttons li').nextAll(), count = elems.length;

		$($('.rrssb-buttons li').get().reverse()).each(function(index) {

			if ($(this).hasClass('small') === false) {
				var txtWidth = parseFloat($(this).attr('data-size')) + 55;
				var btnWidth = parseFloat($(this).width());

				if (txtWidth > btnWidth) {
					var btn2small = $('.rrssb-buttons li').not('.small').last();
					$(btn2small).addClass('small');
				}
				sizeSmallBtns();
			}

			if (!--count) backUpFromSmall();
		});

		if (init === true) {
			rrssbMagicLayout(sizeSmallBtns);
		}
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

		checkSize(true);
	};

	var rrssbMagicLayout = function(callback) {
		var containerWidth = $('.rrssb-buttons').width();

		smallBtnCount = $('.rrssb-buttons li.small').length;

		$('.rrssb-buttons li.small').removeClass('small');

		checkSize();

		callback();
	};

	var popupCenter = function(url, title, w, h) {
		// Fixes dual-screen position                         Most browsers      Firefox
		var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
		var dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;

		var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
		var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

		var left = ((width / 2) - (w / 2)) + dualScreenLeft;
		var top = ((height / 3) - (h / 3)) + dualScreenTop;

		var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

		// Puts focus on the newWindow
		if (window.focus) {
			newWindow.focus();
		}
	};

	var waitForFinalEvent = (function () {
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

	$('.rrssb-buttons a.popup').on('click', function(e){
		var _this = $(this);
		popupCenter(_this.attr('href'), _this.find('.text').html(), 580, 470);
		e.preventDefault();
	});

	// resize function
	$(window).resize(function () {

		rrssbMagicLayout(sizeSmallBtns);

		waitForFinalEvent(function(){
			rrssbMagicLayout(sizeSmallBtns);
		}, 200, "finished resizing");
	});

	// init load
	$(document).ready(function(){
		rrssbInit();
	});


})(window, $);
