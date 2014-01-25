var viewportHeight, viewportWidth;

var rrsiLayout = function() {
	$('.rrsi-buttons li .text').each(function() {
		var txtWdth = $(this).width();
		$(this).attr('data-size', txtWdth+'px');
	});
};


$(document).ready(function(){
	rrsiLayout();
});
