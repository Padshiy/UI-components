$( function() {
    $( ".custom-slider" ).slider({
        create: function() {
            $('.custom-slider__handle_counter').text( $( this ).slider( "value" ) );
        },
        slide: function( event, ui ) {
            $('.custom-slider__handle_counter').text( ui.value );
        }
    });
} );