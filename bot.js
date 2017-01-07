var twit = require('twit');
var config = require('./config');

var Twitter = new twit(config);

Twitter.get('search/tweets', { q: '"developer intern" filter:links -filter:retweets'}, function(err, data, response) {
   console.log(data.statuses[0]);
});

// find latest tweet according the query 'q' in params
var retweet = function() {
    var params = {
        q: '"developer intern" filter:links -filter:retweets',  // REQUIRED
        result_type: 'recent',
        lang: 'en'
    };
    // for more parameters, see: https://dev.twitter.com/rest/reference/get/search/tweets

    Twitter.get('search/tweets', params, function(err, data) {
      // if there no errors
        if (!err) {
          // grab ID of tweet to retweet
            var retweetId = data.statuses[0].id_str;
            // Tell TWITTER to retweet
            Twitter.post('statuses/retweet/:id', {
                id: retweetId
            }, function(err, response) {
                if (response) {
                    console.log('Retweeted!!!');
                }
                // if there was an error while tweeting
                if (err) {
                    console.log('Something went wrong while RETWEETING... Duplication maybe...');
                }
            });
        }
        // if unable to Search a tweet
        else {
          console.log('Something went wrong while SEARCHING...');
        }
    });
};

// grab & retweet as soon as program is running...
retweet();
// retweet in every 15 seconds
setInterval(retweet, 90000);
