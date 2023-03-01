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

/***/ "./store/layer.js":
/*!************************!*\
  !*** ./store/layer.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ \"./node_modules/zustand/esm/index.mjs\");\n/* harmony import */ var zustand_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zustand/middleware */ \"./node_modules/zustand/esm/middleware.mjs\");\n\n\nconst getLayerModel = (param)=>{\n    let { id  } = param;\n    return {\n        id,\n        isOpen: false\n    };\n};\nconst store = (set)=>({\n        filters: [],\n        openLayer: (payload)=>set((state)=>({\n                    layers: state.layers.map((l)=>l.id === payload.id ? {\n                            ...l,\n                            ...payload,\n                            isOpen: true\n                        } : l)\n                }), false, \"LAYER/OPEN_LAYER\"),\n        closeLayer: (payload)=>set((state)=>({\n                    layerIsOpen: false,\n                    layers: state.layers.map((l)=>l.id === payload.id ? {\n                            ...l,\n                            ...payload,\n                            isOpen: false\n                        } : l)\n                }), false, \"LAYER/CLOSE_LAYER\"),\n        closeAllLayer: (payload)=>set((state)=>({\n                    layerIsOpen: false,\n                    layers: state.layers.map((l)=>({\n                            ...l,\n                            ...payload,\n                            isOpen: false\n                        }))\n                }), false, \"LAYER/CLOSE_LAYER\")\n    });\nconst useLayerStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,zustand_middleware__WEBPACK_IMPORTED_MODULE_1__.devtools)(store, {\n    name: \"Layer Store\"\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (useLayerStore);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9sYXllci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBNEI7QUFDaUI7QUFFN0MsTUFBTUUsZ0JBQWdCLFNBQWE7UUFBWixFQUFFQyxHQUFFLEVBQUU7V0FBTTtRQUNqQ0E7UUFDQUMsUUFBUSxLQUFLO0lBQ2Y7QUFBQTtBQUVBLE1BQU1DLFFBQVEsQ0FBQ0MsTUFBUztRQUN0QkMsU0FBUyxFQUFFO1FBQ1hDLFdBQVcsQ0FBQ0MsVUFBWUgsSUFDdEIsQ0FBQ0ksUUFBVztvQkFDVkMsUUFBUUQsTUFBTUMsTUFBTSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsSUFBT0EsRUFBRVYsRUFBRSxLQUFLTSxRQUFRTixFQUFFLEdBQy9DOzRCQUNELEdBQUdVLENBQUM7NEJBQ0osR0FBR0osT0FBTzs0QkFDVkwsUUFBUSxJQUFJO3dCQUNkLElBQ0VTLENBQUM7Z0JBQ1AsSUFDQSxLQUFLLEVBQ0w7UUFFRkMsWUFBWSxDQUFDTCxVQUFZSCxJQUN2QixDQUFDSSxRQUFXO29CQUNWSyxhQUFhLEtBQUs7b0JBQ2xCSixRQUFRRCxNQUFNQyxNQUFNLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxJQUFPQSxFQUFFVixFQUFFLEtBQUtNLFFBQVFOLEVBQUUsR0FDL0M7NEJBQ0QsR0FBR1UsQ0FBQzs0QkFDSixHQUFHSixPQUFPOzRCQUNWTCxRQUFRLEtBQUs7d0JBQ2YsSUFDRVMsQ0FBQztnQkFDUCxJQUNBLEtBQUssRUFDTDtRQUVGRyxlQUFlLENBQUNQLFVBQVlILElBQzFCLENBQUNJLFFBQVc7b0JBQ1ZLLGFBQWEsS0FBSztvQkFDbEJKLFFBQVFELE1BQU1DLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLElBQU87NEJBQy9CLEdBQUdBLENBQUM7NEJBQ0osR0FBR0osT0FBTzs0QkFDVkwsUUFBUSxLQUFLO3dCQUNmO2dCQUNGLElBQ0EsS0FBSyxFQUNMO0lBRUo7QUFFQSxNQUFNYSxnQkFBZ0JqQixtREFBTUEsQ0FBQ0MsNERBQVFBLENBQUNJLE9BQU87SUFBRWEsTUFBTTtBQUFjO0FBRW5FLCtEQUFlRCxhQUFhQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL2xheWVyLmpzPzZhYTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZSBmcm9tICd6dXN0YW5kJ1xuaW1wb3J0IHsgZGV2dG9vbHMgfSBmcm9tICd6dXN0YW5kL21pZGRsZXdhcmUnXG5cbmNvbnN0IGdldExheWVyTW9kZWwgPSAoeyBpZCB9KSA9PiAoe1xuICBpZCxcbiAgaXNPcGVuOiBmYWxzZSxcbn0pXG5cbmNvbnN0IHN0b3JlID0gKHNldCkgPT4gKHtcbiAgZmlsdGVyczogW10sXG4gIG9wZW5MYXllcjogKHBheWxvYWQpID0+IHNldChcbiAgICAoc3RhdGUpID0+ICh7XG4gICAgICBsYXllcnM6IHN0YXRlLmxheWVycy5tYXAoKGwpID0+IChsLmlkID09PSBwYXlsb2FkLmlkXG4gICAgICAgID8gKHtcbiAgICAgICAgICAuLi5sLFxuICAgICAgICAgIC4uLnBheWxvYWQsXG4gICAgICAgICAgaXNPcGVuOiB0cnVlLFxuICAgICAgICB9KVxuICAgICAgICA6IGwpKSxcbiAgICB9KSxcbiAgICBmYWxzZSxcbiAgICAnTEFZRVIvT1BFTl9MQVlFUicsXG4gICksXG4gIGNsb3NlTGF5ZXI6IChwYXlsb2FkKSA9PiBzZXQoXG4gICAgKHN0YXRlKSA9PiAoe1xuICAgICAgbGF5ZXJJc09wZW46IGZhbHNlLFxuICAgICAgbGF5ZXJzOiBzdGF0ZS5sYXllcnMubWFwKChsKSA9PiAobC5pZCA9PT0gcGF5bG9hZC5pZFxuICAgICAgICA/ICh7XG4gICAgICAgICAgLi4ubCxcbiAgICAgICAgICAuLi5wYXlsb2FkLFxuICAgICAgICAgIGlzT3BlbjogZmFsc2UsXG4gICAgICAgIH0pXG4gICAgICAgIDogbCkpLFxuICAgIH0pLFxuICAgIGZhbHNlLFxuICAgICdMQVlFUi9DTE9TRV9MQVlFUicsXG4gICksXG4gIGNsb3NlQWxsTGF5ZXI6IChwYXlsb2FkKSA9PiBzZXQoXG4gICAgKHN0YXRlKSA9PiAoe1xuICAgICAgbGF5ZXJJc09wZW46IGZhbHNlLFxuICAgICAgbGF5ZXJzOiBzdGF0ZS5sYXllcnMubWFwKChsKSA9PiAoe1xuICAgICAgICAuLi5sLFxuICAgICAgICAuLi5wYXlsb2FkLFxuICAgICAgICBpc09wZW46IGZhbHNlLFxuICAgICAgfSkpLFxuICAgIH0pLFxuICAgIGZhbHNlLFxuICAgICdMQVlFUi9DTE9TRV9MQVlFUicsXG4gICksXG59KVxuXG5jb25zdCB1c2VMYXllclN0b3JlID0gY3JlYXRlKGRldnRvb2xzKHN0b3JlLCB7IG5hbWU6ICdMYXllciBTdG9yZScgfSkpXG5cbmV4cG9ydCBkZWZhdWx0IHVzZUxheWVyU3RvcmVcbiJdLCJuYW1lcyI6WyJjcmVhdGUiLCJkZXZ0b29scyIsImdldExheWVyTW9kZWwiLCJpZCIsImlzT3BlbiIsInN0b3JlIiwic2V0IiwiZmlsdGVycyIsIm9wZW5MYXllciIsInBheWxvYWQiLCJzdGF0ZSIsImxheWVycyIsIm1hcCIsImwiLCJjbG9zZUxheWVyIiwibGF5ZXJJc09wZW4iLCJjbG9zZUFsbExheWVyIiwidXNlTGF5ZXJTdG9yZSIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/layer.js\n"));

/***/ })

});