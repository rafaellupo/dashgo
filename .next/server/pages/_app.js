"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/contexts/SidebarDrawerContext.tsx":
/*!***********************************************!*\
  !*** ./src/contexts/SidebarDrawerContext.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SidebarDrawerProvider\": () => (/* binding */ SidebarDrawerProvider),\n/* harmony export */   \"useSidebarDrawer\": () => (/* binding */ useSidebarDrawer)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst SidebarDrawerContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)({});\nfunction SidebarDrawerProvider({ children  }) {\n    const disclosure = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useDisclosure)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        disclosure.onClose();\n    }, [\n        router.asPath\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SidebarDrawerContext.Provider, {\n        value: disclosure,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/rafaelsouza/Dev/ecomtrol/src/contexts/SidebarDrawerContext.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this));\n}\nconst useSidebarDrawer = ()=>(0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(SidebarDrawerContext)\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvU2lkZWJhckRyYXdlckNvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXFFO0FBQzlCO0FBQ2dDO0FBT3ZFLEtBQUssQ0FBQ0ssb0JBQW9CLGlCQUFHSCxvREFBYSxDQUFDLENBQUMsQ0FBQztBQUV0QyxTQUFTSSxxQkFBcUIsQ0FBQyxDQUFDLENBQ3JDQyxRQUFRLEVBQ2tCLENBQUMsRUFBRSxDQUFDO0lBQzlCLEtBQUssQ0FBQ0MsVUFBVSxHQUFHUiwrREFBYTtJQUNoQyxLQUFLLENBQUNTLE1BQU0sR0FBR1Isc0RBQVM7SUFFeEJHLGdEQUFTLEtBQU8sQ0FBQztRQUNmSSxVQUFVLENBQUNFLE9BQU87SUFDcEIsQ0FBQyxFQUFFLENBQUNEO1FBQUFBLE1BQU0sQ0FBQ0UsTUFBTTtJQUFBLENBQUM7SUFFbEIsTUFBTSw2RUFDSE4sb0JBQW9CLENBQUNPLFFBQVE7UUFBQ0MsS0FBSyxFQUFFTCxVQUFVO2tCQUM3Q0QsUUFBUTs7Ozs7O0FBR2YsQ0FBQztBQUVNLEtBQUssQ0FBQ08sZ0JBQWdCLE9BQVNYLGlEQUFVLENBQUNFLG9CQUFvQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb210cm9sLy4vc3JjL2NvbnRleHRzL1NpZGViYXJEcmF3ZXJDb250ZXh0LnRzeD9iMWZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZURpc2Nsb3N1cmUsIFVzZURpc2Nsb3N1cmVSZXR1cm4gfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgU2lkZWJhckRyYXdlclByb3ZpZGVyUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xufVxudHlwZSBTaWRlYmFyRHJhd2VyQ29udGV4dERhdGEgPSBVc2VEaXNjbG9zdXJlUmV0dXJuO1xuXG5jb25zdCBTaWRlYmFyRHJhd2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgU2lkZWJhckRyYXdlckNvbnRleHREYXRhKTtcblxuZXhwb3J0IGZ1bmN0aW9uIFNpZGViYXJEcmF3ZXJQcm92aWRlcih7XG4gIGNoaWxkcmVuLFxufTogU2lkZWJhckRyYXdlclByb3ZpZGVyUHJvcHMpIHtcbiAgY29uc3QgZGlzY2xvc3VyZSA9IHVzZURpc2Nsb3N1cmUoKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNjbG9zdXJlLm9uQ2xvc2UoKTtcbiAgfSwgW3JvdXRlci5hc1BhdGhdKTtcblxuICByZXR1cm4gKFxuICAgIDxTaWRlYmFyRHJhd2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17ZGlzY2xvc3VyZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9TaWRlYmFyRHJhd2VyQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IHVzZVNpZGViYXJEcmF3ZXIgPSAoKSA9PiB1c2VDb250ZXh0KFNpZGViYXJEcmF3ZXJDb250ZXh0KTtcbiJdLCJuYW1lcyI6WyJ1c2VEaXNjbG9zdXJlIiwidXNlUm91dGVyIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJTaWRlYmFyRHJhd2VyQ29udGV4dCIsIlNpZGViYXJEcmF3ZXJQcm92aWRlciIsImNoaWxkcmVuIiwiZGlzY2xvc3VyZSIsInJvdXRlciIsIm9uQ2xvc2UiLCJhc1BhdGgiLCJQcm92aWRlciIsInZhbHVlIiwidXNlU2lkZWJhckRyYXdlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/SidebarDrawerContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/theme */ \"./src/styles/theme.ts\");\n/* harmony import */ var _contexts_SidebarDrawerContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/SidebarDrawerContext */ \"./src/contexts/SidebarDrawerContext.tsx\");\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {\n        theme: _styles_theme__WEBPACK_IMPORTED_MODULE_2__.theme,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_SidebarDrawerContext__WEBPACK_IMPORTED_MODULE_3__.SidebarDrawerProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/rafaelsouza/Dev/ecomtrol/src/pages/_app.tsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/rafaelsouza/Dev/ecomtrol/src/pages/_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/rafaelsouza/Dev/ecomtrol/src/pages/_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDaUQ7QUFDVjtBQUNpQztTQUUvREcsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQVcsQ0FBQyxFQUFFLENBQUM7SUFDbEQsTUFBTSw2RUFDSEwsNERBQWM7UUFBQ0MsS0FBSyxFQUFFQSxnREFBSzs4RkFDekJDLGlGQUFxQjtrR0FDbkJFLFNBQVM7bUJBQUtDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEMsQ0FBQztBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tdHJvbC8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7IENoYWtyYVByb3ZpZGVyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSBcIi4uL3N0eWxlcy90aGVtZVwiO1xuaW1wb3J0IHsgU2lkZWJhckRyYXdlclByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHRzL1NpZGViYXJEcmF3ZXJDb250ZXh0XCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8Q2hha3JhUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxTaWRlYmFyRHJhd2VyUHJvdmlkZXI+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvU2lkZWJhckRyYXdlclByb3ZpZGVyPlxuICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIkNoYWtyYVByb3ZpZGVyIiwidGhlbWUiLCJTaWRlYmFyRHJhd2VyUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/theme.ts":
/*!*****************************!*\
  !*** ./src/styles/theme.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"theme\": () => (/* binding */ theme)\n/* harmony export */ });\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({\n    // colors: {\n    //   gray: {\n    //   }\n    // },\n    fonts: {\n        heading: \"Roboto\",\n        body: \"Roboto\"\n    },\n    styles: {\n        global: {\n            body: {\n                bg: \"gray.900\",\n                color: \"gray.50\"\n            }\n        }\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3RoZW1lLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUV2QyxLQUFLLENBQUNDLEtBQUssR0FBR0QsNkRBQVcsQ0FBQyxDQUFDO0lBQ2hDLEVBQVk7SUFDWixFQUFZO0lBRVosRUFBTTtJQUNOLEVBQUs7SUFDTEUsS0FBSyxFQUFFLENBQUM7UUFDTkMsT0FBTyxFQUFFLENBQVE7UUFDakJDLElBQUksRUFBRSxDQUFRO0lBQ2hCLENBQUM7SUFDREMsTUFBTSxFQUFFLENBQUM7UUFDUEMsTUFBTSxFQUFFLENBQUM7WUFDUEYsSUFBSSxFQUFFLENBQUM7Z0JBQ0xHLEVBQUUsRUFBRSxDQUFVO2dCQUNkQyxLQUFLLEVBQUUsQ0FBUztZQUNsQixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbXRyb2wvLi9zcmMvc3R5bGVzL3RoZW1lLnRzPzUxNjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXh0ZW5kVGhlbWUgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7XG4gIC8vIGNvbG9yczoge1xuICAvLyAgIGdyYXk6IHtcblxuICAvLyAgIH1cbiAgLy8gfSxcbiAgZm9udHM6IHtcbiAgICBoZWFkaW5nOiBcIlJvYm90b1wiLFxuICAgIGJvZHk6IFwiUm9ib3RvXCIsXG4gIH0sXG4gIHN0eWxlczoge1xuICAgIGdsb2JhbDoge1xuICAgICAgYm9keToge1xuICAgICAgICBiZzogXCJncmF5LjkwMFwiLFxuICAgICAgICBjb2xvcjogXCJncmF5LjUwXCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLCJuYW1lcyI6WyJleHRlbmRUaGVtZSIsInRoZW1lIiwiZm9udHMiLCJoZWFkaW5nIiwiYm9keSIsInN0eWxlcyIsImdsb2JhbCIsImJnIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/theme.ts\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();