webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _jsxFileName = \"/Users/mini/PhpstormProjects/next-search/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Index = function Index() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      results = _useState[0],\n      setResults = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('https://hn.algolia.com/api/v1/search?query=reacthooks').then(function (response) {\n      console.log(response.data);\n      setResults(response.data.hits);\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"ho\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 12\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: results.map(function (result) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n            href: \"{result.url}\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              children: result.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 26,\n              columnNumber: 25\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 24\n          }, _this)\n        }, result.objectID, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 20\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 12\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Index, \"0Oir8sO9qj6087fqVYj2OrfQH1E=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsInVzZVN0YXRlIiwicmVzdWx0cyIsInNldFJlc3VsdHMiLCJ1c2VFZmZlY3QiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiaGl0cyIsIm1hcCIsInJlc3VsdCIsInRpdGxlIiwib2JqZWN0SUQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUVjQyxzREFBUSxDQUFDLEVBQUQsQ0FGdEI7QUFBQSxNQUVUQyxPQUZTO0FBQUEsTUFFQUMsVUFGQTs7QUFJaEJDLHlEQUFTLENBQUMsWUFBSztBQUNYQyxnREFBSyxDQUFDQyxHQUFOLENBQVUsdURBQVYsRUFDS0MsSUFETCxDQUNVLFVBQUFDLFFBQVEsRUFBSTtBQUNkQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBUSxDQUFDRyxJQUFyQjtBQUNBUixnQkFBVSxDQUFDSyxRQUFRLENBQUNHLElBQVQsQ0FBY0MsSUFBZixDQUFWO0FBQ0gsS0FKTDtBQUtILEdBTlEsRUFNUCxFQU5PLENBQVQ7QUFVQSxzQkFDRztBQUFBLDRCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFBLGdCQUNLVixPQUFPLENBQUNXLEdBQVIsQ0FBWSxVQUFBQyxNQUFNO0FBQUEsNEJBQ2Y7QUFBQSxpQ0FDSSxxRUFBQyxnREFBRDtBQUFNLGdCQUFJLEVBQUMsY0FBWDtBQUFBLG1DQUNDO0FBQUEsd0JBQUlBLE1BQU0sQ0FBQ0M7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLFdBQVNELE1BQU0sQ0FBQ0UsUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEZTtBQUFBLE9BQWxCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKO0FBQUEsa0JBREg7QUFlSCxDQTdCRDs7R0FBTWhCLEs7O0tBQUFBLEs7QUErQlNBLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbcmVzdWx0cywgc2V0UmVzdWx0c10gPSB1c2VTdGF0ZShbXSlcblxuICAgIHVzZUVmZmVjdCgoKT0+IHtcbiAgICAgICAgYXhpb3MuZ2V0KCdodHRwczovL2huLmFsZ29saWEuY29tL2FwaS92MS9zZWFyY2g/cXVlcnk9cmVhY3Rob29rcycpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgc2V0UmVzdWx0cyhyZXNwb25zZS5kYXRhLmhpdHMpO1xuICAgICAgICAgICAgfSlcbiAgICB9LFtdKVxuXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgPD5cbiAgICAgICAgICAgPHA+aG88L3A+XG4gICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgIHtyZXN1bHRzLm1hcChyZXN1bHQgPT4gKFxuICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3Jlc3VsdC5vYmplY3RJRH0+XG4gICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJ7cmVzdWx0LnVybH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPntyZXN1bHQudGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICkpfVxuXG4gICAgICAgICAgIDwvdWw+XG4gICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})