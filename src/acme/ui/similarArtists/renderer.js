define([
    'jquery',
    'mustache',
    'acme/ui/similarArtists/clickHandler',
    'text!acme/ui/similarArtists/similar.html'
], function ($, mustache, similarClickHandler, similarTemplate) {

    function _render(_artists) {
        var html = mustache.render(similarTemplate, {artists: _artists});

        $('#list').html(html)
            .find('li')
            .click(function() {
                similarClickHandler.handle($(this).text());
            });
    }

    return {
        render: _render
    }
});