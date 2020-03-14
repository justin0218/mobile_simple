webpackHotUpdate("static/development/pages/live.js",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next-server/head */ "./node_modules/next-server/head.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_left__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/left */ "./components/left.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
/* harmony import */ var _common_loading__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/loading */ "./common/loading.js");
/* harmony import */ var _utils_emiter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utils/emiter */ "./utils/emiter.js");









var _jsxFileName = "/Users/justin/Desktop/private/blog-mobile/components/layout.js";










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
      top: 0
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _utils_emiter__WEBPACK_IMPORTED_MODULE_17__["default"].on("top", function (v) {
        _this2.setState({
          top: v
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          children = _this$props.children;
      var top = this.state.top;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2883891685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("title", {
        className: "jsx-2883891685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Simple-", title), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("meta", {
        charSet: "utf-8",
        className: "jsx-2883891685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui, viewport-fit=cover",
        className: "jsx-2883891685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("link", {
        rel: "stylesheet",
        href: "/static/css/editormd.min.css",
        className: "jsx-2883891685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("link", {
        rel: "stylesheet",
        href: "/static/css/global.css",
        className: "jsx-2883891685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("script", {
        src: "/static/js/ispc.js",
        className: "jsx-2883891685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("script", {
        src: "//cdn.jsdelivr.net/npm/xgplayer/browser/index.js",
        charset: "utf-8",
        className: "jsx-2883891685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("script", {
        src: "//cdn.jsdelivr.net/npm/xgplayer-flv.js/browser/index.js",
        charset: "utf-8",
        className: "jsx-2883891685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_nav__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: 't',
        className: "jsx-2883891685" + " " + "shadow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("article", {
        style: {
          width: "100%"
        },
        className: "jsx-2883891685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "rbox",
        className: "jsx-2883891685" + " " + "right_box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, children), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          clear: "both"
        },
        className: "jsx-2883891685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("footer", {
        className: "jsx-2883891685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-2883891685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "\u5907\u6848\u53F7\uFF1A\u4EACICP\u590716020525\u53F7")), top == 1 && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "#",
        className: "jsx-2883891685" + " " + "cd-top cd-is-visible cd-fade-out",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "Top")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "loading",
        className: "jsx-2883891685" + " " + "lds-css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          width: "100%",
          "height": "100%"
        },
        className: "jsx-2883891685" + " " + "lds-gear",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2883891685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2883891685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2883891685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2883891685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2883891685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2883891685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2883891685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2883891685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2883891685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          height: 12
        },
        className: "jsx-2883891685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        style: {
          fontSize: 12,
          textAlign: "center",
          color: "#ff7f21"
        },
        className: "jsx-2883891685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Simple")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "2883891685",
        __self: this
      }, ".cd-top.cd-is-visible.jsx-2883891685{visibility:visible;opacity:1;}.cd-top.jsx-2883891685{display:inline-block;height:40px;width:40px;position:fixed;bottom:40px;right:10px;box-shadow:0 0 10px rgba(0,0,0,0.05);overflow:hidden;text-indent:100%;white-space:nowrap;background:rgba(0,0,0,0.8) url(/static/images/top.png) no-repeat center;visibility:hidden;opacity:0;-webkit-transition:all 0.3s;-moz-transition:all 0.3s;-webkit-transition:all 0.3s;transition:all 0.3s;}footer.jsx-2883891685{width:100%;color:#a5a4a4;text-align:center;padding-bottom:20px;clear:both;text-shadow:#fff 1px 0 2px,#fff 0 1px 2px,#fff -1px 0 2px,#fff 0 -1px 2px;}#starlist.jsx-2883891685 li.jsx-2883891685{float:left;display:block;padding:0 0 0 40px;font-size:16px;}#starlist.jsx-2883891685 li.jsx-2883891685 a.jsx-2883891685{-webkit-text-decoration:none;text-decoration:none;color:#555;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0aW4vRGVza3RvcC9wcml2YXRlL2Jsb2ctbW9iaWxlL2NvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVFc0IsQUFHb0MsQUFJRSxBQWtCWixBQVFFLEFBTVEsV0FiUCxBQVFFLFFBOUJKLEVBSUUsSUFtQkksQUFRRyxJQTlCdkIsSUFJZSxVQW1CTyxDQWxCSCxBQTBCQSxNQUlOLFNBN0JHLEFBMEJoQixFQUlBLEVBWmEsUUFqQkUsR0FrQmdFLFFBakJuQyxxQ0FDeEIsZ0JBQ0MsYUFnQnJCLElBZnVCLG1CQUN3RCx3RUFDekQsa0JBQ1IsVUFDa0IsNEJBQ0gseUJBQ0wsZ0RBQ3hCIiwiZmlsZSI6Ii9Vc2Vycy9qdXN0aW4vRGVza3RvcC9wcml2YXRlL2Jsb2ctbW9iaWxlL2NvbXBvbmVudHMvbGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7QnV0dG9uLElucHV0fSBmcm9tICdhbnRkJ1xuaW1wb3J0IExlZnQgZnJvbSAnLi4vY29tcG9uZW50cy9sZWZ0J1xuaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL25hdidcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL2NvbW1vbi9sb2FkaW5nJ1xuaW1wb3J0IEV2ZW50IGZyb20gJy4uL3V0aWxzL2VtaXRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHJlcSxxdWVyeSxqc29uUGFnZVJlcyB9KSB7XG4gICAgY29uc3QgdXNlckFnZW50ID0gcmVxID8gcmVxLmhlYWRlcnNbJ3VzZXItYWdlbnQnXSA6IG5hdmlnYXRvci51c2VyQWdlbnRcbiAgICByZXR1cm4geyB1c2VyQWdlbnQscXVlcnksanNvblBhZ2VSZXMgfVxuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgdG9wOjBcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgRXZlbnQub24oXCJ0b3BcIiwodik9PntcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3RvcDp2fSlcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHt0aXRsZSxjaGlsZHJlbn0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qge3RvcH0gPSB0aGlzLnN0YXRlXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT5TaW1wbGUteyB0aXRsZSB9PC90aXRsZT5cbiAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBtYXhpbXVtLXNjYWxlPTEsIG1pbmltdW0tc2NhbGU9MSwgdXNlci1zY2FsYWJsZT1ubywgbWluaW1hbC11aSwgdmlld3BvcnQtZml0PWNvdmVyXCIgLz4gICAgICBcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0YXRpYy9jc3MvZWRpdG9ybWQubWluLmNzc1wiIC8+XG4gICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdGF0aWMvY3NzL2dsb2JhbC5jc3NcIiAvPlxuICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCIvc3RhdGljL2pzL2lzcGMuanNcIj48L3NjcmlwdD5cbiAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiLy9jZG4uanNkZWxpdnIubmV0L25wbS94Z3BsYXllci9icm93c2VyL2luZGV4LmpzXCIgY2hhcnNldD1cInV0Zi04XCI+PC9zY3JpcHQ+XG4gICAgICAgICAgICA8c2NyaXB0IHNyYz1cIi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0veGdwbGF5ZXItZmx2LmpzL2Jyb3dzZXIvaW5kZXguanNcIiBjaGFyc2V0PVwidXRmLThcIj48L3NjcmlwdD5cbiAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgPE5hdiAvPlxuICAgICAgICAgIDxkaXYgaWQ9eyd0J30gY2xhc3NOYW1lPXtgc2hhZG93YH0+XG4gICAgICAgICAgICA8YXJ0aWNsZSBzdHlsZT17e3dpZHRoOlwiMTAwJVwifX0+XG4gICAgICAgICAgICAgICAgey8qIDxMZWZ0IC8+ICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRfYm94XCIgaWQ9XCJyYm94XCI+XG4gICAgICAgICAgICAgICAgICB7IGNoaWxkcmVuIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Y2xlYXI6XCJib3RoXCJ9fT48L2Rpdj5cbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICAgIDxwPuWkh+ahiOWPt++8muS6rElDUOWkhzE2MDIwNTI15Y+3PC9wPlxuICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICAgICB7dG9wID09IDEgJiYgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJjZC10b3AgY2QtaXMtdmlzaWJsZSBjZC1mYWRlLW91dFwiPlRvcDwvYT59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qIGxvYWRpbmcgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZHMtY3NzXCIgaWQ9XCJsb2FkaW5nXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxkcy1nZWFyXCIgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIixcImhlaWdodFwiOlwiMTAwJVwifX0+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDoxMn19PjwvZGl2PlxuICAgICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZToxMix0ZXh0QWxpZ246XCJjZW50ZXJcIixjb2xvcjpcIiNmZjdmMjFcIn19PlNpbXBsZTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuY2QtdG9wLmNkLWlzLXZpc2libGUge1xuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jZC10b3Age1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogNDBweDtcbiAgICAgICAgICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCkgdXJsKC9zdGF0aWMvaW1hZ2VzL3RvcC5wbmcpIG5vLXJlcGVhdCBjZW50ZXI7XG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9vdGVye1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgY29sb3I6ICNhNWE0YTQ7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogI2ZmZiAxcHggMCAycHgsICNmZmYgMCAxcHggMnB4LCAjZmZmIC0xcHggMCAycHgsICNmZmYgMCAtMXB4IDJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNzdGFybGlzdCBsaSB7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAwIDAgNDBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjc3Rhcmxpc3QgbGkgYXtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICBjb2xvcjogIzU1NTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yaWdodF9ib3h7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/justin/Desktop/private/blog-mobile/components/layout.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req, query, jsonPageRes, userAgent;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req, query = _ref.query, jsonPageRes = _ref.jsonPageRes;
                userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
                return _context.abrupt("return", {
                  userAgent: userAgent,
                  query: query,
                  jsonPageRes: jsonPageRes
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);



/***/ }),

/***/ "./pages/live.js":
/*!***********************!*\
  !*** ./pages/live.js ***!
  \***********************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _utils_blog_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/blog_types */ "./utils/blog_types.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/config */ "./utils/config.js");
/* harmony import */ var _proto_blog_pb__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../proto/blog_pb */ "./proto/blog_pb.js");
/* harmony import */ var _proto_blog_pb__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_proto_blog_pb__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/util */ "./utils/util.js");









var _jsxFileName = "/Users/justin/Desktop/private/blog-mobile/pages/live.js";









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
      blogDtail: ""
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(_default, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var player2;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                player2 = new FlvJsPlayer({
                  id: 'vs2',
                  url: 'http://140.143.188.219:7001/live/movie.flv',
                  width: document.body.clientWidth,
                  playsinline: true
                });
                setTimeout(function () {
                  document.getElementById("t").setAttribute("class", "shadownone");
                  document.getElementById("loading").style.display = "none";
                }, 500);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
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
          blogDtail = _this$state.blogDtail,
          detailData = _this$state.detailData,
          commentsList = _this$state.commentsList,
          loadings = _this$state.loadings,
          saytext = _this$state.saytext,
          commentTotal = _this$state.commentTotal;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "\u76F4\u64AD",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        id: "vs2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }));
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
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);



/***/ })

})
//# sourceMappingURL=live.js.589c8bed7261614db8d8.hot-update.js.map