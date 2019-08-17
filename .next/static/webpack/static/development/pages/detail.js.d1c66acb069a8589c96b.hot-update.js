webpackHotUpdate("static/development/pages/detail.js",{

/***/ "./pages/detail.js":
/*!*************************!*\
  !*** ./pages/detail.js ***!
  \*************************/
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
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _utils_blog_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/blog_types */ "./utils/blog_types.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/config */ "./utils/config.js");
/* harmony import */ var _proto_blog_pb__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../proto/blog_pb */ "./proto/blog_pb.js");
/* harmony import */ var _proto_blog_pb__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_proto_blog_pb__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utils/util */ "./utils/util.js");









var _jsxFileName = "/Users/justin/Desktop/private/nextjs/pages/detail.js";










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
      blogDtail: "",
      detailData: {}
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(_default, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var id, res, data, message, key, hres, hdata, hmessage;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = this.props.query.id;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_16___default.a.get("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_14__["apiHost"], "/v1/blog/detail?id=").concat(id), {
                  responseType: 'blob'
                });

              case 3:
                res = _context.sent;
                _context.next = 6;
                return Object(_utils_util__WEBPACK_IMPORTED_MODULE_17__["default"])(res.data);

              case 6:
                data = _context.sent;
                message = _proto_blog_pb__WEBPACK_IMPORTED_MODULE_15___default.a.detailRes.deserializeBinary(data);
                data = message.toObject();
                key = data.htmlTxtUrl.replace("http:" + _utils_config__WEBPACK_IMPORTED_MODULE_14__["apiHost"] + "/redources/", "");
                _context.next = 12;
                return axios__WEBPACK_IMPORTED_MODULE_16___default.a.get("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_14__["apiHost"], "/tool/file/read?key=").concat(key), {
                  responseType: 'blob'
                });

              case 12:
                hres = _context.sent;
                _context.next = 15;
                return Object(_utils_util__WEBPACK_IMPORTED_MODULE_17__["default"])(hres.data);

              case 15:
                hdata = _context.sent;
                hmessage = _proto_blog_pb__WEBPACK_IMPORTED_MODULE_15___default.a.fileReadRes.deserializeBinary(hdata);
                hdata = hmessage.toObject();
                this.setState({
                  blogDtail: hdata.txt,
                  detailData: data
                });

              case 19:
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
          blogDtail = _this$state.blogDtail,
          detailData = _this$state.detailData;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          background: "#fff",
          padding: "0 30px"
        },
        className: "jsx-285091812",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
        className: "jsx-285091812" + " " + "news_title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, detailData.name), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-285091812" + " " + "bloginfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
        className: "jsx-285091812",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-285091812" + " " + "author",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-285091812" + " " + "lmname",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, Object(_utils_blog_types__WEBPACK_IMPORTED_MODULE_12__["getTpValue"])(detailData.type)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-285091812" + " " + "timer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, moment__WEBPACK_IMPORTED_MODULE_13___default()(detailData.createTime).format("YYYY-MM-DD")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-285091812" + " " + "view",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, detailData.view, " \u4EBA\u5DF2\u9605\u8BFB"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          clear: 'both'
        },
        className: "jsx-285091812",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-285091812" + " " + "news_about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", {
        className: "jsx-285091812",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "\u7B80\u4ECB"), " ", detailData.preface), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: blogDtail
        },
        previewcontainer: "true",
        style: {
          width: "auto"
        },
        className: "jsx-285091812" + " " + "markdown-body editormd-preview-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          padding: "20px"
        },
        className: "jsx-285091812" + " " + "share",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-285091812" + " " + "diggit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        className: "jsx-285091812",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "\u5F88\u8D5E\u54E6\uFF01"), "(", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("b", {
        className: "jsx-285091812",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "79"), ")")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-285091812" + " " + "nextinfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-285091812",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "\u4E0A\u4E00\u7BC7\uFF1A", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/diary/18.html",
        className: "jsx-285091812",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "\u4E00\u4E2ASEO\u7AD9\u957F\u5206\u4EAB\u4E2A\u4EBA\u535A\u5BA2\u4EA7\u54C1\u7F51\u8D5A\u5EFA\u7AD9\u7ECF\u5386\u5168\u8FC7\u7A0B")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-285091812",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "\u4E0B\u4E00\u7BC7\uFF1A", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/diary/",
        className: "jsx-285091812",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "\u8FD4\u56DE\u5217\u8868"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-285091812" + " " + "news_pl",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
        className: "jsx-285091812",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "\u6587\u7AE0\u8BC4\u8BBA"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-285091812" + " " + "gbko",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-285091812" + " " + "fb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
        className: "jsx-285091812",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-285091812" + " " + "fbtime",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-285091812",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "2019-08-12 12:05:07"), " 2121"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-285091812" + " " + "fbinfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "33232"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-285091812" + " " + "fb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
        className: "jsx-285091812",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-285091812" + " " + "fbtime",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-285091812",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "2019-02-17 16:02:42"), " \u7A0B\u5E8F\u5458\u5C0F\u5F20"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-285091812" + " " + "fbinfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "\u6CA1\u5174\u8DA3\u5C31\u4E0D\u8981\u5165\u95E8\u8FD9\u4E00\u884C\u4E86\u3002"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "plpost",
        className: "jsx-285091812",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-285091812" + " " + "saying",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-285091812",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/e/pl/?classid=3&id=19",
        className: "jsx-285091812",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "\u5171\u670934\u6761\u8BC4\u8BBA")), "\u6765\u8BF4\u4E24\u53E5\u5427..."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-285091812" + " " + "yzm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-285091812",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "\u9A8C\u8BC1\u7801:"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        name: "key",
        type: "text",
        size: "16",
        className: "jsx-285091812" + " " + "inputText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "/e/ShowKey/?v=pl",
        align: "absmiddle",
        name: "plKeyImg",
        id: "plKeyImg",
        title: "\u770B\u4E0D\u6E05\u695A,\u70B9\u51FB\u5237\u65B0",
        className: "jsx-285091812",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        name: "nomember",
        type: "hidden",
        id: "nomember",
        value: "1",
        checked: "checked",
        className: "jsx-285091812",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("textarea", {
        name: "saytext",
        rows: "6",
        id: "saytext",
        className: "jsx-285091812",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        name: "imageField",
        type: "submit",
        value: "\u63D0\u4EA4",
        className: "jsx-285091812",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "285091812",
        __self: this
      }, ".nextinfo.jsx-285091812 a.jsx-285091812{-webkit-text-decoration:none;text-decoration:none;color:#555;}.nextinfo.jsx-285091812 a.jsx-285091812:hover{-webkit-text-decoration:underline;text-decoration:underline;color:#222;}.yzm.jsx-285091812{margin:10px 10px 10px 0;}#plpost.jsx-285091812 input[type=\"submit\"].jsx-285091812{display:block;background:#303030;color:#fff;border:0;line-height:30px;padding:0 20px;border-radius:5px;float:right;margin-bottom:20px;margin-top:13px;margin-right:1%;}#saytext.jsx-285091812{width:99%;outline:none;resize:none;}.saying.jsx-285091812 span.jsx-285091812{float:right;}.saying.jsx-285091812{line-height:30px;color:#a9a6a6;}.news_pl.jsx-285091812 h2.jsx-285091812{border-bottom:#000 2px solid;line-height:40px;font-size:14px;padding-left:10px;color:#000;}.fbtime.jsx-285091812{float:right;color:#999;font-size:12px;width:66px;overflow:hidden;white-space:nowrap;}.fbtime.jsx-285091812 span.jsx-285091812{float:right;color:#999;font-size:12px;width:67px;overflow:hidden;white-space:nowrap;}p.fbtime.jsx-285091812{color:#000;}p.fbinfo.jsx-285091812{margin:10px 0;}.fb.jsx-285091812 ul.jsx-285091812{margin:10px 10px;padding:10px 10px 10px 70px;border-bottom:#ececec 1px solid;background:url(/static/images/erweima.jpg) no-repeat top 6px left 10px;background-size:40px 40px;}.news_pl.jsx-285091812{margin:10px 0 20px 0;width:100%;overflow:hidden;}.nextinfo.jsx-285091812{line-height:24px;width:100%;overflow:hidden;margin:20px 0;}.nextinfo.jsx-285091812>p.jsx-285091812{padding:4px 10px;border-radius:5px;}.diggit.jsx-285091812{width:160px;margin:auto;background:#E2523A;color:#fff;box-shadow:1px 2px 6px 0px rgba(0,0,0,.2);border-radius:3px;line-height:40px;text-align:center;}.news_about.jsx-285091812{color:#888888;border:1px solid #F3F3F3;padding:10px;margin:20px auto 15px auto;line-height:23px;background:none repeat 0 0 #F6F6F6;}.bloginfo.jsx-285091812{width:100%;overflow:hidden;}.news_title.jsx-285091812{font-size:24px;font-weight:normal;padding:20px 0;color:#333;margin:0;}.bloginfo.jsx-285091812 li.jsx-285091812{float:left;margin-right:20px;list-style:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0aW4vRGVza3RvcC9wcml2YXRlL25leHRqcy9wYWdlcy9kZXRhaWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0dzQixBQUdrQyxBQUlLLEFBSUEsQUFHWixBQWFGLEFBS0ksQUFHQyxBQUlZLEFBT2pCLEFBUUEsQUFRRCxBQUdHLEFBR0csQUFPSSxBQUtKLEFBTUEsQUFJTCxBQVVNLEFBUUwsQUFJTSxBQU9KLFVBM0ZBLENBbUNoQixBQThDbUIsQUFXSSxDQXZGdEIsQUFjVyxBQVFBLEFBb0NDLEVBNUVPLEFBbURwQixBQW1DOEIsQ0FZTixFQTdFVCxBQWlDYyxBQVlqQixBQU1PLElBWFAsRUEvQ0csQUFtQkMsQUFRQSxDQTVDakIsQUFnRnFCLEdBa0JuQixDQTVCZ0IsQ0ExQ0MsQUFpRkcsRUFwRnJCLENBd0NpQixDQTdETCxDQWtHUSxDQXBGckIsQUEwREMsR0F2Q1ksQUFRQSxDQTZDTSxJQVROLENBNUVGLEFBa0VLLENBYmtCLEFBb0RoQyxDQWpGZSxFQXFDaEIsQ0E1QmlCLEFBUUEsQUF5REQsQ0EvR0osRUFtR29CLENBckZkLENBNEV5QixJQVYzQyxFQTVFVyxBQTRHRSxDQS9HZCxBQXFDb0IsSUFTQyxBQVFBLElBMERuQixDQWxHZSxDQVZqQixNQThEeUUsRUE1QjVELEFBNkRVLEtBcER0QixBQVFBLENBeENtQixLQXdCbkIsTUFtRG1CLEFBVXFCLE9BcEYzQixXQTJFSyxDQTFFRSxnQkEyRUQsQUFTbEIsR0FuRmdCLGNBaURVLENBMEIzQixDQTFFaUIsZ0JBQ2xCLFFBZ0RDIiwiZmlsZSI6Ii9Vc2Vycy9qdXN0aW4vRGVza3RvcC9wcml2YXRlL25leHRqcy9wYWdlcy9kZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IHtnZXRUcFZhbHVlfSBmcm9tICcuLi91dGlscy9ibG9nX3R5cGVzJ1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQge2FwaUhvc3R9IGZyb20gJy4uL3V0aWxzL2NvbmZpZyc7XG5pbXBvcnQgcHJvdG9idWYgZnJvbSBcIi4uL3Byb3RvL2Jsb2dfcGJcIjtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCByZWFkU3RyZWFtIGZyb20gJy4uL3V0aWxzL3V0aWwnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHJlcSxxdWVyeSxqc29uUGFnZVJlcyB9KSB7XG4gICAgY29uc3QgdXNlckFnZW50ID0gcmVxID8gcmVxLmhlYWRlcnNbJ3VzZXItYWdlbnQnXSA6IG5hdmlnYXRvci51c2VyQWdlbnRcbiAgICByZXR1cm4geyB1c2VyQWdlbnQscXVlcnksanNvblBhZ2VSZXMgfVxuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgICBibG9nRHRhaWw6XCJcIixcbiAgICAgIGRldGFpbERhdGE6e31cbiAgfVxuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICBjb25zdCB7aWR9ID0gdGhpcy5wcm9wcy5xdWVyeVxuICAgICAgbGV0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHthcGlIb3N0fS92MS9ibG9nL2RldGFpbD9pZD0ke2lkfWAse1xuICAgICAgICByZXNwb25zZVR5cGU6ICdibG9iJ1xuICAgICAgfSlcbiAgICAgIGxldCBkYXRhID0gYXdhaXQgcmVhZFN0cmVhbShyZXMuZGF0YSk7XG4gICAgICBsZXQgbWVzc2FnZSA9IHByb3RvYnVmLmRldGFpbFJlcy5kZXNlcmlhbGl6ZUJpbmFyeShkYXRhKTtcbiAgICAgIGRhdGEgPSBtZXNzYWdlLnRvT2JqZWN0KCk7XG4gICAgICBsZXQga2V5ID0gZGF0YS5odG1sVHh0VXJsLnJlcGxhY2UoXCJodHRwOlwiK2FwaUhvc3QgKyBcIi9yZWRvdXJjZXMvXCIsXCJcIik7XG4gICAgICBsZXQgaHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHthcGlIb3N0fS90b29sL2ZpbGUvcmVhZD9rZXk9JHtrZXl9YCx7XG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InXG4gICAgICB9KVxuICAgICAgbGV0IGhkYXRhID0gYXdhaXQgcmVhZFN0cmVhbShocmVzLmRhdGEpO1xuICAgICAgbGV0IGhtZXNzYWdlID0gcHJvdG9idWYuZmlsZVJlYWRSZXMuZGVzZXJpYWxpemVCaW5hcnkoaGRhdGEpO1xuICAgICAgaGRhdGEgPSBobWVzc2FnZS50b09iamVjdCgpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7YmxvZ0R0YWlsOmhkYXRhLnR4dCxkZXRhaWxEYXRhOmRhdGF9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtibG9nRHRhaWwsZGV0YWlsRGF0YX0gPSB0aGlzLnN0YXRlXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmQ6XCIjZmZmXCIscGFkZGluZzogXCIwIDMwcHhcIn19PlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5ld3NfdGl0bGVcIj57ZGV0YWlsRGF0YS5uYW1lfTwvaDM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dpbmZvXCI+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYXV0aG9yXCI+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibG1uYW1lXCI+e2dldFRwVmFsdWUoZGV0YWlsRGF0YS50eXBlKX08L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0aW1lclwiPnttb21lbnQoZGV0YWlsRGF0YS5jcmVhdGVUaW1lKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpfTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInZpZXdcIj57ZGV0YWlsRGF0YS52aWV3fSDkurrlt7LpmIXor7s8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Y2xlYXI6J2JvdGgnfX0+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3NfYWJvdXRcIj5cbiAgICAgICAgICAgICAgPHN0cm9uZz7nroDku4s8L3N0cm9uZz4ge2RldGFpbERhdGEucHJlZmFjZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogYmxvZ0R0YWlsfX0gY2xhc3NOYW1lPVwibWFya2Rvd24tYm9keSBlZGl0b3JtZC1wcmV2aWV3LWNvbnRhaW5lclwiIHByZXZpZXdjb250YWluZXI9XCJ0cnVlXCIgc3R5bGU9e3t3aWR0aDpcImF1dG9cIn19PjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFyZVwiIHN0eWxlPXt7cGFkZGluZzogXCIyMHB4XCJ9fT5cbiAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkaWdnaXRcIj5cbiAgICAgICAgICAgICAgIDxhPuW+iOi1nuWTpu+8gTwvYT4oPGI+Nzk8L2I+KVxuICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXh0aW5mb1wiPlxuICAgICAgICAgICAgICA8cD7kuIrkuIDnr4fvvJo8YSBocmVmPVwiL2RpYXJ5LzE4Lmh0bWxcIj7kuIDkuKpTRU/nq5nplb/liIbkuqvkuKrkurrljZrlrqLkuqflk4HnvZHotZrlu7rnq5nnu4/ljoblhajov4fnqIs8L2E+PC9wPlxuICAgICAgICAgICAgICA8cD7kuIvkuIDnr4fvvJo8YSBocmVmPVwiL2RpYXJ5L1wiPui/lOWbnuWIl+ihqDwvYT48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzX3BsXCI+XG4gICAgICAgICAgICAgIDxoMj7mlofnq6Dor4Torro8L2gyPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdia29cIj4gXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYlwiPlxuICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmYnRpbWVcIj48c3Bhbj4yMDE5LTA4LTEyIDEyOjA1OjA3PC9zcGFuPiAyMTIxPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmYmluZm9cIj4zMzIzMjwvcD5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmJcIj5cbiAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmJ0aW1lXCI+PHNwYW4+MjAxOS0wMi0xNyAxNjowMjo0Mjwvc3Bhbj4g56iL5bqP5ZGY5bCP5bygPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmYmluZm9cIj7msqHlhbTotqPlsLHkuI3opoHlhaXpl6jov5nkuIDooYzkuobjgII8L3A+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwbHBvc3RcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNheWluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48YSBocmVmPVwiL2UvcGwvP2NsYXNzaWQ9MyZhbXA7aWQ9MTlcIj7lhbHmnIkzNOadoeivhOiuujwvYT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIOadpeivtOS4pOWPpeWQpy4uLlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwieXptXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPumqjOivgeeggTo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwia2V5XCIgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJpbnB1dFRleHRcIiBzaXplPVwiMTZcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9lL1Nob3dLZXkvP3Y9cGxcIiBhbGlnbj1cImFic21pZGRsZVwiIG5hbWU9XCJwbEtleUltZ1wiIGlkPVwicGxLZXlJbWdcIiB0aXRsZT1cIueci+S4jea4healmizngrnlh7vliLfmlrBcIiAvPiBcbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwibm9tZW1iZXJcIiB0eXBlPVwiaGlkZGVuXCIgaWQ9XCJub21lbWJlclwiIHZhbHVlPVwiMVwiIGNoZWNrZWQ9XCJjaGVja2VkXCIgLz5cbiAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwic2F5dGV4dFwiIHJvd3M9XCI2XCIgaWQ9XCJzYXl0ZXh0XCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiaW1hZ2VGaWVsZFwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIuaPkOS6pFwiIC8+XG4gICAgICAgICAgICAgICAgICB7LyogPGlucHV0IG5hbWU9XCJpZFwiIHR5cGU9XCJoaWRkZW5cIiBpZD1cImlkXCIgdmFsdWU9XCIxOVwiIC8+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cImNsYXNzaWRcIiB0eXBlPVwiaGlkZGVuXCIgaWQ9XCJjbGFzc2lkXCIgdmFsdWU9XCIzXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiZW5ld3NcIiB0eXBlPVwiaGlkZGVuXCIgaWQ9XCJlbmV3c1wiIHZhbHVlPVwiQWRkUGxcIiAvPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJyZXBpZFwiIHR5cGU9XCJoaWRkZW5cIiBpZD1cInJlcGlkXCIgdmFsdWU9XCIwXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImVjbXNmcm9tXCIgdmFsdWU9XCIvZGlhcnkvMTkuaHRtbFwiIC8+ICovfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5uZXh0aW5mbyBhe1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6ICM1NTU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uZXh0aW5mbyBhOmhvdmVye1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICBjb2xvcjojMjIyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAueXptIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjcGxwb3N0IGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzAzMDMwO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxM3B4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgI3NheXRleHQge1xuICAgICAgICAgICAgICB3aWR0aDogOTklO1xuICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zYXlpbmcgc3BhbiB7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAuc2F5aW5ne1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBjb2xvcjogI2E5YTZhNjtcbiAgICAgICAgICAgfSBcbiAgICAgICAgICAgLm5ld3NfcGwgaDJ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAjMDAwIDJweCBzb2xpZDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgLmZidGltZXtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgd2lkdGg6IDY2cHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgfVxuICAgICAgICAgICAuZmJ0aW1lIHNwYW57XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIHdpZHRoOiA2N3B4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgcC5mYnRpbWV7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgfVxuICAgICAgICAgICBwLmZiaW5mb3tcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIC5mYiB1bHtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggNzBweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206ICNlY2VjZWMgMXB4IHNvbGlkO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKC9zdGF0aWMvaW1hZ2VzL2Vyd2VpbWEuanBnKSBuby1yZXBlYXQgdG9wIDZweCBsZWZ0IDEwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDQwcHggNDBweDtcbiAgICAgICAgICAgfSAgXG4gICAgICAgICAgIC5uZXdzX3Bse1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMjBweCAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIC5uZXh0aW5mb3tcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgLm5leHRpbmZvID4gcHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweCAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICB9XG4gICAgICAgICAgIC5kaWdnaXR7XG4gICAgICAgICAgICB3aWR0aDogMTYwcHg7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRTI1MjNBO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMnB4IDZweCAwcHggcmdiYSgwLDAsMCwuMik7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgfVxuICAgICAgICAgICAubmV3c19hYm91dCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM4ODg4ODg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0YzRjNGMztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvIDE1cHggYXV0bztcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lIHJlcGVhdCAwIDAgI0Y2RjZGNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ibG9naW5mbyB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5ld3NfdGl0bGUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ibG9naW5mbyBsaSB7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+ICAgICBcbiAgICApXG4gIH1cbn1cblxuXG4iXX0= */\n/*@ sourceURL=/Users/justin/Desktop/private/nextjs/pages/detail.js */"));
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
//# sourceMappingURL=detail.js.d1c66acb069a8589c96b.hot-update.js.map