/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/app/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/app/layout.js":
/*!**********************************!*\
  !*** ./src/client/app/layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n      to: \"/index\",\n      style: {\n        marginLeft: \"10px\"\n      }\n    }, \"\\u9996\\u9875\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n      style: {\n        marginLeft: \"10px\"\n      },\n      onClick: this.click,\n      to: \"/list\"\n    }, \"\\u5217\\u8868\\u9875\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n      to: \"/about\",\n      style: {\n        marginLeft: \"10px\"\n      }\n    }, \"\\u5173\\u4E8E\"), this.props.children);\n  }\n\n} //带入路由信息\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_2__[\"withRouter\"])(Index));\n\n//# sourceURL=webpack:///./src/client/app/layout.js?");

/***/ }),

/***/ "./src/client/pages/data.js":
/*!**********************************!*\
  !*** ./src/client/pages/data.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst data = [{\n  \"title\": \"深入浅出TypeScript：从基础知识到类型编程\",\n  \"desc\": \"Vue3 源码及开发必备基础，从基础知识到类型工具设计，从理论到实战，手把手让你从零基础成为进阶使用者。\",\n  \"img\": \"https://user-gold-cdn.xitu.io/2019/11/8/16e4ab5d6aff406a?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1\"\n}, {\n  \"title\": \"SVG 动画开发实战手册\",\n  \"desc\": \"从0到1，学习SVG动画开发知识，快速高效完成SVG动画效果开发。\",\n  \"img\": \"https://user-gold-cdn.xitu.io/2019/9/26/16d6bda264ac27e4?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1\"\n}, {\n  \"title\": \"预售JavaScript 设计模式核⼼原理与应⽤实践\",\n  \"desc\": \"通俗易懂的编程“套路“学。带你深入看似高深实则接地气的设计模式原理，在实际场景中内化设计模式的”道“与”术“。学会驾驭代码，而非被其奴役。\",\n  \"img\": \"https://user-gold-cdn.xitu.io/2019/9/16/16d382e623923d91?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1\"\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (data);\n\n//# sourceURL=webpack:///./src/client/pages/data.js?");

/***/ }),

/***/ "./src/client/pages/index.js":
/*!***********************************!*\
  !*** ./src/client/pages/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n //组件\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n  }\n\n  handlerClick() {\n    alert('一起来玩 react 服务端渲染..');\n  }\n\n  render() {\n    const str = 'hello,world.';\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      onClick: this.handlerClick\n    }, str);\n  }\n\n}\n\n//# sourceURL=webpack:///./src/client/pages/index.js?");

/***/ }),

/***/ "./src/client/pages/list.js":
/*!**********************************!*\
  !*** ./src/client/pages/list.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"./src/client/pages/data.js\");\n\n //导入  - 假数据\n\n //组件\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n    const initialData = props.staticContext.initialData || {};\n    this.state = initialData;\n  } //静态方法  数据预取方法\n\n\n  static async getInitialProps() {\n    //模拟数据请求方法\n    const fetchData = () => {\n      return new Promise(resolve => {\n        setTimeout(() => {\n          resolve({\n            code: 0,\n            data: _data__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n          });\n        }, 100);\n      });\n    };\n\n    let res = await fetchData();\n    return res;\n  }\n\n  handlerClick() {\n    alert('一起来玩 react 服务端渲染');\n  }\n\n  render() {\n    //渲染逻辑\n    const {\n      code,\n      data\n    } = this.state;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, data && data.map((item, index) => {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        key: index\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, item.desc));\n    }), !data && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"\\u6682\\u65E0\\u6570\\u636E\"));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/client/pages/list.js?");

/***/ }),

/***/ "./src/client/router/index.js":
/*!************************************!*\
  !*** ./src/client/router/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/layout */ \"./src/client/app/layout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n// src/client/router/indxex.js\n//路由配置文件\n\n\n\n\nconst Page404 = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, \"not found\"); //服务端也会用到所以通过参数的方式将配置传递进来\n\n\nfunction App({\n  routeList\n}) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_app_layout__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Switch\"], null, routeList.map(item => {\n    //判断是否有初始数据\n    return item.initialData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n      key: item.path,\n      exact: item.exact,\n      path: item.path,\n      render: props => {\n        props.initialData = item.initialData;\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(item.component, props);\n      }\n    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], _extends({\n      key: item.path\n    }, item));\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n    to: \"*\",\n    component: Page404\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/client/router/index.js?");

/***/ }),

/***/ "./src/client/router/route-config.js":
/*!*******************************************!*\
  !*** ./src/client/router/route-config.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/index */ \"./src/client/pages/index.js\");\n/* harmony import */ var _pages_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/list */ \"./src/client/pages/list.js\");\n\n\n\nfunction pageNotFound() {\n  return /*#__PURE__*/React.createElement(\"div\", null, \"404\\u9875\\u9762\");\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  path: '/index',\n  component: _pages_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  exact: true\n}, {\n  path: '/list',\n  component: _pages_list__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  exact: true\n}, {\n  path: '*',\n  component: pageNotFound,\n  exact: true\n}]);\n\n//# sourceURL=webpack:///./src/client/router/route-config.js?");

/***/ }),

/***/ "./src/server/app/index.js":
/*!*********************************!*\
  !*** ./src/server/app/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _middlewares_react_ssr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../middlewares/react-ssr */ \"./src/server/middlewares/react-ssr.js\");\n/* harmony import */ var koa2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa2 */ \"koa2\");\n/* harmony import */ var koa2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa2__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa-static */ \"koa-static\");\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa_static__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _share_pro_config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../share/pro-config.js */ \"./src/share/pro-config.js\");\n/* harmony import */ var _share_pro_config_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_share_pro_config_js__WEBPACK_IMPORTED_MODULE_3__);\n//web 服务启动入口对象\n\n\n\n\nconst port = _share_pro_config_js__WEBPACK_IMPORTED_MODULE_3___default.a.nodeServerPort || process.env.PORT;\nconst app = new koa2__WEBPACK_IMPORTED_MODULE_1___default.a();\nconsole.log(\"port is: ---->\", port); //设置可访问的静态资源\n\napp.use(koa_static__WEBPACK_IMPORTED_MODULE_2___default()('./dist/static')); //ssr 中间件\n\napp.use(_middlewares_react_ssr__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); //启动服务\n\napp.listen(port);\nconsole.log('server is start .', `http://localhost:${port}`);\n\n//# sourceURL=webpack:///./src/server/app/index.js?");

/***/ }),

/***/ "./src/server/middlewares/react-ssr.js":
/*!*********************************************!*\
  !*** ./src/server/middlewares/react-ssr.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _client_router_route_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../client/router/route-config */ \"./src/client/router/route-config.js\");\n/* harmony import */ var _share_match_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../share/match-route */ \"./src/share/match-route.js\");\n/* harmony import */ var _client_router_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../client/router/index */ \"./src/client/router/index.js\");\n//完成 react ssr 工作的中间件\n//引入Index 组件\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (ctx, next) => {\n  const path = ctx.request.path;\n\n  if (path.indexOf('.') > -1) {\n    ctx.body = null;\n    return next();\n  }\n\n  console.log('ctx.request.path.', ctx.request.path); //查找到的目标路由对象\n\n  let matchResult = Object(_share_match_route__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(path, _client_router_route_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n  let targetRoute = matchResult; //得到数据\n\n  let fetchDataFn = targetRoute.component.getInitialProps;\n  let fetchResult = {};\n\n  if (fetchDataFn) {\n    fetchResult = await fetchDataFn();\n  } //将预取数据在这里传递过去 组内通过props.staticContext获取\n\n\n  const context = {\n    initialData: fetchResult\n  };\n  console.log('---> start render to string');\n\n  try {\n    const html = await Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n      location: path,\n      context: context\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_client_router_index__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      routeList: _client_router_route_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    })));\n    console.log('data', context);\n    console.log('html');\n    console.log('html', html);\n    ctx.body = `<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>my react ssr</title>\n</head>\n<body>\n    <div id=\"root\">\n       ${html}\n    </div>\n    <textarea id=\"ssrTextInitData\" style=\"display:none;\">\n    ${JSON.stringify(fetchResult)}\n    </textarea>\n</body>\n</html><script type=\"text/javascript\"  src=\"/index.js\"></script>`;\n    await next();\n  } catch (e) {\n    console.log('error happen: ', e);\n  }\n});\n\n//# sourceURL=webpack:///./src/server/middlewares/react-ssr.js?");

/***/ }),

/***/ "./src/share/match-route.js":
/*!**********************************!*\
  !*** ./src/share/match-route.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((path, routeList) => {\n  let route;\n\n  for (var item of routeList) {\n    console.log('in loop', path, item, Object(react_router__WEBPACK_IMPORTED_MODULE_0__[\"matchPath\"])((path, item)));\n\n    if (Object(react_router__WEBPACK_IMPORTED_MODULE_0__[\"matchPath\"])(path, item.path)) {\n      route = item; //查找到第一个路由后停止查找\n\n      break;\n    }\n  }\n\n  console.log('result is', route);\n  return route;\n});\n\n//# sourceURL=webpack:///./src/share/match-route.js?");

/***/ }),

/***/ "./src/share/pro-config.js":
/*!*********************************!*\
  !*** ./src/share/pro-config.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  wdsPort: 9002,\n  //webpack dev server 服务的运行端口\n  nodeServerPort: 9001,\n  //node server 的监听端口\n  asyncComponentKey: '__IS_ASYNC_COMP_FLAG__' //标志组件是否是按需加载 turn | false\n\n};\n\n//# sourceURL=webpack:///./src/share/pro-config.js?");

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-static\");\n\n//# sourceURL=webpack:///external_%22koa-static%22?");

/***/ }),

/***/ "koa2":
/*!***********************!*\
  !*** external "koa2" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa2\");\n\n//# sourceURL=webpack:///external_%22koa2%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");\n\n//# sourceURL=webpack:///external_%22react-router%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });