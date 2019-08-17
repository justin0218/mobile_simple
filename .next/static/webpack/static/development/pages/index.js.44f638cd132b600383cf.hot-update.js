webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout */ "./components/layout.js");
/* harmony import */ var _utils_blog_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/blog_types */ "./utils/blog_types.js");
/* harmony import */ var _utils_emiter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/emiter */ "./utils/emiter.js");









var _jsxFileName = "/Users/justin/Desktop/private/blog-mobbile/components/nav.js";



 // import banner from '../images/banner'


var timer = null;

var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(_default, _React$Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      path: "",
      headerTop: 0,
      opennav: false
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(_default, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this2 = this;

        var p, t;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                p = 0, t = 0;

                document.onscroll = function () {
                  var p = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

                  if (t <= p && p > 0) {
                    //下滚 
                    _this2.setState({
                      headerTop: -61,
                      opennav: false
                    });
                  } else {
                    //上滚  
                    _this2.setState({
                      headerTop: 0,
                      opennav: false
                    });
                  }

                  setTimeout(function () {
                    t = p;
                  }, 0);
                };

                this.setState({
                  path: location.pathname
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          path = _this$state.path,
          headerTop = _this$state.headerTop,
          opennav = _this$state.opennav;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2577329352",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          width: "100%",
          height: 61,
          transition: "0.3s",
          WebkitTransition: "0.3s",
          backgroundColor: "rgba(255,255,255,0.9)",
          position: "fixed",
          borderBottom: "1px solid #ddd",
          boxShadow: "0 1px 1px rgba(0,0,0,.04)",
          zIndex: 999,
          top: headerTop,
          left: 0
        },
        className: "jsx-2577329352",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          width: "100%",
          margin: "0 auto",
          height: "100%",
          lineHeight: "60px",
          fontSize: 22
        },
        className: "jsx-2577329352",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          width: "100%",
          textAlign: "center"
        },
        className: "jsx-2577329352",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "Simple"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
        id: "mnavh",
        onClick: function onClick() {
          open = !opennav;

          _this3.setState({
            opennav: open
          });
        },
        className: "jsx-2577329352" + " " + ((opennav ? "open" : "") || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-2577329352" + " " + "navicon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
        id: "starlist",
        style: {
          background: "rgba(0,0,0,.5)",
          width: opennav ? "100%" : 0
        },
        className: "jsx-2577329352",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-2577329352",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/",
        style: path == "/" ? {
          color: "#f65a8a"
        } : {},
        className: "jsx-2577329352",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "\u9996\u9875")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-2577329352",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/article",
        style: path == "/article" || path == "/detail" ? {
          color: "#f65a8a"
        } : {},
        className: "jsx-2577329352",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "\u6587\u7AE0")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-2577329352",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/message",
        style: path == "/message" ? {
          color: "#f65a8a"
        } : {},
        className: "jsx-2577329352",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "\u7559\u8A00")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-2577329352",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/me",
        style: path == "/me" ? {
          color: "#f65a8a"
        } : {},
        className: "jsx-2577329352",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "\u5173\u4E8E"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2577329352" + " " + "searchbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "search_bar",
        className: "jsx-2577329352" + " " + "search_bar search_open",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("form", {
        id: "searchform",
        action: "/e/search/index.php",
        method: "post",
        name: "searchform",
        className: "jsx-2577329352",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        placeholder: "\u60F3\u641C\u70B9\u4EC0\u4E48\u5462..",
        type: "text",
        name: "keyboard",
        id: "keyboard",
        className: "jsx-2577329352" + " " + "input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-2577329352" + " " + "search_ico",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-2577329352",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }))))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          height: 75
        },
        className: "jsx-2577329352",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "2577329352",
        __self: this
      }, ".searchbox.jsx-2577329352{position:absolute;right:0;top:1px;}.search_open.jsx-2577329352{width:300px;display:inline-block;}.search_bar.jsx-2577329352{position:relative;width:0%;min-width:60px;height:60px;float:right;overflow:hidden;-webkit-transition:width 0.3s;-moz-transition:width 0.3s;-webkit-transition:width 0.3s;transition:width 0.3s;-webkit-backface-visibility:hidden;}.search_bar.jsx-2577329352 .input.jsx-2577329352{position:absolute;top:16px;right:0;border:none;outline:none;height:30px;line-height:30px;z-index:10;font-size:16px;color:#333;background:none;}.search_ico.jsx-2577329352,.search_btn.jsx-2577329352{width:60px;height:60px;display:block;position:absolute;right:0;top:0;padding:0;margin:0;line-height:60px;cursor:pointer;}.search_ico.jsx-2577329352 span.jsx-2577329352{position:relative;top:20px;}.search_ico.jsx-2577329352 span.jsx-2577329352:before{top:0;left:0;}.search_ico.jsx-2577329352 span.jsx-2577329352:before{content:' ';position:absolute;width:12px;height:12px;border:1px solid #666;border-radius:10px;}.search_ico.jsx-2577329352 span.jsx-2577329352::after{content:' ';position:absolute;width:12px;height:4px;background:#666;border-radius:5px 0 0 5px;-webkit-transform:rotate(225deg);-moz-transform:rotate(225deg);-ms-transform:rotate(225deg);-o-transform:rotate(225deg);-webkit-transform:rotate(225deg);-ms-transform:rotate(225deg);transform:rotate(225deg);}.search_ico.jsx-2577329352 span.jsx-2577329352:after{right:-22px;top:14px;}.open.jsx-2577329352 .navicon.jsx-2577329352:before{margin-top:0;-webkit-transform:rotate(45deg);-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.open.jsx-2577329352 .navicon.jsx-2577329352:before,.open.jsx-2577329352 .navicon.jsx-2577329352:after{content:'';display:block;width:30px;height:5px;position:absolute;background:#000;}.open.jsx-2577329352 .navicon.jsx-2577329352{background:none;}.open.jsx-2577329352 .navicon.jsx-2577329352:after{margin-top:0;-webkit-transform:rotate(-45deg);-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}#mnavh.jsx-2577329352{position:absolute;display:block;top:8px;left:10px;}.navicon.jsx-2577329352{display:block;position:relative;width:30px;height:5px;background-color:#000;margin-top:20px;}.navicon.jsx-2577329352:before{margin-top:-10px;}.navicon.jsx-2577329352:before,.navicon.jsx-2577329352:after{content:'';display:block;width:30px;height:5px;position:absolute;background:#000;-webkit-transition-property:margin,-webkit-transform;-webkit-transition-property:margin,-webkit-transform;-webkit-transition-property:margin,-webkit-transform;transition-property:margin,-webkit-transform;-webkit-transition-property:margin,-webkit-transform;-webkit-transition-property:margin,transform;transition-property:margin,transform;-webkit-transition-property:margin,-webkit-transform,-webkit-transform;-webkit-transition-property:margin,transform,-webkit-transform;transition-property:margin,transform,-webkit-transform;-webkit-transition-duration:300ms;-webkit-transition-duration:300ms;transition-duration:300ms;}.navicon.jsx-2577329352:after{margin-top:10px;}.navicon.jsx-2577329352:before,.navicon.jsx-2577329352:after{content:'';display:block;width:30px;height:5px;position:absolute;background:#000;-webkit-transition-property:margin,-webkit-transform;-webkit-transition-property:margin,-webkit-transform;-webkit-transition-property:margin,-webkit-transform;transition-property:margin,-webkit-transform;-webkit-transition-property:margin,-webkit-transform;-webkit-transition-property:margin,transform;transition-property:margin,transform;-webkit-transition-property:margin,-webkit-transform,-webkit-transform;-webkit-transition-property:margin,transform,-webkit-transform;transition-property:margin,transform,-webkit-transform;-webkit-transition-duration:300ms;-webkit-transition-duration:300ms;transition-duration:300ms;}#starlist.jsx-2577329352{-webkit-transition:0.3s;transition:0.3s;overflow:hidden;}#starlist.jsx-2577329352 li.jsx-2577329352{display:block;width:50%;clear:both;border-top:#eaeaea 1px solid;padding:0;background:#FFF;font-size:16px;text-align:center;}#starlist.jsx-2577329352 li.jsx-2577329352 a.jsx-2577329352{-webkit-text-decoration:none;text-decoration:none;color:#555;}#starlist.jsx-2577329352 li.jsx-2577329352:last-child{padding-bottom:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0aW4vRGVza3RvcC9wcml2YXRlL2Jsb2ctbW9iYmlsZS9jb21wb25lbnRzL25hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RG9CLEFBR2lDLEFBS04sQUFJTSxBQVlBLEFBYVAsQUFZTyxBQUlaLEFBSU0sQUFRQSxBQWFBLEFBSUMsQUFLRixBQVFLLEFBR0gsQUFLRyxBQU1KLEFBUUssQUFHTixBQWNLLEFBR0wsQUFjRyxBQUlGLEFBVU8sQUFJQyxNQW5IYixLQWhCSyxBQWtERSxBQWlDQSxBQWlCQSxDQWpJTyxBQWlESCxBQVFBLEFBYVQsQ0F4QmIsQUE0Qm9DLEFBZ0JDLENBV2pCLEFBOENSLEVBNURaLEFBdUNBLENBakJBLENBbEhZLEFBU0MsQUFZQSxBQXlCQSxBQXNERyxFQWtFaEIsQ0ExRkEsRUF6Q2tCLENBc0hMLENBcEVFLEFBaUNBLEFBaUJBLENBdElILENBU08sQUFZUCxBQXlCWixHQVFlLEFBUUEsRUFzQ0wsQUFNRyxDQXJHYixDQUpBLENBcUJnQixBQW1JZSxDQXBFaEIsQUFpQ0EsQUFpQkEsQ0FwR08sR0FrRVYsQUE4Q00sQ0E1RkYsQUFRRCxDQXJEQyxDQWlHSCxFQTVCZSxDQWdCQyxDQXhFWixBQStESyxBQWlDQSxBQWlCQSxHQWxDdEIsQUEyRGEsRUFqR08sQ0FSTSxDQTdDVixBQWlHUSxDQXhFWixDQWdIWixJQTVIZ0IsQ0EwSWhCLEVBN0hVLENBcUhFLENBbkVRLEFBaUNBLEFBaUJBLENBN0hBLEVBcURVLENBM0JoQixHQWJPLEVBa0lILENBbEdLLENBb0RMLEdBdEVMLEVBaURiLEFBaUMwRCxBQWlCQSxDQTdIeEIsTUEyQmIsQ0FkTixDQWtJRSxFQTlDakIsRUFwREEsQUFRcUMsTUF2Q2xCLEtBY0EsQUFvSEMsT0EvSVcsR0FjaEIsS0FjZixHQW9IQSxHQWpJb0IsQ0FzQ2MsRUFhbEMsSUFnQkEsQ0EwQmtELEFBaUJBLEtBNUh4QixHQWUxQixlQXNDaUMsNkJBQ0QsS0FyRE8sdUJBc0RWLFlBckQ3QiwyREEwRzBDLEFBaUJBLGdCQXJFMUMsdUhBcUQ2RCxBQWlCQSw2TEFoQnZCLEFBaUJBLGtDQWhCUixBQWlCQSw0REFoQjlCLEFBaUJBIiwiZmlsZSI6Ii9Vc2Vycy9qdXN0aW4vRGVza3RvcC9wcml2YXRlL2Jsb2ctbW9iYmlsZS9jb21wb25lbnRzL25hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi9sYXlvdXQnXG5pbXBvcnQgdHBzIGZyb20gJy4uL3V0aWxzL2Jsb2dfdHlwZXMnXG4vLyBpbXBvcnQgYmFubmVyIGZyb20gJy4uL2ltYWdlcy9iYW5uZXInXG5pbXBvcnQgRXZlbnQgZnJvbSAnLi4vdXRpbHMvZW1pdGVyJztcbnZhciB0aW1lciA9IG51bGw7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyByZXEscXVlcnksanNvblBhZ2VSZXMgfSkge1xuICAgIGNvbnN0IHVzZXJBZ2VudCA9IHJlcSA/IHJlcS5oZWFkZXJzWyd1c2VyLWFnZW50J10gOiBuYXZpZ2F0b3IudXNlckFnZW50XG4gICAgcmV0dXJuIHsgdXNlckFnZW50LHF1ZXJ5LGpzb25QYWdlUmVzIH1cbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgICAgcGF0aDpcIlwiLFxuICAgICAgaGVhZGVyVG9wOjAsXG4gICAgICBvcGVubmF2OmZhbHNlXG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgdmFyIHA9MCx0PTA7ICBcbiAgICAgIGRvY3VtZW50Lm9uc2Nyb2xsID0gKCkgPT4ge1xuICAgICAgICB2YXIgcCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wOyAgICAgIFxuICAgICAgICBpZih0PD1wICYmIHAgPiAwKXsvL+S4i+a7miBcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtoZWFkZXJUb3A6LTYxLG9wZW5uYXY6ZmFsc2V9KVxuICAgICAgICB9ZWxzZXsvL+S4iua7miAgXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aGVhZGVyVG9wOjAsb3Blbm5hdjpmYWxzZX0pXG4gICAgICAgIH0gIFxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dCA9IHA7fSwwKTsgICAgICAgICAgIFxuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7cGF0aDpsb2NhdGlvbi5wYXRobmFtZX0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3BhdGgsaGVhZGVyVG9wLG9wZW5uYXZ9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIsaGVpZ2h0OjYxLHRyYW5zaXRpb246XCIwLjNzXCIsV2Via2l0VHJhbnNpdGlvbjpcIjAuM3NcIixiYWNrZ3JvdW5kQ29sb3I6XCJyZ2JhKDI1NSwyNTUsMjU1LDAuOSlcIixwb3NpdGlvbjpcImZpeGVkXCIsYm9yZGVyQm90dG9tOlwiMXB4IHNvbGlkICNkZGRcIixib3hTaGFkb3c6XCIwIDFweCAxcHggcmdiYSgwLDAsMCwuMDQpXCIsekluZGV4Ojk5OSx0b3A6aGVhZGVyVG9wLGxlZnQ6MH19PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIixtYXJnaW46XCIwIGF1dG9cIixoZWlnaHQ6XCIxMDAlXCIsbGluZUhlaWdodDpcIjYwcHhcIixmb250U2l6ZToyMn19PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLHRleHRBbGlnbjpcImNlbnRlclwifX0+U2ltcGxlPC9kaXY+XG4gICAgICAgICAgICA8aDIgaWQ9XCJtbmF2aFwiIG9uQ2xpY2s9eygpPT57XG4gICAgICAgICAgICAgIG9wZW4gPSAhb3Blbm5hdlxuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtvcGVubmF2Om9wZW59KVxuICAgICAgICAgICAgfX0gY2xhc3NOYW1lPXtvcGVubmF2ID8gXCJvcGVuXCI6XCJcIn0+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmljb25cIj48L3NwYW4+XG4gICAgICAgICAgICA8L2gyPiAgICAgICAgXG4gICAgICAgICAgICA8dWwgaWQ9XCJzdGFybGlzdFwiIHN0eWxlPXt7YmFja2dyb3VuZDogXCJyZ2JhKDAsMCwwLC41KVwiLHdpZHRoOiBvcGVubmF2ID8gXCIxMDAlXCI6MH19PlxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9cIiBzdHlsZT17cGF0aCA9PSBcIi9cIiA/IHtjb2xvcjpcIiNmNjVhOGFcIn06e319PummlumhtTwvYT48L2xpPlxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9hcnRpY2xlXCIgc3R5bGU9e3BhdGggPT0gXCIvYXJ0aWNsZVwiIHx8IHBhdGggPT0gXCIvZGV0YWlsXCIgPyB7Y29sb3I6XCIjZjY1YThhXCJ9Ont9fT7mlofnq6A8L2E+PC9saT4gXG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL21lc3NhZ2VcIiBzdHlsZT17cGF0aCA9PSBcIi9tZXNzYWdlXCIgPyB7Y29sb3I6XCIjZjY1YThhXCJ9Ont9fT7nlZnoqIA8L2E+PC9saT4gXG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL21lXCIgc3R5bGU9e3BhdGggPT0gXCIvbWVcIiA/IHtjb2xvcjpcIiNmNjVhOGFcIn06e319PuWFs+S6jjwvYT48L2xpPiBcbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaGJveFwiPlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwic2VhcmNoX2JhclwiIGNsYXNzTmFtZT1cInNlYXJjaF9iYXIgc2VhcmNoX29wZW5cIj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cInNlYXJjaGZvcm1cIiBhY3Rpb249XCIvZS9zZWFyY2gvaW5kZXgucGhwXCIgbWV0aG9kPVwicG9zdFwiIG5hbWU9XCJzZWFyY2hmb3JtXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXRcIiBwbGFjZWhvbGRlcj1cIuaDs+aQnOeCueS7gOS5iOWRoi4uXCIgdHlwZT1cInRleHRcIiBuYW1lPVwia2V5Ym9hcmRcIiBpZD1cImtleWJvYXJkXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNlYXJjaF9pY29cIj48c3Bhbj48L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+IFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDo3NX19PjwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnNlYXJjaGJveCB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgIHRvcDogMXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VhcmNoX29wZW4ge1xuICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNlYXJjaF9iYXIge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHdpZHRoOiAwJTtcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiB3aWR0aCAwLjNzO1xuICAgICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IHdpZHRoIDAuM3M7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3M7XG4gICAgICAgICAgICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VhcmNoX2JhciAuaW5wdXQge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHRvcDogMTZweDtcbiAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zZWFyY2hfaWNvLCAuc2VhcmNoX2J0biB7XG4gICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNlYXJjaF9pY28gc3BhbiB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VhcmNoX2ljbyBzcGFuOmJlZm9yZSB7XG4gICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNlYXJjaF9pY28gc3BhbjpiZWZvcmUge1xuICAgICAgICAgICAgICBjb250ZW50OiAnICc7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMTJweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzY2NjtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNlYXJjaF9pY28gc3Bhbjo6YWZ0ZXIge1xuICAgICAgICAgICAgICBjb250ZW50OiAnICc7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNjY2O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xuICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XG4gICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xuICAgICAgICAgICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VhcmNoX2ljbyBzcGFuOmFmdGVyIHtcbiAgICAgICAgICAgICAgcmlnaHQ6IC0yMnB4O1xuICAgICAgICAgICAgICB0b3A6IDE0cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5vcGVuIC5uYXZpY29uOmJlZm9yZSB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5vcGVuIC5uYXZpY29uOmJlZm9yZSwgLm9wZW4gLm5hdmljb246YWZ0ZXIge1xuICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAub3BlbiAubmF2aWNvbiB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5vcGVuIC5uYXZpY29uOmFmdGVyIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjbW5hdmh7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHRvcDogOHB4O1xuICAgICAgICAgICAgbGVmdDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdmljb24ge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXZpY29uOmJlZm9yZSB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2aWNvbjpiZWZvcmUsIC5uYXZpY29uOmFmdGVyIHtcbiAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBtYXJnaW4sIC13ZWJraXQtdHJhbnNmb3JtO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBtYXJnaW4sIC13ZWJraXQtdHJhbnNmb3JtO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBtYXJnaW4sIHRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbWFyZ2luLCB0cmFuc2Zvcm0sIC13ZWJraXQtdHJhbnNmb3JtO1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdmljb246YWZ0ZXIge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2aWNvbjpiZWZvcmUsIC5uYXZpY29uOmFmdGVyIHtcbiAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBtYXJnaW4sIC13ZWJraXQtdHJhbnNmb3JtO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBtYXJnaW4sIC13ZWJraXQtdHJhbnNmb3JtO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBtYXJnaW4sIHRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbWFyZ2luLCB0cmFuc2Zvcm0sIC13ZWJraXQtdHJhbnNmb3JtO1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcbiAgICAgICAgICB9XG4gICAgICAgICAgI3N0YXJsaXN0e1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgfVxuICAgICAgICAgICNzdGFybGlzdCBsaSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBjbGVhcjogYm90aDtcbiAgICAgICAgICAgIGJvcmRlci10b3A6ICNlYWVhZWEgMXB4IHNvbGlkO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgICNzdGFybGlzdCBsaSBhe1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6ICM1NTU7XG4gICAgICAgICAgfVxuICAgICAgICAgICNzdGFybGlzdCBsaTpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj4gIFxuICAgIClcbiAgfVxufVxuXG5cbiJdfQ== */\n/*@ sourceURL=/Users/justin/Desktop/private/blog-mobbile/components/nav.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref) {
        var req, query, jsonPageRes, userAgent;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                req = _ref.req, query = _ref.query, jsonPageRes = _ref.jsonPageRes;
                userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
                return _context2.abrupt("return", {
                  userAgent: userAgent,
                  query: query,
                  jsonPageRes: jsonPageRes
                });

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.44f638cd132b600383cf.hot-update.js.map