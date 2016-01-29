'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var layout = function layout(_ref) {
    var title = _ref.title;
    var content = _ref.content;

    return '\n        <!DOCTYPE html>\n        <html>\n        <head>\n            <meta charset="utf-8">\n            <title>' + title + '</title>\n            <meta http-equiv="X-UA-Compatible" content="IE=edge">\n            <meta name="viewport" content="width=device-width, initial-scale=1">\n            <!--link rel="shortcut icon" href="images/favicon.ico"-->\n            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">\n            <link rel="stylesheet" href="/css/main.css">\n        </head>\n        <body>\n            <h1>Hi! This is the layout!</h1>\n            ' + (content ? content() : '') + '\n\n            <script type="text/javascript" src="https://code.jquery.com/jquery-2.2.0.min.js"></script>\n            <script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>\n            <script type="text/javascript" src="/js/main.js"></script>\n\n        </body>\n        </html>\n    ';
};

exports.default = layout;