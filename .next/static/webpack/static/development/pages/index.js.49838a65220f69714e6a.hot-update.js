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

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                document.onscroll = function () {
                  var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

                  if (scrollTop > 62 + 20) {
                    _this2.setState({
                      headerTop: -61
                    });
                  } else {
                    _this2.setState({
                      headerTop: 0
                    });
                  }
                }; //document.getElementById("t").setAttribute("class","shadownone")
                //}, 1000);
                // let rightHeight = document.getElementsByClassName("right_box")[0].clientHeight;
                // if (scrollTop > 62 + 20){
                // }


                this.setState({
                  path: location.pathname
                });

              case 2:
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
        className: "jsx-1399020846",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
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
        className: "jsx-1399020846",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
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
        className: "jsx-1399020846",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          width: "100%",
          textAlign: "center"
        },
        className: "jsx-1399020846",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
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
        className: "jsx-1399020846" + " " + ((opennav ? "open" : "") || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-1399020846" + " " + "navicon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
        id: "starlist",
        className: "jsx-1399020846",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-1399020846",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/",
        style: path == "/" ? {
          color: "#f65a8a"
        } : {},
        className: "jsx-1399020846",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "\u9996\u9875")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-1399020846",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/article",
        style: path == "/article" || path == "/detail" ? {
          color: "#f65a8a"
        } : {},
        className: "jsx-1399020846",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "\u6587\u7AE0")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-1399020846",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/message",
        style: path == "/message" ? {
          color: "#f65a8a"
        } : {},
        className: "jsx-1399020846",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "\u7559\u8A00")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-1399020846",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/me",
        style: path == "/me" ? {
          color: "#f65a8a"
        } : {},
        className: "jsx-1399020846",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "\u5173\u4E8E"))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          height: 75
        },
        className: "jsx-1399020846",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "1399020846",
        __self: this
      }, ".open.jsx-1399020846 .navicon.jsx-1399020846:before{margin-top:0;-webkit-transform:rotate(45deg);-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.open.jsx-1399020846 .navicon.jsx-1399020846:before,.open.jsx-1399020846 .navicon.jsx-1399020846:after{content:'';display:block;width:30px;height:5px;position:absolute;background:#000;}.open.jsx-1399020846 .navicon.jsx-1399020846{background:none;}.open.jsx-1399020846 .navicon.jsx-1399020846:after{margin-top:0;-webkit-transform:rotate(-45deg);-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}#mnavh.jsx-1399020846{position:absolute;display:block;top:8px;left:10px;}.navicon.jsx-1399020846{display:block;position:relative;width:30px;height:5px;background-color:#000;margin-top:20px;}.navicon.jsx-1399020846:before{margin-top:-10px;}.navicon.jsx-1399020846:before,.navicon.jsx-1399020846:after{content:'';display:block;width:30px;height:5px;position:absolute;background:#000;-webkit-transition-property:margin,-webkit-transform;-webkit-transition-property:margin,-webkit-transform;-webkit-transition-property:margin,-webkit-transform;transition-property:margin,-webkit-transform;-webkit-transition-property:margin,-webkit-transform;-webkit-transition-property:margin,transform;transition-property:margin,transform;-webkit-transition-property:margin,-webkit-transform,-webkit-transform;-webkit-transition-property:margin,transform,-webkit-transform;transition-property:margin,transform,-webkit-transform;-webkit-transition-duration:300ms;-webkit-transition-duration:300ms;transition-duration:300ms;}.navicon.jsx-1399020846:after{margin-top:10px;}.navicon.jsx-1399020846:before,.navicon.jsx-1399020846:after{content:'';display:block;width:30px;height:5px;position:absolute;background:#000;-webkit-transition-property:margin,-webkit-transform;-webkit-transition-property:margin,-webkit-transform;-webkit-transition-property:margin,-webkit-transform;transition-property:margin,-webkit-transform;-webkit-transition-property:margin,-webkit-transform;-webkit-transition-property:margin,transform;transition-property:margin,transform;-webkit-transition-property:margin,-webkit-transform,-webkit-transform;-webkit-transition-property:margin,transform,-webkit-transform;transition-property:margin,transform,-webkit-transform;-webkit-transition-duration:300ms;-webkit-transition-duration:300ms;transition-duration:300ms;}#starlist.jsx-1399020846 li.jsx-1399020846{display:block;width:50%;clear:both;border-top:#eaeaea 1px solid;padding:0;background:#FFF;}#starlist.jsx-1399020846 li.jsx-1399020846 a.jsx-1399020846{-webkit-text-decoration:none;text-decoration:none;color:#555;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0aW4vRGVza3RvcC9wcml2YXRlL2Jsb2ctbW9iYmlsZS9jb21wb25lbnRzL25hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRG9CLEFBRzRCLEFBS0YsQUFRSyxBQUdILEFBS0csQUFNSixBQVFLLEFBR04sQUFjSyxBQUdMLEFBY0MsQUFRTyxXQXZFTCxBQWlDQSxBQWlCQSxFQXZEa0IsQUFnQkMsQ0FXakIsQUEwQ1IsRUF4RFosQUF1Q0EsQ0FqQkEsQ0FkZ0IsTUFpREgsQ0FoRUUsQUFpQ0EsQUFpQkEsT0FsQ0wsQUFNRyxHQTJDa0IsQ0FoRWhCLEFBaUNBLEFBaUJBLElBbENILEdBTUMsRUE1QmUsQ0FnQkMsQ0FUUCxBQWlDQSxBQWlCQSxHQWxDdEIsQUFxRGEsSUEvQ1csT0FnRHhCLEdBTlksQ0EvRFEsQUFpQ0EsQUFpQkEsU0FjRixFQTFDQSxLQXJCbEIsQUFpQzBELEFBaUJBLFNBYzFELEVBMUNBLHFDQTlCQSxJQWdCQSxDQTBCa0QsQUFpQkEsdUpBaEJSLEFBaUJBLHVJQWhCbUIsQUFpQkEsNkxBaEJ2QixBQWlCQSxrQ0FoQlIsQUFpQkEsNERBaEI5QixBQWlCQSIsImZpbGUiOiIvVXNlcnMvanVzdGluL0Rlc2t0b3AvcHJpdmF0ZS9ibG9nLW1vYmJpbGUvY29tcG9uZW50cy9uYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4vbGF5b3V0J1xuaW1wb3J0IHRwcyBmcm9tICcuLi91dGlscy9ibG9nX3R5cGVzJ1xuLy8gaW1wb3J0IGJhbm5lciBmcm9tICcuLi9pbWFnZXMvYmFubmVyJ1xuaW1wb3J0IEV2ZW50IGZyb20gJy4uL3V0aWxzL2VtaXRlcic7XG52YXIgdGltZXIgPSBudWxsO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxLHF1ZXJ5LGpzb25QYWdlUmVzIH0pIHtcbiAgICBjb25zdCB1c2VyQWdlbnQgPSByZXEgPyByZXEuaGVhZGVyc1sndXNlci1hZ2VudCddIDogbmF2aWdhdG9yLnVzZXJBZ2VudFxuICAgIHJldHVybiB7IHVzZXJBZ2VudCxxdWVyeSxqc29uUGFnZVJlcyB9XG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICAgIHBhdGg6XCJcIixcbiAgICAgIGhlYWRlclRvcDowLFxuICAgICAgb3Blbm5hdjpmYWxzZVxuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgIGRvY3VtZW50Lm9uc2Nyb2xsID0gKCkgPT4ge1xuICAgICAgICAgIHZhciBzY3JvbGxUb3AgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICAgICAgICBpZiAoc2Nyb2xsVG9wID4gNjIgKyAyMCl7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2hlYWRlclRvcDotNjF9KVxuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtoZWFkZXJUb3A6MH0pXG4gICAgICAgICAgfSAgICAgICAgICBcbiAgICAgIH1cbiAgICAgIC8vZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0XCIpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJzaGFkb3dub25lXCIpXG4gICAgICAvL30sIDEwMDApO1xuXG4gICAgICBcbiAgICAgIC8vIGxldCByaWdodEhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJyaWdodF9ib3hcIilbMF0uY2xpZW50SGVpZ2h0O1xuICAgICAgLy8gaWYgKHNjcm9sbFRvcCA+IDYyICsgMjApe1xuICAgICAgICBcbiAgICAgIC8vIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoe3BhdGg6bG9jYXRpb24ucGF0aG5hbWV9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtwYXRoLGhlYWRlclRvcCxvcGVubmF2fSA9IHRoaXMuc3RhdGVcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLGhlaWdodDo2MSx0cmFuc2l0aW9uOlwiMC4zc1wiLFdlYmtpdFRyYW5zaXRpb246XCIwLjNzXCIsYmFja2dyb3VuZENvbG9yOlwicmdiYSgyNTUsMjU1LDI1NSwwLjkpXCIscG9zaXRpb246XCJmaXhlZFwiLGJvcmRlckJvdHRvbTpcIjFweCBzb2xpZCAjZGRkXCIsYm94U2hhZG93OlwiMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA0KVwiLHpJbmRleDo5OTksdG9wOmhlYWRlclRvcCxsZWZ0OjB9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIsbWFyZ2luOlwiMCBhdXRvXCIsaGVpZ2h0OlwiMTAwJVwiLGxpbmVIZWlnaHQ6XCI2MHB4XCIsZm9udFNpemU6MjJ9fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIix0ZXh0QWxpZ246XCJjZW50ZXJcIn19PlNpbXBsZTwvZGl2PlxuICAgICAgICAgICAgPGgyIGlkPVwibW5hdmhcIiBvbkNsaWNrPXsoKT0+e1xuICAgICAgICAgICAgICBvcGVuID0gIW9wZW5uYXZcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b3Blbm5hdjpvcGVufSlcbiAgICAgICAgICAgIH19IGNsYXNzTmFtZT17b3Blbm5hdiA/IFwib3BlblwiOlwiXCJ9PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZpY29uXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9oMj4gICAgICAgIFxuICAgICAgICAgICAgPHVsIGlkPVwic3Rhcmxpc3RcIj5cbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvXCIgc3R5bGU9e3BhdGggPT0gXCIvXCIgPyB7Y29sb3I6XCIjZjY1YThhXCJ9Ont9fT7pppbpobU8L2E+PC9saT5cbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvYXJ0aWNsZVwiIHN0eWxlPXtwYXRoID09IFwiL2FydGljbGVcIiB8fCBwYXRoID09IFwiL2RldGFpbFwiID8ge2NvbG9yOlwiI2Y2NWE4YVwifTp7fX0+5paH56ugPC9hPjwvbGk+IFxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9tZXNzYWdlXCIgc3R5bGU9e3BhdGggPT0gXCIvbWVzc2FnZVwiID8ge2NvbG9yOlwiI2Y2NWE4YVwifTp7fX0+55WZ6KiAPC9hPjwvbGk+IFxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9tZVwiIHN0eWxlPXtwYXRoID09IFwiL21lXCIgPyB7Y29sb3I6XCIjZjY1YThhXCJ9Ont9fT7lhbPkuo48L2E+PC9saT4gXG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6NzV9fT48L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5vcGVuIC5uYXZpY29uOmJlZm9yZSB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5vcGVuIC5uYXZpY29uOmJlZm9yZSwgLm9wZW4gLm5hdmljb246YWZ0ZXIge1xuICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAub3BlbiAubmF2aWNvbiB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5vcGVuIC5uYXZpY29uOmFmdGVyIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjbW5hdmh7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHRvcDogOHB4O1xuICAgICAgICAgICAgbGVmdDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdmljb24ge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXZpY29uOmJlZm9yZSB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2aWNvbjpiZWZvcmUsIC5uYXZpY29uOmFmdGVyIHtcbiAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBtYXJnaW4sIC13ZWJraXQtdHJhbnNmb3JtO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBtYXJnaW4sIC13ZWJraXQtdHJhbnNmb3JtO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBtYXJnaW4sIHRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbWFyZ2luLCB0cmFuc2Zvcm0sIC13ZWJraXQtdHJhbnNmb3JtO1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdmljb246YWZ0ZXIge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2aWNvbjpiZWZvcmUsIC5uYXZpY29uOmFmdGVyIHtcbiAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBtYXJnaW4sIC13ZWJraXQtdHJhbnNmb3JtO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBtYXJnaW4sIC13ZWJraXQtdHJhbnNmb3JtO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBtYXJnaW4sIHRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbWFyZ2luLCB0cmFuc2Zvcm0sIC13ZWJraXQtdHJhbnNmb3JtO1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcbiAgICAgICAgICB9XG4gICAgICAgICAgI3N0YXJsaXN0IGxpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogI2VhZWFlYSAxcHggc29saWQ7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICAgICAgICB9XG4gICAgICAgICAgI3N0YXJsaXN0IGxpIGF7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogIzU1NTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PiAgXG4gICAgKVxuICB9XG59XG5cblxuIl19 */\n/*@ sourceURL=/Users/justin/Desktop/private/blog-mobbile/components/nav.js */"));
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
//# sourceMappingURL=index.js.49838a65220f69714e6a.hot-update.js.map