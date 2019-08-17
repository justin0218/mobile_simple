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









var _jsxFileName = "/Users/justin/Desktop/private/blog-mobbile/pages/message.js";










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
      submitDisb: false,
      submitTxt: "提交"
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
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_16___default.a.get("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_14__["apiHost"], "/v1/blog/messageboard/list"), {
                  responseType: 'blob'
                });

              case 2:
                commentRes = _context.sent;
                _context.next = 5;
                return Object(_utils_util__WEBPACK_IMPORTED_MODULE_17__["default"])(commentRes.data);

              case 5:
                commentData = _context.sent;
                commentMessage = _proto_blog_pb__WEBPACK_IMPORTED_MODULE_15___default.a.blogComments.deserializeBinary(commentData);
                commentMessage = commentMessage.toObject();
                console.log(commentMessage);
                this.setState({
                  commentsList: commentMessage.listList,
                  commentTotal: commentMessage.total
                });

              case 10:
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
                setTimeout(function () {
                  document.getElementById("t").setAttribute("class", "shadownone");
                  document.getElementById("loading").style.display = "none";
                }, 500);

              case 3:
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
        var _this$state, saytext, submitDisb, submitTxt, message, bytes, res;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this$state = this.state, saytext = _this$state.saytext, submitDisb = _this$state.submitDisb, submitTxt = _this$state.submitTxt;
                this.setState({
                  submitDisb: true,
                  submitTxt: "提交中"
                });
                message = new _proto_blog_pb__WEBPACK_IMPORTED_MODULE_15___default.a.blogComment();
                message.setContent(saytext);
                message.setBlogId(0);
                bytes = message.serializeBinary();
                _context3.prev = 6;
                _context3.next = 9;
                return axios__WEBPACK_IMPORTED_MODULE_16___default.a.post("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_14__["apiHost"], "/v1/blog/messageboard/submit"), bytes, {
                  headers: {
                    'Content-Type': 'application/octet-stream'
                  }
                });

              case 9:
                res = _context3.sent;
                _context3.next = 12;
                return this.getComments();

              case 12:
                _context3.next = 17;
                break;

              case 14:
                _context3.prev = 14;
                _context3.t0 = _context3["catch"](6);

                if (_context3.t0 == "Error: Request failed with status code 400") {
                  alert("评论内容不能为空");
                } else if (_context3.t0 == "Error: Request failed with status code 500") {
                  alert("内部出现错误");
                } else if (_context3.t0 == "Error: Request failed with status code 403") {
                  alert("今天您对改博客的评论已达到上限");
                }

              case 17:
                this.setState({
                  submitDisb: false,
                  submitTxt: "提交",
                  saytext: ""
                });

              case 18:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[6, 14]]);
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

      var _this$state2 = this.state,
          blogDtail = _this$state2.blogDtail,
          detailData = _this$state2.detailData,
          commentsList = _this$state2.commentsList,
          submitDisb = _this$state2.submitDisb,
          saytext = _this$state2.saytext,
          commentTotal = _this$state2.commentTotal,
          submitTxt = _this$state2.submitTxt;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          background: "#fff"
        },
        className: "jsx-3411085708",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          clear: 'both'
        },
        className: "jsx-3411085708",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-3411085708" + " " + "news_pl",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-3411085708" + " " + "gbko",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, commentsList.map(function (item, k) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          key: k,
          className: "jsx-3411085708" + " " + "fb",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
          style: {
            background: "url(".concat(_utils_config__WEBPACK_IMPORTED_MODULE_14__["avatars"][item.id % _utils_config__WEBPACK_IMPORTED_MODULE_14__["avatars"].length], ") no-repeat top 14px left 10px")
          },
          className: "jsx-3411085708",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          style: {
            color: "#000"
          },
          className: "jsx-3411085708",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }, item.name), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "jsx-3411085708" + " " + "fbtime",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "jsx-3411085708",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }, moment__WEBPACK_IMPORTED_MODULE_13___default()(item.createTime).format("YYYY-MM-DD"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "jsx-3411085708" + " " + "fbinfo",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }, item.content)));
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "plpost",
        className: "jsx-3411085708",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        style: commentsList.length == 0 ? {
          marginTop: 8
        } : {},
        className: "jsx-3411085708" + " " + "saying",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-3411085708",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:void(0)",
        style: {
          textDecoration: "none",
          color: "#de1513"
        },
        className: "jsx-3411085708",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
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
        className: "jsx-3411085708",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        name: "imageField",
        type: "submit",
        onClick: this.subMitComment.bind(this),
        disabled: submitDisb,
        value: submitTxt,
        style: {
          outline: "none",
          cursor: "pointer"
        },
        className: "jsx-3411085708",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "3411085708",
        __self: this
      }, ".nextinfo.jsx-3411085708 a.jsx-3411085708{-webkit-text-decoration:none;text-decoration:none;color:#555;}.nextinfo.jsx-3411085708 a.jsx-3411085708:hover{-webkit-text-decoration:underline;text-decoration:underline;color:#222;}.yzm.jsx-3411085708{margin:10px 10px 10px 0;}#plpost.jsx-3411085708{padding:0 10px;}#plpost.jsx-3411085708 input[type=\"submit\"].jsx-3411085708{display:block;background:#303030;color:#fff;border:0;line-height:30px;padding:0 20px;border-radius:5px;float:right;margin-bottom:20px;margin-top:13px;margin-right:1%;}#saytext.jsx-3411085708{width:99%;outline:none;resize:none;border:solid 1px;}.saying.jsx-3411085708 span.jsx-3411085708{float:right;}.saying.jsx-3411085708{line-height:30px;color:#a9a6a6;margin-bottom:8px;}.news_pl.jsx-3411085708 h2.jsx-3411085708{border-bottom:#000 2px solid;line-height:40px;font-size:14px;padding-left:10px;color:#000;}.fbtime.jsx-3411085708{float:right;color:#999;font-size:12px;width:66px;overflow:hidden;white-space:nowrap;}.fbtime.jsx-3411085708 span.jsx-3411085708{float:right;color:#999;font-size:12px;width:67px;overflow:hidden;white-space:nowrap;}p.fbtime.jsx-3411085708{color:#000;}p.fbinfo.jsx-3411085708{margin:10px 0;word-wrap:break-word;}.fb.jsx-3411085708 ul.jsx-3411085708{margin:10px 10px;padding:10px 10px 10px 70px;border-bottom:#ececec 1px solid;background-size:47px 47px;}.news_pl.jsx-3411085708{width:100%;overflow:hidden;margin:0px 0 20px 0;}.nextinfo.jsx-3411085708{line-height:24px;width:100%;overflow:hidden;margin:20px 0;}.nextinfo.jsx-3411085708>p.jsx-3411085708{padding:4px 10px;border-radius:5px;}.diggit.jsx-3411085708{width:160px;margin:auto;background:#E2523A;color:#fff;box-shadow:1px 2px 6px 0px rgba(0,0,0,.2);border-radius:3px;line-height:40px;text-align:center;cursor:pointer;outline:none;display:block;}.news_about.jsx-3411085708{color:#888888;border:1px solid #F3F3F3;padding:10px;margin:20px auto 15px auto;line-height:23px;background:none repeat 0 0 #F6F6F6;}.bloginfo.jsx-3411085708{width:100%;overflow:hidden;}.news_title.jsx-3411085708{font-size:24px;font-weight:normal;padding:20px 0;color:#333;margin:0;}.bloginfo.jsx-3411085708 li.jsx-3411085708{float:left;margin-right:20px;list-style:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0aW4vRGVza3RvcC9wcml2YXRlL2Jsb2ctbW9iYmlsZS9wYWdlcy9tZXNzYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlHc0IsQUFHa0MsQUFJSyxBQUlBLEFBR1gsQUFHRCxBQWFGLEFBTUksQUFHQyxBQUtZLEFBT2pCLEFBUUEsQUFRRCxBQUdHLEFBSUcsQUFNTixBQUtNLEFBTUEsQUFJTCxBQWFNLEFBUUwsQUFJTSxBQU9KLFVBaEdBLENBcUNoQixBQWFpQixBQW9DRSxBQVdJLENBM0Z4QixBQWVhLEFBUUEsQUFvQ0MsRUE5RU8sQUFxREUsQUFzQ1EsQ0E5Ri9CLEFBMEd5QixFQWpGVCxBQW1DYyxBQVdqQixBQU1PLE1BNURKLEFBcUJDLEFBUUEsQ0FqRGpCLEFBcUZxQixHQWZDLEFBb0NwQixDQS9CZ0IsQ0ExQ0MsQUFvRkcsRUF4RkYsRUF0QlAsQ0F1R1EsQ0F6RkEsQUF1Q3BCLEFBcUJBLEdBdkNZLEFBUUEsQ0FnRE0sSUFaTixDQTlFRixBQW9FSyxDQVprQixBQXNEaEMsQ0FwRmUsQ0FxQ2hCLEVBekNBLEFBYWlCLEFBUUEsQUE0REQsQ0F2SEosRUE4QmIsQUE2RWlDLENBMUZkLENBOEV5QixJQVYzQyxFQWpGVyxBQW9IRSxDQXZIZCxBQTBDb0IsSUFTQyxBQVFBLElBNkRuQixDQXZHZSxDQWJqQixNQW9FNEIsRUE3QmYsQUFnRVUsS0F2RHRCLEFBUUEsQ0ExQ21CLEtBMEJuQixNQW1EbUIsQUFhcUIsT0F6RjNCLEFBc0RiLFdBdUJrQixDQTVFRSxnQkE2RUQsQUFZbEIsR0F4RmdCLGVBNkVELENBNUVDLGNBNkVILEVBNUVmLFdBNkVnQixjQUNmIiwiZmlsZSI6Ii9Vc2Vycy9qdXN0aW4vRGVza3RvcC9wcml2YXRlL2Jsb2ctbW9iYmlsZS9wYWdlcy9tZXNzYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCB7Z2V0VHBWYWx1ZX0gZnJvbSAnLi4vdXRpbHMvYmxvZ190eXBlcydcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuaW1wb3J0IHthcGlIb3N0LGF2YXRhcnN9IGZyb20gJy4uL3V0aWxzL2NvbmZpZyc7XG5pbXBvcnQgcHJvdG9idWYgZnJvbSBcIi4uL3Byb3RvL2Jsb2dfcGJcIjtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCByZWFkU3RyZWFtIGZyb20gJy4uL3V0aWxzL3V0aWwnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHJlcSxxdWVyeSxqc29uUGFnZVJlcyB9KSB7XG4gICAgY29uc3QgdXNlckFnZW50ID0gcmVxID8gcmVxLmhlYWRlcnNbJ3VzZXItYWdlbnQnXSA6IG5hdmlnYXRvci51c2VyQWdlbnRcbiAgICByZXR1cm4geyB1c2VyQWdlbnQscXVlcnksanNvblBhZ2VSZXMgfVxuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgICBibG9nRHRhaWw6XCJcIixcbiAgICAgIGRldGFpbERhdGE6e30sXG4gICAgICBjb21tZW50c0xpc3Q6W10sXG4gICAgICBjb21tZW50VG90YWw6MCxcbiAgICAgIHNheXRleHQ6XCJcIixcbiAgICAgIHN1Ym1pdERpc2I6ZmFsc2UsXG4gICAgICBzdWJtaXRUeHQ6XCLmj5DkuqRcIlxuICB9XG5cbiAgYXN5bmMgZ2V0Q29tbWVudHMoKXtcbiAgICBsZXQgY29tbWVudFJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHthcGlIb3N0fS92MS9ibG9nL21lc3NhZ2Vib2FyZC9saXN0YCx7XG4gICAgICByZXNwb25zZVR5cGU6ICdibG9iJ1xuICAgIH0pXG4gICAgbGV0IGNvbW1lbnREYXRhID0gYXdhaXQgcmVhZFN0cmVhbShjb21tZW50UmVzLmRhdGEpO1xuICAgIGxldCBjb21tZW50TWVzc2FnZSA9IHByb3RvYnVmLmJsb2dDb21tZW50cy5kZXNlcmlhbGl6ZUJpbmFyeShjb21tZW50RGF0YSk7XG4gICAgY29tbWVudE1lc3NhZ2UgPSBjb21tZW50TWVzc2FnZS50b09iamVjdCgpO1xuICAgIGNvbnNvbGUubG9nKGNvbW1lbnRNZXNzYWdlKVxuICAgIHRoaXMuc2V0U3RhdGUoe2NvbW1lbnRzTGlzdDpjb21tZW50TWVzc2FnZS5saXN0TGlzdCxjb21tZW50VG90YWw6Y29tbWVudE1lc3NhZ2UudG90YWx9KVxuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICBhd2FpdCB0aGlzLmdldENvbW1lbnRzKCk7XG4gICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0XCIpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJzaGFkb3dub25lXCIpXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRpbmdcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0sNTAwKVxuICB9XG5cbiAgYXN5bmMgc3ViTWl0Q29tbWVudCgpe1xuICAgIGNvbnN0IHtzYXl0ZXh0LHN1Ym1pdERpc2Isc3VibWl0VHh0fSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c3VibWl0RGlzYjp0cnVlLHN1Ym1pdFR4dDpcIuaPkOS6pOS4rVwifSlcbiAgICBsZXQgbWVzc2FnZSA9IG5ldyBwcm90b2J1Zi5ibG9nQ29tbWVudCgpO1xuICAgICAgICBtZXNzYWdlLnNldENvbnRlbnQoc2F5dGV4dCk7XG4gICAgICAgIG1lc3NhZ2Uuc2V0QmxvZ0lkKDApO1xuICAgIGxldCBieXRlcyA9IG1lc3NhZ2Uuc2VyaWFsaXplQmluYXJ5KCk7XG4gICAgdHJ5IHtcbiAgICAgIGxldCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGAke2FwaUhvc3R9L3YxL2Jsb2cvbWVzc2FnZWJvYXJkL3N1Ym1pdGAsYnl0ZXMse2hlYWRlcnM6IHsnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJ319KVxuICAgICAgYXdhaXQgdGhpcy5nZXRDb21tZW50cygpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZihlcnJvciA9PSBcIkVycm9yOiBSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlIDQwMFwiKXtcbiAgICAgICAgYWxlcnQoXCLor4TorrrlhoXlrrnkuI3og73kuLrnqbpcIilcbiAgICAgIH1lbHNlIGlmKGVycm9yID09IFwiRXJyb3I6IFJlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgNTAwXCIpe1xuICAgICAgICBhbGVydChcIuWGhemDqOWHuueOsOmUmeivr1wiKVxuICAgICAgfWVsc2UgaWYoZXJyb3IgPT0gXCJFcnJvcjogUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSA0MDNcIil7XG4gICAgICAgIGFsZXJ0KFwi5LuK5aSp5oKo5a+55pS55Y2a5a6i55qE6K+E6K665bey6L6+5Yiw5LiK6ZmQXCIpXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe3N1Ym1pdERpc2I6ZmFsc2Usc3VibWl0VHh0Olwi5o+Q5LqkXCIsc2F5dGV4dDpcIlwifSlcbiAgfVxuXG4gIGFzeW5jIG1ha2VHb29kKCl7XG4gICAgbGV0IHtkZXRhaWxEYXRhfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qge2lkfSA9IHRoaXMucHJvcHMucXVlcnlcbiAgICBsZXQgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgJHthcGlIb3N0fS92MS9ibG9nL2dvb2QvbWFrZT9ibG9nX2lkPSR7aWR9YClcbiAgICBkZXRhaWxEYXRhLmdvb2ROdW0rK1xuICAgIHRoaXMuc2V0U3RhdGUoe2RldGFpbERhdGF9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtibG9nRHRhaWwsZGV0YWlsRGF0YSxjb21tZW50c0xpc3Qsc3VibWl0RGlzYixzYXl0ZXh0LGNvbW1lbnRUb3RhbCxzdWJtaXRUeHR9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kOlwiI2ZmZlwifX0+IFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2NsZWFyOidib3RoJ319PjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzX3BsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYmtvXCI+XG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnRzTGlzdC5tYXAoKGl0ZW0sayk9PihcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17a30gY2xhc3NOYW1lPVwiZmJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17e2JhY2tncm91bmQ6IGB1cmwoJHthdmF0YXJzW2l0ZW0uaWQlYXZhdGFycy5sZW5ndGhdfSkgbm8tcmVwZWF0IHRvcCAxNHB4IGxlZnQgMTBweGB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tjb2xvcjpcIiMwMDBcIn19PntpdGVtLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmYnRpbWVcIj48c3Bhbj57bW9tZW50KGl0ZW0uY3JlYXRlVGltZSkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKX08L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmYmluZm9cIj57aXRlbS5jb250ZW50fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicGxwb3N0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNheWluZ1wiIHN0eWxlPXtjb21tZW50c0xpc3QubGVuZ3RoID09IDAgPyB7bWFyZ2luVG9wOiA4fTp7fX0+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIHN0eWxlPXt7dGV4dERlY29yYXRpb246IFwibm9uZVwiLGNvbG9yOiBcIiNkZTE1MTNcIn19PuWFseaciXtjb21tZW50VG90YWx95p2h55WZ6KiAPC9hPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICDmnaXor7TkuKTlj6XlkKcuLi5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cInNheXRleHRcIiB2YWx1ZT17c2F5dGV4dH0gb25DaGFuZ2U9eyhlKT0+e1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NheXRleHQ6ZS50YXJnZXQudmFsdWV9KVxuICAgICAgICAgICAgICAgICAgICB9fSByb3dzPVwiNlwiIGlkPVwic2F5dGV4dFwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiaW1hZ2VGaWVsZFwiIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXt0aGlzLnN1Yk1pdENvbW1lbnQuYmluZCh0aGlzKX0gZGlzYWJsZWQ9e3N1Ym1pdERpc2J9IHZhbHVlPXtzdWJtaXRUeHR9IHN0eWxlPXt7b3V0bGluZTogXCJub25lXCIsY3Vyc29yOiBcInBvaW50ZXJcIn19IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAubmV4dGluZm8gYXtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiAjNTU1O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmV4dGluZm8gYTpob3ZlcntcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgY29sb3I6IzIyMjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnl6bSB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgI3BscG9zdHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgI3BscG9zdCBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzMwMzAzMDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTNweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMSU7XG4gICAgICAgICAgfVxuICAgICAgICAgICNzYXl0ZXh0IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDk5JTtcbiAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgcmVzaXplOiBub25lO1xuICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNheWluZyBzcGFuIHtcbiAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgICAuc2F5aW5ne1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBjb2xvcjogI2E5YTZhNjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgICAgfSBcbiAgICAgICAgICAgLm5ld3NfcGwgaDJ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAjMDAwIDJweCBzb2xpZDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgLmZidGltZXtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgd2lkdGg6IDY2cHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgfVxuICAgICAgICAgICAuZmJ0aW1lIHNwYW57XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIHdpZHRoOiA2N3B4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgcC5mYnRpbWV7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgfVxuICAgICAgICAgICBwLmZiaW5mb3tcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIC5mYiB1bHtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggNzBweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206ICNlY2VjZWMgMXB4IHNvbGlkO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA0N3B4IDQ3cHg7XG4gICAgICAgICAgIH0gIFxuICAgICAgICAgICAubmV3c19wbHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDAgMjBweCAwO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIC5uZXh0aW5mb3tcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgLm5leHRpbmZvID4gcHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweCAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICB9XG4gICAgICAgICAgIC5kaWdnaXR7XG4gICAgICAgICAgICB3aWR0aDogMTYwcHg7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRTI1MjNBO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMnB4IDZweCAwcHggcmdiYSgwLDAsMCwuMik7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgfVxuICAgICAgICAgICAubmV3c19hYm91dCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM4ODg4ODg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0YzRjNGMztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvIDE1cHggYXV0bztcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lIHJlcGVhdCAwIDAgI0Y2RjZGNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ibG9naW5mbyB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5ld3NfdGl0bGUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ibG9naW5mbyBsaSB7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+ICAgICBcbiAgICApXG4gIH1cbn1cblxuXG4iXX0= */\n/*@ sourceURL=/Users/justin/Desktop/private/blog-mobbile/pages/message.js */"));
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
//# sourceMappingURL=message.js.5593dd5eef9ab7744dc5.hot-update.js.map