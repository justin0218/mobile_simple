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
        className: "jsx-449377389",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
        className: "jsx-449377389" + " " + "news_title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, detailData.name), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-449377389" + " " + "bloginfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
        className: "jsx-449377389",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-449377389" + " " + "author",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-449377389" + " " + "lmname",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, Object(_utils_blog_types__WEBPACK_IMPORTED_MODULE_12__["getTpValue"])(detailData.type)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-449377389" + " " + "timer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, moment__WEBPACK_IMPORTED_MODULE_13___default()(detailData.createTime).format("YYYY-MM-DD")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-449377389" + " " + "view",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, detailData.view, " \u4EBA\u5DF2\u9605\u8BFB"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          clear: 'both'
        },
        className: "jsx-449377389",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-449377389" + " " + "news_about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", {
        className: "jsx-449377389",
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
        className: "jsx-449377389" + " " + "markdown-body editormd-preview-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          padding: "20px"
        },
        className: "jsx-449377389" + " " + "share",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-449377389" + " " + "diggit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        className: "jsx-449377389",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "\u5F88\u8D5E\u54E6\uFF01"), "(", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("b", {
        className: "jsx-449377389",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "79"), ")")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-449377389" + " " + "nextinfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-449377389",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "\u4E0A\u4E00\u7BC7\uFF1A", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/diary/18.html",
        className: "jsx-449377389",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "\u4E00\u4E2ASEO\u7AD9\u957F\u5206\u4EAB\u4E2A\u4EBA\u535A\u5BA2\u4EA7\u54C1\u7F51\u8D5A\u5EFA\u7AD9\u7ECF\u5386\u5168\u8FC7\u7A0B")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-449377389",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "\u4E0B\u4E00\u7BC7\uFF1A", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/diary/",
        className: "jsx-449377389",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "\u8FD4\u56DE\u5217\u8868"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        class: "news_pl",
        className: "jsx-449377389",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
        className: "jsx-449377389",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "\u6587\u7AE0\u8BC4\u8BBA"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        class: "gbko",
        className: "jsx-449377389",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        class: "fb",
        className: "jsx-449377389",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
        className: "jsx-449377389",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        class: "fbtime",
        className: "jsx-449377389",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-449377389",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "2019-08-12 12:05:07"), " 2121"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        class: "fbinfo",
        className: "jsx-449377389",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "33232"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        class: "fb",
        className: "jsx-449377389",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
        className: "jsx-449377389",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        class: "fbtime",
        className: "jsx-449377389",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-449377389",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "2019-02-17 16:02:42"), " \u7A0B\u5E8F\u5458\u5C0F\u5F20"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        class: "fbinfo",
        className: "jsx-449377389",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "\u6CA1\u5174\u8DA3\u5C31\u4E0D\u8981\u5165\u95E8\u8FD9\u4E00\u884C\u4E86\u3002"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "plpost",
        className: "jsx-449377389",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        class: "saying",
        className: "jsx-449377389",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-449377389",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/e/pl/?classid=3&id=19",
        className: "jsx-449377389",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "\u5171\u670934\u6761\u8BC4\u8BBA")), "\u6765\u8BF4\u4E24\u53E5\u5427..."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        class: "yname",
        className: "jsx-449377389",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-449377389",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "\u7528\u6237\u540D:"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        name: "username",
        type: "text",
        class: "inputText",
        id: "username",
        value: "",
        size: "16",
        className: "jsx-449377389",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        class: "yzm",
        className: "jsx-449377389",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-449377389",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "\u9A8C\u8BC1\u7801:"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        name: "key",
        type: "text",
        class: "inputText",
        size: "16",
        className: "jsx-449377389",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "/e/ShowKey/?v=pl",
        align: "absmiddle",
        name: "plKeyImg",
        id: "plKeyImg",
        onclick: "plKeyImg.src='/e/ShowKey/?v=pl&t='+Math.random()",
        title: "\u770B\u4E0D\u6E05\u695A,\u70B9\u51FB\u5237\u65B0",
        className: "jsx-449377389",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        name: "nomember",
        type: "hidden",
        id: "nomember",
        value: "1",
        checked: "checked",
        className: "jsx-449377389",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("textarea", {
        name: "saytext",
        rows: "6",
        id: "saytext",
        className: "jsx-449377389",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        name: "imageField",
        type: "submit",
        value: "\u63D0\u4EA4",
        className: "jsx-449377389",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        name: "id",
        type: "hidden",
        id: "id",
        value: "19",
        className: "jsx-449377389",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        name: "classid",
        type: "hidden",
        id: "classid",
        value: "3",
        className: "jsx-449377389",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        name: "enews",
        type: "hidden",
        id: "enews",
        value: "AddPl",
        className: "jsx-449377389",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        name: "repid",
        type: "hidden",
        id: "repid",
        value: "0",
        className: "jsx-449377389",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        type: "hidden",
        name: "ecmsfrom",
        value: "/diary/19.html",
        className: "jsx-449377389",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "449377389",
        __self: this
      }, ".nextinfo.jsx-449377389{line-height:24px;width:100%;overflow:hidden;margin:20px 0;}.nextinfo.jsx-449377389>p.jsx-449377389{padding:4px 10px;border-radius:5px;}.diggit.jsx-449377389{width:160px;margin:auto;background:#E2523A;color:#fff;box-shadow:1px 2px 6px 0px rgba(0,0,0,.2);border-radius:3px;line-height:40px;text-align:center;}.news_about.jsx-449377389{color:#888888;border:1px solid #F3F3F3;padding:10px;margin:20px auto 15px auto;line-height:23px;background:none repeat 0 0 #F6F6F6;}.bloginfo.jsx-449377389{width:100%;overflow:hidden;}.news_title.jsx-449377389{font-size:24px;font-weight:normal;padding:20px 0;color:#333;margin:0;}.bloginfo.jsx-449377389 li.jsx-449377389{float:left;margin-right:20px;list-style:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0aW4vRGVza3RvcC9wcml2YXRlL25leHRqcy9wYWdlcy9kZXRhaWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEdzQixBQUc4QixBQU1BLEFBSUwsQUFVTSxBQVFMLEFBSU0sQUFPSixXQVZHLEFBV0ksQ0E3QlYsRUFVaUIsQ0FZTixFQWhDWixBQU1PLE9BS0MsR0FrQm5CLENBNUJnQixDQXVDSSxLQVBELENBMUJwQixJQWNrQixJQVROLENBVkcsQ0F1Q2QsSUFQZSxHQVpnQixFQVRXLElBVjNDLEVBZ0NhLFNBQ1osVUFicUIsaUJBVEgsQUFVcUIsa0JBVHRCLGlCQUNDLEFBU2xCLGtCQVJEIiwiZmlsZSI6Ii9Vc2Vycy9qdXN0aW4vRGVza3RvcC9wcml2YXRlL25leHRqcy9wYWdlcy9kZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IHtnZXRUcFZhbHVlfSBmcm9tICcuLi91dGlscy9ibG9nX3R5cGVzJ1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQge2FwaUhvc3R9IGZyb20gJy4uL3V0aWxzL2NvbmZpZyc7XG5pbXBvcnQgcHJvdG9idWYgZnJvbSBcIi4uL3Byb3RvL2Jsb2dfcGJcIjtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCByZWFkU3RyZWFtIGZyb20gJy4uL3V0aWxzL3V0aWwnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHJlcSxxdWVyeSxqc29uUGFnZVJlcyB9KSB7XG4gICAgY29uc3QgdXNlckFnZW50ID0gcmVxID8gcmVxLmhlYWRlcnNbJ3VzZXItYWdlbnQnXSA6IG5hdmlnYXRvci51c2VyQWdlbnRcbiAgICByZXR1cm4geyB1c2VyQWdlbnQscXVlcnksanNvblBhZ2VSZXMgfVxuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgICBibG9nRHRhaWw6XCJcIixcbiAgICAgIGRldGFpbERhdGE6e31cbiAgfVxuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICBjb25zdCB7aWR9ID0gdGhpcy5wcm9wcy5xdWVyeVxuICAgICAgbGV0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHthcGlIb3N0fS92MS9ibG9nL2RldGFpbD9pZD0ke2lkfWAse1xuICAgICAgICByZXNwb25zZVR5cGU6ICdibG9iJ1xuICAgICAgfSlcbiAgICAgIGxldCBkYXRhID0gYXdhaXQgcmVhZFN0cmVhbShyZXMuZGF0YSk7XG4gICAgICBsZXQgbWVzc2FnZSA9IHByb3RvYnVmLmRldGFpbFJlcy5kZXNlcmlhbGl6ZUJpbmFyeShkYXRhKTtcbiAgICAgIGRhdGEgPSBtZXNzYWdlLnRvT2JqZWN0KCk7XG4gICAgICBsZXQga2V5ID0gZGF0YS5odG1sVHh0VXJsLnJlcGxhY2UoXCJodHRwOlwiK2FwaUhvc3QgKyBcIi9yZWRvdXJjZXMvXCIsXCJcIik7XG4gICAgICBsZXQgaHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHthcGlIb3N0fS90b29sL2ZpbGUvcmVhZD9rZXk9JHtrZXl9YCx7XG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InXG4gICAgICB9KVxuICAgICAgbGV0IGhkYXRhID0gYXdhaXQgcmVhZFN0cmVhbShocmVzLmRhdGEpO1xuICAgICAgbGV0IGhtZXNzYWdlID0gcHJvdG9idWYuZmlsZVJlYWRSZXMuZGVzZXJpYWxpemVCaW5hcnkoaGRhdGEpO1xuICAgICAgaGRhdGEgPSBobWVzc2FnZS50b09iamVjdCgpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7YmxvZ0R0YWlsOmhkYXRhLnR4dCxkZXRhaWxEYXRhOmRhdGF9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtibG9nRHRhaWwsZGV0YWlsRGF0YX0gPSB0aGlzLnN0YXRlXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmQ6XCIjZmZmXCIscGFkZGluZzogXCIwIDMwcHhcIn19PlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5ld3NfdGl0bGVcIj57ZGV0YWlsRGF0YS5uYW1lfTwvaDM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dpbmZvXCI+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYXV0aG9yXCI+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibG1uYW1lXCI+e2dldFRwVmFsdWUoZGV0YWlsRGF0YS50eXBlKX08L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0aW1lclwiPnttb21lbnQoZGV0YWlsRGF0YS5jcmVhdGVUaW1lKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpfTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInZpZXdcIj57ZGV0YWlsRGF0YS52aWV3fSDkurrlt7LpmIXor7s8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Y2xlYXI6J2JvdGgnfX0+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3NfYWJvdXRcIj5cbiAgICAgICAgICAgICAgPHN0cm9uZz7nroDku4s8L3N0cm9uZz4ge2RldGFpbERhdGEucHJlZmFjZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogYmxvZ0R0YWlsfX0gY2xhc3NOYW1lPVwibWFya2Rvd24tYm9keSBlZGl0b3JtZC1wcmV2aWV3LWNvbnRhaW5lclwiIHByZXZpZXdjb250YWluZXI9XCJ0cnVlXCIgc3R5bGU9e3t3aWR0aDpcImF1dG9cIn19PjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFyZVwiIHN0eWxlPXt7cGFkZGluZzogXCIyMHB4XCJ9fT5cbiAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkaWdnaXRcIj5cbiAgICAgICAgICAgICAgIDxhPuW+iOi1nuWTpu+8gTwvYT4oPGI+Nzk8L2I+KVxuICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXh0aW5mb1wiPlxuICAgICAgICAgICAgICA8cD7kuIrkuIDnr4fvvJo8YSBocmVmPVwiL2RpYXJ5LzE4Lmh0bWxcIj7kuIDkuKpTRU/nq5nplb/liIbkuqvkuKrkurrljZrlrqLkuqflk4HnvZHotZrlu7rnq5nnu4/ljoblhajov4fnqIs8L2E+PC9wPlxuICAgICAgICAgICAgICA8cD7kuIvkuIDnr4fvvJo8YSBocmVmPVwiL2RpYXJ5L1wiPui/lOWbnuWIl+ihqDwvYT48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5ld3NfcGxcIj5cbiAgICAgICAgICAgICAgPGgyPuaWh+eroOivhOiuujwvaDI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYmtvXCI+IFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmYlwiPlxuICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImZidGltZVwiPjxzcGFuPjIwMTktMDgtMTIgMTI6MDU6MDc8L3NwYW4+IDIxMjE8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZmJpbmZvXCI+MzMyMzI8L3A+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmJcIj5cbiAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmYnRpbWVcIj48c3Bhbj4yMDE5LTAyLTE3IDE2OjAyOjQyPC9zcGFuPiDnqIvluo/lkZjlsI/lvKA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZmJpbmZvXCI+5rKh5YW06Laj5bCx5LiN6KaB5YWl6Zeo6L+Z5LiA6KGM5LqG44CCPC9wPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwbHBvc3RcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic2F5aW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjxhIGhyZWY9XCIvZS9wbC8/Y2xhc3NpZD0zJmFtcDtpZD0xOVwiPuWFseaciTM05p2h6K+E6K66PC9hPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAg5p2l6K+05Lik5Y+l5ZCnLi4uXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInluYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPueUqOaIt+WQjTo8L3NwYW4+PGlucHV0IG5hbWU9XCJ1c2VybmFtZVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJpbnB1dFRleHRcIiBpZD1cInVzZXJuYW1lXCIgdmFsdWU9XCJcIiBzaXplPVwiMTZcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ5em1cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+6aqM6K+B56CBOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJrZXlcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiaW5wdXRUZXh0XCIgc2l6ZT1cIjE2XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZS9TaG93S2V5Lz92PXBsXCIgYWxpZ249XCJhYnNtaWRkbGVcIiBuYW1lPVwicGxLZXlJbWdcIiBpZD1cInBsS2V5SW1nXCIgb25jbGljaz1cInBsS2V5SW1nLnNyYz0nL2UvU2hvd0tleS8/dj1wbCZhbXA7dD0nK01hdGgucmFuZG9tKClcIiB0aXRsZT1cIueci+S4jea4healmizngrnlh7vliLfmlrBcIiAvPiBcbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwibm9tZW1iZXJcIiB0eXBlPVwiaGlkZGVuXCIgaWQ9XCJub21lbWJlclwiIHZhbHVlPVwiMVwiIGNoZWNrZWQ9XCJjaGVja2VkXCIgLz5cbiAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwic2F5dGV4dFwiIHJvd3M9XCI2XCIgaWQ9XCJzYXl0ZXh0XCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiaW1hZ2VGaWVsZFwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIuaPkOS6pFwiIC8+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cImlkXCIgdHlwZT1cImhpZGRlblwiIGlkPVwiaWRcIiB2YWx1ZT1cIjE5XCIgLz5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiY2xhc3NpZFwiIHR5cGU9XCJoaWRkZW5cIiBpZD1cImNsYXNzaWRcIiB2YWx1ZT1cIjNcIiAvPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJlbmV3c1wiIHR5cGU9XCJoaWRkZW5cIiBpZD1cImVuZXdzXCIgdmFsdWU9XCJBZGRQbFwiIC8+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cInJlcGlkXCIgdHlwZT1cImhpZGRlblwiIGlkPVwicmVwaWRcIiB2YWx1ZT1cIjBcIiAvPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiZWNtc2Zyb21cIiB2YWx1ZT1cIi9kaWFyeS8xOS5odG1sXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgLm5leHRpbmZve1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgICAgICAgfVxuICAgICAgICAgICAubmV4dGluZm8gPiBwe1xuICAgICAgICAgICAgcGFkZGluZzogNHB4IDEwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgLmRpZ2dpdHtcbiAgICAgICAgICAgIHdpZHRoOiAxNjBweDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNFMjUyM0E7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAycHggNnB4IDBweCByZ2JhKDAsMCwwLC4yKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIC5uZXdzX2Fib3V0IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzg4ODg4ODtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRjNGM0YzO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG8gMTVweCBhdXRvO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmUgcmVwZWF0IDAgMCAjRjZGNkY2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJsb2dpbmZvIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmV3c190aXRsZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJsb2dpbmZvIGxpIHtcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L0xheW91dD4gICAgIFxuICAgIClcbiAgfVxufVxuXG5cbiJdfQ== */\n/*@ sourceURL=/Users/justin/Desktop/private/nextjs/pages/detail.js */"));
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
//# sourceMappingURL=detail.js.85b8bfc59b34d04fd19d.hot-update.js.map