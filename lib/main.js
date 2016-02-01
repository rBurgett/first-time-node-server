'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _adder = require('./util/adder');

var _adder2 = _interopRequireDefault(_adder);

var _layout = require('./components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _home = require('./components/home/home');

var _home2 = _interopRequireDefault(_home);

var _about = require('./components/about/about');

var _about2 = _interopRequireDefault(_about);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import the express library

var app = (0, _express2.default)(); // create the server

// import the adder module

app.get('/', function (req, res) {
    // handle a GET request to '/'

    var num1 = req.query.num1 || ''; // if a num1 query param, pass into num1, else ''
    var num2 = req.query.num2 || ''; // if a num2 query param, pass into num2, else ''

    // if a num1 and num2 value are present,
    var sum = num1 && num2 ? (0, _adder2.default)(parseInt(num1), parseInt(num2)) : '';

    res.send((0, _layout2.default)({ // call our layout view function, passing in the page's title
        title: 'First Time Node Server - Home',
        activePage: 'home', // activePage is 'home'
        content: (0, _home2.default)({
            num1: num1,
            num2: num2,
            sum: sum || sum === 0 ? sum : ''
        })
    }));
}).get('/about', function (req, res) {
    // handle a GET request to '/about'

    res.send((0, _layout2.default)({ // call our layout view function, passing in the page's title
        title: 'First Time Node Server - About',
        activePage: 'about', // activePage is 'about'
        content: (0, _about2.default)()
    }));
}).use(_express2.default.static('public')); // tell our server to expose the public folder

var port = 3000;

var server = app.listen(port, function () {
    // start the server
    console.log('App listening at port ' + server.address().port);
});