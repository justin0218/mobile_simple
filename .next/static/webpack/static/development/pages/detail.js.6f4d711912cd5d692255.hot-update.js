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
      detailData: {},
      commentsList: [],
      saytext: ""
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(_default, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var id, res, data, message, hres, hdata, hmessage, commentRes, commentData, commentMessage;
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
                _context.next = 11;
                return axios__WEBPACK_IMPORTED_MODULE_16___default.a.get("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_14__["apiHost"], "/tool/file/read?key=").concat(data.htmlTxtUrl), {
                  responseType: 'blob'
                });

              case 11:
                hres = _context.sent;
                _context.next = 14;
                return Object(_utils_util__WEBPACK_IMPORTED_MODULE_17__["default"])(hres.data);

              case 14:
                hdata = _context.sent;
                hmessage = _proto_blog_pb__WEBPACK_IMPORTED_MODULE_15___default.a.fileReadRes.deserializeBinary(hdata);
                hdata = hmessage.toObject();
                _context.next = 19;
                return axios__WEBPACK_IMPORTED_MODULE_16___default.a.get("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_14__["apiHost"], "/v1/blog/messageboard/list?blog_id=").concat(id), {
                  responseType: 'blob'
                });

              case 19:
                commentRes = _context.sent;
                _context.next = 22;
                return Object(_utils_util__WEBPACK_IMPORTED_MODULE_17__["default"])(commentRes.data);

              case 22:
                commentData = _context.sent;
                commentMessage = _proto_blog_pb__WEBPACK_IMPORTED_MODULE_15___default.a.blogComments.deserializeBinary(commentData);
                commentMessage = commentMessage.toObject();
                console.log(commentMessage);
                this.setState({
                  blogDtail: hdata.txt,
                  detailData: data,
                  commentsList: commentMessage.listList
                });

              case 27:
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
    key: "subMitComment",
    value: function () {
      var _subMitComment = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var saytext, id, message, bytes, res;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                saytext = this.state.saytext;
                id = this.props.query.id;
                message = new _proto_blog_pb__WEBPACK_IMPORTED_MODULE_15___default.a.blogComment();
                message.setContent(saytext);
                message.setBlogId(id);
                bytes = message.serializeBinary();
                _context2.prev = 6;
                _context2.next = 9;
                return axios__WEBPACK_IMPORTED_MODULE_16___default.a.post("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_14__["apiHost"], "/v1/blog/messageboard/submit"), bytes, {
                  headers: {
                    'Content-Type': 'application/octet-stream'
                  }
                });

              case 9:
                res = _context2.sent;
                console.log(res.status);
                _context2.next = 16;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](6);
                console.log(_context2.t0);

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[6, 13]]);
      }));

      function subMitComment() {
        return _subMitComment.apply(this, arguments);
      }

      return subMitComment;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          blogDtail = _this$state.blogDtail,
          detailData = _this$state.detailData,
          commentsList = _this$state.commentsList;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          background: "#fff",
          padding: "0 30px"
        },
        className: "jsx-464692746",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
        className: "jsx-464692746" + " " + "news_title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, detailData.name), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-464692746" + " " + "bloginfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
        className: "jsx-464692746",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-464692746" + " " + "author",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-464692746" + " " + "lmname",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, Object(_utils_blog_types__WEBPACK_IMPORTED_MODULE_12__["getTpValue"])(detailData.type)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-464692746" + " " + "timer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, moment__WEBPACK_IMPORTED_MODULE_13___default()(detailData.createTime).format("YYYY-MM-DD")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-464692746" + " " + "view",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, detailData.view, " \u4EBA\u5DF2\u9605\u8BFB"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          clear: 'both'
        },
        className: "jsx-464692746",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-464692746" + " " + "news_about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", {
        className: "jsx-464692746",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
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
        className: "jsx-464692746" + " " + "markdown-body editormd-preview-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          padding: "20px"
        },
        className: "jsx-464692746" + " " + "share",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-464692746" + " " + "diggit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        className: "jsx-464692746",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "\u5F88\u8D5E\u54E6\uFF01"), "(", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("b", {
        className: "jsx-464692746",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, detailData.goodNum), ")")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-464692746" + " " + "nextinfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-464692746",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "\u4E0A\u4E00\u7BC7\uFF1A", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/diary/18.html",
        className: "jsx-464692746",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "\u4E00\u4E2ASEO\u7AD9\u957F\u5206\u4EAB\u4E2A\u4EBA\u535A\u5BA2\u4EA7\u54C1\u7F51\u8D5A\u5EFA\u7AD9\u7ECF\u5386\u5168\u8FC7\u7A0B")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-464692746",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "\u4E0B\u4E00\u7BC7\uFF1A", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/diary/",
        className: "jsx-464692746",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "\u8FD4\u56DE\u5217\u8868"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-464692746" + " " + "news_pl",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
        className: "jsx-464692746",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "\u6587\u7AE0\u8BC4\u8BBA"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-464692746" + " " + "gbko",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, commentsList.map(function (item, k) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          key: k,
          className: "jsx-464692746" + " " + "fb",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
          className: "jsx-464692746",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          style: {
            color: "#000"
          },
          className: "jsx-464692746",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }, item.name), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "jsx-464692746" + " " + "fbtime",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "jsx-464692746",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: this
        }, moment__WEBPACK_IMPORTED_MODULE_13___default()(item.createTime).format("YYYY-MM-DD"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "jsx-464692746" + " " + "fbinfo",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: this
        }, item.content)));
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "plpost",
        className: "jsx-464692746",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-464692746" + " " + "saying",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-464692746",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:void(0)",
        style: {
          textDecoration: "none",
          color: "#de1513"
        },
        className: "jsx-464692746",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, "\u5171\u670934\u6761\u8BC4\u8BBA")), "\u6765\u8BF4\u4E24\u53E5\u5427..."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("textarea", {
        name: "saytext",
        onChange: function onChange(e) {
          _this2.setState({
            saytext: e.target.value
          });
        },
        rows: "6",
        id: "saytext",
        className: "jsx-464692746",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        name: "imageField",
        type: "submit",
        onClick: this.subMitComment.bind(this),
        value: "\u63D0\u4EA4",
        style: {
          outline: "none",
          cursor: "pointer"
        },
        className: "jsx-464692746",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "464692746",
        __self: this
      }, ".nextinfo.jsx-464692746 a.jsx-464692746{-webkit-text-decoration:none;text-decoration:none;color:#555;}.nextinfo.jsx-464692746 a.jsx-464692746:hover{-webkit-text-decoration:underline;text-decoration:underline;color:#222;}.yzm.jsx-464692746{margin:10px 10px 10px 0;}#plpost.jsx-464692746 input[type=\"submit\"].jsx-464692746{display:block;background:#303030;color:#fff;border:0;line-height:30px;padding:0 20px;border-radius:5px;float:right;margin-bottom:20px;margin-top:13px;margin-right:1%;}#saytext.jsx-464692746{width:99%;outline:none;resize:none;}.saying.jsx-464692746 span.jsx-464692746{float:right;}.saying.jsx-464692746{line-height:30px;color:#a9a6a6;margin-bottom:8px;}.news_pl.jsx-464692746 h2.jsx-464692746{border-bottom:#000 2px solid;line-height:40px;font-size:14px;padding-left:10px;color:#000;}.fbtime.jsx-464692746{float:right;color:#999;font-size:12px;width:66px;overflow:hidden;white-space:nowrap;}.fbtime.jsx-464692746 span.jsx-464692746{float:right;color:#999;font-size:12px;width:67px;overflow:hidden;white-space:nowrap;}p.fbtime.jsx-464692746{color:#000;}p.fbinfo.jsx-464692746{margin:10px 0;word-wrap:break-word;}.fb.jsx-464692746 ul.jsx-464692746{margin:10px 10px;padding:10px 10px 10px 70px;border-bottom:#ececec 1px solid;background:url(/static/images/erweima.jpg) no-repeat top 14px left 10px;background-size:47px 47px;}.news_pl.jsx-464692746{margin:10px 0 20px 0;width:100%;overflow:hidden;}.nextinfo.jsx-464692746{line-height:24px;width:100%;overflow:hidden;margin:20px 0;}.nextinfo.jsx-464692746>p.jsx-464692746{padding:4px 10px;border-radius:5px;}.diggit.jsx-464692746{width:160px;margin:auto;background:#E2523A;color:#fff;box-shadow:1px 2px 6px 0px rgba(0,0,0,.2);border-radius:3px;line-height:40px;text-align:center;cursor:pointer;}.news_about.jsx-464692746{color:#888888;border:1px solid #F3F3F3;padding:10px;margin:20px auto 15px auto;line-height:23px;background:none repeat 0 0 #F6F6F6;}.bloginfo.jsx-464692746{width:100%;overflow:hidden;}.news_title.jsx-464692746{font-size:24px;font-weight:normal;padding:20px 0;color:#333;margin:0;}.bloginfo.jsx-464692746 li.jsx-464692746{float:left;margin-right:20px;list-style:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0aW4vRGVza3RvcC9wcml2YXRlL25leHRqcy9wYWdlcy9kZXRhaWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUhzQixBQUdrQyxBQUlLLEFBSUEsQUFHWixBQWFGLEFBS0ksQUFHQyxBQUtZLEFBT2pCLEFBUUEsQUFRRCxBQUdHLEFBSUcsQUFPSSxBQUtKLEFBTUEsQUFJTCxBQVdNLEFBUUwsQUFJTSxBQU9KLFVBOUZBLENBb0NoQixBQWdEbUIsQUFXSSxDQTFGeEIsQUFlYSxBQVFBLEFBcUNDLEVBOUVPLEFBb0RFLEFBcUNRLENBWU4sRUFoRlQsQUFtQ2MsQUFZakIsQUFNTyxJQVhQLEVBakRHLEFBb0JDLEFBUUEsQ0E3Q2pCLEFBa0ZxQixHQW1CbkIsQ0E3QmdCLENBM0NDLEFBbUZHLEVBdkZGLENBMENGLENBL0RMLENBcUdRLENBdkZyQixBQXNDQyxBQXNCQSxHQXhDWSxBQVFBLENBK0NNLElBVk4sQ0E5RUYsQUFvRUssQ0Fia0IsQUFxRGhDLENBbkZlLEVBc0NoQixDQTFDQSxBQWFpQixBQVFBLEFBMkRELENBbEhKLEVBc0dvQixDQXhGZCxDQThFeUIsSUFWM0MsRUE5RVcsQUErR0UsQ0FsSGQsQUFzQ29CLElBU0MsQUFRQSxJQTREbkIsQ0FyR2UsQ0FWakIsTUFnRTBFLEVBN0I3RCxBQStEVSxLQXREdEIsQUFRQSxDQXpDbUIsS0F5Qm5CLE1Bb0RtQixBQVdxQixPQXZGM0IsV0E2RUssQ0E1RUUsZ0JBNkVELEFBVWxCLEdBdEZnQixlQW1EVSxBQTBCWCxDQTVFQyxjQTZFakIsRUE1RUQsU0FrREMiLCJmaWxlIjoiL1VzZXJzL2p1c3Rpbi9EZXNrdG9wL3ByaXZhdGUvbmV4dGpzL3BhZ2VzL2RldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQge2dldFRwVmFsdWV9IGZyb20gJy4uL3V0aWxzL2Jsb2dfdHlwZXMnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCB7YXBpSG9zdH0gZnJvbSAnLi4vdXRpbHMvY29uZmlnJztcbmltcG9ydCBwcm90b2J1ZiBmcm9tIFwiLi4vcHJvdG8vYmxvZ19wYlwiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHJlYWRTdHJlYW0gZnJvbSAnLi4vdXRpbHMvdXRpbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxLHF1ZXJ5LGpzb25QYWdlUmVzIH0pIHtcbiAgICBjb25zdCB1c2VyQWdlbnQgPSByZXEgPyByZXEuaGVhZGVyc1sndXNlci1hZ2VudCddIDogbmF2aWdhdG9yLnVzZXJBZ2VudFxuICAgIHJldHVybiB7IHVzZXJBZ2VudCxxdWVyeSxqc29uUGFnZVJlcyB9XG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICAgIGJsb2dEdGFpbDpcIlwiLFxuICAgICAgZGV0YWlsRGF0YTp7fSxcbiAgICAgIGNvbW1lbnRzTGlzdDpbXSxcbiAgICAgIHNheXRleHQ6XCJcIlxuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgIGNvbnN0IHtpZH0gPSB0aGlzLnByb3BzLnF1ZXJ5XG4gICAgICBsZXQgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2FwaUhvc3R9L3YxL2Jsb2cvZGV0YWlsP2lkPSR7aWR9YCx7XG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InXG4gICAgICB9KVxuICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZWFkU3RyZWFtKHJlcy5kYXRhKTtcbiAgICAgIGxldCBtZXNzYWdlID0gcHJvdG9idWYuZGV0YWlsUmVzLmRlc2VyaWFsaXplQmluYXJ5KGRhdGEpO1xuICAgICAgZGF0YSA9IG1lc3NhZ2UudG9PYmplY3QoKTtcbiAgICAgIGxldCBocmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2FwaUhvc3R9L3Rvb2wvZmlsZS9yZWFkP2tleT0ke2RhdGEuaHRtbFR4dFVybH1gLHtcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnYmxvYidcbiAgICAgIH0pXG4gICAgICBsZXQgaGRhdGEgPSBhd2FpdCByZWFkU3RyZWFtKGhyZXMuZGF0YSk7XG4gICAgICBsZXQgaG1lc3NhZ2UgPSBwcm90b2J1Zi5maWxlUmVhZFJlcy5kZXNlcmlhbGl6ZUJpbmFyeShoZGF0YSk7XG4gICAgICBoZGF0YSA9IGhtZXNzYWdlLnRvT2JqZWN0KCk7XG5cbiAgICAgIGxldCBjb21tZW50UmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2FwaUhvc3R9L3YxL2Jsb2cvbWVzc2FnZWJvYXJkL2xpc3Q/YmxvZ19pZD0ke2lkfWAse1xuICAgICAgICByZXNwb25zZVR5cGU6ICdibG9iJ1xuICAgICAgfSlcbiAgICAgIGxldCBjb21tZW50RGF0YSA9IGF3YWl0IHJlYWRTdHJlYW0oY29tbWVudFJlcy5kYXRhKTtcbiAgICAgIGxldCBjb21tZW50TWVzc2FnZSA9IHByb3RvYnVmLmJsb2dDb21tZW50cy5kZXNlcmlhbGl6ZUJpbmFyeShjb21tZW50RGF0YSk7XG4gICAgICBjb21tZW50TWVzc2FnZSA9IGNvbW1lbnRNZXNzYWdlLnRvT2JqZWN0KCk7XG4gICAgICBjb25zb2xlLmxvZyhjb21tZW50TWVzc2FnZSlcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7YmxvZ0R0YWlsOmhkYXRhLnR4dCxkZXRhaWxEYXRhOmRhdGEsY29tbWVudHNMaXN0OmNvbW1lbnRNZXNzYWdlLmxpc3RMaXN0fSlcbiAgfVxuXG4gIGFzeW5jIHN1Yk1pdENvbW1lbnQoKXtcbiAgICBjb25zdCB7c2F5dGV4dH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHtpZH0gPSB0aGlzLnByb3BzLnF1ZXJ5XG4gICAgbGV0IG1lc3NhZ2UgPSBuZXcgcHJvdG9idWYuYmxvZ0NvbW1lbnQoKTtcbiAgICAgICAgbWVzc2FnZS5zZXRDb250ZW50KHNheXRleHQpO1xuICAgICAgICBtZXNzYWdlLnNldEJsb2dJZChpZCk7XG4gICAgbGV0IGJ5dGVzID0gbWVzc2FnZS5zZXJpYWxpemVCaW5hcnkoKTtcbiAgICB0cnkge1xuICAgICAgbGV0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7YXBpSG9zdH0vdjEvYmxvZy9tZXNzYWdlYm9hcmQvc3VibWl0YCxieXRlcyx7aGVhZGVyczogeydDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nfX0pXG4gICAgICBjb25zb2xlLmxvZyhyZXMuc3RhdHVzKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG4gICAgXG4gICBcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7YmxvZ0R0YWlsLGRldGFpbERhdGEsY29tbWVudHNMaXN0fSA9IHRoaXMuc3RhdGVcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZDpcIiNmZmZcIixwYWRkaW5nOiBcIjAgMzBweFwifX0+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmV3c190aXRsZVwiPntkZXRhaWxEYXRhLm5hbWV9PC9oMz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZ2luZm9cIj5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhdXRob3JcIj48L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsbW5hbWVcIj57Z2V0VHBWYWx1ZShkZXRhaWxEYXRhLnR5cGUpfTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRpbWVyXCI+e21vbWVudChkZXRhaWxEYXRhLmNyZWF0ZVRpbWUpLmZvcm1hdChcIllZWVktTU0tRERcIil9PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidmlld1wiPntkZXRhaWxEYXRhLnZpZXd9IOS6uuW3sumYheivuzwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tjbGVhcjonYm90aCd9fT48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3c19hYm91dFwiPlxuICAgICAgICAgICAgICA8c3Ryb25nPueugOS7izwvc3Ryb25nPiB7ZGV0YWlsRGF0YS5wcmVmYWNlfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBibG9nRHRhaWx9fSBjbGFzc05hbWU9XCJtYXJrZG93bi1ib2R5IGVkaXRvcm1kLXByZXZpZXctY29udGFpbmVyXCIgcHJldmlld2NvbnRhaW5lcj1cInRydWVcIiBzdHlsZT17e3dpZHRoOlwiYXV0b1wifX0+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYXJlXCIgc3R5bGU9e3twYWRkaW5nOiBcIjIwcHhcIn19PlxuICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRpZ2dpdFwiPlxuICAgICAgICAgICAgICAgPGE+5b6I6LWe5ZOm77yBPC9hPig8Yj57ZGV0YWlsRGF0YS5nb29kTnVtfTwvYj4pXG4gICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5leHRpbmZvXCI+XG4gICAgICAgICAgICAgIDxwPuS4iuS4gOevh++8mjxhIGhyZWY9XCIvZGlhcnkvMTguaHRtbFwiPuS4gOS4qlNFT+ermemVv+WIhuS6q+S4quS6uuWNmuWuouS6p+WTgee9kei1muW7uuermee7j+WOhuWFqOi/h+eoizwvYT48L3A+XG4gICAgICAgICAgICAgIDxwPuS4i+S4gOevh++8mjxhIGhyZWY9XCIvZGlhcnkvXCI+6L+U5Zue5YiX6KGoPC9hPjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3NfcGxcIj5cbiAgICAgICAgICAgICAgPGgyPuaWh+eroOivhOiuujwvaDI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2Jrb1wiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGNvbW1lbnRzTGlzdC5tYXAoKGl0ZW0sayk9PihcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2t9IGNsYXNzTmFtZT1cImZiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tjb2xvcjpcIiMwMDBcIn19PntpdGVtLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmJ0aW1lXCI+PHNwYW4+e21vbWVudChpdGVtLmNyZWF0ZVRpbWUpLmZvcm1hdChcIllZWVktTU0tRERcIil9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZiaW5mb1wiPntpdGVtLmNvbnRlbnR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInBscG9zdFwiPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2F5aW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBzdHlsZT17e3RleHREZWNvcmF0aW9uOiBcIm5vbmVcIixjb2xvcjogXCIjZGUxNTEzXCJ9fT7lhbHmnIkzNOadoeivhOiuujwvYT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIOadpeivtOS4pOWPpeWQpy4uLlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJzYXl0ZXh0XCIgb25DaGFuZ2U9eyhlKT0+e1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzYXl0ZXh0OmUudGFyZ2V0LnZhbHVlfSlcbiAgICAgICAgICAgICAgICAgIH19IHJvd3M9XCI2XCIgaWQ9XCJzYXl0ZXh0XCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiaW1hZ2VGaWVsZFwiIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXt0aGlzLnN1Yk1pdENvbW1lbnQuYmluZCh0aGlzKX0gdmFsdWU9XCLmj5DkuqRcIiBzdHlsZT17e291dGxpbmU6IFwibm9uZVwiLGN1cnNvcjogXCJwb2ludGVyXCJ9fSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5uZXh0aW5mbyBhe1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6ICM1NTU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uZXh0aW5mbyBhOmhvdmVye1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICBjb2xvcjojMjIyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAueXptIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjcGxwb3N0IGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzAzMDMwO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxM3B4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgI3NheXRleHQge1xuICAgICAgICAgICAgICB3aWR0aDogOTklO1xuICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zYXlpbmcgc3BhbiB7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAgLnNheWluZ3tcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgY29sb3I6ICNhOWE2YTY7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgICAgIH0gXG4gICAgICAgICAgIC5uZXdzX3BsIGgye1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogIzAwMCAycHggc29saWQ7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIC5mYnRpbWV7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIHdpZHRoOiA2NnB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgLmZidGltZSBzcGFue1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB3aWR0aDogNjdweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIHAuZmJ0aW1le1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgcC5mYmluZm97XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgICAgfVxuICAgICAgICAgICAuZmIgdWx7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDcwcHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAjZWNlY2VjIDFweCBzb2xpZDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL2ltYWdlcy9lcndlaW1hLmpwZykgbm8tcmVwZWF0IHRvcCAxNHB4IGxlZnQgMTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogNDdweCA0N3B4O1xuICAgICAgICAgICB9ICBcbiAgICAgICAgICAgLm5ld3NfcGx7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMCAyMHB4IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgLm5leHRpbmZve1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgICAgICAgfVxuICAgICAgICAgICAubmV4dGluZm8gPiBwe1xuICAgICAgICAgICAgcGFkZGluZzogNHB4IDEwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgLmRpZ2dpdHtcbiAgICAgICAgICAgIHdpZHRoOiAxNjBweDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNFMjUyM0E7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAycHggNnB4IDBweCByZ2JhKDAsMCwwLC4yKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIC5uZXdzX2Fib3V0IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzg4ODg4ODtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRjNGM0YzO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG8gMTVweCBhdXRvO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmUgcmVwZWF0IDAgMCAjRjZGNkY2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJsb2dpbmZvIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmV3c190aXRsZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJsb2dpbmZvIGxpIHtcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L0xheW91dD4gICAgIFxuICAgIClcbiAgfVxufVxuXG5cbiJdfQ== */\n/*@ sourceURL=/Users/justin/Desktop/private/nextjs/pages/detail.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(_ref) {
        var req, query, jsonPageRes, userAgent;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                req = _ref.req, query = _ref.query, jsonPageRes = _ref.jsonPageRes;
                userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
                return _context3.abrupt("return", {
                  userAgent: userAgent,
                  query: query,
                  jsonPageRes: jsonPageRes
                });

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
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
//# sourceMappingURL=detail.js.6f4d711912cd5d692255.hot-update.js.map