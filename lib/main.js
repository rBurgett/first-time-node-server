'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _layout = require('./components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _home = require('./components/home/home');

var _home2 = _interopRequireDefault(_home);

var _about = require('./components/about/about');

var _about2 = _interopRequireDefault(_about);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.get('/', function (req, res) {

    var num1 = req.query.num1 || '';
    var num2 = req.query.num2 || '';

    res.send((0, _layout2.default)({
        title: 'First Time Node Server - Home',
        activePage: 'home',
        content: (0, _home2.default)({
            num1: num1,
            num2: num2
        })
    }));
}).get('/about', function (req, res) {
    res.send((0, _layout2.default)({
        title: 'First Time Node Server - About',
        activePage: 'about',
        content: (0, _about2.default)()
    }));
}).use(_express2.default.static('public'));

var port = 3000;

var server = app.listen(port, function () {
    'use strict';

    console.log('App listening at port ' + server.address().port);
});