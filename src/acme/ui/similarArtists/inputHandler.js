define([
    'jquery',
    'mustache',
    'acme/artistFinder',
    'acme/ui/similarArtists/renderer'
], function ($, mustache, artistFinder, similarRenderer) {

    $('#search button').click(function() {
        var artistName = $('#search input').val();

        artistFinder.findSimilar(artistName).then(similarRenderer.render);
    });

});