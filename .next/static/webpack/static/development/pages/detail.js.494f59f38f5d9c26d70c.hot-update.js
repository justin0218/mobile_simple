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
      headerTop: 0
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
      var _this$state = this.state,
          path = _this$state.path,
          headerTop = _this$state.headerTop;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-1099374405",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
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
        className: "jsx-1099374405",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
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
        className: "jsx-1099374405",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          width: "100%",
          textAlign: "center"
        },
        className: "jsx-1099374405",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Simple"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
        id: "mnavh",
        className: "jsx-1099374405" + " " + "open",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-1099374405" + " " + "navicon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          height: 75
        },
        className: "jsx-1099374405",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "1099374405",
        __self: this
      }, ".open.jsx-1099374405 .navicon.jsx-1099374405:before{margin-top:0;-webkit-transform:rotate(45deg);-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.open.jsx-1099374405 .navicon.jsx-1099374405:before,.open.jsx-1099374405 .navicon.jsx-1099374405:after{content:'';display:block;width:30px;height:5px;position:absolute;background:#000;}.open.jsx-1099374405 .navicon.jsx-1099374405:after{margin-top:0;-webkit-transform:rotate(-45deg);-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}#mnavh.jsx-1099374405{position:absolute;display:block;top:8px;left:10px;}.navicon.jsx-1099374405{display:block;position:relative;width:30px;height:5px;background-color:#000;margin-top:20px;}.navicon.jsx-1099374405:before{margin-top:-10px;}.navicon.jsx-1099374405:before,.navicon.jsx-1099374405:after{content:'';display:block;width:30px;height:5px;position:absolute;background:#000;-webkit-transition-property:margin,-webkit-transform;-webkit-transition-property:margin,-webkit-transform;-webkit-transition-property:margin,-webkit-transform;transition-property:margin,-webkit-transform;-webkit-transition-property:margin,-webkit-transform;-webkit-transition-property:margin,transform;transition-property:margin,transform;-webkit-transition-property:margin,-webkit-transform,-webkit-transform;-webkit-transition-property:margin,transform,-webkit-transform;transition-property:margin,transform,-webkit-transform;-webkit-transition-duration:300ms;-webkit-transition-duration:300ms;transition-duration:300ms;}.navicon.jsx-1099374405:after{margin-top:10px;}.navicon.jsx-1099374405:before,.navicon.jsx-1099374405:after{content:'';display:block;width:30px;height:5px;position:absolute;background:#000;-webkit-transition-property:margin,-webkit-transform;-webkit-transition-property:margin,-webkit-transform;-webkit-transition-property:margin,-webkit-transform;transition-property:margin,-webkit-transform;-webkit-transition-property:margin,-webkit-transform;-webkit-transition-property:margin,transform;transition-property:margin,transform;-webkit-transition-property:margin,-webkit-transform,-webkit-transform;-webkit-transition-property:margin,transform,-webkit-transform;transition-property:margin,transform,-webkit-transform;-webkit-transition-duration:300ms;-webkit-transition-duration:300ms;transition-duration:300ms;}#starlist.jsx-1099374405 li.jsx-1099374405{float:left;display:block;padding:0 0 0 40px;font-size:16px;}#starlist.jsx-1099374405 li.jsx-1099374405 a.jsx-1099374405{-webkit-text-decoration:none;text-decoration:none;color:#555;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0aW4vRGVza3RvcC9wcml2YXRlL2Jsb2ctbW9iYmlsZS9jb21wb25lbnRzL25hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RG9CLEFBRzRCLEFBS0YsQUFRRSxBQUtHLEFBTUosQUFRSyxBQUdOLEFBY0ssQUFHTCxBQWNBLEFBTVEsV0FsRUwsQUE4QkEsQUFpQkEsQUFjQSxFQWxFa0IsQUFhQyxDQVdqQixFQXlCcEIsQ0FqQkEsQ0FkZ0IsT0FaRCxBQThCQSxBQWlCQSxBQWNRLE9BaERiLEFBTUcsSUFsQkUsQUE4QkEsQUFpQkEsSUFsQ0gsR0FNQyxDQTBDTSxDQW5FUyxDQWFDLENBTlAsQUE4QkEsQUFpQkEsR0FsQ3RCLEFBbURhLElBN0NXLEtBMEN4QixFQUlBLElBaEVvQixBQThCQSxBQWlCQSxXQTVCRixLQWxCbEIsQUE4QjBELEFBaUJBLFdBNUIxRCxxQ0EzQkEsSUFhQSxDQTBCa0QsQUFpQkEsdUpBaEJSLEFBaUJBLHVJQWhCbUIsQUFpQkEsNkxBaEJ2QixBQWlCQSxrQ0FoQlIsQUFpQkEsNERBaEI5QixBQWlCQSIsImZpbGUiOiIvVXNlcnMvanVzdGluL0Rlc2t0b3AvcHJpdmF0ZS9ibG9nLW1vYmJpbGUvY29tcG9uZW50cy9uYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4vbGF5b3V0J1xuaW1wb3J0IHRwcyBmcm9tICcuLi91dGlscy9ibG9nX3R5cGVzJ1xuLy8gaW1wb3J0IGJhbm5lciBmcm9tICcuLi9pbWFnZXMvYmFubmVyJ1xuaW1wb3J0IEV2ZW50IGZyb20gJy4uL3V0aWxzL2VtaXRlcic7XG52YXIgdGltZXIgPSBudWxsO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxLHF1ZXJ5LGpzb25QYWdlUmVzIH0pIHtcbiAgICBjb25zdCB1c2VyQWdlbnQgPSByZXEgPyByZXEuaGVhZGVyc1sndXNlci1hZ2VudCddIDogbmF2aWdhdG9yLnVzZXJBZ2VudFxuICAgIHJldHVybiB7IHVzZXJBZ2VudCxxdWVyeSxqc29uUGFnZVJlcyB9XG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICAgIHBhdGg6XCJcIixcbiAgICAgIGhlYWRlclRvcDowXG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgZG9jdW1lbnQub25zY3JvbGwgPSAoKSA9PiB7XG4gICAgICAgICAgdmFyIHNjcm9sbFRvcCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgICAgICAgIGlmIChzY3JvbGxUb3AgPiA2MiArIDIwKXtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aGVhZGVyVG9wOi02MX0pXG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2hlYWRlclRvcDowfSlcbiAgICAgICAgICB9ICAgICAgICAgIFxuICAgICAgfVxuICAgICAgLy9kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRcIikuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcInNoYWRvd25vbmVcIilcbiAgICAgIC8vfSwgMTAwMCk7XG5cbiAgICAgIFxuICAgICAgLy8gbGV0IHJpZ2h0SGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInJpZ2h0X2JveFwiKVswXS5jbGllbnRIZWlnaHQ7XG4gICAgICAvLyBpZiAoc2Nyb2xsVG9wID4gNjIgKyAyMCl7XG4gICAgICAgIFxuICAgICAgLy8gfVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7cGF0aDpsb2NhdGlvbi5wYXRobmFtZX0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3BhdGgsaGVhZGVyVG9wfSA9IHRoaXMuc3RhdGVcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLGhlaWdodDo2MSx0cmFuc2l0aW9uOlwiMC4zc1wiLFdlYmtpdFRyYW5zaXRpb246XCIwLjNzXCIsYmFja2dyb3VuZENvbG9yOlwicmdiYSgyNTUsMjU1LDI1NSwwLjkpXCIscG9zaXRpb246XCJmaXhlZFwiLGJvcmRlckJvdHRvbTpcIjFweCBzb2xpZCAjZGRkXCIsYm94U2hhZG93OlwiMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA0KVwiLHpJbmRleDo5OTksdG9wOmhlYWRlclRvcCxsZWZ0OjB9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIsbWFyZ2luOlwiMCBhdXRvXCIsaGVpZ2h0OlwiMTAwJVwiLGxpbmVIZWlnaHQ6XCI2MHB4XCIsZm9udFNpemU6MjJ9fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIix0ZXh0QWxpZ246XCJjZW50ZXJcIn19PlNpbXBsZTwvZGl2PlxuICAgICAgICAgICAgPGgyIGlkPVwibW5hdmhcIiBjbGFzc05hbWU9XCJvcGVuXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmljb25cIj48L3NwYW4+XG4gICAgICAgICAgICA8L2gyPiAgICAgICAgXG4gICAgICAgICAgICB7LyogPHVsIGlkPVwic3Rhcmxpc3RcIiBzdHlsZT17e2Zsb2F0OlwicmlnaHRcIixtYXJnaW46MH19PlxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9cIiBzdHlsZT17cGF0aCA9PSBcIi9cIiA/IHtjb2xvcjpcIiNmNjVhOGFcIn06e319PummlumhtTwvYT48L2xpPlxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9hcnRpY2xlXCIgc3R5bGU9e3BhdGggPT0gXCIvYXJ0aWNsZVwiIHx8IHBhdGggPT0gXCIvZGV0YWlsXCIgPyB7Y29sb3I6XCIjZjY1YThhXCJ9Ont9fT7mlofnq6A8L2E+PC9saT4gXG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL21lc3NhZ2VcIiBzdHlsZT17cGF0aCA9PSBcIi9tZXNzYWdlXCIgPyB7Y29sb3I6XCIjZjY1YThhXCJ9Ont9fT7nlZnoqIA8L2E+PC9saT4gXG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL21lXCIgc3R5bGU9e3BhdGggPT0gXCIvbWVcIiA/IHtjb2xvcjpcIiNmNjVhOGFcIn06e319PuWFs+S6jjwvYT48L2xpPiBcbiAgICAgICAgICAgIDwvdWw+ICovfVxuICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6NzV9fT48L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5vcGVuIC5uYXZpY29uOmJlZm9yZSB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5vcGVuIC5uYXZpY29uOmJlZm9yZSwgLm9wZW4gLm5hdmljb246YWZ0ZXIge1xuICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAub3BlbiAubmF2aWNvbjphZnRlciB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgI21uYXZoe1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB0b3A6IDhweDtcbiAgICAgICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXZpY29uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2aWNvbjpiZWZvcmUge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdmljb246YmVmb3JlLCAubmF2aWNvbjphZnRlciB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogbWFyZ2luLCAtd2Via2l0LXRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbWFyZ2luLCAtd2Via2l0LXRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbWFyZ2luLCB0cmFuc2Zvcm07XG4gICAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IG1hcmdpbiwgdHJhbnNmb3JtLCAtd2Via2l0LXRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXZpY29uOmFmdGVyIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdmljb246YmVmb3JlLCAubmF2aWNvbjphZnRlciB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogbWFyZ2luLCAtd2Via2l0LXRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbWFyZ2luLCAtd2Via2l0LXRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbWFyZ2luLCB0cmFuc2Zvcm07XG4gICAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IG1hcmdpbiwgdHJhbnNmb3JtLCAtd2Via2l0LXRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XG4gICAgICAgICAgfVxuICAgICAgICAgICNzdGFybGlzdCBsaSB7XG4gICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAwIDAgNDBweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAjc3Rhcmxpc3QgbGkgYXtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiAjNTU1O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+ICBcbiAgICApXG4gIH1cbn1cblxuXG4iXX0= */\n/*@ sourceURL=/Users/justin/Desktop/private/blog-mobbile/components/nav.js */"));
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
//# sourceMappingURL=detail.js.494f59f38f5d9c26d70c.hot-update.js.map