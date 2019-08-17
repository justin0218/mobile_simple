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
        className: "jsx-801389261",
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
        className: "jsx-801389261",
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
        className: "jsx-801389261",
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
        className: "jsx-801389261",
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
        className: "jsx-801389261" + " " + ((opennav ? "open" : "") || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-801389261" + " " + "navicon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
        id: "starlist",
        className: "jsx-801389261",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-801389261",
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
        className: "jsx-801389261",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "\u9996\u9875")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-801389261",
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
        className: "jsx-801389261",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "\u6587\u7AE0")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-801389261",
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
        className: "jsx-801389261",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "\u7559\u8A00")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-801389261",
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
        className: "jsx-801389261",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "\u5173\u4E8E"))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          height: 75
        },
        className: "jsx-801389261",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "801389261",
        __self: this
      }, ".open.jsx-801389261 .navicon.jsx-801389261:before{margin-top:0;-webkit-transform:rotate(45deg);-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.open.jsx-801389261 .navicon.jsx-801389261:before,.open.jsx-801389261 .navicon.jsx-801389261:after{content:'';display:block;width:30px;height:5px;position:absolute;background:#000;}.open.jsx-801389261 .navicon.jsx-801389261{background:none;}.open.jsx-801389261 .navicon.jsx-801389261:after{margin-top:0;-webkit-transform:rotate(-45deg);-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}#mnavh.jsx-801389261{position:absolute;display:block;top:8px;left:10px;}.navicon.jsx-801389261{display:block;position:relative;width:30px;height:5px;background-color:#000;margin-top:20px;}.navicon.jsx-801389261:before{margin-top:-10px;}.navicon.jsx-801389261:before,.navicon.jsx-801389261:after{content:'';display:block;width:30px;height:5px;position:absolute;background:#000;-webkit-transition-property:margin,-webkit-transform;-webkit-transition-property:margin,-webkit-transform;-webkit-transition-property:margin,-webkit-transform;transition-property:margin,-webkit-transform;-webkit-transition-property:margin,-webkit-transform;-webkit-transition-property:margin,transform;transition-property:margin,transform;-webkit-transition-property:margin,-webkit-transform,-webkit-transform;-webkit-transition-property:margin,transform,-webkit-transform;transition-property:margin,transform,-webkit-transform;-webkit-transition-duration:300ms;-webkit-transition-duration:300ms;transition-duration:300ms;}.navicon.jsx-801389261:after{margin-top:10px;}.navicon.jsx-801389261:before,.navicon.jsx-801389261:after{content:'';display:block;width:30px;height:5px;position:absolute;background:#000;-webkit-transition-property:margin,-webkit-transform;-webkit-transition-property:margin,-webkit-transform;-webkit-transition-property:margin,-webkit-transform;transition-property:margin,-webkit-transform;-webkit-transition-property:margin,-webkit-transform;-webkit-transition-property:margin,transform;transition-property:margin,transform;-webkit-transition-property:margin,-webkit-transform,-webkit-transform;-webkit-transition-property:margin,transform,-webkit-transform;transition-property:margin,transform,-webkit-transform;-webkit-transition-duration:300ms;-webkit-transition-duration:300ms;transition-duration:300ms;}#starlist.jsx-801389261 li.jsx-801389261{display:block;width:50%;clear:both;border-top:#eaeaea 1px solid;padding:0;background:#FFF;font-size:16px;}#starlist.jsx-801389261 li.jsx-801389261 a.jsx-801389261{-webkit-text-decoration:none;text-decoration:none;color:#555;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0aW4vRGVza3RvcC9wcml2YXRlL2Jsb2ctbW9iYmlsZS9jb21wb25lbnRzL25hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRG9CLEFBRzRCLEFBS0YsQUFRSyxBQUdILEFBS0csQUFNSixBQVFLLEFBR04sQUFjSyxBQUdMLEFBY0MsQUFTTyxXQXhFTCxBQWlDQSxBQWlCQSxFQXZEa0IsQUFnQkMsQ0FXakIsQUEwQ1IsRUF4RFosQUF1Q0EsQ0FqQkEsQ0FkZ0IsTUFpREgsQ0FoRUUsQUFpQ0EsQUFpQkEsT0FsQ0wsQUFNRyxHQTJDa0IsQ0FoRWhCLEFBaUNBLEFBaUJBLElBbENILEdBTUMsRUE1QmUsQ0FnQkMsQ0FUUCxBQWlDQSxBQWlCQSxHQWxDdEIsQUFzRGEsSUFoRFcsT0FpRHhCLEdBUFksQ0EvRFEsQUFpQ0EsQUFpQkEsU0FjRixFQTFDQSxLQXJCbEIsQUFpQzBELEFBaUJBLFNBY3pDLEVBMUNqQixhQTJDQSx3QkF6RUEsSUFnQkEsQ0EwQmtELEFBaUJBLHVKQWhCUixBQWlCQSx1SUFoQm1CLEFBaUJBLDZMQWhCdkIsQUFpQkEsa0NBaEJSLEFBaUJBLDREQWhCOUIsQUFpQkEiLCJmaWxlIjoiL1VzZXJzL2p1c3Rpbi9EZXNrdG9wL3ByaXZhdGUvYmxvZy1tb2JiaWxlL2NvbXBvbmVudHMvbmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuL2xheW91dCdcbmltcG9ydCB0cHMgZnJvbSAnLi4vdXRpbHMvYmxvZ190eXBlcydcbi8vIGltcG9ydCBiYW5uZXIgZnJvbSAnLi4vaW1hZ2VzL2Jhbm5lcidcbmltcG9ydCBFdmVudCBmcm9tICcuLi91dGlscy9lbWl0ZXInO1xudmFyIHRpbWVyID0gbnVsbDtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHJlcSxxdWVyeSxqc29uUGFnZVJlcyB9KSB7XG4gICAgY29uc3QgdXNlckFnZW50ID0gcmVxID8gcmVxLmhlYWRlcnNbJ3VzZXItYWdlbnQnXSA6IG5hdmlnYXRvci51c2VyQWdlbnRcbiAgICByZXR1cm4geyB1c2VyQWdlbnQscXVlcnksanNvblBhZ2VSZXMgfVxuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgICBwYXRoOlwiXCIsXG4gICAgICBoZWFkZXJUb3A6MCxcbiAgICAgIG9wZW5uYXY6ZmFsc2VcbiAgfVxuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICBkb2N1bWVudC5vbnNjcm9sbCA9ICgpID0+IHtcbiAgICAgICAgICB2YXIgc2Nyb2xsVG9wID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgICAgICAgaWYgKHNjcm9sbFRvcCA+IDYyICsgMjApe1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtoZWFkZXJUb3A6LTYxfSlcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aGVhZGVyVG9wOjB9KVxuICAgICAgICAgIH0gICAgICAgICAgXG4gICAgICB9XG4gICAgICAvL2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidFwiKS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwic2hhZG93bm9uZVwiKVxuICAgICAgLy99LCAxMDAwKTtcblxuICAgICAgXG4gICAgICAvLyBsZXQgcmlnaHRIZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicmlnaHRfYm94XCIpWzBdLmNsaWVudEhlaWdodDtcbiAgICAgIC8vIGlmIChzY3JvbGxUb3AgPiA2MiArIDIwKXtcbiAgICAgICAgXG4gICAgICAvLyB9XG4gICAgICB0aGlzLnNldFN0YXRlKHtwYXRoOmxvY2F0aW9uLnBhdGhuYW1lfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7cGF0aCxoZWFkZXJUb3Asb3Blbm5hdn0gPSB0aGlzLnN0YXRlXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIixoZWlnaHQ6NjEsdHJhbnNpdGlvbjpcIjAuM3NcIixXZWJraXRUcmFuc2l0aW9uOlwiMC4zc1wiLGJhY2tncm91bmRDb2xvcjpcInJnYmEoMjU1LDI1NSwyNTUsMC45KVwiLHBvc2l0aW9uOlwiZml4ZWRcIixib3JkZXJCb3R0b206XCIxcHggc29saWQgI2RkZFwiLGJveFNoYWRvdzpcIjAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNClcIix6SW5kZXg6OTk5LHRvcDpoZWFkZXJUb3AsbGVmdDowfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLG1hcmdpbjpcIjAgYXV0b1wiLGhlaWdodDpcIjEwMCVcIixsaW5lSGVpZ2h0OlwiNjBweFwiLGZvbnRTaXplOjIyfX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIsdGV4dEFsaWduOlwiY2VudGVyXCJ9fT5TaW1wbGU8L2Rpdj5cbiAgICAgICAgICAgIDxoMiBpZD1cIm1uYXZoXCIgb25DbGljaz17KCk9PntcbiAgICAgICAgICAgICAgb3BlbiA9ICFvcGVubmF2XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW5uYXY6b3Blbn0pXG4gICAgICAgICAgICB9fSBjbGFzc05hbWU9e29wZW5uYXYgPyBcIm9wZW5cIjpcIlwifT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2aWNvblwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvaDI+ICAgICAgICBcbiAgICAgICAgICAgIDx1bCBpZD1cInN0YXJsaXN0XCI+XG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL1wiIHN0eWxlPXtwYXRoID09IFwiL1wiID8ge2NvbG9yOlwiI2Y2NWE4YVwifTp7fX0+6aaW6aG1PC9hPjwvbGk+XG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2FydGljbGVcIiBzdHlsZT17cGF0aCA9PSBcIi9hcnRpY2xlXCIgfHwgcGF0aCA9PSBcIi9kZXRhaWxcIiA/IHtjb2xvcjpcIiNmNjVhOGFcIn06e319PuaWh+eroDwvYT48L2xpPiBcbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvbWVzc2FnZVwiIHN0eWxlPXtwYXRoID09IFwiL21lc3NhZ2VcIiA/IHtjb2xvcjpcIiNmNjVhOGFcIn06e319PueVmeiogDwvYT48L2xpPiBcbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvbWVcIiBzdHlsZT17cGF0aCA9PSBcIi9tZVwiID8ge2NvbG9yOlwiI2Y2NWE4YVwifTp7fX0+5YWz5LqOPC9hPjwvbGk+IFxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0Ojc1fX0+PC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAub3BlbiAubmF2aWNvbjpiZWZvcmUge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAub3BlbiAubmF2aWNvbjpiZWZvcmUsIC5vcGVuIC5uYXZpY29uOmFmdGVyIHtcbiAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm9wZW4gLm5hdmljb24ge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAub3BlbiAubmF2aWNvbjphZnRlciB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgI21uYXZoe1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB0b3A6IDhweDtcbiAgICAgICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXZpY29uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2aWNvbjpiZWZvcmUge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdmljb246YmVmb3JlLCAubmF2aWNvbjphZnRlciB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogbWFyZ2luLCAtd2Via2l0LXRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbWFyZ2luLCAtd2Via2l0LXRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbWFyZ2luLCB0cmFuc2Zvcm07XG4gICAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IG1hcmdpbiwgdHJhbnNmb3JtLCAtd2Via2l0LXRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXZpY29uOmFmdGVyIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdmljb246YmVmb3JlLCAubmF2aWNvbjphZnRlciB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogbWFyZ2luLCAtd2Via2l0LXRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbWFyZ2luLCAtd2Via2l0LXRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbWFyZ2luLCB0cmFuc2Zvcm07XG4gICAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IG1hcmdpbiwgdHJhbnNmb3JtLCAtd2Via2l0LXRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XG4gICAgICAgICAgfVxuICAgICAgICAgICNzdGFybGlzdCBsaSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBjbGVhcjogYm90aDtcbiAgICAgICAgICAgIGJvcmRlci10b3A6ICNlYWVhZWEgMXB4IHNvbGlkO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgICNzdGFybGlzdCBsaSBhe1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6ICM1NTU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj4gIFxuICAgIClcbiAgfVxufVxuXG5cbiJdfQ== */\n/*@ sourceURL=/Users/justin/Desktop/private/blog-mobbile/components/nav.js */"));
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
//# sourceMappingURL=index.js.431f97f955ac16ba20a0.hot-update.js.map