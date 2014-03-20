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


;(function(window, jQuery, undefined) {
	'use strict';


	/*
	 * Utility functions
	 */
	var setPercentBtns = function() {
		var numOfButtons = jQuery('.rrssb-buttons li').length;
		var initBtnWidth = 100 / numOfButtons;

		// set initial width of buttons
		jQuery('.rrssb-buttons li').css('width', initBtnWidth + '%').attr('data-initwidth',initBtnWidth);
	};

	var makeExtremityBtns = function() {
		//get button width
		var containerWidth = parseFloat(jQuery('.rrssb-buttons').width());
		var buttonWidth = jQuery('.rrssb-buttons li').not('.small').first().width();
		var smallBtnCount = jQuery('.rrssb-buttons li.small').length;

		// enlarge buttons if they get wide enough
		if (buttonWidth > 170 && smallBtnCount < 1) {
			jQuery('.rrssb-buttons').addClass('large-format');
		} else {
			jQuery('.rrssb-buttons').removeClass('large-format');
		}

		if (containerWidth < 200) {
			jQuery('.rrssb-buttons').removeClass('small-format').addClass('tiny-format');
		} else {
			jQuery('.rrssb-buttons').removeClass('tiny-format');
		}
	};

	var backUpFromSmall = function() {
		var totalBtnSze = 0, totalTxtSze = 0, upCandidate, nextBackUp;
		var smallBtnCount = jQuery('.rrssb-buttons li.small').length;

		if (smallBtnCount === jQuery('.rrssb-buttons li').length) {
			var btnCalc = smallBtnCount * 42;
			var containerWidth = parseFloat(jQuery('.rrssb-buttons').width());
			upCandidate = jQuery('.rrssb-buttons li.small').first();
			nextBackUp = parseFloat(jQuery(upCandidate).attr('data-size')) + 55;

			if ((btnCalc + nextBackUp) < containerWidth) {
				jQuery('.rrssb-buttons').removeClass('small-format');
				jQuery('.rrssb-buttons li.small').first().removeClass('small');

				sizeSmallBtns();
			}

		} else {
			jQuery('.rrssb-buttons li').not('.small').each(function(index) {
				var txtWidth = parseFloat(jQuery(this).attr('data-size')) + 55;
				var btnWidth = parseFloat(jQuery(this).width());

				totalBtnSze = totalBtnSze + btnWidth;
				totalTxtSze = totalTxtSze + txtWidth;
			});

			var spaceLeft = totalBtnSze - totalTxtSze;
			upCandidate = jQuery('.rrssb-buttons li.small').first();
			nextBackUp = parseFloat(jQuery(upCandidate).attr('data-size')) + 55;

			if (nextBackUp < spaceLeft) {
				jQuery(upCandidate).removeClass('small');
				sizeSmallBtns();
			}
		}
	};

	var checkSize = function(init) {
		var elems = jQuery('.rrssb-buttons li').nextAll(), count = elems.length;

		jQuery(jQuery('.rrssb-buttons li').get().reverse()).each(function(index) {

			if (jQuery(this).hasClass('small') === false) {
				var txtWidth = parseFloat(jQuery(this).attr('data-size')) + 55;
				var btnWidth = parseFloat(jQuery(this).width());

				if (txtWidth > btnWidth) {
					var btn2small = jQuery('.rrssb-buttons li').not('.small').last();
					jQuery(btn2small).addClass('small');
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
		var smallBtnCount = jQuery('.rrssb-buttons li.small').length;
		jQuery('.smallbtnsdude span').html(smallBtnCount);

		// make sure there are small buttons
		if (smallBtnCount > 0 && smallBtnCount !== jQuery('.rrssb-buttons li').length) {
			jQuery('.rrssb-buttons').removeClass('small-format');

			//make sure small buttons are square when not all small
			jQuery('.rrssb-buttons li.small').css('width','42px');
			pixelsOff = smallBtnCount * 42;
			regButtonCount = jQuery('.rrssb-buttons li').not('.small').length;
			regPercent = 100 / regButtonCount;
			smallBtnFraction = pixelsOff / regButtonCount;

			if (navigator.userAgent.indexOf('Chrome') >= 0 || navigator.userAgent.indexOf('Safari') >= 0) {
				magicWidth = '-webkit-calc('+regPercent+'% - '+smallBtnFraction+'px)';
			} else if (navigator.userAgent.indexOf('Firefox') >= 0) {
				magicWidth = '-moz-calc('+regPercent+'% - '+smallBtnFraction+'px)';
			} else {
				magicWidth = 'calc('+regPercent+'% - '+smallBtnFraction+'px)';
			}
			jQuery('.rrssb-buttons li').not('.small').css('width', magicWidth);

		} else if (smallBtnCount === jQuery('.rrssb-buttons li').length) {
			// if all buttons are small, change back to percentage
			jQuery('.rrssb-buttons').addClass('small-format');
			setPercentBtns();
		} else {
			jQuery('.rrssb-buttons').removeClass('small-format');
			setPercentBtns();
		}
		makeExtremityBtns();
	};

	var rrssbInit = function() {
		jQuery('.rrssb-buttons').each(function(index) {
			jQuery(this).addClass('rrssb-'+(index + 1));
		});

		setPercentBtns();

		// grab initial text width of each button and add as data attr
		jQuery('.rrssb-buttons li .text').each(function(index) {
			var txtWdth = parseFloat(jQuery(this).width());
			jQuery(this).closest('li').attr('data-size', txtWdth);
		});

		checkSize(true);
	};

	var rrssbMagicLayout = function(callback) {
		var containerWidth = jQuery('.rrssb-buttons').width();

		jQuery('.rrssb-buttons li.small').removeClass('small');

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

	jQuery('.rrssb-buttons a.popup').on('click', function(e){
		var _this = jQuery(this);
		popupCenter(_this.attr('href'), _this.find('.text').html(), 580, 470);
		e.preventDefault();
	});

	// resize function
	jQuery(window).resize(function () {

		rrssbMagicLayout(sizeSmallBtns);

		waitForFinalEvent(function(){
			rrssbMagicLayout(sizeSmallBtns);
		}, 200, "finished resizing");
	});

	// init load
	jQuery(document).ready(function(){
		rrssbInit();
	});


})(window, jQuery);
