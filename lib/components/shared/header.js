'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var header = function header() {
    var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    return '\n    <div class="header-container">\n        <div class="title-container">\n            <h1 class="title">My Static Website</h1>\n        </div>\n        <div class="custom-nav-container">\n            <div class="nav-item-container">\n                <a href="/" title="Home">\n                    <div class="nav-item ' + (props.activePage === 'home' ? 'active' : '') + '">Home</div>\n                </a>\n            </div>\n            <div class="nav-item-container">\n                <a href="/about" title="About">\n                    <div class="nav-item ' + (props.activePage === 'about' ? 'active' : '') + '">About</div>\n                </a>\n            </div>\n        </div>\n    </div>\n    ';
};

exports.default = header;