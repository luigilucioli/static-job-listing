"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _public_json_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/json/data.json */ \"./public/json/data.json\");\n/* harmony import */ var _store_filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/filters */ \"./store/filters.js\");\n// import Head from 'next/head'\n// import Layout, { siteTitle } from '../components/layout'\n\nvar _s = $RefreshSig$();\n\n// import Link from 'next/link'\n// import Date from '../components/date'\n\n\nvar __N_SSG = true;\nfunction Home(param) {\n    let { allPostsData  } = param;\n    _s();\n    /*------------------------------\n  Zustand Actions\n  ------------------------------*/ const openLayer = useLayerStore((store)=>store.openLayer);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        home: true,\n        children: _public_json_data_json__WEBPACK_IMPORTED_MODULE_2__.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: item.company\n            }, item.id, false, {\n                fileName: \"/Users/luigilucioli/Documents/test/test-jungles/pages/index.js\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/luigilucioli/Documents/test/test-jungles/pages/index.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"33Y6uD2YfEz6XkmyBbGjv3PRD7I=\", true);\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0JBQStCO0FBQy9CLDJEQUEyRDs7O0FBQ2xCO0FBR3pDLCtCQUErQjtBQUMvQix3Q0FBd0M7QUFDRztBQUNHOztBQUUvQixTQUFTRyxLQUFLLEtBQWdCLEVBQUU7UUFBbEIsRUFBRUMsYUFBWSxFQUFFLEdBQWhCOztJQUMzQjs7Z0NBRThCLEdBQzlCLE1BQU1DLFlBQVlDLGNBQWMsQ0FBQ0MsUUFBVUEsTUFBTUYsU0FBUztJQUUxRCxxQkFDRSw4REFBQ0wsMERBQU1BO1FBQUNRLElBQUk7a0JBNkJUUCx1REFBUSxDQUFDUyxDQUFBQSxxQkFDUiw4REFBQ0M7MEJBR0VELEtBQUtFLE9BQU87ZUFGUkYsS0FBS0csRUFBRTs7Ozs7Ozs7OztBQU90QixDQUFDO0dBN0N1QlY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG4vLyBpbXBvcnQgTGF5b3V0LCB7IHNpdGVUaXRsZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbi8vIGltcG9ydCB1dGlsU3R5bGVzIGZyb20gJy4uL3N0eWxlcy91dGlscy5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgZ2V0U29ydGVkUG9zdHNEYXRhIH0gZnJvbSAnLi4vbGliL3Bvc3RzJ1xuLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuLy8gaW1wb3J0IERhdGUgZnJvbSAnLi4vY29tcG9uZW50cy9kYXRlJ1xuaW1wb3J0IGRhdGEgZnJvbSAnLi4vcHVibGljL2pzb24vZGF0YS5qc29uJ1xuaW1wb3J0IHVzZUZpbHRlcnNTdG9yZSBmcm9tICcuLi9zdG9yZS9maWx0ZXJzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgYWxsUG9zdHNEYXRhIH0pIHtcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgWnVzdGFuZCBBY3Rpb25zXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIGNvbnN0IG9wZW5MYXllciA9IHVzZUxheWVyU3RvcmUoKHN0b3JlKSA9PiBzdG9yZS5vcGVuTGF5ZXIpXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGhvbWU+XG4gICAgICB7LyogPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57c2l0ZVRpdGxlfTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZ01kfT5cbiAgICAgICAgPHA+XG4gICAgICAgICAgSGVsbG8sIEnigJltIDxzdHJvbmc+U2h1PC9zdHJvbmc+LiBJ4oCZbSBhIHNvZnR3YXJlIGVuZ2luZWVyIGFuZCBhXG4gICAgICAgICAgdHJhbnNsYXRvciAoRW5nbGlzaC9KYXBhbmVzZSkuIFlvdSBjYW4gY29udGFjdCBtZSBvbnsnICd9XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vY2hpYmljb2RlXCI+VHdpdHRlcjwvYT4uXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgKFRoaXMgaXMgYSBzYW1wbGUgd2Vic2l0ZSAtIHlvdeKAmWxsIGJlIGJ1aWxkaW5nIGEgc2l0ZSBsaWtlIHRoaXMgaW57JyAnfVxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvbGVhcm5cIj5vdXIgTmV4dC5qcyB0dXRvcmlhbDwvYT4uKVxuICAgICAgICA8L3A+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Ake3V0aWxTdHlsZXMuaGVhZGluZ01kfSAke3V0aWxTdHlsZXMucGFkZGluZzFweH1gfT5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nTGd9PkJsb2c8L2gyPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmxpc3R9PlxuICAgICAgICAgIHthbGxQb3N0c0RhdGEubWFwKCh7IGlkLCBkYXRlLCB0aXRsZSB9KSA9PiAoXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmxpc3RJdGVtfSBrZXk9e2lkfT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wb3N0cy8ke2lkfWB9Pnt0aXRsZX08L0xpbms+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmxpZ2h0VGV4dH0+XG4gICAgICAgICAgICAgICAgPERhdGUgZGF0ZVN0cmluZz17ZGF0ZX0gLz5cbiAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L3NlY3Rpb24+ICovfVxuICAgICAge2RhdGEubWFwKGl0ZW0gPT4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICA+XG4gICAgICAgICAge2l0ZW0uY29tcGFueX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IGFsbFBvc3RzRGF0YSA9IGdldFNvcnRlZFBvc3RzRGF0YSgpXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGFsbFBvc3RzRGF0YVxuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbIkxheW91dCIsImRhdGEiLCJ1c2VGaWx0ZXJzU3RvcmUiLCJIb21lIiwiYWxsUG9zdHNEYXRhIiwib3BlbkxheWVyIiwidXNlTGF5ZXJTdG9yZSIsInN0b3JlIiwiaG9tZSIsIm1hcCIsIml0ZW0iLCJkaXYiLCJjb21wYW55IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ }),

/***/ "./store/filters.js":
/*!**************************!*\
  !*** ./store/filters.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ \"./node_modules/zustand/esm/index.mjs\");\n/* harmony import */ var zustand_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zustand/middleware */ \"./node_modules/zustand/esm/middleware.mjs\");\n\n\nconst getFiltersModel = (param)=>{\n    let { id  } = param;\n    return {\n        id,\n        isOpen: false\n    };\n};\nconst store = (set)=>({\n        filters: [],\n        setFilters: (payload)=>set((state)=>({\n                    filters: state.filters.push(payload.id)\n                }), false, \"LAYER/SET_FILTERS\")\n    });\nconst useFiltersStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,zustand_middleware__WEBPACK_IMPORTED_MODULE_1__.devtools)(store, {\n    name: \"Filters Store\"\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (useFiltersStore);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9maWx0ZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUE0QjtBQUNpQjtBQUU3QyxNQUFNRSxrQkFBa0IsU0FBYTtRQUFaLEVBQUVDLEdBQUUsRUFBRTtXQUFNO1FBQ25DQTtRQUNBQyxRQUFRLEtBQUs7SUFDZjtBQUFBO0FBRUEsTUFBTUMsUUFBUSxDQUFDQyxNQUFTO1FBQ3RCQyxTQUFTLEVBQUU7UUFDWEMsWUFBWSxDQUFDQyxVQUFZSCxJQUN2QixDQUFDSSxRQUFXO29CQUNWSCxTQUFTRyxNQUFNSCxPQUFPLENBQUNJLElBQUksQ0FBQ0YsUUFBUU4sRUFBRTtnQkFDeEMsSUFDQSxLQUFLLEVBQ0w7SUFFSjtBQUVBLE1BQU1TLGtCQUFrQlosbURBQU1BLENBQUNDLDREQUFRQSxDQUFDSSxPQUFPO0lBQUVRLE1BQU07QUFBZ0I7QUFFdkUsK0RBQWVELGVBQWVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvZmlsdGVycy5qcz85NDQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGUgZnJvbSAnenVzdGFuZCdcbmltcG9ydCB7IGRldnRvb2xzIH0gZnJvbSAnenVzdGFuZC9taWRkbGV3YXJlJ1xuXG5jb25zdCBnZXRGaWx0ZXJzTW9kZWwgPSAoeyBpZCB9KSA9PiAoe1xuICBpZCxcbiAgaXNPcGVuOiBmYWxzZSxcbn0pXG5cbmNvbnN0IHN0b3JlID0gKHNldCkgPT4gKHtcbiAgZmlsdGVyczogW10sXG4gIHNldEZpbHRlcnM6IChwYXlsb2FkKSA9PiBzZXQoXG4gICAgKHN0YXRlKSA9PiAoe1xuICAgICAgZmlsdGVyczogc3RhdGUuZmlsdGVycy5wdXNoKHBheWxvYWQuaWQpLFxuICAgIH0pLFxuICAgIGZhbHNlLFxuICAgICdMQVlFUi9TRVRfRklMVEVSUycsXG4gICksXG59KVxuXG5jb25zdCB1c2VGaWx0ZXJzU3RvcmUgPSBjcmVhdGUoZGV2dG9vbHMoc3RvcmUsIHsgbmFtZTogJ0ZpbHRlcnMgU3RvcmUnIH0pKVxuXG5leHBvcnQgZGVmYXVsdCB1c2VGaWx0ZXJzU3RvcmVcbiJdLCJuYW1lcyI6WyJjcmVhdGUiLCJkZXZ0b29scyIsImdldEZpbHRlcnNNb2RlbCIsImlkIiwiaXNPcGVuIiwic3RvcmUiLCJzZXQiLCJmaWx0ZXJzIiwic2V0RmlsdGVycyIsInBheWxvYWQiLCJzdGF0ZSIsInB1c2giLCJ1c2VGaWx0ZXJzU3RvcmUiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/filters.js\n"));

/***/ })

});