/* This script is for automatically get tweets considering a given hashtag.
 * 
 * --github: well done @tnga, @mpoehler
*/

var Twit = require('twit');

var tw = new Twit({
    consumer_key:         '2ceigbsPhnKNqa5XcTjWmqNoO',
    consumer_secret:      'eP4FLHVbJaeFIywxYd3JK9SOYr6TW9WX4KOW0IdxVJfQN0dBeV',
    access_token:         '162996897-xw5GSYkq01gUoPwe4cR4i4GX3slmF5rZeIND0pg5',
    access_token_secret:  '0ET23lmcIgmaA3tba5WoogjmrLrFuQxkTBnlhsJ4ymK6f',
    timeout_ms:           60*1000  // optional HTTP request timeout to apply to all requests.
});

/**
 * fetch tweets containing a given keyword and save result in a json file.
 * @param [string] keyword : a given word or sentence
 * @param [Object] queryOpts : options for query behavior.
 *          -[number] count : tweet limit to fetch 
 *          -[string] since : start date 
 *          -[string] until : end date 
 *          -* more on https://dev.twitter.com/rest/reference/get/search/tweets * 
 *
 * @NOTE: A cron job associated for interval automation.
 */
function fetchTweet (keyword, queryOpts) {
    if (!(queryOpts instanceof Object)) queryOpts = {};
    
    keyword ? queryOpts.q = keyword : '#GDGDschang';
    if (!queryOpts.count) queryOpts.count = 10;
    if (queryOpts.since) queryOpts.since = '2014-01-01';
   
    tw.get('search/tweets', queryOpts, function(err, data, response) {
        if (err) return console.log(err);
        var fs = require('fs');
        fs.writeFile("data/tweets.json", JSON.stringify(data.statuses), function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("twitter-"+ queryOpts.q +": The file was saved!");
        });
    });
}

fetchTweet('#DevFestWest16', {since:'2015-01-01'});
