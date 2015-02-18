define(['jquery'], function ($) {

    var _api_key = 'b8f4c8d88db2c76d1888b576af17ccbb';
    var _format = 'json';

    function _get(query) {
        return $.get('http://ws.audioscrobbler.com/2.0/?' + query + '&format='+_format + '&api_key='+_api_key);
    }

    return {
        getSimilar: function(artistName) {
            return _get('method=artist.getSimilar&artist=' + artistName)
        },
        getInfo: function(artistName) {
            return _get('method=artist.getInfo&artist=' + artistName)

        }
    }
});