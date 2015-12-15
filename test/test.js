const bh = require('../dist/main');
const cheerio = require('cheerio');

const $ = cheerio.load(bh.apply({
    block: 'form',
    content: [{
        block: 'title',
        content: 'test'
    }, {
        block: 'button',
        text: 'groove'
    }]
}));


console.log($.html());
