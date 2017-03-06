webpackJsonp([1],{

/***/ 2:
/***/ function(module, exports) {

	'use strict';

	$(function () {

	    $('.button-ripple').on('click', function (event) {
	        event.preventDefault();

	        var $div = $('<div/>'),
	            btnOffset = $(this).offset(),
	            xPos = event.pageX - btnOffset.left,
	            yPos = event.pageY - btnOffset.top;

	        $div.addClass('button-ripple-effect');
	        var $ripple = $(".button-ripple-effect");

	        $ripple.css("height", $(this).height());
	        $ripple.css("width", $(this).height());

	        $div.css({
	            top: yPos - $ripple.height() / 2,
	            left: xPos - $ripple.width() / 2,
	            background: $(this).data("button-ripple-color")
	        }).appendTo($(this));

            setTimeout(function () {
                $div.remove();
            }, 2000);
        });
	    });



/***/ }

});