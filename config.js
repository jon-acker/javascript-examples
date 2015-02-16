require.config({
    baseUrl: 'src',
    paths: {
        mustache: '../bower_components/mustache/mustache'
    }
});

define('jquery', ['../bower_components/jquery/dist/jquery'], function() {
    return $.noConflict(true);
});

