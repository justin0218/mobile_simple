webpackHotUpdate("static/development/pages/message.js",{

/***/ "./pages/message.js":
/*!**************************!*\
  !*** ./pages/message.js ***!
  \**************************/
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









var _jsxFileName = "/Users/justin/Desktop/private/nextjs/pages/message.js";










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
      commentTotal: 0,
      saytext: "",
      loadings: {
        "comment": false
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(_default, [{
    key: "getComments",
    value: function () {
      var _getComments = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var commentRes, commentData, commentMessage;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.setState({
                  loadings: {
                    comment: true
                  }
                });
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_16___default.a.get("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_14__["apiHost"], "/v1/blog/messageboard/list"), {
                  responseType: 'blob'
                });

              case 3:
                commentRes = _context.sent;
                _context.next = 6;
                return Object(_utils_util__WEBPACK_IMPORTED_MODULE_17__["default"])(commentRes.data);

              case 6:
                commentData = _context.sent;
                commentMessage = _proto_blog_pb__WEBPACK_IMPORTED_MODULE_15___default.a.blogComments.deserializeBinary(commentData);
                commentMessage = commentMessage.toObject();
                console.log(commentMessage);
                this.setState({
                  commentsList: commentMessage.listList,
                  commentTotal: commentMessage.total
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getComments() {
        return _getComments.apply(this, arguments);
      }

      return getComments;
    }()
  }, {
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var id, res, data, message, hres, hdata, hmessage;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = this.props.query.id;
                _context2.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_16___default.a.get("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_14__["apiHost"], "/v1/blog/detail?id=").concat(id), {
                  responseType: 'blob'
                });

              case 3:
                res = _context2.sent;
                _context2.next = 6;
                return Object(_utils_util__WEBPACK_IMPORTED_MODULE_17__["default"])(res.data);

              case 6:
                data = _context2.sent;
                message = _proto_blog_pb__WEBPACK_IMPORTED_MODULE_15___default.a.detailRes.deserializeBinary(data);
                data = message.toObject(); // console.log(data)

                _context2.next = 11;
                return axios__WEBPACK_IMPORTED_MODULE_16___default.a.get("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_14__["apiHost"], "/tool/file/read?key=").concat(data.htmlTxtUrl), {
                  responseType: 'blob'
                });

              case 11:
                hres = _context2.sent;
                _context2.next = 14;
                return Object(_utils_util__WEBPACK_IMPORTED_MODULE_17__["default"])(hres.data);

              case 14:
                hdata = _context2.sent;
                hmessage = _proto_blog_pb__WEBPACK_IMPORTED_MODULE_15___default.a.fileReadRes.deserializeBinary(hdata);
                hdata = hmessage.toObject();
                _context2.next = 19;
                return this.getComments();

              case 19:
                this.setState({
                  blogDtail: hdata.txt,
                  detailData: data
                });

              case 20:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
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
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var saytext, id, message, bytes, res;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.setState({
                  loadings: {
                    comment: true
                  }
                });
                saytext = this.state.saytext;
                id = this.props.query.id;
                message = new _proto_blog_pb__WEBPACK_IMPORTED_MODULE_15___default.a.blogComment();
                message.setContent(saytext);
                message.setBlogId(id);
                bytes = message.serializeBinary();
                _context3.prev = 7;
                _context3.next = 10;
                return axios__WEBPACK_IMPORTED_MODULE_16___default.a.post("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_14__["apiHost"], "/v1/blog/messageboard/submit"), bytes, {
                  headers: {
                    'Content-Type': 'application/octet-stream'
                  }
                });

              case 10:
                res = _context3.sent;
                _context3.next = 13;
                return this.getComments();

              case 13:
                _context3.next = 19;
                break;

              case 15:
                _context3.prev = 15;
                _context3.t0 = _context3["catch"](7);
                console.log(_context3.t0);

                if (_context3.t0 == "Error: Request failed with status code 400") {
                  alert("评论内容不能为空");
                } else if (_context3.t0 == "Error: Request failed with status code 500") {
                  alert("内部出现错误");
                } else if (_context3.t0 == "Error: Request failed with status code 403") {
                  alert("今天您对改博客的评论已达到上限");
                }

              case 19:
                this.setState({
                  loadings: {
                    comment: false
                  },
                  saytext: ""
                });

              case 20:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[7, 15]]);
      }));

      function subMitComment() {
        return _subMitComment.apply(this, arguments);
      }

      return subMitComment;
    }()
  }, {
    key: "makeGood",
    value: function () {
      var _makeGood = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var detailData, id, res;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                detailData = this.state.detailData;
                id = this.props.query.id;
                _context4.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_16___default.a.post("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_14__["apiHost"], "/v1/blog/good/make?blog_id=").concat(id));

              case 4:
                res = _context4.sent;
                detailData.goodNum++;
                this.setState({
                  detailData: detailData
                });

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function makeGood() {
        return _makeGood.apply(this, arguments);
      }

      return makeGood;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          blogDtail = _this$state.blogDtail,
          detailData = _this$state.detailData,
          commentsList = _this$state.commentsList,
          loadings = _this$state.loadings,
          saytext = _this$state.saytext,
          commentTotal = _this$state.commentTotal;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          background: "#fff",
          padding: "0 30px"
        },
        className: "jsx-581838910",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
        className: "jsx-581838910" + " " + "news_title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, detailData.name), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-581838910" + " " + "bloginfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
        className: "jsx-581838910",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-581838910" + " " + "author",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-581838910" + " " + "lmname",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, Object(_utils_blog_types__WEBPACK_IMPORTED_MODULE_12__["getTpValue"])(detailData.type)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-581838910" + " " + "timer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, moment__WEBPACK_IMPORTED_MODULE_13___default()(detailData.createTime).format("YYYY-MM-DD")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-581838910" + " " + "view",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, detailData.view, " \u4EBA\u5DF2\u9605\u8BFB"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          clear: 'both'
        },
        className: "jsx-581838910",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-581838910" + " " + "news_about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", {
        className: "jsx-581838910",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
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
        className: "jsx-581838910" + " " + "markdown-body editormd-preview-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          padding: "20px"
        },
        className: "jsx-581838910" + " " + "share",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        onClick: this.makeGood.bind(this),
        className: "jsx-581838910" + " " + "diggit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        className: "jsx-581838910",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, "\u5F88\u8D5E\u54E6\uFF01"), "(", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("b", {
        className: "jsx-581838910",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, detailData.goodNum), ")")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-581838910" + " " + "nextinfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, detailData.prev ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-581838910",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "\u4E0A\u4E00\u7BC7\uFF1A", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/detail?id=".concat(detailData.prev.id),
        className: "jsx-581838910",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, detailData.prev.name)) : react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-581838910",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "\u4E0A\u4E00\u7BC7\uFF1A", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/article",
        className: "jsx-581838910",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "\u56DE\u5230\u5217\u8868")), detailData.next ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-581838910",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "\u4E0B\u4E00\u7BC7\uFF1A", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/detail?id=".concat(detailData.next.id),
        className: "jsx-581838910",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, detailData.next.name)) : react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-581838910",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "\u4E0B\u4E00\u7BC7\uFF1A", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/article",
        className: "jsx-581838910",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "\u56DE\u5230\u5217\u8868"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-581838910" + " " + "news_pl",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
        className: "jsx-581838910",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, "\u6587\u7AE0\u8BC4\u8BBA"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-581838910" + " " + "gbko",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, commentsList.map(function (item, k) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          key: k,
          className: "jsx-581838910" + " " + "fb",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
          className: "jsx-581838910",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          style: {
            color: "#000"
          },
          className: "jsx-581838910",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          },
          __self: this
        }, item.name), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "jsx-581838910" + " " + "fbtime",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "jsx-581838910",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          },
          __self: this
        }, moment__WEBPACK_IMPORTED_MODULE_13___default()(item.createTime).format("YYYY-MM-DD"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "jsx-581838910" + " " + "fbinfo",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          },
          __self: this
        }, item.content)));
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "plpost",
        className: "jsx-581838910",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        style: commentsList.length == 0 ? {
          marginTop: 8
        } : {},
        className: "jsx-581838910" + " " + "saying",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-581838910",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:void(0)",
        style: {
          textDecoration: "none",
          color: "#de1513"
        },
        className: "jsx-581838910",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, "\u5171\u6709", commentTotal, "\u6761\u8BC4\u8BBA")), "\u6765\u8BF4\u4E24\u53E5\u5427..."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("textarea", {
        name: "saytext",
        value: saytext,
        onChange: function onChange(e) {
          _this2.setState({
            saytext: e.target.value
          });
        },
        rows: "6",
        id: "saytext",
        className: "jsx-581838910",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
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
        className: "jsx-581838910",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "581838910",
        __self: this
      }, ".nextinfo.jsx-581838910 a.jsx-581838910{-webkit-text-decoration:none;text-decoration:none;color:#555;}.nextinfo.jsx-581838910 a.jsx-581838910:hover{-webkit-text-decoration:underline;text-decoration:underline;color:#222;}.yzm.jsx-581838910{margin:10px 10px 10px 0;}#plpost.jsx-581838910 input[type=\"submit\"].jsx-581838910{display:block;background:#303030;color:#fff;border:0;line-height:30px;padding:0 20px;border-radius:5px;float:right;margin-bottom:20px;margin-top:13px;margin-right:1%;}#saytext.jsx-581838910{width:618px;outline:none;resize:none;}.saying.jsx-581838910 span.jsx-581838910{float:right;}.saying.jsx-581838910{line-height:30px;color:#a9a6a6;margin-bottom:8px;}.news_pl.jsx-581838910 h2.jsx-581838910{border-bottom:#000 2px solid;line-height:40px;font-size:14px;padding-left:10px;color:#000;}.fbtime.jsx-581838910{float:right;color:#999;font-size:12px;width:66px;overflow:hidden;white-space:nowrap;}.fbtime.jsx-581838910 span.jsx-581838910{float:right;color:#999;font-size:12px;width:67px;overflow:hidden;white-space:nowrap;}p.fbtime.jsx-581838910{color:#000;}p.fbinfo.jsx-581838910{margin:10px 0;word-wrap:break-word;}.fb.jsx-581838910 ul.jsx-581838910{margin:10px 10px;padding:10px 10px 10px 70px;border-bottom:#ececec 1px solid;background:url(/static/images/erweima.jpg) no-repeat top 14px left 10px;background-size:47px 47px;}.news_pl.jsx-581838910{margin:10px 0 20px 0;width:100%;overflow:hidden;}.nextinfo.jsx-581838910{line-height:24px;width:100%;overflow:hidden;margin:20px 0;}.nextinfo.jsx-581838910>p.jsx-581838910{padding:4px 10px;border-radius:5px;}.diggit.jsx-581838910{width:160px;margin:auto;background:#E2523A;color:#fff;box-shadow:1px 2px 6px 0px rgba(0,0,0,.2);border-radius:3px;line-height:40px;text-align:center;cursor:pointer;outline:none;display:block;}.news_about.jsx-581838910{color:#888888;border:1px solid #F3F3F3;padding:10px;margin:20px auto 15px auto;line-height:23px;background:none repeat 0 0 #F6F6F6;}.bloginfo.jsx-581838910{width:100%;overflow:hidden;}.news_title.jsx-581838910{font-size:24px;font-weight:normal;padding:20px 0;color:#333;margin:0;}.bloginfo.jsx-581838910 li.jsx-581838910{float:left;margin-right:20px;list-style:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0aW4vRGVza3RvcC9wcml2YXRlL25leHRqcy9wYWdlcy9tZXNzYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Kc0IsQUFHa0MsQUFJSyxBQUlBLEFBR1osQUFhQSxBQUtFLEFBR0MsQUFLWSxBQU9qQixBQVFBLEFBUUQsQUFHRyxBQUlHLEFBT0ksQUFLSixBQU1BLEFBSUwsQUFhTSxBQVFMLEFBSU0sQUFPSixXQTVEaEIsQUFrRG1CLEFBV0ksQ0FqR1AsQUFLakIsQUFlYSxBQVFBLEFBcUNDLEVBOUVPLEFBb0RFLEFBdUNRLENBWU4sRUFsRlQsQUFtQ2MsQUFZakIsQUFNTyxJQVhQLEVBN0JJLEFBUUEsQ0E3Q2pCLEFBa0ZxQixDQWpFTCxFQXNGZCxDQS9CZ0IsQ0EzQ0MsQUFxRkcsRUF6RkYsQ0EwQ0YsQ0EvREwsQ0F1R1EsQ0FuRHBCLEFBc0JBLEVBNURELENBb0JhLEFBUUEsQ0FpRE0sSUFaTixDQTlFRixBQW9FSyxDQWJrQixBQXVEaEMsQ0FyRmUsRUFzQ2hCLENBMUNBLEFBYWlCLEFBUUEsQUE2REQsQ0FwSEosRUF3R29CLENBMUZkLENBOEV5QixJQVYzQyxFQTlFVyxBQWlIRSxDQXBIZCxBQXNDb0IsSUFTQyxBQVFBLElBOERuQixDQXZHZSxDQVZqQixNQWdFMEUsRUE3QjdELEFBaUVVLEtBeER0QixBQVFBLENBekNtQixLQXlCbkIsTUFvRG1CLEFBYXFCLE9BekYzQixXQTZFSyxDQTVFRSxnQkE2RUQsQUFZbEIsR0F4RmdCLGVBbURVLEFBMEJYLENBNUVDLGNBNkVILEVBNUVmLFNBa0RDLEVBMkJlLGNBQ2YiLCJmaWxlIjoiL1VzZXJzL2p1c3Rpbi9EZXNrdG9wL3ByaXZhdGUvbmV4dGpzL3BhZ2VzL21lc3NhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IHtnZXRUcFZhbHVlfSBmcm9tICcuLi91dGlscy9ibG9nX3R5cGVzJ1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQge2FwaUhvc3R9IGZyb20gJy4uL3V0aWxzL2NvbmZpZyc7XG5pbXBvcnQgcHJvdG9idWYgZnJvbSBcIi4uL3Byb3RvL2Jsb2dfcGJcIjtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCByZWFkU3RyZWFtIGZyb20gJy4uL3V0aWxzL3V0aWwnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHJlcSxxdWVyeSxqc29uUGFnZVJlcyB9KSB7XG4gICAgY29uc3QgdXNlckFnZW50ID0gcmVxID8gcmVxLmhlYWRlcnNbJ3VzZXItYWdlbnQnXSA6IG5hdmlnYXRvci51c2VyQWdlbnRcbiAgICByZXR1cm4geyB1c2VyQWdlbnQscXVlcnksanNvblBhZ2VSZXMgfVxuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgICBibG9nRHRhaWw6XCJcIixcbiAgICAgIGRldGFpbERhdGE6e30sXG4gICAgICBjb21tZW50c0xpc3Q6W10sXG4gICAgICBjb21tZW50VG90YWw6MCxcbiAgICAgIHNheXRleHQ6XCJcIixcbiAgICAgIGxvYWRpbmdzOntcbiAgICAgICAgXCJjb21tZW50XCI6ZmFsc2VcbiAgICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldENvbW1lbnRzKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZ3M6e2NvbW1lbnQ6dHJ1ZX19KVxuICAgIGxldCBjb21tZW50UmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2FwaUhvc3R9L3YxL2Jsb2cvbWVzc2FnZWJvYXJkL2xpc3RgLHtcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InXG4gICAgfSlcbiAgICBsZXQgY29tbWVudERhdGEgPSBhd2FpdCByZWFkU3RyZWFtKGNvbW1lbnRSZXMuZGF0YSk7XG4gICAgbGV0IGNvbW1lbnRNZXNzYWdlID0gcHJvdG9idWYuYmxvZ0NvbW1lbnRzLmRlc2VyaWFsaXplQmluYXJ5KGNvbW1lbnREYXRhKTtcbiAgICBjb21tZW50TWVzc2FnZSA9IGNvbW1lbnRNZXNzYWdlLnRvT2JqZWN0KCk7XG4gICAgY29uc29sZS5sb2coY29tbWVudE1lc3NhZ2UpXG4gICAgdGhpcy5zZXRTdGF0ZSh7Y29tbWVudHNMaXN0OmNvbW1lbnRNZXNzYWdlLmxpc3RMaXN0LGNvbW1lbnRUb3RhbDpjb21tZW50TWVzc2FnZS50b3RhbH0pXG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgY29uc3Qge2lkfSA9IHRoaXMucHJvcHMucXVlcnlcbiAgICAgIGxldCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YXBpSG9zdH0vdjEvYmxvZy9kZXRhaWw/aWQ9JHtpZH1gLHtcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnYmxvYidcbiAgICAgIH0pXG4gICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlYWRTdHJlYW0ocmVzLmRhdGEpO1xuICAgICAgbGV0IG1lc3NhZ2UgPSBwcm90b2J1Zi5kZXRhaWxSZXMuZGVzZXJpYWxpemVCaW5hcnkoZGF0YSk7XG4gICAgICBkYXRhID0gbWVzc2FnZS50b09iamVjdCgpO1xuICAgICAgLy8gY29uc29sZS5sb2coZGF0YSlcbiAgICAgIGxldCBocmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2FwaUhvc3R9L3Rvb2wvZmlsZS9yZWFkP2tleT0ke2RhdGEuaHRtbFR4dFVybH1gLHtcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnYmxvYidcbiAgICAgIH0pXG4gICAgICBsZXQgaGRhdGEgPSBhd2FpdCByZWFkU3RyZWFtKGhyZXMuZGF0YSk7XG4gICAgICBsZXQgaG1lc3NhZ2UgPSBwcm90b2J1Zi5maWxlUmVhZFJlcy5kZXNlcmlhbGl6ZUJpbmFyeShoZGF0YSk7XG4gICAgICBoZGF0YSA9IGhtZXNzYWdlLnRvT2JqZWN0KCk7XG4gICAgICBhd2FpdCB0aGlzLmdldENvbW1lbnRzKCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtibG9nRHRhaWw6aGRhdGEudHh0LGRldGFpbERhdGE6ZGF0YX0pXG4gIH1cblxuICBhc3luYyBzdWJNaXRDb21tZW50KCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZ3M6e2NvbW1lbnQ6dHJ1ZX19KVxuICAgIGNvbnN0IHtzYXl0ZXh0fSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qge2lkfSA9IHRoaXMucHJvcHMucXVlcnlcbiAgICBsZXQgbWVzc2FnZSA9IG5ldyBwcm90b2J1Zi5ibG9nQ29tbWVudCgpO1xuICAgICAgICBtZXNzYWdlLnNldENvbnRlbnQoc2F5dGV4dCk7XG4gICAgICAgIG1lc3NhZ2Uuc2V0QmxvZ0lkKGlkKTtcbiAgICBsZXQgYnl0ZXMgPSBtZXNzYWdlLnNlcmlhbGl6ZUJpbmFyeSgpO1xuICAgIHRyeSB7XG4gICAgICBsZXQgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgJHthcGlIb3N0fS92MS9ibG9nL21lc3NhZ2Vib2FyZC9zdWJtaXRgLGJ5dGVzLHtoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSd9fSlcbiAgICAgIGF3YWl0IHRoaXMuZ2V0Q29tbWVudHMoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICBpZihlcnJvciA9PSBcIkVycm9yOiBSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlIDQwMFwiKXtcbiAgICAgICAgYWxlcnQoXCLor4TorrrlhoXlrrnkuI3og73kuLrnqbpcIilcbiAgICAgIH1lbHNlIGlmKGVycm9yID09IFwiRXJyb3I6IFJlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgNTAwXCIpe1xuICAgICAgICBhbGVydChcIuWGhemDqOWHuueOsOmUmeivr1wiKVxuICAgICAgfWVsc2UgaWYoZXJyb3IgPT0gXCJFcnJvcjogUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSA0MDNcIil7XG4gICAgICAgIGFsZXJ0KFwi5LuK5aSp5oKo5a+55pS55Y2a5a6i55qE6K+E6K665bey6L6+5Yiw5LiK6ZmQXCIpXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmdzOntjb21tZW50OmZhbHNlfSxzYXl0ZXh0OlwiXCJ9KVxuICB9XG5cbiAgYXN5bmMgbWFrZUdvb2QoKXtcbiAgICBsZXQge2RldGFpbERhdGF9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7aWR9ID0gdGhpcy5wcm9wcy5xdWVyeVxuICAgIGxldCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGAke2FwaUhvc3R9L3YxL2Jsb2cvZ29vZC9tYWtlP2Jsb2dfaWQ9JHtpZH1gKVxuICAgIGRldGFpbERhdGEuZ29vZE51bSsrXG4gICAgdGhpcy5zZXRTdGF0ZSh7ZGV0YWlsRGF0YX0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge2Jsb2dEdGFpbCxkZXRhaWxEYXRhLGNvbW1lbnRzTGlzdCxsb2FkaW5ncyxzYXl0ZXh0LGNvbW1lbnRUb3RhbH0gPSB0aGlzLnN0YXRlXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmQ6XCIjZmZmXCIscGFkZGluZzogXCIwIDMwcHhcIn19PlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm5ld3NfdGl0bGVcIj57ZGV0YWlsRGF0YS5uYW1lfTwvaDM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dpbmZvXCI+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYXV0aG9yXCI+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibG1uYW1lXCI+e2dldFRwVmFsdWUoZGV0YWlsRGF0YS50eXBlKX08L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0aW1lclwiPnttb21lbnQoZGV0YWlsRGF0YS5jcmVhdGVUaW1lKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpfTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInZpZXdcIj57ZGV0YWlsRGF0YS52aWV3fSDkurrlt7LpmIXor7s8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Y2xlYXI6J2JvdGgnfX0+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3NfYWJvdXRcIj5cbiAgICAgICAgICAgICAgPHN0cm9uZz7nroDku4s8L3N0cm9uZz4ge2RldGFpbERhdGEucHJlZmFjZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogYmxvZ0R0YWlsfX0gY2xhc3NOYW1lPVwibWFya2Rvd24tYm9keSBlZGl0b3JtZC1wcmV2aWV3LWNvbnRhaW5lclwiIHByZXZpZXdjb250YWluZXI9XCJ0cnVlXCIgc3R5bGU9e3t3aWR0aDpcImF1dG9cIn19PjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFyZVwiIHN0eWxlPXt7cGFkZGluZzogXCIyMHB4XCJ9fT5cbiAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRpZ2dpdFwiIG9uQ2xpY2s9e3RoaXMubWFrZUdvb2QuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICA8YT7lvojotZ7lk6bvvIE8L2E+KDxiPntkZXRhaWxEYXRhLmdvb2ROdW19PC9iPilcbiAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXh0aW5mb1wiPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGV0YWlsRGF0YS5wcmV2ID8gPHA+5LiK5LiA56+H77yaPGEgaHJlZj17YC9kZXRhaWw/aWQ9JHtkZXRhaWxEYXRhLnByZXYuaWR9YH0+e2RldGFpbERhdGEucHJldi5uYW1lfTwvYT48L3A+OjxwPuS4iuS4gOevh++8mjxhIGhyZWY9e2AvYXJ0aWNsZWB9PuWbnuWIsOWIl+ihqDwvYT48L3A+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRldGFpbERhdGEubmV4dCA/IDxwPuS4i+S4gOevh++8mjxhIGhyZWY9e2AvZGV0YWlsP2lkPSR7ZGV0YWlsRGF0YS5uZXh0LmlkfWB9PntkZXRhaWxEYXRhLm5leHQubmFtZX08L2E+PC9wPjo8cD7kuIvkuIDnr4fvvJo8YSBocmVmPXtgL2FydGljbGVgfT7lm57liLDliJfooag8L2E+PC9wPlxuICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3NfcGxcIj5cbiAgICAgICAgICAgICAgICA8aDI+5paH56ug6K+E6K66PC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdia29cIj5cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29tbWVudHNMaXN0Lm1hcCgoaXRlbSxrKT0+KFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtrfSBjbGFzc05hbWU9XCJmYlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2NvbG9yOlwiIzAwMFwifX0+e2l0ZW0ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZidGltZVwiPjxzcGFuPnttb21lbnQoaXRlbS5jcmVhdGVUaW1lKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZiaW5mb1wiPntpdGVtLmNvbnRlbnR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwbHBvc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2F5aW5nXCIgc3R5bGU9e2NvbW1lbnRzTGlzdC5sZW5ndGggPT0gMCA/IHttYXJnaW5Ub3A6IDh9Ont9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsY29sb3I6IFwiI2RlMTUxM1wifX0+5YWx5pyJe2NvbW1lbnRUb3RhbH3mnaHor4Torro8L2E+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIOadpeivtOS4pOWPpeWQpy4uLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwic2F5dGV4dFwiIHZhbHVlPXtzYXl0ZXh0fSBvbkNoYW5nZT17KGUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2F5dGV4dDplLnRhcmdldC52YWx1ZX0pXG4gICAgICAgICAgICAgICAgICAgIH19IHJvd3M9XCI2XCIgaWQ9XCJzYXl0ZXh0XCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJpbWFnZUZpZWxkXCIgdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e3RoaXMuc3ViTWl0Q29tbWVudC5iaW5kKHRoaXMpfSB2YWx1ZT1cIuaPkOS6pFwiIHN0eWxlPXt7b3V0bGluZTogXCJub25lXCIsY3Vyc29yOiBcInBvaW50ZXJcIn19IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5uZXh0aW5mbyBhe1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6ICM1NTU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uZXh0aW5mbyBhOmhvdmVye1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICBjb2xvcjojMjIyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAueXptIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjcGxwb3N0IGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzAzMDMwO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxM3B4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgI3NheXRleHQge1xuICAgICAgICAgICAgICB3aWR0aDogNjE4cHg7XG4gICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNheWluZyBzcGFuIHtcbiAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgICAuc2F5aW5ne1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBjb2xvcjogI2E5YTZhNjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgICAgfSBcbiAgICAgICAgICAgLm5ld3NfcGwgaDJ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAjMDAwIDJweCBzb2xpZDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgLmZidGltZXtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgd2lkdGg6IDY2cHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgfVxuICAgICAgICAgICAuZmJ0aW1lIHNwYW57XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIHdpZHRoOiA2N3B4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgcC5mYnRpbWV7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgfVxuICAgICAgICAgICBwLmZiaW5mb3tcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIC5mYiB1bHtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggNzBweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206ICNlY2VjZWMgMXB4IHNvbGlkO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKC9zdGF0aWMvaW1hZ2VzL2Vyd2VpbWEuanBnKSBuby1yZXBlYXQgdG9wIDE0cHggbGVmdCAxMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA0N3B4IDQ3cHg7XG4gICAgICAgICAgIH0gIFxuICAgICAgICAgICAubmV3c19wbHtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIDIwcHggMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgfVxuICAgICAgICAgICAubmV4dGluZm97XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIC5uZXh0aW5mbyA+IHB7XG4gICAgICAgICAgICBwYWRkaW5nOiA0cHggMTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgfVxuICAgICAgICAgICAuZGlnZ2l0e1xuICAgICAgICAgICAgd2lkdGg6IDE2MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI0UyNTIzQTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDJweCA2cHggMHB4IHJnYmEoMCwwLDAsLjIpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgLm5ld3NfYWJvdXQge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjODg4ODg4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGM0YzRjM7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggYXV0byAxNXB4IGF1dG87XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZSByZXBlYXQgMCAwICNGNkY2RjY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmxvZ2luZm8ge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uZXdzX3RpdGxlIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmxvZ2luZm8gbGkge1xuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PiAgICAgXG4gICAgKVxuICB9XG59XG5cblxuIl19 */\n/*@ sourceURL=/Users/justin/Desktop/private/nextjs/pages/message.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(_ref) {
        var req, query, jsonPageRes, userAgent;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                req = _ref.req, query = _ref.query, jsonPageRes = _ref.jsonPageRes;
                userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
                return _context5.abrupt("return", {
                  userAgent: userAgent,
                  query: query,
                  jsonPageRes: jsonPageRes
                });

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
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
//# sourceMappingURL=message.js.886e88c9254f92df491a.hot-update.js.map