webpackHotUpdate("static/development/pages/about.js",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/noafriedman/Desktop/health-client-next/pages/about.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function About() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('noa'),
      name = _useState[0],
      setName = _useState[1];

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "This is the about page"), name);
}

/***/ })

})
//# sourceMappingURL=about.js.eac43d8100d611eff26b.hot-update.js.map