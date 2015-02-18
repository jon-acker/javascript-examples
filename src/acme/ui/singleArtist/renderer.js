define([
    'jquery',
    'mustache',
    'text!acme/ui/singleArtist/artist.html'
], function ($, mustache, artistTemplate) {

    function _decodeEntities(html) {
        return $('<div/>').html(html).text()
    }

    function _render(_artist) {
        var text = mustache.render(artistTemplate, {artist: _artist});

        $('#artist').html(_decodeEntities(text));
    }

    return {
        render: _render
    }
});