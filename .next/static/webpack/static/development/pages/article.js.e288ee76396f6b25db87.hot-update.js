webpackHotUpdate("static/development/pages/article.js",{

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
      name: "",
      recommends: [],
      leftStyle: {}
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
        var _this3 = this;

        var res, data, message, rankingRes, rankingData, rankingMessage, recommendRes, recommendData, recommendMessage;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log("start");
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_12___default.a.get("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_15__["apiHost"], "/v1/blog/types"), {
                  responseType: 'blob'
                });

              case 3:
                res = _context.sent;
                _context.next = 6;
                return Object(_utils_util__WEBPACK_IMPORTED_MODULE_13__["default"])(res.data);

              case 6:
                data = _context.sent;
                message = _proto_blog_pb__WEBPACK_IMPORTED_MODULE_14___default.a.tps.deserializeBinary(data);
                data = message.toObject();
                _context.next = 11;
                return axios__WEBPACK_IMPORTED_MODULE_12___default.a.get("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_15__["apiHost"], "/v1/blog/ranking?limit=5"), {
                  responseType: 'blob'
                });

              case 11:
                rankingRes = _context.sent;
                _context.next = 14;
                return Object(_utils_util__WEBPACK_IMPORTED_MODULE_13__["default"])(rankingRes.data);

              case 14:
                rankingData = _context.sent;
                rankingMessage = _proto_blog_pb__WEBPACK_IMPORTED_MODULE_14___default.a.blogListRes.deserializeBinary(rankingData);
                rankingData = rankingMessage.toObject();
                _context.next = 19;
                return axios__WEBPACK_IMPORTED_MODULE_12___default.a.get("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_15__["apiHost"], "/v1/blog/recommend"), {
                  responseType: 'blob'
                });

              case 19:
                recommendRes = _context.sent;
                _context.next = 22;
                return Object(_utils_util__WEBPACK_IMPORTED_MODULE_13__["default"])(recommendRes.data);

              case 22:
                recommendData = _context.sent;
                recommendMessage = _proto_blog_pb__WEBPACK_IMPORTED_MODULE_14___default.a.blogListRes.deserializeBinary(recommendData);
                recommendData = recommendMessage.toObject();
                this.setState({
                  tps: data.listList,
                  rankingList: rankingData.listList,
                  recommends: recommendData.listList
                });

                if (location.pathname == "/article" || location.pathname == "/detail") {
                  this.setState({
                    orderIndex: [2, 3, 7, 4, 8, 6]
                  }, this.registerKeyUp);
                } else {
                  this.setState({
                    orderIndex: [0, 2, 3, 4, 5, 6]
                  }, this.registerKeyUp);
                }

                _utils_emiter__WEBPACK_IMPORTED_MODULE_16__["default"].on("left-fix", function () {
                  var rightHeight = document.getElementsByClassName("right_box")[0].clientHeight;
                  var leftHeight = document.getElementById("left_box").clientHeight;

                  if (leftHeight < rightHeight) {
                    // var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
                    _this3.setState({
                      leftStyle: {
                        position: "fixed",
                        top: 20
                      }
                    });
                  }
                });
                _utils_emiter__WEBPACK_IMPORTED_MODULE_16__["default"].on("left-static", function (h) {
                  var rightHeight = document.getElementsByClassName("right_box")[0].clientHeight;
                  var leftHeight = document.getElementById("left_box").clientHeight;

                  if (leftHeight < rightHeight) {
                    _this3.setState({
                      leftStyle: {
                        position: "static",
                        marginTop: h
                      }
                    });
                  }
                });
                console.log("end");
                this.setState({
                  loadings: {
                    "me": false
                  }
                });
                setTimeout(function () {
                  document.getElementById("t").setAttribute("class", "shadownone");
                  document.getElementById("loading").setAttribute("class", "shadow");
                }, 500);

              case 32:
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
      var _this4 = this;

      var _this$state = this.state,
          path = _this$state.path,
          orderIndex = _this$state.orderIndex,
          tps = _this$state.tps,
          name = _this$state.name,
          rankingList = _this$state.rankingList,
          recommends = _this$state.recommends,
          leftStyle = _this$state.leftStyle;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "left_box",
        style: leftStyle,
        className: "jsx-1005062761" + " " + "left_box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, orderIndex.map(function (item) {
        var _React$createElement;

        switch (item) {
          case 0:
            // 关于
            return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              className: "jsx-1005062761" + " " + "left_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 100
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 101
              },
              __self: this
            }, "\u5173\u4E8E"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              style: {
                padding: 12
              },
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 102
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
              className: "jsx-1005062761" + " " + "about_me_i",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 103
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
              src: "/static/images/me.jpeg",
              style: {
                width: 120,
                height: 120
              },
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 104
              },
              __self: this
            })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
              style: {
                lineHeight: "22px",
                "fontSize": 14,
                marginTop: -6
              },
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 106
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("b", {
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 107
              },
              __self: this
            }, "\u80E1\u661F"), "\uFF0C93\u5E74\u51FA\u751F\uFF0Cweb\u524D\u7AEF\u5DE5\u7A0B\u5E08 && \u670D\u52A1\u7AEF\u5DE5\u7A0B\u5E08\uFF0C\u6CA1\u4EC0\u4E48\u7279\u6B8A\u7231\u597D\uFF0C\u653E\u5047\u4E5F\u662F\u5B85\u5728\u5BB6\u91CC\uFF0C\u65E0\u804A\u7684\u65F6\u5019\u5199\u5199\u4EE3\u7801\uFF0C\u7814\u7A76\u7814\u7A76\u6280\u672F\u65B9\u9762\u7684\u4E1C\u897F\uFF0C\u5BF9\u8FD9\u79CD\u4E1C\u897F\u7B97\u4E00\u79CD\u70ED\u7231\u5427\uFF0C\u4F46\u662F\u6211\u8BA4\u4E3A\u5BF9\u4E8E\u6211\u6765\u8BF4\uFF0C \u53EA\u662F\u9009\u62E9\u4E86\u8FD9\u4E00\u6761\u8DEF\uFF0C\u9009\u62E9\u4E86\u5C31\u8981\u70ED\u7231\uFF0C\u5E72\u4E0A\u4E00\u884C\u5C31\u5F97\u7231\u4E0A\u4E00\u884C\uFF0C\u5982\u679C\u5F53\u521D\u7684\u9009\u62E9\u4E0D\u662F\u4E92\u8054\u7F51\uFF0C\u6211\u4E5F\u4F1A\u5F88\u70ED\u7231\u3002")));

          case 1:
            return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              key: item,
              className: "jsx-1005062761" + " " + "left_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 113
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 114
              },
              __self: this
            }, "\u76F8\u518C"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
              style: {
                padding: 10,
                overflow: "hidden",
                listStyle: "none",
                margin: 0
              },
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 115
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 116
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
              src: "/static/images/b02.jpg",
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 116
              },
              __self: this
            })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 117
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
              src: "/static/images/b02.jpg",
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 117
              },
              __self: this
            })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 118
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
              src: "/static/images/b02.jpg",
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 118
              },
              __self: this
            })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 119
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
              src: "/static/images/b02.jpg",
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 119
              },
              __self: this
            })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 120
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
              src: "/static/images/b02.jpg",
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 120
              },
              __self: this
            })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 121
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
              src: "/static/images/b02.jpg",
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 121
              },
              __self: this
            }))));

          case 2:
            return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              key: item,
              style: {
                marginBottom: 20
              },
              className: "jsx-1005062761" + " " + "search",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 125
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", (_React$createElement = {
              className: "keyboard",
              id: "keyboard",
              onChange: function onChange(e) {
                _this4.setState({
                  name: e.target.value
                });
              },
              placeholder: "\u8BF7\u8F93\u5165\u5173\u952E\u5B57\u8BCD",
              style: {
                color: "#000"
              },
              type: "text"
            }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_React$createElement, "className", "jsx-1005062761" + " " + "input_text"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_React$createElement, "__source", {
              fileName: _jsxFileName,
              lineNumber: 126
            }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_React$createElement, "__self", this), _React$createElement)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
              onClick: function onClick() {
                location.href = "/article?name=".concat(name);
              },
              className: "jsx-1005062761" + " " + "input_submit",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 129
              },
              __self: this
            }, "\u641C\u7D22"));

          case 3:
            return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              key: item,
              className: "jsx-1005062761" + " " + "left_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 134
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 135
              },
              __self: this
            }, "\u5206\u7C7B"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              style: {
                padding: 10
              },
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 136
              },
              __self: this
            }, tps.map(function (item, k) {
              return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
                key: k,
                onClick: function onClick() {
                  location.href = "/article?tp=".concat(item.id);
                },
                className: "jsx-1005062761" + " " + "cation_item",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 139
                },
                __self: this
              }, item.lable, "\uFF08", item.blogNum, "\uFF09");
            })));

          case 4:
            return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              key: item,
              className: "jsx-1005062761" + " " + "left_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 147
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 148
              },
              __self: this
            }, "\u70B9\u51FB\u6392\u884C"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              style: {
                padding: 10
              },
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 149
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
                className: "jsx-1005062761" + " " + "cation_item",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 152
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
                className: "jsx-1005062761",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 155
                },
                __self: this
              }, item.name));
            })));

          case 5:
            return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              key: item,
              className: "jsx-1005062761" + " " + "left_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 162
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 163
              },
              __self: this
            }, "\u53CB\u60C5\u94FE\u63A5"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              style: {
                padding: 10
              },
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 164
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              className: "jsx-1005062761" + " " + "cation_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 165
              },
              __self: this
            }, "\u767E\u5EA6")));

          case 6:
            return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              key: item,
              className: "jsx-1005062761" + " " + "left_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 169
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 170
              },
              __self: this
            }, "\u5173\u6CE8\u6211"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              style: {
                padding: 10
              },
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 171
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
              style: {
                width: "86%",
                background: "#fff",
                padding: 19
              },
              src: "/static/images/erweima.jpg",
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 172
              },
              __self: this
            })));

          case 7:
            return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              key: item,
              className: "jsx-1005062761" + " " + "left_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 176
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 177
              },
              __self: this
            }, "\u7AD9\u957F\u63A8\u8350"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              style: {
                padding: 10
              },
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 178
              },
              __self: this
            }, recommends.map(function (item, k) {
              return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
                key: k,
                onClick: function onClick() {
                  location.href = "/detail?id=".concat(item.id);
                },
                style: {
                  backgroundImage: "url(/static/images/li.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundPositionY: 9,
                  textIndent: 13
                },
                className: "jsx-1005062761" + " " + "cation_item",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 181
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
                className: "jsx-1005062761",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 184
                },
                __self: this
              }, item.name));
            })));

          case 8:
            return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              key: item,
              className: "jsx-1005062761" + " " + "left_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 191
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 192
              },
              __self: this
            }, "\u6807\u7B7E\u4E91"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              style: {
                padding: 10
              },
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 193
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
              href: "/article?name=golang",
              style: {
                background: "#036564"
              },
              className: "jsx-1005062761" + " " + "tag",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 194
              },
              __self: this
            }, "golang"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
              href: "/article?name=docker",
              style: {
                background: "#3299BB"
              },
              className: "jsx-1005062761" + " " + "tag",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 195
              },
              __self: this
            }, "docker"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              style: {
                clear: "both"
              },
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 196
              },
              __self: this
            })));
        }
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "1005062761",
        __self: this
      }, ".tag.jsx-1005062761{line-height:24px;height:24px;display:block;background:#999;float:left;padding:3px 11px;margin:10px 10px 0 0;border-radius:8px;-moz-transition:all 0.5s;-webkit-transition:all 0.5s;-o-transition:all 0.5s;-webkit-transition:all 0.5s;transition:all 0.5s;color:#FFF;-webkit-text-decoration:none;text-decoration:none;}.left_item.jsx-1005062761 .cation_item.jsx-1005062761{margin-bottom:10px;margin-left:10px;cursor:pointer;}.left_item.jsx-1005062761 .cation_item.jsx-1005062761:hover{color:#222;}.search.jsx-1005062761{border:1px solid #000;background:#000;border-radius:0 5px 5px 0;position:relative;}.search.jsx-1005062761 .input_submit.jsx-1005062761{border:0;background:0;color:#fff;outline:none;position:absolute;top:10px;right:8%;cursor:pointer;}.search.jsx-1005062761 input.input_text.jsx-1005062761{border:0;line-height:36px;height:36px;width:72%;padding-left:10px;outline:none;}.right_item.jsx-1005062761 p.jsx-1005062761{margin:20px 0 0 0;line-height:22px;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;display:-webkit-box;-webkit-line-clamp:2;}.right_item.jsx-1005062761 h3.jsx-1005062761{font-size:16px;line-height:25px;text-shadow:#FFF 1px 1px 1px;color:#de4949;margin:0;}.right_item.jsx-1005062761 i.jsx-1005062761{width:150px;display:block;max-height:100px;overflow:hidden;float:right;margin-left:20px;}.right_item.jsx-1005062761{background:rgba(255,255,255,0.8);padding:15px;overflow:hidden;color:#797b7c;margin-bottom:20px;}.left_box.jsx-1005062761{width:300px;float:left;}.left_item.jsx-1005062761{background:rgba(255,255,255,0.5);margin-bottom:20px;overflow:hidden;}.left_item.jsx-1005062761 ul.jsx-1005062761 li.jsx-1005062761{width:32%;overflow:hidden;float:left;height:80px;margin-bottom:2px;margin-right:2px;}.left_item.jsx-1005062761 ul.jsx-1005062761 li.jsx-1005062761 img.jsx-1005062761{width:100%;height:100%;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;-webkit-transition:all 0.5s;transition:all 0.5s;display:block;}.left_item.jsx-1005062761 h2.jsx-1005062761{color:#333;font-size:14px;line-height:30px;padding-left:20px;background:#fff;margin:0;}.right_box.jsx-1005062761{width:680px;float:right;}.about_me_i.jsx-1005062761{width:120px;float:left;clear:left;margin-right:10px;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0aW4vRGVza3RvcC9wcml2YXRlL25leHRqcy9jb21wb25lbnRzL2xlZnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBME1vQixBQUc0QixBQWdCRSxBQUtULEFBR1ksQUFNVCxBQVVBLEFBUU8sQUFTSCxBQU9ILEFBUXFCLEFBT3RCLEFBSXNCLEFBS3ZCLEFBUUMsQUFRQSxBQVFBLEFBSUMsU0FyRkcsQUFVSSxDQWdESCxDQW5FcEIsQUEyRWdCLEFBUUcsQ0F4Q0QsQUFlSixBQWlDQyxBQUlBLEdBM0RNLEVBekRQLENBZ0RPLENBaENGLEdBUUQsQUFPRCxDQWlEZixBQWlCOEIsQUFvQmpCLENBSmIsRUF4RWdCLEFBd0JHLEFBd0JOLEFBZ0JNLEdBeEdMLEdBeURpQixDQTFCZCxBQXdDRixBQVdNLENBbUNELENBckVGLENBaENILENBeUVELENBakVZLEFBaUJaLEtBeENFLEFBZ0VFLEFBd0NFLEdBekVFLEFBd0NKLEVBOUJJLENBZ0RGLEVBekV0QixBQWdDMkIsQUFnREUsQ0FkVCxBQW1DQSxPQXBIUCxBQWdFRyxFQVJFLEFBZ0RFLENBakNGLEVBaERFLEFBUUwsRUFVSSxDQWdERSxDQVBuQixBQW1DQSxFQXBIaUIsQ0FnRUUsRUFqQ04sQ0FnQmlCLENBU3BCLENBZVcsQUF3QkMsQ0FVdkIsRUFoRUMsR0FsQkYsQUFTcUIsRUF5Qm5CLEFBZ0NBLEVBZ0JBLENBeEdxQixDQWdFckIsT0FPQSxFQXZDQSxLQWVzQixNQTlDSixjQStDSyxFQStDUixFQTdGVSxZQThGekIsS0EvQ0EsUUE5QzRCLDRCQUNMLHVCQUNILGdEQUNULFdBQ1Usa0RBQ3ZCIiwiZmlsZSI6Ii9Vc2Vycy9qdXN0aW4vRGVza3RvcC9wcml2YXRlL25leHRqcy9jb21wb25lbnRzL2xlZnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHJlYWRTdHJlYW0gZnJvbSAnLi4vdXRpbHMvdXRpbCdcbmltcG9ydCBwcm90b2J1ZiBmcm9tIFwiLi4vcHJvdG8vYmxvZ19wYlwiO1xuaW1wb3J0IHthcGlIb3N0fSBmcm9tICcuLi91dGlscy9jb25maWcnO1xuaW1wb3J0IEV2ZW50IGZyb20gJy4uL3V0aWxzL2VtaXRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHJlcSxxdWVyeSxqc29uUGFnZVJlcyB9KSB7XG4gICAgY29uc3QgdXNlckFnZW50ID0gcmVxID8gcmVxLmhlYWRlcnNbJ3VzZXItYWdlbnQnXSA6IG5hdmlnYXRvci51c2VyQWdlbnRcbiAgICByZXR1cm4geyB1c2VyQWdlbnQscXVlcnksanNvblBhZ2VSZXMgfVxuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgcGF0aDpcIlwiLFxuICAgIG9yZGVySW5kZXg6W10sXG4gICAgdHBzOltdLFxuICAgIHJhbmtpbmdMaXN0OltdLFxuICAgIG5hbWU6XCJcIixcbiAgICByZWNvbW1lbmRzOltdLFxuICAgIGxlZnRTdHlsZTp7fVxuICB9XG5cbiAgcmVnaXN0ZXJLZXlVcCgpe1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwia2V5Ym9hcmRcIikub25rZXl1cCA9IChldmVudCkgPT4ge1xuICAgICAgdmFyIGUgPSBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgICBpZiAoZSAmJiBlLmtleUNvZGUgPT0gMTMpIHsgLy/lm57ovabplK7nmoTplK7lgLzkuLoxM1xuICAgICAgICBsb2NhdGlvbi5ocmVmID0gYC9hcnRpY2xlP25hbWU9JHt0aGlzLnN0YXRlLm5hbWV9YFxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIGNvbnNvbGUubG9nKFwic3RhcnRcIilcbiAgICBsZXQgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2FwaUhvc3R9L3YxL2Jsb2cvdHlwZXNgLHtcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InXG4gICAgfSlcbiAgICBsZXQgZGF0YSA9IGF3YWl0IHJlYWRTdHJlYW0ocmVzLmRhdGEpO1xuICAgIGxldCBtZXNzYWdlID0gcHJvdG9idWYudHBzLmRlc2VyaWFsaXplQmluYXJ5KGRhdGEpO1xuICAgIGRhdGEgPSBtZXNzYWdlLnRvT2JqZWN0KCk7XG4gICAgbGV0IHJhbmtpbmdSZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YXBpSG9zdH0vdjEvYmxvZy9yYW5raW5nP2xpbWl0PTVgLHtcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InXG4gICAgfSlcbiAgICBsZXQgcmFua2luZ0RhdGEgPSBhd2FpdCByZWFkU3RyZWFtKHJhbmtpbmdSZXMuZGF0YSk7XG4gICAgbGV0IHJhbmtpbmdNZXNzYWdlID0gcHJvdG9idWYuYmxvZ0xpc3RSZXMuZGVzZXJpYWxpemVCaW5hcnkocmFua2luZ0RhdGEpO1xuICAgIHJhbmtpbmdEYXRhID0gcmFua2luZ01lc3NhZ2UudG9PYmplY3QoKTtcblxuICAgIGxldCByZWNvbW1lbmRSZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YXBpSG9zdH0vdjEvYmxvZy9yZWNvbW1lbmRgLHtcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InXG4gICAgfSlcbiAgICBsZXQgcmVjb21tZW5kRGF0YSA9IGF3YWl0IHJlYWRTdHJlYW0ocmVjb21tZW5kUmVzLmRhdGEpO1xuICAgIGxldCByZWNvbW1lbmRNZXNzYWdlID0gcHJvdG9idWYuYmxvZ0xpc3RSZXMuZGVzZXJpYWxpemVCaW5hcnkocmVjb21tZW5kRGF0YSk7XG4gICAgcmVjb21tZW5kRGF0YSA9IHJlY29tbWVuZE1lc3NhZ2UudG9PYmplY3QoKTtcbiAgICB0aGlzLnNldFN0YXRlKHt0cHM6ZGF0YS5saXN0TGlzdCxyYW5raW5nTGlzdDpyYW5raW5nRGF0YS5saXN0TGlzdCxyZWNvbW1lbmRzOnJlY29tbWVuZERhdGEubGlzdExpc3R9KTtcbiAgICBpZihsb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9hcnRpY2xlXCIgfHwgbG9jYXRpb24ucGF0aG5hbWUgPT0gXCIvZGV0YWlsXCIpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7b3JkZXJJbmRleDpbMiwzLDcsNCw4LDZdfSx0aGlzLnJlZ2lzdGVyS2V5VXApO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7b3JkZXJJbmRleDpbMCwyLDMsNCw1LDZdfSx0aGlzLnJlZ2lzdGVyS2V5VXApO1xuICAgIH1cbiAgICBFdmVudC5vbihcImxlZnQtZml4XCIsKCk9PntcbiAgICAgIGxldCByaWdodEhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJyaWdodF9ib3hcIilbMF0uY2xpZW50SGVpZ2h0O1xuICAgICAgbGV0IGxlZnRIZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRfYm94XCIpLmNsaWVudEhlaWdodDtcbiAgICAgIGlmKGxlZnRIZWlnaHQgPCByaWdodEhlaWdodCl7XG4gICAgICAgIC8vIHZhciBzY3JvbGxUb3AgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bGVmdFN0eWxlOntcbiAgICAgICAgICBwb3NpdGlvbjpcImZpeGVkXCIsXG4gICAgICAgICAgdG9wOjIwXG4gICAgICAgIH19KVxuICAgICAgfVxuICAgIH0pXG4gICAgRXZlbnQub24oXCJsZWZ0LXN0YXRpY1wiLChoKT0+e1xuICAgICAgbGV0IHJpZ2h0SGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInJpZ2h0X2JveFwiKVswXS5jbGllbnRIZWlnaHQ7XG4gICAgICBsZXQgbGVmdEhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdF9ib3hcIikuY2xpZW50SGVpZ2h0O1xuICAgICAgaWYobGVmdEhlaWdodCA8IHJpZ2h0SGVpZ2h0KXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bGVmdFN0eWxlOntcbiAgICAgICAgICBwb3NpdGlvbjpcInN0YXRpY1wiLFxuICAgICAgICAgIG1hcmdpblRvcDpoXG4gICAgICAgIH19KVxuICAgICAgfVxuICAgIH0pXG4gICAgY29uc29sZS5sb2coXCJlbmRcIilcbiAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nczp7XCJtZVwiOmZhbHNlfX0pXG4gICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0XCIpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJzaGFkb3dub25lXCIpXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRpbmdcIikuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcInNoYWRvd1wiKVxuICAgICAgXG4gICAgfSw1MDApXG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7cGF0aCxvcmRlckluZGV4LHRwcyxuYW1lLHJhbmtpbmdMaXN0LHJlY29tbWVuZHMsbGVmdFN0eWxlfSA9IHRoaXMuc3RhdGVcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRfYm94XCIgaWQ9XCJsZWZ0X2JveFwiIHN0eWxlPXtsZWZ0U3R5bGV9PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG9yZGVySW5kZXgubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICBzd2l0Y2goaXRlbSl7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgLy8g5YWz5LqOXG4gICAgICAgICAgICAgICAgICByZXR1cm4gIDxkaXYgY2xhc3NOYW1lPVwibGVmdF9pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj7lhbPkuo48L2gyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzogMTJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJhYm91dF9tZV9pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL21lLmpwZWdcIiBzdHlsZT17e3dpZHRoOjEyMCxoZWlnaHQ6MTIwfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tsaW5lSGVpZ2h0OiBcIjIycHhcIixcImZvbnRTaXplXCI6IDE0LG1hcmdpblRvcDogLTZ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPuiDoeaYnzwvYj7vvIw5M+W5tOWHuueUn++8jHdlYuWJjeerr+W3peeoi+W4iCAmJiDmnI3liqHnq6/lt6XnqIvluIjvvIzmsqHku4DkuYjnibnmrorniLHlpb3vvIzmlL7lgYfkuZ/mmK/lroXlnKjlrrbph4zvvIzml6DogYrnmoTml7blgJnlhpnlhpnku6PnoIHvvIznoJTnqbbnoJTnqbbmioDmnK/mlrnpnaLnmoTkuJzopb/vvIzlr7nov5nnp43kuJzopb/nrpfkuIDnp43ng63niLHlkKfvvIzkvYbmmK/miJHorqTkuLrlr7nkuo7miJHmnaXor7TvvIxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDlj6rmmK/pgInmi6nkuobov5nkuIDmnaHot6/vvIzpgInmi6nkuoblsLHopoHng63niLHvvIzlubLkuIrkuIDooYzlsLHlvpfniLHkuIrkuIDooYzvvIzlpoLmnpzlvZPliJ3nmoTpgInmi6nkuI3mmK/kupLogZTnvZHvvIzmiJHkuZ/kvJrlvojng63niLHjgIJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aXRlbX0gY2xhc3NOYW1lPVwibGVmdF9pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8aDI+55u45YaMPC9oMj5cbiAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17e3BhZGRpbmc6IDEwLG92ZXJmbG93OiBcImhpZGRlblwiLGxpc3RTdHlsZTpcIm5vbmVcIixtYXJnaW46MH19PlxuICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2IwMi5qcGdcIiAvPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvYjAyLmpwZ1wiIC8+PC9saT5cbiAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBzcmM9XCIvc3RhdGljL2ltYWdlcy9iMDIuanBnXCIgLz48L2xpPlxuICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2IwMi5qcGdcIiAvPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvYjAyLmpwZ1wiIC8+PC9saT5cbiAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBzcmM9XCIvc3RhdGljL2ltYWdlcy9iMDIuanBnXCIgLz48L2xpPiAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aXRlbX0gY2xhc3NOYW1lPVwic2VhcmNoXCIgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDIwfX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJrZXlib2FyZFwiIGlkPVwia2V5Ym9hcmRcIiBvbkNoYW5nZT17KGUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bmFtZTplLnRhcmdldC52YWx1ZX0pO1xuICAgICAgICAgICAgICAgICAgICB9fSBjbGFzc05hbWU9XCJpbnB1dF90ZXh0XCIgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXlhbPplK7lrZfor41cIiBzdHlsZT17e2NvbG9yOiBcIiMwMDBcIn19ICB0eXBlPVwidGV4dFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaW5wdXRfc3VibWl0XCIgb25DbGljaz17KCk9PntcbiAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gYC9hcnRpY2xlP25hbWU9JHtuYW1lfWBcbiAgICAgICAgICAgICAgICAgICAgfX0+5pCc57SiPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpdGVtfSBjbGFzc05hbWU9XCJsZWZ0X2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPuWIhuexuzwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nOjEwfX0+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICB0cHMubWFwKChpdGVtLGspPT4oXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17a30gb25DbGljaz17KCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9IGAvYXJ0aWNsZT90cD0ke2l0ZW0uaWR9YFxuICAgICAgICAgICAgICAgICAgICAgICAgfX0gY2xhc3NOYW1lPVwiY2F0aW9uX2l0ZW1cIj57aXRlbS5sYWJsZX3vvIh7aXRlbS5ibG9nTnVtfe+8iTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aXRlbX0gY2xhc3NOYW1lPVwibGVmdF9pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj7ngrnlh7vmjpLooYw8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzoxMH19PlxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmtpbmdMaXN0Lm1hcCgoaXRlbSxrKT0+KFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGlvbl9pdGVtXCIgb25DbGljaz17KCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gYC9kZXRhaWw/aWQ9JHtpdGVtLmlkfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX0ga2V5PXtrfSBzdHlsZT17e2JhY2tncm91bmRJbWFnZTpcInVybCgvc3RhdGljL2ltYWdlcy9saS5wbmcpXCIsYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixiYWNrZ3JvdW5kUG9zaXRpb25ZOiA5LHRleHRJbmRlbnQ6IDEzfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3t0ZXh0T3ZlcmZsb3c6IFwiZWxsaXBzaXNcIix3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLG92ZXJmbG93OiBcImhpZGRlblwiLHdpZHRoOiAyNjUsZGlzcGxheTogXCJibG9ja1wifX0+e2l0ZW0ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aXRlbX0gY2xhc3NOYW1lPVwibGVmdF9pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj7lj4vmg4Xpk77mjqU8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzoxMH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGlvbl9pdGVtXCI+55m+5bqmPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpdGVtfSBjbGFzc05hbWU9XCJsZWZ0X2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPuWFs+azqOaIkTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nOjEwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e3dpZHRoOiBcIjg2JVwiLGJhY2tncm91bmQ6IFwiI2ZmZlwiLHBhZGRpbmc6IDE5fX0gc3JjPVwiL3N0YXRpYy9pbWFnZXMvZXJ3ZWltYS5qcGdcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aXRlbX0gY2xhc3NOYW1lPVwibGVmdF9pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj7nq5nplb/mjqjojZA8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzoxMH19PlxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY29tbWVuZHMubWFwKChpdGVtLGspPT4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0aW9uX2l0ZW1cIiBrZXk9e2t9IG9uQ2xpY2s9eygpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9IGAvZGV0YWlsP2lkPSR7aXRlbS5pZH1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19IHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOlwidXJsKC9zdGF0aWMvaW1hZ2VzL2xpLnBuZylcIixiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLGJhY2tncm91bmRQb3NpdGlvblk6IDksdGV4dEluZGVudDogMTN9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e3RleHRPdmVyZmxvdzogXCJlbGxpcHNpc1wiLHdoaXRlU3BhY2U6IFwibm93cmFwXCIsb3ZlcmZsb3c6IFwiaGlkZGVuXCIsd2lkdGg6IDI2NSxkaXNwbGF5OiBcImJsb2NrXCJ9fT57aXRlbS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2l0ZW19IGNsYXNzTmFtZT1cImxlZnRfaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+5qCH562+5LqRPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6MTB9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgL2FydGljbGU/bmFtZT1nb2xhbmdgfSBjbGFzc05hbWU9XCJ0YWdcIiBzdHlsZT17e2JhY2tncm91bmQ6XCIjMDM2NTY0XCJ9fT5nb2xhbmc8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YC9hcnRpY2xlP25hbWU9ZG9ja2VyYH0gY2xhc3NOYW1lPVwidGFnXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOlwiIzMyOTlCQlwifX0+ZG9ja2VyPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tjbGVhcjpcImJvdGhcIn19PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PiAgIFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gIFxuICAgICAgXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnRhZ3tcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzk5OTtcbiAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICBwYWRkaW5nOiAzcHggMTFweDtcbiAgICAgICAgICBtYXJnaW46IDEwcHggMTBweCAwIDA7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmxlZnRfaXRlbSAuY2F0aW9uX2l0ZW17XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmxlZnRfaXRlbSAuY2F0aW9uX2l0ZW06aG92ZXJ7XG4gICAgICAgICAgY29sb3I6IzIyMjtcbiAgICAgICAgfVxuICAgICAgICAuc2VhcmNoe1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgLnNlYXJjaCAuaW5wdXRfc3VibWl0IHtcbiAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAwO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgICAgIHJpZ2h0OiA4JTtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VhcmNoIGlucHV0LmlucHV0X3RleHQge1xuICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgICAgICAgIHdpZHRoOiA3MiU7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJpZ2h0X2l0ZW0gcCB7XG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMCAwIDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJpZ2h0X2l0ZW0gaDN7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAjRkZGIDFweCAxcHggMXB4O1xuICAgICAgICAgICAgY29sb3I6ICNkZTQ5NDk7XG4gICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJpZ2h0X2l0ZW0gaXtcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yaWdodF9pdGVte1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBjb2xvcjogIzc5N2I3YztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sZWZ0X2JveHtcbiAgICAgICAgICAgIHdpZHRoOjMwMHB4O1xuICAgICAgICAgICAgZmxvYXQ6bGVmdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxlZnRfaXRlbXtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGVmdF9pdGVtIHVsIGxpe1xuICAgICAgICAgICAgd2lkdGg6IDMyJTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGVmdF9pdGVtIHVsIGxpIGltZ3tcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sZWZ0X2l0ZW0gaDJ7XG4gICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIG1hcmdpbjowXG4gICAgICAgICAgfVxuICAgICAgICAgIC5yaWdodF9ib3h7XG4gICAgICAgICAgICB3aWR0aDo2ODBweDtcbiAgICAgICAgICAgIGZsb2F0OnJpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYWJvdXRfbWVfaXtcbiAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgY2xlYXI6IGxlZnQ7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+ICBcbiAgICApXG4gIH1cbn1cblxuXG4iXX0= */\n/*@ sourceURL=/Users/justin/Desktop/private/nextjs/components/left.js */"));
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
//# sourceMappingURL=article.js.e288ee76396f6b25db87.hot-update.js.map