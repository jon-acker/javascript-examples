define(['acme/Artist'], function (Artist) {

    function _fromJson(artistData) {
        return new Artist(artistData)
    }

    return {
        fromJson: _fromJson
    }
});