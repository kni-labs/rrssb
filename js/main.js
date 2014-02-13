var buttonWidth;
var containerWidth;

var rrsiInit = function() {

	var numOfButtons = $('.rrsi-buttons li').length;
	var initBtnWidth = 100 / numOfButtons;
	containerWidth = $('.rrsi-buttons').width();

	$('.rrsi-buttons').attr('data-width', containerWidth);

	$('.rrsi-buttons li').css('width', initBtnWidth + '%').attr('data-initwidth',initBtnWidth);

	$('.rrsi-buttons li .text').each(function() {
		var txtWdth = $(this).width();
		$(this).closest('li').attr('data-size', txtWdth);
	});

	rrsiMagicLayout();
};

var rrsiMagicLayout = function() {
	var regButtonCount, newButtonWidth, pixelsOff, smallBtnCount, smallBtnFraction;

	containerWidth = $('.rrsi-buttons').width();

	$('.rrsi-buttons').attr('data-width', containerWidth);

	//get button width
	buttonWidth = $('.rrsi-buttons li').not('.small').first().width();

	$('.demozone').val(buttonWidth);

	if (buttonWidth > 170) {
		$('.rrsi-buttons').addClass('large-format');
	} else if (buttonWidth <= 170) {
		$('.rrsi-buttons').removeClass('large-format');
	}

	// test against text width for small conversion

	// $('.rrsi-buttons li').each(function(index, value) {

	// 	var buttonsize = parseFloat($(this).width()) - 40;
	// 	var textsize = parseFloat($(this).attr('data-size'));

	// 	if ( textsize >= buttonsize ) {
	// 		$(this).addClass('small').css('width', '42px');
	// 	} else {
	// 		console.log('should be removing small');
	// 		$(this).removeClass('small').css('width', $(this).attr('data-initwidth') + '%');
	// 	}
	// });



	// readjust buttons for small display
	smallBtnCount = $('.rrsi-buttons li.small').length;

	// make sure there are small buttons
	if (smallBtnCount > 0) {

		pixelsOff = smallBtnCount * 42;
		//console.log('subtract small pixels: '+pixelsOff);

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

		console.log(magicWidth);

		$('.rrsi-buttons li').not('.small').css('width', magicWidth);

		console.log('small button fraction: '+smallBtnFraction);
	}

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
	rrsiMagicLayout();
});

// init load
$(document).ready(function(){
	rrsiInit();
});


