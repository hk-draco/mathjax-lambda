'use strict';
var mathjax = require("mathjax-node");
module.exports.main = (event, context, callback) => {
    mathjax.typeset({
        math: event.tex,
        format: "TeX",
        svg: true
    }, function (result) {
        var response = {
            statusCode: 200,
            headers: {},
            body: result.svg
        };
        context.succeed(response);
    });
};