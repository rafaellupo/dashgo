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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/theme */ \"./src/styles/theme.ts\");\n/* harmony import */ var _contexts_SidebarDrawerContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/SidebarDrawerContext */ \"./src/contexts/SidebarDrawerContext.tsx\");\n/* harmony import */ var _services_mirage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/mirage */ \"./src/services/mirage/index.ts\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-query/devtools */ \"react-query/devtools\");\n/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_query_devtools__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nif (true) {\n    (0,_services_mirage__WEBPACK_IMPORTED_MODULE_4__.makeServer)();\n}\nconst queryClient = new react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClient();\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClientProvider, {\n        client: queryClient,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {\n                theme: _styles_theme__WEBPACK_IMPORTED_MODULE_2__.theme,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_SidebarDrawerContext__WEBPACK_IMPORTED_MODULE_3__.SidebarDrawerProvider, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/rafaelsouza/Dev/ecomtrol/src/pages/_app.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/rafaelsouza/Dev/ecomtrol/src/pages/_app.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/rafaelsouza/Dev/ecomtrol/src/pages/_app.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query_devtools__WEBPACK_IMPORTED_MODULE_6__.ReactQueryDevtools, {}, void 0, false, {\n                fileName: \"/Users/rafaelsouza/Dev/ecomtrol/src/pages/_app.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rafaelsouza/Dev/ecomtrol/src/pages/_app.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNpRDtBQUNWO0FBQ2lDO0FBQ3pCO0FBQ2U7QUFDTDtBQUV6RCxFQUFFLEVBUkYsSUFRMEMsRUFBRSxDQUFDO0lBQzNDRyw0REFBVTtBQUNaLENBQUM7QUFFRCxLQUFLLENBQUNJLFdBQVcsR0FBRyxHQUFHLENBQUNILG9EQUFXO1NBRTFCSSxLQUFLLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBVyxDQUFDLEVBQUUsQ0FBQztJQUNsRCxNQUFNLDZFQUNITCw0REFBbUI7UUFBQ00sTUFBTSxFQUFFSixXQUFXOzt3RkFDckNQLDREQUFjO2dCQUFDQyxLQUFLLEVBQUVBLGdEQUFLO3NHQUN6QkMsaUZBQXFCOzBHQUNuQk8sU0FBUzsyQkFBS0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFHM0JKLG9FQUFrQjs7Ozs7Ozs7Ozs7QUFHekIsQ0FBQztBQUVELGlFQUFlRSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tdHJvbC8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7IENoYWtyYVByb3ZpZGVyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSBcIi4uL3N0eWxlcy90aGVtZVwiO1xuaW1wb3J0IHsgU2lkZWJhckRyYXdlclByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHRzL1NpZGViYXJEcmF3ZXJDb250ZXh0XCI7XG5pbXBvcnQgeyBtYWtlU2VydmVyIH0gZnJvbSBcIi4uL3NlcnZpY2VzL21pcmFnZVwiO1xuaW1wb3J0IHsgUXVlcnlDbGllbnQsIFF1ZXJ5Q2xpZW50UHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IFJlYWN0UXVlcnlEZXZ0b29scyB9IGZyb20gXCJyZWFjdC1xdWVyeS9kZXZ0b29sc1wiO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICBtYWtlU2VydmVyKCk7XG59XG5cbmNvbnN0IHF1ZXJ5Q2xpZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KCk7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e3F1ZXJ5Q2xpZW50fT5cbiAgICAgIDxDaGFrcmFQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8U2lkZWJhckRyYXdlclByb3ZpZGVyPlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9TaWRlYmFyRHJhd2VyUHJvdmlkZXI+XG4gICAgICA8L0NoYWtyYVByb3ZpZGVyPlxuICAgICAgPFJlYWN0UXVlcnlEZXZ0b29scyAvPlxuICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiQ2hha3JhUHJvdmlkZXIiLCJ0aGVtZSIsIlNpZGViYXJEcmF3ZXJQcm92aWRlciIsIm1ha2VTZXJ2ZXIiLCJRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJSZWFjdFF1ZXJ5RGV2dG9vbHMiLCJxdWVyeUNsaWVudCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2xpZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/services/mirage/index.ts":
/*!**************************************!*\
  !*** ./src/services/mirage/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeServer\": () => (/* binding */ makeServer)\n/* harmony export */ });\n/* harmony import */ var miragejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! miragejs */ \"miragejs\");\n/* harmony import */ var miragejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(miragejs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @faker-js/faker */ \"@faker-js/faker\");\n/* harmony import */ var _faker_js_faker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction makeServer() {\n    const server1 = (0,miragejs__WEBPACK_IMPORTED_MODULE_0__.createServer)({\n        models: {\n            user: miragejs__WEBPACK_IMPORTED_MODULE_0__.Model.extend({})\n        },\n        factories: {\n            user: miragejs__WEBPACK_IMPORTED_MODULE_0__.Factory.extend({\n                name (i) {\n                    return `User ${i + 1}`;\n                },\n                email () {\n                    return _faker_js_faker__WEBPACK_IMPORTED_MODULE_1___default().internet.email().toLowerCase();\n                },\n                createdAt () {\n                    return _faker_js_faker__WEBPACK_IMPORTED_MODULE_1___default().date.recent(10);\n                }\n            })\n        },\n        seeds (server) {\n            server.createList(\"user\", 200);\n        },\n        routes () {\n            this.namespace = \"api\";\n            this.timing = 750;\n            this.get(\"/users\", function(schema, request) {\n                const { page =1 , per_page =10  } = request.queryParams;\n                const total = schema.all(\"user\").length;\n                const pageStart = (Number(page) - 1) * Number(per_page);\n                const pageEnd = pageStart + Number(per_page);\n                const users = this.serialize(schema.all(\"user\")).users.slice(pageStart, pageEnd);\n                return new miragejs__WEBPACK_IMPORTED_MODULE_0__.Response(200, {\n                    \"x-total-count\": String(total)\n                }, {\n                    users\n                });\n            });\n            this.post(\"/users\");\n            this.namespace = \"\"; // para não ferrar com api routes do next\n            this.passthrough(); // passa adiante pra nao zoar o next\n        }\n    });\n    return server1;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvbWlyYWdlL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWlFO0FBQzlCO0FBUzVCLFNBQVNLLFVBQVUsR0FBRyxDQUFDO0lBQzVCLEtBQUssQ0FBQ0MsT0FBTSxHQUFHTixzREFBWSxDQUFDLENBQUM7UUFDM0JPLE1BQU0sRUFBRSxDQUFDO1lBQ1BDLElBQUksRUFBRU4sa0RBQVksQ0FBZ0IsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFDRFEsU0FBUyxFQUFFLENBQUM7WUFDVkYsSUFBSSxFQUFFUCxvREFBYyxDQUFDLENBQUM7Z0JBQ3BCVSxJQUFJLEVBQUNDLENBQVMsRUFBRSxDQUFDO29CQUNmLE1BQU0sRUFBRSxLQUFLLEVBQUVBLENBQUMsR0FBRyxDQUFDO2dCQUN0QixDQUFDO2dCQUNEQyxLQUFLLElBQUcsQ0FBQztvQkFDUCxNQUFNLENBQUNULHFFQUFvQixHQUFHVyxXQUFXO2dCQUMzQyxDQUFDO2dCQUNEQyxTQUFTLElBQUcsQ0FBQztvQkFDWCxNQUFNLENBQUNaLGtFQUFpQixDQUFDLEVBQUU7Z0JBQzdCLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztRQUNEZSxLQUFLLEVBQUNiLE1BQU0sRUFBRSxDQUFDO1lBQ2JBLE1BQU0sQ0FBQ2MsVUFBVSxDQUFDLENBQU0sT0FBRSxHQUFHO1FBQy9CLENBQUM7UUFDREMsTUFBTSxJQUFHLENBQUM7WUFDUixJQUFJLENBQUNDLFNBQVMsR0FBRyxDQUFLO1lBQ3RCLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEdBQUc7WUFDakIsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBUSxTQUFFLFFBQVEsQ0FBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUUsQ0FBQztnQkFDN0MsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxFQUFHLENBQUMsR0FBRUMsUUFBUSxFQUFHLEVBQUUsRUFBQyxDQUFDLEdBQUdGLE9BQU8sQ0FBQ0csV0FBVztnQkFDdkQsS0FBSyxDQUFDQyxLQUFLLEdBQUdMLE1BQU0sQ0FBQ00sR0FBRyxDQUFDLENBQU0sT0FBRUMsTUFBTTtnQkFFdkMsS0FBSyxDQUFDQyxTQUFTLElBQUlDLE1BQU0sQ0FBQ1AsSUFBSSxJQUFJLENBQUMsSUFBSU8sTUFBTSxDQUFDTixRQUFRO2dCQUN0RCxLQUFLLENBQUNPLE9BQU8sR0FBR0YsU0FBUyxHQUFHQyxNQUFNLENBQUNOLFFBQVE7Z0JBQzNDLEtBQUssQ0FBQ1EsS0FBSyxHQUFHLElBQUksQ0FBQ0MsU0FBUyxDQUFDWixNQUFNLENBQUNNLEdBQUcsQ0FBQyxDQUFNLFFBQUdLLEtBQUssQ0FBQ0UsS0FBSyxDQUMxREwsU0FBUyxFQUNURSxPQUFPO2dCQUVULE1BQU0sQ0FBQyxHQUFHLENBQUNoQyw4Q0FBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO29CQUFDLENBQWUsZ0JBQUVvQyxNQUFNLENBQUNULEtBQUs7Z0JBQUUsQ0FBQyxFQUFFLENBQUM7b0JBQUNNLEtBQUs7Z0JBQUMsQ0FBQztZQUN4RSxDQUFDO1lBQ0QsSUFBSSxDQUFDSSxJQUFJLENBQUMsQ0FBUTtZQUNsQixJQUFJLENBQUNsQixTQUFTLEdBQUcsQ0FBRSxFQUFFLENBQXlDO1lBQzlELElBQUksQ0FBQ21CLFdBQVcsR0FBSSxDQUFvQztRQUMxRCxDQUFDO0lBQ0gsQ0FBQztJQUNELE1BQU0sQ0FBQ25DLE9BQU07QUFDZixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbXRyb2wvLi9zcmMvc2VydmljZXMvbWlyYWdlL2luZGV4LnRzPzRmMWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VydmVyLCBGYWN0b3J5LCBNb2RlbCwgUmVzcG9uc2UgfSBmcm9tIFwibWlyYWdlanNcIjtcbmltcG9ydCBmYWtlciBmcm9tIFwiQGZha2VyLWpzL2Zha2VyXCI7XG5pbXBvcnQgdXNlcnMgZnJvbSBcIi4uLy4uL3BhZ2VzL3VzZXJzXCI7XG5cbnR5cGUgVXNlciA9IHtcbiAgbm9tZTogc3RyaW5nO1xuICBlbWFpbDogc3RyaW5nO1xuICBjcmVhdGVkX2F0OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVNlcnZlcigpIHtcbiAgY29uc3Qgc2VydmVyID0gY3JlYXRlU2VydmVyKHtcbiAgICBtb2RlbHM6IHtcbiAgICAgIHVzZXI6IE1vZGVsLmV4dGVuZDxQYXJ0aWFsPFVzZXI+Pih7fSksXG4gICAgfSxcbiAgICBmYWN0b3JpZXM6IHtcbiAgICAgIHVzZXI6IEZhY3RvcnkuZXh0ZW5kKHtcbiAgICAgICAgbmFtZShpOiBudW1iZXIpIHtcbiAgICAgICAgICByZXR1cm4gYFVzZXIgJHtpICsgMX1gO1xuICAgICAgICB9LFxuICAgICAgICBlbWFpbCgpIHtcbiAgICAgICAgICByZXR1cm4gZmFrZXIuaW50ZXJuZXQuZW1haWwoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVkQXQoKSB7XG4gICAgICAgICAgcmV0dXJuIGZha2VyLmRhdGUucmVjZW50KDEwKTtcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgIH0sXG4gICAgc2VlZHMoc2VydmVyKSB7XG4gICAgICBzZXJ2ZXIuY3JlYXRlTGlzdChcInVzZXJcIiwgMjAwKTtcbiAgICB9LFxuICAgIHJvdXRlcygpIHtcbiAgICAgIHRoaXMubmFtZXNwYWNlID0gXCJhcGlcIjtcbiAgICAgIHRoaXMudGltaW5nID0gNzUwO1xuICAgICAgdGhpcy5nZXQoXCIvdXNlcnNcIiwgZnVuY3Rpb24gKHNjaGVtYSwgcmVxdWVzdCkge1xuICAgICAgICBjb25zdCB7IHBhZ2UgPSAxLCBwZXJfcGFnZSA9IDEwIH0gPSByZXF1ZXN0LnF1ZXJ5UGFyYW1zO1xuICAgICAgICBjb25zdCB0b3RhbCA9IHNjaGVtYS5hbGwoXCJ1c2VyXCIpLmxlbmd0aDtcblxuICAgICAgICBjb25zdCBwYWdlU3RhcnQgPSAoTnVtYmVyKHBhZ2UpIC0gMSkgKiBOdW1iZXIocGVyX3BhZ2UpO1xuICAgICAgICBjb25zdCBwYWdlRW5kID0gcGFnZVN0YXJ0ICsgTnVtYmVyKHBlcl9wYWdlKTtcbiAgICAgICAgY29uc3QgdXNlcnMgPSB0aGlzLnNlcmlhbGl6ZShzY2hlbWEuYWxsKFwidXNlclwiKSkudXNlcnMuc2xpY2UoXG4gICAgICAgICAgcGFnZVN0YXJ0LFxuICAgICAgICAgIHBhZ2VFbmRcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZSgyMDAsIHsgXCJ4LXRvdGFsLWNvdW50XCI6IFN0cmluZyh0b3RhbCkgfSwgeyB1c2VycyB9KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5wb3N0KFwiL3VzZXJzXCIpO1xuICAgICAgdGhpcy5uYW1lc3BhY2UgPSBcIlwiOyAvLyBwYXJhIG7Do28gZmVycmFyIGNvbSBhcGkgcm91dGVzIGRvIG5leHRcbiAgICAgIHRoaXMucGFzc3Rocm91Z2goKTsgLy8gcGFzc2EgYWRpYW50ZSBwcmEgbmFvIHpvYXIgbyBuZXh0XG4gICAgfSxcbiAgfSk7XG4gIHJldHVybiBzZXJ2ZXI7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlU2VydmVyIiwiRmFjdG9yeSIsIk1vZGVsIiwiUmVzcG9uc2UiLCJmYWtlciIsIm1ha2VTZXJ2ZXIiLCJzZXJ2ZXIiLCJtb2RlbHMiLCJ1c2VyIiwiZXh0ZW5kIiwiZmFjdG9yaWVzIiwibmFtZSIsImkiLCJlbWFpbCIsImludGVybmV0IiwidG9Mb3dlckNhc2UiLCJjcmVhdGVkQXQiLCJkYXRlIiwicmVjZW50Iiwic2VlZHMiLCJjcmVhdGVMaXN0Iiwicm91dGVzIiwibmFtZXNwYWNlIiwidGltaW5nIiwiZ2V0Iiwic2NoZW1hIiwicmVxdWVzdCIsInBhZ2UiLCJwZXJfcGFnZSIsInF1ZXJ5UGFyYW1zIiwidG90YWwiLCJhbGwiLCJsZW5ndGgiLCJwYWdlU3RhcnQiLCJOdW1iZXIiLCJwYWdlRW5kIiwidXNlcnMiLCJzZXJpYWxpemUiLCJzbGljZSIsIlN0cmluZyIsInBvc3QiLCJwYXNzdGhyb3VnaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/mirage/index.ts\n");

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

/***/ "@faker-js/faker":
/*!**********************************!*\
  !*** external "@faker-js/faker" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@faker-js/faker");

/***/ }),

/***/ "miragejs":
/*!***************************!*\
  !*** external "miragejs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("miragejs");

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

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ "react-query/devtools":
/*!***************************************!*\
  !*** external "react-query/devtools" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("react-query/devtools");

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