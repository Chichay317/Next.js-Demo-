webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/react/cjs/react.production.min.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\chich\\OneDrive\\Desktop\\React-Practice\\Next.Js Advanced Project\\pages\\index.js";
// our-domain.com/


 // Next.js takes the first render cycle and returns it as the pre-rendered HTML code.
// Two forms of pre-rendering are Static Generation(what we should use) and Server side rendering. Using static generation, the page is pre-rendered when you build it for production

function HomePage(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      meetups: props.meetups
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
} //static generation example. it has to be written inside of the pages folder and the name must be getStaticProps. Next.js will first call this before the component function. it can be async as Next.js will wait for this promise to be resolved so that the page can be pre-rendered with the required data. it doesn't execute on the client or server side but during the build process. the props object it returns is the props passed to the component function or to be set in the component function. revalidate takes a number which is the number of seconds Next.js will wait before it will regenerate the page for an incoming request


_c = HomePage;
// Server side rendering example. this will not run during the build process but always on the server after deployment. it runs for every incoming request. use only when you have data that changes very frequently like multiple times every second and if you need access to the request/response object maybe for authentication
// export async function getServerSideProps(context) {
//   const req = context.req; //gives access to the full incoming request
//   const res = context.res; //gives access to the response sent back
//   // fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJwcm9wcyIsIm1lZXR1cHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtDQUdBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDdkIsc0JBQ0UscUVBQUMsOENBQUQ7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSxxRUFBQyxzRUFBRDtBQUFZLGFBQU8sRUFBRUEsS0FBSyxDQUFDQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFNRCxDLENBRUQ7OztLQVRTRixRO0FBb0NUO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWVBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjBlZGI2Y2ZiMTc1NTE5Yjg2ZDM5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBvdXItZG9tYWluLmNvbS9cclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XHJcbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdFwiO1xyXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gTmV4dC5qcyB0YWtlcyB0aGUgZmlyc3QgcmVuZGVyIGN5Y2xlIGFuZCByZXR1cm5zIGl0IGFzIHRoZSBwcmUtcmVuZGVyZWQgSFRNTCBjb2RlLlxyXG4vLyBUd28gZm9ybXMgb2YgcHJlLXJlbmRlcmluZyBhcmUgU3RhdGljIEdlbmVyYXRpb24od2hhdCB3ZSBzaG91bGQgdXNlKSBhbmQgU2VydmVyIHNpZGUgcmVuZGVyaW5nLiBVc2luZyBzdGF0aWMgZ2VuZXJhdGlvbiwgdGhlIHBhZ2UgaXMgcHJlLXJlbmRlcmVkIHdoZW4geW91IGJ1aWxkIGl0IGZvciBwcm9kdWN0aW9uXHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZShwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxIZWFkPjwvSGVhZD5cclxuICAgICAgPE1lZXR1cExpc3QgbWVldHVwcz17cHJvcHMubWVldHVwc30gLz5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuLy9zdGF0aWMgZ2VuZXJhdGlvbiBleGFtcGxlLiBpdCBoYXMgdG8gYmUgd3JpdHRlbiBpbnNpZGUgb2YgdGhlIHBhZ2VzIGZvbGRlciBhbmQgdGhlIG5hbWUgbXVzdCBiZSBnZXRTdGF0aWNQcm9wcy4gTmV4dC5qcyB3aWxsIGZpcnN0IGNhbGwgdGhpcyBiZWZvcmUgdGhlIGNvbXBvbmVudCBmdW5jdGlvbi4gaXQgY2FuIGJlIGFzeW5jIGFzIE5leHQuanMgd2lsbCB3YWl0IGZvciB0aGlzIHByb21pc2UgdG8gYmUgcmVzb2x2ZWQgc28gdGhhdCB0aGUgcGFnZSBjYW4gYmUgcHJlLXJlbmRlcmVkIHdpdGggdGhlIHJlcXVpcmVkIGRhdGEuIGl0IGRvZXNuJ3QgZXhlY3V0ZSBvbiB0aGUgY2xpZW50IG9yIHNlcnZlciBzaWRlIGJ1dCBkdXJpbmcgdGhlIGJ1aWxkIHByb2Nlc3MuIHRoZSBwcm9wcyBvYmplY3QgaXQgcmV0dXJucyBpcyB0aGUgcHJvcHMgcGFzc2VkIHRvIHRoZSBjb21wb25lbnQgZnVuY3Rpb24gb3IgdG8gYmUgc2V0IGluIHRoZSBjb21wb25lbnQgZnVuY3Rpb24uIHJldmFsaWRhdGUgdGFrZXMgYSBudW1iZXIgd2hpY2ggaXMgdGhlIG51bWJlciBvZiBzZWNvbmRzIE5leHQuanMgd2lsbCB3YWl0IGJlZm9yZSBpdCB3aWxsIHJlZ2VuZXJhdGUgdGhlIHBhZ2UgZm9yIGFuIGluY29taW5nIHJlcXVlc3RcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIC8vIGZldGNoIGRhdGEgZnJvbSBhbiBBUElcclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxyXG4gICAgXCJtb25nb2RiK3NydjovL0NvZGVEZWV2OkNoaWNoYXkzMTdAY2x1c3RlcjAubXFrNGx6ci5tb25nb2RiLm5ldC9tZWV0dXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiXHJcbiAgKTtcclxuICBjb25zdCBkYiA9IGNsaWVudC5kYigpOyAvL2FsbG93cyB1cyB0byBnZXQgaG9sZCBvZiB0aGUgZGF0YWJhc2Ugd2UgYXJlIGNvbm5lY3RpbmdcclxuXHJcbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcclxuXHJcbiAgY29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KCk7XHJcblxyXG4gIGNsaWVudC5jbG9zZSgpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbWVldHVwczogbWVldHVwcy5tYXAoKG1lZXR1cCkgPT4gKHtcclxuICAgICAgICB0aXRsZTogbWVldHVwLnRpdGxlLFxyXG4gICAgICAgIGFkZHJlc3M6IG1lZXR1cC5hZGRyZXNzLFxyXG4gICAgICAgIGltYWdlOiBtZWV0dXAuaW1hZ2UsXHJcbiAgICAgICAgaWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKSxcclxuICAgICAgfSkpLFxyXG4gICAgfSxcclxuICAgIHJldmFsaWRhdGU6IDEsXHJcbiAgfTtcclxufVxyXG5cclxuLy8gU2VydmVyIHNpZGUgcmVuZGVyaW5nIGV4YW1wbGUuIHRoaXMgd2lsbCBub3QgcnVuIGR1cmluZyB0aGUgYnVpbGQgcHJvY2VzcyBidXQgYWx3YXlzIG9uIHRoZSBzZXJ2ZXIgYWZ0ZXIgZGVwbG95bWVudC4gaXQgcnVucyBmb3IgZXZlcnkgaW5jb21pbmcgcmVxdWVzdC4gdXNlIG9ubHkgd2hlbiB5b3UgaGF2ZSBkYXRhIHRoYXQgY2hhbmdlcyB2ZXJ5IGZyZXF1ZW50bHkgbGlrZSBtdWx0aXBsZSB0aW1lcyBldmVyeSBzZWNvbmQgYW5kIGlmIHlvdSBuZWVkIGFjY2VzcyB0byB0aGUgcmVxdWVzdC9yZXNwb25zZSBvYmplY3QgbWF5YmUgZm9yIGF1dGhlbnRpY2F0aW9uXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4vLyAgIGNvbnN0IHJlcSA9IGNvbnRleHQucmVxOyAvL2dpdmVzIGFjY2VzcyB0byB0aGUgZnVsbCBpbmNvbWluZyByZXF1ZXN0XHJcbi8vICAgY29uc3QgcmVzID0gY29udGV4dC5yZXM7IC8vZ2l2ZXMgYWNjZXNzIHRvIHRoZSByZXNwb25zZSBzZW50IGJhY2tcclxuXHJcbi8vICAgLy8gZmV0Y2ggZGF0YSBmcm9tIGFuIEFQSVxyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBwcm9wczoge1xyXG4vLyAgICAgICBtZWV0dXBzOiBEVU1NWV9NRUVUVVBTLFxyXG4vLyAgICAgfSxcclxuLy8gICB9O1xyXG4vLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==