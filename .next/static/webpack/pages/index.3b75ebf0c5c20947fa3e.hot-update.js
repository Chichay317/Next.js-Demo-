webpackHotUpdate_N_E("pages/index",{

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
 //adding metadata


 // Next.js takes the first render cycle and returns it as the pre-rendered HTML code.
// Two forms of pre-rendering are Static Generation(what we should use) and Server side rendering. Using static generation, the page is pre-rendered when you build it for production

function HomePage(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "React Meetups"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Browse a huge list of highly active react meetups"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      meetups: props.meetups
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJwcm9wcyIsIm1lZXR1cHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBQzhCOztBQUU5QjtDQUdBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDdkIsc0JBQ0UscUVBQUMsOENBQUQ7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUNFLFlBQUksRUFBQyxhQURQO0FBRUUsZUFBTyxFQUFDO0FBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBUUUscUVBQUMsc0VBQUQ7QUFBWSxhQUFPLEVBQUVBLEtBQUssQ0FBQ0M7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBWUQsQyxDQUVEOzs7S0FmU0YsUTtBQTBDVDtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zYjc1ZWJmMGM1YzIwOTQ3ZmEzZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gb3VyLWRvbWFpbi5jb20vXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjsgLy9hZGRpbmcgbWV0YWRhdGFcclxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5pbXBvcnQgTWVldHVwTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3RcIjtcclxuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIE5leHQuanMgdGFrZXMgdGhlIGZpcnN0IHJlbmRlciBjeWNsZSBhbmQgcmV0dXJucyBpdCBhcyB0aGUgcHJlLXJlbmRlcmVkIEhUTUwgY29kZS5cclxuLy8gVHdvIGZvcm1zIG9mIHByZS1yZW5kZXJpbmcgYXJlIFN0YXRpYyBHZW5lcmF0aW9uKHdoYXQgd2Ugc2hvdWxkIHVzZSkgYW5kIFNlcnZlciBzaWRlIHJlbmRlcmluZy4gVXNpbmcgc3RhdGljIGdlbmVyYXRpb24sIHRoZSBwYWdlIGlzIHByZS1yZW5kZXJlZCB3aGVuIHlvdSBidWlsZCBpdCBmb3IgcHJvZHVjdGlvblxyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2UocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+UmVhY3QgTWVldHVwczwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICBjb250ZW50PVwiQnJvd3NlIGEgaHVnZSBsaXN0IG9mIGhpZ2hseSBhY3RpdmUgcmVhY3QgbWVldHVwc1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8TWVldHVwTGlzdCBtZWV0dXBzPXtwcm9wcy5tZWV0dXBzfSAvPlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59XHJcblxyXG4vL3N0YXRpYyBnZW5lcmF0aW9uIGV4YW1wbGUuIGl0IGhhcyB0byBiZSB3cml0dGVuIGluc2lkZSBvZiB0aGUgcGFnZXMgZm9sZGVyIGFuZCB0aGUgbmFtZSBtdXN0IGJlIGdldFN0YXRpY1Byb3BzLiBOZXh0LmpzIHdpbGwgZmlyc3QgY2FsbCB0aGlzIGJlZm9yZSB0aGUgY29tcG9uZW50IGZ1bmN0aW9uLiBpdCBjYW4gYmUgYXN5bmMgYXMgTmV4dC5qcyB3aWxsIHdhaXQgZm9yIHRoaXMgcHJvbWlzZSB0byBiZSByZXNvbHZlZCBzbyB0aGF0IHRoZSBwYWdlIGNhbiBiZSBwcmUtcmVuZGVyZWQgd2l0aCB0aGUgcmVxdWlyZWQgZGF0YS4gaXQgZG9lc24ndCBleGVjdXRlIG9uIHRoZSBjbGllbnQgb3Igc2VydmVyIHNpZGUgYnV0IGR1cmluZyB0aGUgYnVpbGQgcHJvY2Vzcy4gdGhlIHByb3BzIG9iamVjdCBpdCByZXR1cm5zIGlzIHRoZSBwcm9wcyBwYXNzZWQgdG8gdGhlIGNvbXBvbmVudCBmdW5jdGlvbiBvciB0byBiZSBzZXQgaW4gdGhlIGNvbXBvbmVudCBmdW5jdGlvbi4gcmV2YWxpZGF0ZSB0YWtlcyBhIG51bWJlciB3aGljaCBpcyB0aGUgbnVtYmVyIG9mIHNlY29uZHMgTmV4dC5qcyB3aWxsIHdhaXQgYmVmb3JlIGl0IHdpbGwgcmVnZW5lcmF0ZSB0aGUgcGFnZSBmb3IgYW4gaW5jb21pbmcgcmVxdWVzdFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgLy8gZmV0Y2ggZGF0YSBmcm9tIGFuIEFQSVxyXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXHJcbiAgICBcIm1vbmdvZGIrc3J2Oi8vQ29kZURlZXY6Q2hpY2hheTMxN0BjbHVzdGVyMC5tcWs0bHpyLm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcclxuICApO1xyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7IC8vYWxsb3dzIHVzIHRvIGdldCBob2xkIG9mIHRoZSBkYXRhYmFzZSB3ZSBhcmUgY29ubmVjdGluZ1xyXG5cclxuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJtZWV0dXBzXCIpO1xyXG5cclxuICBjb25zdCBtZWV0dXBzID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCgpLnRvQXJyYXkoKTtcclxuXHJcbiAgY2xpZW50LmNsb3NlKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBtZWV0dXBzOiBtZWV0dXBzLm1hcCgobWVldHVwKSA9PiAoe1xyXG4gICAgICAgIHRpdGxlOiBtZWV0dXAudGl0bGUsXHJcbiAgICAgICAgYWRkcmVzczogbWVldHVwLmFkZHJlc3MsXHJcbiAgICAgICAgaW1hZ2U6IG1lZXR1cC5pbWFnZSxcclxuICAgICAgICBpZDogbWVldHVwLl9pZC50b1N0cmluZygpLFxyXG4gICAgICB9KSksXHJcbiAgICB9LFxyXG4gICAgcmV2YWxpZGF0ZTogMSxcclxuICB9O1xyXG59XHJcblxyXG4vLyBTZXJ2ZXIgc2lkZSByZW5kZXJpbmcgZXhhbXBsZS4gdGhpcyB3aWxsIG5vdCBydW4gZHVyaW5nIHRoZSBidWlsZCBwcm9jZXNzIGJ1dCBhbHdheXMgb24gdGhlIHNlcnZlciBhZnRlciBkZXBsb3ltZW50LiBpdCBydW5zIGZvciBldmVyeSBpbmNvbWluZyByZXF1ZXN0LiB1c2Ugb25seSB3aGVuIHlvdSBoYXZlIGRhdGEgdGhhdCBjaGFuZ2VzIHZlcnkgZnJlcXVlbnRseSBsaWtlIG11bHRpcGxlIHRpbWVzIGV2ZXJ5IHNlY29uZCBhbmQgaWYgeW91IG5lZWQgYWNjZXNzIHRvIHRoZSByZXF1ZXN0L3Jlc3BvbnNlIG9iamVjdCBtYXliZSBmb3IgYXV0aGVudGljYXRpb25cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbi8vICAgY29uc3QgcmVxID0gY29udGV4dC5yZXE7IC8vZ2l2ZXMgYWNjZXNzIHRvIHRoZSBmdWxsIGluY29taW5nIHJlcXVlc3RcclxuLy8gICBjb25zdCByZXMgPSBjb250ZXh0LnJlczsgLy9naXZlcyBhY2Nlc3MgdG8gdGhlIHJlc3BvbnNlIHNlbnQgYmFja1xyXG5cclxuLy8gICAvLyBmZXRjaCBkYXRhIGZyb20gYW4gQVBJXHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHByb3BzOiB7XHJcbi8vICAgICAgIG1lZXR1cHM6IERVTU1ZX01FRVRVUFMsXHJcbi8vICAgICB9LFxyXG4vLyAgIH07XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9