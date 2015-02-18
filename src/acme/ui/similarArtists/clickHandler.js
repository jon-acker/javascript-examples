define([
    'acme/artistFinder',
    'acme/ui/singleArtist/renderer'
], function (artistFinder, artistRenderer) {

    function _handle(artistName) {
        artistFinder
            .getInfo(artistName)
            .then(artistRenderer.render);
    }

    return {
        handle: _handle
    }
});