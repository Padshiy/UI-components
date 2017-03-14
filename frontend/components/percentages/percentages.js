$(function () {

    //массив блоков со значением
    var arrayBlockPercentage = $(".percentage__text");

    //Перебор всех значений для рисования окружности у каждого
    for (var i = 0; i < arrayBlockPercentage.length; i++) {

        var percent = $(arrayBlockPercentage[i]).text();

        percent = parseInt(percent, 10);

        var degree = 3.6 * percent;
        var arrayBlockRotate = $(".percentage__slice-bar");

        $(arrayBlockRotate[i]).css({
            '-webkit-transform': 'rotate(' + degree + 'deg)',
            '-moz-transform': 'rotate(' + degree + 'deg)',
            '-ms-transform': 'rotate(' + degree + 'deg)',
            '-o-transform': 'rotate(' + degree + 'deg)',
            'transform': 'rotate(' + degree + 'deg)'
        });

        if ( percent > 51 ) {

            var arrayFill = $(".percentage__slice-fill");
            var arraySlice = $(".percentage__slice");

            $(arrayFill[i]).css({
                'position': 'absolute',
                'border': '0.08em solid #e75735',
                'width': '0.84em',
                'height': '0.84em',
                'clip': 'rect(0em, 0.5em, 1em, 0em)',
                'border-radius': '50%',
                'transform': 'rotate(180deg)'
            });

            $(arraySlice[i]).css({"clip": "rect(auto, auto, auto, auto)"});

            $(arrayBlockRotate[i]).addClass("percentage__slice-bar-after");
        }
    }

});