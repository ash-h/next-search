webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _jsxFileName = \"/Users/mini/PhpstormProjects/next-search/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Index = function Index() {\n  _s();\n\n  var cleanData = [];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      results = _useState[0],\n      setResults = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('https://hn.algolia.com/api/v1/search?query=reacthooks').then(function (response) {\n      console.log(response.data);\n      response.data.hits.map(function (hit) {\n        if (hit.url != null) {\n          cleanData.push(hit);\n        }\n      });\n      setResults(cleanData);\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"ho\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 12\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: results.map(function (result) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: [console.log(result.url), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n            href: result.title,\n            prefetch: false,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              children: result.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 32,\n              columnNumber: 28\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 24\n          }, _this)]\n        }, result.objectID, true, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 20\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 12\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Index, \"0Oir8sO9qj6087fqVYj2OrfQH1E=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsImNsZWFuRGF0YSIsInVzZVN0YXRlIiwicmVzdWx0cyIsInNldFJlc3VsdHMiLCJ1c2VFZmZlY3QiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiaGl0cyIsIm1hcCIsImhpdCIsInVybCIsInB1c2giLCJyZXN1bHQiLCJ0aXRsZSIsIm9iamVjdElEIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDaEIsTUFBTUMsU0FBUyxHQUFHLEVBQWxCOztBQURnQixrQkFFY0Msc0RBQVEsQ0FBQyxFQUFELENBRnRCO0FBQUEsTUFFVEMsT0FGUztBQUFBLE1BRUFDLFVBRkE7O0FBSWhCQyx5REFBUyxDQUFDLFlBQUs7QUFDWEMsZ0RBQUssQ0FBQ0MsR0FBTixDQUFVLHVEQUFWLEVBQ0tDLElBREwsQ0FDVSxVQUFBQyxRQUFRLEVBQUk7QUFDZEMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVEsQ0FBQ0csSUFBckI7QUFDQUgsY0FBUSxDQUFDRyxJQUFULENBQWNDLElBQWQsQ0FBbUJDLEdBQW5CLENBQXVCLFVBQUFDLEdBQUcsRUFBSTtBQUMxQixZQUFHQSxHQUFHLENBQUNDLEdBQUosSUFBVyxJQUFkLEVBQW9CO0FBQ2hCZixtQkFBUyxDQUFDZ0IsSUFBVixDQUFlRixHQUFmO0FBQ0g7QUFDSixPQUpEO0FBS0FYLGdCQUFVLENBQUNILFNBQUQsQ0FBVjtBQUNILEtBVEw7QUFVSCxHQVhRLEVBV1AsRUFYTyxDQUFUO0FBZUEsc0JBQ0c7QUFBQSw0QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBQSxnQkFDS0UsT0FBTyxDQUFDVyxHQUFSLENBQVksVUFBQUksTUFBTTtBQUFBLDRCQUNmO0FBQUEscUJBQ0tSLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTyxNQUFNLENBQUNGLEdBQW5CLENBREwsZUFFSSxxRUFBQyxnREFBRDtBQUFNLGdCQUFJLEVBQUVFLE1BQU0sQ0FBQ0MsS0FBbkI7QUFBMEIsb0JBQVEsRUFBRSxLQUFwQztBQUFBLG1DQUNJO0FBQUEsd0JBQUlELE1BQU0sQ0FBQ0M7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBLFdBQVNELE1BQU0sQ0FBQ0UsUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEZTtBQUFBLE9BQWxCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKO0FBQUEsa0JBREg7QUFnQkgsQ0FuQ0Q7O0dBQU1wQixLOztLQUFBQSxLO0FBcUNTQSxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNsZWFuRGF0YSA9IFtdO1xuICAgIGNvbnN0IFtyZXN1bHRzLCBzZXRSZXN1bHRzXSA9IHVzZVN0YXRlKFtdKVxuXG4gICAgdXNlRWZmZWN0KCgpPT4ge1xuICAgICAgICBheGlvcy5nZXQoJ2h0dHBzOi8vaG4uYWxnb2xpYS5jb20vYXBpL3YxL3NlYXJjaD9xdWVyeT1yZWFjdGhvb2tzJylcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLmhpdHMubWFwKGhpdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGhpdC51cmwgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYW5EYXRhLnB1c2goaGl0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgc2V0UmVzdWx0cyhjbGVhbkRhdGEpO1xuICAgICAgICAgICAgfSlcbiAgICB9LFtdKVxuXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgPD5cbiAgICAgICAgICAgPHA+aG88L3A+XG4gICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgIHtyZXN1bHRzLm1hcChyZXN1bHQgPT4gKFxuICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3Jlc3VsdC5vYmplY3RJRH0+XG4gICAgICAgICAgICAgICAgICAgICAgIHtjb25zb2xlLmxvZyhyZXN1bHQudXJsKX1cbiAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cmVzdWx0LnRpdGxlfSBwcmVmZXRjaD17ZmFsc2V9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntyZXN1bHQudGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICkpfVxuXG4gICAgICAgICAgIDwvdWw+XG4gICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})