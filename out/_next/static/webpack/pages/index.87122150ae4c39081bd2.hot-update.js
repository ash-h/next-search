webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _jsxFileName = \"/Users/mini/PhpstormProjects/next-search/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Index = function Index() {\n  _s();\n\n  var cleanData = [];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      results = _useState[0],\n      setResults = _useState[1];\n\n  setResults(cleanData);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('https://hn.algolia.com/api/v1/search?query=reacthooks').then(function (response) {\n      console.log(response.data);\n      response.data.hits.map(function (hit) {\n        if (hit.url != null) {\n          cleanData.push(hit);\n        }\n      });\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"ho\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 12\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: results.map(function (result) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: [console.log(result.url), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n            href: result.title,\n            prefetch: false,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              children: result.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 32,\n              columnNumber: 28\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 24\n          }, _this)]\n        }, result.objectID, true, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 20\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 12\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Index, \"0Oir8sO9qj6087fqVYj2OrfQH1E=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsImNsZWFuRGF0YSIsInVzZVN0YXRlIiwicmVzdWx0cyIsInNldFJlc3VsdHMiLCJ1c2VFZmZlY3QiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiaGl0cyIsIm1hcCIsImhpdCIsInVybCIsInB1c2giLCJyZXN1bHQiLCJ0aXRsZSIsIm9iamVjdElEIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDaEIsTUFBTUMsU0FBUyxHQUFHLEVBQWxCOztBQURnQixrQkFFY0Msc0RBQVEsQ0FBQyxFQUFELENBRnRCO0FBQUEsTUFFVEMsT0FGUztBQUFBLE1BRUFDLFVBRkE7O0FBR2hCQSxZQUFVLENBQUNILFNBQUQsQ0FBVjtBQUNBSSx5REFBUyxDQUFDLFlBQUs7QUFDWEMsZ0RBQUssQ0FBQ0MsR0FBTixDQUFVLHVEQUFWLEVBQ0tDLElBREwsQ0FDVSxVQUFBQyxRQUFRLEVBQUk7QUFDZEMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVEsQ0FBQ0csSUFBckI7QUFDQUgsY0FBUSxDQUFDRyxJQUFULENBQWNDLElBQWQsQ0FBbUJDLEdBQW5CLENBQXVCLFVBQUFDLEdBQUcsRUFBSTtBQUMxQixZQUFHQSxHQUFHLENBQUNDLEdBQUosSUFBVyxJQUFkLEVBQW9CO0FBQ2hCZixtQkFBUyxDQUFDZ0IsSUFBVixDQUFlRixHQUFmO0FBQ0g7QUFDSixPQUpEO0FBTUgsS0FUTDtBQVVILEdBWFEsRUFXUCxFQVhPLENBQVQ7QUFlQSxzQkFDRztBQUFBLDRCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFBLGdCQUNLWixPQUFPLENBQUNXLEdBQVIsQ0FBWSxVQUFBSSxNQUFNO0FBQUEsNEJBQ2Y7QUFBQSxxQkFDS1IsT0FBTyxDQUFDQyxHQUFSLENBQVlPLE1BQU0sQ0FBQ0YsR0FBbkIsQ0FETCxlQUVJLHFFQUFDLGdEQUFEO0FBQU0sZ0JBQUksRUFBRUUsTUFBTSxDQUFDQyxLQUFuQjtBQUEwQixvQkFBUSxFQUFFLEtBQXBDO0FBQUEsbUNBQ0k7QUFBQSx3QkFBSUQsTUFBTSxDQUFDQztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUEsV0FBU0QsTUFBTSxDQUFDRSxRQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURlO0FBQUEsT0FBbEI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRko7QUFBQSxrQkFESDtBQWdCSCxDQW5DRDs7R0FBTXBCLEs7O0tBQUFBLEs7QUFxQ1NBLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gICAgY29uc3QgY2xlYW5EYXRhID0gW107XG4gICAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gdXNlU3RhdGUoW10pXG4gICAgc2V0UmVzdWx0cyhjbGVhbkRhdGEpO1xuICAgIHVzZUVmZmVjdCgoKT0+IHtcbiAgICAgICAgYXhpb3MuZ2V0KCdodHRwczovL2huLmFsZ29saWEuY29tL2FwaS92MS9zZWFyY2g/cXVlcnk9cmVhY3Rob29rcycpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5oaXRzLm1hcChoaXQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZihoaXQudXJsICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFuRGF0YS5wdXNoKGhpdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB9KVxuICAgIH0sW10pXG5cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICA8PlxuICAgICAgICAgICA8cD5obzwvcD5cbiAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAge3Jlc3VsdHMubWFwKHJlc3VsdCA9PiAoXG4gICAgICAgICAgICAgICAgICAgPGxpIGtleT17cmVzdWx0Lm9iamVjdElEfT5cbiAgICAgICAgICAgICAgICAgICAgICAge2NvbnNvbGUubG9nKHJlc3VsdC51cmwpfVxuICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtyZXN1bHQudGl0bGV9IHByZWZldGNoPXtmYWxzZX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3Jlc3VsdC50aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgKSl9XG5cbiAgICAgICAgICAgPC91bD5cbiAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})