# twitterbot
Twitter bot that retweets internship opportunities made using NodeJS and the npm package twit.

# Install
Be sure to have already installed NodeJS and npm. To install clone the repo and use `npm install` to install all the required dependencies for the bot to function. 
Create a [Twitter App](https://apps.twitter.com/app/new) and then add a new file called `config.js` with the credentials in the
following format:
```
//config.js
/** TWITTER APP CONFIGURATION
 * consumer_key
 * consumer_secret
 * access_token
 * access_token_secret
 */
module.exports = {
  consumer_key: '',  
  consumer_secret: '',
  access_token: '',  
  access_token_secret: ''
}
```
# Usage
To use it just run `node bot.js` from the command line. You can edit the search query under the `var params` and the property `q`.
You can read more about the Twitter API [here.](https://dev.twitter.com/rest/reference/get/search/tweets)

# Contact
Follow me on Twitter! @[BarraTweets](https://twitter.com/BarraTweets)
