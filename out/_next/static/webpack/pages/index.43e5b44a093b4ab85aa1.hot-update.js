webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_mini_PhpstormProjects_next_search_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_mini_PhpstormProjects_next_search_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_mini_PhpstormProjects_next_search_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_mini_PhpstormProjects_next_search_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/mini/PhpstormProjects/next-search/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Index = function Index() {\n  _s();\n\n  var cleanData = [];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      results = _useState[0],\n      setResults = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])('react'),\n      query = _useState2[0],\n      setQuery = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    getResults();\n  }, []);\n\n  var getResults = /*#__PURE__*/function () {\n    var _ref = Object(_Users_mini_PhpstormProjects_next_search_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_mini_PhpstormProjects_next_search_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var response;\n      return _Users_mini_PhpstormProjects_next_search_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(\"https://hn.algolia.com/api/v1/search?query=\".concat(query)).then(function (response) {\n                response.data.hits.map(function (hit) {\n                  if (hit.url != null) {\n                    cleanData.push(hit);\n                  }\n                });\n                setResults(cleanData);\n              });\n\n            case 2:\n              response = _context.sent;\n\n            case 3:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getResults() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var handleSearch = function handleSearch(event) {\n    event.preventDefault();\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n      children: \"search\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 12\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"form\", {\n      onSubmit: handleSearch,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        onChange: function onChange(event) {\n          return setQuery(event.target.value);\n        },\n        value: query\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 16\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n        type: \"submit\",\n        children: \"Search\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 16\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 12\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"ul\", {\n      children: results.map(function (result) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"li\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n            href: result.url,\n            prefetch: false,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n              children: result.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 48,\n              columnNumber: 28\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 24\n          }, _this)\n        }, result.objectID, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 20\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 12\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Index, \"D9+ChyuAGpZK54W11WoSO+2TMs0=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsImNsZWFuRGF0YSIsInVzZVN0YXRlIiwicmVzdWx0cyIsInNldFJlc3VsdHMiLCJxdWVyeSIsInNldFF1ZXJ5IiwidXNlRWZmZWN0IiwiZ2V0UmVzdWx0cyIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImhpdHMiLCJtYXAiLCJoaXQiLCJ1cmwiLCJwdXNoIiwiaGFuZGxlU2VhcmNoIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIiwicmVzdWx0IiwidGl0bGUiLCJvYmplY3RJRCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDaEIsTUFBTUMsU0FBUyxHQUFHLEVBQWxCOztBQURnQixrQkFFY0Msc0RBQVEsQ0FBQyxFQUFELENBRnRCO0FBQUEsTUFFVEMsT0FGUztBQUFBLE1BRUFDLFVBRkE7O0FBQUEsbUJBR1VGLHNEQUFRLENBQUMsT0FBRCxDQUhsQjtBQUFBLE1BR1RHLEtBSFM7QUFBQSxNQUdGQyxRQUhFOztBQUtoQkMseURBQVMsQ0FBQyxZQUFLO0FBQ1BDLGNBQVU7QUFDakIsR0FGUSxFQUVQLEVBRk8sQ0FBVDs7QUFJQSxNQUFNQSxVQUFVO0FBQUEsMFNBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDUUMsNENBQUssQ0FBQ0MsR0FBTixzREFBd0RMLEtBQXhELEdBQ2xCTSxJQURrQixDQUNiLFVBQUFDLFFBQVEsRUFBSTtBQUNkQSx3QkFBUSxDQUFDQyxJQUFULENBQWNDLElBQWQsQ0FBbUJDLEdBQW5CLENBQXVCLFVBQUFDLEdBQUcsRUFBSTtBQUMxQixzQkFBR0EsR0FBRyxDQUFDQyxHQUFKLElBQVcsSUFBZCxFQUFvQjtBQUNoQmhCLDZCQUFTLENBQUNpQixJQUFWLENBQWVGLEdBQWY7QUFDSDtBQUNKLGlCQUpEO0FBS0FaLDBCQUFVLENBQUNILFNBQUQsQ0FBVjtBQUNILGVBUmtCLENBRFI7O0FBQUE7QUFDVFcsc0JBRFM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVkosVUFBVTtBQUFBO0FBQUE7QUFBQSxLQUFoQjs7QUFZQSxNQUFNVyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBQyxLQUFLLEVBQUk7QUFDMUJBLFNBQUssQ0FBQ0MsY0FBTjtBQUNILEdBRkQ7O0FBSUEsc0JBQ0c7QUFBQSw0QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBTSxjQUFRLEVBQUVGLFlBQWhCO0FBQUEsOEJBQ0k7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUNPLGdCQUFRLEVBQUUsa0JBQUFDLEtBQUs7QUFBQSxpQkFBSWQsUUFBUSxDQUFDYyxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsS0FBZCxDQUFaO0FBQUEsU0FEdEI7QUFFTyxhQUFLLEVBQUVsQjtBQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUtJO0FBQ0ksWUFBSSxFQUFDLFFBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixlQWFJO0FBQUEsZ0JBQ0tGLE9BQU8sQ0FBQ1ksR0FBUixDQUFZLFVBQUFTLE1BQU07QUFBQSw0QkFDZjtBQUFBLGlDQUNJLHFFQUFDLGdEQUFEO0FBQU0sZ0JBQUksRUFBRUEsTUFBTSxDQUFDUCxHQUFuQjtBQUF3QixvQkFBUSxFQUFFLEtBQWxDO0FBQUEsbUNBQ0k7QUFBQSx3QkFBSU8sTUFBTSxDQUFDQztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosV0FBU0QsTUFBTSxDQUFDRSxRQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURlO0FBQUEsT0FBbEI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYko7QUFBQSxrQkFESDtBQTBCSCxDQW5ERDs7R0FBTTFCLEs7O0tBQUFBLEs7QUFxRFNBLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gICAgY29uc3QgY2xlYW5EYXRhID0gW107XG4gICAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gdXNlU3RhdGUoW10pXG4gICAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZSgncmVhY3QnKVxuXG4gICAgdXNlRWZmZWN0KCgpPT4ge1xuICAgICAgICAgICAgZ2V0UmVzdWx0cygpO1xuICAgIH0sW10pXG5cbiAgICBjb25zdCBnZXRSZXN1bHRzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9obi5hbGdvbGlhLmNvbS9hcGkvdjEvc2VhcmNoP3F1ZXJ5PSR7cXVlcnl9YClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLmhpdHMubWFwKGhpdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGhpdC51cmwgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYW5EYXRhLnB1c2goaGl0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgc2V0UmVzdWx0cyhjbGVhbkRhdGEpO1xuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTZWFyY2ggPSBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgIDw+XG4gICAgICAgICAgIDxoMT5zZWFyY2g8L2gxPlxuICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU2VhcmNofT5cbiAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHNldFF1ZXJ5KGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5fVxuICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcblxuICAgICAgICAgICAgICAgICAgID5TZWFyY2hcbiAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgIHtyZXN1bHRzLm1hcChyZXN1bHQgPT4gKFxuICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3Jlc3VsdC5vYmplY3RJRH0+XG4gICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Jlc3VsdC51cmx9IHByZWZldGNoPXtmYWxzZX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3Jlc3VsdC50aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgKSl9XG5cbiAgICAgICAgICAgPC91bD5cbiAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})