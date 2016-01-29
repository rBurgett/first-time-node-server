"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var home = function home() {
    return "\n        <div class=\"home-container\">\n            <h2>Home</h2>\n            <p>Hello and welcome to the homepage of my static site! Click about to learn more or try out our amazing adding tool below.</p>\n            <h4>Want to add two numbers together?</h4>\n            <form class=\"form-inline\">\n                <div class=\"form-group\">\n                    <input id=\"js-numInput1\" class=\"form-control input-lg text-center\" type=\"number\" required></input>\n                </div>\n                <div class=\"form-group\">\n                    <label>+</label>\n                    <input id=\"js-numInput2\" class=\"form-control input-lg text-center\" type=\"number\" required></input>\n                </div>\n                <div class=\"form-group\">\n                    <label>=</label>\n                    <input id=\"js-sumBox\" class=\"form-control input-lg text-center\" type=\"text\" required readonly></input>\n                </div>\n                <div class=\"form-group\">\n                    <button type=\"submit\" class=\"btn btn-primary btn-lg\">Show me the sum!</button>\n                </div>\n            </form>\n        </div>\n    ";
};

exports.default = home;