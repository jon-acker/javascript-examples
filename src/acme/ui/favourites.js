define([
    'jquery',
    'mustache',
    'acme/lastfm/client',
    'text!acme/ui/template/favourites.html'
], function ($, mustache, lastFmClient, template) {
    var _artists = [{name: 'ABBA'}, {name: 'Bon Jovi'}];

    $('#artist-find').click(function() {
        var artistName = $('#artist-name').val();

        _render(_artists);
    });

    function _render(artists) {
        console.log(mustache.render(template, {artists: _artists}));
    }

    return {
        render: _render
    }
});