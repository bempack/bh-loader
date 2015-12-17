const cheerio = require('cheerio');
const expect = require('expect');

describe('bh-loader', function() {
    it('should work with basic functionality', function() {
        const bh = require('../dist/main');
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
        const form = $('form.form');
        expect(form.find('.title').length).toEqual(1);
        expect(form.find('.button__text').text()).toBe('groove');
    });
});
