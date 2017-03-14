'use strict';

import './css/styles.styl';

//let moduleName = location.pathname.slice(1);

//let context = require.context( './components/', true, /^\.\/.*\.js$/ );


//require( './components/buttons-ripple/buttons-ripple.js' );

function importAll (r) {
    r.keys().forEach(r);
}
importAll(require.context('./components/', true, /\.js$/));

