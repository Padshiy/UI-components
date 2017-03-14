$(function(){
    var buttonRippleEffect,
        diameterRippleEffect,
        xPos,
        yPos;
    $(".button").click(function(e){
        if($(this).find(".button-ripple__effect").length === 0){
            $(this).prepend("<span class='button__ripple-effect'></span>");
        }

        buttonRippleEffect = $(this).find(".button__ripple-effect");
        buttonRippleEffect.removeClass("button__ripple-animate");

        if(!buttonRippleEffect.height() && !buttonRippleEffect.width()){
            diameterRippleEffect = Math.max($(this).outerWidth(), $(this).outerHeight());
            buttonRippleEffect.css({height: diameterRippleEffect, width: diameterRippleEffect});
        }

        xPos = e.pageX - $(this).offset().left - buttonRippleEffect.width()/2;
        yPos = e.pageY - $(this).offset().top - buttonRippleEffect.height()/2;

        buttonRippleEffect.css({top: yPos+'px', left: xPos+'px'}).addClass("button__ripple-animate");
    });
});