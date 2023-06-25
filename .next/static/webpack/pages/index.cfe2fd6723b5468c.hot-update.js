/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ExperienceCard.tsx":
/*!***************************************!*\
  !*** ./components/ExperienceCard.tsx ***!
  \***************************************/
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

/***/ "./components/WorkExperience.tsx":
/*!***************************************!*\
  !*** ./components/WorkExperience.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _ExperienceCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExperienceCard */ \"./components/ExperienceCard.tsx\");\n/* harmony import */ var _ExperienceCard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ExperienceCard__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction WorkExperience(param) {\n    let {} = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        initial: {\n            opacity: 0\n        },\n        whileInView: {\n            opacity: 1\n        },\n        transition: {\n            duration: 1.5\n        },\n        className: \"h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl\",\n                children: \"Experience\"\n            }, void 0, false, {\n                fileName: \"/Users/dior/webdev-portfolio-2.0/components/WorkExperience.tsx\",\n                lineNumber: 14,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_ExperienceCard__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {\n                        fileName: \"/Users/dior/webdev-portfolio-2.0/components/WorkExperience.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_ExperienceCard__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {\n                        fileName: \"/Users/dior/webdev-portfolio-2.0/components/WorkExperience.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dior/webdev-portfolio-2.0/components/WorkExperience.tsx\",\n                lineNumber: 19,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dior/webdev-portfolio-2.0/components/WorkExperience.tsx\",\n        lineNumber: 9,\n        columnNumber: 3\n    }, this);\n}\n_c = WorkExperience;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WorkExperience);\nvar _c;\n$RefreshReg$(_c, \"WorkExperience\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1dvcmtFeHBlcmllbmNlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUI7QUFDYztBQUNPO0FBSTlDLFNBQVNHLGVBQWUsS0FBUztRQUFULEVBQVMsR0FBVDtJQUN0QixxQkFDQSw4REFBQ0YsaURBQU1BLENBQUNHO1FBQ1JDLFNBQVM7WUFBRUMsU0FBUztRQUFFO1FBQ3RCQyxhQUFhO1lBQUVELFNBQVM7UUFBRTtRQUMxQkUsWUFBWTtZQUFFQyxVQUFVO1FBQUk7UUFDNUJDLFdBQVU7OzBCQUNSLDhEQUFDQztnQkFDREQsV0FBVTswQkFBbUU7Ozs7OzswQkFJN0UsOERBQUNOOztrQ0FDQyw4REFBQ0Ysd0RBQWNBOzs7OztrQ0FDZiw4REFBQ0Esd0RBQWNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlyQjtLQWxCU0M7QUFvQlQsK0RBQWVBLGNBQWNBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Xb3JrRXhwZXJpZW5jZS50c3g/YTZiMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBFeHBlcmllbmNlQ2FyZCBmcm9tICcuL0V4cGVyaWVuY2VDYXJkJztcblxudHlwZSBQcm9wcyA9IHt9XG5cbmZ1bmN0aW9uIFdvcmtFeHBlcmllbmNlKHt9OiBQcm9wcykge1xuICByZXR1cm4gKFxuICA8bW90aW9uLmRpdlxuICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSB9fVxuICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAxLjUgfX0gXG4gIGNsYXNzTmFtZT0naC1zY3JlZW4gZmxleCByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gZmxleC1jb2wgdGV4dC1sZnQgbWQ6ZmxleC1yb3cgbWF4LXctZnVsbCBweC0xMCBqdXN0aWZ5LWV2ZW5seSBteC1hdXRvIGl0ZW1zLWNlbnRlcic+XG4gICAgPGgzIFxuICAgIGNsYXNzTmFtZT0nYWJzb2x1dGUgdG9wLTI0IHVwcGVyY2FzZSB0cmFja2luZy1bMjBweF0gdGV4dC1ncmF5LTUwMCB0ZXh0LTJ4bCc+XG4gICAgICBFeHBlcmllbmNlXG4gICAgPC9oMz5cblxuICAgIDxkaXY+XG4gICAgICA8RXhwZXJpZW5jZUNhcmQgLz5cbiAgICAgIDxFeHBlcmllbmNlQ2FyZCAvPlxuICAgIDwvZGl2PlxuICA8L21vdGlvbi5kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdvcmtFeHBlcmllbmNlIl0sIm5hbWVzIjpbIlJlYWN0IiwibW90aW9uIiwiRXhwZXJpZW5jZUNhcmQiLCJXb3JrRXhwZXJpZW5jZSIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5Iiwid2hpbGVJblZpZXciLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJjbGFzc05hbWUiLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/WorkExperience.tsx\n"));

/***/ })

});