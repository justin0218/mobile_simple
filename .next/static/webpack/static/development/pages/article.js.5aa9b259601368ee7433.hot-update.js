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
        className: "jsx-261490153",
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
        className: "jsx-261490153",
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
        className: "jsx-261490153",
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
        className: "jsx-261490153",
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
        className: "jsx-261490153" + " " + ((opennav ? "open" : "") || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-261490153" + " " + "navicon",
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
        className: "jsx-261490153",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-261490153",
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
        className: "jsx-261490153",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "\u9996\u9875")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-261490153",
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
        className: "jsx-261490153",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "\u6587\u7AE0")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-261490153",
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
        className: "jsx-261490153",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "\u7559\u8A00")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-261490153",
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
        className: "jsx-261490153",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "\u5173\u4E8E"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-261490153" + " " + "searchbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "search_bar",
        className: "jsx-261490153" + " " + "search_bar",
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
        className: "jsx-261490153",
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
        className: "jsx-261490153" + " " + "input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        type: "hidden",
        name: "show",
        value: "title",
        className: "jsx-261490153",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        type: "hidden",
        name: "tempid",
        value: "1",
        className: "jsx-261490153",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        type: "hidden",
        name: "tbname",
        value: "news",
        className: "jsx-261490153",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        type: "hidden",
        name: "Submit",
        value: "\u641C\u7D22",
        className: "jsx-261490153",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-261490153" + " " + "search_ico",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-261490153",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }))))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          height: 75
        },
        className: "jsx-261490153",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "261490153",
        __self: this
      }, ".searchbox.jsx-261490153{position:absolute;right:0;}.search_bar.jsx-261490153{position:relative;width:0%;min-width:60px;height:60px;float:right;overflow:hidden;-webkit-transition:width 0.3s;-moz-transition:width 0.3s;-webkit-transition:width 0.3s;transition:width 0.3s;-webkit-backface-visibility:hidden;}.open.jsx-261490153 .navicon.jsx-261490153:before{margin-top:0;-webkit-transform:rotate(45deg);-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.open.jsx-261490153 .navicon.jsx-261490153:before,.open.jsx-261490153 .navicon.jsx-261490153:after{content:'';display:block;width:30px;height:5px;position:absolute;background:#000;}.open.jsx-261490153 .navicon.jsx-261490153{background:none;}.open.jsx-261490153 .navicon.jsx-261490153:after{margin-top:0;-webkit-transform:rotate(-45deg);-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}#mnavh.jsx-261490153{position:absolute;display:block;top:8px;left:10px;}.navicon.jsx-261490153{display:block;position:relative;width:30px;height:5px;background-color:#000;margin-top:20px;}.navicon.jsx-261490153:before{margin-top:-10px;}.navicon.jsx-261490153:before,.navicon.jsx-261490153:after{content:'';display:block;width:30px;height:5px;position:absolute;background:#000;-webkit-transition-property:margin,-webkit-transform;-webkit-transition-property:margin,-webkit-transform;-webkit-transition-property:margin,-webkit-transform;transition-property:margin,-webkit-transform;-webkit-transition-property:margin,-webkit-transform;-webkit-transition-property:margin,transform;transition-property:margin,transform;-webkit-transition-property:margin,-webkit-transform,-webkit-transform;-webkit-transition-property:margin,transform,-webkit-transform;transition-property:margin,transform,-webkit-transform;-webkit-transition-duration:300ms;-webkit-transition-duration:300ms;transition-duration:300ms;}.navicon.jsx-261490153:after{margin-top:10px;}.navicon.jsx-261490153:before,.navicon.jsx-261490153:after{content:'';display:block;width:30px;height:5px;position:absolute;background:#000;-webkit-transition-property:margin,-webkit-transform;-webkit-transition-property:margin,-webkit-transform;-webkit-transition-property:margin,-webkit-transform;transition-property:margin,-webkit-transform;-webkit-transition-property:margin,-webkit-transform;-webkit-transition-property:margin,transform;transition-property:margin,transform;-webkit-transition-property:margin,-webkit-transform,-webkit-transform;-webkit-transition-property:margin,transform,-webkit-transform;transition-property:margin,transform,-webkit-transform;-webkit-transition-duration:300ms;-webkit-transition-duration:300ms;transition-duration:300ms;}#starlist.jsx-261490153{-webkit-transition:0.3s;transition:0.3s;overflow:hidden;}#starlist.jsx-261490153 li.jsx-261490153{display:block;width:50%;clear:both;border-top:#eaeaea 1px solid;padding:0;background:#FFF;font-size:16px;text-align:center;}#starlist.jsx-261490153 li.jsx-261490153 a.jsx-261490153{-webkit-text-decoration:none;text-decoration:none;color:#555;}#starlist.jsx-261490153 li.jsx-261490153:last-child{padding-bottom:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0aW4vRGVza3RvcC9wcml2YXRlL2Jsb2ctbW9iYmlsZS9jb21wb25lbnRzL25hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRW9CLEFBR2lDLEFBSUEsQUFZTCxBQUtGLEFBUUssQUFHSCxBQUtHLEFBTUosQUFRSyxBQUdOLEFBY0ssQUFHTCxBQWNHLEFBSUYsQUFVTyxBQUlDLFdBakZOLEFBaUNBLEFBaUJBLEVBdkRrQixBQWdCQyxDQVdqQixBQThDUixFQTVEWixBQXVDQSxDQWpCQSxDQW5EWSxBQUlDLEFBaUNHLEVBa0VoQixJQWJhLENBcEVFLEFBaUNBLEFBaUJBLENBdkVmLENBSW1CLEtBaUNULEFBTUcsR0ErQ2tCLENBcEVoQixBQWlDQSxBQWlCQSxJQWxDSCxBQThDTSxFQS9FRixDQXVDSCxFQTVCZSxDQWdCQyxDQVRQLEFBaUNBLEFBaUJBLEdBbEN0QixBQTJEYSxJQTVGRyxBQXVDUSxFQXdDeEIsS0FjQSxHQVJZLENBbkVRLEFBaUNBLEFBaUJBLENBbkVBLFFBcUZGLEVBOUNBLEtBckJsQixBQWlDMEQsQUFpQkEsQ0FuRXhCLFFBcUZqQixFQTlDakIsYUErQ29CLE9BckZXLFdBc0YvQixNQTlFQSxJQWdCQSxDQTBCa0QsQUFpQkEsS0FsRXhCLG9EQUNhLG1DQUN2QywyREFnRDBDLEFBaUJBLHVJQWhCbUIsQUFpQkEsNkxBaEJ2QixBQWlCQSxrQ0FoQlIsQUFpQkEsNERBaEI5QixBQWlCQSIsImZpbGUiOiIvVXNlcnMvanVzdGluL0Rlc2t0b3AvcHJpdmF0ZS9ibG9nLW1vYmJpbGUvY29tcG9uZW50cy9uYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4vbGF5b3V0J1xuaW1wb3J0IHRwcyBmcm9tICcuLi91dGlscy9ibG9nX3R5cGVzJ1xuLy8gaW1wb3J0IGJhbm5lciBmcm9tICcuLi9pbWFnZXMvYmFubmVyJ1xuaW1wb3J0IEV2ZW50IGZyb20gJy4uL3V0aWxzL2VtaXRlcic7XG52YXIgdGltZXIgPSBudWxsO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxLHF1ZXJ5LGpzb25QYWdlUmVzIH0pIHtcbiAgICBjb25zdCB1c2VyQWdlbnQgPSByZXEgPyByZXEuaGVhZGVyc1sndXNlci1hZ2VudCddIDogbmF2aWdhdG9yLnVzZXJBZ2VudFxuICAgIHJldHVybiB7IHVzZXJBZ2VudCxxdWVyeSxqc29uUGFnZVJlcyB9XG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICAgIHBhdGg6XCJcIixcbiAgICAgIGhlYWRlclRvcDowLFxuICAgICAgb3Blbm5hdjpmYWxzZVxuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgIHZhciBwPTAsdD0wOyAgXG4gICAgICBkb2N1bWVudC5vbnNjcm9sbCA9ICgpID0+IHtcbiAgICAgICAgdmFyIHAgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDsgICAgICBcbiAgICAgICAgaWYodDw9cCAmJiBwID4gMCl7Ly/kuIvmu5ogXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aGVhZGVyVG9wOi02MSxvcGVubmF2OmZhbHNlfSlcbiAgICAgICAgfWVsc2V7Ly/kuIrmu5ogIFxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2hlYWRlclRvcDowLG9wZW5uYXY6ZmFsc2V9KVxuICAgICAgICB9ICBcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe3QgPSBwO30sMCk7ICAgICAgICAgICBcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoe3BhdGg6bG9jYXRpb24ucGF0aG5hbWV9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtwYXRoLGhlYWRlclRvcCxvcGVubmF2fSA9IHRoaXMuc3RhdGVcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLGhlaWdodDo2MSx0cmFuc2l0aW9uOlwiMC4zc1wiLFdlYmtpdFRyYW5zaXRpb246XCIwLjNzXCIsYmFja2dyb3VuZENvbG9yOlwicmdiYSgyNTUsMjU1LDI1NSwwLjkpXCIscG9zaXRpb246XCJmaXhlZFwiLGJvcmRlckJvdHRvbTpcIjFweCBzb2xpZCAjZGRkXCIsYm94U2hhZG93OlwiMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA0KVwiLHpJbmRleDo5OTksdG9wOmhlYWRlclRvcCxsZWZ0OjB9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIsbWFyZ2luOlwiMCBhdXRvXCIsaGVpZ2h0OlwiMTAwJVwiLGxpbmVIZWlnaHQ6XCI2MHB4XCIsZm9udFNpemU6MjJ9fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIix0ZXh0QWxpZ246XCJjZW50ZXJcIn19PlNpbXBsZTwvZGl2PlxuICAgICAgICAgICAgPGgyIGlkPVwibW5hdmhcIiBvbkNsaWNrPXsoKT0+e1xuICAgICAgICAgICAgICBvcGVuID0gIW9wZW5uYXZcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b3Blbm5hdjpvcGVufSlcbiAgICAgICAgICAgIH19IGNsYXNzTmFtZT17b3Blbm5hdiA/IFwib3BlblwiOlwiXCJ9PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZpY29uXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9oMj4gICAgICAgIFxuICAgICAgICAgICAgPHVsIGlkPVwic3Rhcmxpc3RcIiBzdHlsZT17e2JhY2tncm91bmQ6IFwicmdiYSgwLDAsMCwuNSlcIix3aWR0aDogb3Blbm5hdiA/IFwiMTAwJVwiOjB9fT5cbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvXCIgc3R5bGU9e3BhdGggPT0gXCIvXCIgPyB7Y29sb3I6XCIjZjY1YThhXCJ9Ont9fT7pppbpobU8L2E+PC9saT5cbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvYXJ0aWNsZVwiIHN0eWxlPXtwYXRoID09IFwiL2FydGljbGVcIiB8fCBwYXRoID09IFwiL2RldGFpbFwiID8ge2NvbG9yOlwiI2Y2NWE4YVwifTp7fX0+5paH56ugPC9hPjwvbGk+IFxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9tZXNzYWdlXCIgc3R5bGU9e3BhdGggPT0gXCIvbWVzc2FnZVwiID8ge2NvbG9yOlwiI2Y2NWE4YVwifTp7fX0+55WZ6KiAPC9hPjwvbGk+IFxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9tZVwiIHN0eWxlPXtwYXRoID09IFwiL21lXCIgPyB7Y29sb3I6XCIjZjY1YThhXCJ9Ont9fT7lhbPkuo48L2E+PC9saT4gXG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hib3hcIj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cInNlYXJjaF9iYXJcIiBjbGFzc05hbWU9XCJzZWFyY2hfYmFyXCI+XG4gICAgICAgICAgICAgICAgPGZvcm0gaWQ9XCJzZWFyY2hmb3JtXCIgYWN0aW9uPVwiL2Uvc2VhcmNoL2luZGV4LnBocFwiIG1ldGhvZD1cInBvc3RcIiBuYW1lPVwic2VhcmNoZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0XCIgcGxhY2Vob2xkZXI9XCLmg7PmkJzngrnku4DkuYjlkaIuLlwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImtleWJvYXJkXCIgaWQ9XCJrZXlib2FyZFwiIC8+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJzaG93XCIgdmFsdWU9XCJ0aXRsZVwiIC8+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ0ZW1waWRcIiB2YWx1ZT1cIjFcIiAvPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwidGJuYW1lXCIgdmFsdWU9XCJuZXdzXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIlN1Ym1pdFwiIHZhbHVlPVwi5pCc57SiXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNlYXJjaF9pY29cIj4gPHNwYW4+PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6NzV9fT48L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5zZWFyY2hib3gge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VhcmNoX2JhciB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgd2lkdGg6IDAlO1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDYwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIDAuM3M7XG4gICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogd2lkdGggMC4zcztcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcztcbiAgICAgICAgICAgICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgfVxuICAgICAgICAgIC5vcGVuIC5uYXZpY29uOmJlZm9yZSB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5vcGVuIC5uYXZpY29uOmJlZm9yZSwgLm9wZW4gLm5hdmljb246YWZ0ZXIge1xuICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAub3BlbiAubmF2aWNvbiB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5vcGVuIC5uYXZpY29uOmFmdGVyIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjbW5hdmh7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHRvcDogOHB4O1xuICAgICAgICAgICAgbGVmdDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdmljb24ge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXZpY29uOmJlZm9yZSB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2aWNvbjpiZWZvcmUsIC5uYXZpY29uOmFmdGVyIHtcbiAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBtYXJnaW4sIC13ZWJraXQtdHJhbnNmb3JtO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBtYXJnaW4sIC13ZWJraXQtdHJhbnNmb3JtO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBtYXJnaW4sIHRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbWFyZ2luLCB0cmFuc2Zvcm0sIC13ZWJraXQtdHJhbnNmb3JtO1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdmljb246YWZ0ZXIge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2aWNvbjpiZWZvcmUsIC5uYXZpY29uOmFmdGVyIHtcbiAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBtYXJnaW4sIC13ZWJraXQtdHJhbnNmb3JtO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBtYXJnaW4sIC13ZWJraXQtdHJhbnNmb3JtO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBtYXJnaW4sIHRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbWFyZ2luLCB0cmFuc2Zvcm0sIC13ZWJraXQtdHJhbnNmb3JtO1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcbiAgICAgICAgICB9XG4gICAgICAgICAgI3N0YXJsaXN0e1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgfVxuICAgICAgICAgICNzdGFybGlzdCBsaSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBjbGVhcjogYm90aDtcbiAgICAgICAgICAgIGJvcmRlci10b3A6ICNlYWVhZWEgMXB4IHNvbGlkO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgICNzdGFybGlzdCBsaSBhe1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6ICM1NTU7XG4gICAgICAgICAgfVxuICAgICAgICAgICNzdGFybGlzdCBsaTpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj4gIFxuICAgIClcbiAgfVxufVxuXG5cbiJdfQ== */\n/*@ sourceURL=/Users/justin/Desktop/private/blog-mobbile/components/nav.js */"));
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
//# sourceMappingURL=article.js.5aa9b259601368ee7433.hot-update.js.map