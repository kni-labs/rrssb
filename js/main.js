var viewportHeight, viewportWidth, buttonWidth;

var rrsiInit = function() {
	$('.rrsi-buttons li .text').each(function() {
		var txtWdth = $(this).width();
		$(this).attr('data-size', txtWdth+'px');
	});
};

var rrsiLayout = function() {
	//viewportHeight = $(window).height();
	//viewportWidth = $(window).width();

	//get button width
	buttonWidth = $('.rrsi-buttons li').not('.tiny, .small').first().width();

	if (buttonWidth > 160) {
		$('.rrsi-buttons').addClass('large-format');
	} else if (buttonWidth <= 160) {
		$('.rrsi-buttons').removeClass('large-format');
	}

	console.log(buttonWidth);
	//console.log($('.rrsi-buttons li').not('.tiny, .small').first().attr('class'));
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
    waitForFinalEvent(function(){
      rrsiLayout();
    }, 500, "button watcher");
});

// init load
$(document).ready(function(){
	rrsiInit();
	rrsiLayout();
});


