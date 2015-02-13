define([
    'jquery',
    'mustache',
    'acme/lastfm/client'
], function ($, mustache, lastFmClient) {

    $('#artist-find').click(function() {
        var artistName = $('#artist-name').val();

        lastFmClient.getSimilar(artistName);
    });

    function _render() {

    }

    return {
        render: _render
    }
});