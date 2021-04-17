webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Layout/Layout.js":
/*!*************************************!*\
  !*** ./components/Layout/Layout.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Toolbar/Toolbar */ \"./components/Toolbar/Toolbar.js\");\n/* harmony import */ var _UI_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UI/Footer/Footer */ \"./components/UI/Footer/Footer.js\");\n/* harmony import */ var _SideDrawer_SideDrawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SideDrawer/SideDrawer */ \"./components/SideDrawer/SideDrawer.js\");\n\n\n\nvar _jsxFileName = \"/Users/jappanjeetsingh/Desktop/web/projects/LLAM/LLAM-V2/LLAM/components/Layout/Layout.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Layout = function Layout(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      sideDrawerIsVisible = _useState[0],\n      setSideDrawerIsVisible = _useState[1]; // const [delayFooter, setDelayFooter] = useState(false)\n\n\n  var sideDrawerToggleHandler = function sideDrawerToggleHandler() {\n    setSideDrawerIsVisible(!sideDrawerIsVisible);\n  };\n\n  var sideDrawerClosedHandler = function sideDrawerClosedHandler() {\n    setSideDrawerIsVisible(false);\n  }; // useEffect(() => {\n  //     if (props.isTrackingPage) {\n  //         setDelayFooter(true)\n  //     }\n  // }, [delayFooter])\n  // const delayFooterHandler = () => {\n  //     setTimeout(() => {\n  //         let delayedFooter = footer\n  //         return delayedFooter\n  //     }, 5000);\n  //     return null\n  // }\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      open: sideDrawerIsVisible,\n      drawerToggler: sideDrawerToggleHandler\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SideDrawer_SideDrawer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      open: sideDrawerIsVisible,\n      close: sideDrawerClosedHandler\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      children: props.children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }, _this), props.isTrackingPage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_UI_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      delay: 5000\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 40\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_UI_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      delay: 0\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 66\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Layout, \"8GgQbZByfoA3WJLRKjULXVSLrjM=\");\n\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmpzPzQyODgiXSwibmFtZXMiOlsiTGF5b3V0IiwicHJvcHMiLCJ1c2VTdGF0ZSIsInNpZGVEcmF3ZXJJc1Zpc2libGUiLCJzZXRTaWRlRHJhd2VySXNWaXNpYmxlIiwic2lkZURyYXdlclRvZ2dsZUhhbmRsZXIiLCJzaWRlRHJhd2VyQ2xvc2VkSGFuZGxlciIsImNoaWxkcmVuIiwiaXNUcmFja2luZ1BhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNnQ0Msc0RBQVEsQ0FBQyxLQUFELENBRHhDO0FBQUEsTUFDZkMsbUJBRGU7QUFBQSxNQUNNQyxzQkFETixpQkFFdEI7OztBQUdBLE1BQU1DLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsR0FBTTtBQUNsQ0QsMEJBQXNCLENBQUMsQ0FBQ0QsbUJBQUYsQ0FBdEI7QUFDSCxHQUZEOztBQUlBLE1BQU1HLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsR0FBTTtBQUNsQ0YsMEJBQXNCLENBQUMsS0FBRCxDQUF0QjtBQUNILEdBRkQsQ0FUc0IsQ0FhdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLHdEQUFEO0FBQVMsVUFBSSxFQUFFRCxtQkFBZjtBQUFvQyxtQkFBYSxFQUFFRTtBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSSxxRUFBQyw4REFBRDtBQUFZLFVBQUksRUFBRUYsbUJBQWxCO0FBQXVDLFdBQUssRUFBRUc7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBR0k7QUFBQSxnQkFBT0wsS0FBSyxDQUFDTTtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISixFQUtRTixLQUFLLENBQUNPLGNBQU4sZ0JBQXVCLHFFQUFDLHlEQUFEO0FBQVEsV0FBSyxFQUFFO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUF2QixnQkFBaUQscUVBQUMseURBQUQ7QUFBUSxXQUFLLEVBQUU7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTHpEO0FBQUEsa0JBREo7QUFVSCxDQXRDRDs7R0FBTVIsTTs7S0FBQUEsTTtBQXdDU0EscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBUb29sYmFyIGZyb20gXCIuLi9Ub29sYmFyL1Rvb2xiYXJcIlxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vVUkvRm9vdGVyL0Zvb3RlclwiXG5pbXBvcnQgU2lkZURyYXdlciBmcm9tIFwiLi4vU2lkZURyYXdlci9TaWRlRHJhd2VyXCJcblxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgW3NpZGVEcmF3ZXJJc1Zpc2libGUsIHNldFNpZGVEcmF3ZXJJc1Zpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgLy8gY29uc3QgW2RlbGF5Rm9vdGVyLCBzZXREZWxheUZvb3Rlcl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuXG4gICAgY29uc3Qgc2lkZURyYXdlclRvZ2dsZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICAgIHNldFNpZGVEcmF3ZXJJc1Zpc2libGUoIXNpZGVEcmF3ZXJJc1Zpc2libGUpXG4gICAgfVxuXG4gICAgY29uc3Qgc2lkZURyYXdlckNsb3NlZEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICAgIHNldFNpZGVEcmF3ZXJJc1Zpc2libGUoZmFsc2UpXG4gICAgfVxuXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgICAgaWYgKHByb3BzLmlzVHJhY2tpbmdQYWdlKSB7XG4gICAgLy8gICAgICAgICBzZXREZWxheUZvb3Rlcih0cnVlKVxuICAgIC8vICAgICB9XG4gICAgLy8gfSwgW2RlbGF5Rm9vdGVyXSlcblxuXG4gICAgLy8gY29uc3QgZGVsYXlGb290ZXJIYW5kbGVyID0gKCkgPT4ge1xuICAgIC8vICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAvLyAgICAgICAgIGxldCBkZWxheWVkRm9vdGVyID0gZm9vdGVyXG4gICAgLy8gICAgICAgICByZXR1cm4gZGVsYXllZEZvb3RlclxuICAgIC8vICAgICB9LCA1MDAwKTtcbiAgICAvLyAgICAgcmV0dXJuIG51bGxcbiAgICAvLyB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFRvb2xiYXIgb3Blbj17c2lkZURyYXdlcklzVmlzaWJsZX0gZHJhd2VyVG9nZ2xlcj17c2lkZURyYXdlclRvZ2dsZUhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U2lkZURyYXdlciBvcGVuPXtzaWRlRHJhd2VySXNWaXNpYmxlfSBjbG9zZT17c2lkZURyYXdlckNsb3NlZEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8bWFpbj57cHJvcHMuY2hpbGRyZW59PC9tYWluPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByb3BzLmlzVHJhY2tpbmdQYWdlID8gPEZvb3RlciBkZWxheT17NTAwMH0gLz4gOiA8Rm9vdGVyIGRlbGF5PXswfSAvPlxuICAgICAgICAgICAgfVxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout/Layout.js\n");

/***/ })

})