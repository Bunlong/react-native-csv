module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("8Bbg");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_tabs_style_react_tabs_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("QV/D");
/* harmony import */ var react_tabs_style_react_tabs_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_tabs_style_react_tabs_css__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class CustomApp extends next_app__WEBPACK_IMPORTED_MODULE_2___default.a {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    const pageName = this.props.router.route.substr(1);
    let title = '';

    if (pageName === '') {
      title = 'react-native-csv';
    } else if (pageName === 'docs') {
      title = 'Documentation';
    }

    return __jsx("div", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, " ", `${title} - Powerful CSV Parser for React`), __jsx("link", {
      rel: "shortcut icon",
      type: "image/x-icon",
      href: ""
    }), __jsx("meta", {
      name: "theme-color",
      content: "#ffffff"
    }), __jsx("meta", {
      name: "apple-mobile-web-app-capable",
      content: "yes"
    }), __jsx("meta", {
      name: "apple-mobile-web-app-status-bar-style",
      content: "black"
    }), __jsx("meta", {
      name: "apple-mobile-web-app-title",
      content: "react-native-csv"
    }), __jsx("link", {
      rel: "apple-touch-icon",
      href: ""
    }), __jsx("link", {
      rel: "shortcut icon",
      type: "image/x-icon",
      href: ""
    }), __jsx("link", {
      rel: "stylesheet",
      href: "//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
    }), __jsx("link", {
      rel: "stylesheet",
      href: "//fonts.googleapis.com/css?family=Arvo|Source+Sans+Pro:400,400italic,700|Lato:300,400"
    }), __jsx("link", {
      rel: "stylesheet",
      href: "/static/css/unsemantic.css"
    }), __jsx("link", {
      rel: "stylesheet",
      href: "/static/css/common.css"
    }), __jsx("link", {
      rel: "stylesheet",
      href: "/static/css/prism.css"
    }), pageName === '' ? __jsx("link", {
      rel: "stylesheet",
      href: "/static/css/home.css"
    }) : '', pageName === 'demo' ? __jsx("link", {
      rel: "stylesheet",
      href: "/static/css/demo.css"
    }) : '', __jsx("meta", {
      property: "og:url",
      content: "https://react-native-csv.github.io"
    }), __jsx("meta", {
      property: "og:type",
      content: "website"
    }), __jsx("meta", {
      property: "og:title",
      content: "react-native-csv"
    }), __jsx("meta", {
      property: "og:description",
      content: "The fastest in-browser CSV (or delimited text) parser for React."
    }), __jsx("meta", {
      property: "og:image",
      content: "/static/images/react-native-csv.png"
    }), __jsx("meta", {
      name: "twitter:card",
      content: "summary_large_image"
    }), __jsx("meta", {
      name: "twitter:site",
      content: "@bunlongvan"
    }), __jsx("meta", {
      name: "twitter:creator",
      content: "@bunlongvan"
    }), __jsx("meta", {
      name: "twitter:title",
      content: "react-native-csv"
    }), __jsx("meta", {
      name: "twitter:description",
      content: "The fastest in-browser CSV (or delimited text) parser for React."
    }), __jsx("meta", {
      name: "twitter:image",
      content: "https://react-native-csv.github.io/static/images/react-native-csv.png"
    }), __jsx("link", {
      rel: "shortcut icon",
      href: "/static/favicon.ico",
      type: "image/x-icon"
    }), __jsx("link", {
      rel: "icon",
      href: "/static/favicon-32.png",
      sizes: "32x32",
      type: "image/png"
    }), __jsx("link", {
      rel: "apple-touch-icon-precomposed",
      href: "/static/favicon-152.png",
      type: "image/png",
      sizes: "152x152"
    }), __jsx("link", {
      rel: "apple-touch-icon-precomposed",
      href: "/static/favicon-120.png",
      type: "image/png",
      sizes: "120x120"
    }), __jsx("link", {
      rel: "icon",
      href: "/static/favicon-96.png",
      sizes: "96x96",
      type: "image/png"
    })), __jsx("div", null, __jsx(Component, pageProps)), __jsx("footer", null, __jsx("div", {
      className: "footer-main"
    }, __jsx("div", {
      className: "grid-container"
    }, __jsx("div", {
      className: "grid-40 text-center"
    }, __jsx("div", {
      className: "logo"
    }), __jsx("br", null), __jsx("br", null), "react-native-csv by", ' ', __jsx("a", {
      href: "https://github.com/bunlong"
    }, "Bunlong"), __jsx("br", null), "\xA9 2021"), __jsx("div", {
      className: "grid-15 mobile-grid-50 links"
    }, __jsx("h5", null, "Learn"), __jsx("a", {
      href: "/docs"
    }, "Documentation")), __jsx("div", {
      className: "grid-15 mobile-grid-50 links"
    }, __jsx("h5", null, "Project"), __jsx("a", {
      href: "https://github.com/Bunlong/react-papaparse",
      target: "_blank"
    }, "react-papaparse"))))), __jsx("script", {
      type: "text/javascript",
      src: "/static/js/prism.js"
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CustomApp);

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "QV/D":
/***/ (function(module, exports) {



/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });