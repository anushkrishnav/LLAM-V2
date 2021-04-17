webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Layout/Layout.js":
/*!*************************************!*\
  !*** ./components/Layout/Layout.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Toolbar/Toolbar */ \"./components/Toolbar/Toolbar.js\");\n/* harmony import */ var _SideDrawer_SideDrawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SideDrawer/SideDrawer */ \"./components/SideDrawer/SideDrawer.js\");\n/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Favorite */ \"./node_modules/@material-ui/icons/Favorite.js\");\n/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/GitHub */ \"./node_modules/@material-ui/icons/GitHub.js\");\n/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _Layout_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Layout.module.scss */ \"./components/Layout/Layout.module.scss\");\n/* harmony import */ var _Layout_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\nvar _jsxFileName = \"/Users/jappanjeetsingh/Desktop/web/projects/LLAM/LLAM-V2/LLAM/components/Layout/Layout.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar Layout = function Layout(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      sideDrawerIsVisible = _useState[0],\n      setSideDrawerIsVisible = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      delayFooterLoading = _useState2[0],\n      setDelayFooterLoading = _useState2[1];\n\n  var sideDrawerToggleHandler = function sideDrawerToggleHandler() {\n    setSideDrawerIsVisible(!sideDrawerIsVisible);\n  };\n\n  var sideDrawerClosedHandler = function sideDrawerClosedHandler() {\n    setSideDrawerIsVisible(false);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setDelayFooterLoading(false);\n    setTimeout(function () {\n      setDelayFooterLoading(true);\n    }, 5000);\n  }, []);\n\n  var footer = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    id: \"footer\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _Layout_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.Footer,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: _Layout_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.HHLogo,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: \"/assetss/HackerHouse.png\",\n          alt: \"Hacker House logo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 50\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"https://github.com/Jappan07/LLAM\",\n        target: \"_blank\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_7___default.a, {\n          style: {\n            fontSize: \"1rem\",\n            color: \"lightgray\",\n            marginTop: \"8px\"\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 76\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        href: \"/about\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          style: {\n            fontSize: \".6rem\",\n            color: \"lightgray\",\n            textDecoration: \"none\",\n            marginBottom: \"8px\"\n          },\n          children: \"About us\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 37\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        style: {\n          marginBottom: \"10px\"\n        },\n        children: [\"Created with \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_6___default.a, {\n          style: {\n            fontSize: \"18px\",\n            position: \"relative\",\n            top: \"5px\"\n          },\n          className: _Layout_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.Heart\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 67\n        }, _this), \" by team HACKER HOUSE\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"Copyright \\xA9 2021-3010\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 9\n  }, _this);\n\n  var delayFooter = function delayFooter() {\n    console.warn(\"delaying the rendering of \");\n    setTimeout(function () {\n      var delayedFooter = footer;\n      return delayedFooter;\n    }, 5000);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      open: sideDrawerIsVisible,\n      drawerToggler: sideDrawerToggleHandler\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SideDrawer_SideDrawer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      open: sideDrawerIsVisible,\n      close: sideDrawerClosedHandler\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      children: props.children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }, _this), props.isTrackingPage && delayFooterLoading ? delayFooter() : footer]\n  }, void 0, true);\n};\n\n_s(Layout, \"FzVC95rmI53HfQZUFEA4e3n5DtE=\");\n\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmpzPzQyODgiXSwibmFtZXMiOlsiTGF5b3V0IiwicHJvcHMiLCJ1c2VTdGF0ZSIsInNpZGVEcmF3ZXJJc1Zpc2libGUiLCJzZXRTaWRlRHJhd2VySXNWaXNpYmxlIiwiZGVsYXlGb290ZXJMb2FkaW5nIiwic2V0RGVsYXlGb290ZXJMb2FkaW5nIiwic2lkZURyYXdlclRvZ2dsZUhhbmRsZXIiLCJzaWRlRHJhd2VyQ2xvc2VkSGFuZGxlciIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJmb290ZXIiLCJjbGFzc2VzIiwiRm9vdGVyIiwiSEhMb2dvIiwiZm9udFNpemUiLCJjb2xvciIsIm1hcmdpblRvcCIsInRleHREZWNvcmF0aW9uIiwibWFyZ2luQm90dG9tIiwicG9zaXRpb24iLCJ0b3AiLCJIZWFydCIsImRlbGF5Rm9vdGVyIiwiY29uc29sZSIsIndhcm4iLCJkZWxheWVkRm9vdGVyIiwiY2hpbGRyZW4iLCJpc1RyYWNraW5nUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDZ0NDLHNEQUFRLENBQUMsS0FBRCxDQUR4QztBQUFBLE1BQ2ZDLG1CQURlO0FBQUEsTUFDTUMsc0JBRE47O0FBQUEsbUJBRThCRixzREFBUSxDQUFDLElBQUQsQ0FGdEM7QUFBQSxNQUVmRyxrQkFGZTtBQUFBLE1BRUtDLHFCQUZMOztBQUt0QixNQUFNQyx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLEdBQU07QUFDbENILDBCQUFzQixDQUFDLENBQUNELG1CQUFGLENBQXRCO0FBQ0gsR0FGRDs7QUFJQSxNQUFNSyx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLEdBQU07QUFDbENKLDBCQUFz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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcbmltcG9ydCBUb29sYmFyIGZyb20gXCIuLi9Ub29sYmFyL1Rvb2xiYXJcIlxuaW1wb3J0IFNpZGVEcmF3ZXIgZnJvbSBcIi4uL1NpZGVEcmF3ZXIvU2lkZURyYXdlclwiXG5pbXBvcnQgRmF2b3JpdGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9GYXZvcml0ZSc7XG5pbXBvcnQgR2l0SHViSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvR2l0SHViJztcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0xheW91dC5tb2R1bGUuc2Nzc1wiXG5cbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IFtzaWRlRHJhd2VySXNWaXNpYmxlLCBzZXRTaWRlRHJhd2VySXNWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtkZWxheUZvb3RlckxvYWRpbmcsIHNldERlbGF5Rm9vdGVyTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuXG5cbiAgICBjb25zdCBzaWRlRHJhd2VyVG9nZ2xlSGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgc2V0U2lkZURyYXdlcklzVmlzaWJsZSghc2lkZURyYXdlcklzVmlzaWJsZSlcbiAgICB9XG5cbiAgICBjb25zdCBzaWRlRHJhd2VyQ2xvc2VkSGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgc2V0U2lkZURyYXdlcklzVmlzaWJsZShmYWxzZSlcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXREZWxheUZvb3RlckxvYWRpbmcoZmFsc2UpXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0RGVsYXlGb290ZXJMb2FkaW5nKHRydWUpXG4gICAgICAgIH0sIDUwMDApO1xuICAgIH0sIFtdKVxuXG4gICAgY29uc3QgZm9vdGVyID0gKFxuICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5Gb290ZXJ9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5ISExvZ299PjxpbWcgc3JjPXtcIi9hc3NldHNzL0hhY2tlckhvdXNlLnBuZ1wifSBhbHQ9XCJIYWNrZXIgSG91c2UgbG9nb1wiIC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vSmFwcGFuMDcvTExBTVwiIHRhcmdldD1cIl9ibGFua1wiPjxHaXRIdWJJY29uIHN0eWxlPXt7IGZvbnRTaXplOiBcIjFyZW1cIiwgY29sb3I6IFwibGlnaHRncmF5XCIsIG1hcmdpblRvcDogXCI4cHhcIiB9fSAvPjwvYT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+PGEgc3R5bGU9e3sgZm9udFNpemU6IFwiLjZyZW1cIiwgY29sb3I6IFwibGlnaHRncmF5XCIsIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgbWFyZ2luQm90dG9tOiBcIjhweFwiIH19PkFib3V0IHVzPC9hPjwvTGluaz5cbiAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5DcmVhdGVkIHdpdGggPEZhdm9yaXRlSWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCIxOHB4XCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHRvcDogXCI1cHhcIiB9fSBjbGFzc05hbWU9e2NsYXNzZXMuSGVhcnR9IC8+IGJ5IHRlYW0gSEFDS0VSIEhPVVNFPC9oMT5cbiAgICAgICAgICAgICAgICA8cD5Db3B5cmlnaHQgwqkgMjAyMS0zMDEwPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcblxuICAgIGNvbnN0IGRlbGF5Rm9vdGVyID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJkZWxheWluZyB0aGUgcmVuZGVyaW5nIG9mIFwiKVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGxldCBkZWxheWVkRm9vdGVyID0gZm9vdGVyXG4gICAgICAgICAgICByZXR1cm4gZGVsYXllZEZvb3RlclxuICAgICAgICB9LCA1MDAwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8VG9vbGJhciBvcGVuPXtzaWRlRHJhd2VySXNWaXNpYmxlfSBkcmF3ZXJUb2dnbGVyPXtzaWRlRHJhd2VyVG9nZ2xlSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTaWRlRHJhd2VyIG9wZW49e3NpZGVEcmF3ZXJJc1Zpc2libGV9IGNsb3NlPXtzaWRlRHJhd2VyQ2xvc2VkSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxtYWluPntwcm9wcy5jaGlsZHJlbn08L21haW4+XG4gICAgICAgICAgICB7cHJvcHMuaXNUcmFja2luZ1BhZ2UgJiYgZGVsYXlGb290ZXJMb2FkaW5nID9cbiAgICAgICAgICAgICAgICBkZWxheUZvb3RlcigpXG4gICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgIGZvb3RlclxuICAgICAgICAgICAgfVxuXG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout/Layout.js\n");

/***/ })

})