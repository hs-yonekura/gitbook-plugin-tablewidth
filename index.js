const cheerio = require('cheerio');

module.exports = {
  hooks: {
    'page': function(page) {
      console.log(JSON.stringify(page));
    }
  }
}
