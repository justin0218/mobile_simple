webpackHotUpdate("static/development/pages/detail.js",{

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
      opennav: false,
      opensearch: false
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
          opennav = _this$state.opennav,
          opensearch = _this$state.opensearch,
          searchTxt = _this$state.searchTxt;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-1515128354",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
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
        className: "jsx-1515128354",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          width: "100%",
          margin: "0 auto",
          height: "100%",
          lineHeight: "60px",
          fontSize: 22,
          position: "relative"
        },
        className: "jsx-1515128354",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          width: "100%",
          textAlign: "center",
          position: "absolute",
          left: 0,
          top: 0
        },
        className: "jsx-1515128354",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Simple"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
        id: "mnavh",
        onClick: function onClick() {
          var open = !opennav;

          _this3.setState({
            opennav: open
          });
        },
        className: "jsx-1515128354" + " " + ((opennav ? "open" : "") || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-1515128354" + " " + "navicon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
        id: "starlist",
        style: {
          background: "rgba(0,0,0,.5)",
          width: "100%",
          display: opennav ? "block" : "none"
        },
        className: "jsx-1515128354",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-1515128354",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/",
        style: path == "/" ? {
          color: "#f65a8a"
        } : {},
        className: "jsx-1515128354",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "\u9996\u9875")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-1515128354",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/article",
        style: path == "/article" || path == "/detail" ? {
          color: "#f65a8a"
        } : {},
        className: "jsx-1515128354",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "\u6587\u7AE0")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-1515128354",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/message",
        style: path == "/message" ? {
          color: "#f65a8a"
        } : {},
        className: "jsx-1515128354",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "\u7559\u8A00")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-1515128354",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/me",
        style: path == "/me" ? {
          color: "#f65a8a"
        } : {},
        className: "jsx-1515128354",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "\u5173\u4E8E"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-1515128354" + " " + ((opensearch ? "searchbox search_open" : "searchbox") || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "search_bar",
        style: {
          width: opensearch ? "100%" : 0
        },
        className: "jsx-1515128354" + " " + "search_bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        value: searchTxt,
        placeholder: "\u60F3\u641C\u70B9\u4EC0\u4E48\u5462..",
        onChange: function onChange(e) {
          _this3.setState({
            searchTxt: e.target.value
          });
        },
        type: "text",
        name: "keyboard",
        id: "keyboard",
        className: "jsx-1515128354" + " " + "input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        onClick: function onClick() {
          var o = !opensearch;

          if (!o) {
            _this3.setState({
              searchTxt: ""
            });
          }

          _this3.setState({
            opensearch: o
          });
        },
        className: "jsx-1515128354" + " " + "search_ico",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-1515128354",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      })))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          height: 75
        },
        className: "jsx-1515128354",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "1515128354",
        __self: this
      }, ".search_open.jsx-1515128354 .search_bar.jsx-1515128354 .input.jsx-1515128354{width:300px;}.search_open.jsx-1515128354 .search_bar.jsx-1515128354 .input.jsx-1515128354{border-bottom:#222 1px solid;background:#fff;}.search_bar.jsx-1515128354 .input.jsx-1515128354{position:absolute;top:16px;right:0;border:none;outline:none;height:30px;line-height:30px;z-index:10;font-size:16px;color:#333;background:none;}.searchbox.jsx-1515128354{position:absolute;right:0;top:1px;}.search_open.jsx-1515128354{width:300px;display:inline-block;}.search_bar.jsx-1515128354{position:relative;width:0%;min-width:60px;height:60px;float:right;overflow:hidden;-webkit-transition:width 0.3s;-moz-transition:width 0.3s;-webkit-transition:width 0.3s;transition:width 0.3s;-webkit-backface-visibility:hidden;}.search_ico.jsx-1515128354,.search_btn.jsx-1515128354{width:60px;height:60px;display:block;position:absolute;right:0;top:0;padding:0;margin:0;line-height:60px;cursor:pointer;text-align:center;z-index:99;}.search_ico.jsx-1515128354 span.jsx-1515128354{position:relative;top:20px;}.search_ico.jsx-1515128354 span.jsx-1515128354:before{top:0;left:0;}.search_ico.jsx-1515128354 span.jsx-1515128354:before{content:' ';position:absolute;width:12px;height:12px;border:1px solid #666;border-radius:10px;}.search_ico.jsx-1515128354 span.jsx-1515128354:after{content:' ';position:absolute;width:12px;height:4px;background:#666;border-radius:5px 0 0 5px;-webkit-transform:rotate(225deg);-moz-transform:rotate(225deg);-ms-transform:rotate(225deg);-o-transform:rotate(225deg);-webkit-transform:rotate(225deg);-ms-transform:rotate(225deg);transform:rotate(225deg);}.search_ico.jsx-1515128354 span.jsx-1515128354:after{right:-22px;top:14px;}.open.jsx-1515128354 .navicon.jsx-1515128354:before{margin-top:0;-webkit-transform:rotate(45deg);-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.open.jsx-1515128354 .navicon.jsx-1515128354:before,.open.jsx-1515128354 .navicon.jsx-1515128354:after{content:'';display:block;width:30px;height:5px;position:absolute;background:#000;}.open.jsx-1515128354 .navicon.jsx-1515128354{background:none;}.open.jsx-1515128354 .navicon.jsx-1515128354:after{margin-top:0;-webkit-transform:rotate(-45deg);-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}#mnavh.jsx-1515128354{position:absolute;display:block;top:8px;left:10px;}.navicon.jsx-1515128354{display:block;position:relative;width:30px;height:5px;background-color:#000;margin-top:20px;}.navicon.jsx-1515128354:before{margin-top:-10px;}.navicon.jsx-1515128354:before,.navicon.jsx-1515128354:after{content:'';display:block;width:30px;height:5px;position:absolute;background:#000;-webkit-transition-property:margin,-webkit-transform;-webkit-transition-property:margin,-webkit-transform;-webkit-transition-property:margin,-webkit-transform;transition-property:margin,-webkit-transform;-webkit-transition-property:margin,-webkit-transform;-webkit-transition-property:margin,transform;transition-property:margin,transform;-webkit-transition-property:margin,-webkit-transform,-webkit-transform;-webkit-transition-property:margin,transform,-webkit-transform;transition-property:margin,transform,-webkit-transform;-webkit-transition-duration:300ms;-webkit-transition-duration:300ms;transition-duration:300ms;}.navicon.jsx-1515128354:after{margin-top:10px;}.navicon.jsx-1515128354:before,.navicon.jsx-1515128354:after{content:'';display:block;width:30px;height:5px;position:absolute;background:#000;-webkit-transition-property:margin,-webkit-transform;-webkit-transition-property:margin,-webkit-transform;-webkit-transition-property:margin,-webkit-transform;transition-property:margin,-webkit-transform;-webkit-transition-property:margin,-webkit-transform;-webkit-transition-property:margin,transform;transition-property:margin,transform;-webkit-transition-property:margin,-webkit-transform,-webkit-transform;-webkit-transition-property:margin,transform,-webkit-transform;transition-property:margin,transform,-webkit-transform;-webkit-transition-duration:300ms;-webkit-transition-duration:300ms;transition-duration:300ms;}#starlist.jsx-1515128354{-webkit-transition:0.3s;transition:0.3s;overflow:hidden;position:absolute;top:60px;}#starlist.jsx-1515128354 li.jsx-1515128354{display:block;width:50%;clear:both;border-top:#eaeaea 1px solid;padding:0;background:#FFF;font-size:16px;text-align:center;}#starlist.jsx-1515128354 li.jsx-1515128354 a.jsx-1515128354{-webkit-text-decoration:none;text-decoration:none;color:#555;}#starlist.jsx-1515128354 li.jsx-1515128354:last-child{padding-bottom:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0aW4vRGVza3RvcC9wcml2YXRlL2Jsb2ctbW9iYmlsZS9jb21wb25lbnRzL25hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRW9CLEFBRzJCLEFBR2lCLEFBSVgsQUFhQSxBQUtOLEFBSU0sQUFZUCxBQWNPLEFBSVosQUFJTSxBQVFBLEFBYUEsQUFJQyxBQUtGLEFBUUssQUFHSCxBQUtHLEFBTUosQUFRSyxBQUdOLEFBY0ssQUFHTCxBQWNHLEFBTUYsQUFVTyxBQUlDLE1BckhiLEtBbEJLLEFBb0RFLEFBaUNBLEFBaUJBLENBL0lsQixBQXlCeUIsQUFzQ0gsQUFRQSxBQWFULENBeEJiLEFBNEJvQyxBQWdCQyxDQVdqQixBQWdEUixFQTlEWixBQXVDQSxDQWpCQSxDQXBIYSxBQWFELEFBU0MsQUEwQkEsQUFzREcsRUFvRWhCLENBNUZBLEVBM0NrQixDQTBITCxDQXRFRSxBQWlDQSxBQWlCQSxDQTNISCxDQWJBLEFBc0JPLEFBMEJuQixFQXJEb0IsQ0E2REwsQUFRQSxFQXNDTCxBQU1HLENBMUZiLENBSkEsQ0FiZ0IsQUE0SmUsQ0F0RWhCLEFBaUNBLEFBaUJBLENBdEdPLEdBb0VWLEFBOENNLENBNUZGLEFBUUQsQ0ExQ0MsQ0FzRkgsRUFqSGIsQUFxRjRCLENBZ0JDLENBL0ZaLEFBc0ZLLEFBaUNBLEFBaUJBLEdBbEN0QixBQTZEYSxFQW5HTyxDQVJNLENBbENWLEFBc0ZRLENBMUVaLENBa0hRLElBbkpKLENBbUtoQixFQWpJVSxDQXlIRSxDQXJFUSxBQWlDQSxBQWlCQSxDQWxIQSxFQTBDVSxDQTdCaEIsR0FsQ08sRUFtSlYsQUFRTyxDQXBHSyxDQW9ETCxHQXhFTCxFQW1EYixBQWlDMEQsQUFpQkEsQ0FsSHhCLENBOEhsQyxLQWhIcUIsQ0FuQ04sQ0EySkUsRUFoRGpCLEVBcERBLEFBUXFDLE1BOURsQixLQW1DQSxBQXdIQyxPQXRJVyxHQXBCaEIsS0FtQ08sR0F3SHRCLEdBMUpvQixDQTZEYyxFQWFsQyxJQWdCQSxDQTBCa0QsQUFpQkEsSUFsR25DLENBZlcsR0FuQjFCLE9BbUNBLFFBMEJpQyw2QkFDRCxLQTFDTyx1QkEyQ1YsWUExQzdCLDJEQStGMEMsQUFpQkEsZ0JBckUxQyx1SEFxRDZELEFBaUJBLDZMQWhCdkIsQUFpQkEsa0NBaEJSLEFBaUJBLDREQWhCOUIsQUFpQkEiLCJmaWxlIjoiL1VzZXJzL2p1c3Rpbi9EZXNrdG9wL3ByaXZhdGUvYmxvZy1tb2JiaWxlL2NvbXBvbmVudHMvbmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuL2xheW91dCdcbmltcG9ydCB0cHMgZnJvbSAnLi4vdXRpbHMvYmxvZ190eXBlcydcbi8vIGltcG9ydCBiYW5uZXIgZnJvbSAnLi4vaW1hZ2VzL2Jhbm5lcidcbmltcG9ydCBFdmVudCBmcm9tICcuLi91dGlscy9lbWl0ZXInO1xudmFyIHRpbWVyID0gbnVsbDtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHJlcSxxdWVyeSxqc29uUGFnZVJlcyB9KSB7XG4gICAgY29uc3QgdXNlckFnZW50ID0gcmVxID8gcmVxLmhlYWRlcnNbJ3VzZXItYWdlbnQnXSA6IG5hdmlnYXRvci51c2VyQWdlbnRcbiAgICByZXR1cm4geyB1c2VyQWdlbnQscXVlcnksanNvblBhZ2VSZXMgfVxuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgICBwYXRoOlwiXCIsXG4gICAgICBoZWFkZXJUb3A6MCxcbiAgICAgIG9wZW5uYXY6ZmFsc2UsXG4gICAgICBvcGVuc2VhcmNoOmZhbHNlXG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgdmFyIHA9MCx0PTA7ICBcbiAgICAgIGRvY3VtZW50Lm9uc2Nyb2xsID0gKCkgPT4ge1xuICAgICAgICB2YXIgcCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wOyAgICAgIFxuICAgICAgICBpZih0PD1wICYmIHAgPiAwKXsvL+S4i+a7miBcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtoZWFkZXJUb3A6LTYxLG9wZW5uYXY6ZmFsc2V9KVxuICAgICAgICB9ZWxzZXsvL+S4iua7miAgXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aGVhZGVyVG9wOjAsb3Blbm5hdjpmYWxzZX0pXG4gICAgICAgIH0gIFxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dCA9IHA7fSwwKTsgICAgICAgICAgIFxuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7cGF0aDpsb2NhdGlvbi5wYXRobmFtZX0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3BhdGgsaGVhZGVyVG9wLG9wZW5uYXYsb3BlbnNlYXJjaCxzZWFyY2hUeHR9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIsaGVpZ2h0OjYxLHRyYW5zaXRpb246XCIwLjNzXCIsV2Via2l0VHJhbnNpdGlvbjpcIjAuM3NcIixiYWNrZ3JvdW5kQ29sb3I6XCJyZ2JhKDI1NSwyNTUsMjU1LDAuOSlcIixwb3NpdGlvbjpcImZpeGVkXCIsYm9yZGVyQm90dG9tOlwiMXB4IHNvbGlkICNkZGRcIixib3hTaGFkb3c6XCIwIDFweCAxcHggcmdiYSgwLDAsMCwuMDQpXCIsekluZGV4Ojk5OSx0b3A6aGVhZGVyVG9wLGxlZnQ6MH19PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIixtYXJnaW46XCIwIGF1dG9cIixoZWlnaHQ6XCIxMDAlXCIsbGluZUhlaWdodDpcIjYwcHhcIixmb250U2l6ZToyMixwb3NpdGlvbjpcInJlbGF0aXZlXCJ9fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIix0ZXh0QWxpZ246XCJjZW50ZXJcIixwb3NpdGlvbjpcImFic29sdXRlXCIsbGVmdDowLHRvcDowfX0+U2ltcGxlPC9kaXY+XG4gICAgICAgICAgICA8aDIgaWQ9XCJtbmF2aFwiIG9uQ2xpY2s9eygpPT57XG4gICAgICAgICAgICAgIGxldCBvcGVuID0gIW9wZW5uYXZcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b3Blbm5hdjpvcGVufSlcbiAgICAgICAgICAgIH19IGNsYXNzTmFtZT17b3Blbm5hdiA/IFwib3BlblwiOlwiXCJ9PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZpY29uXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9oMj4gICAgICAgIFxuICAgICAgICAgICAgPHVsIGlkPVwic3Rhcmxpc3RcIiBzdHlsZT17e2JhY2tncm91bmQ6IFwicmdiYSgwLDAsMCwuNSlcIix3aWR0aDogXCIxMDAlXCIsZGlzcGxheTpvcGVubmF2ID8gXCJibG9ja1wiOlwibm9uZVwifX0+XG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL1wiIHN0eWxlPXtwYXRoID09IFwiL1wiID8ge2NvbG9yOlwiI2Y2NWE4YVwifTp7fX0+6aaW6aG1PC9hPjwvbGk+XG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2FydGljbGVcIiBzdHlsZT17cGF0aCA9PSBcIi9hcnRpY2xlXCIgfHwgcGF0aCA9PSBcIi9kZXRhaWxcIiA/IHtjb2xvcjpcIiNmNjVhOGFcIn06e319PuaWh+eroDwvYT48L2xpPiBcbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvbWVzc2FnZVwiIHN0eWxlPXtwYXRoID09IFwiL21lc3NhZ2VcIiA/IHtjb2xvcjpcIiNmNjVhOGFcIn06e319PueVmeiogDwvYT48L2xpPiBcbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvbWVcIiBzdHlsZT17cGF0aCA9PSBcIi9tZVwiID8ge2NvbG9yOlwiI2Y2NWE4YVwifTp7fX0+5YWz5LqOPC9hPjwvbGk+IFxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtvcGVuc2VhcmNoID8gXCJzZWFyY2hib3ggc2VhcmNoX29wZW5cIjpcInNlYXJjaGJveFwifT5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cInNlYXJjaF9iYXJcIiBjbGFzc05hbWU9XCJzZWFyY2hfYmFyXCIgc3R5bGU9e3t3aWR0aDpvcGVuc2VhcmNoID8gXCIxMDAlXCI6MH19PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17c2VhcmNoVHh0fSBjbGFzc05hbWU9XCJpbnB1dFwiIHBsYWNlaG9sZGVyPVwi5oOz5pCc54K55LuA5LmI5ZGiLi5cIiBvbkNoYW5nZT17KGUpPT57XG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWFyY2hUeHQ6ZS50YXJnZXQudmFsdWV9KVxuICAgICAgICAgICAgICAgIH19IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImtleWJvYXJkXCIgaWQ9XCJrZXlib2FyZFwiIC8+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2VhcmNoX2ljb1wiIG9uQ2xpY2s9eygpPT57XG4gICAgICAgICAgICAgICAgICBsZXQgbyA9ICFvcGVuc2VhcmNoXG4gICAgICAgICAgICAgICAgICBpZighbyl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlYXJjaFR4dDpcIlwifSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5zZWFyY2g6b30pXG4gICAgICAgICAgICAgICAgfX0+PHNwYW4+PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+IFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDo3NX19PjwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnNlYXJjaF9vcGVuIC5zZWFyY2hfYmFyIC5pbnB1dCB7XG4gICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNlYXJjaF9vcGVuIC5zZWFyY2hfYmFyIC5pbnB1dCB7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206ICMyMjIgMXB4IHNvbGlkO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VhcmNoX2JhciAuaW5wdXQge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHRvcDogMTZweDtcbiAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zZWFyY2hib3gge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICB0b3A6IDFweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNlYXJjaF9vcGVuIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zZWFyY2hfYmFyIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB3aWR0aDogMCU7XG4gICAgICAgICAgICAgIG1pbi13aWR0aDogNjBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggMC4zcztcbiAgICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiB3aWR0aCAwLjNzO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzO1xuICAgICAgICAgICAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNlYXJjaF9pY28sIC5zZWFyY2hfYnRuIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDk5O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VhcmNoX2ljbyBzcGFuIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zZWFyY2hfaWNvIHNwYW46YmVmb3JlIHtcbiAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VhcmNoX2ljbyBzcGFuOmJlZm9yZSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICcgJztcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMnB4O1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNjY2O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VhcmNoX2ljbyBzcGFuOmFmdGVyIHtcbiAgICAgICAgICAgICAgY29udGVudDogJyAnO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDRweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzY2NjtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcbiAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xuICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcbiAgICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNlYXJjaF9pY28gc3BhbjphZnRlciB7XG4gICAgICAgICAgICAgIHJpZ2h0OiAtMjJweDtcbiAgICAgICAgICAgICAgdG9wOiAxNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAub3BlbiAubmF2aWNvbjpiZWZvcmUge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAub3BlbiAubmF2aWNvbjpiZWZvcmUsIC5vcGVuIC5uYXZpY29uOmFmdGVyIHtcbiAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm9wZW4gLm5hdmljb24ge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAub3BlbiAubmF2aWNvbjphZnRlciB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgI21uYXZoe1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB0b3A6IDhweDtcbiAgICAgICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXZpY29uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2aWNvbjpiZWZvcmUge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdmljb246YmVmb3JlLCAubmF2aWNvbjphZnRlciB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogbWFyZ2luLCAtd2Via2l0LXRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbWFyZ2luLCAtd2Via2l0LXRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbWFyZ2luLCB0cmFuc2Zvcm07XG4gICAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IG1hcmdpbiwgdHJhbnNmb3JtLCAtd2Via2l0LXRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXZpY29uOmFmdGVyIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdmljb246YmVmb3JlLCAubmF2aWNvbjphZnRlciB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogbWFyZ2luLCAtd2Via2l0LXRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbWFyZ2luLCAtd2Via2l0LXRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbWFyZ2luLCB0cmFuc2Zvcm07XG4gICAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IG1hcmdpbiwgdHJhbnNmb3JtLCAtd2Via2l0LXRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XG4gICAgICAgICAgfVxuICAgICAgICAgICNzdGFybGlzdHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA2MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAjc3Rhcmxpc3QgbGkge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAjZWFlYWVhIDFweCBzb2xpZDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjc3Rhcmxpc3QgbGkgYXtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiAjNTU1O1xuICAgICAgICAgIH1cbiAgICAgICAgICAjc3Rhcmxpc3QgbGk6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+ICBcbiAgICApXG4gIH1cbn1cblxuXG4iXX0= */\n/*@ sourceURL=/Users/justin/Desktop/private/blog-mobbile/components/nav.js */"));
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
//# sourceMappingURL=detail.js.1482e652ffa2e3e3ca3b.hot-update.js.map