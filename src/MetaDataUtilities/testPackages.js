// react-sitemap-test.js
"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactRouter = require("react-router");

var _reactRouterSitemap = _interopRequireDefault(require("react-router-sitemap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sitemap = new _reactRouterSitemap.default(_react.default.createElement(_reactRouter.Route, {
  path: "/home"
})).build('http://whatsinapassword.com/').save("./sitemap.xml");

//console.log(sitemap);
