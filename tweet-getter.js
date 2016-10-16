/* This script is for automatically get tweet with some time interval, considering a given hashtag.
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
 * @param [Object] opts : options for query behavior.
 *          -[boolean] isHashtag : precison for searching a hashtag or not
 *          -[number] count : tweet limit to fetch 
 *          -[string] since : start date 
 *          -[string] until : end date 
 */
function fetchTweet (keyword, opts) {
    if (!(opts instanceof Object)) opts = {};
    
    var queryOpts = {};
    opts.isHashtag ? queryOpts.q = '#'+ keyword : keyword;
    opts.count ? queryOpts.count = opts.count :10;
    opts.since ? queryOpts.since = opts.since : '2014-01-01';
    if (opts.until) queryOpts.until = opts.until;
   
    tw.get('search/tweets', queryOpts, function(err, data, response) {
        if (err) return console.log(err);
        var fs = require('fs');
        fs.writeFile("data/tweets.json", JSON.stringify(data.statuses), function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });
    });
}

fetchTweet('DevFestWest16', {isHashtag:true, since:'2015-01-01'});
