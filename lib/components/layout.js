'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _header = require('./shared/header');

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var layout = function layout() {
    var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    return '\n        <!DOCTYPE html>\n        <html>\n        <head>\n            <meta charset="utf-8">\n            <title>' + props.title + '</title>\n            <meta http-equiv="X-UA-Compatible" content="IE=edge">\n            <meta name="viewport" content="width=device-width, initial-scale=1">\n            <!--link rel="shortcut icon" href="images/favicon.ico"-->\n            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">\n            <link rel="stylesheet" href="/css/main.css">\n        </head>\n        <body>\n\n            ' + (0, _header2.default)({
        activePage: props.activePage
    }) + '\n\n            ' + (props.content ? props.content : '') + '\n\n            <!--script type="text/javascript" src="https://code.jquery.com/jquery-2.2.0.min.js"></script>\n            <script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script-->\n            <script type="text/javascript" src="/js/main.js"></script>\n\n        </body>\n        </html>\n    ';
};

exports.default = layout;