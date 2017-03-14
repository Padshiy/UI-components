$(function () {

    var sum = 0;
    var percent = 0;
    var degree = 0;
    var backgroundColor=['#7B7263', '#E3572D', '#70B48E'];

    //массив блоков со значением
    var arrayPieChart = $(".pie-chart__slice__bar");

    //Перебор всех значений для рисования окружности у каждого
    for (var i = 0; i < arrayPieChart.length; i++) {

        var arraySlice = $(".pie-chart__slice");

        degree = 3.6 * sum;
        $(arraySlice[i]).css({
            '-webkit-transform': 'rotate(' + degree + 'deg)',
            '-moz-transform': 'rotate(' + degree + 'deg)',
            '-ms-transform': 'rotate(' + degree + 'deg)',
            '-o-transform': 'rotate(' + degree + 'deg)',
            'transform': 'rotate(' + degree + 'deg)'
        });

        percent = $(arrayPieChart[i]).data("percent");
        percent = parseInt(percent, 10);
        degree = 3.6 * percent;

        $(arrayPieChart[i]).css({
            '-webkit-transform': 'rotate(' + degree + 'deg)',
            '-moz-transform': 'rotate(' + degree + 'deg)',
            '-ms-transform': 'rotate(' + degree + 'deg)',
            '-o-transform': 'rotate(' + degree + 'deg)',
            'transform': 'rotate(' + degree + 'deg)',
            'background-color': backgroundColor[i]
        });

        sum += percent;
    };
});