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
      orderIndex: [0, 1, 2, 3, 4, 5, 6],
      tps: []
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(_default, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, data, message;
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
                this.setState({
                  tps: data.listList
                });

                if (location.pathname == "/article" || location.pathname == "/detail") {
                  this.setState({
                    orderIndex: [2, 3, 7, 4, 8, 6]
                  });
                }

                _utils_emiter__WEBPACK_IMPORTED_MODULE_16__["default"].on("tp", function (t) {
                  console.log(t);
                });

              case 11:
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
          path = _this$state.path,
          orderIndex = _this$state.orderIndex,
          tps = _this$state.tps;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "left_box",
        className: "jsx-107847908" + " " + "left_box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, orderIndex.map(function (item) {
        var _React$createElement;

        switch (item) {
          case 0:
            // 关于
            return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              key: item,
              className: "jsx-107847908" + " " + "left_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 44
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
              className: "jsx-107847908",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 45
              },
              __self: this
            }, "\u5173\u4E8E"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              style: {
                padding: 12
              },
              className: "jsx-107847908",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
              className: "jsx-107847908" + " " + "about_me_i",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 47
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
              src: "/static/images/me.jpeg",
              style: {
                width: 120,
                height: 120
              },
              className: "jsx-107847908",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 48
              },
              __self: this
            })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
              style: {
                lineHeight: "22px",
                "fontSize": 14,
                marginTop: -6
              },
              className: "jsx-107847908",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 50
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("b", {
              className: "jsx-107847908",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 51
              },
              __self: this
            }, "\u80E1\u661F"), "\uFF0C93\u5E74\u51FA\u751F\uFF0Cweb\u524D\u7AEF\u5DE5\u7A0B\u5E08 && \u670D\u52A1\u7AEF\u5DE5\u7A0B\u5E08\uFF0C\u6CA1\u4EC0\u4E48\u7279\u6B8A\u7231\u597D\uFF0C\u653E\u5047\u4E5F\u662F\u5B85\u5728\u5BB6\u91CC\uFF0C\u65E0\u804A\u7684\u65F6\u5019\u5199\u5199\u4EE3\u7801\uFF0C\u7814\u7A76\u7814\u7A76\u6280\u672F\u65B9\u9762\u7684\u4E1C\u897F\uFF0C\u5BF9\u8FD9\u79CD\u4E1C\u897F\u7B97\u4E00\u79CD\u70ED\u7231\u5427\uFF0C\u4F46\u662F\u6211\u8BA4\u4E3A\u5BF9\u4E8E\u6211\u6765\u8BF4\uFF0C \u53EA\u662F\u9009\u62E9\u4E86\u8FD9\u4E00\u6761\u8DEF\uFF0C\u9009\u62E9\u4E86\u5C31\u8981\u70ED\u7231\uFF0C\u5E72\u4E0A\u4E00\u884C\u5C31\u5F97\u7231\u4E0A\u4E00\u884C\uFF0C\u5982\u679C\u5F53\u521D\u7684\u9009\u62E9\u4E0D\u662F\u4E92\u8054\u7F51\uFF0C\u6211\u4E5F\u4F1A\u5F88\u70ED\u7231\u3002")));

          case 1:
            return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              key: item,
              className: "jsx-107847908" + " " + "left_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 57
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
              className: "jsx-107847908",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 58
              },
              __self: this
            }, "\u76F8\u518C"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
              style: {
                padding: 10,
                overflow: "hidden",
                listStyle: "none",
                margin: 0
              },
              className: "jsx-107847908",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 59
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
              className: "jsx-107847908",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 60
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
              src: "/static/images/b02.jpg",
              className: "jsx-107847908",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 60
              },
              __self: this
            })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
              className: "jsx-107847908",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 61
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
              src: "/static/images/b02.jpg",
              className: "jsx-107847908",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 61
              },
              __self: this
            })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
              className: "jsx-107847908",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 62
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
              src: "/static/images/b02.jpg",
              className: "jsx-107847908",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 62
              },
              __self: this
            })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
              className: "jsx-107847908",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 63
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
              src: "/static/images/b02.jpg",
              className: "jsx-107847908",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 63
              },
              __self: this
            })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
              className: "jsx-107847908",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 64
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
              src: "/static/images/b02.jpg",
              className: "jsx-107847908",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 64
              },
              __self: this
            })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
              className: "jsx-107847908",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 65
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
              src: "/static/images/b02.jpg",
              className: "jsx-107847908",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 65
              },
              __self: this
            }))));

          case 2:
            return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              key: item,
              style: {
                marginBottom: 20
              },
              className: "jsx-107847908" + " " + "search",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 69
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", (_React$createElement = {
              className: "keyboard",
              id: "keyboard",
              placeholder: "\u8BF7\u8F93\u5165\u5173\u952E\u5B57\u8BCD",
              style: {
                color: "#000"
              },
              type: "text"
            }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_React$createElement, "className", "jsx-107847908" + " " + "input_text"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_React$createElement, "__source", {
              fileName: _jsxFileName,
              lineNumber: 70
            }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_React$createElement, "__self", this), _React$createElement)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
              className: "jsx-107847908" + " " + "input_submit",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 71
              },
              __self: this
            }, "\u641C\u7D22"));

          case 3:
            return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              key: item,
              className: "jsx-107847908" + " " + "left_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 74
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
              className: "jsx-107847908",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 75
              },
              __self: this
            }, "\u5206\u7C7B"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              style: {
                padding: 10
              },
              className: "jsx-107847908",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 76
              },
              __self: this
            }, tps.map(function (item, k) {
              return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
                key: k,
                onClick: function onClick() {
                  _utils_emiter__WEBPACK_IMPORTED_MODULE_16__["default"].emit("tp", item.id);
                },
                className: "jsx-107847908" + " " + "cation_item",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 79
                },
                __self: this
              }, item.lable, "\uFF08", item.blogNum, "\uFF09");
            })));

          case 4:
            return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              key: item,
              className: "jsx-107847908" + " " + "left_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 87
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
              className: "jsx-107847908",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 88
              },
              __self: this
            }, "\u70B9\u51FB\u6392\u884C"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              style: {
                padding: 10
              },
              className: "jsx-107847908",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 89
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              style: {
                backgroundImage: "url(/static/images/li.png)",
                backgroundRepeat: "no-repeat",
                backgroundPositionY: 9,
                textIndent: 13
              },
              className: "jsx-107847908" + " " + "cation_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 90
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
              className: "jsx-107847908",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 91
              },
              __self: this
            }, "\u4E2A\u4EBA\u535A\u5BA2\uFF0C\u6211\u4E3A\u4EC0\u4E48\u8981\u7528\u5E1D\u56FDcms11111111111111111\uFF1F")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              style: {
                backgroundImage: "url(/static/images/li.png)",
                backgroundRepeat: "no-repeat",
                backgroundPositionY: 9,
                textIndent: 13
              },
              className: "jsx-107847908" + " " + "cation_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 93
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
              className: "jsx-107847908",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 94
              },
              __self: this
            }, "\u4E2A\u4EBA\u535A\u5BA2\uFF0C\u6211\u4E3A\u4EC0\u4E48\u8981\u7528\u5E1D\u56FDcms11111111111111111\uFF1F")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              style: {
                backgroundImage: "url(/static/images/li.png)",
                backgroundRepeat: "no-repeat",
                backgroundPositionY: 9,
                textIndent: 13
              },
              className: "jsx-107847908" + " " + "cation_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 96
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
              className: "jsx-107847908",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 97
              },
              __self: this
            }, "\u4E2A\u4EBA\u535A\u5BA2\uFF0C\u6211\u4E3A\u4EC0\u4E48\u8981\u7528\u5E1D\u56FDcms11111111111111111\uFF1F"))));

          case 5:
            return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              key: item,
              className: "jsx-107847908" + " " + "left_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 102
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
              className: "jsx-107847908",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 103
              },
              __self: this
            }, "\u53CB\u60C5\u94FE\u63A5"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              style: {
                padding: 10
              },
              className: "jsx-107847908",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 104
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              className: "jsx-107847908" + " " + "cation_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 105
              },
              __self: this
            }, "\u767E\u5EA6")));

          case 6:
            return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              key: item,
              className: "jsx-107847908" + " " + "left_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 109
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
              className: "jsx-107847908",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 110
              },
              __self: this
            }, "\u5173\u6CE8\u6211"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              style: {
                padding: 10
              },
              className: "jsx-107847908",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 111
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
              style: {
                width: "86%",
                background: "#fff",
                padding: 19
              },
              src: "/static/images/erweima.jpg",
              className: "jsx-107847908",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 112
              },
              __self: this
            })));

          case 7:
            return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              key: item,
              className: "jsx-107847908" + " " + "left_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 116
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
              className: "jsx-107847908",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 117
              },
              __self: this
            }, "\u7AD9\u957F\u63A8\u8350"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              style: {
                padding: 10
              },
              className: "jsx-107847908",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 118
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              style: {
                backgroundImage: "url(/static/images/li.png)",
                backgroundRepeat: "no-repeat",
                backgroundPositionY: 9,
                textIndent: 13
              },
              className: "jsx-107847908" + " " + "cation_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 119
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
              className: "jsx-107847908",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 120
              },
              __self: this
            }, "\u4E2A\u4EBA\u535A\u5BA2\uFF0C\u6211\u4E3A\u4EC0\u4E48\u8981\u7528\u5E1D\u56FDcms11111111111111111\uFF1F")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              style: {
                backgroundImage: "url(/static/images/li.png)",
                backgroundRepeat: "no-repeat",
                backgroundPositionY: 9,
                textIndent: 13
              },
              className: "jsx-107847908" + " " + "cation_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 122
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
              className: "jsx-107847908",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 123
              },
              __self: this
            }, "\u4E2A\u4EBA\u535A\u5BA2\uFF0C\u6211\u4E3A\u4EC0\u4E48\u8981\u7528\u5E1D\u56FDcms11111111111111111\uFF1F")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              style: {
                backgroundImage: "url(/static/images/li.png)",
                backgroundRepeat: "no-repeat",
                backgroundPositionY: 9,
                textIndent: 13
              },
              className: "jsx-107847908" + " " + "cation_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 125
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
              className: "jsx-107847908",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 126
              },
              __self: this
            }, "\u4E2A\u4EBA\u535A\u5BA2\uFF0C\u6211\u4E3A\u4EC0\u4E48\u8981\u7528\u5E1D\u56FDcms11111111111111111\uFF1F"))));

          case 8:
            return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              key: item,
              className: "jsx-107847908" + " " + "left_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 131
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
              className: "jsx-107847908",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 132
              },
              __self: this
            }, "\u6807\u7B7E\u4E91"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              style: {
                padding: 10
              },
              className: "jsx-107847908",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 133
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
              style: {
                background: "#036564"
              },
              className: "jsx-107847908" + " " + "tag",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 134
              },
              __self: this
            }, "\u4E2A\u4EBA\u535A\u5BA2"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
              style: {
                background: "#3299BB"
              },
              className: "jsx-107847908" + " " + "tag",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 135
              },
              __self: this
            }, "\u65C5\u6E38"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              style: {
                clear: "both"
              },
              className: "jsx-107847908",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 136
              },
              __self: this
            })));
        }
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "107847908",
        __self: this
      }, ".tag.jsx-107847908{line-height:24px;height:24px;display:block;background:#999;float:left;padding:3px 11px;margin:10px 10px 0 0;border-radius:8px;-moz-transition:all 0.5s;-webkit-transition:all 0.5s;-o-transition:all 0.5s;-webkit-transition:all 0.5s;transition:all 0.5s;color:#FFF;}.left_item.jsx-107847908 .cation_item.jsx-107847908{margin-bottom:10px;margin-left:10px;cursor:pointer;}.left_item.jsx-107847908 .cation_item.jsx-107847908:hover{color:#222;}.search.jsx-107847908{border:1px solid #000;background:#000;border-radius:0 5px 5px 0;position:relative;}.search.jsx-107847908 .input_submit.jsx-107847908{border:0;background:0;color:#fff;outline:none;position:absolute;top:10px;right:6%;}.search.jsx-107847908 input.input_text.jsx-107847908{border:0;line-height:36px;height:36px;width:72%;padding-left:10px;outline:none;}.right_item.jsx-107847908 p.jsx-107847908{margin:20px 0 0 0;line-height:22px;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;display:-webkit-box;-webkit-line-clamp:2;}.right_item.jsx-107847908 h3.jsx-107847908{font-size:16px;line-height:25px;text-shadow:#FFF 1px 1px 1px;color:#de4949;margin:0;}.right_item.jsx-107847908 i.jsx-107847908{width:150px;display:block;max-height:100px;overflow:hidden;float:right;margin-left:20px;}.right_item.jsx-107847908{background:rgba(255,255,255,0.8);padding:15px;overflow:hidden;color:#797b7c;margin-bottom:20px;}.left_box.jsx-107847908{width:300px;float:left;}.left_item.jsx-107847908{background:rgba(255,255,255,0.5);margin-bottom:20px;overflow:hidden;}.left_item.jsx-107847908 ul.jsx-107847908 li.jsx-107847908{width:32%;overflow:hidden;float:left;height:80px;margin-bottom:2px;margin-right:2px;}.left_item.jsx-107847908 ul.jsx-107847908 li.jsx-107847908 img.jsx-107847908{width:100%;height:100%;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;-webkit-transition:all 0.5s;transition:all 0.5s;display:block;}.left_item.jsx-107847908 h2.jsx-107847908{color:#333;font-size:14px;line-height:30px;padding-left:20px;background:#fff;margin:0;}.right_box.jsx-107847908{width:680px;float:right;}.about_me_i.jsx-107847908{width:120px;float:left;clear:left;margin-right:10px;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0aW4vRGVza3RvcC9wcml2YXRlL25leHRqcy9jb21wb25lbnRzL2xlZnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOElvQixBQUc0QixBQWVFLEFBS1QsQUFHWSxBQU1ULEFBU0EsQUFRTyxBQVNILEFBT0gsQUFRcUIsQUFPdEIsQUFJc0IsQUFLdkIsQUFRQyxBQVFBLEFBUUEsQUFJQyxTQXBGRyxBQVNJLENBZ0RILENBbEVwQixBQTBFZ0IsQUFRRyxDQXhDRCxBQWVKLEFBaUNDLEFBSUEsR0EzRE0sRUF2RFAsQ0E4Q08sQ0EvQkYsR0FRRCxBQU9ELENBZ0RmLEFBaUI4QixBQW9CakIsQ0FKYixFQXhFZ0IsQUF3QkcsQUF3Qk4sQUFnQk0sR0F0R0wsR0F1RGlCLENBekJkLEFBdUNGLEFBV00sQ0FtQ0QsQ0FyRUYsQ0EvQkgsQ0F3RUQsQ0FoRVksQUFnQlosS0F0Q0UsQUE4REUsQUF3Q0UsR0F4RUUsQUF1Q0osRUE5QkksQ0FnREYsRUF4RXRCLEFBK0IyQixBQWdERSxDQWRULEFBbUNBLE9BbEhQLEFBOERHLEVBUkUsQUFnREUsQ0FqQ0YsRUEvQ0UsQUFRTCxFQVNJLENBZ0RFLENBUG5CLEFBbUNBLEVBbEhpQixDQThERSxFQWhDTixDQWVpQixDQVNwQixDQWVXLEFBd0JDLENBVXZCLEVBaEVDLEdBakJGLEFBU0UsRUF3QkEsQUFnQ0EsRUFnQkEsQ0F0R3FCLENBOERyQixPQU9BLE9BeEJzQixNQTVDSixjQTZDSyxFQStDUixFQTNGVSxZQTRGekIsS0EvQ0EsUUE1QzRCLDRCQUNMLHVCQUNILGdEQUNULFdBQ2IiLCJmaWxlIjoiL1VzZXJzL2p1c3Rpbi9EZXNrdG9wL3ByaXZhdGUvbmV4dGpzL2NvbXBvbmVudHMvbGVmdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgcmVhZFN0cmVhbSBmcm9tICcuLi91dGlscy91dGlsJ1xuaW1wb3J0IHByb3RvYnVmIGZyb20gXCIuLi9wcm90by9ibG9nX3BiXCI7XG5pbXBvcnQge2FwaUhvc3R9IGZyb20gJy4uL3V0aWxzL2NvbmZpZyc7XG5pbXBvcnQgRXZlbnQgZnJvbSAnLi4vdXRpbHMvZW1pdGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxLHF1ZXJ5LGpzb25QYWdlUmVzIH0pIHtcbiAgICBjb25zdCB1c2VyQWdlbnQgPSByZXEgPyByZXEuaGVhZGVyc1sndXNlci1hZ2VudCddIDogbmF2aWdhdG9yLnVzZXJBZ2VudFxuICAgIHJldHVybiB7IHVzZXJBZ2VudCxxdWVyeSxqc29uUGFnZVJlcyB9XG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICBwYXRoOlwiXCIsXG4gICAgb3JkZXJJbmRleDpbMCwxLDIsMyw0LDUsNl0sXG4gICAgdHBzOltdXG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIGxldCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YXBpSG9zdH0vdjEvYmxvZy90eXBlc2Ase1xuICAgICAgcmVzcG9uc2VUeXBlOiAnYmxvYidcbiAgICB9KVxuICAgIGxldCBkYXRhID0gYXdhaXQgcmVhZFN0cmVhbShyZXMuZGF0YSk7XG4gICAgbGV0IG1lc3NhZ2UgPSBwcm90b2J1Zi50cHMuZGVzZXJpYWxpemVCaW5hcnkoZGF0YSk7XG4gICAgZGF0YSA9IG1lc3NhZ2UudG9PYmplY3QoKTtcbiAgICB0aGlzLnNldFN0YXRlKHt0cHM6ZGF0YS5saXN0TGlzdH0pO1xuICAgIGlmKGxvY2F0aW9uLnBhdGhuYW1lID09IFwiL2FydGljbGVcIiB8fCBsb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9kZXRhaWxcIil7XG4gICAgICB0aGlzLnNldFN0YXRlKHtvcmRlckluZGV4OlsyLDMsNyw0LDgsNl19KTtcbiAgICB9XG4gICAgRXZlbnQub24oXCJ0cFwiLCh0KT0+e2NvbnNvbGUubG9nKHQpfSlcbiAgICBcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7cGF0aCxvcmRlckluZGV4LHRwc30gPSB0aGlzLnN0YXRlXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0X2JveFwiIGlkPVwibGVmdF9ib3hcIj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBvcmRlckluZGV4Lm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgc3dpdGNoKGl0ZW0pe1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgIC8vIOWFs+S6jlxuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpdGVtfSBjbGFzc05hbWU9XCJsZWZ0X2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxoMj7lhbPkuo48L2gyPlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6IDEyfX0+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImFib3V0X21lX2lcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL21lLmpwZWdcIiBzdHlsZT17e3dpZHRoOjEyMCxoZWlnaHQ6MTIwfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2xpbmVIZWlnaHQ6IFwiMjJweFwiLFwiZm9udFNpemVcIjogMTQsbWFyZ2luVG9wOiAtNn19PlxuICAgICAgICAgICAgICAgICAgICAgIDxiPuiDoeaYnzwvYj7vvIw5M+W5tOWHuueUn++8jHdlYuWJjeerr+W3peeoi+W4iCAmJiDmnI3liqHnq6/lt6XnqIvluIjvvIzmsqHku4DkuYjnibnmrorniLHlpb3vvIzmlL7lgYfkuZ/mmK/lroXlnKjlrrbph4zvvIzml6DogYrnmoTml7blgJnlhpnlhpnku6PnoIHvvIznoJTnqbbnoJTnqbbmioDmnK/mlrnpnaLnmoTkuJzopb/vvIzlr7nov5nnp43kuJzopb/nrpfkuIDnp43ng63niLHlkKfvvIzkvYbmmK/miJHorqTkuLrlr7nkuo7miJHmnaXor7TvvIxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5Y+q5piv6YCJ5oup5LqG6L+Z5LiA5p2h6Lev77yM6YCJ5oup5LqG5bCx6KaB54Ot54ix77yM5bmy5LiK5LiA6KGM5bCx5b6X54ix5LiK5LiA6KGM77yM5aaC5p6c5b2T5Yid55qE6YCJ5oup5LiN5piv5LqS6IGU572R77yM5oiR5Lmf5Lya5b6I54Ot54ix44CCXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aXRlbX0gY2xhc3NOYW1lPVwibGVmdF9pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8aDI+55u45YaMPC9oMj5cbiAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17e3BhZGRpbmc6IDEwLG92ZXJmbG93OiBcImhpZGRlblwiLGxpc3RTdHlsZTpcIm5vbmVcIixtYXJnaW46MH19PlxuICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2IwMi5qcGdcIiAvPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvYjAyLmpwZ1wiIC8+PC9saT5cbiAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBzcmM9XCIvc3RhdGljL2ltYWdlcy9iMDIuanBnXCIgLz48L2xpPlxuICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2IwMi5qcGdcIiAvPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvYjAyLmpwZ1wiIC8+PC9saT5cbiAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBzcmM9XCIvc3RhdGljL2ltYWdlcy9iMDIuanBnXCIgLz48L2xpPiAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aXRlbX0gY2xhc3NOYW1lPVwic2VhcmNoXCIgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDIwfX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJrZXlib2FyZFwiIGlkPVwia2V5Ym9hcmRcIiBjbGFzc05hbWU9XCJpbnB1dF90ZXh0XCIgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXlhbPplK7lrZfor41cIiBzdHlsZT17e2NvbG9yOiBcIiMwMDBcIn19ICB0eXBlPVwidGV4dFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaW5wdXRfc3VibWl0XCI+5pCc57SiPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpdGVtfSBjbGFzc05hbWU9XCJsZWZ0X2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPuWIhuexuzwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nOjEwfX0+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICB0cHMubWFwKChpdGVtLGspPT4oXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17a30gb25DbGljaz17KCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgRXZlbnQuZW1pdChcInRwXCIsaXRlbS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT1cImNhdGlvbl9pdGVtXCI+e2l0ZW0ubGFibGV977yIe2l0ZW0uYmxvZ051bX3vvIk8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2l0ZW19IGNsYXNzTmFtZT1cImxlZnRfaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+54K55Ye75o6S6KGMPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6MTB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRpb25faXRlbVwiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOlwidXJsKC9zdGF0aWMvaW1hZ2VzL2xpLnBuZylcIixiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLGJhY2tncm91bmRQb3NpdGlvblk6IDksdGV4dEluZGVudDogMTN9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e3RleHRPdmVyZmxvdzogXCJlbGxpcHNpc1wiLHdoaXRlU3BhY2U6IFwibm93cmFwXCIsb3ZlcmZsb3c6IFwiaGlkZGVuXCIsd2lkdGg6IDI2NSxkaXNwbGF5OiBcImJsb2NrXCJ9fT7kuKrkurrljZrlrqLvvIzmiJHkuLrku4DkuYjopoHnlKjluJ3lm71jbXMxMTExMTExMTExMTExMTExMe+8nzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0aW9uX2l0ZW1cIiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTpcInVybCgvc3RhdGljL2ltYWdlcy9saS5wbmcpXCIsYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixiYWNrZ3JvdW5kUG9zaXRpb25ZOiA5LHRleHRJbmRlbnQ6IDEzfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3t0ZXh0T3ZlcmZsb3c6IFwiZWxsaXBzaXNcIix3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLG92ZXJmbG93OiBcImhpZGRlblwiLHdpZHRoOiAyNjUsZGlzcGxheTogXCJibG9ja1wifX0+5Liq5Lq65Y2a5a6i77yM5oiR5Li65LuA5LmI6KaB55So5bid5Zu9Y21zMTExMTExMTExMTExMTExMTHvvJ88L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGlvbl9pdGVtXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6XCJ1cmwoL3N0YXRpYy9pbWFnZXMvbGkucG5nKVwiLGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsYmFja2dyb3VuZFBvc2l0aW9uWTogOSx0ZXh0SW5kZW50OiAxM319PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7dGV4dE92ZXJmbG93OiBcImVsbGlwc2lzXCIsd2hpdGVTcGFjZTogXCJub3dyYXBcIixvdmVyZmxvdzogXCJoaWRkZW5cIix3aWR0aDogMjY1LGRpc3BsYXk6IFwiYmxvY2tcIn19PuS4quS6uuWNmuWuou+8jOaIkeS4uuS7gOS5iOimgeeUqOW4neWbvWNtczExMTExMTExMTExMTExMTEx77yfPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2l0ZW19IGNsYXNzTmFtZT1cImxlZnRfaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+5Y+L5oOF6ZO+5o6lPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6MTB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRpb25faXRlbVwiPueZvuW6pjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aXRlbX0gY2xhc3NOYW1lPVwibGVmdF9pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj7lhbPms6jmiJE8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzoxMH19PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3t3aWR0aDogXCI4NiVcIixiYWNrZ3JvdW5kOiBcIiNmZmZcIixwYWRkaW5nOiAxOX19IHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2Vyd2VpbWEuanBnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2l0ZW19IGNsYXNzTmFtZT1cImxlZnRfaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+56uZ6ZW/5o6o6I2QPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6MTB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRpb25faXRlbVwiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOlwidXJsKC9zdGF0aWMvaW1hZ2VzL2xpLnBuZylcIixiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLGJhY2tncm91bmRQb3NpdGlvblk6IDksdGV4dEluZGVudDogMTN9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e3RleHRPdmVyZmxvdzogXCJlbGxpcHNpc1wiLHdoaXRlU3BhY2U6IFwibm93cmFwXCIsb3ZlcmZsb3c6IFwiaGlkZGVuXCIsd2lkdGg6IDI2NSxkaXNwbGF5OiBcImJsb2NrXCJ9fT7kuKrkurrljZrlrqLvvIzmiJHkuLrku4DkuYjopoHnlKjluJ3lm71jbXMxMTExMTExMTExMTExMTExMe+8nzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0aW9uX2l0ZW1cIiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTpcInVybCgvc3RhdGljL2ltYWdlcy9saS5wbmcpXCIsYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixiYWNrZ3JvdW5kUG9zaXRpb25ZOiA5LHRleHRJbmRlbnQ6IDEzfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3t0ZXh0T3ZlcmZsb3c6IFwiZWxsaXBzaXNcIix3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLG92ZXJmbG93OiBcImhpZGRlblwiLHdpZHRoOiAyNjUsZGlzcGxheTogXCJibG9ja1wifX0+5Liq5Lq65Y2a5a6i77yM5oiR5Li65LuA5LmI6KaB55So5bid5Zu9Y21zMTExMTExMTExMTExMTExMTHvvJ88L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGlvbl9pdGVtXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6XCJ1cmwoL3N0YXRpYy9pbWFnZXMvbGkucG5nKVwiLGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsYmFja2dyb3VuZFBvc2l0aW9uWTogOSx0ZXh0SW5kZW50OiAxM319PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7dGV4dE92ZXJmbG93OiBcImVsbGlwc2lzXCIsd2hpdGVTcGFjZTogXCJub3dyYXBcIixvdmVyZmxvdzogXCJoaWRkZW5cIix3aWR0aDogMjY1LGRpc3BsYXk6IFwiYmxvY2tcIn19PuS4quS6uuWNmuWuou+8jOaIkeS4uuS7gOS5iOimgeeUqOW4neWbvWNtczExMTExMTExMTExMTExMTEx77yfPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpdGVtfSBjbGFzc05hbWU9XCJsZWZ0X2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPuagh+etvuS6kTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nOjEwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGFnXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOlwiIzAzNjU2NFwifX0+5Liq5Lq65Y2a5a6iPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRhZ1wiIHN0eWxlPXt7YmFja2dyb3VuZDpcIiMzMjk5QkJcIn19PuaXhea4uDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Y2xlYXI6XCJib3RoXCJ9fT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj4gICBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9ICBcbiAgICAgIFxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC50YWd7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICM5OTk7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgcGFkZGluZzogM3B4IDExcHg7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDEwcHggMCAwO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgIH1cbiAgICAgICAgLmxlZnRfaXRlbSAuY2F0aW9uX2l0ZW17XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmxlZnRfaXRlbSAuY2F0aW9uX2l0ZW06aG92ZXJ7XG4gICAgICAgICAgY29sb3I6IzIyMjtcbiAgICAgICAgfVxuICAgICAgICAuc2VhcmNoe1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgLnNlYXJjaCAuaW5wdXRfc3VibWl0IHtcbiAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAwO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgICAgIHJpZ2h0OiA2JTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNlYXJjaCBpbnB1dC5pbnB1dF90ZXh0IHtcbiAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgICB3aWR0aDogNzIlO1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yaWdodF9pdGVtIHAge1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDAgMCAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yaWdodF9pdGVtIGgze1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogI0ZGRiAxcHggMXB4IDFweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZGU0OTQ5O1xuICAgICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yaWdodF9pdGVtIGl7XG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmlnaHRfaXRlbXtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgY29sb3I6ICM3OTdiN2M7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGVmdF9ib3h7XG4gICAgICAgICAgICB3aWR0aDozMDBweDtcbiAgICAgICAgICAgIGZsb2F0OmxlZnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sZWZ0X2l0ZW17XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxlZnRfaXRlbSB1bCBsaXtcbiAgICAgICAgICAgIHdpZHRoOiAzMiU7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxlZnRfaXRlbSB1bCBsaSBpbWd7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGVmdF9pdGVtIGgye1xuICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICBtYXJnaW46MFxuICAgICAgICAgIH1cbiAgICAgICAgICAucmlnaHRfYm94e1xuICAgICAgICAgICAgd2lkdGg6NjgwcHg7XG4gICAgICAgICAgICBmbG9hdDpyaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFib3V0X21lX2l7XG4gICAgICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIGNsZWFyOiBsZWZ0O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PiAgXG4gICAgKVxuICB9XG59XG5cblxuIl19 */\n/*@ sourceURL=/Users/justin/Desktop/private/nextjs/components/left.js */"));
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
//# sourceMappingURL=article.js.5e1aadd72b450f5e4036.hot-update.js.map