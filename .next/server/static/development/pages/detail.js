module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apis/blog.js":
/*!**********************!*\
  !*** ./apis/blog.js ***!
  \**********************/
/*! exports provided: GetBlogList, GetBlogDetail, GetBlogTypes, GetBlogRanking, GetBlogRecommend, GetBlogComments, SubMitComment, ReadNetFile, MakeGood, GetBlogRooms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetBlogList", function() { return GetBlogList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetBlogDetail", function() { return GetBlogDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetBlogTypes", function() { return GetBlogTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetBlogRanking", function() { return GetBlogRanking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetBlogRecommend", function() { return GetBlogRecommend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetBlogComments", function() { return GetBlogComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubMitComment", function() { return SubMitComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadNetFile", function() { return ReadNetFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeGood", function() { return MakeGood; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetBlogRooms", function() { return GetBlogRooms; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/config */ "./utils/config.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/util */ "./utils/util.js");
/* harmony import */ var _proto_resp_pb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../proto/resp_pb */ "./proto/resp_pb.js");
/* harmony import */ var _proto_resp_pb__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_proto_resp_pb__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _proto_blogComment_pb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../proto/blogComment_pb */ "./proto/blogComment_pb.js");
/* harmony import */ var _proto_blogComment_pb__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_proto_blogComment_pb__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _proto_errors_pb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../proto/errors_pb */ "./proto/errors_pb.js");
/* harmony import */ var _proto_errors_pb__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_proto_errors_pb__WEBPACK_IMPORTED_MODULE_7__);








var GetBlogList =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(tp, name) {
    var res, data, message;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_3__["apiHost"], "/v1/client/blog/list?tp=").concat(tp, "&name=").concat(name), {
              responseType: 'blob'
            });

          case 2:
            res = _context.sent;
            _context.next = 5;
            return Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__["default"])(res.data);

          case 5:
            data = _context.sent;
            message = _proto_resp_pb__WEBPACK_IMPORTED_MODULE_5___default.a.blog_list.deserializeBinary(data);
            data = message.toObject();
            return _context.abrupt("return", data);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function GetBlogList(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var GetBlogDetail =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id) {
    var meDetail, medata, meMessage;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_3__["apiHost"], "/v1/client/blog/detail?id=").concat(id), {
              responseType: 'blob'
            });

          case 2:
            meDetail = _context2.sent;
            _context2.next = 5;
            return Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__["default"])(meDetail.data);

          case 5:
            medata = _context2.sent;
            meMessage = _proto_resp_pb__WEBPACK_IMPORTED_MODULE_5___default.a.blog_detail.deserializeBinary(medata);
            return _context2.abrupt("return", meMessage.toObject());

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function GetBlogDetail(_x3) {
    return _ref2.apply(this, arguments);
  };
}();
var GetBlogTypes =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
    var res, data, message;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_3__["apiHost"], "/v1/client/blog/types"), {
              responseType: 'blob'
            });

          case 2:
            res = _context3.sent;
            _context3.next = 5;
            return Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__["default"])(res.data);

          case 5:
            data = _context3.sent;
            message = _proto_resp_pb__WEBPACK_IMPORTED_MODULE_5___default.a.blog_types.deserializeBinary(data);
            return _context3.abrupt("return", message.toObject());

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function GetBlogTypes() {
    return _ref3.apply(this, arguments);
  };
}();
var GetBlogRanking =
/*#__PURE__*/
function () {
  var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
    var limit,
        rankingRes,
        rankingData,
        rankingMessage,
        _args4 = arguments;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            limit = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : 5;
            _context4.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_3__["apiHost"], "/v1/client/blog/ranking?limit=").concat(limit), {
              responseType: 'blob'
            });

          case 3:
            rankingRes = _context4.sent;
            _context4.next = 6;
            return Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__["default"])(rankingRes.data);

          case 6:
            rankingData = _context4.sent;
            rankingMessage = _proto_resp_pb__WEBPACK_IMPORTED_MODULE_5___default.a.blog_list.deserializeBinary(rankingData);
            return _context4.abrupt("return", rankingMessage.toObject());

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function GetBlogRanking() {
    return _ref4.apply(this, arguments);
  };
}();
var GetBlogRecommend =
/*#__PURE__*/
function () {
  var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
    var recommendRes, recommendData, recommendMessage;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_3__["apiHost"], "/v1/client/blog/recommend"), {
              responseType: 'blob'
            });

          case 2:
            recommendRes = _context5.sent;
            _context5.next = 5;
            return Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__["default"])(recommendRes.data);

          case 5:
            recommendData = _context5.sent;
            recommendMessage = _proto_resp_pb__WEBPACK_IMPORTED_MODULE_5___default.a.blog_list.deserializeBinary(recommendData);
            return _context5.abrupt("return", recommendMessage.toObject());

          case 8:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function GetBlogRecommend() {
    return _ref5.apply(this, arguments);
  };
}();
var GetBlogComments =
/*#__PURE__*/
function () {
  var _ref6 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
    var id,
        commentRes,
        commentData,
        commentMessage,
        _args6 = arguments;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : 0;
            _context6.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_3__["apiHost"], "/v1/client/blog/comment/list?blog_id=").concat(id), {
              responseType: 'blob'
            });

          case 3:
            commentRes = _context6.sent;
            _context6.next = 6;
            return Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__["default"])(commentRes.data);

          case 6:
            commentData = _context6.sent;
            commentMessage = _proto_resp_pb__WEBPACK_IMPORTED_MODULE_5___default.a.blog_comments.deserializeBinary(commentData);
            return _context6.abrupt("return", commentMessage.toObject());

          case 9:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function GetBlogComments() {
    return _ref6.apply(this, arguments);
  };
}();
var SubMitComment =
/*#__PURE__*/
function () {
  var _ref7 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(saytext, blogId) {
    var message, bytes, res, data;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            message = new _proto_blogComment_pb__WEBPACK_IMPORTED_MODULE_6___default.a.blog_comment();
            message.setContent(saytext);
            message.setBlogId(blogId);
            bytes = message.serializeBinary();
            _context7.next = 6;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_3__["apiHost"], "/v1/client/blog/comment/submit"), bytes, {
              responseType: 'blob',
              headers: {
                'Content-Type': 'application/octet-stream'
              }
            });

          case 6:
            res = _context7.sent;
            _context7.next = 9;
            return Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__["default"])(res.data);

          case 9:
            data = _context7.sent;
            data = _proto_errors_pb__WEBPACK_IMPORTED_MODULE_7___default.a.resp.deserializeBinary(data);
            return _context7.abrupt("return", data.toObject());

          case 12:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function SubMitComment(_x4, _x5) {
    return _ref7.apply(this, arguments);
  };
}();
var ReadNetFile =
/*#__PURE__*/
function () {
  var _ref8 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(url) {
    var hres, hdata, hmessage;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_3__["apiHost"], "/v1/public/netfile/read?key=").concat(url), {
              responseType: 'blob'
            });

          case 2:
            hres = _context8.sent;
            _context8.next = 5;
            return Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__["default"])(hres.data);

          case 5:
            hdata = _context8.sent;
            hmessage = _proto_resp_pb__WEBPACK_IMPORTED_MODULE_5___default.a.file_content.deserializeBinary(hdata);
            return _context8.abrupt("return", hmessage.toObject());

          case 8:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function ReadNetFile(_x6) {
    return _ref8.apply(this, arguments);
  };
}();
var MakeGood =
/*#__PURE__*/
function () {
  var _ref9 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(blogId) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_3__["apiHost"], "/v1/client/blog/good/make?blog_id=").concat(blogId));

          case 2:
            return _context9.abrupt("return", _context9.sent);

          case 3:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function MakeGood(_x7) {
    return _ref9.apply(this, arguments);
  };
}();
var GetBlogRooms =
/*#__PURE__*/
function () {
  var _ref10 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10() {
    var id,
        res,
        data,
        _args10 = arguments;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            id = _args10.length > 0 && _args10[0] !== undefined ? _args10[0] : 0;
            _context10.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_3__["apiHost"], "/v1/client/blog/room/list"), {
              responseType: 'blob'
            });

          case 3:
            res = _context10.sent;
            _context10.next = 6;
            return Object(_utils_util__WEBPACK_IMPORTED_MODULE_4__["default"])(res.data);

          case 6:
            data = _context10.sent;
            return _context10.abrupt("return", _proto_resp_pb__WEBPACK_IMPORTED_MODULE_5___default.a.blog_rooms.deserializeBinary(data).toObject());

          case 8:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));

  return function GetBlogRooms() {
    return _ref10.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./common/loading.js":
/*!***************************!*\
  !*** ./common/loading.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/justin/Desktop/my/mobile_simple/common/loading.js";


var Loading = function Loading(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    id: "loadingbg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "loader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Loading..."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "circle one",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "circle two",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "circle-five",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "circle three",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "circle-four",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next-server/head */ "next-server/head");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_left__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/left */ "./components/left.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
/* harmony import */ var _common_loading__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/loading */ "./common/loading.js");
/* harmony import */ var _utils_emiter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utils/emiter */ "./utils/emiter.js");









var _jsxFileName = "/Users/justin/Desktop/my/mobile_simple/components/layout.js";










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
      top: 0
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _utils_emiter__WEBPACK_IMPORTED_MODULE_17__["default"].on("top", function (v) {
        _this2.setState({
          top: v
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          children = _this$props.children;
      var top = this.state.top;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2883891685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("title", {
        className: "jsx-2883891685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Simple-", title), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("meta", {
        charSet: "utf-8",
        className: "jsx-2883891685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui, viewport-fit=cover",
        className: "jsx-2883891685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("link", {
        rel: "stylesheet",
        href: "/static/css/editormd.min.css",
        className: "jsx-2883891685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("link", {
        rel: "stylesheet",
        href: "/static/css/global.css",
        className: "jsx-2883891685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("link", {
        rel: "stylesheet",
        href: "/static/css/loading.css",
        className: "jsx-2883891685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("script", {
        src: "/static/js/ispc.js",
        className: "jsx-2883891685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("script", {
        src: "/static/js/reconnecting-websocket.js",
        className: "jsx-2883891685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_nav__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: 't',
        className: "jsx-2883891685" + " " + "shadow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("article", {
        style: {
          width: "100%"
        },
        className: "jsx-2883891685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "rbox",
        className: "jsx-2883891685" + " " + "right_box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, children), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          clear: "both"
        },
        className: "jsx-2883891685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("footer", {
        className: "jsx-2883891685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-2883891685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "\u5907\u6848\u53F7\uFF1A\u4EACICP\u590716020525\u53F7")), top == 1 && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "#",
        className: "jsx-2883891685" + " " + "cd-top cd-is-visible cd-fade-out",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "Top")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "loading",
        className: "jsx-2883891685" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2883891685" + " " + "loader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2883891685" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
        className: "jsx-2883891685" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Loading..."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2883891685" + " " + "rect",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2883891685" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2883891685" + " " + "circle one",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2883891685" + " " + "circle-five",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2883891685" + " " + "circle-four",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "2883891685",
        __self: this
      }, ".cd-top.cd-is-visible.jsx-2883891685{visibility:visible;opacity:1;}.cd-top.jsx-2883891685{display:inline-block;height:40px;width:40px;position:fixed;bottom:40px;right:10px;box-shadow:0 0 10px rgba(0,0,0,0.05);overflow:hidden;text-indent:100%;white-space:nowrap;background:rgba(0,0,0,0.8) url(/static/images/top.png) no-repeat center;visibility:hidden;opacity:0;-webkit-transition:all 0.3s;-moz-transition:all 0.3s;-webkit-transition:all 0.3s;transition:all 0.3s;}footer.jsx-2883891685{width:100%;color:#a5a4a4;text-align:center;padding-bottom:20px;clear:both;text-shadow:#fff 1px 0 2px,#fff 0 1px 2px,#fff -1px 0 2px,#fff 0 -1px 2px;}#starlist.jsx-2883891685 li.jsx-2883891685{float:left;display:block;padding:0 0 0 40px;font-size:16px;}#starlist.jsx-2883891685 li.jsx-2883891685 a.jsx-2883891685{-webkit-text-decoration:none;text-decoration:none;color:#555;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0aW4vRGVza3RvcC9teS9tb2JpbGVfc2ltcGxlL2NvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Fc0IsQUFHb0MsQUFJRSxBQWtCWixBQVFFLEFBTVEsV0FiUCxBQVFFLFFBOUJKLEVBSUUsSUFtQkksQUFRRyxJQTlCdkIsSUFJZSxVQW1CTyxDQWxCSCxBQTBCQSxNQUlOLFNBN0JHLEFBMEJoQixFQUlBLEVBWmEsUUFqQkUsR0FrQmdFLFFBakJuQyxxQ0FDeEIsZ0JBQ0MsYUFnQnJCLElBZnVCLG1CQUN3RCx3RUFDekQsa0JBQ1IsVUFDa0IsNEJBQ0gseUJBQ0wsZ0RBQ3hCIiwiZmlsZSI6Ii9Vc2Vycy9qdXN0aW4vRGVza3RvcC9teS9tb2JpbGVfc2ltcGxlL2NvbXBvbmVudHMvbGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7QnV0dG9uLElucHV0fSBmcm9tICdhbnRkJ1xuaW1wb3J0IExlZnQgZnJvbSAnLi4vY29tcG9uZW50cy9sZWZ0J1xuaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL25hdidcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL2NvbW1vbi9sb2FkaW5nJ1xuaW1wb3J0IEV2ZW50IGZyb20gJy4uL3V0aWxzL2VtaXRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHJlcSxxdWVyeSxqc29uUGFnZVJlcyB9KSB7XG4gICAgY29uc3QgdXNlckFnZW50ID0gcmVxID8gcmVxLmhlYWRlcnNbJ3VzZXItYWdlbnQnXSA6IG5hdmlnYXRvci51c2VyQWdlbnRcbiAgICByZXR1cm4geyB1c2VyQWdlbnQscXVlcnksanNvblBhZ2VSZXMgfVxuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgdG9wOjBcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgRXZlbnQub24oXCJ0b3BcIiwodik9PntcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3RvcDp2fSlcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHt0aXRsZSxjaGlsZHJlbn0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qge3RvcH0gPSB0aGlzLnN0YXRlXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT5TaW1wbGUteyB0aXRsZSB9PC90aXRsZT5cbiAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBtYXhpbXVtLXNjYWxlPTEsIG1pbmltdW0tc2NhbGU9MSwgdXNlci1zY2FsYWJsZT1ubywgbWluaW1hbC11aSwgdmlld3BvcnQtZml0PWNvdmVyXCIgLz4gICAgICBcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0YXRpYy9jc3MvZWRpdG9ybWQubWluLmNzc1wiIC8+XG4gICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdGF0aWMvY3NzL2dsb2JhbC5jc3NcIiAvPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3RhdGljL2Nzcy9sb2FkaW5nLmNzc1wiIC8+XG4gICAgICAgICAgICA8c2NyaXB0IHNyYz1cIi9zdGF0aWMvanMvaXNwYy5qc1wiPjwvc2NyaXB0PlxuICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCIvc3RhdGljL2pzL3JlY29ubmVjdGluZy13ZWJzb2NrZXQuanNcIj48L3NjcmlwdD5cbiAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgPE5hdiAvPlxuICAgICAgICAgIDxkaXYgaWQ9eyd0J30gY2xhc3NOYW1lPXtgc2hhZG93YH0+XG4gICAgICAgICAgICA8YXJ0aWNsZSBzdHlsZT17e3dpZHRoOlwiMTAwJVwifX0+XG4gICAgICAgICAgICAgICAgey8qIDxMZWZ0IC8+ICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRfYm94XCIgaWQ9XCJyYm94XCI+XG4gICAgICAgICAgICAgICAgICB7IGNoaWxkcmVuIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Y2xlYXI6XCJib3RoXCJ9fT48L2Rpdj5cbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICAgIDxwPuWkh+ahiOWPt++8muS6rElDUOWkhzE2MDIwNTI15Y+3PC9wPlxuICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICAgICB7dG9wID09IDEgJiYgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJjZC10b3AgY2QtaXMtdmlzaWJsZSBjZC1mYWRlLW91dFwiPlRvcDwvYT59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qIGxvYWRpbmcgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBpZD1cImxvYWRpbmdcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+TG9hZGluZy4uLjwvaDM+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY3RcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZSBvbmVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlLWZpdmVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlLWZvdXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuY2QtdG9wLmNkLWlzLXZpc2libGUge1xuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jZC10b3Age1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogNDBweDtcbiAgICAgICAgICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCkgdXJsKC9zdGF0aWMvaW1hZ2VzL3RvcC5wbmcpIG5vLXJlcGVhdCBjZW50ZXI7XG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9vdGVye1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgY29sb3I6ICNhNWE0YTQ7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogI2ZmZiAxcHggMCAycHgsICNmZmYgMCAxcHggMnB4LCAjZmZmIC0xcHggMCAycHgsICNmZmYgMCAtMXB4IDJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNzdGFybGlzdCBsaSB7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAwIDAgNDBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjc3Rhcmxpc3QgbGkgYXtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICBjb2xvcjogIzU1NTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yaWdodF9ib3h7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/justin/Desktop/my/mobile_simple/components/layout.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req, query, jsonPageRes, userAgent;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req, query = _ref.query, jsonPageRes = _ref.jsonPageRes;
                userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
                return _context.abrupt("return", {
                  userAgent: userAgent,
                  query: query,
                  jsonPageRes: jsonPageRes
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);



/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/util */ "./utils/util.js");
/* harmony import */ var _proto_blog_pb__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../proto/blog_pb */ "./proto/blog_pb.js");
/* harmony import */ var _proto_blog_pb__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_proto_blog_pb__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/config */ "./utils/config.js");
/* harmony import */ var _utils_emiter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/emiter */ "./utils/emiter.js");









var _jsxFileName = "/Users/justin/Desktop/my/mobile_simple/components/left.js";









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
                  document.getElementById("loading").style.display = "none";
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
          lineNumber: 93
        },
        __self: this
      }, orderIndex.map(function (item) {
        var _React$createElement;

        switch (item) {
          case 0:
            // 关于
            return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              key: item,
              className: "jsx-1005062761" + " " + "left_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 99
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 100
              },
              __self: this
            }, "\u5173\u4E8E"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              style: {
                padding: 12
              },
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 101
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
              className: "jsx-1005062761" + " " + "about_me_i",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 102
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
                lineNumber: 103
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
                lineNumber: 105
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("b", {
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 106
              },
              __self: this
            }, "\u80E1\u661F"), "\uFF0C93\u5E74\u51FA\u751F\uFF0Cweb\u524D\u7AEF\u5DE5\u7A0B\u5E08 && \u670D\u52A1\u7AEF\u5DE5\u7A0B\u5E08\uFF0C\u6CA1\u4EC0\u4E48\u7279\u6B8A\u7231\u597D\uFF0C\u653E\u5047\u4E5F\u662F\u5B85\u5728\u5BB6\u91CC\uFF0C\u65E0\u804A\u7684\u65F6\u5019\u5199\u5199\u4EE3\u7801\uFF0C\u7814\u7A76\u7814\u7A76\u6280\u672F\u65B9\u9762\u7684\u4E1C\u897F\uFF0C\u5BF9\u8FD9\u79CD\u4E1C\u897F\u7B97\u4E00\u79CD\u70ED\u7231\u5427\uFF0C\u4F46\u662F\u6211\u8BA4\u4E3A\u5BF9\u4E8E\u6211\u6765\u8BF4\uFF0C \u53EA\u662F\u9009\u62E9\u4E86\u8FD9\u4E00\u6761\u8DEF\uFF0C\u9009\u62E9\u4E86\u5C31\u8981\u70ED\u7231\uFF0C\u5E72\u4E0A\u4E00\u884C\u5C31\u5F97\u7231\u4E0A\u4E00\u884C\uFF0C\u5982\u679C\u5F53\u521D\u7684\u9009\u62E9\u4E0D\u662F\u4E92\u8054\u7F51\uFF0C\u6211\u4E5F\u4F1A\u5F88\u70ED\u7231\u3002")));

          case 1:
            return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              key: item,
              className: "jsx-1005062761" + " " + "left_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 112
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 113
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
                lineNumber: 114
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 115
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
              src: "/static/images/b02.jpg",
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 115
              },
              __self: this
            })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
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
                lineNumber: 124
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
              lineNumber: 125
            }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_React$createElement, "__self", this), _React$createElement)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
              onClick: function onClick() {
                location.href = "/article?name=".concat(name);
              },
              className: "jsx-1005062761" + " " + "input_submit",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 128
              },
              __self: this
            }, "\u641C\u7D22"));

          case 3:
            return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              key: item,
              className: "jsx-1005062761" + " " + "left_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 133
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 134
              },
              __self: this
            }, "\u5206\u7C7B"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              style: {
                padding: 10
              },
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 135
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
                  lineNumber: 138
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
                lineNumber: 146
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 147
              },
              __self: this
            }, "\u70B9\u51FB\u6392\u884C"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              style: {
                padding: 10
              },
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 148
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
                className: "jsx-1005062761",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 154
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
                lineNumber: 161
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 162
              },
              __self: this
            }, "\u53CB\u60C5\u94FE\u63A5"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              style: {
                padding: 10
              },
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 163
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              className: "jsx-1005062761" + " " + "cation_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 164
              },
              __self: this
            }, "\u767E\u5EA6")));

          case 6:
            return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              key: item,
              className: "jsx-1005062761" + " " + "left_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 168
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 169
              },
              __self: this
            }, "\u5173\u6CE8\u6211"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              style: {
                padding: 10
              },
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 170
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
                lineNumber: 171
              },
              __self: this
            })));

          case 7:
            return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              key: item,
              className: "jsx-1005062761" + " " + "left_item",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 175
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 176
              },
              __self: this
            }, "\u7AD9\u957F\u63A8\u8350"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              style: {
                padding: 10
              },
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 177
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
                  lineNumber: 180
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
                  lineNumber: 183
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
                lineNumber: 190
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 191
              },
              __self: this
            }, "\u6807\u7B7E\u4E91"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              style: {
                padding: 10
              },
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 192
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
                lineNumber: 193
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
                lineNumber: 194
              },
              __self: this
            }, "docker"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
              style: {
                clear: "both"
              },
              className: "jsx-1005062761",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 195
              },
              __self: this
            })));
        }
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "1005062761",
        __self: this
      }, ".tag.jsx-1005062761{line-height:24px;height:24px;display:block;background:#999;float:left;padding:3px 11px;margin:10px 10px 0 0;border-radius:8px;-moz-transition:all 0.5s;-webkit-transition:all 0.5s;-o-transition:all 0.5s;-webkit-transition:all 0.5s;transition:all 0.5s;color:#FFF;-webkit-text-decoration:none;text-decoration:none;}.left_item.jsx-1005062761 .cation_item.jsx-1005062761{margin-bottom:10px;margin-left:10px;cursor:pointer;}.left_item.jsx-1005062761 .cation_item.jsx-1005062761:hover{color:#222;}.search.jsx-1005062761{border:1px solid #000;background:#000;border-radius:0 5px 5px 0;position:relative;}.search.jsx-1005062761 .input_submit.jsx-1005062761{border:0;background:0;color:#fff;outline:none;position:absolute;top:10px;right:8%;cursor:pointer;}.search.jsx-1005062761 input.input_text.jsx-1005062761{border:0;line-height:36px;height:36px;width:72%;padding-left:10px;outline:none;}.right_item.jsx-1005062761 p.jsx-1005062761{margin:20px 0 0 0;line-height:22px;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;display:-webkit-box;-webkit-line-clamp:2;}.right_item.jsx-1005062761 h3.jsx-1005062761{font-size:16px;line-height:25px;text-shadow:#FFF 1px 1px 1px;color:#de4949;margin:0;}.right_item.jsx-1005062761 i.jsx-1005062761{width:150px;display:block;max-height:100px;overflow:hidden;float:right;margin-left:20px;}.right_item.jsx-1005062761{background:rgba(255,255,255,0.8);padding:15px;overflow:hidden;color:#797b7c;margin-bottom:20px;}.left_box.jsx-1005062761{width:300px;float:left;}.left_item.jsx-1005062761{background:rgba(255,255,255,0.5);margin-bottom:20px;overflow:hidden;}.left_item.jsx-1005062761 ul.jsx-1005062761 li.jsx-1005062761{width:32%;overflow:hidden;float:left;height:80px;margin-bottom:2px;margin-right:2px;}.left_item.jsx-1005062761 ul.jsx-1005062761 li.jsx-1005062761 img.jsx-1005062761{width:100%;height:100%;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;-webkit-transition:all 0.5s;transition:all 0.5s;display:block;}.left_item.jsx-1005062761 h2.jsx-1005062761{color:#333;font-size:14px;line-height:30px;padding-left:20px;background:#fff;margin:0;}.right_box.jsx-1005062761{width:680px;float:right;}.about_me_i.jsx-1005062761{width:120px;float:left;clear:left;margin-right:10px;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0aW4vRGVza3RvcC9teS9tb2JpbGVfc2ltcGxlL2NvbXBvbmVudHMvbGVmdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5TW9CLEFBRzRCLEFBZ0JFLEFBS1QsQUFHWSxBQU1ULEFBVUEsQUFRTyxBQVNILEFBT0gsQUFRcUIsQUFPdEIsQUFJc0IsQUFLdkIsQUFRQyxBQVFBLEFBUUEsQUFJQyxTQXJGRyxBQVVJLENBZ0RILENBbkVwQixBQTJFZ0IsQUFRRyxDQXhDRCxBQWVKLEFBaUNDLEFBSUEsR0EzRE0sRUF6RFAsQ0FnRE8sQ0FoQ0YsR0FRRCxBQU9ELENBaURmLEFBaUI4QixBQW9CakIsQ0FKYixFQXhFZ0IsQUF3QkcsQUF3Qk4sQUFnQk0sR0F4R0wsR0F5RGlCLENBMUJkLEFBd0NGLEFBV00sQ0FtQ0QsQ0FyRUYsQ0FoQ0gsQ0F5RUQsQ0FqRVksQUFpQlosS0F4Q0UsQUFnRUUsQUF3Q0UsR0F6RUUsQUF3Q0osRUE5QkksQ0FnREYsRUF6RXRCLEFBZ0MyQixBQWdERSxDQWRULEFBbUNBLE9BcEhQLEFBZ0VHLEVBUkUsQUFnREUsQ0FqQ0YsRUFoREUsQUFRTCxFQVVJLENBZ0RFLENBUG5CLEFBbUNBLEVBcEhpQixDQWdFRSxFQWpDTixDQWdCaUIsQ0FTcEIsQ0FlVyxBQXdCQyxDQVV2QixFQWhFQyxHQWxCRixBQVNxQixFQXlCbkIsQUFnQ0EsRUFnQkEsQ0F4R3FCLENBZ0VyQixPQU9BLEVBdkNBLEtBZXNCLE1BOUNKLGNBK0NLLEVBK0NSLEVBN0ZVLFlBOEZ6QixLQS9DQSxRQTlDNEIsNEJBQ0wsdUJBQ0gsZ0RBQ1QsV0FDVSxrREFDdkIiLCJmaWxlIjoiL1VzZXJzL2p1c3Rpbi9EZXNrdG9wL215L21vYmlsZV9zaW1wbGUvY29tcG9uZW50cy9sZWZ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCByZWFkU3RyZWFtIGZyb20gJy4uL3V0aWxzL3V0aWwnXG5pbXBvcnQgcHJvdG9idWYgZnJvbSBcIi4uL3Byb3RvL2Jsb2dfcGJcIjtcbmltcG9ydCB7YXBpSG9zdH0gZnJvbSAnLi4vdXRpbHMvY29uZmlnJztcbmltcG9ydCBFdmVudCBmcm9tICcuLi91dGlscy9lbWl0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyByZXEscXVlcnksanNvblBhZ2VSZXMgfSkge1xuICAgIGNvbnN0IHVzZXJBZ2VudCA9IHJlcSA/IHJlcS5oZWFkZXJzWyd1c2VyLWFnZW50J10gOiBuYXZpZ2F0b3IudXNlckFnZW50XG4gICAgcmV0dXJuIHsgdXNlckFnZW50LHF1ZXJ5LGpzb25QYWdlUmVzIH1cbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIHBhdGg6XCJcIixcbiAgICBvcmRlckluZGV4OltdLFxuICAgIHRwczpbXSxcbiAgICByYW5raW5nTGlzdDpbXSxcbiAgICBuYW1lOlwiXCIsXG4gICAgcmVjb21tZW5kczpbXSxcbiAgICBsZWZ0U3R5bGU6e31cbiAgfVxuXG4gIHJlZ2lzdGVyS2V5VXAoKXtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImtleWJvYXJkXCIpLm9ua2V5dXAgPSAoZXZlbnQpID0+IHtcbiAgICAgIHZhciBlID0gZXZlbnQgfHwgd2luZG93LmV2ZW50O1xuICAgICAgaWYgKGUgJiYgZS5rZXlDb2RlID09IDEzKSB7IC8v5Zue6L2m6ZSu55qE6ZSu5YC85Li6MTNcbiAgICAgICAgbG9jYXRpb24uaHJlZiA9IGAvYXJ0aWNsZT9uYW1lPSR7dGhpcy5zdGF0ZS5uYW1lfWBcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICBjb25zb2xlLmxvZyhcInN0YXJ0XCIpXG4gICAgbGV0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHthcGlIb3N0fS92MS9ibG9nL3R5cGVzYCx7XG4gICAgICByZXNwb25zZVR5cGU6ICdibG9iJ1xuICAgIH0pXG4gICAgbGV0IGRhdGEgPSBhd2FpdCByZWFkU3RyZWFtKHJlcy5kYXRhKTtcbiAgICBsZXQgbWVzc2FnZSA9IHByb3RvYnVmLnRwcy5kZXNlcmlhbGl6ZUJpbmFyeShkYXRhKTtcbiAgICBkYXRhID0gbWVzc2FnZS50b09iamVjdCgpO1xuICAgIGxldCByYW5raW5nUmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2FwaUhvc3R9L3YxL2Jsb2cvcmFua2luZz9saW1pdD01YCx7XG4gICAgICByZXNwb25zZVR5cGU6ICdibG9iJ1xuICAgIH0pXG4gICAgbGV0IHJhbmtpbmdEYXRhID0gYXdhaXQgcmVhZFN0cmVhbShyYW5raW5nUmVzLmRhdGEpO1xuICAgIGxldCByYW5raW5nTWVzc2FnZSA9IHByb3RvYnVmLmJsb2dMaXN0UmVzLmRlc2VyaWFsaXplQmluYXJ5KHJhbmtpbmdEYXRhKTtcbiAgICByYW5raW5nRGF0YSA9IHJhbmtpbmdNZXNzYWdlLnRvT2JqZWN0KCk7XG5cbiAgICBsZXQgcmVjb21tZW5kUmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2FwaUhvc3R9L3YxL2Jsb2cvcmVjb21tZW5kYCx7XG4gICAgICByZXNwb25zZVR5cGU6ICdibG9iJ1xuICAgIH0pXG4gICAgbGV0IHJlY29tbWVuZERhdGEgPSBhd2FpdCByZWFkU3RyZWFtKHJlY29tbWVuZFJlcy5kYXRhKTtcbiAgICBsZXQgcmVjb21tZW5kTWVzc2FnZSA9IHByb3RvYnVmLmJsb2dMaXN0UmVzLmRlc2VyaWFsaXplQmluYXJ5KHJlY29tbWVuZERhdGEpO1xuICAgIHJlY29tbWVuZERhdGEgPSByZWNvbW1lbmRNZXNzYWdlLnRvT2JqZWN0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dHBzOmRhdGEubGlzdExpc3QscmFua2luZ0xpc3Q6cmFua2luZ0RhdGEubGlzdExpc3QscmVjb21tZW5kczpyZWNvbW1lbmREYXRhLmxpc3RMaXN0fSk7XG4gICAgaWYobG9jYXRpb24ucGF0aG5hbWUgPT0gXCIvYXJ0aWNsZVwiIHx8IGxvY2F0aW9uLnBhdGhuYW1lID09IFwiL2RldGFpbFwiKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe29yZGVySW5kZXg6WzIsMyw3LDQsOCw2XX0sdGhpcy5yZWdpc3RlcktleVVwKTtcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe29yZGVySW5kZXg6WzAsMiwzLDQsNSw2XX0sdGhpcy5yZWdpc3RlcktleVVwKTtcbiAgICB9XG4gICAgRXZlbnQub24oXCJsZWZ0LWZpeFwiLCgpPT57XG4gICAgICBsZXQgcmlnaHRIZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicmlnaHRfYm94XCIpWzBdLmNsaWVudEhlaWdodDtcbiAgICAgIGxldCBsZWZ0SGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWZ0X2JveFwiKS5jbGllbnRIZWlnaHQ7XG4gICAgICBpZihsZWZ0SGVpZ2h0IDwgcmlnaHRIZWlnaHQpe1xuICAgICAgICAvLyB2YXIgc2Nyb2xsVG9wID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xlZnRTdHlsZTp7XG4gICAgICAgICAgcG9zaXRpb246XCJmaXhlZFwiLFxuICAgICAgICAgIHRvcDoyMFxuICAgICAgICB9fSlcbiAgICAgIH1cbiAgICB9KVxuICAgIEV2ZW50Lm9uKFwibGVmdC1zdGF0aWNcIiwoaCk9PntcbiAgICAgIGxldCByaWdodEhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJyaWdodF9ib3hcIilbMF0uY2xpZW50SGVpZ2h0O1xuICAgICAgbGV0IGxlZnRIZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRfYm94XCIpLmNsaWVudEhlaWdodDtcbiAgICAgIGlmKGxlZnRIZWlnaHQgPCByaWdodEhlaWdodCl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xlZnRTdHlsZTp7XG4gICAgICAgICAgcG9zaXRpb246XCJzdGF0aWNcIixcbiAgICAgICAgICBtYXJnaW5Ub3A6aFxuICAgICAgICB9fSlcbiAgICAgIH1cbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKFwiZW5kXCIpXG4gICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZ3M6e1wibWVcIjpmYWxzZX19KVxuICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidFwiKS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwic2hhZG93bm9uZVwiKVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkaW5nXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9LDUwMClcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtwYXRoLG9yZGVySW5kZXgsdHBzLG5hbWUscmFua2luZ0xpc3QscmVjb21tZW5kcyxsZWZ0U3R5bGV9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdF9ib3hcIiBpZD1cImxlZnRfYm94XCIgc3R5bGU9e2xlZnRTdHlsZX0+XG4gICAgICAgICAge1xuICAgICAgICAgICAgb3JkZXJJbmRleC5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgIHN3aXRjaChpdGVtKXtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAvLyDlhbPkuo5cbiAgICAgICAgICAgICAgICAgIHJldHVybiAgPGRpdiBrZXk9e2l0ZW19IGNsYXNzTmFtZT1cImxlZnRfaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+5YWz5LqOPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6IDEyfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYWJvdXRfbWVfaVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltYWdlcy9tZS5qcGVnXCIgc3R5bGU9e3t3aWR0aDoxMjAsaGVpZ2h0OjEyMH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7bGluZUhlaWdodDogXCIyMnB4XCIsXCJmb250U2l6ZVwiOiAxNCxtYXJnaW5Ub3A6IC02fX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Yj7og6HmmJ88L2I+77yMOTPlubTlh7rnlJ/vvIx3ZWLliY3nq6/lt6XnqIvluIggJiYg5pyN5Yqh56uv5bel56iL5biI77yM5rKh5LuA5LmI54m55q6K54ix5aW977yM5pS+5YGH5Lmf5piv5a6F5Zyo5a626YeM77yM5peg6IGK55qE5pe25YCZ5YaZ5YaZ5Luj56CB77yM56CU56m256CU56m25oqA5pyv5pa56Z2i55qE5Lic6KW/77yM5a+56L+Z56eN5Lic6KW/566X5LiA56eN54Ot54ix5ZCn77yM5L2G5piv5oiR6K6k5Li65a+55LqO5oiR5p2l6K+077yMXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5Y+q5piv6YCJ5oup5LqG6L+Z5LiA5p2h6Lev77yM6YCJ5oup5LqG5bCx6KaB54Ot54ix77yM5bmy5LiK5LiA6KGM5bCx5b6X54ix5LiK5LiA6KGM77yM5aaC5p6c5b2T5Yid55qE6YCJ5oup5LiN5piv5LqS6IGU572R77yM5oiR5Lmf5Lya5b6I54Ot54ix44CCXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2l0ZW19IGNsYXNzTmFtZT1cImxlZnRfaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGgyPuebuOWGjDwvaDI+XG4gICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3twYWRkaW5nOiAxMCxvdmVyZmxvdzogXCJoaWRkZW5cIixsaXN0U3R5bGU6XCJub25lXCIsbWFyZ2luOjB9fT5cbiAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBzcmM9XCIvc3RhdGljL2ltYWdlcy9iMDIuanBnXCIgLz48L2xpPlxuICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2IwMi5qcGdcIiAvPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvYjAyLmpwZ1wiIC8+PC9saT5cbiAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBzcmM9XCIvc3RhdGljL2ltYWdlcy9iMDIuanBnXCIgLz48L2xpPlxuICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2IwMi5qcGdcIiAvPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvYjAyLmpwZ1wiIC8+PC9saT4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2l0ZW19IGNsYXNzTmFtZT1cInNlYXJjaFwiIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAyMH19PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwia2V5Ym9hcmRcIiBpZD1cImtleWJvYXJkXCIgb25DaGFuZ2U9eyhlKT0+e1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe25hbWU6ZS50YXJnZXQudmFsdWV9KTtcbiAgICAgICAgICAgICAgICAgICAgfX0gY2xhc3NOYW1lPVwiaW5wdXRfdGV4dFwiIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl5YWz6ZSu5a2X6K+NXCIgc3R5bGU9e3tjb2xvcjogXCIjMDAwXCJ9fSAgdHlwZT1cInRleHRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImlucHV0X3N1Ym1pdFwiIG9uQ2xpY2s9eygpPT57XG4gICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9IGAvYXJ0aWNsZT9uYW1lPSR7bmFtZX1gXG4gICAgICAgICAgICAgICAgICAgIH19PuaQnOe0ojwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aXRlbX0gY2xhc3NOYW1lPVwibGVmdF9pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj7liIbnsbs8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzoxMH19PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgdHBzLm1hcCgoaXRlbSxrKT0+KFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2t9IG9uQ2xpY2s9eygpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSBgL2FydGljbGU/dHA9JHtpdGVtLmlkfWBcbiAgICAgICAgICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT1cImNhdGlvbl9pdGVtXCI+e2l0ZW0ubGFibGV977yIe2l0ZW0uYmxvZ051bX3vvIk8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2l0ZW19IGNsYXNzTmFtZT1cImxlZnRfaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+54K55Ye75o6S6KGMPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6MTB9fT5cbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICByYW5raW5nTGlzdC5tYXAoKGl0ZW0sayk9PihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRpb25faXRlbVwiIG9uQ2xpY2s9eygpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9IGAvZGV0YWlsP2lkPSR7aXRlbS5pZH1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19IGtleT17a30gc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6XCJ1cmwoL3N0YXRpYy9pbWFnZXMvbGkucG5nKVwiLGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsYmFja2dyb3VuZFBvc2l0aW9uWTogOSx0ZXh0SW5kZW50OiAxM319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7dGV4dE92ZXJmbG93OiBcImVsbGlwc2lzXCIsd2hpdGVTcGFjZTogXCJub3dyYXBcIixvdmVyZmxvdzogXCJoaWRkZW5cIix3aWR0aDogMjY1LGRpc3BsYXk6IFwiYmxvY2tcIn19PntpdGVtLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2l0ZW19IGNsYXNzTmFtZT1cImxlZnRfaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+5Y+L5oOF6ZO+5o6lPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6MTB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRpb25faXRlbVwiPueZvuW6pjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aXRlbX0gY2xhc3NOYW1lPVwibGVmdF9pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj7lhbPms6jmiJE8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzoxMH19PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3t3aWR0aDogXCI4NiVcIixiYWNrZ3JvdW5kOiBcIiNmZmZcIixwYWRkaW5nOiAxOX19IHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2Vyd2VpbWEuanBnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2l0ZW19IGNsYXNzTmFtZT1cImxlZnRfaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+56uZ6ZW/5o6o6I2QPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6MTB9fT5cbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWNvbW1lbmRzLm1hcCgoaXRlbSxrKT0+KFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGlvbl9pdGVtXCIga2V5PXtrfSBvbkNsaWNrPXsoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSBgL2RldGFpbD9pZD0ke2l0ZW0uaWR9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBzdHlsZT17e2JhY2tncm91bmRJbWFnZTpcInVybCgvc3RhdGljL2ltYWdlcy9saS5wbmcpXCIsYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixiYWNrZ3JvdW5kUG9zaXRpb25ZOiA5LHRleHRJbmRlbnQ6IDEzfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3t0ZXh0T3ZlcmZsb3c6IFwiZWxsaXBzaXNcIix3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLG92ZXJmbG93OiBcImhpZGRlblwiLHdpZHRoOiAyNjUsZGlzcGxheTogXCJibG9ja1wifX0+e2l0ZW0ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpdGVtfSBjbGFzc05hbWU9XCJsZWZ0X2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPuagh+etvuS6kTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nOjEwfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YC9hcnRpY2xlP25hbWU9Z29sYW5nYH0gY2xhc3NOYW1lPVwidGFnXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOlwiIzAzNjU2NFwifX0+Z29sYW5nPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AvYXJ0aWNsZT9uYW1lPWRvY2tlcmB9IGNsYXNzTmFtZT1cInRhZ1wiIHN0eWxlPXt7YmFja2dyb3VuZDpcIiMzMjk5QkJcIn19PmRvY2tlcjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Y2xlYXI6XCJib3RoXCJ9fT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj4gICBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9ICBcbiAgICAgIFxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC50YWd7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICM5OTk7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgcGFkZGluZzogM3B4IDExcHg7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDEwcHggMCAwO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5sZWZ0X2l0ZW0gLmNhdGlvbl9pdGVte1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIC5sZWZ0X2l0ZW0gLmNhdGlvbl9pdGVtOmhvdmVye1xuICAgICAgICAgIGNvbG9yOiMyMjI7XG4gICAgICAgIH1cbiAgICAgICAgLnNlYXJjaHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICAgIC5zZWFyY2ggLmlucHV0X3N1Ym1pdCB7XG4gICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogMDtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgICByaWdodDogOCU7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNlYXJjaCBpbnB1dC5pbnB1dF90ZXh0IHtcbiAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgICB3aWR0aDogNzIlO1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yaWdodF9pdGVtIHAge1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDAgMCAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yaWdodF9pdGVtIGgze1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogI0ZGRiAxcHggMXB4IDFweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZGU0OTQ5O1xuICAgICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yaWdodF9pdGVtIGl7XG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmlnaHRfaXRlbXtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgY29sb3I6ICM3OTdiN2M7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGVmdF9ib3h7XG4gICAgICAgICAgICB3aWR0aDozMDBweDtcbiAgICAgICAgICAgIGZsb2F0OmxlZnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sZWZ0X2l0ZW17XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxlZnRfaXRlbSB1bCBsaXtcbiAgICAgICAgICAgIHdpZHRoOiAzMiU7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxlZnRfaXRlbSB1bCBsaSBpbWd7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGVmdF9pdGVtIGgye1xuICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICBtYXJnaW46MFxuICAgICAgICAgIH1cbiAgICAgICAgICAucmlnaHRfYm94e1xuICAgICAgICAgICAgd2lkdGg6NjgwcHg7XG4gICAgICAgICAgICBmbG9hdDpyaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFib3V0X21lX2l7XG4gICAgICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIGNsZWFyOiBsZWZ0O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PiAgXG4gICAgKVxuICB9XG59XG5cblxuIl19 */\n/*@ sourceURL=/Users/justin/Desktop/my/mobile_simple/components/left.js */"));
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



/***/ }),

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout */ "./components/layout.js");
/* harmony import */ var _utils_blog_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/blog_types */ "./utils/blog_types.js");
/* harmony import */ var _utils_emiter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/emiter */ "./utils/emiter.js");









var _jsxFileName = "/Users/justin/Desktop/my/mobile_simple/components/nav.js";



 // import banner from '../images/banner'


var timer = null;

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
      headerTop: 0,
      opennav: false,
      opensearch: false
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(_default, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this2 = this;

        var p, t;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                p = 0, t = 0;

                document.onscroll = function () {
                  var p = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

                  if (t <= p && p > 0) {
                    //下滚
                    _utils_emiter__WEBPACK_IMPORTED_MODULE_13__["default"].emit("top", 1);

                    if (p > 60) {
                      _this2.setState({
                        headerTop: -61
                      });
                    }

                    _this2.setState({
                      opennav: false,
                      searchTxt: "",
                      opensearch: false
                    });
                  } else {
                    //上滚  
                    _utils_emiter__WEBPACK_IMPORTED_MODULE_13__["default"].emit("top", 2);

                    _this2.setState({
                      headerTop: 0,
                      opennav: false,
                      searchTxt: "",
                      opensearch: false
                    });
                  }

                  setTimeout(function () {
                    t = p;
                  }, 0);
                };

                this.setState({
                  path: location.pathname
                });

              case 3:
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
    key: "onSearch",
    value: function onSearch(event) {
      if (this.state.searchTxt == "") {
        return;
      }

      var e = event || window.event;

      if (e && e.keyCode == 13) {
        //回车键的键值为13
        location.href = "/article?name=".concat(this.state.searchTxt);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          path = _this$state.path,
          headerTop = _this$state.headerTop,
          opennav = _this$state.opennav,
          opensearch = _this$state.opensearch,
          searchTxt = _this$state.searchTxt;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-1515128354",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          width: "100%",
          height: 61,
          transition: "0.3s",
          WebkitTransition: "0.3s",
          backgroundColor: "rgba(255,255,255,0.9)",
          position: "fixed",
          borderBottom: "1px solid #ddd",
          boxShadow: "0 1px 1px rgba(0,0,0,.04)",
          zIndex: 999,
          top: headerTop,
          left: 0
        },
        className: "jsx-1515128354",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          width: "100%",
          margin: "0 auto",
          height: "100%",
          lineHeight: "60px",
          fontSize: 22,
          position: "relative"
        },
        className: "jsx-1515128354",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          width: "100%",
          textAlign: "center",
          position: "absolute",
          left: 0,
          top: 0
        },
        className: "jsx-1515128354",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Simple"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
        id: "mnavh",
        onClick: function onClick() {
          var open = !opennav;

          _this3.setState({
            opennav: open
          });
        },
        className: "jsx-1515128354" + " " + ((opennav ? "open" : "") || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-1515128354" + " " + "navicon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
        id: "starlist",
        style: {
          background: "rgba(0,0,0,.5)",
          width: "100%",
          display: opennav ? "block" : "none"
        },
        className: "jsx-1515128354",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-1515128354",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/",
        style: path == "/" ? {
          color: "#f65a8a"
        } : {},
        className: "jsx-1515128354",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "\u9996\u9875")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-1515128354",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/article",
        style: path == "/article" || path == "/detail" ? {
          color: "#f65a8a"
        } : {},
        className: "jsx-1515128354",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "\u6587\u7AE0")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-1515128354",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/message",
        style: path == "/message" ? {
          color: "#f65a8a"
        } : {},
        className: "jsx-1515128354",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "\u7559\u8A00")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-1515128354",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/chat",
        style: path == "/chat" || path == "/chatroom" ? {
          color: "#f65a8a"
        } : {},
        className: "jsx-1515128354",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "\u804A\u5929")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-1515128354",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/me",
        style: path == "/me" ? {
          color: "#f65a8a"
        } : {},
        className: "jsx-1515128354",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "\u5173\u4E8E"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-1515128354" + " " + ((opensearch ? "searchbox search_open" : "searchbox") || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "search_bar",
        style: {
          width: opensearch ? "100%" : 0
        },
        className: "jsx-1515128354" + " " + "search_bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        placeholder: "\u60F3\u641C\u70B9\u4EC0\u4E48\u5462..",
        onKeyUp: this.onSearch.bind(this),
        onChange: function onChange(e) {
          _this3.setState({
            searchTxt: e.target.value
          });
        },
        type: "text",
        className: "jsx-1515128354" + " " + "input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        onClick: function onClick() {
          var o = !opensearch;

          if (!o) {
            _this3.setState({
              searchTxt: ""
            });
          }

          _this3.setState({
            opensearch: o
          });
        },
        className: "jsx-1515128354" + " " + "search_ico",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-1515128354",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      })))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          height: 75
        },
        className: "jsx-1515128354",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "1515128354",
        __self: this
      }, ".search_open.jsx-1515128354 .search_bar.jsx-1515128354 .input.jsx-1515128354{width:300px;}.search_open.jsx-1515128354 .search_bar.jsx-1515128354 .input.jsx-1515128354{border-bottom:#222 1px solid;background:#fff;}.search_bar.jsx-1515128354 .input.jsx-1515128354{position:absolute;top:16px;right:0;border:none;outline:none;height:30px;line-height:30px;z-index:10;font-size:16px;color:#333;background:none;}.searchbox.jsx-1515128354{position:absolute;right:0;top:1px;}.search_open.jsx-1515128354{width:300px;display:inline-block;}.search_bar.jsx-1515128354{position:relative;width:0%;min-width:60px;height:60px;float:right;overflow:hidden;-webkit-transition:width 0.3s;-moz-transition:width 0.3s;-webkit-transition:width 0.3s;transition:width 0.3s;-webkit-backface-visibility:hidden;}.search_ico.jsx-1515128354,.search_btn.jsx-1515128354{width:60px;height:60px;display:block;position:absolute;right:0;top:0;padding:0;margin:0;line-height:60px;cursor:pointer;text-align:center;z-index:99;}.search_ico.jsx-1515128354 span.jsx-1515128354{position:relative;top:20px;}.search_ico.jsx-1515128354 span.jsx-1515128354:before{top:0;left:0;}.search_ico.jsx-1515128354 span.jsx-1515128354:before{content:' ';position:absolute;width:12px;height:12px;border:1px solid #666;border-radius:10px;}.search_ico.jsx-1515128354 span.jsx-1515128354:after{content:' ';position:absolute;width:12px;height:4px;background:#666;border-radius:5px 0 0 5px;-webkit-transform:rotate(225deg);-moz-transform:rotate(225deg);-ms-transform:rotate(225deg);-o-transform:rotate(225deg);-webkit-transform:rotate(225deg);-ms-transform:rotate(225deg);transform:rotate(225deg);}.search_ico.jsx-1515128354 span.jsx-1515128354:after{right:-22px;top:14px;}.open.jsx-1515128354 .navicon.jsx-1515128354:before{margin-top:0;-webkit-transform:rotate(45deg);-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.open.jsx-1515128354 .navicon.jsx-1515128354:before,.open.jsx-1515128354 .navicon.jsx-1515128354:after{content:'';display:block;width:30px;height:5px;position:absolute;background:#000;}.open.jsx-1515128354 .navicon.jsx-1515128354{background:none;}.open.jsx-1515128354 .navicon.jsx-1515128354:after{margin-top:0;-webkit-transform:rotate(-45deg);-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}#mnavh.jsx-1515128354{position:absolute;display:block;top:8px;left:10px;}.navicon.jsx-1515128354{display:block;position:relative;width:30px;height:5px;background-color:#000;margin-top:20px;}.navicon.jsx-1515128354:before{margin-top:-10px;}.navicon.jsx-1515128354:before,.navicon.jsx-1515128354:after{content:'';display:block;width:30px;height:5px;position:absolute;background:#000;-webkit-transition-property:margin,-webkit-transform;-webkit-transition-property:margin,-webkit-transform;-webkit-transition-property:margin,-webkit-transform;transition-property:margin,-webkit-transform;-webkit-transition-property:margin,-webkit-transform;-webkit-transition-property:margin,transform;transition-property:margin,transform;-webkit-transition-property:margin,-webkit-transform,-webkit-transform;-webkit-transition-property:margin,transform,-webkit-transform;transition-property:margin,transform,-webkit-transform;-webkit-transition-duration:300ms;-webkit-transition-duration:300ms;transition-duration:300ms;}.navicon.jsx-1515128354:after{margin-top:10px;}.navicon.jsx-1515128354:before,.navicon.jsx-1515128354:after{content:'';display:block;width:30px;height:5px;position:absolute;background:#000;-webkit-transition-property:margin,-webkit-transform;-webkit-transition-property:margin,-webkit-transform;-webkit-transition-property:margin,-webkit-transform;transition-property:margin,-webkit-transform;-webkit-transition-property:margin,-webkit-transform;-webkit-transition-property:margin,transform;transition-property:margin,transform;-webkit-transition-property:margin,-webkit-transform,-webkit-transform;-webkit-transition-property:margin,transform,-webkit-transform;transition-property:margin,transform,-webkit-transform;-webkit-transition-duration:300ms;-webkit-transition-duration:300ms;transition-duration:300ms;}#starlist.jsx-1515128354{-webkit-transition:0.3s;transition:0.3s;overflow:hidden;position:absolute;top:60px;}#starlist.jsx-1515128354 li.jsx-1515128354{display:block;width:50%;clear:both;border-top:#eaeaea 1px solid;padding:0;background:#FFF;font-size:16px;text-align:center;}#starlist.jsx-1515128354 li.jsx-1515128354 a.jsx-1515128354{-webkit-text-decoration:none;text-decoration:none;color:#555;}#starlist.jsx-1515128354 li.jsx-1515128354:last-child{padding-bottom:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0aW4vRGVza3RvcC9teS9tb2JpbGVfc2ltcGxlL2NvbXBvbmVudHMvbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Gb0IsQUFHMkIsQUFHaUIsQUFJWCxBQWFBLEFBS04sQUFJTSxBQVlQLEFBY08sQUFJWixBQUlNLEFBUUEsQUFhQSxBQUlDLEFBS0YsQUFRSyxBQUdILEFBS0csQUFNSixBQVFLLEFBR04sQUFjSyxBQUdMLEFBY0csQUFNRixBQVVPLEFBSUMsTUFySGIsS0FsQkssQUFvREUsQUFpQ0EsQUFpQkEsQ0EvSWxCLEFBeUJ5QixBQXNDSCxBQVFBLEFBYVQsQ0F4QmIsQUE0Qm9DLEFBZ0JDLENBV2pCLEFBZ0RSLEVBOURaLEFBdUNBLENBakJBLENBcEhhLEFBYUQsQUFTQyxBQTBCQSxBQXNERyxFQW9FaEIsQ0E1RkEsRUEzQ2tCLENBMEhMLENBdEVFLEFBaUNBLEFBaUJBLENBM0hILENBYkEsQUFzQk8sQUEwQm5CLEVBckRvQixDQTZETCxBQVFBLEVBc0NMLEFBTUcsQ0ExRmIsQ0FKQSxDQWJnQixBQTRKZSxDQXRFaEIsQUFpQ0EsQUFpQkEsQ0F0R08sR0FvRVYsQUE4Q00sQ0E1RkYsQUFRRCxDQTFDQyxDQXNGSCxFQWpIYixBQXFGNEIsQ0FnQkMsQ0EvRlosQUFzRkssQUFpQ0EsQUFpQkEsR0FsQ3RCLEFBNkRhLEVBbkdPLENBUk0sQ0FsQ1YsQUFzRlEsQ0ExRVosQ0FrSFEsSUFuSkosQ0FtS2hCLEVBaklVLENBeUhFLENBckVRLEFBaUNBLEFBaUJBLENBbEhBLEVBMENVLENBN0JoQixHQWxDTyxFQW1KVixBQVFPLENBcEdLLENBb0RMLEdBeEVMLEVBbURiLEFBaUMwRCxBQWlCQSxDQWxIeEIsQ0E4SGxDLEtBaEhxQixDQW5DTixDQTJKRSxFQWhEakIsRUFwREEsQUFRcUMsTUE5RGxCLEtBbUNBLEFBd0hDLE9BdElXLEdBcEJoQixLQW1DTyxHQXdIdEIsR0ExSm9CLENBNkRjLEVBYWxDLElBZ0JBLENBMEJrRCxBQWlCQSxJQWxHbkMsQ0FmVyxHQW5CMUIsT0FtQ0EsUUEwQmlDLDZCQUNELEtBMUNPLHVCQTJDVixZQTFDN0IsMkRBK0YwQyxBQWlCQSxnQkFyRTFDLHVIQXFENkQsQUFpQkEsNkxBaEJ2QixBQWlCQSxrQ0FoQlIsQUFpQkEsNERBaEI5QixBQWlCQSIsImZpbGUiOiIvVXNlcnMvanVzdGluL0Rlc2t0b3AvbXkvbW9iaWxlX3NpbXBsZS9jb21wb25lbnRzL25hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi9sYXlvdXQnXG5pbXBvcnQgdHBzIGZyb20gJy4uL3V0aWxzL2Jsb2dfdHlwZXMnXG4vLyBpbXBvcnQgYmFubmVyIGZyb20gJy4uL2ltYWdlcy9iYW5uZXInXG5pbXBvcnQgRXZlbnQgZnJvbSAnLi4vdXRpbHMvZW1pdGVyJztcbnZhciB0aW1lciA9IG51bGw7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyByZXEscXVlcnksanNvblBhZ2VSZXMgfSkge1xuICAgIGNvbnN0IHVzZXJBZ2VudCA9IHJlcSA/IHJlcS5oZWFkZXJzWyd1c2VyLWFnZW50J10gOiBuYXZpZ2F0b3IudXNlckFnZW50XG4gICAgcmV0dXJuIHsgdXNlckFnZW50LHF1ZXJ5LGpzb25QYWdlUmVzIH1cbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgICAgcGF0aDpcIlwiLFxuICAgICAgaGVhZGVyVG9wOjAsXG4gICAgICBvcGVubmF2OmZhbHNlLFxuICAgICAgb3BlbnNlYXJjaDpmYWxzZVxuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgIHZhciBwPTAsdD0wOyAgXG4gICAgICBkb2N1bWVudC5vbnNjcm9sbCA9ICgpID0+IHtcbiAgICAgICAgdmFyIHAgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDsgICAgICBcbiAgICAgICAgaWYodDw9cCAmJiBwID4gMCl7Ly/kuIvmu5pcbiAgICAgICAgICBFdmVudC5lbWl0KFwidG9wXCIsMSlcbiAgICAgICAgICBpZihwID4gNjApe1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aGVhZGVyVG9wOi02MX0pXG4gICAgICAgICAgfSBcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtvcGVubmF2OmZhbHNlLHNlYXJjaFR4dDpcIlwiLG9wZW5zZWFyY2g6ZmFsc2V9KVxuICAgICAgICB9ZWxzZXsvL+S4iua7miAgXG4gICAgICAgICAgRXZlbnQuZW1pdChcInRvcFwiLDIpIFxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2hlYWRlclRvcDowLG9wZW5uYXY6ZmFsc2Usc2VhcmNoVHh0OlwiXCIsb3BlbnNlYXJjaDpmYWxzZX0pXG4gICAgICAgIH0gIFxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dCA9IHA7fSwwKTsgICAgICAgICAgIFxuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7cGF0aDpsb2NhdGlvbi5wYXRobmFtZX0pXG4gIH1cblxuICBvblNlYXJjaChldmVudCl7XG4gICAgaWYodGhpcy5zdGF0ZS5zZWFyY2hUeHQgPT0gXCJcIil7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdmFyIGUgPSBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgaWYgKGUgJiYgZS5rZXlDb2RlID09IDEzKSB7IC8v5Zue6L2m6ZSu55qE6ZSu5YC85Li6MTNcbiAgICAgIGxvY2F0aW9uLmhyZWYgPSBgL2FydGljbGU/bmFtZT0ke3RoaXMuc3RhdGUuc2VhcmNoVHh0fWBcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3BhdGgsaGVhZGVyVG9wLG9wZW5uYXYsb3BlbnNlYXJjaCxzZWFyY2hUeHR9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIsaGVpZ2h0OjYxLHRyYW5zaXRpb246XCIwLjNzXCIsV2Via2l0VHJhbnNpdGlvbjpcIjAuM3NcIixiYWNrZ3JvdW5kQ29sb3I6XCJyZ2JhKDI1NSwyNTUsMjU1LDAuOSlcIixwb3NpdGlvbjpcImZpeGVkXCIsYm9yZGVyQm90dG9tOlwiMXB4IHNvbGlkICNkZGRcIixib3hTaGFkb3c6XCIwIDFweCAxcHggcmdiYSgwLDAsMCwuMDQpXCIsekluZGV4Ojk5OSx0b3A6aGVhZGVyVG9wLGxlZnQ6MH19PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIixtYXJnaW46XCIwIGF1dG9cIixoZWlnaHQ6XCIxMDAlXCIsbGluZUhlaWdodDpcIjYwcHhcIixmb250U2l6ZToyMixwb3NpdGlvbjpcInJlbGF0aXZlXCJ9fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIix0ZXh0QWxpZ246XCJjZW50ZXJcIixwb3NpdGlvbjpcImFic29sdXRlXCIsbGVmdDowLHRvcDowfX0+U2ltcGxlPC9kaXY+XG4gICAgICAgICAgICA8aDIgaWQ9XCJtbmF2aFwiIG9uQ2xpY2s9eygpPT57XG4gICAgICAgICAgICAgIGxldCBvcGVuID0gIW9wZW5uYXZcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b3Blbm5hdjpvcGVufSlcbiAgICAgICAgICAgIH19IGNsYXNzTmFtZT17b3Blbm5hdiA/IFwib3BlblwiOlwiXCJ9PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZpY29uXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9oMj4gICAgICAgIFxuICAgICAgICAgICAgPHVsIGlkPVwic3Rhcmxpc3RcIiBzdHlsZT17e2JhY2tncm91bmQ6IFwicmdiYSgwLDAsMCwuNSlcIix3aWR0aDogXCIxMDAlXCIsZGlzcGxheTpvcGVubmF2ID8gXCJibG9ja1wiOlwibm9uZVwifX0+XG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL1wiIHN0eWxlPXtwYXRoID09IFwiL1wiID8ge2NvbG9yOlwiI2Y2NWE4YVwifTp7fX0+6aaW6aG1PC9hPjwvbGk+XG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2FydGljbGVcIiBzdHlsZT17cGF0aCA9PSBcIi9hcnRpY2xlXCIgfHwgcGF0aCA9PSBcIi9kZXRhaWxcIiA/IHtjb2xvcjpcIiNmNjVhOGFcIn06e319PuaWh+eroDwvYT48L2xpPiBcbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvbWVzc2FnZVwiIHN0eWxlPXtwYXRoID09IFwiL21lc3NhZ2VcIiA/IHtjb2xvcjpcIiNmNjVhOGFcIn06e319PueVmeiogDwvYT48L2xpPlxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9jaGF0XCIgc3R5bGU9e3BhdGggPT0gXCIvY2hhdFwiIHx8IHBhdGggPT0gXCIvY2hhdHJvb21cIiA/IHtjb2xvcjpcIiNmNjVhOGFcIn06e319PuiBiuWkqTwvYT48L2xpPiBcbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvbWVcIiBzdHlsZT17cGF0aCA9PSBcIi9tZVwiID8ge2NvbG9yOlwiI2Y2NWE4YVwifTp7fX0+5YWz5LqOPC9hPjwvbGk+IFxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtvcGVuc2VhcmNoID8gXCJzZWFyY2hib3ggc2VhcmNoX29wZW5cIjpcInNlYXJjaGJveFwifT5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cInNlYXJjaF9iYXJcIiBjbGFzc05hbWU9XCJzZWFyY2hfYmFyXCIgc3R5bGU9e3t3aWR0aDpvcGVuc2VhcmNoID8gXCIxMDAlXCI6MH19PlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dFwiIHBsYWNlaG9sZGVyPVwi5oOz5pCc54K55LuA5LmI5ZGiLi5cIiBvbktleVVwPXt0aGlzLm9uU2VhcmNoLmJpbmQodGhpcyl9IG9uQ2hhbmdlPXsoZSk9PntcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlYXJjaFR4dDplLnRhcmdldC52YWx1ZX0pXG4gICAgICAgICAgICAgICAgfX0gdHlwZT1cInRleHRcIiAvPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNlYXJjaF9pY29cIiBvbkNsaWNrPXsoKT0+e1xuICAgICAgICAgICAgICAgICAgbGV0IG8gPSAhb3BlbnNlYXJjaFxuICAgICAgICAgICAgICAgICAgaWYoIW8pe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWFyY2hUeHQ6XCJcIn0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtvcGVuc2VhcmNoOm99KVxuICAgICAgICAgICAgICAgIH19PjxzcGFuPjwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6NzV9fT48L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5zZWFyY2hfb3BlbiAuc2VhcmNoX2JhciAuaW5wdXQge1xuICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zZWFyY2hfb3BlbiAuc2VhcmNoX2JhciAuaW5wdXQge1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAjMjIyIDFweCBzb2xpZDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNlYXJjaF9iYXIgLmlucHV0IHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB0b3A6IDE2cHg7XG4gICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VhcmNoYm94IHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgdG9wOiAxcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zZWFyY2hfb3BlbiB7XG4gICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VhcmNoX2JhciB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgd2lkdGg6IDAlO1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDYwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIDAuM3M7XG4gICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogd2lkdGggMC4zcztcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcztcbiAgICAgICAgICAgICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zZWFyY2hfaWNvLCAuc2VhcmNoX2J0biB7XG4gICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNlYXJjaF9pY28gc3BhbiB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VhcmNoX2ljbyBzcGFuOmJlZm9yZSB7XG4gICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNlYXJjaF9pY28gc3BhbjpiZWZvcmUge1xuICAgICAgICAgICAgICBjb250ZW50OiAnICc7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMTJweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzY2NjtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNlYXJjaF9pY28gc3BhbjphZnRlciB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICcgJztcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM2NjY7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XG4gICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcbiAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XG4gICAgICAgICAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zZWFyY2hfaWNvIHNwYW46YWZ0ZXIge1xuICAgICAgICAgICAgICByaWdodDogLTIycHg7XG4gICAgICAgICAgICAgIHRvcDogMTRweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm9wZW4gLm5hdmljb246YmVmb3JlIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm9wZW4gLm5hdmljb246YmVmb3JlLCAub3BlbiAubmF2aWNvbjphZnRlciB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5vcGVuIC5uYXZpY29uIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm9wZW4gLm5hdmljb246YWZ0ZXIge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAgICAgfVxuICAgICAgICAgICNtbmF2aHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgdG9wOiA4cHg7XG4gICAgICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2aWNvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdmljb246YmVmb3JlIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXZpY29uOmJlZm9yZSwgLm5hdmljb246YWZ0ZXIge1xuICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IG1hcmdpbiwgLXdlYmtpdC10cmFuc2Zvcm07XG4gICAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IG1hcmdpbiwgLXdlYmtpdC10cmFuc2Zvcm07XG4gICAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IG1hcmdpbiwgdHJhbnNmb3JtO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBtYXJnaW4sIHRyYW5zZm9ybSwgLXdlYmtpdC10cmFuc2Zvcm07XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2aWNvbjphZnRlciB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXZpY29uOmJlZm9yZSwgLm5hdmljb246YWZ0ZXIge1xuICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IG1hcmdpbiwgLXdlYmtpdC10cmFuc2Zvcm07XG4gICAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IG1hcmdpbiwgLXdlYmtpdC10cmFuc2Zvcm07XG4gICAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IG1hcmdpbiwgdHJhbnNmb3JtO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBtYXJnaW4sIHRyYW5zZm9ybSwgLXdlYmtpdC10cmFuc2Zvcm07XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjc3Rhcmxpc3R7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgI3N0YXJsaXN0IGxpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogI2VhZWFlYSAxcHggc29saWQ7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgI3N0YXJsaXN0IGxpIGF7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogIzU1NTtcbiAgICAgICAgICB9XG4gICAgICAgICAgI3N0YXJsaXN0IGxpOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PiAgXG4gICAgKVxuICB9XG59XG5cblxuIl19 */\n/*@ sourceURL=/Users/justin/Desktop/my/mobile_simple/components/nav.js */"));
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



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "core-js/library/fn/reflect/construct");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/construct.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/construct.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Reflect$construct = __webpack_require__(/*! ../core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
  if (_Reflect$construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_Reflect$construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = _Reflect$construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__(/*! react-is */ "react-is");
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = TYPE_STATICS[targetComponent['$$typeof']] || REACT_STATICS;
        var sourceStatics = TYPE_STATICS[sourceComponent['$$typeof']] || REACT_STATICS;

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "./node_modules/next/router.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatUrl) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatUrl(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: href && (0, _typeof2.default)(href) === 'object' ? utils_1.formatWithValidation(href) : href,
        as: asHref && (0, _typeof2.default)(asHref) === 'object' ? utils_1.formatWithValidation(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
        props.href = router_1.Router._rewriteUrlForNextExport(props.href);
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/construct */ "./node_modules/@babel/runtime-corejs2/helpers/construct.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* global window */

var router_1 = __importDefault(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

var SingletonRouter = {
  router: null,
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (typeof window !== 'undefined') {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the SingletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(SingletonRouter, 'events', {
  get: function get() {
    return router_1.default.events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(SingletonRouter, field, {
    get: function get() {
      throwIfNoRouter();
      return SingletonRouter.router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  SingletonRouter[field] = function () {
    var _SingletonRouter$rout;

    throwIfNoRouter();
    return (_SingletonRouter$rout = SingletonRouter.router)[field].apply(_SingletonRouter$rout, arguments);
  };
});
routerEvents.forEach(function (event) {
  SingletonRouter.ready(function () {
    router_1.default.events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));

      if (SingletonRouter[eventField]) {
        try {
          SingletonRouter[eventField].apply(SingletonRouter, arguments);
        } catch (err) {
          console.error("Error when running the Router event: ".concat(eventField));
          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});

function throwIfNoRouter() {
  if (!SingletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
} // Export the SingletonRouter and this is the public API.


exports.default = SingletonRouter; // Reexport the withRoute HOC

var with_router_1 = __webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js");

exports.withRouter = with_router_1.default; // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.

exports.createRouter = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  SingletonRouter.router = (0, _construct2.default)(router_1.default, args);
  SingletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  SingletonRouter.readyCallbacks = [];
  return SingletonRouter.router;
}; // Export the actual Router class, which is usually used inside the server


exports.Router = router_1.default; // This function is used to create the `withRouter` router instance

function makePublicRouterInstance(router) {
  var instance = {};

  for (var _i = 0; _i < urlPropertyFields.length; _i++) {
    var property = urlPropertyFields[_i];

    if ((0, _typeof2.default)(router[property]) === 'object') {
      instance[property] = (0, _assign.default)({}, router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = router_1.default.events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get: function get() {
        return router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return router[field].apply(router, arguments);
    };
  });
  return instance;
}

exports.makePublicRouterInstance = makePublicRouterInstance;

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var hoist_non_react_statics_1 = __importDefault(__webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function withRouter(ComposedComponent) {
  var displayName = utils_1.getDisplayName(ComposedComponent);

  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react_1$Component) {
    (0, _inherits2.default)(WithRouteWrapper, _react_1$Component);

    function WithRouteWrapper() {
      (0, _classCallCheck2.default)(this, WithRouteWrapper);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithRouteWrapper).apply(this, arguments));
    }

    (0, _createClass2.default)(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return react_1.default.createElement(ComposedComponent, (0, _assign.default)({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(react_1.Component);

  WithRouteWrapper.contextTypes = {
    router: prop_types_1.default.object
  };
  WithRouteWrapper.displayName = "withRouter(".concat(displayName, ")");
  return hoist_non_react_statics_1.default(WithRouteWrapper, ComposedComponent);
}

exports.default = withRouter;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/router */ "./node_modules/next/dist/client/router.js")


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _utils_blog_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/blog_types */ "./utils/blog_types.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/config */ "./utils/config.js");
/* harmony import */ var _apis_blog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../apis/blog */ "./apis/blog.js");









var _jsxFileName = "/Users/justin/Desktop/my/mobile_simple/pages/detail.js";








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
      detailData: {
        "nextArticle": {},
        "currentArticle": {},
        "prevArticle": {}
      },
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
        var id, commentRes;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = this.props.query.id;
                _context.next = 3;
                return _apis_blog__WEBPACK_IMPORTED_MODULE_15__["GetBlogComments"](id);

              case 3:
                commentRes = _context.sent;
                this.setState({
                  commentsList: commentRes.blogCommentListList,
                  commentTotal: commentRes.total
                });

              case 5:
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
        var id, res, hres;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = this.props.query.id;
                _context2.next = 3;
                return _apis_blog__WEBPACK_IMPORTED_MODULE_15__["GetBlogDetail"](id);

              case 3:
                res = _context2.sent;
                _context2.next = 6;
                return _apis_blog__WEBPACK_IMPORTED_MODULE_15__["ReadNetFile"](res.currentArticle.htmlTxtUrl);

              case 6:
                hres = _context2.sent;
                _context2.next = 9;
                return this.getComments();

              case 9:
                this.setState({
                  blogDtail: hres.txt,
                  detailData: res
                });
                setTimeout(function () {
                  document.getElementById("t").setAttribute("class", "shadownone");
                  document.getElementById("loading").style.display = "none";
                }, 500);

              case 11:
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
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(event) {
        var e, id, saytext, res;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                e = event || window.event;

                if (!(e && e.keyCode == 13)) {
                  _context3.next = 14;
                  break;
                }

                //回车键的键值为13
                id = this.props.query.id;
                saytext = this.state.saytext;
                _context3.next = 6;
                return _apis_blog__WEBPACK_IMPORTED_MODULE_15__["SubMitComment"](saytext, id);

              case 6:
                res = _context3.sent;

                if (!(res.code != 0)) {
                  _context3.next = 11;
                  break;
                }

                alert(res.msg);
                _context3.next = 13;
                break;

              case 11:
                _context3.next = 13;
                return this.getComments();

              case 13:
                this.setState({
                  saytext: ""
                });

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function subMitComment(_x) {
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
        var detailData, id;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                detailData = this.state.detailData;
                id = this.props.query.id;
                _apis_blog__WEBPACK_IMPORTED_MODULE_15__["MakeGood"](id);
                detailData.currentArticle.goodNum++;
                this.setState({
                  detailData: detailData
                });

              case 5:
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
          saytext = _this$state.saytext,
          commentTotal = _this$state.commentTotal;
      var _detailData$currentAr = detailData.currentArticle,
          currentArticle = _detailData$currentAr === void 0 ? {} : _detailData$currentAr,
          _detailData$nextArtic = detailData.nextArticle,
          nextArticle = _detailData$nextArtic === void 0 ? {} : _detailData$nextArtic,
          _detailData$prevArtic = detailData.prevArticle,
          prevArticle = _detailData$prevArtic === void 0 ? {} : _detailData$prevArtic;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: currentArticle.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          background: "#fff",
          padding: "0 12px"
        },
        className: "jsx-1676129087",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
        className: "jsx-1676129087" + " " + "news_title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, currentArticle.name), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-1676129087" + " " + "bloginfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
        className: "jsx-1676129087",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-1676129087" + " " + "author",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-1676129087" + " " + "lmname",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, Object(_utils_blog_types__WEBPACK_IMPORTED_MODULE_12__["getTpValue"])(currentArticle.type)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-1676129087" + " " + "timer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, moment__WEBPACK_IMPORTED_MODULE_13___default()(currentArticle.createTime).format("YYYY-MM-DD")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-1676129087" + " " + "view",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, currentArticle.view, " \u4EBA\u5DF2\u9605\u8BFB"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          clear: 'both'
        },
        className: "jsx-1676129087",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-1676129087" + " " + "news_about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", {
        className: "jsx-1676129087",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "\u7B80\u4ECB"), " ", currentArticle.preface), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: blogDtail
        },
        previewcontainer: "true",
        style: {
          width: "auto",
          padding: 0
        },
        className: "jsx-1676129087" + " " + "markdown-body editormd-preview-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          padding: "20px"
        },
        className: "jsx-1676129087" + " " + "share",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        onClick: this.makeGood.bind(this),
        className: "jsx-1676129087" + " " + "diggit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        className: "jsx-1676129087",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "\u5F88\u8D5E\u54E6\uFF01"), "(", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("b", {
        className: "jsx-1676129087",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, currentArticle.goodNum), ")")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-1676129087" + " " + "nextinfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, prevArticle.id ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-1676129087",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "\u4E0A\u4E00\u7BC7\uFF1A", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/detail?id=".concat(detailData.prevArticle.id),
        className: "jsx-1676129087",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, detailData.prevArticle.name)) : react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-1676129087",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "\u4E0A\u4E00\u7BC7\uFF1A", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/article",
        className: "jsx-1676129087",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "\u56DE\u5230\u5217\u8868")), nextArticle.id ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-1676129087",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "\u4E0B\u4E00\u7BC7\uFF1A", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/detail?id=".concat(detailData.nextArticle.id),
        className: "jsx-1676129087",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, detailData.nextArticle.name)) : react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-1676129087",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "\u4E0B\u4E00\u7BC7\uFF1A", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/article",
        className: "jsx-1676129087",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "\u56DE\u5230\u5217\u8868"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "news_pl",
        className: "jsx-1676129087" + " " + "news_pl",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
        className: "jsx-1676129087",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "\u6587\u7AE0\u8BC4\u8BBA"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-1676129087" + " " + "gbko",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, commentsList.map(function (item, k) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          key: k,
          className: "jsx-1676129087" + " " + "fb",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
          style: {
            background: "url(".concat(_utils_config__WEBPACK_IMPORTED_MODULE_14__["avatars"][item.id % _utils_config__WEBPACK_IMPORTED_MODULE_14__["avatars"].length], ") no-repeat top 14px left 10px")
          },
          className: "jsx-1676129087",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          style: {
            color: "#000"
          },
          className: "jsx-1676129087",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          __self: this
        }, item.name), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "jsx-1676129087" + " " + "fbtime",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "jsx-1676129087",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        }, moment__WEBPACK_IMPORTED_MODULE_13___default()(item.createTime).format("YYYY-MM-DD"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "jsx-1676129087" + " " + "fbinfo",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }, item.content)));
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "plpost",
        className: "jsx-1676129087",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        style: commentsList.length == 0 ? {
          marginTop: 8
        } : {},
        className: "jsx-1676129087" + " " + "saying",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-1676129087",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:void(0)",
        style: {
          textDecoration: "none",
          color: "#de1513"
        },
        className: "jsx-1676129087",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
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
        onKeyUp: this.subMitComment.bind(this),
        className: "jsx-1676129087",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "1676129087",
        __self: this
      }, ".nextinfo.jsx-1676129087 a.jsx-1676129087{-webkit-text-decoration:none;text-decoration:none;color:#555;}.nextinfo.jsx-1676129087 a.jsx-1676129087:hover{-webkit-text-decoration:underline;text-decoration:underline;color:#222;}.yzm.jsx-1676129087{margin:10px 10px 10px 0;}#plpost.jsx-1676129087 input[type=\"submit\"].jsx-1676129087{display:block;background:#303030;color:#fff;border:0;line-height:30px;padding:0 20px;border-radius:5px;float:right;margin-bottom:20px;margin-top:13px;margin-right:1%;}#saytext.jsx-1676129087{width:99%;outline:none;resize:none;border:solid 1px #ccc;margin-bottom:20px;}.saying.jsx-1676129087 span.jsx-1676129087{float:right;}.saying.jsx-1676129087{line-height:30px;color:#a9a6a6;margin-bottom:8px;}.news_pl.jsx-1676129087 h2.jsx-1676129087{border-bottom:#000 2px solid;line-height:40px;font-size:14px;padding-left:10px;color:#000;}.fbtime.jsx-1676129087{float:right;color:#999;font-size:12px;width:66px;overflow:hidden;white-space:nowrap;}.fbtime.jsx-1676129087 span.jsx-1676129087{float:right;color:#999;font-size:12px;width:67px;overflow:hidden;white-space:nowrap;}p.fbtime.jsx-1676129087{color:#000;}p.fbinfo.jsx-1676129087{margin:10px 0;word-wrap:break-word;}.fb.jsx-1676129087 ul.jsx-1676129087{margin:10px 10px;padding:10px 10px 10px 70px;border-bottom:#ececec 1px solid;background-size:47px 47px;}.news_pl.jsx-1676129087{margin:10px 0 20px 0;width:100%;overflow:hidden;}.nextinfo.jsx-1676129087{line-height:24px;width:100%;overflow:hidden;margin:20px 0;}.nextinfo.jsx-1676129087>p.jsx-1676129087{padding:4px 10px;border-radius:5px;}.diggit.jsx-1676129087{width:160px;margin:auto;background:#E2523A;color:#fff;box-shadow:1px 2px 6px 0px rgba(0,0,0,.2);border-radius:3px;line-height:40px;text-align:center;cursor:pointer;outline:none;display:block;}.news_about.jsx-1676129087{color:#888888;border:1px solid #F3F3F3;padding:10px;margin:20px auto 15px auto;line-height:23px;background:none repeat 0 0 #F6F6F6;}.bloginfo.jsx-1676129087{width:100%;overflow:hidden;}.news_title.jsx-1676129087{font-size:24px;font-weight:normal;padding:20px 0;color:#333;margin:0;}.bloginfo.jsx-1676129087 li.jsx-1676129087{float:left;margin-right:20px;list-style:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0aW4vRGVza3RvcC9teS9tb2JpbGVfc2ltcGxlL3BhZ2VzL2RldGFpbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnSXNCLEFBR2tDLEFBSUssQUFJQSxBQUdaLEFBYUYsQUFPSSxBQUdDLEFBS1ksQUFPakIsQUFRQSxBQVFELEFBR0csQUFJRyxBQU1JLEFBS0osQUFNQSxBQUlMLEFBYU0sQUFRTCxBQUlNLEFBT0osVUFqR0EsQ0FzQ2hCLEFBaURtQixBQVdJLENBM0Z4QixBQWVhLEFBUUEsQUFvQ0MsRUEvRU8sQUFzREUsQUFzQ1EsQ0FZTixFQWpGVCxBQW1DYyxBQVdqQixBQU1PLElBWFAsRUFsREcsQUFzQkMsQUFRQSxDQS9DakIsQUFtRnFCLEdBcUJuQixDQS9CZ0IsQ0ExQ0MsQUFvRkcsRUF4RkYsQ0F5Q0YsQ0FoRUwsQ0F3R1EsQ0ExRkssQUF3Q3pCLEFBcUJBLEdBdkNZLEFBUUEsQ0FnRE0sSUFaTixDQS9FRixBQXFFSyxDQVprQixBQXNEaEMsQ0FwRmUsRUFxQ2hCLENBekNBLEFBYWlCLEFBUUEsQUE0REQsQ0FySEosRUF5R29CLENBM0ZkLENBK0V5QixHQWxFckIsQ0F3RHRCLEVBL0VXLEFBa0hFLENBckhkLEFBd0NvQixJQVNDLEFBUUEsSUE2RG5CLENBeEdlLENBVmpCLEtBdUJBLENBMkM0QixFQTdCZixBQWdFVSxLQXZEdEIsQUFRQSxDQTNDbUIsS0EyQm5CLE1BbURtQixBQWFxQixPQTFGM0IsQUF1RGIsV0F1QmtCLENBN0VFLGdCQThFRCxBQVlsQixHQXpGZ0IsZUE4RUQsQ0E3RUMsY0E4RUgsRUE3RWYsV0E4RWdCLGNBQ2YiLCJmaWxlIjoiL1VzZXJzL2p1c3Rpbi9EZXNrdG9wL215L21vYmlsZV9zaW1wbGUvcGFnZXMvZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCB7Z2V0VHBWYWx1ZX0gZnJvbSAnLi4vdXRpbHMvYmxvZ190eXBlcydcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuaW1wb3J0IHthdmF0YXJzfSBmcm9tICcuLi91dGlscy9jb25maWcnO1xuaW1wb3J0ICogYXMgYXBpIGZyb20gXCIuLi9hcGlzL2Jsb2dcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxLHF1ZXJ5LGpzb25QYWdlUmVzIH0pIHtcbiAgICBjb25zdCB1c2VyQWdlbnQgPSByZXEgPyByZXEuaGVhZGVyc1sndXNlci1hZ2VudCddIDogbmF2aWdhdG9yLnVzZXJBZ2VudFxuICAgIHJldHVybiB7IHVzZXJBZ2VudCxxdWVyeSxqc29uUGFnZVJlcyB9XG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICAgIGJsb2dEdGFpbDpcIlwiLFxuICAgICAgZGV0YWlsRGF0YTp7XG4gICAgICAgIFwibmV4dEFydGljbGVcIjp7fSxcbiAgICAgICAgXCJjdXJyZW50QXJ0aWNsZVwiOnt9LFxuICAgICAgICBcInByZXZBcnRpY2xlXCI6e31cbiAgICAgIH0sXG4gICAgICBjb21tZW50c0xpc3Q6W10sXG4gICAgICBjb21tZW50VG90YWw6MCxcbiAgICAgIHNheXRleHQ6XCJcIixcbiAgICAgIHN1Ym1pdERpc2I6ZmFsc2UsXG4gICAgICBzdWJtaXRUeHQ6XCLmj5DkuqRcIlxuICB9XG5cbiAgYXN5bmMgZ2V0Q29tbWVudHMoKXtcbiAgICBjb25zdCB7aWR9ID0gdGhpcy5wcm9wcy5xdWVyeVxuICAgIGxldCBjb21tZW50UmVzID0gYXdhaXQgYXBpLkdldEJsb2dDb21tZW50cyhpZClcbiAgICB0aGlzLnNldFN0YXRlKHtjb21tZW50c0xpc3Q6Y29tbWVudFJlcy5ibG9nQ29tbWVudExpc3RMaXN0LGNvbW1lbnRUb3RhbDpjb21tZW50UmVzLnRvdGFsfSlcbiAgfVxuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICBjb25zdCB7aWR9ID0gdGhpcy5wcm9wcy5xdWVyeVxuICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS5HZXRCbG9nRGV0YWlsKGlkKTtcbiAgICAgIGxldCBocmVzID0gYXdhaXQgYXBpLlJlYWROZXRGaWxlKHJlcy5jdXJyZW50QXJ0aWNsZS5odG1sVHh0VXJsKTtcbiAgICAgIGF3YWl0IHRoaXMuZ2V0Q29tbWVudHMoKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2Jsb2dEdGFpbDpocmVzLnR4dCxkZXRhaWxEYXRhOnJlc30pXG4gICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidFwiKS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwic2hhZG93bm9uZVwiKVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRpbmdcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfSw1MDApXG4gICAgICBcbiAgfVxuXG4gIGFzeW5jIHN1Yk1pdENvbW1lbnQoZXZlbnQpe1xuICAgIHZhciBlID0gZXZlbnQgfHwgd2luZG93LmV2ZW50O1xuICAgIGlmIChlICYmIGUua2V5Q29kZSA9PSAxMykgeyAvL+Wbnui9pumUrueahOmUruWAvOS4ujEzXG4gICAgICBjb25zdCB7aWR9ID0gdGhpcy5wcm9wcy5xdWVyeVxuICAgICAgbGV0IHtzYXl0ZXh0fSA9IHRoaXMuc3RhdGU7XG4gICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLlN1Yk1pdENvbW1lbnQoc2F5dGV4dCxpZCk7XG4gICAgICBpZiAocmVzLmNvZGUgIT0gMCl7XG4gICAgICAgIGFsZXJ0KHJlcy5tc2cpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGF3YWl0IHRoaXMuZ2V0Q29tbWVudHMoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoe3NheXRleHQ6XCJcIn0pXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgbWFrZUdvb2QoKXtcbiAgICBsZXQge2RldGFpbERhdGF9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7aWR9ID0gdGhpcy5wcm9wcy5xdWVyeVxuICAgIGFwaS5NYWtlR29vZChpZClcbiAgICBkZXRhaWxEYXRhLmN1cnJlbnRBcnRpY2xlLmdvb2ROdW0rK1xuICAgIHRoaXMuc2V0U3RhdGUoe2RldGFpbERhdGF9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtibG9nRHRhaWwsZGV0YWlsRGF0YSxjb21tZW50c0xpc3Qsc2F5dGV4dCxjb21tZW50VG90YWx9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHtjdXJyZW50QXJ0aWNsZSA9IHt9LG5leHRBcnRpY2xlID0ge30scHJldkFydGljbGUgPSB7fX0gPSBkZXRhaWxEYXRhO1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0IHRpdGxlPXtjdXJyZW50QXJ0aWNsZS5uYW1lfT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZDpcIiNmZmZcIixwYWRkaW5nOiBcIjAgMTJweFwifX0+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmV3c190aXRsZVwiPntjdXJyZW50QXJ0aWNsZS5uYW1lfTwvaDM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dpbmZvXCI+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYXV0aG9yXCI+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibG1uYW1lXCI+e2dldFRwVmFsdWUoY3VycmVudEFydGljbGUudHlwZSl9PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGltZXJcIj57bW9tZW50KGN1cnJlbnRBcnRpY2xlLmNyZWF0ZVRpbWUpLmZvcm1hdChcIllZWVktTU0tRERcIil9PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidmlld1wiPntjdXJyZW50QXJ0aWNsZS52aWV3fSDkurrlt7LpmIXor7s8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Y2xlYXI6J2JvdGgnfX0+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3NfYWJvdXRcIj5cbiAgICAgICAgICAgICAgPHN0cm9uZz7nroDku4s8L3N0cm9uZz4ge2N1cnJlbnRBcnRpY2xlLnByZWZhY2V9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGJsb2dEdGFpbH19IGNsYXNzTmFtZT1cIm1hcmtkb3duLWJvZHkgZWRpdG9ybWQtcHJldmlldy1jb250YWluZXJcIiBwcmV2aWV3Y29udGFpbmVyPVwidHJ1ZVwiIHN0eWxlPXt7d2lkdGg6XCJhdXRvXCIscGFkZGluZzowfX0+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYXJlXCIgc3R5bGU9e3twYWRkaW5nOiBcIjIwcHhcIn19PlxuICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZGlnZ2l0XCIgb25DbGljaz17dGhpcy5tYWtlR29vZC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgIDxhPuW+iOi1nuWTpu+8gTwvYT4oPGI+e2N1cnJlbnRBcnRpY2xlLmdvb2ROdW19PC9iPilcbiAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXh0aW5mb1wiPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJldkFydGljbGUuaWQgPyA8cD7kuIrkuIDnr4fvvJo8YSBocmVmPXtgL2RldGFpbD9pZD0ke2RldGFpbERhdGEucHJldkFydGljbGUuaWR9YH0+e2RldGFpbERhdGEucHJldkFydGljbGUubmFtZX08L2E+PC9wPjo8cD7kuIrkuIDnr4fvvJo8YSBocmVmPXtgL2FydGljbGVgfT7lm57liLDliJfooag8L2E+PC9wPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuZXh0QXJ0aWNsZS5pZCA/IDxwPuS4i+S4gOevh++8mjxhIGhyZWY9e2AvZGV0YWlsP2lkPSR7ZGV0YWlsRGF0YS5uZXh0QXJ0aWNsZS5pZH1gfT57ZGV0YWlsRGF0YS5uZXh0QXJ0aWNsZS5uYW1lfTwvYT48L3A+OjxwPuS4i+S4gOevh++8mjxhIGhyZWY9e2AvYXJ0aWNsZWB9PuWbnuWIsOWIl+ihqDwvYT48L3A+XG4gICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3c19wbFwiIGlkPVwibmV3c19wbFwiPlxuICAgICAgICAgICAgICAgIDxoMj7mlofnq6Dor4Torro8L2gyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2Jrb1wiPlxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb21tZW50c0xpc3QubWFwKChpdGVtLGspPT4oXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2t9IGNsYXNzTmFtZT1cImZiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3tiYWNrZ3JvdW5kOiBgdXJsKCR7YXZhdGFyc1tpdGVtLmlkJWF2YXRhcnMubGVuZ3RoXX0pIG5vLXJlcGVhdCB0b3AgMTRweCBsZWZ0IDEwcHhgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y29sb3I6XCIjMDAwXCJ9fT57aXRlbS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmJ0aW1lXCI+PHNwYW4+e21vbWVudChpdGVtLmNyZWF0ZVRpbWUpLmZvcm1hdChcIllZWVktTU0tRERcIil9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmJpbmZvXCI+e2l0ZW0uY29udGVudH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInBscG9zdFwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzYXlpbmdcIiBzdHlsZT17Y29tbWVudHNMaXN0Lmxlbmd0aCA9PSAwID8ge21hcmdpblRvcDogOH06e319PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBzdHlsZT17e3RleHREZWNvcmF0aW9uOiBcIm5vbmVcIixjb2xvcjogXCIjZGUxNTEzXCJ9fT7lhbHmnIl7Y29tbWVudFRvdGFsfeadoeivhOiuujwvYT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAg5p2l6K+05Lik5Y+l5ZCnLi4uXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJzYXl0ZXh0XCIgdmFsdWU9e3NheXRleHR9IG9uQ2hhbmdlPXsoZSk9PntcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzYXl0ZXh0OmUudGFyZ2V0LnZhbHVlfSlcbiAgICAgICAgICAgICAgICAgICAgfX0gcm93cz1cIjZcIiBpZD1cInNheXRleHRcIiBvbktleVVwPXt0aGlzLnN1Yk1pdENvbW1lbnQuYmluZCh0aGlzKX0+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLm5leHRpbmZvIGF7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogIzU1NTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5leHRpbmZvIGE6aG92ZXJ7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgIGNvbG9yOiMyMjI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC55em0ge1xuICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgICNwbHBvc3QgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMDMwMzA7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEzcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDElO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjc2F5dGV4dCB7XG4gICAgICAgICAgICAgIHdpZHRoOiA5OSU7XG4gICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNheWluZyBzcGFuIHtcbiAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgICAuc2F5aW5ne1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBjb2xvcjogI2E5YTZhNjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgICAgfSBcbiAgICAgICAgICAgLm5ld3NfcGwgaDJ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAjMDAwIDJweCBzb2xpZDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgLmZidGltZXtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgd2lkdGg6IDY2cHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgfVxuICAgICAgICAgICAuZmJ0aW1lIHNwYW57XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIHdpZHRoOiA2N3B4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgcC5mYnRpbWV7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgfVxuICAgICAgICAgICBwLmZiaW5mb3tcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIC5mYiB1bHtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggNzBweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206ICNlY2VjZWMgMXB4IHNvbGlkO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA0N3B4IDQ3cHg7XG4gICAgICAgICAgIH0gIFxuICAgICAgICAgICAubmV3c19wbHtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIDIwcHggMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgfVxuICAgICAgICAgICAubmV4dGluZm97XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIC5uZXh0aW5mbyA+IHB7XG4gICAgICAgICAgICBwYWRkaW5nOiA0cHggMTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgfVxuICAgICAgICAgICAuZGlnZ2l0e1xuICAgICAgICAgICAgd2lkdGg6IDE2MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI0UyNTIzQTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDJweCA2cHggMHB4IHJnYmEoMCwwLDAsLjIpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgLm5ld3NfYWJvdXQge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjODg4ODg4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGM0YzRjM7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggYXV0byAxNXB4IGF1dG87XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZSByZXBlYXQgMCAwICNGNkY2RjY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmxvZ2luZm8ge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uZXdzX3RpdGxlIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmxvZ2luZm8gbGkge1xuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PiAgICAgXG4gICAgKVxuICB9XG59XG5cblxuIl19 */\n/*@ sourceURL=/Users/justin/Desktop/my/mobile_simple/pages/detail.js */"));
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

      function getInitialProps(_x2) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);



/***/ }),

/***/ "./proto/blogArticle_pb.js":
/*!*********************************!*\
  !*** ./proto/blogArticle_pb.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
var jspb = __webpack_require__(/*! google-protobuf */ "google-protobuf");

var goog = jspb;
var global = Function('return this')();
goog.exportSymbol('proto.blog_article', null, global);
goog.exportSymbol('proto.blog_room', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */

proto.blog_article = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.blog_article, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.blog_article.displayName = 'proto.blog_article';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.blog_article.prototype.toObject = function (opt_includeInstance) {
    return proto.blog_article.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.blog_article} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.blog_article.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      id: jspb.Message.getFieldWithDefault(msg, 1, 0),
      cover: jspb.Message.getFieldWithDefault(msg, 2, ""),
      goodNum: jspb.Message.getFieldWithDefault(msg, 3, 0),
      view: jspb.Message.getFieldWithDefault(msg, 4, 0),
      recommended: jspb.Message.getFieldWithDefault(msg, 5, 0),
      type: jspb.Message.getFieldWithDefault(msg, 6, 0),
      preface: jspb.Message.getFieldWithDefault(msg, 7, ""),
      htmlTxtUrl: jspb.Message.getFieldWithDefault(msg, 8, ""),
      name: jspb.Message.getFieldWithDefault(msg, 9, ""),
      createTime: jspb.Message.getFieldWithDefault(msg, 10, ""),
      updateTime: jspb.Message.getFieldWithDefault(msg, 11, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.blog_article}
 */


proto.blog_article.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blog_article();
  return proto.blog_article.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blog_article} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blog_article}
 */


proto.blog_article.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value =
        /** @type {number} */
        reader.readInt32();
        msg.setId(value);
        break;

      case 2:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setCover(value);
        break;

      case 3:
        var value =
        /** @type {number} */
        reader.readInt64();
        msg.setGoodNum(value);
        break;

      case 4:
        var value =
        /** @type {number} */
        reader.readInt64();
        msg.setView(value);
        break;

      case 5:
        var value =
        /** @type {number} */
        reader.readInt64();
        msg.setRecommended(value);
        break;

      case 6:
        var value =
        /** @type {number} */
        reader.readInt64();
        msg.setType(value);
        break;

      case 7:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setPreface(value);
        break;

      case 8:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setHtmlTxtUrl(value);
        break;

      case 9:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setName(value);
        break;

      case 10:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setCreateTime(value);
        break;

      case 11:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setUpdateTime(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.blog_article.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.blog_article.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blog_article} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.blog_article.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getId();

  if (f !== 0) {
    writer.writeInt32(1, f);
  }

  f = message.getCover();

  if (f.length > 0) {
    writer.writeString(2, f);
  }

  f = message.getGoodNum();

  if (f !== 0) {
    writer.writeInt64(3, f);
  }

  f = message.getView();

  if (f !== 0) {
    writer.writeInt64(4, f);
  }

  f = message.getRecommended();

  if (f !== 0) {
    writer.writeInt64(5, f);
  }

  f = message.getType();

  if (f !== 0) {
    writer.writeInt64(6, f);
  }

  f = message.getPreface();

  if (f.length > 0) {
    writer.writeString(7, f);
  }

  f = message.getHtmlTxtUrl();

  if (f.length > 0) {
    writer.writeString(8, f);
  }

  f = message.getName();

  if (f.length > 0) {
    writer.writeString(9, f);
  }

  f = message.getCreateTime();

  if (f.length > 0) {
    writer.writeString(10, f);
  }

  f = message.getUpdateTime();

  if (f.length > 0) {
    writer.writeString(11, f);
  }
};
/**
 * optional int32 id = 1;
 * @return {number}
 */


proto.blog_article.prototype.getId = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};
/** @param {number} value */


proto.blog_article.prototype.setId = function (value) {
  jspb.Message.setProto3IntField(this, 1, value);
};
/**
 * optional string cover = 2;
 * @return {string}
 */


proto.blog_article.prototype.getCover = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 2, "")
  );
};
/** @param {string} value */


proto.blog_article.prototype.setCover = function (value) {
  jspb.Message.setProto3StringField(this, 2, value);
};
/**
 * optional int64 good_num = 3;
 * @return {number}
 */


proto.blog_article.prototype.getGoodNum = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 3, 0)
  );
};
/** @param {number} value */


proto.blog_article.prototype.setGoodNum = function (value) {
  jspb.Message.setProto3IntField(this, 3, value);
};
/**
 * optional int64 view = 4;
 * @return {number}
 */


proto.blog_article.prototype.getView = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 4, 0)
  );
};
/** @param {number} value */


proto.blog_article.prototype.setView = function (value) {
  jspb.Message.setProto3IntField(this, 4, value);
};
/**
 * optional int64 recommended = 5;
 * @return {number}
 */


proto.blog_article.prototype.getRecommended = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 5, 0)
  );
};
/** @param {number} value */


proto.blog_article.prototype.setRecommended = function (value) {
  jspb.Message.setProto3IntField(this, 5, value);
};
/**
 * optional int64 type = 6;
 * @return {number}
 */


proto.blog_article.prototype.getType = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 6, 0)
  );
};
/** @param {number} value */


proto.blog_article.prototype.setType = function (value) {
  jspb.Message.setProto3IntField(this, 6, value);
};
/**
 * optional string preface = 7;
 * @return {string}
 */


proto.blog_article.prototype.getPreface = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 7, "")
  );
};
/** @param {string} value */


proto.blog_article.prototype.setPreface = function (value) {
  jspb.Message.setProto3StringField(this, 7, value);
};
/**
 * optional string html_txt_url = 8;
 * @return {string}
 */


proto.blog_article.prototype.getHtmlTxtUrl = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 8, "")
  );
};
/** @param {string} value */


proto.blog_article.prototype.setHtmlTxtUrl = function (value) {
  jspb.Message.setProto3StringField(this, 8, value);
};
/**
 * optional string name = 9;
 * @return {string}
 */


proto.blog_article.prototype.getName = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 9, "")
  );
};
/** @param {string} value */


proto.blog_article.prototype.setName = function (value) {
  jspb.Message.setProto3StringField(this, 9, value);
};
/**
 * optional string create_time = 10;
 * @return {string}
 */


proto.blog_article.prototype.getCreateTime = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 10, "")
  );
};
/** @param {string} value */


proto.blog_article.prototype.setCreateTime = function (value) {
  jspb.Message.setProto3StringField(this, 10, value);
};
/**
 * optional string update_time = 11;
 * @return {string}
 */


proto.blog_article.prototype.getUpdateTime = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 11, "")
  );
};
/** @param {string} value */


proto.blog_article.prototype.setUpdateTime = function (value) {
  jspb.Message.setProto3StringField(this, 11, value);
};
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */


proto.blog_room = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.blog_room, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.blog_room.displayName = 'proto.blog_room';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.blog_room.prototype.toObject = function (opt_includeInstance) {
    return proto.blog_room.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.blog_room} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.blog_room.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      id: jspb.Message.getFieldWithDefault(msg, 1, ""),
      name: jspb.Message.getFieldWithDefault(msg, 2, ""),
      cover: jspb.Message.getFieldWithDefault(msg, 3, ""),
      createTime: jspb.Message.getFieldWithDefault(msg, 4, ""),
      updateTime: jspb.Message.getFieldWithDefault(msg, 5, ""),
      olnum: jspb.Message.getFieldWithDefault(msg, 6, 0)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.blog_room}
 */


proto.blog_room.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blog_room();
  return proto.blog_room.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blog_room} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blog_room}
 */


proto.blog_room.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setId(value);
        break;

      case 2:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setName(value);
        break;

      case 3:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setCover(value);
        break;

      case 4:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setCreateTime(value);
        break;

      case 5:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setUpdateTime(value);
        break;

      case 6:
        var value =
        /** @type {number} */
        reader.readInt32();
        msg.setOlnum(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.blog_room.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.blog_room.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blog_room} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.blog_room.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getId();

  if (f.length > 0) {
    writer.writeString(1, f);
  }

  f = message.getName();

  if (f.length > 0) {
    writer.writeString(2, f);
  }

  f = message.getCover();

  if (f.length > 0) {
    writer.writeString(3, f);
  }

  f = message.getCreateTime();

  if (f.length > 0) {
    writer.writeString(4, f);
  }

  f = message.getUpdateTime();

  if (f.length > 0) {
    writer.writeString(5, f);
  }

  f = message.getOlnum();

  if (f !== 0) {
    writer.writeInt32(6, f);
  }
};
/**
 * optional string id = 1;
 * @return {string}
 */


proto.blog_room.prototype.getId = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 1, "")
  );
};
/** @param {string} value */


proto.blog_room.prototype.setId = function (value) {
  jspb.Message.setProto3StringField(this, 1, value);
};
/**
 * optional string name = 2;
 * @return {string}
 */


proto.blog_room.prototype.getName = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 2, "")
  );
};
/** @param {string} value */


proto.blog_room.prototype.setName = function (value) {
  jspb.Message.setProto3StringField(this, 2, value);
};
/**
 * optional string cover = 3;
 * @return {string}
 */


proto.blog_room.prototype.getCover = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 3, "")
  );
};
/** @param {string} value */


proto.blog_room.prototype.setCover = function (value) {
  jspb.Message.setProto3StringField(this, 3, value);
};
/**
 * optional string create_time = 4;
 * @return {string}
 */


proto.blog_room.prototype.getCreateTime = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 4, "")
  );
};
/** @param {string} value */


proto.blog_room.prototype.setCreateTime = function (value) {
  jspb.Message.setProto3StringField(this, 4, value);
};
/**
 * optional string update_time = 5;
 * @return {string}
 */


proto.blog_room.prototype.getUpdateTime = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 5, "")
  );
};
/** @param {string} value */


proto.blog_room.prototype.setUpdateTime = function (value) {
  jspb.Message.setProto3StringField(this, 5, value);
};
/**
 * optional int32 olnum = 6;
 * @return {number}
 */


proto.blog_room.prototype.getOlnum = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 6, 0)
  );
};
/** @param {number} value */


proto.blog_room.prototype.setOlnum = function (value) {
  jspb.Message.setProto3IntField(this, 6, value);
};

goog.object.extend(exports, proto);

/***/ }),

/***/ "./proto/blogChatRecord_pb.js":
/*!************************************!*\
  !*** ./proto/blogChatRecord_pb.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
var jspb = __webpack_require__(/*! google-protobuf */ "google-protobuf");

var goog = jspb;
var global = Function('return this')();
goog.exportSymbol('proto.blog_chat_record', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */

proto.blog_chat_record = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.blog_chat_record, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.blog_chat_record.displayName = 'proto.blog_chat_record';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.blog_chat_record.prototype.toObject = function (opt_includeInstance) {
    return proto.blog_chat_record.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.blog_chat_record} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.blog_chat_record.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      id: jspb.Message.getFieldWithDefault(msg, 1, 0),
      room: jspb.Message.getFieldWithDefault(msg, 2, ""),
      content: jspb.Message.getFieldWithDefault(msg, 3, ""),
      createTime: jspb.Message.getFieldWithDefault(msg, 4, ""),
      updateTime: jspb.Message.getFieldWithDefault(msg, 5, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.blog_chat_record}
 */


proto.blog_chat_record.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blog_chat_record();
  return proto.blog_chat_record.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blog_chat_record} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blog_chat_record}
 */


proto.blog_chat_record.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value =
        /** @type {number} */
        reader.readInt32();
        msg.setId(value);
        break;

      case 2:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setRoom(value);
        break;

      case 3:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setContent(value);
        break;

      case 4:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setCreateTime(value);
        break;

      case 5:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setUpdateTime(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.blog_chat_record.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.blog_chat_record.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blog_chat_record} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.blog_chat_record.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getId();

  if (f !== 0) {
    writer.writeInt32(1, f);
  }

  f = message.getRoom();

  if (f.length > 0) {
    writer.writeString(2, f);
  }

  f = message.getContent();

  if (f.length > 0) {
    writer.writeString(3, f);
  }

  f = message.getCreateTime();

  if (f.length > 0) {
    writer.writeString(4, f);
  }

  f = message.getUpdateTime();

  if (f.length > 0) {
    writer.writeString(5, f);
  }
};
/**
 * optional int32 id = 1;
 * @return {number}
 */


proto.blog_chat_record.prototype.getId = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};
/** @param {number} value */


proto.blog_chat_record.prototype.setId = function (value) {
  jspb.Message.setProto3IntField(this, 1, value);
};
/**
 * optional string room = 2;
 * @return {string}
 */


proto.blog_chat_record.prototype.getRoom = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 2, "")
  );
};
/** @param {string} value */


proto.blog_chat_record.prototype.setRoom = function (value) {
  jspb.Message.setProto3StringField(this, 2, value);
};
/**
 * optional string content = 3;
 * @return {string}
 */


proto.blog_chat_record.prototype.getContent = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 3, "")
  );
};
/** @param {string} value */


proto.blog_chat_record.prototype.setContent = function (value) {
  jspb.Message.setProto3StringField(this, 3, value);
};
/**
 * optional string create_time = 4;
 * @return {string}
 */


proto.blog_chat_record.prototype.getCreateTime = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 4, "")
  );
};
/** @param {string} value */


proto.blog_chat_record.prototype.setCreateTime = function (value) {
  jspb.Message.setProto3StringField(this, 4, value);
};
/**
 * optional string update_time = 5;
 * @return {string}
 */


proto.blog_chat_record.prototype.getUpdateTime = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 5, "")
  );
};
/** @param {string} value */


proto.blog_chat_record.prototype.setUpdateTime = function (value) {
  jspb.Message.setProto3StringField(this, 5, value);
};

goog.object.extend(exports, proto);

/***/ }),

/***/ "./proto/blogComment_pb.js":
/*!*********************************!*\
  !*** ./proto/blogComment_pb.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
var jspb = __webpack_require__(/*! google-protobuf */ "google-protobuf");

var goog = jspb;
var global = Function('return this')();
goog.exportSymbol('proto.blog_comment', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */

proto.blog_comment = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.blog_comment, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.blog_comment.displayName = 'proto.blog_comment';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.blog_comment.prototype.toObject = function (opt_includeInstance) {
    return proto.blog_comment.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.blog_comment} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.blog_comment.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      id: jspb.Message.getFieldWithDefault(msg, 1, 0),
      blogId: jspb.Message.getFieldWithDefault(msg, 2, 0),
      content: jspb.Message.getFieldWithDefault(msg, 3, ""),
      name: jspb.Message.getFieldWithDefault(msg, 4, ""),
      createTime: jspb.Message.getFieldWithDefault(msg, 5, ""),
      updateTime: jspb.Message.getFieldWithDefault(msg, 6, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.blog_comment}
 */


proto.blog_comment.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blog_comment();
  return proto.blog_comment.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blog_comment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blog_comment}
 */


proto.blog_comment.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value =
        /** @type {number} */
        reader.readInt32();
        msg.setId(value);
        break;

      case 2:
        var value =
        /** @type {number} */
        reader.readInt32();
        msg.setBlogId(value);
        break;

      case 3:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setContent(value);
        break;

      case 4:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setName(value);
        break;

      case 5:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setCreateTime(value);
        break;

      case 6:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setUpdateTime(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.blog_comment.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.blog_comment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blog_comment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.blog_comment.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getId();

  if (f !== 0) {
    writer.writeInt32(1, f);
  }

  f = message.getBlogId();

  if (f !== 0) {
    writer.writeInt32(2, f);
  }

  f = message.getContent();

  if (f.length > 0) {
    writer.writeString(3, f);
  }

  f = message.getName();

  if (f.length > 0) {
    writer.writeString(4, f);
  }

  f = message.getCreateTime();

  if (f.length > 0) {
    writer.writeString(5, f);
  }

  f = message.getUpdateTime();

  if (f.length > 0) {
    writer.writeString(6, f);
  }
};
/**
 * optional int32 id = 1;
 * @return {number}
 */


proto.blog_comment.prototype.getId = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};
/** @param {number} value */


proto.blog_comment.prototype.setId = function (value) {
  jspb.Message.setProto3IntField(this, 1, value);
};
/**
 * optional int32 blog_id = 2;
 * @return {number}
 */


proto.blog_comment.prototype.getBlogId = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 2, 0)
  );
};
/** @param {number} value */


proto.blog_comment.prototype.setBlogId = function (value) {
  jspb.Message.setProto3IntField(this, 2, value);
};
/**
 * optional string content = 3;
 * @return {string}
 */


proto.blog_comment.prototype.getContent = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 3, "")
  );
};
/** @param {string} value */


proto.blog_comment.prototype.setContent = function (value) {
  jspb.Message.setProto3StringField(this, 3, value);
};
/**
 * optional string name = 4;
 * @return {string}
 */


proto.blog_comment.prototype.getName = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 4, "")
  );
};
/** @param {string} value */


proto.blog_comment.prototype.setName = function (value) {
  jspb.Message.setProto3StringField(this, 4, value);
};
/**
 * optional string create_time = 5;
 * @return {string}
 */


proto.blog_comment.prototype.getCreateTime = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 5, "")
  );
};
/** @param {string} value */


proto.blog_comment.prototype.setCreateTime = function (value) {
  jspb.Message.setProto3StringField(this, 5, value);
};
/**
 * optional string update_time = 6;
 * @return {string}
 */


proto.blog_comment.prototype.getUpdateTime = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 6, "")
  );
};
/** @param {string} value */


proto.blog_comment.prototype.setUpdateTime = function (value) {
  jspb.Message.setProto3StringField(this, 6, value);
};

goog.object.extend(exports, proto);

/***/ }),

/***/ "./proto/blogType_pb.js":
/*!******************************!*\
  !*** ./proto/blogType_pb.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
var jspb = __webpack_require__(/*! google-protobuf */ "google-protobuf");

var goog = jspb;
var global = Function('return this')();
goog.exportSymbol('proto.blog_type', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */

proto.blog_type = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.blog_type, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.blog_type.displayName = 'proto.blog_type';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.blog_type.prototype.toObject = function (opt_includeInstance) {
    return proto.blog_type.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.blog_type} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.blog_type.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      id: jspb.Message.getFieldWithDefault(msg, 1, 0),
      blogNum: jspb.Message.getFieldWithDefault(msg, 2, 0),
      lable: jspb.Message.getFieldWithDefault(msg, 3, ""),
      createTime: jspb.Message.getFieldWithDefault(msg, 4, ""),
      updateTime: jspb.Message.getFieldWithDefault(msg, 5, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.blog_type}
 */


proto.blog_type.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blog_type();
  return proto.blog_type.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blog_type} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blog_type}
 */


proto.blog_type.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value =
        /** @type {number} */
        reader.readInt32();
        msg.setId(value);
        break;

      case 2:
        var value =
        /** @type {number} */
        reader.readInt32();
        msg.setBlogNum(value);
        break;

      case 3:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setLable(value);
        break;

      case 4:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setCreateTime(value);
        break;

      case 5:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setUpdateTime(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.blog_type.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.blog_type.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blog_type} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.blog_type.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getId();

  if (f !== 0) {
    writer.writeInt32(1, f);
  }

  f = message.getBlogNum();

  if (f !== 0) {
    writer.writeInt32(2, f);
  }

  f = message.getLable();

  if (f.length > 0) {
    writer.writeString(3, f);
  }

  f = message.getCreateTime();

  if (f.length > 0) {
    writer.writeString(4, f);
  }

  f = message.getUpdateTime();

  if (f.length > 0) {
    writer.writeString(5, f);
  }
};
/**
 * optional int32 id = 1;
 * @return {number}
 */


proto.blog_type.prototype.getId = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};
/** @param {number} value */


proto.blog_type.prototype.setId = function (value) {
  jspb.Message.setProto3IntField(this, 1, value);
};
/**
 * optional int32 blog_num = 2;
 * @return {number}
 */


proto.blog_type.prototype.getBlogNum = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 2, 0)
  );
};
/** @param {number} value */


proto.blog_type.prototype.setBlogNum = function (value) {
  jspb.Message.setProto3IntField(this, 2, value);
};
/**
 * optional string lable = 3;
 * @return {string}
 */


proto.blog_type.prototype.getLable = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 3, "")
  );
};
/** @param {string} value */


proto.blog_type.prototype.setLable = function (value) {
  jspb.Message.setProto3StringField(this, 3, value);
};
/**
 * optional string create_time = 4;
 * @return {string}
 */


proto.blog_type.prototype.getCreateTime = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 4, "")
  );
};
/** @param {string} value */


proto.blog_type.prototype.setCreateTime = function (value) {
  jspb.Message.setProto3StringField(this, 4, value);
};
/**
 * optional string update_time = 5;
 * @return {string}
 */


proto.blog_type.prototype.getUpdateTime = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 5, "")
  );
};
/** @param {string} value */


proto.blog_type.prototype.setUpdateTime = function (value) {
  jspb.Message.setProto3StringField(this, 5, value);
};

goog.object.extend(exports, proto);

/***/ }),

/***/ "./proto/blog_pb.js":
/*!**************************!*\
  !*** ./proto/blog_pb.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
var jspb = __webpack_require__(/*! google-protobuf */ "google-protobuf");

var goog = jspb;
var global = Function('return this')();
goog.exportSymbol('proto.blogComment', null, global);
goog.exportSymbol('proto.blogComments', null, global);
goog.exportSymbol('proto.blogListRes', null, global);
goog.exportSymbol('proto.detailRes', null, global);
goog.exportSymbol('proto.fileReadRes', null, global);
goog.exportSymbol('proto.tp', null, global);
goog.exportSymbol('proto.tps', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */

proto.detailRes = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.detailRes, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.detailRes.displayName = 'proto.detailRes';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.detailRes.prototype.toObject = function (opt_includeInstance) {
    return proto.detailRes.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.detailRes} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.detailRes.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      id: jspb.Message.getFieldWithDefault(msg, 1, 0),
      view: jspb.Message.getFieldWithDefault(msg, 2, 0),
      preface: jspb.Message.getFieldWithDefault(msg, 3, ""),
      htmlTxtUrl: jspb.Message.getFieldWithDefault(msg, 4, ""),
      recommended: jspb.Message.getFieldWithDefault(msg, 5, 0),
      createTime: jspb.Message.getFieldWithDefault(msg, 6, ""),
      updateTime: jspb.Message.getFieldWithDefault(msg, 7, ""),
      type: jspb.Message.getFieldWithDefault(msg, 8, 0),
      name: jspb.Message.getFieldWithDefault(msg, 9, ""),
      goodNum: jspb.Message.getFieldWithDefault(msg, 10, 0),
      next: (f = msg.getNext()) && proto.detailRes.toObject(includeInstance, f),
      prev: (f = msg.getPrev()) && proto.detailRes.toObject(includeInstance, f),
      cover: jspb.Message.getFieldWithDefault(msg, 13, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.detailRes}
 */


proto.detailRes.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.detailRes();
  return proto.detailRes.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.detailRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.detailRes}
 */


proto.detailRes.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value =
        /** @type {number} */
        reader.readInt32();
        msg.setId(value);
        break;

      case 2:
        var value =
        /** @type {number} */
        reader.readInt32();
        msg.setView(value);
        break;

      case 3:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setPreface(value);
        break;

      case 4:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setHtmlTxtUrl(value);
        break;

      case 5:
        var value =
        /** @type {number} */
        reader.readInt32();
        msg.setRecommended(value);
        break;

      case 6:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setCreateTime(value);
        break;

      case 7:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setUpdateTime(value);
        break;

      case 8:
        var value =
        /** @type {number} */
        reader.readInt32();
        msg.setType(value);
        break;

      case 9:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setName(value);
        break;

      case 10:
        var value =
        /** @type {number} */
        reader.readInt32();
        msg.setGoodNum(value);
        break;

      case 11:
        var value = new proto.detailRes();
        reader.readMessage(value, proto.detailRes.deserializeBinaryFromReader);
        msg.setNext(value);
        break;

      case 12:
        var value = new proto.detailRes();
        reader.readMessage(value, proto.detailRes.deserializeBinaryFromReader);
        msg.setPrev(value);
        break;

      case 13:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setCover(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.detailRes.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.detailRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.detailRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.detailRes.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getId();

  if (f !== 0) {
    writer.writeInt32(1, f);
  }

  f = message.getView();

  if (f !== 0) {
    writer.writeInt32(2, f);
  }

  f = message.getPreface();

  if (f.length > 0) {
    writer.writeString(3, f);
  }

  f = message.getHtmlTxtUrl();

  if (f.length > 0) {
    writer.writeString(4, f);
  }

  f = message.getRecommended();

  if (f !== 0) {
    writer.writeInt32(5, f);
  }

  f = message.getCreateTime();

  if (f.length > 0) {
    writer.writeString(6, f);
  }

  f = message.getUpdateTime();

  if (f.length > 0) {
    writer.writeString(7, f);
  }

  f = message.getType();

  if (f !== 0) {
    writer.writeInt32(8, f);
  }

  f = message.getName();

  if (f.length > 0) {
    writer.writeString(9, f);
  }

  f = message.getGoodNum();

  if (f !== 0) {
    writer.writeInt32(10, f);
  }

  f = message.getNext();

  if (f != null) {
    writer.writeMessage(11, f, proto.detailRes.serializeBinaryToWriter);
  }

  f = message.getPrev();

  if (f != null) {
    writer.writeMessage(12, f, proto.detailRes.serializeBinaryToWriter);
  }

  f = message.getCover();

  if (f.length > 0) {
    writer.writeString(13, f);
  }
};
/**
 * optional int32 id = 1;
 * @return {number}
 */


proto.detailRes.prototype.getId = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};
/** @param {number} value */


proto.detailRes.prototype.setId = function (value) {
  jspb.Message.setProto3IntField(this, 1, value);
};
/**
 * optional int32 view = 2;
 * @return {number}
 */


proto.detailRes.prototype.getView = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 2, 0)
  );
};
/** @param {number} value */


proto.detailRes.prototype.setView = function (value) {
  jspb.Message.setProto3IntField(this, 2, value);
};
/**
 * optional string preface = 3;
 * @return {string}
 */


proto.detailRes.prototype.getPreface = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 3, "")
  );
};
/** @param {string} value */


proto.detailRes.prototype.setPreface = function (value) {
  jspb.Message.setProto3StringField(this, 3, value);
};
/**
 * optional string html_txt_url = 4;
 * @return {string}
 */


proto.detailRes.prototype.getHtmlTxtUrl = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 4, "")
  );
};
/** @param {string} value */


proto.detailRes.prototype.setHtmlTxtUrl = function (value) {
  jspb.Message.setProto3StringField(this, 4, value);
};
/**
 * optional int32 recommended = 5;
 * @return {number}
 */


proto.detailRes.prototype.getRecommended = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 5, 0)
  );
};
/** @param {number} value */


proto.detailRes.prototype.setRecommended = function (value) {
  jspb.Message.setProto3IntField(this, 5, value);
};
/**
 * optional string create_time = 6;
 * @return {string}
 */


proto.detailRes.prototype.getCreateTime = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 6, "")
  );
};
/** @param {string} value */


proto.detailRes.prototype.setCreateTime = function (value) {
  jspb.Message.setProto3StringField(this, 6, value);
};
/**
 * optional string update_time = 7;
 * @return {string}
 */


proto.detailRes.prototype.getUpdateTime = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 7, "")
  );
};
/** @param {string} value */


proto.detailRes.prototype.setUpdateTime = function (value) {
  jspb.Message.setProto3StringField(this, 7, value);
};
/**
 * optional int32 type = 8;
 * @return {number}
 */


proto.detailRes.prototype.getType = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 8, 0)
  );
};
/** @param {number} value */


proto.detailRes.prototype.setType = function (value) {
  jspb.Message.setProto3IntField(this, 8, value);
};
/**
 * optional string name = 9;
 * @return {string}
 */


proto.detailRes.prototype.getName = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 9, "")
  );
};
/** @param {string} value */


proto.detailRes.prototype.setName = function (value) {
  jspb.Message.setProto3StringField(this, 9, value);
};
/**
 * optional int32 good_num = 10;
 * @return {number}
 */


proto.detailRes.prototype.getGoodNum = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 10, 0)
  );
};
/** @param {number} value */


proto.detailRes.prototype.setGoodNum = function (value) {
  jspb.Message.setProto3IntField(this, 10, value);
};
/**
 * optional detailRes next = 11;
 * @return {?proto.detailRes}
 */


proto.detailRes.prototype.getNext = function () {
  return (
    /** @type{?proto.detailRes} */
    jspb.Message.getWrapperField(this, proto.detailRes, 11)
  );
};
/** @param {?proto.detailRes|undefined} value */


proto.detailRes.prototype.setNext = function (value) {
  jspb.Message.setWrapperField(this, 11, value);
};

proto.detailRes.prototype.clearNext = function () {
  this.setNext(undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */


proto.detailRes.prototype.hasNext = function () {
  return jspb.Message.getField(this, 11) != null;
};
/**
 * optional detailRes prev = 12;
 * @return {?proto.detailRes}
 */


proto.detailRes.prototype.getPrev = function () {
  return (
    /** @type{?proto.detailRes} */
    jspb.Message.getWrapperField(this, proto.detailRes, 12)
  );
};
/** @param {?proto.detailRes|undefined} value */


proto.detailRes.prototype.setPrev = function (value) {
  jspb.Message.setWrapperField(this, 12, value);
};

proto.detailRes.prototype.clearPrev = function () {
  this.setPrev(undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */


proto.detailRes.prototype.hasPrev = function () {
  return jspb.Message.getField(this, 12) != null;
};
/**
 * optional string cover = 13;
 * @return {string}
 */


proto.detailRes.prototype.getCover = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 13, "")
  );
};
/** @param {string} value */


proto.detailRes.prototype.setCover = function (value) {
  jspb.Message.setProto3StringField(this, 13, value);
};
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */


proto.fileReadRes = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.fileReadRes, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.fileReadRes.displayName = 'proto.fileReadRes';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.fileReadRes.prototype.toObject = function (opt_includeInstance) {
    return proto.fileReadRes.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.fileReadRes} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.fileReadRes.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      txt: jspb.Message.getFieldWithDefault(msg, 1, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.fileReadRes}
 */


proto.fileReadRes.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.fileReadRes();
  return proto.fileReadRes.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.fileReadRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.fileReadRes}
 */


proto.fileReadRes.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setTxt(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.fileReadRes.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.fileReadRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.fileReadRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.fileReadRes.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getTxt();

  if (f.length > 0) {
    writer.writeString(1, f);
  }
};
/**
 * optional string txt = 1;
 * @return {string}
 */


proto.fileReadRes.prototype.getTxt = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 1, "")
  );
};
/** @param {string} value */


proto.fileReadRes.prototype.setTxt = function (value) {
  jspb.Message.setProto3StringField(this, 1, value);
};
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */


proto.blogListRes = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.blogListRes.repeatedFields_, null);
};

goog.inherits(proto.blogListRes, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.blogListRes.displayName = 'proto.blogListRes';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */


proto.blogListRes.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.blogListRes.prototype.toObject = function (opt_includeInstance) {
    return proto.blogListRes.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.blogListRes} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.blogListRes.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      listList: jspb.Message.toObjectList(msg.getListList(), proto.detailRes.toObject, includeInstance),
      page: jspb.Message.getFieldWithDefault(msg, 2, 0),
      size: jspb.Message.getFieldWithDefault(msg, 3, 0),
      total: jspb.Message.getFieldWithDefault(msg, 4, 0)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.blogListRes}
 */


proto.blogListRes.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blogListRes();
  return proto.blogListRes.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blogListRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blogListRes}
 */


proto.blogListRes.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = new proto.detailRes();
        reader.readMessage(value, proto.detailRes.deserializeBinaryFromReader);
        msg.addList(value);
        break;

      case 2:
        var value =
        /** @type {number} */
        reader.readInt32();
        msg.setPage(value);
        break;

      case 3:
        var value =
        /** @type {number} */
        reader.readInt32();
        msg.setSize(value);
        break;

      case 4:
        var value =
        /** @type {number} */
        reader.readInt32();
        msg.setTotal(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.blogListRes.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.blogListRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blogListRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.blogListRes.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getListList();

  if (f.length > 0) {
    writer.writeRepeatedMessage(1, f, proto.detailRes.serializeBinaryToWriter);
  }

  f = message.getPage();

  if (f !== 0) {
    writer.writeInt32(2, f);
  }

  f = message.getSize();

  if (f !== 0) {
    writer.writeInt32(3, f);
  }

  f = message.getTotal();

  if (f !== 0) {
    writer.writeInt32(4, f);
  }
};
/**
 * repeated detailRes list = 1;
 * @return {!Array.<!proto.detailRes>}
 */


proto.blogListRes.prototype.getListList = function () {
  return (
    /** @type{!Array.<!proto.detailRes>} */
    jspb.Message.getRepeatedWrapperField(this, proto.detailRes, 1)
  );
};
/** @param {!Array.<!proto.detailRes>} value */


proto.blogListRes.prototype.setListList = function (value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};
/**
 * @param {!proto.detailRes=} opt_value
 * @param {number=} opt_index
 * @return {!proto.detailRes}
 */


proto.blogListRes.prototype.addList = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.detailRes, opt_index);
};

proto.blogListRes.prototype.clearListList = function () {
  this.setListList([]);
};
/**
 * optional int32 page = 2;
 * @return {number}
 */


proto.blogListRes.prototype.getPage = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 2, 0)
  );
};
/** @param {number} value */


proto.blogListRes.prototype.setPage = function (value) {
  jspb.Message.setProto3IntField(this, 2, value);
};
/**
 * optional int32 size = 3;
 * @return {number}
 */


proto.blogListRes.prototype.getSize = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 3, 0)
  );
};
/** @param {number} value */


proto.blogListRes.prototype.setSize = function (value) {
  jspb.Message.setProto3IntField(this, 3, value);
};
/**
 * optional int32 total = 4;
 * @return {number}
 */


proto.blogListRes.prototype.getTotal = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 4, 0)
  );
};
/** @param {number} value */


proto.blogListRes.prototype.setTotal = function (value) {
  jspb.Message.setProto3IntField(this, 4, value);
};
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */


proto.tp = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.tp, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.tp.displayName = 'proto.tp';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tp.prototype.toObject = function (opt_includeInstance) {
    return proto.tp.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tp} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.tp.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      id: jspb.Message.getFieldWithDefault(msg, 1, 0),
      lable: jspb.Message.getFieldWithDefault(msg, 2, ""),
      createTime: jspb.Message.getFieldWithDefault(msg, 3, ""),
      updateTime: jspb.Message.getFieldWithDefault(msg, 4, ""),
      blogNum: jspb.Message.getFieldWithDefault(msg, 5, 0)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tp}
 */


proto.tp.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tp();
  return proto.tp.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tp}
 */


proto.tp.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value =
        /** @type {number} */
        reader.readInt32();
        msg.setId(value);
        break;

      case 2:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setLable(value);
        break;

      case 3:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setCreateTime(value);
        break;

      case 4:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setUpdateTime(value);
        break;

      case 5:
        var value =
        /** @type {number} */
        reader.readInt32();
        msg.setBlogNum(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.tp.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.tp.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getId();

  if (f !== 0) {
    writer.writeInt32(1, f);
  }

  f = message.getLable();

  if (f.length > 0) {
    writer.writeString(2, f);
  }

  f = message.getCreateTime();

  if (f.length > 0) {
    writer.writeString(3, f);
  }

  f = message.getUpdateTime();

  if (f.length > 0) {
    writer.writeString(4, f);
  }

  f = message.getBlogNum();

  if (f !== 0) {
    writer.writeInt32(5, f);
  }
};
/**
 * optional int32 id = 1;
 * @return {number}
 */


proto.tp.prototype.getId = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};
/** @param {number} value */


proto.tp.prototype.setId = function (value) {
  jspb.Message.setProto3IntField(this, 1, value);
};
/**
 * optional string lable = 2;
 * @return {string}
 */


proto.tp.prototype.getLable = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 2, "")
  );
};
/** @param {string} value */


proto.tp.prototype.setLable = function (value) {
  jspb.Message.setProto3StringField(this, 2, value);
};
/**
 * optional string create_time = 3;
 * @return {string}
 */


proto.tp.prototype.getCreateTime = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 3, "")
  );
};
/** @param {string} value */


proto.tp.prototype.setCreateTime = function (value) {
  jspb.Message.setProto3StringField(this, 3, value);
};
/**
 * optional string update_time = 4;
 * @return {string}
 */


proto.tp.prototype.getUpdateTime = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 4, "")
  );
};
/** @param {string} value */


proto.tp.prototype.setUpdateTime = function (value) {
  jspb.Message.setProto3StringField(this, 4, value);
};
/**
 * optional int32 blog_num = 5;
 * @return {number}
 */


proto.tp.prototype.getBlogNum = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 5, 0)
  );
};
/** @param {number} value */


proto.tp.prototype.setBlogNum = function (value) {
  jspb.Message.setProto3IntField(this, 5, value);
};
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */


proto.tps = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tps.repeatedFields_, null);
};

goog.inherits(proto.tps, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.tps.displayName = 'proto.tps';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */


proto.tps.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tps.prototype.toObject = function (opt_includeInstance) {
    return proto.tps.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tps} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.tps.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      listList: jspb.Message.toObjectList(msg.getListList(), proto.tp.toObject, includeInstance)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tps}
 */


proto.tps.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tps();
  return proto.tps.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tps} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tps}
 */


proto.tps.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = new proto.tp();
        reader.readMessage(value, proto.tp.deserializeBinaryFromReader);
        msg.addList(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.tps.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tps.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tps} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.tps.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getListList();

  if (f.length > 0) {
    writer.writeRepeatedMessage(1, f, proto.tp.serializeBinaryToWriter);
  }
};
/**
 * repeated tp list = 1;
 * @return {!Array.<!proto.tp>}
 */


proto.tps.prototype.getListList = function () {
  return (
    /** @type{!Array.<!proto.tp>} */
    jspb.Message.getRepeatedWrapperField(this, proto.tp, 1)
  );
};
/** @param {!Array.<!proto.tp>} value */


proto.tps.prototype.setListList = function (value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};
/**
 * @param {!proto.tp=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tp}
 */


proto.tps.prototype.addList = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tp, opt_index);
};

proto.tps.prototype.clearListList = function () {
  this.setListList([]);
};
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */


proto.blogComment = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.blogComment, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.blogComment.displayName = 'proto.blogComment';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.blogComment.prototype.toObject = function (opt_includeInstance) {
    return proto.blogComment.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.blogComment} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.blogComment.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      id: jspb.Message.getFieldWithDefault(msg, 1, 0),
      blogId: jspb.Message.getFieldWithDefault(msg, 2, 0),
      content: jspb.Message.getFieldWithDefault(msg, 3, ""),
      name: jspb.Message.getFieldWithDefault(msg, 4, ""),
      createTime: jspb.Message.getFieldWithDefault(msg, 5, ""),
      updateTime: jspb.Message.getFieldWithDefault(msg, 6, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.blogComment}
 */


proto.blogComment.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blogComment();
  return proto.blogComment.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blogComment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blogComment}
 */


proto.blogComment.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value =
        /** @type {number} */
        reader.readInt32();
        msg.setId(value);
        break;

      case 2:
        var value =
        /** @type {number} */
        reader.readInt32();
        msg.setBlogId(value);
        break;

      case 3:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setContent(value);
        break;

      case 4:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setName(value);
        break;

      case 5:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setCreateTime(value);
        break;

      case 6:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setUpdateTime(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.blogComment.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.blogComment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blogComment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.blogComment.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getId();

  if (f !== 0) {
    writer.writeInt32(1, f);
  }

  f = message.getBlogId();

  if (f !== 0) {
    writer.writeInt32(2, f);
  }

  f = message.getContent();

  if (f.length > 0) {
    writer.writeString(3, f);
  }

  f = message.getName();

  if (f.length > 0) {
    writer.writeString(4, f);
  }

  f = message.getCreateTime();

  if (f.length > 0) {
    writer.writeString(5, f);
  }

  f = message.getUpdateTime();

  if (f.length > 0) {
    writer.writeString(6, f);
  }
};
/**
 * optional int32 id = 1;
 * @return {number}
 */


proto.blogComment.prototype.getId = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};
/** @param {number} value */


proto.blogComment.prototype.setId = function (value) {
  jspb.Message.setProto3IntField(this, 1, value);
};
/**
 * optional int32 blog_id = 2;
 * @return {number}
 */


proto.blogComment.prototype.getBlogId = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 2, 0)
  );
};
/** @param {number} value */


proto.blogComment.prototype.setBlogId = function (value) {
  jspb.Message.setProto3IntField(this, 2, value);
};
/**
 * optional string content = 3;
 * @return {string}
 */


proto.blogComment.prototype.getContent = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 3, "")
  );
};
/** @param {string} value */


proto.blogComment.prototype.setContent = function (value) {
  jspb.Message.setProto3StringField(this, 3, value);
};
/**
 * optional string name = 4;
 * @return {string}
 */


proto.blogComment.prototype.getName = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 4, "")
  );
};
/** @param {string} value */


proto.blogComment.prototype.setName = function (value) {
  jspb.Message.setProto3StringField(this, 4, value);
};
/**
 * optional string create_time = 5;
 * @return {string}
 */


proto.blogComment.prototype.getCreateTime = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 5, "")
  );
};
/** @param {string} value */


proto.blogComment.prototype.setCreateTime = function (value) {
  jspb.Message.setProto3StringField(this, 5, value);
};
/**
 * optional string update_time = 6;
 * @return {string}
 */


proto.blogComment.prototype.getUpdateTime = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 6, "")
  );
};
/** @param {string} value */


proto.blogComment.prototype.setUpdateTime = function (value) {
  jspb.Message.setProto3StringField(this, 6, value);
};
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */


proto.blogComments = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.blogComments.repeatedFields_, null);
};

goog.inherits(proto.blogComments, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.blogComments.displayName = 'proto.blogComments';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */


proto.blogComments.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.blogComments.prototype.toObject = function (opt_includeInstance) {
    return proto.blogComments.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.blogComments} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.blogComments.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      listList: jspb.Message.toObjectList(msg.getListList(), proto.blogComment.toObject, includeInstance),
      total: jspb.Message.getFieldWithDefault(msg, 2, 0)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.blogComments}
 */


proto.blogComments.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blogComments();
  return proto.blogComments.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blogComments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blogComments}
 */


proto.blogComments.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value = new proto.blogComment();
        reader.readMessage(value, proto.blogComment.deserializeBinaryFromReader);
        msg.addList(value);
        break;

      case 2:
        var value =
        /** @type {number} */
        reader.readInt32();
        msg.setTotal(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.blogComments.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.blogComments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blogComments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.blogComments.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getListList();

  if (f.length > 0) {
    writer.writeRepeatedMessage(1, f, proto.blogComment.serializeBinaryToWriter);
  }

  f = message.getTotal();

  if (f !== 0) {
    writer.writeInt32(2, f);
  }
};
/**
 * repeated blogComment list = 1;
 * @return {!Array.<!proto.blogComment>}
 */


proto.blogComments.prototype.getListList = function () {
  return (
    /** @type{!Array.<!proto.blogComment>} */
    jspb.Message.getRepeatedWrapperField(this, proto.blogComment, 1)
  );
};
/** @param {!Array.<!proto.blogComment>} value */


proto.blogComments.prototype.setListList = function (value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};
/**
 * @param {!proto.blogComment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.blogComment}
 */


proto.blogComments.prototype.addList = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.blogComment, opt_index);
};

proto.blogComments.prototype.clearListList = function () {
  this.setListList([]);
};
/**
 * optional int32 total = 2;
 * @return {number}
 */


proto.blogComments.prototype.getTotal = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 2, 0)
  );
};
/** @param {number} value */


proto.blogComments.prototype.setTotal = function (value) {
  jspb.Message.setProto3IntField(this, 2, value);
};

goog.object.extend(exports, proto);

/***/ }),

/***/ "./proto/errors_pb.js":
/*!****************************!*\
  !*** ./proto/errors_pb.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
var jspb = __webpack_require__(/*! google-protobuf */ "google-protobuf");

var goog = jspb;
var global = Function('return this')();
goog.exportSymbol('proto.error_codes', null, global);
goog.exportSymbol('proto.resp', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */

proto.resp = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.resp, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.resp.displayName = 'proto.resp';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.resp.prototype.toObject = function (opt_includeInstance) {
    return proto.resp.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.resp} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.resp.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      code: jspb.Message.getFieldWithDefault(msg, 1, 0),
      msg: jspb.Message.getFieldWithDefault(msg, 2, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.resp}
 */


proto.resp.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.resp();
  return proto.resp.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.resp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.resp}
 */


proto.resp.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value =
        /** @type {!proto.error_codes} */
        reader.readEnum();
        msg.setCode(value);
        break;

      case 2:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setMsg(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.resp.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.resp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.resp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.resp.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getCode();

  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }

  f = message.getMsg();

  if (f.length > 0) {
    writer.writeString(2, f);
  }
};
/**
 * optional error_codes code = 1;
 * @return {!proto.error_codes}
 */


proto.resp.prototype.getCode = function () {
  return (
    /** @type {!proto.error_codes} */
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};
/** @param {!proto.error_codes} value */


proto.resp.prototype.setCode = function (value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};
/**
 * optional string msg = 2;
 * @return {string}
 */


proto.resp.prototype.getMsg = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 2, "")
  );
};
/** @param {string} value */


proto.resp.prototype.setMsg = function (value) {
  jspb.Message.setProto3StringField(this, 2, value);
};
/**
 * @enum {number}
 */


proto.error_codes = {
  F: 0,
  OK: 200,
  NOCONTENT: 204,
  INVALID_PARAMS: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOTFOUND: 404,
  ERROR: 500
};
goog.object.extend(exports, proto);

/***/ }),

/***/ "./proto/resp_pb.js":
/*!**************************!*\
  !*** ./proto/resp_pb.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
var jspb = __webpack_require__(/*! google-protobuf */ "google-protobuf");

var goog = jspb;
var global = Function('return this')();

var blogArticle_pb = __webpack_require__(/*! ./blogArticle_pb.js */ "./proto/blogArticle_pb.js");

var errors_pb = __webpack_require__(/*! ./errors_pb.js */ "./proto/errors_pb.js");

var blogType_pb = __webpack_require__(/*! ./blogType_pb.js */ "./proto/blogType_pb.js");

var blogComment_pb = __webpack_require__(/*! ./blogComment_pb.js */ "./proto/blogComment_pb.js");

var blogChatRecord_pb = __webpack_require__(/*! ./blogChatRecord_pb.js */ "./proto/blogChatRecord_pb.js");

goog.exportSymbol('proto.blog_chat_records', null, global);
goog.exportSymbol('proto.blog_comments', null, global);
goog.exportSymbol('proto.blog_detail', null, global);
goog.exportSymbol('proto.blog_list', null, global);
goog.exportSymbol('proto.blog_rooms', null, global);
goog.exportSymbol('proto.blog_types', null, global);
goog.exportSymbol('proto.file_content', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */

proto.blog_list = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.blog_list.repeatedFields_, null);
};

goog.inherits(proto.blog_list, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.blog_list.displayName = 'proto.blog_list';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */


proto.blog_list.repeatedFields_ = [3];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.blog_list.prototype.toObject = function (opt_includeInstance) {
    return proto.blog_list.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.blog_list} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.blog_list.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      code: jspb.Message.getFieldWithDefault(msg, 1, 0),
      msg: jspb.Message.getFieldWithDefault(msg, 2, ""),
      blogArticleListList: jspb.Message.toObjectList(msg.getBlogArticleListList(), blogArticle_pb.blog_article.toObject, includeInstance)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.blog_list}
 */


proto.blog_list.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blog_list();
  return proto.blog_list.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blog_list} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blog_list}
 */


proto.blog_list.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value =
        /** @type {!proto.error_codes} */
        reader.readEnum();
        msg.setCode(value);
        break;

      case 2:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setMsg(value);
        break;

      case 3:
        var value = new blogArticle_pb.blog_article();
        reader.readMessage(value, blogArticle_pb.blog_article.deserializeBinaryFromReader);
        msg.addBlogArticleList(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.blog_list.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.blog_list.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blog_list} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.blog_list.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getCode();

  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }

  f = message.getMsg();

  if (f.length > 0) {
    writer.writeString(2, f);
  }

  f = message.getBlogArticleListList();

  if (f.length > 0) {
    writer.writeRepeatedMessage(3, f, blogArticle_pb.blog_article.serializeBinaryToWriter);
  }
};
/**
 * optional error_codes code = 1;
 * @return {!proto.error_codes}
 */


proto.blog_list.prototype.getCode = function () {
  return (
    /** @type {!proto.error_codes} */
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};
/** @param {!proto.error_codes} value */


proto.blog_list.prototype.setCode = function (value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};
/**
 * optional string msg = 2;
 * @return {string}
 */


proto.blog_list.prototype.getMsg = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 2, "")
  );
};
/** @param {string} value */


proto.blog_list.prototype.setMsg = function (value) {
  jspb.Message.setProto3StringField(this, 2, value);
};
/**
 * repeated blog_article blog_article_list = 3;
 * @return {!Array.<!proto.blog_article>}
 */


proto.blog_list.prototype.getBlogArticleListList = function () {
  return (
    /** @type{!Array.<!proto.blog_article>} */
    jspb.Message.getRepeatedWrapperField(this, blogArticle_pb.blog_article, 3)
  );
};
/** @param {!Array.<!proto.blog_article>} value */


proto.blog_list.prototype.setBlogArticleListList = function (value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};
/**
 * @param {!proto.blog_article=} opt_value
 * @param {number=} opt_index
 * @return {!proto.blog_article}
 */


proto.blog_list.prototype.addBlogArticleList = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.blog_article, opt_index);
};

proto.blog_list.prototype.clearBlogArticleListList = function () {
  this.setBlogArticleListList([]);
};
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */


proto.blog_detail = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.blog_detail, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.blog_detail.displayName = 'proto.blog_detail';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.blog_detail.prototype.toObject = function (opt_includeInstance) {
    return proto.blog_detail.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.blog_detail} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.blog_detail.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      code: jspb.Message.getFieldWithDefault(msg, 1, 0),
      msg: jspb.Message.getFieldWithDefault(msg, 2, ""),
      currentArticle: (f = msg.getCurrentArticle()) && blogArticle_pb.blog_article.toObject(includeInstance, f),
      nextArticle: (f = msg.getNextArticle()) && blogArticle_pb.blog_article.toObject(includeInstance, f),
      prevArticle: (f = msg.getPrevArticle()) && blogArticle_pb.blog_article.toObject(includeInstance, f)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.blog_detail}
 */


proto.blog_detail.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blog_detail();
  return proto.blog_detail.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blog_detail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blog_detail}
 */


proto.blog_detail.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value =
        /** @type {!proto.error_codes} */
        reader.readEnum();
        msg.setCode(value);
        break;

      case 2:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setMsg(value);
        break;

      case 3:
        var value = new blogArticle_pb.blog_article();
        reader.readMessage(value, blogArticle_pb.blog_article.deserializeBinaryFromReader);
        msg.setCurrentArticle(value);
        break;

      case 4:
        var value = new blogArticle_pb.blog_article();
        reader.readMessage(value, blogArticle_pb.blog_article.deserializeBinaryFromReader);
        msg.setNextArticle(value);
        break;

      case 5:
        var value = new blogArticle_pb.blog_article();
        reader.readMessage(value, blogArticle_pb.blog_article.deserializeBinaryFromReader);
        msg.setPrevArticle(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.blog_detail.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.blog_detail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blog_detail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.blog_detail.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getCode();

  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }

  f = message.getMsg();

  if (f.length > 0) {
    writer.writeString(2, f);
  }

  f = message.getCurrentArticle();

  if (f != null) {
    writer.writeMessage(3, f, blogArticle_pb.blog_article.serializeBinaryToWriter);
  }

  f = message.getNextArticle();

  if (f != null) {
    writer.writeMessage(4, f, blogArticle_pb.blog_article.serializeBinaryToWriter);
  }

  f = message.getPrevArticle();

  if (f != null) {
    writer.writeMessage(5, f, blogArticle_pb.blog_article.serializeBinaryToWriter);
  }
};
/**
 * optional error_codes code = 1;
 * @return {!proto.error_codes}
 */


proto.blog_detail.prototype.getCode = function () {
  return (
    /** @type {!proto.error_codes} */
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};
/** @param {!proto.error_codes} value */


proto.blog_detail.prototype.setCode = function (value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};
/**
 * optional string msg = 2;
 * @return {string}
 */


proto.blog_detail.prototype.getMsg = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 2, "")
  );
};
/** @param {string} value */


proto.blog_detail.prototype.setMsg = function (value) {
  jspb.Message.setProto3StringField(this, 2, value);
};
/**
 * optional blog_article current_article = 3;
 * @return {?proto.blog_article}
 */


proto.blog_detail.prototype.getCurrentArticle = function () {
  return (
    /** @type{?proto.blog_article} */
    jspb.Message.getWrapperField(this, blogArticle_pb.blog_article, 3)
  );
};
/** @param {?proto.blog_article|undefined} value */


proto.blog_detail.prototype.setCurrentArticle = function (value) {
  jspb.Message.setWrapperField(this, 3, value);
};

proto.blog_detail.prototype.clearCurrentArticle = function () {
  this.setCurrentArticle(undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */


proto.blog_detail.prototype.hasCurrentArticle = function () {
  return jspb.Message.getField(this, 3) != null;
};
/**
 * optional blog_article next_article = 4;
 * @return {?proto.blog_article}
 */


proto.blog_detail.prototype.getNextArticle = function () {
  return (
    /** @type{?proto.blog_article} */
    jspb.Message.getWrapperField(this, blogArticle_pb.blog_article, 4)
  );
};
/** @param {?proto.blog_article|undefined} value */


proto.blog_detail.prototype.setNextArticle = function (value) {
  jspb.Message.setWrapperField(this, 4, value);
};

proto.blog_detail.prototype.clearNextArticle = function () {
  this.setNextArticle(undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */


proto.blog_detail.prototype.hasNextArticle = function () {
  return jspb.Message.getField(this, 4) != null;
};
/**
 * optional blog_article prev_article = 5;
 * @return {?proto.blog_article}
 */


proto.blog_detail.prototype.getPrevArticle = function () {
  return (
    /** @type{?proto.blog_article} */
    jspb.Message.getWrapperField(this, blogArticle_pb.blog_article, 5)
  );
};
/** @param {?proto.blog_article|undefined} value */


proto.blog_detail.prototype.setPrevArticle = function (value) {
  jspb.Message.setWrapperField(this, 5, value);
};

proto.blog_detail.prototype.clearPrevArticle = function () {
  this.setPrevArticle(undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */


proto.blog_detail.prototype.hasPrevArticle = function () {
  return jspb.Message.getField(this, 5) != null;
};
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */


proto.blog_types = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.blog_types.repeatedFields_, null);
};

goog.inherits(proto.blog_types, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.blog_types.displayName = 'proto.blog_types';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */


proto.blog_types.repeatedFields_ = [3];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.blog_types.prototype.toObject = function (opt_includeInstance) {
    return proto.blog_types.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.blog_types} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.blog_types.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      code: jspb.Message.getFieldWithDefault(msg, 1, 0),
      msg: jspb.Message.getFieldWithDefault(msg, 2, ""),
      blogTypeListList: jspb.Message.toObjectList(msg.getBlogTypeListList(), blogType_pb.blog_type.toObject, includeInstance)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.blog_types}
 */


proto.blog_types.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blog_types();
  return proto.blog_types.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blog_types} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blog_types}
 */


proto.blog_types.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value =
        /** @type {!proto.error_codes} */
        reader.readEnum();
        msg.setCode(value);
        break;

      case 2:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setMsg(value);
        break;

      case 3:
        var value = new blogType_pb.blog_type();
        reader.readMessage(value, blogType_pb.blog_type.deserializeBinaryFromReader);
        msg.addBlogTypeList(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.blog_types.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.blog_types.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blog_types} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.blog_types.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getCode();

  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }

  f = message.getMsg();

  if (f.length > 0) {
    writer.writeString(2, f);
  }

  f = message.getBlogTypeListList();

  if (f.length > 0) {
    writer.writeRepeatedMessage(3, f, blogType_pb.blog_type.serializeBinaryToWriter);
  }
};
/**
 * optional error_codes code = 1;
 * @return {!proto.error_codes}
 */


proto.blog_types.prototype.getCode = function () {
  return (
    /** @type {!proto.error_codes} */
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};
/** @param {!proto.error_codes} value */


proto.blog_types.prototype.setCode = function (value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};
/**
 * optional string msg = 2;
 * @return {string}
 */


proto.blog_types.prototype.getMsg = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 2, "")
  );
};
/** @param {string} value */


proto.blog_types.prototype.setMsg = function (value) {
  jspb.Message.setProto3StringField(this, 2, value);
};
/**
 * repeated blog_type blog_type_list = 3;
 * @return {!Array.<!proto.blog_type>}
 */


proto.blog_types.prototype.getBlogTypeListList = function () {
  return (
    /** @type{!Array.<!proto.blog_type>} */
    jspb.Message.getRepeatedWrapperField(this, blogType_pb.blog_type, 3)
  );
};
/** @param {!Array.<!proto.blog_type>} value */


proto.blog_types.prototype.setBlogTypeListList = function (value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};
/**
 * @param {!proto.blog_type=} opt_value
 * @param {number=} opt_index
 * @return {!proto.blog_type}
 */


proto.blog_types.prototype.addBlogTypeList = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.blog_type, opt_index);
};

proto.blog_types.prototype.clearBlogTypeListList = function () {
  this.setBlogTypeListList([]);
};
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */


proto.blog_comments = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.blog_comments.repeatedFields_, null);
};

goog.inherits(proto.blog_comments, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.blog_comments.displayName = 'proto.blog_comments';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */


proto.blog_comments.repeatedFields_ = [3];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.blog_comments.prototype.toObject = function (opt_includeInstance) {
    return proto.blog_comments.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.blog_comments} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.blog_comments.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      code: jspb.Message.getFieldWithDefault(msg, 1, 0),
      msg: jspb.Message.getFieldWithDefault(msg, 2, ""),
      blogCommentListList: jspb.Message.toObjectList(msg.getBlogCommentListList(), blogComment_pb.blog_comment.toObject, includeInstance),
      total: jspb.Message.getFieldWithDefault(msg, 4, 0)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.blog_comments}
 */


proto.blog_comments.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blog_comments();
  return proto.blog_comments.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blog_comments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blog_comments}
 */


proto.blog_comments.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value =
        /** @type {!proto.error_codes} */
        reader.readEnum();
        msg.setCode(value);
        break;

      case 2:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setMsg(value);
        break;

      case 3:
        var value = new blogComment_pb.blog_comment();
        reader.readMessage(value, blogComment_pb.blog_comment.deserializeBinaryFromReader);
        msg.addBlogCommentList(value);
        break;

      case 4:
        var value =
        /** @type {number} */
        reader.readInt32();
        msg.setTotal(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.blog_comments.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.blog_comments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blog_comments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.blog_comments.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getCode();

  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }

  f = message.getMsg();

  if (f.length > 0) {
    writer.writeString(2, f);
  }

  f = message.getBlogCommentListList();

  if (f.length > 0) {
    writer.writeRepeatedMessage(3, f, blogComment_pb.blog_comment.serializeBinaryToWriter);
  }

  f = message.getTotal();

  if (f !== 0) {
    writer.writeInt32(4, f);
  }
};
/**
 * optional error_codes code = 1;
 * @return {!proto.error_codes}
 */


proto.blog_comments.prototype.getCode = function () {
  return (
    /** @type {!proto.error_codes} */
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};
/** @param {!proto.error_codes} value */


proto.blog_comments.prototype.setCode = function (value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};
/**
 * optional string msg = 2;
 * @return {string}
 */


proto.blog_comments.prototype.getMsg = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 2, "")
  );
};
/** @param {string} value */


proto.blog_comments.prototype.setMsg = function (value) {
  jspb.Message.setProto3StringField(this, 2, value);
};
/**
 * repeated blog_comment blog_comment_list = 3;
 * @return {!Array.<!proto.blog_comment>}
 */


proto.blog_comments.prototype.getBlogCommentListList = function () {
  return (
    /** @type{!Array.<!proto.blog_comment>} */
    jspb.Message.getRepeatedWrapperField(this, blogComment_pb.blog_comment, 3)
  );
};
/** @param {!Array.<!proto.blog_comment>} value */


proto.blog_comments.prototype.setBlogCommentListList = function (value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};
/**
 * @param {!proto.blog_comment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.blog_comment}
 */


proto.blog_comments.prototype.addBlogCommentList = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.blog_comment, opt_index);
};

proto.blog_comments.prototype.clearBlogCommentListList = function () {
  this.setBlogCommentListList([]);
};
/**
 * optional int32 total = 4;
 * @return {number}
 */


proto.blog_comments.prototype.getTotal = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 4, 0)
  );
};
/** @param {number} value */


proto.blog_comments.prototype.setTotal = function (value) {
  jspb.Message.setProto3IntField(this, 4, value);
};
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */


proto.file_content = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.file_content, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.file_content.displayName = 'proto.file_content';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.file_content.prototype.toObject = function (opt_includeInstance) {
    return proto.file_content.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.file_content} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.file_content.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      code: jspb.Message.getFieldWithDefault(msg, 1, 0),
      msg: jspb.Message.getFieldWithDefault(msg, 2, ""),
      txt: jspb.Message.getFieldWithDefault(msg, 3, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.file_content}
 */


proto.file_content.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.file_content();
  return proto.file_content.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.file_content} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.file_content}
 */


proto.file_content.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value =
        /** @type {!proto.error_codes} */
        reader.readEnum();
        msg.setCode(value);
        break;

      case 2:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setMsg(value);
        break;

      case 3:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setTxt(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.file_content.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.file_content.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.file_content} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.file_content.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getCode();

  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }

  f = message.getMsg();

  if (f.length > 0) {
    writer.writeString(2, f);
  }

  f = message.getTxt();

  if (f.length > 0) {
    writer.writeString(3, f);
  }
};
/**
 * optional error_codes code = 1;
 * @return {!proto.error_codes}
 */


proto.file_content.prototype.getCode = function () {
  return (
    /** @type {!proto.error_codes} */
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};
/** @param {!proto.error_codes} value */


proto.file_content.prototype.setCode = function (value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};
/**
 * optional string msg = 2;
 * @return {string}
 */


proto.file_content.prototype.getMsg = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 2, "")
  );
};
/** @param {string} value */


proto.file_content.prototype.setMsg = function (value) {
  jspb.Message.setProto3StringField(this, 2, value);
};
/**
 * optional string txt = 3;
 * @return {string}
 */


proto.file_content.prototype.getTxt = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 3, "")
  );
};
/** @param {string} value */


proto.file_content.prototype.setTxt = function (value) {
  jspb.Message.setProto3StringField(this, 3, value);
};
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */


proto.blog_chat_records = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.blog_chat_records.repeatedFields_, null);
};

goog.inherits(proto.blog_chat_records, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.blog_chat_records.displayName = 'proto.blog_chat_records';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */


proto.blog_chat_records.repeatedFields_ = [3];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.blog_chat_records.prototype.toObject = function (opt_includeInstance) {
    return proto.blog_chat_records.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.blog_chat_records} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.blog_chat_records.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      code: jspb.Message.getFieldWithDefault(msg, 1, 0),
      msg: jspb.Message.getFieldWithDefault(msg, 2, ""),
      blogChatRecordListList: jspb.Message.toObjectList(msg.getBlogChatRecordListList(), blogChatRecord_pb.blog_chat_record.toObject, includeInstance)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.blog_chat_records}
 */


proto.blog_chat_records.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blog_chat_records();
  return proto.blog_chat_records.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blog_chat_records} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blog_chat_records}
 */


proto.blog_chat_records.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value =
        /** @type {!proto.error_codes} */
        reader.readEnum();
        msg.setCode(value);
        break;

      case 2:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setMsg(value);
        break;

      case 3:
        var value = new blogChatRecord_pb.blog_chat_record();
        reader.readMessage(value, blogChatRecord_pb.blog_chat_record.deserializeBinaryFromReader);
        msg.addBlogChatRecordList(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.blog_chat_records.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.blog_chat_records.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blog_chat_records} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.blog_chat_records.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getCode();

  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }

  f = message.getMsg();

  if (f.length > 0) {
    writer.writeString(2, f);
  }

  f = message.getBlogChatRecordListList();

  if (f.length > 0) {
    writer.writeRepeatedMessage(3, f, blogChatRecord_pb.blog_chat_record.serializeBinaryToWriter);
  }
};
/**
 * optional error_codes code = 1;
 * @return {!proto.error_codes}
 */


proto.blog_chat_records.prototype.getCode = function () {
  return (
    /** @type {!proto.error_codes} */
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};
/** @param {!proto.error_codes} value */


proto.blog_chat_records.prototype.setCode = function (value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};
/**
 * optional string msg = 2;
 * @return {string}
 */


proto.blog_chat_records.prototype.getMsg = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 2, "")
  );
};
/** @param {string} value */


proto.blog_chat_records.prototype.setMsg = function (value) {
  jspb.Message.setProto3StringField(this, 2, value);
};
/**
 * repeated blog_chat_record blog_chat_record_list = 3;
 * @return {!Array.<!proto.blog_chat_record>}
 */


proto.blog_chat_records.prototype.getBlogChatRecordListList = function () {
  return (
    /** @type{!Array.<!proto.blog_chat_record>} */
    jspb.Message.getRepeatedWrapperField(this, blogChatRecord_pb.blog_chat_record, 3)
  );
};
/** @param {!Array.<!proto.blog_chat_record>} value */


proto.blog_chat_records.prototype.setBlogChatRecordListList = function (value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};
/**
 * @param {!proto.blog_chat_record=} opt_value
 * @param {number=} opt_index
 * @return {!proto.blog_chat_record}
 */


proto.blog_chat_records.prototype.addBlogChatRecordList = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.blog_chat_record, opt_index);
};

proto.blog_chat_records.prototype.clearBlogChatRecordListList = function () {
  this.setBlogChatRecordListList([]);
};
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */


proto.blog_rooms = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.blog_rooms.repeatedFields_, null);
};

goog.inherits(proto.blog_rooms, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.blog_rooms.displayName = 'proto.blog_rooms';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */


proto.blog_rooms.repeatedFields_ = [3];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.blog_rooms.prototype.toObject = function (opt_includeInstance) {
    return proto.blog_rooms.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.blog_rooms} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.blog_rooms.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      code: jspb.Message.getFieldWithDefault(msg, 1, 0),
      msg: jspb.Message.getFieldWithDefault(msg, 2, ""),
      blogRoomListList: jspb.Message.toObjectList(msg.getBlogRoomListList(), blogArticle_pb.blog_room.toObject, includeInstance)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.blog_rooms}
 */


proto.blog_rooms.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blog_rooms();
  return proto.blog_rooms.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blog_rooms} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blog_rooms}
 */


proto.blog_rooms.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value =
        /** @type {!proto.error_codes} */
        reader.readEnum();
        msg.setCode(value);
        break;

      case 2:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setMsg(value);
        break;

      case 3:
        var value = new blogArticle_pb.blog_room();
        reader.readMessage(value, blogArticle_pb.blog_room.deserializeBinaryFromReader);
        msg.addBlogRoomList(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.blog_rooms.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.blog_rooms.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blog_rooms} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.blog_rooms.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getCode();

  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }

  f = message.getMsg();

  if (f.length > 0) {
    writer.writeString(2, f);
  }

  f = message.getBlogRoomListList();

  if (f.length > 0) {
    writer.writeRepeatedMessage(3, f, blogArticle_pb.blog_room.serializeBinaryToWriter);
  }
};
/**
 * optional error_codes code = 1;
 * @return {!proto.error_codes}
 */


proto.blog_rooms.prototype.getCode = function () {
  return (
    /** @type {!proto.error_codes} */
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};
/** @param {!proto.error_codes} value */


proto.blog_rooms.prototype.setCode = function (value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};
/**
 * optional string msg = 2;
 * @return {string}
 */


proto.blog_rooms.prototype.getMsg = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 2, "")
  );
};
/** @param {string} value */


proto.blog_rooms.prototype.setMsg = function (value) {
  jspb.Message.setProto3StringField(this, 2, value);
};
/**
 * repeated blog_room blog_room_list = 3;
 * @return {!Array.<!proto.blog_room>}
 */


proto.blog_rooms.prototype.getBlogRoomListList = function () {
  return (
    /** @type{!Array.<!proto.blog_room>} */
    jspb.Message.getRepeatedWrapperField(this, blogArticle_pb.blog_room, 3)
  );
};
/** @param {!Array.<!proto.blog_room>} value */


proto.blog_rooms.prototype.setBlogRoomListList = function (value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};
/**
 * @param {!proto.blog_room=} opt_value
 * @param {number=} opt_index
 * @return {!proto.blog_room}
 */


proto.blog_rooms.prototype.addBlogRoomList = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.blog_room, opt_index);
};

proto.blog_rooms.prototype.clearBlogRoomListList = function () {
  this.setBlogRoomListList([]);
};

goog.object.extend(exports, proto);

/***/ }),

/***/ "./utils/blog_types.js":
/*!*****************************!*\
  !*** ./utils/blog_types.js ***!
  \*****************************/
/*! exports provided: getTpValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTpValue", function() { return getTpValue; });
var tps = [{
  label: "笔记",
  value: 1
}, {
  label: "原创",
  value: 3
}, {
  label: "小感想",
  value: 2
}];
var getTpValue = function getTpValue(tp) {
  var finded = tps.find(function (item) {
    return item.value == tp;
  });

  if (finded) {
    return finded.label;
  }

  return "";
};

/***/ }),

/***/ "./utils/config.js":
/*!*************************!*\
  !*** ./utils/config.js ***!
  \*************************/
/*! exports provided: apiHost, avatars */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiHost", function() { return apiHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "avatars", function() { return avatars; });
// let apiHost = "//localhost:29000"
// let apiHost = "//momoman.cn"
var apiHost = "//140.143.188.219:14001"; //let apiHost = "//10.163.85.169:8888"
// if(location.domain == "www.momoman.cn"){
//     apiHost = "http://127.0.0.1:9000"
// }

var avatars = ['/static/images/avatars/tx2.jpg', '/static/images/avatars/tx3.jpg', '/static/images/avatars/tx4.jpg', '/static/images/avatars/tx5.jpg', '/static/images/avatars/tx6.jpg', '/static/images/avatars/tx7.jpg', '/static/images/avatars/tx8.jpg', '/static/images/avatars/tx9.jpg', '/static/images/avatars/tx10.jpg'];


/***/ }),

/***/ "./utils/emiter.js":
/*!*************************!*\
  !*** ./utils/emiter.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Event = {
  // 通过on接口监听事件eventName
  // 如果事件eventName被触发，则执行callback回调函数
  on: function on(eventName, callback) {
    console.log("onnnn");

    if (!this.handles) {
      this.handles = {};
      Object.defineProperty(this, "handles", {
        //限制下方Object.assign浅拷贝枚举对象
        value: {},
        enumerable: false,
        configurable: true,
        writable: true
      });
    }

    if (!this.handles[eventName]) {
      this.handles[eventName] = [];
    }

    this.handles[eventName].push(callback);
  },
  // 触发事件 eventName
  emit: function emit(eventName) {
    //你的代码
    if (this.handles && this.handles[arguments[0]]) {
      for (var i = 0; i < this.handles[arguments[0]].length; i++) {
        this.handles[arguments[0]][i](arguments[1]);
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Event);

/***/ }),

/***/ "./utils/util.js":
/*!***********************!*\
  !*** ./utils/util.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return readStream; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _proto_blog_pb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../proto/blog_pb */ "./proto/blog_pb.js");
/* harmony import */ var _proto_blog_pb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_proto_blog_pb__WEBPACK_IMPORTED_MODULE_3__);




function readStream(stream) {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve, reject) {
    var reader = new FileReader();
    reader.readAsArrayBuffer(stream);

    reader.onload =
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(evt) {
        var data;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (evt.target.readyState == FileReader.DONE) {
                  data = new Uint8Array(evt.target.result);
                  resolve(data);
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
  });
}

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/detail.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/justin/Desktop/my/mobile_simple/pages/detail.js */"./pages/detail.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/reflect/construct":
/*!*******************************************************!*\
  !*** external "core-js/library/fn/reflect/construct" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "google-protobuf":
/*!**********************************!*\
  !*** external "google-protobuf" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("google-protobuf");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next-server/head":
/*!***********************************!*\
  !*** external "next-server/head" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=detail.js.map