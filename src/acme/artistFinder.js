define([
    'acme/lastfm/client',
    'acme/artistFactory',
    'acme/repromise'
], function(client, artistFactory, repromise) {

    /**
     * Finds artists similar to [artistName] and returns a promise,
     * which is resolved after artists are found and cast to an Artist objects
     *
     * @param {string} artistName
     * @returns {promise}
     * @private
     */
    function _findSimilar(artistName, max) {

        var maxSimilarArtists = max || 5;

        var castToArtists = function(results, deferred) {
            var artistsJson = results.similarartists.artist.slice(0, maxSimilarArtists);
            var artists = artistsJson.slice(0, 5).map(artistFactory.fromJson);

            deferred.resolve(artists);
        };

        return repromise(client.getSimilar(artistName), castToArtists);
    }

    /**
     * Finds information on artist [artistName] and returns a promise,
     * which is resolved after artist is found and cast to an Artist object
     *
     * @param {string} artistName
     * @returns {promise}
     * @private
     */
    function _getInfo(artistName) {

        var castToArtist = function(result, deferred) {
            var artist = artistFactory.fromJson(result.artist);

            deferred.resolve(artist);
        };

        return repromise(client.getInfo(artistName), castToArtist);
    }

    return {
        findSimilar: _findSimilar,
        getInfo: _getInfo
    }
});