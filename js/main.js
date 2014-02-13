var buttonWidth;
var containerWidth;
var totalTxt = 0;



var setPercentBtns = function() {
	var numOfButtons = $('.rrsi-buttons li').length;
	var initBtnWidth = 100 / numOfButtons;
};

var sizeSmallBtns = function() {
	var regButtonCount, newButtonWidth, pixelsOff, smallBtnCount, smallBtnFraction;

	// readjust buttons for small display
	smallBtnCount = $('.rrsi-buttons li.small').length;
	$('.smallbtnsdude span').html(smallBtnCount);

	// make sure there are small buttons
	if (smallBtnCount > 0) {

		pixelsOff = smallBtnCount * 42;
		console.log('subtract small pixels: '+pixelsOff);

		regButtonCount = $('.rrsi-buttons li').not('.small').length;
		regPercent = 100 / regButtonCount;
		smallBtnFraction = pixelsOff / regButtonCount;

		if (navigator.userAgent.indexOf('Chrome') >= 0 || navigator.userAgent.indexOf('Safari') >= 0) {
			magicWidth = '-webkit-calc('+regPercent+'% - '+smallBtnFraction+'px)';
		} else if (navigator.userAgent.indexOf('Firefox') >= 0) {
			magicWidth = '-moz-calc('+regPercent+'% - '+smallBtnFraction+'px)';
		} else {
			magicWidth = 'calc('+regPercent+'% - '+smallBtnFraction+'px)';
		}

		//console.log(magicWidth);

		$('.rrsi-buttons li').not('.small').css('width', magicWidth);

		//console.log('small button fraction: '+smallBtnFraction);
	} else {
		var numOfButtons = $('.rrsi-buttons li').length;
		var initBtnWidth = 100 / numOfButtons;

		$('.rrsi-buttons li').css('width', initBtnWidth + '%').attr('data-initwidth',initBtnWidth);
	}
};

var rrsiInit = function() {

	var numOfButtons = $('.rrsi-buttons li').length;
	var initBtnWidth = 100 / numOfButtons;
	containerWidth = $('.rrsi-buttons').width();

	$('.rrsi-buttons').attr('data-width', containerWidth);

	$('.rrsi-buttons li').css('width', initBtnWidth + '%').attr('data-initwidth',initBtnWidth);

	$('.rrsi-buttons li .text').each(function() {
		var txtWdth = parseFloat($(this).width());
		$(this).closest('li').attr('data-size', txtWdth);
		totalTxt = totalTxt + (txtWdth + 55);
	});

	rrsiMagicLayout(sizeSmallBtns);
};

var rrsiMagicLayout = function(callback) {
	console.log('me first');
	containerWidth = $('.rrsi-buttons').width();
	$('.containersize span').html(containerWidth);
	$('.buttonspace span').html(totalTxt);

	$('.rrsi-buttons').attr('data-width', containerWidth);

	//get button width
	buttonWidth = $('.rrsi-buttons li').not('.small').first().width();


	if (buttonWidth > 170) {
		$('.rrsi-buttons').addClass('large-format');
	} else if (buttonWidth <= 170) {
		$('.rrsi-buttons').removeClass('large-format');
	}

	// look check for small button necessity
	if (totalTxt >= containerWidth) {
		$('.rrsi-buttons li:last-child').not('.small').addClass('small').css('width', '42px');
	} else {
		$('.rrsi-buttons li:last-child').removeClass('small').css('width', $('.rrsi-buttons li:last-child').attr('data-initwidth') + '%');
	}

	callback();
};


// make sure resize only fires when done resizing
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

// resize function
$(window).resize(function () {
	rrsiMagicLayout(sizeSmallBtns);
});

// init load
$(document).ready(function(){
	rrsiInit();
});


