/* This script is for automatically get tweet with some time interval, considering a given hashtag.
 * 
 * github: @tnga, @mpoehler
*/

var Twit = require('twit');

var tw = new Twit({
    consumer_key:         '2ceigbsPhnKNqa5XcTjWmqNoO',
    consumer_secret:      'eP4FLHVbJaeFIywxYd3JK9SOYr6TW9WX4KOW0IdxVJfQN0dBeV',
    access_token:         '162996897-xw5GSYkq01gUoPwe4cR4i4GX3slmF5rZeIND0pg5',
    access_token_secret:  '0ET23lmcIgmaA3tba5WoogjmrLrFuQxkTBnlhsJ4ymK6f',
    timeout_ms:           60*1000  // optional HTTP request timeout to apply to all requests.
});


tw.get('search/tweets', { q: '#ll237 since:2014-01-01', count: 10, /*lang: 'en'*/ }, function(err, data, response) {
    var fs = require('fs');
    fs.writeFile("data/tweets.json", JSON.stringify(data.statuses), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
});