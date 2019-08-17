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
        className: "jsx-1448401767",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          clear: 'both'
        },
        className: "jsx-1448401767",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-1448401767" + " " + "news_pl",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-1448401767" + " " + "gbko",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, commentsList.map(function (item, k) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          key: k,
          className: "jsx-1448401767" + " " + "fb",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
          className: "jsx-1448401767",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          style: {
            color: "#000"
          },
          className: "jsx-1448401767",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, item.name), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "jsx-1448401767" + " " + "fbtime",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "jsx-1448401767",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, moment__WEBPACK_IMPORTED_MODULE_13___default()(item.createTime).format("YYYY-MM-DD"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "jsx-1448401767" + " " + "fbinfo",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }, item.content)));
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "plpost",
        className: "jsx-1448401767",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        style: commentsList.length == 0 ? {
          marginTop: 8
        } : {},
        className: "jsx-1448401767" + " " + "saying",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-1448401767",
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
        className: "jsx-1448401767",
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
        className: "jsx-1448401767",
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
        className: "jsx-1448401767",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "1448401767",
        __self: this
      }, ".nextinfo.jsx-1448401767 a.jsx-1448401767{-webkit-text-decoration:none;text-decoration:none;color:#555;}.nextinfo.jsx-1448401767 a.jsx-1448401767:hover{-webkit-text-decoration:underline;text-decoration:underline;color:#222;}.yzm.jsx-1448401767{margin:10px 10px 10px 0;}#plpost.jsx-1448401767 input[type=\"submit\"].jsx-1448401767{display:block;background:#303030;color:#fff;border:0;line-height:30px;padding:0 20px;border-radius:5px;float:right;margin-bottom:20px;margin-top:13px;margin-right:1%;}#saytext.jsx-1448401767{width:618px;outline:none;resize:none;}.saying.jsx-1448401767 span.jsx-1448401767{float:right;}.saying.jsx-1448401767{line-height:30px;color:#a9a6a6;margin-bottom:8px;}.news_pl.jsx-1448401767 h2.jsx-1448401767{border-bottom:#000 2px solid;line-height:40px;font-size:14px;padding-left:10px;color:#000;}.fbtime.jsx-1448401767{float:right;color:#999;font-size:12px;width:66px;overflow:hidden;white-space:nowrap;}.fbtime.jsx-1448401767 span.jsx-1448401767{float:right;color:#999;font-size:12px;width:67px;overflow:hidden;white-space:nowrap;}p.fbtime.jsx-1448401767{color:#000;}p.fbinfo.jsx-1448401767{margin:10px 0;word-wrap:break-word;}.fb.jsx-1448401767 ul.jsx-1448401767{margin:10px 10px;padding:10px 10px 10px 70px;border-bottom:#ececec 1px solid;background:url(/static/images/tx9.jpg) no-repeat top 14px left 10px;background-size:47px 47px;}.news_pl.jsx-1448401767{width:100%;overflow:hidden;margin:0px 0 20px 0;}.nextinfo.jsx-1448401767{line-height:24px;width:100%;overflow:hidden;margin:20px 0;}.nextinfo.jsx-1448401767>p.jsx-1448401767{padding:4px 10px;border-radius:5px;}.diggit.jsx-1448401767{width:160px;margin:auto;background:#E2523A;color:#fff;box-shadow:1px 2px 6px 0px rgba(0,0,0,.2);border-radius:3px;line-height:40px;text-align:center;cursor:pointer;outline:none;display:block;}.news_about.jsx-1448401767{color:#888888;border:1px solid #F3F3F3;padding:10px;margin:20px auto 15px auto;line-height:23px;background:none repeat 0 0 #F6F6F6;}.bloginfo.jsx-1448401767{width:100%;overflow:hidden;}.news_title.jsx-1448401767{font-size:24px;font-weight:normal;padding:20px 0;color:#333;margin:0;}.bloginfo.jsx-1448401767 li.jsx-1448401767{float:left;margin-right:20px;list-style:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0aW4vRGVza3RvcC9wcml2YXRlL25leHRqcy9wYWdlcy9tZXNzYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVHc0IsQUFHa0MsQUFJSyxBQUlBLEFBR1osQUFhQSxBQUtFLEFBR0MsQUFLWSxBQU9qQixBQVFBLEFBUUQsQUFHRyxBQUlHLEFBT04sQUFLTSxBQU1BLEFBSUwsQUFhTSxBQVFMLEFBSU0sQUFPSixXQTVEaEIsQUFjaUIsQUFvQ0UsQUFXSSxDQWpHUCxBQUtqQixBQWVhLEFBUUEsQUFxQ0MsRUE5RU8sQUFvREUsQUF1Q1EsQ0FZTixFQWxGVCxBQW1DYyxBQVlqQixBQU1PLE1BeENILEFBUUEsQ0E3Q2pCLEFBa0ZxQixDQWpFTCxFQWtETSxBQW9DcEIsQ0EvQmdCLENBM0NDLEFBcUZHLEVBekZGLEVBckJQLENBdUdRLENBbkRwQixBQXNCQSxFQTVERCxDQW9CYSxBQVFBLENBaURNLElBWk4sQ0E5RUYsQUFvRUssQ0Fia0IsQUF1RGhDLENBckZlLENBc0NoQixFQTFDQSxBQWFpQixBQVFBLEFBNkRELENBcEhKLEVBd0dvQixDQTFGZCxDQThFeUIsSUFWM0MsRUE5RVcsQUFpSEUsQ0FwSGQsQUFzQ29CLElBU0MsQUFRQSxJQThEbkIsQ0F2R2UsQ0FWakIsTUFnRXNFLEVBN0J6RCxBQWlFVSxLQXhEdEIsQUFRQSxDQXpDbUIsS0F5Qm5CLE1Bb0RtQixBQWFxQixPQXpGM0IsV0E2RUssQ0E1RUUsZ0JBNkVELEFBWWxCLEdBeEZnQixXQW1EVSxJQTBCWCxDQTVFQyxjQTZFSCxFQTVFZixLQWtEQyxNQTJCZSxjQUNmIiwiZmlsZSI6Ii9Vc2Vycy9qdXN0aW4vRGVza3RvcC9wcml2YXRlL25leHRqcy9wYWdlcy9tZXNzYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCB7Z2V0VHBWYWx1ZX0gZnJvbSAnLi4vdXRpbHMvYmxvZ190eXBlcydcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuaW1wb3J0IHthcGlIb3N0LGF2YXRhcnN9IGZyb20gJy4uL3V0aWxzL2NvbmZpZyc7XG5pbXBvcnQgcHJvdG9idWYgZnJvbSBcIi4uL3Byb3RvL2Jsb2dfcGJcIjtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCByZWFkU3RyZWFtIGZyb20gJy4uL3V0aWxzL3V0aWwnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHJlcSxxdWVyeSxqc29uUGFnZVJlcyB9KSB7XG4gICAgY29uc3QgdXNlckFnZW50ID0gcmVxID8gcmVxLmhlYWRlcnNbJ3VzZXItYWdlbnQnXSA6IG5hdmlnYXRvci51c2VyQWdlbnRcbiAgICByZXR1cm4geyB1c2VyQWdlbnQscXVlcnksanNvblBhZ2VSZXMgfVxuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgICBibG9nRHRhaWw6XCJcIixcbiAgICAgIGRldGFpbERhdGE6e30sXG4gICAgICBjb21tZW50c0xpc3Q6W10sXG4gICAgICBjb21tZW50VG90YWw6MCxcbiAgICAgIHNheXRleHQ6XCJcIixcbiAgICAgIGxvYWRpbmdzOntcbiAgICAgICAgXCJjb21tZW50XCI6ZmFsc2VcbiAgICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldENvbW1lbnRzKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZ3M6e2NvbW1lbnQ6dHJ1ZX19KVxuICAgIGxldCBjb21tZW50UmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2FwaUhvc3R9L3YxL2Jsb2cvbWVzc2FnZWJvYXJkL2xpc3RgLHtcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InXG4gICAgfSlcbiAgICBsZXQgY29tbWVudERhdGEgPSBhd2FpdCByZWFkU3RyZWFtKGNvbW1lbnRSZXMuZGF0YSk7XG4gICAgbGV0IGNvbW1lbnRNZXNzYWdlID0gcHJvdG9idWYuYmxvZ0NvbW1lbnRzLmRlc2VyaWFsaXplQmluYXJ5KGNvbW1lbnREYXRhKTtcbiAgICBjb21tZW50TWVzc2FnZSA9IGNvbW1lbnRNZXNzYWdlLnRvT2JqZWN0KCk7XG4gICAgY29uc29sZS5sb2coY29tbWVudE1lc3NhZ2UpXG4gICAgdGhpcy5zZXRTdGF0ZSh7Y29tbWVudHNMaXN0OmNvbW1lbnRNZXNzYWdlLmxpc3RMaXN0LGNvbW1lbnRUb3RhbDpjb21tZW50TWVzc2FnZS50b3RhbH0pXG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIGF3YWl0IHRoaXMuZ2V0Q29tbWVudHMoKTtcbiAgfVxuXG4gIGFzeW5jIHN1Yk1pdENvbW1lbnQoKXtcbiAgICBjb25zdCB7c2F5dGV4dH0gPSB0aGlzLnN0YXRlO1xuICAgIGxldCBtZXNzYWdlID0gbmV3IHByb3RvYnVmLmJsb2dDb21tZW50KCk7XG4gICAgICAgIG1lc3NhZ2Uuc2V0Q29udGVudChzYXl0ZXh0KTtcbiAgICAgICAgbWVzc2FnZS5zZXRCbG9nSWQoMCk7XG4gICAgbGV0IGJ5dGVzID0gbWVzc2FnZS5zZXJpYWxpemVCaW5hcnkoKTtcbiAgICB0cnkge1xuICAgICAgbGV0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7YXBpSG9zdH0vdjEvYmxvZy9tZXNzYWdlYm9hcmQvc3VibWl0YCxieXRlcyx7aGVhZGVyczogeydDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nfX0pXG4gICAgICBhd2FpdCB0aGlzLmdldENvbW1lbnRzKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgaWYoZXJyb3IgPT0gXCJFcnJvcjogUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSA0MDBcIil7XG4gICAgICAgIGFsZXJ0KFwi6K+E6K665YaF5a655LiN6IO95Li656m6XCIpXG4gICAgICB9ZWxzZSBpZihlcnJvciA9PSBcIkVycm9yOiBSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlIDUwMFwiKXtcbiAgICAgICAgYWxlcnQoXCLlhoXpg6jlh7rnjrDplJnor69cIilcbiAgICAgIH1lbHNlIGlmKGVycm9yID09IFwiRXJyb3I6IFJlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgNDAzXCIpe1xuICAgICAgICBhbGVydChcIuS7iuWkqeaCqOWvueaUueWNmuWuoueahOivhOiuuuW3sui+vuWIsOS4iumZkFwiKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nczp7Y29tbWVudDpmYWxzZX0sc2F5dGV4dDpcIlwifSlcbiAgfVxuXG4gIGFzeW5jIG1ha2VHb29kKCl7XG4gICAgbGV0IHtkZXRhaWxEYXRhfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qge2lkfSA9IHRoaXMucHJvcHMucXVlcnlcbiAgICBsZXQgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgJHthcGlIb3N0fS92MS9ibG9nL2dvb2QvbWFrZT9ibG9nX2lkPSR7aWR9YClcbiAgICBkZXRhaWxEYXRhLmdvb2ROdW0rK1xuICAgIHRoaXMuc2V0U3RhdGUoe2RldGFpbERhdGF9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtibG9nRHRhaWwsZGV0YWlsRGF0YSxjb21tZW50c0xpc3QsbG9hZGluZ3Msc2F5dGV4dCxjb21tZW50VG90YWx9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kOlwiI2ZmZlwiLHBhZGRpbmc6IFwiMCAzMHB4XCJ9fT4gXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Y2xlYXI6J2JvdGgnfX0+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3NfcGxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdia29cIj5cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29tbWVudHNMaXN0Lm1hcCgoaXRlbSxrKT0+KFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtrfSBjbGFzc05hbWU9XCJmYlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2NvbG9yOlwiIzAwMFwifX0+e2l0ZW0ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZidGltZVwiPjxzcGFuPnttb21lbnQoaXRlbS5jcmVhdGVUaW1lKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZiaW5mb1wiPntpdGVtLmNvbnRlbnR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwbHBvc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2F5aW5nXCIgc3R5bGU9e2NvbW1lbnRzTGlzdC5sZW5ndGggPT0gMCA/IHttYXJnaW5Ub3A6IDh9Ont9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsY29sb3I6IFwiI2RlMTUxM1wifX0+5YWx5pyJe2NvbW1lbnRUb3RhbH3mnaHnlZnoqIA8L2E+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIOadpeivtOS4pOWPpeWQpy4uLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwic2F5dGV4dFwiIHZhbHVlPXtzYXl0ZXh0fSBvbkNoYW5nZT17KGUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2F5dGV4dDplLnRhcmdldC52YWx1ZX0pXG4gICAgICAgICAgICAgICAgICAgIH19IHJvd3M9XCI2XCIgaWQ9XCJzYXl0ZXh0XCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJpbWFnZUZpZWxkXCIgdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e3RoaXMuc3ViTWl0Q29tbWVudC5iaW5kKHRoaXMpfSB2YWx1ZT1cIuaPkOS6pFwiIHN0eWxlPXt7b3V0bGluZTogXCJub25lXCIsY3Vyc29yOiBcInBvaW50ZXJcIn19IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAubmV4dGluZm8gYXtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiAjNTU1O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmV4dGluZm8gYTpob3ZlcntcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgY29sb3I6IzIyMjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnl6bSB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgI3BscG9zdCBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzMwMzAzMDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTNweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMSU7XG4gICAgICAgICAgfVxuICAgICAgICAgICNzYXl0ZXh0IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDYxOHB4O1xuICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zYXlpbmcgc3BhbiB7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAgLnNheWluZ3tcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgY29sb3I6ICNhOWE2YTY7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgICAgIH0gXG4gICAgICAgICAgIC5uZXdzX3BsIGgye1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogIzAwMCAycHggc29saWQ7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIC5mYnRpbWV7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIHdpZHRoOiA2NnB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgLmZidGltZSBzcGFue1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB3aWR0aDogNjdweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIHAuZmJ0aW1le1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgcC5mYmluZm97XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgICAgfVxuICAgICAgICAgICAuZmIgdWx7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDcwcHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAjZWNlY2VjIDFweCBzb2xpZDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL2ltYWdlcy90eDkuanBnKSBuby1yZXBlYXQgdG9wIDE0cHggbGVmdCAxMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA0N3B4IDQ3cHg7XG4gICAgICAgICAgIH0gIFxuICAgICAgICAgICAubmV3c19wbHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDAgMjBweCAwO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIC5uZXh0aW5mb3tcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgLm5leHRpbmZvID4gcHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweCAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICB9XG4gICAgICAgICAgIC5kaWdnaXR7XG4gICAgICAgICAgICB3aWR0aDogMTYwcHg7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRTI1MjNBO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMnB4IDZweCAwcHggcmdiYSgwLDAsMCwuMik7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgfVxuICAgICAgICAgICAubmV3c19hYm91dCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM4ODg4ODg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0YzRjNGMztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvIDE1cHggYXV0bztcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lIHJlcGVhdCAwIDAgI0Y2RjZGNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ibG9naW5mbyB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5ld3NfdGl0bGUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ibG9naW5mbyBsaSB7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+ICAgICBcbiAgICApXG4gIH1cbn1cblxuXG4iXX0= */\n/*@ sourceURL=/Users/justin/Desktop/private/nextjs/pages/message.js */"));
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
//# sourceMappingURL=message.js.d1d0aebc379ea8bef588.hot-update.js.map