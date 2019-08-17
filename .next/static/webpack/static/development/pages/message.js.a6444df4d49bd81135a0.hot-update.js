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
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.getComments();

              case 2:
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
        var saytext, message, bytes, res;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                saytext = this.state.saytext;
                message = new _proto_blog_pb__WEBPACK_IMPORTED_MODULE_15___default.a.blogComment();
                message.setContent(saytext);
                message.setBlogId(0);
                bytes = message.serializeBinary();
                _context3.prev = 5;
                _context3.next = 8;
                return axios__WEBPACK_IMPORTED_MODULE_16___default.a.post("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_14__["apiHost"], "/v1/blog/messageboard/submit"), bytes, {
                  headers: {
                    'Content-Type': 'application/octet-stream'
                  }
                });

              case 8:
                res = _context3.sent;
                _context3.next = 11;
                return this.getComments();

              case 11:
                _context3.next = 17;
                break;

              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3["catch"](5);
                console.log(_context3.t0);

                if (_context3.t0 == "Error: Request failed with status code 400") {
                  alert("评论内容不能为空");
                } else if (_context3.t0 == "Error: Request failed with status code 500") {
                  alert("内部出现错误");
                } else if (_context3.t0 == "Error: Request failed with status code 403") {
                  alert("今天您对改博客的评论已达到上限");
                }

              case 17:
                this.setState({
                  loadings: {
                    comment: false
                  },
                  saytext: ""
                });

              case 18:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[5, 13]]);
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
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          background: "#fff",
          padding: "0 30px"
        },
        className: "jsx-2330881404",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2330881404" + " " + "news_pl",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2330881404" + " " + "gbko",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, commentsList.map(function (item, k) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          key: k,
          className: "jsx-2330881404" + " " + "fb",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
          className: "jsx-2330881404",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          style: {
            color: "#000"
          },
          className: "jsx-2330881404",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, item.name), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "jsx-2330881404" + " " + "fbtime",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "jsx-2330881404",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, moment__WEBPACK_IMPORTED_MODULE_13___default()(item.createTime).format("YYYY-MM-DD"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "jsx-2330881404" + " " + "fbinfo",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }, item.content)));
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "plpost",
        className: "jsx-2330881404",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        style: commentsList.length == 0 ? {
          marginTop: 8
        } : {},
        className: "jsx-2330881404" + " " + "saying",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-2330881404",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:void(0)",
        style: {
          textDecoration: "none",
          color: "#de1513"
        },
        className: "jsx-2330881404",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "\u5171\u6709", commentTotal, "\u6761\u7559\u8A00")), "\u6765\u8BF4\u4E24\u53E5\u5427..."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("textarea", {
        name: "saytext",
        value: saytext,
        onChange: function onChange(e) {
          _this2.setState({
            saytext: e.target.value
          });
        },
        rows: "6",
        id: "saytext",
        className: "jsx-2330881404",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
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
        className: "jsx-2330881404",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "2330881404",
        __self: this
      }, ".nextinfo.jsx-2330881404 a.jsx-2330881404{-webkit-text-decoration:none;text-decoration:none;color:#555;}.nextinfo.jsx-2330881404 a.jsx-2330881404:hover{-webkit-text-decoration:underline;text-decoration:underline;color:#222;}.yzm.jsx-2330881404{margin:10px 10px 10px 0;}#plpost.jsx-2330881404 input[type=\"submit\"].jsx-2330881404{display:block;background:#303030;color:#fff;border:0;line-height:30px;padding:0 20px;border-radius:5px;float:right;margin-bottom:20px;margin-top:13px;margin-right:1%;}#saytext.jsx-2330881404{width:618px;outline:none;resize:none;}.saying.jsx-2330881404 span.jsx-2330881404{float:right;}.saying.jsx-2330881404{line-height:30px;color:#a9a6a6;margin-bottom:8px;}.news_pl.jsx-2330881404 h2.jsx-2330881404{border-bottom:#000 2px solid;line-height:40px;font-size:14px;padding-left:10px;color:#000;}.fbtime.jsx-2330881404{float:right;color:#999;font-size:12px;width:66px;overflow:hidden;white-space:nowrap;}.fbtime.jsx-2330881404 span.jsx-2330881404{float:right;color:#999;font-size:12px;width:67px;overflow:hidden;white-space:nowrap;}p.fbtime.jsx-2330881404{color:#000;}p.fbinfo.jsx-2330881404{margin:10px 0;word-wrap:break-word;}.fb.jsx-2330881404 ul.jsx-2330881404{margin:10px 10px;padding:10px 10px 10px 70px;border-bottom:#ececec 1px solid;background:url(/static/images/erweima.jpg) no-repeat top 14px left 10px;background-size:47px 47px;}.news_pl.jsx-2330881404{width:100%;overflow:hidden;}.nextinfo.jsx-2330881404{line-height:24px;width:100%;overflow:hidden;margin:20px 0;}.nextinfo.jsx-2330881404>p.jsx-2330881404{padding:4px 10px;border-radius:5px;}.diggit.jsx-2330881404{width:160px;margin:auto;background:#E2523A;color:#fff;box-shadow:1px 2px 6px 0px rgba(0,0,0,.2);border-radius:3px;line-height:40px;text-align:center;cursor:pointer;outline:none;display:block;}.news_about.jsx-2330881404{color:#888888;border:1px solid #F3F3F3;padding:10px;margin:20px auto 15px auto;line-height:23px;background:none repeat 0 0 #F6F6F6;}.bloginfo.jsx-2330881404{width:100%;overflow:hidden;}.news_title.jsx-2330881404{font-size:24px;font-weight:normal;padding:20px 0;color:#333;margin:0;}.bloginfo.jsx-2330881404 li.jsx-2330881404{float:left;margin-right:20px;list-style:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0aW4vRGVza3RvcC9wcml2YXRlL25leHRqcy9wYWdlcy9tZXNzYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVHc0IsQUFHa0MsQUFJSyxBQUlBLEFBR1osQUFhQSxBQUtFLEFBR0MsQUFLWSxBQU9qQixBQVFBLEFBUUQsQUFHRyxBQUlHLEFBT04sQUFJTSxBQU1BLEFBSUwsQUFhTSxBQVFMLEFBSU0sQUFPSixXQTNEaEIsQUFjaUIsQUFtQ0UsQUFXSSxDQWhHUCxBQUtqQixBQWVhLEFBUUEsQUFvQ0MsRUE3RU8sQUFvREUsQUFzQ1EsQ0FZTixFQWpGVCxBQW1DYyxBQVdqQixBQU1PLE1BdkNILEFBUUEsQ0E3Q2pCLEFBaUZxQixDQWhFTCxFQWtEZixBQW1DQyxDQS9CZ0IsQ0ExQ0MsQUFvRkcsRUF4RkYsRUFyQlAsQ0FzR1EsQ0FsRHBCLEFBcUJBLEVBM0RELENBb0JhLEFBUUEsQ0FnRE0sSUFaTixDQTdFRixBQW1FSyxDQVprQixBQXNEaEMsQ0FwRmUsR0FKaEIsQUFhaUIsQUFRQSxBQTRERCxDQW5ISixFQXVHb0IsQ0F6RmQsQ0E2RXlCLElBVjNDLEVBN0VXLEFBZ0hFLENBbkhkLEFBc0NvQixJQVNDLEFBUUEsSUE2RG5CLENBdEdlLENBVmpCLE1BZ0UwRSxFQTdCN0QsQUFnRVUsS0F2RHRCLEFBUUEsQ0F6Q21CLEtBeUJuQixNQW1EbUIsQUFhcUIsT0F4RjNCLFdBNEVLLENBM0VFLGdCQTRFRCxBQVlsQixHQXZGZ0IsZUFtRFUsQUF5QlgsQ0EzRUMsY0E0RUgsRUEzRWYsU0FrREMsRUEwQmUsY0FDZiIsImZpbGUiOiIvVXNlcnMvanVzdGluL0Rlc2t0b3AvcHJpdmF0ZS9uZXh0anMvcGFnZXMvbWVzc2FnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQge2dldFRwVmFsdWV9IGZyb20gJy4uL3V0aWxzL2Jsb2dfdHlwZXMnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCB7YXBpSG9zdH0gZnJvbSAnLi4vdXRpbHMvY29uZmlnJztcbmltcG9ydCBwcm90b2J1ZiBmcm9tIFwiLi4vcHJvdG8vYmxvZ19wYlwiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHJlYWRTdHJlYW0gZnJvbSAnLi4vdXRpbHMvdXRpbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxLHF1ZXJ5LGpzb25QYWdlUmVzIH0pIHtcbiAgICBjb25zdCB1c2VyQWdlbnQgPSByZXEgPyByZXEuaGVhZGVyc1sndXNlci1hZ2VudCddIDogbmF2aWdhdG9yLnVzZXJBZ2VudFxuICAgIHJldHVybiB7IHVzZXJBZ2VudCxxdWVyeSxqc29uUGFnZVJlcyB9XG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICAgIGJsb2dEdGFpbDpcIlwiLFxuICAgICAgZGV0YWlsRGF0YTp7fSxcbiAgICAgIGNvbW1lbnRzTGlzdDpbXSxcbiAgICAgIGNvbW1lbnRUb3RhbDowLFxuICAgICAgc2F5dGV4dDpcIlwiLFxuICAgICAgbG9hZGluZ3M6e1xuICAgICAgICBcImNvbW1lbnRcIjpmYWxzZVxuICAgICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Q29tbWVudHMoKXtcbiAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nczp7Y29tbWVudDp0cnVlfX0pXG4gICAgbGV0IGNvbW1lbnRSZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YXBpSG9zdH0vdjEvYmxvZy9tZXNzYWdlYm9hcmQvbGlzdGAse1xuICAgICAgcmVzcG9uc2VUeXBlOiAnYmxvYidcbiAgICB9KVxuICAgIGxldCBjb21tZW50RGF0YSA9IGF3YWl0IHJlYWRTdHJlYW0oY29tbWVudFJlcy5kYXRhKTtcbiAgICBsZXQgY29tbWVudE1lc3NhZ2UgPSBwcm90b2J1Zi5ibG9nQ29tbWVudHMuZGVzZXJpYWxpemVCaW5hcnkoY29tbWVudERhdGEpO1xuICAgIGNvbW1lbnRNZXNzYWdlID0gY29tbWVudE1lc3NhZ2UudG9PYmplY3QoKTtcbiAgICBjb25zb2xlLmxvZyhjb21tZW50TWVzc2FnZSlcbiAgICB0aGlzLnNldFN0YXRlKHtjb21tZW50c0xpc3Q6Y29tbWVudE1lc3NhZ2UubGlzdExpc3QsY29tbWVudFRvdGFsOmNvbW1lbnRNZXNzYWdlLnRvdGFsfSlcbiAgfVxuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgYXdhaXQgdGhpcy5nZXRDb21tZW50cygpO1xuICB9XG5cbiAgYXN5bmMgc3ViTWl0Q29tbWVudCgpe1xuICAgIGNvbnN0IHtzYXl0ZXh0fSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IG1lc3NhZ2UgPSBuZXcgcHJvdG9idWYuYmxvZ0NvbW1lbnQoKTtcbiAgICAgICAgbWVzc2FnZS5zZXRDb250ZW50KHNheXRleHQpO1xuICAgICAgICBtZXNzYWdlLnNldEJsb2dJZCgwKTtcbiAgICBsZXQgYnl0ZXMgPSBtZXNzYWdlLnNlcmlhbGl6ZUJpbmFyeSgpO1xuICAgIHRyeSB7XG4gICAgICBsZXQgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgJHthcGlIb3N0fS92MS9ibG9nL21lc3NhZ2Vib2FyZC9zdWJtaXRgLGJ5dGVzLHtoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSd9fSlcbiAgICAgIGF3YWl0IHRoaXMuZ2V0Q29tbWVudHMoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICBpZihlcnJvciA9PSBcIkVycm9yOiBSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlIDQwMFwiKXtcbiAgICAgICAgYWxlcnQoXCLor4TorrrlhoXlrrnkuI3og73kuLrnqbpcIilcbiAgICAgIH1lbHNlIGlmKGVycm9yID09IFwiRXJyb3I6IFJlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgNTAwXCIpe1xuICAgICAgICBhbGVydChcIuWGhemDqOWHuueOsOmUmeivr1wiKVxuICAgICAgfWVsc2UgaWYoZXJyb3IgPT0gXCJFcnJvcjogUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSA0MDNcIil7XG4gICAgICAgIGFsZXJ0KFwi5LuK5aSp5oKo5a+55pS55Y2a5a6i55qE6K+E6K665bey6L6+5Yiw5LiK6ZmQXCIpXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmdzOntjb21tZW50OmZhbHNlfSxzYXl0ZXh0OlwiXCJ9KVxuICB9XG5cbiAgYXN5bmMgbWFrZUdvb2QoKXtcbiAgICBsZXQge2RldGFpbERhdGF9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7aWR9ID0gdGhpcy5wcm9wcy5xdWVyeVxuICAgIGxldCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGAke2FwaUhvc3R9L3YxL2Jsb2cvZ29vZC9tYWtlP2Jsb2dfaWQ9JHtpZH1gKVxuICAgIGRldGFpbERhdGEuZ29vZE51bSsrXG4gICAgdGhpcy5zZXRTdGF0ZSh7ZGV0YWlsRGF0YX0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge2Jsb2dEdGFpbCxkZXRhaWxEYXRhLGNvbW1lbnRzTGlzdCxsb2FkaW5ncyxzYXl0ZXh0LGNvbW1lbnRUb3RhbH0gPSB0aGlzLnN0YXRlXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmQ6XCIjZmZmXCIscGFkZGluZzogXCIwIDMwcHhcIn19PiBcbiAgICAgICAgICAgIHsvKiA8ZGl2IHN0eWxlPXt7Y2xlYXI6J2JvdGgnfX0+PC9kaXY+ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzX3BsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYmtvXCI+XG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnRzTGlzdC5tYXAoKGl0ZW0sayk9PihcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17a30gY2xhc3NOYW1lPVwiZmJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tjb2xvcjpcIiMwMDBcIn19PntpdGVtLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmYnRpbWVcIj48c3Bhbj57bW9tZW50KGl0ZW0uY3JlYXRlVGltZSkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKX08L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmYmluZm9cIj57aXRlbS5jb250ZW50fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicGxwb3N0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNheWluZ1wiIHN0eWxlPXtjb21tZW50c0xpc3QubGVuZ3RoID09IDAgPyB7bWFyZ2luVG9wOiA4fTp7fX0+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIHN0eWxlPXt7dGV4dERlY29yYXRpb246IFwibm9uZVwiLGNvbG9yOiBcIiNkZTE1MTNcIn19PuWFseaciXtjb21tZW50VG90YWx95p2h55WZ6KiAPC9hPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICDmnaXor7TkuKTlj6XlkKcuLi5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cInNheXRleHRcIiB2YWx1ZT17c2F5dGV4dH0gb25DaGFuZ2U9eyhlKT0+e1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NheXRleHQ6ZS50YXJnZXQudmFsdWV9KVxuICAgICAgICAgICAgICAgICAgICB9fSByb3dzPVwiNlwiIGlkPVwic2F5dGV4dFwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiaW1hZ2VGaWVsZFwiIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXt0aGlzLnN1Yk1pdENvbW1lbnQuYmluZCh0aGlzKX0gdmFsdWU9XCLmj5DkuqRcIiBzdHlsZT17e291dGxpbmU6IFwibm9uZVwiLGN1cnNvcjogXCJwb2ludGVyXCJ9fSAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLm5leHRpbmZvIGF7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogIzU1NTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5leHRpbmZvIGE6aG92ZXJ7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgIGNvbG9yOiMyMjI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC55em0ge1xuICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgICNwbHBvc3QgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMDMwMzA7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEzcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDElO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjc2F5dGV4dCB7XG4gICAgICAgICAgICAgIHdpZHRoOiA2MThweDtcbiAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgcmVzaXplOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2F5aW5nIHNwYW4ge1xuICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgICAgIC5zYXlpbmd7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjYTlhNmE2O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICAgICB9IFxuICAgICAgICAgICAubmV3c19wbCBoMntcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206ICMwMDAgMnB4IHNvbGlkO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgfVxuICAgICAgICAgICAuZmJ0aW1le1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB3aWR0aDogNjZweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIC5mYnRpbWUgc3BhbntcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgd2lkdGg6IDY3cHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgfVxuICAgICAgICAgICBwLmZidGltZXtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIHAuZmJpbmZve1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgLmZiIHVse1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCA3MHB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogI2VjZWNlYyAxcHggc29saWQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL3N0YXRpYy9pbWFnZXMvZXJ3ZWltYS5qcGcpIG5vLXJlcGVhdCB0b3AgMTRweCBsZWZ0IDEwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDQ3cHggNDdweDtcbiAgICAgICAgICAgfSAgXG4gICAgICAgICAgIC5uZXdzX3Bse1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIC5uZXh0aW5mb3tcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgLm5leHRpbmZvID4gcHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweCAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICB9XG4gICAgICAgICAgIC5kaWdnaXR7XG4gICAgICAgICAgICB3aWR0aDogMTYwcHg7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRTI1MjNBO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMnB4IDZweCAwcHggcmdiYSgwLDAsMCwuMik7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgfVxuICAgICAgICAgICAubmV3c19hYm91dCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM4ODg4ODg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0YzRjNGMztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvIDE1cHggYXV0bztcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lIHJlcGVhdCAwIDAgI0Y2RjZGNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ibG9naW5mbyB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5ld3NfdGl0bGUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ibG9naW5mbyBsaSB7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+ICAgICBcbiAgICApXG4gIH1cbn1cblxuXG4iXX0= */\n/*@ sourceURL=/Users/justin/Desktop/private/nextjs/pages/message.js */"));
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
//# sourceMappingURL=message.js.a6444df4d49bd81135a0.hot-update.js.map