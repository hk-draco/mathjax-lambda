'use strict';
var mathjax = require("mathjax-node");
module.exports.main = (event, context, callback) => {
    mathjax.typeset({
        math: decodeURIComponent(event.path.slice("/tex/".length)),
        format: "TeX",
        svg: true
    }, function (result) {
        var response = {
            statusCode: 200,
            headers: { "Content-Type": "image/svg+xml" }, 
            // メソッドレスポンスは無視され、ここで指定されたContent-Typeが使用される
            // 指定しない場合は、メソッドレスポンス関係なく強制的にapplication/jsonが使用される
            body: result.svg
        };
        context.succeed(response);
    });
};