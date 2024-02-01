"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/dist/shared/lib/styled-jsx"
var styled_jsx_ = __webpack_require__(7561);
var styled_jsx_default = /*#__PURE__*/__webpack_require__.n(styled_jsx_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/NavBar.js



function NavBar() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "jsx-8b973ef7f9b90c9e",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "jsx-8b973ef7f9b90c9e" + " " + "nav-link underline yellow",
                    children: "Home"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/about",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "jsx-8b973ef7f9b90c9e" + " " + "nav-link underline yellow",
                    children: "About"
                })
            }),
            jsx_runtime_.jsx((styled_jsx_default()), {
                id: "8b973ef7f9b90c9e",
                children: 'nav.jsx-8b973ef7f9b90c9e{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:45px 60px;font-size:30px}.nav-link.jsx-8b973ef7f9b90c9e{text-decoration:none;-webkit-transition:color.3s;-moz-transition:color.3s;-o-transition:color.3s;transition:color.3s;font-family:"Shantell Sans",cursive}.underline.jsx-8b973ef7f9b90c9e{line-height:1.2;font-weight:700;background-image:-webkit-linear-gradient(transparent -webkit-calc(100% - 3px),#000 3px);background-image:-moz-linear-gradient(transparent -moz-calc(100% - 3px),#000 3px);background-image:-o-linear-gradient(transparent calc(100% - 3px),#000 3px);background-image:linear-gradient(transparent calc(100% - 3px),#000 3px);background-repeat:no-repeat;-webkit-background-size:0%100%;-moz-background-size:0%100%;-o-background-size:0%100%;background-size:0%100%;-webkit-transition:background-size.8s;-moz-transition:background-size.8s;-o-transition:background-size.8s;transition:background-size.8s;color:#000;cursor:pointer}@media(min-width:1e3px){.underline.jsx-8b973ef7f9b90c9e{}}.underline.yellow.jsx-8b973ef7f9b90c9e{background-image:-webkit-linear-gradient(transparent 60%,#f8cd07 40%);background-image:-moz-linear-gradient(transparent 60%,#f8cd07 40%);background-image:-o-linear-gradient(transparent 60%,#f8cd07 40%);background-image:linear-gradient(transparent 60%,#f8cd07 40%)}.underline.jsx-8b973ef7f9b90c9e:hover{-webkit-background-size:100%100%;-moz-background-size:100%100%;-o-background-size:100%100%;background-size:100%100%}'
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/Layout.js


function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(NavBar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: children
            })
        ]
    });
};

;// CONCATENATED MODULE: ./pages/_app.js



function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
};


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7561:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/styled-jsx");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664], () => (__webpack_exec__(3043)));
module.exports = __webpack_exports__;

})();