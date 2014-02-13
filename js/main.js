var buttonWidth;
var containerWidth;
var smallBtnCount;



var setPercentBtns = function() {
	var numOfButtons = $('.rrsi-buttons li').length;
	var initBtnWidth = 100 / numOfButtons;
};

var makeLargeBtns = function() {
	//get button width
	buttonWidth = $('.rrsi-buttons li').not('.small').first().width();

	// enlarge buttons if they get wide enough
	if (buttonWidth > 170) {
		$('.rrsi-buttons').addClass('large-format');
	} else if (buttonWidth <= 170) {
		$('.rrsi-buttons').removeClass('large-format');
	}
};

var sizeSmallBtns = function() {
	var regButtonCount, pixelsOff, smallBtnFraction;

	// readjust buttons for small display
	smallBtnCount = $('.rrsi-buttons li.small').length;
	$('.smallbtnsdude span').html(smallBtnCount);

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

		$('.rrsi-buttons li').not('.small').css('width', magicWidth);

	} else {
		var numOfButtons = $('.rrsi-buttons li').length;
		var initBtnWidth = 100 / numOfButtons;

		$('.rrsi-buttons li').css('width', initBtnWidth + '%').attr('data-initwidth',initBtnWidth);
	}

	makeLargeBtns();
};

var rrsiInit = function() {

	var numOfButtons = $('.rrsi-buttons li').length;
	var initBtnWidth = 100 / numOfButtons;

	// set initial width of buttons
	$('.rrsi-buttons li').css('width', initBtnWidth + '%').attr('data-initwidth',initBtnWidth);

	// grab initial text width of each button and add as data attr
	$('.rrsi-buttons li .text').each(function(index) {

		var txtWdth = parseFloat($(this).width());
		$(this).closest('li').attr('data-size', txtWdth);

	});

	rrsiMagicLayout(sizeSmallBtns);
};

var rrsiMagicLayout = function(callback) {
	var totalTxt = 0;

	smallBtnCount = $('.rrsi-buttons li.small').length;

	// if (smallBtnCount > 0) {
	// 	containerWidth = parseFloat($('.rrsi-buttons').width()) - (smallBtnCount * 42);
	// } else {
	// 	containerWidth = $('.rrsi-buttons').width();
	// }

	$('.rrsi-buttons').attr('data-width', containerWidth);

	$('.rrsi-buttons li:not(.small)').each(function(index) {

		var txtWdth = parseFloat($(this).attr('data-size')) + 40;
		var btnWdth = parseFloat($(this).width());

		if (txtWdth > btnWdth) {
			console.log('one touching!');
			$('.rrsi-buttons li').not('.small').last().addClass('small').css('width', '42px');

			return false;
		}

	});


	$('.rrsi-buttons li.small').each(function(index) {


		var txtWdth = parseFloat($(this).attr('data-size')) + 40;
		var btnWdth = parseFloat($(this).width());

		console.log('text width: '+txtWdth+' and button width: '+btnWdth);

		if (txtWdth < btnWdth) {
			console.log('one growing!');
			$('.rrsi-buttons li.small').first().removeClass('small').css('width', $('.rrsi-buttons li:last-child').attr('data-initwidth') + '%');
			return false;
		} else {
			console.log('never growing');
		}

	});

	// if (totalTxt >= containerWidth) {
	// 	$('.rrsi-buttons li').not('.small').last().addClass('small').css('width', '42px');
	// } else {
	// 	$('.rrsi-buttons li.small').first().removeClass('small').css('width', $('.rrsi-buttons li:last-child').attr('data-initwidth') + '%');
	// }

	// test stuff
	$('.containersize span').html(containerWidth);
	$('.buttonspace span').html(totalTxt);

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


