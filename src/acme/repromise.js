define(['jquery'], function ($) {

    var _generatePromise = $.Deferred;

    return function _repromise(data, operation) {
        var deferred = _generatePromise();

        data.then(function(results) {
            operation(results, deferred);
        });

        return deferred.promise();
    }
});