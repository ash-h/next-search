webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_mini_PhpstormProjects_next_search_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_mini_PhpstormProjects_next_search_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_mini_PhpstormProjects_next_search_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_mini_PhpstormProjects_next_search_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/mini/PhpstormProjects/next-search/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Index = function Index() {\n  _s();\n\n  var cleanData = [];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      results = _useState[0],\n      setResults = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(''),\n      query = _useState2[0],\n      setQuery = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      loading = _useState3[0],\n      setLoading = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null),\n      error = _useState4[0],\n      setError = _useState4[1];\n\n  var searchInputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    getResults();\n  }, []);\n\n  var getResults = /*#__PURE__*/function () {\n    var _ref = Object(_Users_mini_PhpstormProjects_next_search_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_mini_PhpstormProjects_next_search_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var response;\n      return _Users_mini_PhpstormProjects_next_search_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              setLoading(true);\n              _context.prev = 1;\n              _context.next = 4;\n              return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(\"https://hn.algolia.com/api/v1/search?query=\".concat(query)).then(function (response) {\n                response.data.hits.map(function (hit) {\n                  if (hit.url != null) {\n                    cleanData.push(hit);\n                  }\n                });\n                setResults(cleanData);\n              });\n\n            case 4:\n              response = _context.sent;\n              _context.next = 9;\n              break;\n\n            case 7:\n              _context.prev = 7;\n              _context.t0 = _context[\"catch\"](1);\n\n            case 9:\n              setLoading(false);\n\n            case 10:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[1, 7]]);\n    }));\n\n    return function getResults() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var handleSearch = function handleSearch(event) {\n    event.preventDefault();\n    getResults();\n  };\n\n  var handleClearSearch = function handleClearSearch() {\n    setQuery(\"\");\n    searchInputRef.current.focus();\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n      children: \"search\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 12\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"form\", {\n      onSubmit: handleSearch,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        onChange: function onChange(event) {\n          return setQuery(event.target.value);\n        },\n        value: query,\n        placeholder: \"enter search term\",\n        ref: searchInputRef\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 16\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n        type: \"submit\",\n        children: \"Search\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 16\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n        type: \"button\",\n        onClick: handleClearSearch,\n        children: \"clear\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 16\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 12\n    }, _this), loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      children: \"Loading\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 16\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"ul\", {\n      children: results.map(function (result) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"li\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n            href: result.url,\n            prefetch: false,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n              children: result.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 70,\n              columnNumber: 28\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 24\n          }, _this)\n        }, result.objectID, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 20\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 16\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Index, \"pbYdx6IFeZxpjt7rKvECgqgAP3k=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsImNsZWFuRGF0YSIsInVzZVN0YXRlIiwicmVzdWx0cyIsInNldFJlc3VsdHMiLCJxdWVyeSIsInNldFF1ZXJ5IiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwic2VhcmNoSW5wdXRSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJnZXRSZXN1bHRzIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiaGl0cyIsIm1hcCIsImhpdCIsInVybCIsInB1c2giLCJoYW5kbGVTZWFyY2giLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQ2xlYXJTZWFyY2giLCJjdXJyZW50IiwiZm9jdXMiLCJ0YXJnZXQiLCJ2YWx1ZSIsInJlc3VsdCIsInRpdGxlIiwib2JqZWN0SUQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQ2hCLE1BQU1DLFNBQVMsR0FBRyxFQUFsQjs7QUFEZ0Isa0JBRWNDLHNEQUFRLENBQUMsRUFBRCxDQUZ0QjtBQUFBLE1BRVRDLE9BRlM7QUFBQSxNQUVBQyxVQUZBOztBQUFBLG1CQUdVRixzREFBUSxDQUFDLEVBQUQsQ0FIbEI7QUFBQSxNQUdURyxLQUhTO0FBQUEsTUFHRkMsUUFIRTs7QUFBQSxtQkFJYUosc0RBQVEsQ0FBQyxLQUFELENBSnJCO0FBQUEsTUFJVEssT0FKUztBQUFBLE1BSURDLFVBSkM7O0FBQUEsbUJBS1dOLHNEQUFRLENBQUMsSUFBRCxDQUxuQjtBQUFBLE1BS1RPLEtBTFM7QUFBQSxNQUtEQyxRQUxDOztBQU1oQixNQUFNQyxjQUFjLEdBQUdDLG9EQUFNLEVBQTdCO0FBRUFDLHlEQUFTLENBQUMsWUFBSztBQUNQQyxjQUFVO0FBQ2pCLEdBRlEsRUFFUCxFQUZPLENBQVQ7O0FBSUEsTUFBTUEsVUFBVTtBQUFBLDBTQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNmTix3QkFBVSxDQUFDLElBQUQsQ0FBVjtBQURlO0FBQUE7QUFBQSxxQkFJUU8sNENBQUssQ0FBQ0MsR0FBTixzREFBd0RYLEtBQXhELEdBQ2xCWSxJQURrQixDQUNiLFVBQUFDLFFBQVEsRUFBSTtBQUNkQSx3QkFBUSxDQUFDQyxJQUFULENBQWNDLElBQWQsQ0FBbUJDLEdBQW5CLENBQXVCLFVBQUFDLEdBQUcsRUFBSTtBQUMxQixzQkFBSUEsR0FBRyxDQUFDQyxHQUFKLElBQVcsSUFBZixFQUFxQjtBQUNqQnRCLDZCQUFTLENBQUN1QixJQUFWLENBQWVGLEdBQWY7QUFDSDtBQUNKLGlCQUpEO0FBS0FsQiwwQkFBVSxDQUFDSCxTQUFELENBQVY7QUFDSCxlQVJrQixDQUpSOztBQUFBO0FBSVRpQixzQkFKUztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBZVBWLHdCQUFVLENBQUMsS0FBRCxDQUFWOztBQWZPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVZNLFVBQVU7QUFBQTtBQUFBO0FBQUEsS0FBaEI7O0FBbUJBLE1BQU1XLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFDLEtBQUssRUFBSTtBQUMxQkEsU0FBSyxDQUFDQyxjQUFOO0FBQ0FiLGNBQVU7QUFDYixHQUhEOztBQUtBLE1BQU1jLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBSztBQUMzQnRCLFlBQVEsQ0FBQyxFQUFELENBQVI7QUFDQUssa0JBQWMsQ0FBQ2tCLE9BQWYsQ0FBdUJDLEtBQXZCO0FBQ0gsR0FIRDs7QUFLQSxzQkFDRztBQUFBLDRCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFNLGNBQVEsRUFBRUwsWUFBaEI7QUFBQSw4QkFDSTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQ08sZ0JBQVEsRUFBRSxrQkFBQUMsS0FBSztBQUFBLGlCQUFJcEIsUUFBUSxDQUFDb0IsS0FBSyxDQUFDSyxNQUFOLENBQWFDLEtBQWQsQ0FBWjtBQUFBLFNBRHRCO0FBRU8sYUFBSyxFQUFFM0IsS0FGZDtBQUdPLG1CQUFXLEVBQUMsbUJBSG5CO0FBSU8sV0FBRyxFQUFFTTtBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQU9JO0FBQ0ksWUFBSSxFQUFDLFFBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQSixlQVdJO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFDUyxlQUFPLEVBQUVpQixpQkFEbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixFQWdCS3JCLE9BQU8sZ0JBQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESSxnQkFHSjtBQUFBLGdCQUNDSixPQUFPLENBQUNrQixHQUFSLENBQVksVUFBQVksTUFBTTtBQUFBLDRCQUNmO0FBQUEsaUNBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSxFQUFFQSxNQUFNLENBQUNWLEdBQW5CO0FBQXdCLG9CQUFRLEVBQUUsS0FBbEM7QUFBQSxtQ0FDSTtBQUFBLHdCQUFJVSxNQUFNLENBQUNDO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixXQUFTRCxNQUFNLENBQUNFLFFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGU7QUFBQSxPQUFsQjtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuQlI7QUFBQSxrQkFESDtBQWdDSCxDQXpFRDs7R0FBTW5DLEs7O0tBQUFBLEs7QUEyRVNBLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgICBjb25zdCBjbGVhbkRhdGEgPSBbXTtcbiAgICBjb25zdCBbcmVzdWx0cywgc2V0UmVzdWx0c10gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtsb2FkaW5nLHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW2Vycm9yICwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbClcbiAgICBjb25zdCBzZWFyY2hJbnB1dFJlZiA9IHVzZVJlZigpXG5cbiAgICB1c2VFZmZlY3QoKCk9PiB7XG4gICAgICAgICAgICBnZXRSZXN1bHRzKCk7XG4gICAgfSxbXSlcblxuICAgIGNvbnN0IGdldFJlc3VsdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgICAgdHJ5IHtcblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9obi5hbGdvbGlhLmNvbS9hcGkvdjEvc2VhcmNoP3F1ZXJ5PSR7cXVlcnl9YClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLmhpdHMubWFwKGhpdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChoaXQudXJsICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFuRGF0YS5wdXNoKGhpdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHNldFJlc3VsdHMoY2xlYW5EYXRhKTtcbiAgICAgICAgICAgIH0pfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcblxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVNlYXJjaCA9IGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICBnZXRSZXN1bHRzKCk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQ2xlYXJTZWFyY2ggPSAoKT0+IHtcbiAgICAgICAgc2V0UXVlcnkoXCJcIik7XG4gICAgICAgIHNlYXJjaElucHV0UmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgIDw+XG4gICAgICAgICAgIDxoMT5zZWFyY2g8L2gxPlxuICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU2VhcmNofT5cbiAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHNldFF1ZXJ5KGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5fVxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW50ZXIgc2VhcmNoIHRlcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIHJlZj17c2VhcmNoSW5wdXRSZWZ9XG4gICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgID5TZWFyY2hcbiAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsZWFyU2VhcmNofT5jbGVhcjwvYnV0dG9uPlxuICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgPGRpdj5Mb2FkaW5nPC9kaXY+XG4gICAgICAgICAgICAgICApIDooXG4gICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICB7cmVzdWx0cy5tYXAocmVzdWx0ID0+IChcbiAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtyZXN1bHQub2JqZWN0SUR9PlxuICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtyZXN1bHQudXJsfSBwcmVmZXRjaD17ZmFsc2V9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntyZXN1bHQudGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICkpfVxuXG4gICAgICAgICAgIDwvdWw+KX1cbiAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})