/**
 * This snippet is mostly take from this page:
 * http://karma-runner.github.io/0.8/plus/RequireJS.html
 */
(function(){
    var tests   = [];

    console.log("Running through karma files to look for tests");

    for (var file in window.__karma__.files) {
        //console.log(file);
        if (new RegExp("Spec\.js$").test(file)){
            console.log("Found test file to use: ", file);
            tests.push(file);
        }
    }

    requirejs.config({
        // Karma serves files from '/base'
        baseUrl: '/base',

        paths: {
            underscore  : "js/vendor/underscore.1.8.2",
            jquery      : "js/vendor/jquery-2.1.3"
        },

        // ask Require.js to load these files (all our tests)
        deps: tests,

        // start test run, once Require.js is done
        callback: window.__karma__.start
    });

})();