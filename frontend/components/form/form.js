$(".form-message").submit(function (e) {
    e.preventDefault();

    var input = $(".form-message__group_control");


    for( var i = 0; i < input.length; i++ ) {

        var span = $(".form-message__group_notice")[i];

        if( input[i].value == 0 ) {

            $( span ).text( "Error" );
            $( span ).addClass( "form-message__group_notice-error" );

        } else {

            $( span ).text( "Thanks!" );
            $( span ).addClass( "form-message__group_notice-thanks" );

        }

    };

});