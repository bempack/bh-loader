module.exports = function(bh) {
    bh.match('button', function(ctx, json) {
        ctx.tag('button');
        ctx.content({
            elem: 'text',
            content: json.text
        });
    });
};
