$(function(){
    var buttonRippleEffect,
        diameterRippleEffect,
        xPos,
        yPos;
    $(".button-ripple").click(function(e){
        if($(this).find(".button-ripple__effect").length === 0){
            $(this).prepend("<span class='button-ripple__effect'></span>");
        }

        buttonRippleEffect = $(this).find(".button-ripple__effect");
        buttonRippleEffect.removeClass("button-ripple__animate");

        if(!buttonRippleEffect.height() && !buttonRippleEffect.width()){
            diameterRippleEffect = Math.max($(this).outerWidth(), $(this).outerHeight());
            buttonRippleEffect.css({height: diameterRippleEffect, width: diameterRippleEffect});
        }

        xPos = e.pageX - $(this).offset().left - buttonRippleEffect.width()/2;
        yPos = e.pageY - $(this).offset().top - buttonRippleEffect.height()/2;

        buttonRippleEffect.css({top: yPos+'px', left: xPos+'px'}).addClass("button-ripple__animate");
    });
});
