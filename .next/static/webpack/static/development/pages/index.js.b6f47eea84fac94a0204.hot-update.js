webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/left.js":
/*!****************************!*\
  !*** ./components/left.js ***!
  \****************************/
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/util */ "./utils/util.js");
/* harmony import */ var _proto_blog_pb__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../proto/blog_pb */ "./proto/blog_pb.js");
/* harmony import */ var _proto_blog_pb__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_proto_blog_pb__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/config */ "./utils/config.js");
/* harmony import */ var _utils_emiter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/emiter */ "./utils/emiter.js");









var _jsxFileName = "/Users/justin/Desktop/private/nextjs/components/left.js";









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
      orderIndex: [],
      tps: [],
      rankingList: [],
      name: ""
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(_default, [{
    key: "registerKeyUp",
    value: function registerKeyUp() {
      var _this2 = this;

      document.getElementById("keyboard").onkeyup = function (event) {
        var e = event || window.event;

        if (e && e.keyCode == 13) {
          //回车键的键值为13
          location.href = "/article?name=".concat(_this2.state.name);
        }
      };
    }
  }, {
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, data, message, rankingRes, rankingData, rankingMessage, recommendRes, recommendData, recommendMessage;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_12___default.a.get("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_15__["apiHost"], "/v1/blog/types"), {
                  responseType: 'blob'
                });

              case 2:
                res = _context.sent;
                _context.next = 5;
                return Object(_utils_util__WEBPACK_IMPORTED_MODULE_13__["default"])(res.data);

              case 5:
                data = _context.sent;
                message = _proto_blog_pb__WEBPACK_IMPORTED_MODULE_14___default.a.tps.deserializeBinary(data);
                data = message.toObject();
                _context.next = 10;
                return axios__WEBPACK_IMPORTED_MODULE_12___default.a.get("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_15__["apiHost"], "/v1/blog/ranking?limit=5"), {
                  responseType: 'blob'
                });

              case 10:
                rankingRes = _context.sent;
                _context.next = 13;
                return Object(_utils_util__WEBPACK_IMPORTED_MODULE_13__["default"])(rankingRes.data);

              case 13:
                rankingData = _context.sent;
                rankingMessage = _proto_blog_pb__WEBPACK_IMPORTED_MODULE_14___default.a.blogListRes.deserializeBinary(rankingData);
                rankingData = rankingMessage.toObject();
                _context.next = 18;
                return axios__WEBPACK_IMPORTED_MODULE_12___default.a.get("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_15__["apiHost"], "/v1/blog/recommend"), {
                  responseType: 'blob'
                });

              case 18:
                recommendRes = _context.sent;
                _context.next = 21;
                return Object(_utils_util__WEBPACK_IMPORTED_MODULE_13__["default"])(recommendRes.data);

              case 21:
                recommendData = _context.sent;
                recommendMessage = _proto_blog_pb__WEBPACK_IMPORTED_MODULE_14___default.a.blogListRes.deserializeBinary(recommendData);
                recommendData = recommendMessage.toObject();
                console.log(recommendData);
                this.setState({
                  tps: data.listList,
                  rankingList: rankingData.listList
                });

                if (location.pathname == "/article" || location.pathname == "/detail") {
                  this.setState({
                    orderIndex: [2, 3, 7, 4, 8, 6]
                  }, this.registerKeyUp);
                } else {
                  this.setState({
                    orderIndex: [0, 1, 2, 3, 4, 5, 6]
                  }, this.registerKeyUp);
                }

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
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          path = _this$state.path,
          orderIndex = _this$state.orderIndex,
          tps = _this$state.tps,
          name = _this$state.name,
          rankingList = _this$state.rankingList;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "left_box",
        className: "jsx-2346960266" + " " + "left_box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, orderIndex.map(function (item) {
        var _React$createElement;

        switch (item) {
          case 0:
            // 关于
            return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              key: item,
              className: "jsx-2346960266" + " " + "left_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 72
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
              className: "jsx-2346960266",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 73
              },
              __self: this
            }, "\u5173\u4E8E"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              style: {
                padding: 12
              },
              className: "jsx-2346960266",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 74
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
              className: "jsx-2346960266" + " " + "about_me_i",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 75
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
              src: "/static/images/me.jpeg",
              style: {
                width: 120,
                height: 120
              },
              className: "jsx-2346960266",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 76
              },
              __self: this
            })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
              style: {
                lineHeight: "22px",
                "fontSize": 14,
                marginTop: -6
              },
              className: "jsx-2346960266",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 78
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("b", {
              className: "jsx-2346960266",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 79
              },
              __self: this
            }, "\u80E1\u661F"), "\uFF0C93\u5E74\u51FA\u751F\uFF0Cweb\u524D\u7AEF\u5DE5\u7A0B\u5E08 && \u670D\u52A1\u7AEF\u5DE5\u7A0B\u5E08\uFF0C\u6CA1\u4EC0\u4E48\u7279\u6B8A\u7231\u597D\uFF0C\u653E\u5047\u4E5F\u662F\u5B85\u5728\u5BB6\u91CC\uFF0C\u65E0\u804A\u7684\u65F6\u5019\u5199\u5199\u4EE3\u7801\uFF0C\u7814\u7A76\u7814\u7A76\u6280\u672F\u65B9\u9762\u7684\u4E1C\u897F\uFF0C\u5BF9\u8FD9\u79CD\u4E1C\u897F\u7B97\u4E00\u79CD\u70ED\u7231\u5427\uFF0C\u4F46\u662F\u6211\u8BA4\u4E3A\u5BF9\u4E8E\u6211\u6765\u8BF4\uFF0C \u53EA\u662F\u9009\u62E9\u4E86\u8FD9\u4E00\u6761\u8DEF\uFF0C\u9009\u62E9\u4E86\u5C31\u8981\u70ED\u7231\uFF0C\u5E72\u4E0A\u4E00\u884C\u5C31\u5F97\u7231\u4E0A\u4E00\u884C\uFF0C\u5982\u679C\u5F53\u521D\u7684\u9009\u62E9\u4E0D\u662F\u4E92\u8054\u7F51\uFF0C\u6211\u4E5F\u4F1A\u5F88\u70ED\u7231\u3002")));

          case 1:
            return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              key: item,
              className: "jsx-2346960266" + " " + "left_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 85
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
              className: "jsx-2346960266",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 86
              },
              __self: this
            }, "\u76F8\u518C"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
              style: {
                padding: 10,
                overflow: "hidden",
                listStyle: "none",
                margin: 0
              },
              className: "jsx-2346960266",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 87
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
              className: "jsx-2346960266",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 88
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
              src: "/static/images/b02.jpg",
              className: "jsx-2346960266",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 88
              },
              __self: this
            })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
              className: "jsx-2346960266",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 89
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
              src: "/static/images/b02.jpg",
              className: "jsx-2346960266",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 89
              },
              __self: this
            })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
              className: "jsx-2346960266",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 90
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
              src: "/static/images/b02.jpg",
              className: "jsx-2346960266",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 90
              },
              __self: this
            })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
              className: "jsx-2346960266",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 91
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
              src: "/static/images/b02.jpg",
              className: "jsx-2346960266",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 91
              },
              __self: this
            })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
              className: "jsx-2346960266",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 92
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
              src: "/static/images/b02.jpg",
              className: "jsx-2346960266",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 92
              },
              __self: this
            })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
              className: "jsx-2346960266",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 93
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
              src: "/static/images/b02.jpg",
              className: "jsx-2346960266",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 93
              },
              __self: this
            }))));

          case 2:
            return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              key: item,
              style: {
                marginBottom: 20
              },
              className: "jsx-2346960266" + " " + "search",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 97
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", (_React$createElement = {
              className: "keyboard",
              id: "keyboard",
              onChange: function onChange(e) {
                _this3.setState({
                  name: e.target.value
                });
              },
              placeholder: "\u8BF7\u8F93\u5165\u5173\u952E\u5B57\u8BCD",
              style: {
                color: "#000"
              },
              type: "text"
            }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_React$createElement, "className", "jsx-2346960266" + " " + "input_text"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_React$createElement, "__source", {
              fileName: _jsxFileName,
              lineNumber: 98
            }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_React$createElement, "__self", this), _React$createElement)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
              onClick: function onClick() {
                location.href = "/article?name=".concat(name);
              },
              className: "jsx-2346960266" + " " + "input_submit",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 101
              },
              __self: this
            }, "\u641C\u7D22"));

          case 3:
            return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              key: item,
              className: "jsx-2346960266" + " " + "left_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 106
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
              className: "jsx-2346960266",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 107
              },
              __self: this
            }, "\u5206\u7C7B"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              style: {
                padding: 10
              },
              className: "jsx-2346960266",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 108
              },
              __self: this
            }, tps.map(function (item, k) {
              return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
                key: k,
                onClick: function onClick() {
                  location.href = "/article?tp=".concat(item.id);
                },
                className: "jsx-2346960266" + " " + "cation_item",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 111
                },
                __self: this
              }, item.lable, "\uFF08", item.blogNum, "\uFF09");
            })));

          case 4:
            return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              key: item,
              className: "jsx-2346960266" + " " + "left_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 119
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
              className: "jsx-2346960266",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 120
              },
              __self: this
            }, "\u70B9\u51FB\u6392\u884C"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              style: {
                padding: 10
              },
              className: "jsx-2346960266",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 121
              },
              __self: this
            }, rankingList.map(function (item, k) {
              return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
                onClick: function onClick() {
                  location.href = "/detail?id=".concat(item.id);
                },
                key: k,
                style: {
                  backgroundImage: "url(/static/images/li.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundPositionY: 9,
                  textIndent: 13
                },
                className: "jsx-2346960266" + " " + "cation_item",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 124
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
                style: {
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  width: 265,
                  display: "block"
                },
                className: "jsx-2346960266",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 127
                },
                __self: this
              }, item.name));
            })));

          case 5:
            return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              key: item,
              className: "jsx-2346960266" + " " + "left_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 134
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
              className: "jsx-2346960266",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 135
              },
              __self: this
            }, "\u53CB\u60C5\u94FE\u63A5"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              style: {
                padding: 10
              },
              className: "jsx-2346960266",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 136
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              className: "jsx-2346960266" + " " + "cation_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 137
              },
              __self: this
            }, "\u767E\u5EA6")));

          case 6:
            return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              key: item,
              className: "jsx-2346960266" + " " + "left_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 141
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
              className: "jsx-2346960266",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 142
              },
              __self: this
            }, "\u5173\u6CE8\u6211"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              style: {
                padding: 10
              },
              className: "jsx-2346960266",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 143
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
              style: {
                width: "86%",
                background: "#fff",
                padding: 19
              },
              src: "/static/images/erweima.jpg",
              className: "jsx-2346960266",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 144
              },
              __self: this
            })));

          case 7:
            return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              key: item,
              className: "jsx-2346960266" + " " + "left_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 148
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
              className: "jsx-2346960266",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 149
              },
              __self: this
            }, "\u7AD9\u957F\u63A8\u8350"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              style: {
                padding: 10
              },
              className: "jsx-2346960266",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 150
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              style: {
                backgroundImage: "url(/static/images/li.png)",
                backgroundRepeat: "no-repeat",
                backgroundPositionY: 9,
                textIndent: 13
              },
              className: "jsx-2346960266" + " " + "cation_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 151
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
              style: {
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
                width: 265,
                display: "block"
              },
              className: "jsx-2346960266",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 152
              },
              __self: this
            }, "\u4E2A\u4EBA\u535A\u5BA2\uFF0C\u6211\u4E3A\u4EC0\u4E48\u8981\u7528\u5E1D\u56FDcms11111111111111111\uFF1F")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              style: {
                backgroundImage: "url(/static/images/li.png)",
                backgroundRepeat: "no-repeat",
                backgroundPositionY: 9,
                textIndent: 13
              },
              className: "jsx-2346960266" + " " + "cation_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 154
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
              style: {
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
                width: 265,
                display: "block"
              },
              className: "jsx-2346960266",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 155
              },
              __self: this
            }, "\u4E2A\u4EBA\u535A\u5BA2\uFF0C\u6211\u4E3A\u4EC0\u4E48\u8981\u7528\u5E1D\u56FDcms11111111111111111\uFF1F")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              style: {
                backgroundImage: "url(/static/images/li.png)",
                backgroundRepeat: "no-repeat",
                backgroundPositionY: 9,
                textIndent: 13
              },
              className: "jsx-2346960266" + " " + "cation_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 157
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
              style: {
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
                width: 265,
                display: "block"
              },
              className: "jsx-2346960266",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 158
              },
              __self: this
            }, "\u4E2A\u4EBA\u535A\u5BA2\uFF0C\u6211\u4E3A\u4EC0\u4E48\u8981\u7528\u5E1D\u56FDcms11111111111111111\uFF1F"))));

          case 8:
            return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              key: item,
              className: "jsx-2346960266" + " " + "left_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 163
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
              className: "jsx-2346960266",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 164
              },
              __self: this
            }, "\u6807\u7B7E\u4E91"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              style: {
                padding: 10
              },
              className: "jsx-2346960266",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 165
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
              style: {
                background: "#036564"
              },
              className: "jsx-2346960266" + " " + "tag",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 166
              },
              __self: this
            }, "\u4E2A\u4EBA\u535A\u5BA2"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
              style: {
                background: "#3299BB"
              },
              className: "jsx-2346960266" + " " + "tag",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 167
              },
              __self: this
            }, "\u65C5\u6E38"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              style: {
                clear: "both"
              },
              className: "jsx-2346960266",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 168
              },
              __self: this
            })));
        }
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "2346960266",
        __self: this
      }, ".tag.jsx-2346960266{line-height:24px;height:24px;display:block;background:#999;float:left;padding:3px 11px;margin:10px 10px 0 0;border-radius:8px;-moz-transition:all 0.5s;-webkit-transition:all 0.5s;-o-transition:all 0.5s;-webkit-transition:all 0.5s;transition:all 0.5s;color:#FFF;}.left_item.jsx-2346960266 .cation_item.jsx-2346960266{margin-bottom:10px;margin-left:10px;cursor:pointer;}.left_item.jsx-2346960266 .cation_item.jsx-2346960266:hover{color:#222;}.search.jsx-2346960266{border:1px solid #000;background:#000;border-radius:0 5px 5px 0;position:relative;}.search.jsx-2346960266 .input_submit.jsx-2346960266{border:0;background:0;color:#fff;outline:none;position:absolute;top:10px;right:8%;cursor:pointer;}.search.jsx-2346960266 input.input_text.jsx-2346960266{border:0;line-height:36px;height:36px;width:72%;padding-left:10px;outline:none;}.right_item.jsx-2346960266 p.jsx-2346960266{margin:20px 0 0 0;line-height:22px;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;display:-webkit-box;-webkit-line-clamp:2;}.right_item.jsx-2346960266 h3.jsx-2346960266{font-size:16px;line-height:25px;text-shadow:#FFF 1px 1px 1px;color:#de4949;margin:0;}.right_item.jsx-2346960266 i.jsx-2346960266{width:150px;display:block;max-height:100px;overflow:hidden;float:right;margin-left:20px;}.right_item.jsx-2346960266{background:rgba(255,255,255,0.8);padding:15px;overflow:hidden;color:#797b7c;margin-bottom:20px;}.left_box.jsx-2346960266{width:300px;float:left;}.left_item.jsx-2346960266{background:rgba(255,255,255,0.5);margin-bottom:20px;overflow:hidden;}.left_item.jsx-2346960266 ul.jsx-2346960266 li.jsx-2346960266{width:32%;overflow:hidden;float:left;height:80px;margin-bottom:2px;margin-right:2px;}.left_item.jsx-2346960266 ul.jsx-2346960266 li.jsx-2346960266 img.jsx-2346960266{width:100%;height:100%;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;-webkit-transition:all 0.5s;transition:all 0.5s;display:block;}.left_item.jsx-2346960266 h2.jsx-2346960266{color:#333;font-size:14px;line-height:30px;padding-left:20px;background:#fff;margin:0;}.right_box.jsx-2346960266{width:680px;float:right;}.about_me_i.jsx-2346960266{width:120px;float:left;clear:left;margin-right:10px;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0aW4vRGVza3RvcC9wcml2YXRlL25leHRqcy9jb21wb25lbnRzL2xlZnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEtvQixBQUc0QixBQWVFLEFBS1QsQUFHWSxBQU1ULEFBVUEsQUFRTyxBQVNILEFBT0gsQUFRcUIsQUFPdEIsQUFJc0IsQUFLdkIsQUFRQyxBQVFBLEFBUUEsQUFJQyxTQXJGRyxBQVVJLENBZ0RILENBbkVwQixBQTJFZ0IsQUFRRyxDQXhDRCxBQWVKLEFBaUNDLEFBSUEsR0EzRE0sRUF4RFAsQ0ErQ08sQ0FoQ0YsR0FRRCxBQU9ELENBaURmLEFBaUI4QixBQW9CakIsQ0FKYixFQXhFZ0IsQUF3QkcsQUF3Qk4sQUFnQk0sR0F2R0wsR0F3RGlCLENBMUJkLEFBd0NGLEFBV00sQ0FtQ0QsQ0FyRUYsQ0FoQ0gsQ0F5RUQsQ0FqRVksQUFpQlosS0F2Q0UsQUErREUsQUF3Q0UsR0F6RUUsQUF3Q0osRUE5QkksQ0FnREYsRUF6RXRCLEFBZ0MyQixBQWdERSxDQWRULEFBbUNBLE9BbkhQLEFBK0RHLEVBUkUsQUFnREUsQ0FqQ0YsRUFoREUsQUFRTCxFQVVJLENBZ0RFLENBUG5CLEFBbUNBLEVBbkhpQixDQStERSxFQWpDTixDQWdCaUIsQ0FTcEIsQ0FlVyxBQXdCQyxDQVV2QixFQWhFQyxHQWxCRixBQVNxQixFQXlCbkIsQUFnQ0EsRUFnQkEsQ0F2R3FCLENBK0RyQixPQU9BLEVBdkNBLEtBZXNCLE1BN0NKLGNBOENLLEVBK0NSLEVBNUZVLFlBNkZ6QixLQS9DQSxRQTdDNEIsNEJBQ0wsdUJBQ0gsZ0RBQ1QsV0FDYiIsImZpbGUiOiIvVXNlcnMvanVzdGluL0Rlc2t0b3AvcHJpdmF0ZS9uZXh0anMvY29tcG9uZW50cy9sZWZ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCByZWFkU3RyZWFtIGZyb20gJy4uL3V0aWxzL3V0aWwnXG5pbXBvcnQgcHJvdG9idWYgZnJvbSBcIi4uL3Byb3RvL2Jsb2dfcGJcIjtcbmltcG9ydCB7YXBpSG9zdH0gZnJvbSAnLi4vdXRpbHMvY29uZmlnJztcbmltcG9ydCBFdmVudCBmcm9tICcuLi91dGlscy9lbWl0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyByZXEscXVlcnksanNvblBhZ2VSZXMgfSkge1xuICAgIGNvbnN0IHVzZXJBZ2VudCA9IHJlcSA/IHJlcS5oZWFkZXJzWyd1c2VyLWFnZW50J10gOiBuYXZpZ2F0b3IudXNlckFnZW50XG4gICAgcmV0dXJuIHsgdXNlckFnZW50LHF1ZXJ5LGpzb25QYWdlUmVzIH1cbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIHBhdGg6XCJcIixcbiAgICBvcmRlckluZGV4OltdLFxuICAgIHRwczpbXSxcbiAgICByYW5raW5nTGlzdDpbXSxcbiAgICBuYW1lOlwiXCJcbiAgfVxuXG4gIHJlZ2lzdGVyS2V5VXAoKXtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImtleWJvYXJkXCIpLm9ua2V5dXAgPSAoZXZlbnQpID0+IHtcbiAgICAgIHZhciBlID0gZXZlbnQgfHwgd2luZG93LmV2ZW50O1xuICAgICAgaWYgKGUgJiYgZS5rZXlDb2RlID09IDEzKSB7IC8v5Zue6L2m6ZSu55qE6ZSu5YC85Li6MTNcbiAgICAgICAgbG9jYXRpb24uaHJlZiA9IGAvYXJ0aWNsZT9uYW1lPSR7dGhpcy5zdGF0ZS5uYW1lfWBcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICBsZXQgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2FwaUhvc3R9L3YxL2Jsb2cvdHlwZXNgLHtcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InXG4gICAgfSlcbiAgICBsZXQgZGF0YSA9IGF3YWl0IHJlYWRTdHJlYW0ocmVzLmRhdGEpO1xuICAgIGxldCBtZXNzYWdlID0gcHJvdG9idWYudHBzLmRlc2VyaWFsaXplQmluYXJ5KGRhdGEpO1xuICAgIGRhdGEgPSBtZXNzYWdlLnRvT2JqZWN0KCk7XG4gICAgbGV0IHJhbmtpbmdSZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YXBpSG9zdH0vdjEvYmxvZy9yYW5raW5nP2xpbWl0PTVgLHtcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InXG4gICAgfSlcbiAgICBsZXQgcmFua2luZ0RhdGEgPSBhd2FpdCByZWFkU3RyZWFtKHJhbmtpbmdSZXMuZGF0YSk7XG4gICAgbGV0IHJhbmtpbmdNZXNzYWdlID0gcHJvdG9idWYuYmxvZ0xpc3RSZXMuZGVzZXJpYWxpemVCaW5hcnkocmFua2luZ0RhdGEpO1xuICAgIHJhbmtpbmdEYXRhID0gcmFua2luZ01lc3NhZ2UudG9PYmplY3QoKTtcblxuICAgIGxldCByZWNvbW1lbmRSZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YXBpSG9zdH0vdjEvYmxvZy9yZWNvbW1lbmRgLHtcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InXG4gICAgfSlcbiAgICBsZXQgcmVjb21tZW5kRGF0YSA9IGF3YWl0IHJlYWRTdHJlYW0ocmVjb21tZW5kUmVzLmRhdGEpO1xuICAgIGxldCByZWNvbW1lbmRNZXNzYWdlID0gcHJvdG9idWYuYmxvZ0xpc3RSZXMuZGVzZXJpYWxpemVCaW5hcnkocmVjb21tZW5kRGF0YSk7XG4gICAgcmVjb21tZW5kRGF0YSA9IHJlY29tbWVuZE1lc3NhZ2UudG9PYmplY3QoKTtcbiAgICBjb25zb2xlLmxvZyhyZWNvbW1lbmREYXRhKVxuXG4gICAgXG5cbiAgICB0aGlzLnNldFN0YXRlKHt0cHM6ZGF0YS5saXN0TGlzdCxyYW5raW5nTGlzdDpyYW5raW5nRGF0YS5saXN0TGlzdH0pO1xuICAgIGlmKGxvY2F0aW9uLnBhdGhuYW1lID09IFwiL2FydGljbGVcIiB8fCBsb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9kZXRhaWxcIil7XG4gICAgICB0aGlzLnNldFN0YXRlKHtvcmRlckluZGV4OlsyLDMsNyw0LDgsNl19LHRoaXMucmVnaXN0ZXJLZXlVcCk7XG4gICAgfWVsc2V7XG4gICAgICB0aGlzLnNldFN0YXRlKHtvcmRlckluZGV4OlswLDEsMiwzLDQsNSw2XX0sdGhpcy5yZWdpc3RlcktleVVwKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3BhdGgsb3JkZXJJbmRleCx0cHMsbmFtZSxyYW5raW5nTGlzdH0gPSB0aGlzLnN0YXRlXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0X2JveFwiIGlkPVwibGVmdF9ib3hcIj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBvcmRlckluZGV4Lm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgc3dpdGNoKGl0ZW0pe1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgIC8vIOWFs+S6jlxuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpdGVtfSBjbGFzc05hbWU9XCJsZWZ0X2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxoMj7lhbPkuo48L2gyPlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6IDEyfX0+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImFib3V0X21lX2lcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL21lLmpwZWdcIiBzdHlsZT17e3dpZHRoOjEyMCxoZWlnaHQ6MTIwfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2xpbmVIZWlnaHQ6IFwiMjJweFwiLFwiZm9udFNpemVcIjogMTQsbWFyZ2luVG9wOiAtNn19PlxuICAgICAgICAgICAgICAgICAgICAgIDxiPuiDoeaYnzwvYj7vvIw5M+W5tOWHuueUn++8jHdlYuWJjeerr+W3peeoi+W4iCAmJiDmnI3liqHnq6/lt6XnqIvluIjvvIzmsqHku4DkuYjnibnmrorniLHlpb3vvIzmlL7lgYfkuZ/mmK/lroXlnKjlrrbph4zvvIzml6DogYrnmoTml7blgJnlhpnlhpnku6PnoIHvvIznoJTnqbbnoJTnqbbmioDmnK/mlrnpnaLnmoTkuJzopb/vvIzlr7nov5nnp43kuJzopb/nrpfkuIDnp43ng63niLHlkKfvvIzkvYbmmK/miJHorqTkuLrlr7nkuo7miJHmnaXor7TvvIxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5Y+q5piv6YCJ5oup5LqG6L+Z5LiA5p2h6Lev77yM6YCJ5oup5LqG5bCx6KaB54Ot54ix77yM5bmy5LiK5LiA6KGM5bCx5b6X54ix5LiK5LiA6KGM77yM5aaC5p6c5b2T5Yid55qE6YCJ5oup5LiN5piv5LqS6IGU572R77yM5oiR5Lmf5Lya5b6I54Ot54ix44CCXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aXRlbX0gY2xhc3NOYW1lPVwibGVmdF9pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8aDI+55u45YaMPC9oMj5cbiAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17e3BhZGRpbmc6IDEwLG92ZXJmbG93OiBcImhpZGRlblwiLGxpc3RTdHlsZTpcIm5vbmVcIixtYXJnaW46MH19PlxuICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2IwMi5qcGdcIiAvPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvYjAyLmpwZ1wiIC8+PC9saT5cbiAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBzcmM9XCIvc3RhdGljL2ltYWdlcy9iMDIuanBnXCIgLz48L2xpPlxuICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2IwMi5qcGdcIiAvPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvYjAyLmpwZ1wiIC8+PC9saT5cbiAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBzcmM9XCIvc3RhdGljL2ltYWdlcy9iMDIuanBnXCIgLz48L2xpPiAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aXRlbX0gY2xhc3NOYW1lPVwic2VhcmNoXCIgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDIwfX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJrZXlib2FyZFwiIGlkPVwia2V5Ym9hcmRcIiBvbkNoYW5nZT17KGUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bmFtZTplLnRhcmdldC52YWx1ZX0pO1xuICAgICAgICAgICAgICAgICAgICB9fSBjbGFzc05hbWU9XCJpbnB1dF90ZXh0XCIgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXlhbPplK7lrZfor41cIiBzdHlsZT17e2NvbG9yOiBcIiMwMDBcIn19ICB0eXBlPVwidGV4dFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaW5wdXRfc3VibWl0XCIgb25DbGljaz17KCk9PntcbiAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gYC9hcnRpY2xlP25hbWU9JHtuYW1lfWBcbiAgICAgICAgICAgICAgICAgICAgfX0+5pCc57SiPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpdGVtfSBjbGFzc05hbWU9XCJsZWZ0X2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPuWIhuexuzwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nOjEwfX0+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICB0cHMubWFwKChpdGVtLGspPT4oXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17a30gb25DbGljaz17KCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9IGAvYXJ0aWNsZT90cD0ke2l0ZW0uaWR9YFxuICAgICAgICAgICAgICAgICAgICAgICAgfX0gY2xhc3NOYW1lPVwiY2F0aW9uX2l0ZW1cIj57aXRlbS5sYWJsZX3vvIh7aXRlbS5ibG9nTnVtfe+8iTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aXRlbX0gY2xhc3NOYW1lPVwibGVmdF9pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj7ngrnlh7vmjpLooYw8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzoxMH19PlxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmtpbmdMaXN0Lm1hcCgoaXRlbSxrKT0+KFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGlvbl9pdGVtXCIgb25DbGljaz17KCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gYC9kZXRhaWw/aWQ9JHtpdGVtLmlkfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX0ga2V5PXtrfSBzdHlsZT17e2JhY2tncm91bmRJbWFnZTpcInVybCgvc3RhdGljL2ltYWdlcy9saS5wbmcpXCIsYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixiYWNrZ3JvdW5kUG9zaXRpb25ZOiA5LHRleHRJbmRlbnQ6IDEzfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3t0ZXh0T3ZlcmZsb3c6IFwiZWxsaXBzaXNcIix3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLG92ZXJmbG93OiBcImhpZGRlblwiLHdpZHRoOiAyNjUsZGlzcGxheTogXCJibG9ja1wifX0+e2l0ZW0ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aXRlbX0gY2xhc3NOYW1lPVwibGVmdF9pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj7lj4vmg4Xpk77mjqU8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzoxMH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGlvbl9pdGVtXCI+55m+5bqmPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpdGVtfSBjbGFzc05hbWU9XCJsZWZ0X2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPuWFs+azqOaIkTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nOjEwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e3dpZHRoOiBcIjg2JVwiLGJhY2tncm91bmQ6IFwiI2ZmZlwiLHBhZGRpbmc6IDE5fX0gc3JjPVwiL3N0YXRpYy9pbWFnZXMvZXJ3ZWltYS5qcGdcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aXRlbX0gY2xhc3NOYW1lPVwibGVmdF9pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj7nq5nplb/mjqjojZA8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzoxMH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGlvbl9pdGVtXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6XCJ1cmwoL3N0YXRpYy9pbWFnZXMvbGkucG5nKVwiLGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsYmFja2dyb3VuZFBvc2l0aW9uWTogOSx0ZXh0SW5kZW50OiAxM319PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7dGV4dE92ZXJmbG93OiBcImVsbGlwc2lzXCIsd2hpdGVTcGFjZTogXCJub3dyYXBcIixvdmVyZmxvdzogXCJoaWRkZW5cIix3aWR0aDogMjY1LGRpc3BsYXk6IFwiYmxvY2tcIn19PuS4quS6uuWNmuWuou+8jOaIkeS4uuS7gOS5iOimgeeUqOW4neWbvWNtczExMTExMTExMTExMTExMTEx77yfPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRpb25faXRlbVwiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOlwidXJsKC9zdGF0aWMvaW1hZ2VzL2xpLnBuZylcIixiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLGJhY2tncm91bmRQb3NpdGlvblk6IDksdGV4dEluZGVudDogMTN9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e3RleHRPdmVyZmxvdzogXCJlbGxpcHNpc1wiLHdoaXRlU3BhY2U6IFwibm93cmFwXCIsb3ZlcmZsb3c6IFwiaGlkZGVuXCIsd2lkdGg6IDI2NSxkaXNwbGF5OiBcImJsb2NrXCJ9fT7kuKrkurrljZrlrqLvvIzmiJHkuLrku4DkuYjopoHnlKjluJ3lm71jbXMxMTExMTExMTExMTExMTExMe+8nzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0aW9uX2l0ZW1cIiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTpcInVybCgvc3RhdGljL2ltYWdlcy9saS5wbmcpXCIsYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixiYWNrZ3JvdW5kUG9zaXRpb25ZOiA5LHRleHRJbmRlbnQ6IDEzfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3t0ZXh0T3ZlcmZsb3c6IFwiZWxsaXBzaXNcIix3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLG92ZXJmbG93OiBcImhpZGRlblwiLHdpZHRoOiAyNjUsZGlzcGxheTogXCJibG9ja1wifX0+5Liq5Lq65Y2a5a6i77yM5oiR5Li65LuA5LmI6KaB55So5bid5Zu9Y21zMTExMTExMTExMTExMTExMTHvvJ88L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2l0ZW19IGNsYXNzTmFtZT1cImxlZnRfaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+5qCH562+5LqRPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6MTB9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWdcIiBzdHlsZT17e2JhY2tncm91bmQ6XCIjMDM2NTY0XCJ9fT7kuKrkurrljZrlrqI8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGFnXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOlwiIzMyOTlCQlwifX0+5peF5ri4PC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tjbGVhcjpcImJvdGhcIn19PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PiAgIFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gIFxuICAgICAgXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnRhZ3tcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzk5OTtcbiAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICBwYWRkaW5nOiAzcHggMTFweDtcbiAgICAgICAgICBtYXJnaW46IDEwcHggMTBweCAwIDA7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgfVxuICAgICAgICAubGVmdF9pdGVtIC5jYXRpb25faXRlbXtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAubGVmdF9pdGVtIC5jYXRpb25faXRlbTpob3ZlcntcbiAgICAgICAgICBjb2xvcjojMjIyO1xuICAgICAgICB9XG4gICAgICAgIC5zZWFyY2h7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICAuc2VhcmNoIC5pbnB1dF9zdWJtaXQge1xuICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IDA7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICAgICAgcmlnaHQ6IDglO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zZWFyY2ggaW5wdXQuaW5wdXRfdGV4dCB7XG4gICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDcyJTtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmlnaHRfaXRlbSBwIHtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwIDAgMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmlnaHRfaXRlbSBoM3tcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6ICNGRkYgMXB4IDFweCAxcHg7XG4gICAgICAgICAgICBjb2xvcjogI2RlNDk0OTtcbiAgICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmlnaHRfaXRlbSBpe1xuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJpZ2h0X2l0ZW17XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIGNvbG9yOiAjNzk3YjdjO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxlZnRfYm94e1xuICAgICAgICAgICAgd2lkdGg6MzAwcHg7XG4gICAgICAgICAgICBmbG9hdDpsZWZ0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGVmdF9pdGVte1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sZWZ0X2l0ZW0gdWwgbGl7XG4gICAgICAgICAgICB3aWR0aDogMzIlO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sZWZ0X2l0ZW0gdWwgbGkgaW1ne1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxlZnRfaXRlbSBoMntcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgbWFyZ2luOjBcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJpZ2h0X2JveHtcbiAgICAgICAgICAgIHdpZHRoOjY4MHB4O1xuICAgICAgICAgICAgZmxvYXQ6cmlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hYm91dF9tZV9pe1xuICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBjbGVhcjogbGVmdDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj4gIFxuICAgIClcbiAgfVxufVxuXG5cbiJdfQ== */\n/*@ sourceURL=/Users/justin/Desktop/private/nextjs/components/left.js */"));
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
//# sourceMappingURL=index.js.b6f47eea84fac94a0204.hot-update.js.map