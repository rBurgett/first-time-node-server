'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _layout = require('./components/layout');

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.get('/', function (req, res) {
    res.send((0, _layout2.default)({
        title: 'First Time Node Server',
        content: ''
    }));
}).use(_express2.default.static('public'));

var port = 3000;

var server = app.listen(port, function () {
    'use strict';

    console.log('App listening at port ' + server.address().port);
});