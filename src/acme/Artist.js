define(function () {

    return function Artist(artistData) {
        this.name = artistData.name;
        this.image = artistData.image[0]['#text'];
        this.bio = artistData.bio || '';

        this.firstName = function() {
            return this.name.split(' ')[0];
        }
    }
});