/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Skills.tsx":
/*!*******************************!*\
  !*** ./components/Skills.tsx ***!
  \*******************************/
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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Header */ \"./components/Header.tsx\");\n/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Hero */ \"./components/Hero.tsx\");\n/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/About */ \"./components/About.tsx\");\n/* harmony import */ var _components_WorkExperience__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/WorkExperience */ \"./components/WorkExperience.tsx\");\n/* harmony import */ var _components_Skills__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Skills */ \"./components/Skills.tsx\");\n/* harmony import */ var _components_Skills__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_Skills__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nconst Home = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Diogo's Portfolio\"\n                }, void 0, false, {\n                    fileName: \"/Users/dior/webdev-portfolio-2.0/pages/index.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/dior/webdev-portfolio-2.0/pages/index.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/dior/webdev-portfolio-2.0/pages/index.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"hero\",\n                className: \"snap-start\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Hero__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/dior/webdev-portfolio-2.0/pages/index.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/dior/webdev-portfolio-2.0/pages/index.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"about\",\n                className: \"snap-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_About__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/dior/webdev-portfolio-2.0/pages/index.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/dior/webdev-portfolio-2.0/pages/index.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"experience\",\n                className: \"snap-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_WorkExperience__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/dior/webdev-portfolio-2.0/pages/index.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/dior/webdev-portfolio-2.0/pages/index.tsx\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"skills\",\n                className: \"snap-start\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_Skills__WEBPACK_IMPORTED_MODULE_6___default()), {}, void 0, false, {\n                    fileName: \"/Users/dior/webdev-portfolio-2.0/pages/index.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/dior/webdev-portfolio-2.0/pages/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dior/webdev-portfolio-2.0/pages/index.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTRCO0FBRVk7QUFDSjtBQUNFO0FBQ2tCO0FBQ2hCO0FBRXhDLE1BQU1NLE9BQWlCO0lBQ3JCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ1Isa0RBQUlBOzBCQUNILDRFQUFDUzs4QkFBTTs7Ozs7Ozs7Ozs7MEJBSVQsOERBQUNSLDBEQUFNQTs7Ozs7MEJBRVAsOERBQUNTO2dCQUFRQyxJQUFHO2dCQUFPSCxXQUFVOzBCQUMzQiw0RUFBQ04sd0RBQUlBOzs7Ozs7Ozs7OzBCQUlQLDhEQUFDUTtnQkFBUUMsSUFBRztnQkFBUUgsV0FBVTswQkFDNUIsNEVBQUNMLHlEQUFLQTs7Ozs7Ozs7OzswQkFJTiw4REFBQ087Z0JBQVFDLElBQUc7Z0JBQWFILFdBQVU7MEJBQ2pDLDRFQUFDSixrRUFBY0E7Ozs7Ozs7Ozs7MEJBR25CLDhEQUFDTTtnQkFBUUMsSUFBRztnQkFBU0gsV0FBVTswQkFDN0IsNEVBQUNILDJEQUFNQTs7Ozs7Ozs7Ozs7Ozs7OztBQVNmO0tBbENNQztBQW9DTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnQC9jb21wb25lbnRzL0hlYWRlcidcbmltcG9ydCBIZXJvIGZyb20gJ0AvY29tcG9uZW50cy9IZXJvJ1xuaW1wb3J0IEFib3V0IGZyb20gJ0AvY29tcG9uZW50cy9BYm91dCdcbmltcG9ydCBXb3JrRXhwZXJpZW5jZSBmcm9tICdAL2NvbXBvbmVudHMvV29ya0V4cGVyaWVuY2UnXG5pbXBvcnQgU2tpbGxzIGZyb20gJ0AvY29tcG9uZW50cy9Ta2lsbHMnXG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdiZy1bcmdiKDM2LDM2LDM2KV0gdGV4dC13aGl0ZSBoLXNjcmVlbiBzbmFwLXkgc25hcC1tYW5kYXRvcnkgb3ZlcmZsb3ctc2Nyb2xsIHotMCc+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkRpb2dvJ3MgUG9ydGZvbGlvPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuXG4gICAgICA8SGVhZGVyIC8+XG5cbiAgICAgIDxzZWN0aW9uIGlkPSdoZXJvJyBjbGFzc05hbWU9J3NuYXAtc3RhcnQnPlxuICAgICAgICA8SGVybyAvPlxuXG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uIGlkPSdhYm91dCcgY2xhc3NOYW1lPSdzbmFwLWNlbnRlcic+XG4gICAgICAgIDxBYm91dCAvPlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICB7LyogRXhwZXJpZW5jZSAqL31cbiAgICAgICAgPHNlY3Rpb24gaWQ9J2V4cGVyaWVuY2UnIGNsYXNzTmFtZT0nc25hcC1jZW50ZXInPlxuICAgICAgICAgIDxXb3JrRXhwZXJpZW5jZSAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICB7LyogU2tpbGxzICovfVxuICAgICAgPHNlY3Rpb24gaWQ9J3NraWxscycgY2xhc3NOYW1lPSdzbmFwLXN0YXJ0Jz5cbiAgICAgICAgPFNraWxscyAvPlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICB7LyogUHJvamVjdHMgKi99XG5cbiAgICAgIHsvKiBDb250YWN0IE1lICovfVxuXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJIZWFkIiwiSGVhZGVyIiwiSGVybyIsIkFib3V0IiwiV29ya0V4cGVyaWVuY2UiLCJTa2lsbHMiLCJIb21lIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJzZWN0aW9uIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});