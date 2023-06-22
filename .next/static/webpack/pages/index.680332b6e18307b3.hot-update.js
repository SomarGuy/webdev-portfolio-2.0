/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/BackgroundCircles.tsx":
/*!******************************************!*\
  !*** ./components/BackgroundCircles.tsx ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./components/Hero.tsx":
/*!*****************************!*\
  !*** ./components/Hero.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Hero; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_simple_typewriter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-simple-typewriter */ \"./node_modules/react-simple-typewriter/dist/index.js\");\n/* harmony import */ var _BackgroundCircles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BackgroundCircles */ \"./components/BackgroundCircles.tsx\");\n/* harmony import */ var _BackgroundCircles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_BackgroundCircles__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Hero(param) {\n    let {} = param;\n    _s();\n    const [text, count] = (0,react_simple_typewriter__WEBPACK_IMPORTED_MODULE_2__.useTypewriter)({\n        words: [\n            \"Hi!, My Name's Diogo Ramos\",\n            \"PassionateDeveloper.tsx\",\n            \"Coffee-Is-My-Programming-Fuel\"\n        ],\n        loop: true,\n        delaySpeed: 2500\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_BackgroundCircles__WEBPACK_IMPORTED_MODULE_3___default()), {}, void 0, false, {\n                fileName: \"/Users/dior/webdev-portfolio-2.0/components/Hero.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: text\n                    }, void 0, false, {\n                        fileName: \"/Users/dior/webdev-portfolio-2.0/components/Hero.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_typewriter__WEBPACK_IMPORTED_MODULE_2__.Cursor, {\n                        cursorColor: \"#7DE2D1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dior/webdev-portfolio-2.0/components/Hero.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dior/webdev-portfolio-2.0/components/Hero.tsx\",\n                lineNumber: 20,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dior/webdev-portfolio-2.0/components/Hero.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_s(Hero, \"5sW9Ip2qqu+oy/44fHx9diYcHGg=\", false, function() {\n    return [\n        react_simple_typewriter__WEBPACK_IMPORTED_MODULE_2__.useTypewriter\n    ];\n});\n_c = Hero;\nvar _c;\n$RefreshReg$(_c, \"Hero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlcm8udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDc0M7QUFDWDtBQUlyQyxTQUFTSSxLQUFLLEtBQVM7UUFBVCxFQUFTLEdBQVQ7O0lBQzNCLE1BQU0sQ0FBQ0MsTUFBTUMsTUFBTSxHQUFHSixzRUFBYUEsQ0FBQztRQUNsQ0ssT0FBTztZQUNMO1lBQ0E7WUFDQTtTQUNIO1FBQ0RDLE1BQU07UUFDTkMsWUFBWTtJQUNaO0lBQ0EscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ1AsMkRBQWlCQTs7Ozs7MEJBQ3BCLDhEQUFDUTs7a0NBQ0MsOERBQUNDO2tDQUFNUDs7Ozs7O2tDQUNQLDhEQUFDSiwyREFBTUE7d0JBQUNZLGFBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsxQjtHQXBCd0JUOztRQUNBRixrRUFBYUE7OztLQURiRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlcm8udHN4P2U3NzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ3Vyc29yLCB1c2VUeXBld3JpdGVyIH0gZnJvbSAncmVhY3Qtc2ltcGxlLXR5cGV3cml0ZXInXG5pbXBvcnQgQmFja2dyb3VuZENpcmNsZXMgZnJvbSAnLi9CYWNrZ3JvdW5kQ2lyY2xlcyc7XG5cbnR5cGUgUHJvcHMgPSB7fVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZXJvKHt9OiBQcm9wcykge1xuICBjb25zdCBbdGV4dCwgY291bnRdID0gdXNlVHlwZXdyaXRlcih7XG4gICAgd29yZHM6IFtcbiAgICAgIFwiSGkhLCBNeSBOYW1lJ3MgRGlvZ28gUmFtb3NcIixcbiAgICAgIFwiUGFzc2lvbmF0ZURldmVsb3Blci50c3hcIixcbiAgICAgIFwiQ29mZmVlLUlzLU15LVByb2dyYW1taW5nLUZ1ZWxcIixcbiAgXSxcbiAgbG9vcDogdHJ1ZSxcbiAgZGVsYXlTcGVlZDogMjUwMCxcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxCYWNrZ3JvdW5kQ2lyY2xlcyAvPlxuICAgIDxoMT5cbiAgICAgIDxzcGFuPnt0ZXh0fTwvc3Bhbj5cbiAgICAgIDxDdXJzb3IgY3Vyc29yQ29sb3I9JyM3REUyRDEnPjwvQ3Vyc29yPlxuICAgIDwvaDE+XG4gIDwvZGl2PlxuICApO1xuICBcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkN1cnNvciIsInVzZVR5cGV3cml0ZXIiLCJCYWNrZ3JvdW5kQ2lyY2xlcyIsIkhlcm8iLCJ0ZXh0IiwiY291bnQiLCJ3b3JkcyIsImxvb3AiLCJkZWxheVNwZWVkIiwiZGl2IiwiaDEiLCJzcGFuIiwiY3Vyc29yQ29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Hero.tsx\n"));

/***/ })

});