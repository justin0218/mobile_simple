webpackHotUpdate("static/development/pages/article.js",{

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
        className: "jsx-3985637540",
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
        className: "jsx-3985637540",
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
        className: "jsx-3985637540",
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
        className: "jsx-3985637540",
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
        className: "jsx-3985637540" + " " + ((opennav ? "open" : "") || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-3985637540" + " " + "navicon",
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
        className: "jsx-3985637540",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-3985637540",
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
        className: "jsx-3985637540",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "\u9996\u9875")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-3985637540",
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
        className: "jsx-3985637540",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "\u6587\u7AE0")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-3985637540",
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
        className: "jsx-3985637540",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "\u7559\u8A00")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-3985637540",
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
        className: "jsx-3985637540",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "\u5173\u4E8E"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-3985637540" + " " + "searchbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "search_bar",
        className: "jsx-3985637540" + " " + "search_bar",
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
        className: "jsx-3985637540",
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
        className: "jsx-3985637540" + " " + "input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        type: "hidden",
        name: "show",
        value: "title",
        className: "jsx-3985637540",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        type: "hidden",
        name: "tempid",
        value: "1",
        className: "jsx-3985637540",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        type: "hidden",
        name: "tbname",
        value: "news",
        className: "jsx-3985637540",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        type: "hidden",
        name: "Submit",
        value: "\u641C\u7D22",
        className: "jsx-3985637540",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-3985637540" + " " + "search_ico",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-3985637540",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }))))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          height: 75
        },
        className: "jsx-3985637540",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "3985637540",
        __self: this
      }, ".searchbox.jsx-3985637540{position:absolute;right:0;top:25px;}.search_bar.jsx-3985637540{position:relative;width:0%;min-width:60px;height:60px;float:right;overflow:hidden;-webkit-transition:width 0.3s;-moz-transition:width 0.3s;-webkit-transition:width 0.3s;transition:width 0.3s;-webkit-backface-visibility:hidden;}.search_bar.jsx-3985637540 .input.jsx-3985637540{position:absolute;top:16px;right:0;border:none;outline:none;height:30px;line-height:30px;z-index:10;font-size:16px;color:#333;background:none;}.search_ico.jsx-3985637540,.search_btn.jsx-3985637540{width:60px;height:60px;display:block;position:absolute;right:0;top:0;padding:0;margin:0;line-height:60px;cursor:pointer;}.search_ico.jsx-3985637540 span.jsx-3985637540{position:relative;top:20px;}.search_ico.jsx-3985637540 span.jsx-3985637540:before{top:0;left:0;}.search_ico.jsx-3985637540 span.jsx-3985637540:before{content:' ';position:absolute;width:12px;height:12px;border:1px solid #666;border-radius:10px;}.search_ico.jsx-3985637540 span.jsx-3985637540::after{content:' ';position:absolute;width:12px;height:4px;background:#666;border-radius:5px 0 0 5px;-webkit-transform:rotate(225deg);-moz-transform:rotate(225deg);-ms-transform:rotate(225deg);-o-transform:rotate(225deg);-webkit-transform:rotate(225deg);-ms-transform:rotate(225deg);transform:rotate(225deg);}.search_ico.jsx-3985637540 span.jsx-3985637540:after{right:-22px;top:14px;}.open.jsx-3985637540 .navicon.jsx-3985637540:before{margin-top:0;-webkit-transform:rotate(45deg);-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.open.jsx-3985637540 .navicon.jsx-3985637540:before,.open.jsx-3985637540 .navicon.jsx-3985637540:after{content:'';display:block;width:30px;height:5px;position:absolute;background:#000;}.open.jsx-3985637540 .navicon.jsx-3985637540{background:none;}.open.jsx-3985637540 .navicon.jsx-3985637540:after{margin-top:0;-webkit-transform:rotate(-45deg);-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}#mnavh.jsx-3985637540{position:absolute;display:block;top:8px;left:10px;}.navicon.jsx-3985637540{display:block;position:relative;width:30px;height:5px;background-color:#000;margin-top:20px;}.navicon.jsx-3985637540:before{margin-top:-10px;}.navicon.jsx-3985637540:before,.navicon.jsx-3985637540:after{content:'';display:block;width:30px;height:5px;position:absolute;background:#000;-webkit-transition-property:margin,-webkit-transform;-webkit-transition-property:margin,-webkit-transform;-webkit-transition-property:margin,-webkit-transform;transition-property:margin,-webkit-transform;-webkit-transition-property:margin,-webkit-transform;-webkit-transition-property:margin,transform;transition-property:margin,transform;-webkit-transition-property:margin,-webkit-transform,-webkit-transform;-webkit-transition-property:margin,transform,-webkit-transform;transition-property:margin,transform,-webkit-transform;-webkit-transition-duration:300ms;-webkit-transition-duration:300ms;transition-duration:300ms;}.navicon.jsx-3985637540:after{margin-top:10px;}.navicon.jsx-3985637540:before,.navicon.jsx-3985637540:after{content:'';display:block;width:30px;height:5px;position:absolute;background:#000;-webkit-transition-property:margin,-webkit-transform;-webkit-transition-property:margin,-webkit-transform;-webkit-transition-property:margin,-webkit-transform;transition-property:margin,-webkit-transform;-webkit-transition-property:margin,-webkit-transform;-webkit-transition-property:margin,transform;transition-property:margin,transform;-webkit-transition-property:margin,-webkit-transform,-webkit-transform;-webkit-transition-property:margin,transform,-webkit-transform;transition-property:margin,transform,-webkit-transform;-webkit-transition-duration:300ms;-webkit-transition-duration:300ms;transition-duration:300ms;}#starlist.jsx-3985637540{-webkit-transition:0.3s;transition:0.3s;overflow:hidden;}#starlist.jsx-3985637540 li.jsx-3985637540{display:block;width:50%;clear:both;border-top:#eaeaea 1px solid;padding:0;background:#FFF;font-size:16px;text-align:center;}#starlist.jsx-3985637540 li.jsx-3985637540 a.jsx-3985637540{-webkit-text-decoration:none;text-decoration:none;color:#555;}#starlist.jsx-3985637540 li.jsx-3985637540:last-child{padding-bottom:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0aW4vRGVza3RvcC9wcml2YXRlL2Jsb2ctbW9iYmlsZS9jb21wb25lbnRzL25hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRW9CLEFBR2lDLEFBS0EsQUFZQSxBQWFQLEFBWU8sQUFJWixBQUlNLEFBUUEsQUFhQSxBQUlDLEFBS0YsQUFRSyxBQUdILEFBS0csQUFNSixBQVFLLEFBR04sQUFjSyxBQUdMLEFBY0csQUFJRixBQVVPLEFBSUMsTUFuSGIsS0FoQkssQUFrREUsQUFpQ0EsQUFpQkEsQ0FoRkksQUFRQSxBQWFULENBeEJiLEFBNEJvQyxBQWdCQyxDQVdqQixBQThDUixFQTVEWixBQXVDQSxDQWpCQSxDQTlHWSxBQUtDLEFBWUEsQUF5QkEsQUFzREcsRUFrRWhCLENBMUZBLEVBekNrQixDQXNITCxDQXBFRSxBQWlDQSxBQWlCQSxDQWxJRixDQUtNLEFBWVAsQUF5QlosR0FRZSxBQVFBLEVBc0NMLEFBTUcsR0FyR2IsQUFpQmdCLEFBbUllLENBcEVoQixBQWlDQSxBQWlCQSxDQXBHTyxHQWtFVixBQThDTSxDQTVGRixBQVFELENBckRDLENBaUdILEVBNUJlLENBZ0JDLENBeEVaLEFBK0RLLEFBaUNBLEFBaUJBLEdBbEN0QixBQTJEYSxFQWpHTyxDQVJNLENBN0NWLEFBaUdRLENBeEVaLENBZ0haLElBNUhnQixDQTBJaEIsRUE3SFUsQ0FxSEUsQ0FuRVEsQUFpQ0EsQUFpQkEsQ0E3SEEsRUFxRFUsQ0EzQmhCLEdBYk8sRUFrSUgsQ0FsR0ssQ0FvREwsR0F0RUwsRUFpRGIsQUFpQzBELEFBaUJBLENBN0h4QixNQTJCYixDQWROLENBa0lFLEVBOUNqQixFQXBEQSxBQVFxQyxNQXZDbEIsS0FjQSxBQW9IQyxPQS9JVyxHQWNoQixLQWNmLEdBb0hBLEdBaklvQixDQXNDYyxFQWFsQyxJQWdCQSxDQTBCa0QsQUFpQkEsS0E1SHhCLEdBZTFCLGVBc0NpQyw2QkFDRCxLQXJETyx1QkFzRFYsWUFyRDdCLDJEQTBHMEMsQUFpQkEsZ0JBckUxQyx1SEFxRDZELEFBaUJBLDZMQWhCdkIsQUFpQkEsa0NBaEJSLEFBaUJBLDREQWhCOUIsQUFpQkEiLCJmaWxlIjoiL1VzZXJzL2p1c3Rpbi9EZXNrdG9wL3ByaXZhdGUvYmxvZy1tb2JiaWxlL2NvbXBvbmVudHMvbmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuL2xheW91dCdcbmltcG9ydCB0cHMgZnJvbSAnLi4vdXRpbHMvYmxvZ190eXBlcydcbi8vIGltcG9ydCBiYW5uZXIgZnJvbSAnLi4vaW1hZ2VzL2Jhbm5lcidcbmltcG9ydCBFdmVudCBmcm9tICcuLi91dGlscy9lbWl0ZXInO1xudmFyIHRpbWVyID0gbnVsbDtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHJlcSxxdWVyeSxqc29uUGFnZVJlcyB9KSB7XG4gICAgY29uc3QgdXNlckFnZW50ID0gcmVxID8gcmVxLmhlYWRlcnNbJ3VzZXItYWdlbnQnXSA6IG5hdmlnYXRvci51c2VyQWdlbnRcbiAgICByZXR1cm4geyB1c2VyQWdlbnQscXVlcnksanNvblBhZ2VSZXMgfVxuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgICBwYXRoOlwiXCIsXG4gICAgICBoZWFkZXJUb3A6MCxcbiAgICAgIG9wZW5uYXY6ZmFsc2VcbiAgfVxuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICB2YXIgcD0wLHQ9MDsgIFxuICAgICAgZG9jdW1lbnQub25zY3JvbGwgPSAoKSA9PiB7XG4gICAgICAgIHZhciBwID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7ICAgICAgXG4gICAgICAgIGlmKHQ8PXAgJiYgcCA+IDApey8v5LiL5ruaIFxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2hlYWRlclRvcDotNjEsb3Blbm5hdjpmYWxzZX0pXG4gICAgICAgIH1lbHNley8v5LiK5ruaICBcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtoZWFkZXJUb3A6MCxvcGVubmF2OmZhbHNlfSlcbiAgICAgICAgfSAgXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXt0ID0gcDt9LDApOyAgICAgICAgICAgXG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKHtwYXRoOmxvY2F0aW9uLnBhdGhuYW1lfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7cGF0aCxoZWFkZXJUb3Asb3Blbm5hdn0gPSB0aGlzLnN0YXRlXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIixoZWlnaHQ6NjEsdHJhbnNpdGlvbjpcIjAuM3NcIixXZWJraXRUcmFuc2l0aW9uOlwiMC4zc1wiLGJhY2tncm91bmRDb2xvcjpcInJnYmEoMjU1LDI1NSwyNTUsMC45KVwiLHBvc2l0aW9uOlwiZml4ZWRcIixib3JkZXJCb3R0b206XCIxcHggc29saWQgI2RkZFwiLGJveFNoYWRvdzpcIjAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNClcIix6SW5kZXg6OTk5LHRvcDpoZWFkZXJUb3AsbGVmdDowfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLG1hcmdpbjpcIjAgYXV0b1wiLGhlaWdodDpcIjEwMCVcIixsaW5lSGVpZ2h0OlwiNjBweFwiLGZvbnRTaXplOjIyfX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIsdGV4dEFsaWduOlwiY2VudGVyXCJ9fT5TaW1wbGU8L2Rpdj5cbiAgICAgICAgICAgIDxoMiBpZD1cIm1uYXZoXCIgb25DbGljaz17KCk9PntcbiAgICAgICAgICAgICAgb3BlbiA9ICFvcGVubmF2XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5uYXY6b3Blbn0pXG4gICAgICAgICAgICB9fSBjbGFzc05hbWU9e29wZW5uYXYgPyBcIm9wZW5cIjpcIlwifT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2aWNvblwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvaDI+ICAgICAgICBcbiAgICAgICAgICAgIDx1bCBpZD1cInN0YXJsaXN0XCIgc3R5bGU9e3tiYWNrZ3JvdW5kOiBcInJnYmEoMCwwLDAsLjUpXCIsd2lkdGg6IG9wZW5uYXYgPyBcIjEwMCVcIjowfX0+XG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL1wiIHN0eWxlPXtwYXRoID09IFwiL1wiID8ge2NvbG9yOlwiI2Y2NWE4YVwifTp7fX0+6aaW6aG1PC9hPjwvbGk+XG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2FydGljbGVcIiBzdHlsZT17cGF0aCA9PSBcIi9hcnRpY2xlXCIgfHwgcGF0aCA9PSBcIi9kZXRhaWxcIiA/IHtjb2xvcjpcIiNmNjVhOGFcIn06e319PuaWh+eroDwvYT48L2xpPiBcbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvbWVzc2FnZVwiIHN0eWxlPXtwYXRoID09IFwiL21lc3NhZ2VcIiA/IHtjb2xvcjpcIiNmNjVhOGFcIn06e319PueVmeiogDwvYT48L2xpPiBcbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvbWVcIiBzdHlsZT17cGF0aCA9PSBcIi9tZVwiID8ge2NvbG9yOlwiI2Y2NWE4YVwifTp7fX0+5YWz5LqOPC9hPjwvbGk+IFxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoYm94XCI+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJzZWFyY2hfYmFyXCIgY2xhc3NOYW1lPVwic2VhcmNoX2JhclwiPlxuICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwic2VhcmNoZm9ybVwiIGFjdGlvbj1cIi9lL3NlYXJjaC9pbmRleC5waHBcIiBtZXRob2Q9XCJwb3N0XCIgbmFtZT1cInNlYXJjaGZvcm1cIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dFwiIHBsYWNlaG9sZGVyPVwi5oOz5pCc54K55LuA5LmI5ZGiLi5cIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJrZXlib2FyZFwiIGlkPVwia2V5Ym9hcmRcIiAvPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwic2hvd1wiIHZhbHVlPVwidGl0bGVcIiAvPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwidGVtcGlkXCIgdmFsdWU9XCIxXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInRibmFtZVwiIHZhbHVlPVwibmV3c1wiIC8+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJTdWJtaXRcIiB2YWx1ZT1cIuaQnOe0olwiIC8+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzZWFyY2hfaWNvXCI+PHNwYW4+PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6NzV9fT48L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5zZWFyY2hib3gge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICB0b3A6IDI1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zZWFyY2hfYmFyIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB3aWR0aDogMCU7XG4gICAgICAgICAgICAgIG1pbi13aWR0aDogNjBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggMC4zcztcbiAgICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiB3aWR0aCAwLjNzO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzO1xuICAgICAgICAgICAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNlYXJjaF9iYXIgLmlucHV0IHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB0b3A6IDE2cHg7XG4gICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VhcmNoX2ljbywgLnNlYXJjaF9idG4ge1xuICAgICAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zZWFyY2hfaWNvIHNwYW4ge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNlYXJjaF9pY28gc3BhbjpiZWZvcmUge1xuICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zZWFyY2hfaWNvIHNwYW46YmVmb3JlIHtcbiAgICAgICAgICAgICAgY29udGVudDogJyAnO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM2NjY7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zZWFyY2hfaWNvIHNwYW46OmFmdGVyIHtcbiAgICAgICAgICAgICAgY29udGVudDogJyAnO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDRweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzY2NjtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcbiAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xuICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcbiAgICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNlYXJjaF9pY28gc3BhbjphZnRlciB7XG4gICAgICAgICAgICAgIHJpZ2h0OiAtMjJweDtcbiAgICAgICAgICAgICAgdG9wOiAxNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAub3BlbiAubmF2aWNvbjpiZWZvcmUge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAub3BlbiAubmF2aWNvbjpiZWZvcmUsIC5vcGVuIC5uYXZpY29uOmFmdGVyIHtcbiAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm9wZW4gLm5hdmljb24ge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAub3BlbiAubmF2aWNvbjphZnRlciB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgI21uYXZoe1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB0b3A6IDhweDtcbiAgICAgICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXZpY29uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2aWNvbjpiZWZvcmUge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdmljb246YmVmb3JlLCAubmF2aWNvbjphZnRlciB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogbWFyZ2luLCAtd2Via2l0LXRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbWFyZ2luLCAtd2Via2l0LXRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbWFyZ2luLCB0cmFuc2Zvcm07XG4gICAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IG1hcmdpbiwgdHJhbnNmb3JtLCAtd2Via2l0LXRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXZpY29uOmFmdGVyIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdmljb246YmVmb3JlLCAubmF2aWNvbjphZnRlciB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogbWFyZ2luLCAtd2Via2l0LXRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbWFyZ2luLCAtd2Via2l0LXRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbWFyZ2luLCB0cmFuc2Zvcm07XG4gICAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IG1hcmdpbiwgdHJhbnNmb3JtLCAtd2Via2l0LXRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XG4gICAgICAgICAgfVxuICAgICAgICAgICNzdGFybGlzdHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjc3Rhcmxpc3QgbGkge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAjZWFlYWVhIDFweCBzb2xpZDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjc3Rhcmxpc3QgbGkgYXtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiAjNTU1O1xuICAgICAgICAgIH1cbiAgICAgICAgICAjc3Rhcmxpc3QgbGk6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+ICBcbiAgICApXG4gIH1cbn1cblxuXG4iXX0= */\n/*@ sourceURL=/Users/justin/Desktop/private/blog-mobbile/components/nav.js */"));
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
//# sourceMappingURL=article.js.9cb40806ec11fe75aee8.hot-update.js.map