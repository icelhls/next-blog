webpackHotUpdate(1,{

/***/ "./components/Header/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_row__ = __webpack_require__("./node_modules/_antd@3.6.5@antd/lib/row/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_row___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_row__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_menu__ = __webpack_require__("./node_modules/_antd@3.6.5@antd/lib/menu/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_col__ = __webpack_require__("./node_modules/_antd@3.6.5@antd/lib/col/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_col__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_layout__ = __webpack_require__("./node_modules/_antd@3.6.5@antd/lib/layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_layout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/_react@16.4.1@react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link__ = __webpack_require__("./node_modules/_next@6.1.1@next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_head__ = __webpack_require__("./node_modules/_next@6.1.1@next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_TopTips__ = __webpack_require__("./components/TopTips/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__config_constantsData__ = __webpack_require__("./config/constantsData.js");




var _jsxFileName = "F:\\myself\\ctrl\\next-blog3\\next-blog\\components\\Header\\index.js";





var Header = __WEBPACK_IMPORTED_MODULE_3_antd_lib_layout___default.a.Header,
    Content = __WEBPACK_IMPORTED_MODULE_3_antd_lib_layout___default.a.Content;
var routes = [{
  href: __WEBPACK_IMPORTED_MODULE_8__config_constantsData__["h" /* INDEX */],
  txt: __WEBPACK_IMPORTED_MODULE_8__config_constantsData__["j" /* INDEX_TXT */]
}, {
  href: __WEBPACK_IMPORTED_MODULE_8__config_constantsData__["d" /* BLOG */],
  txt: __WEBPACK_IMPORTED_MODULE_8__config_constantsData__["e" /* BLOG_TXT */]
}, {
  href: __WEBPACK_IMPORTED_MODULE_8__config_constantsData__["a" /* ADMIN */],
  txt: __WEBPACK_IMPORTED_MODULE_8__config_constantsData__["b" /* ADMIN_TXT */]
}, {
  href: __WEBPACK_IMPORTED_MODULE_8__config_constantsData__["k" /* LIFE */],
  txt: __WEBPACK_IMPORTED_MODULE_8__config_constantsData__["l" /* LIFE_TXT */]
}, {
  href: __WEBPACK_IMPORTED_MODULE_8__config_constantsData__["m" /* POST_ARTICLE */],
  txt: __WEBPACK_IMPORTED_MODULE_8__config_constantsData__["n" /* POST_ARTICLE_TXT */]
}];

var TopNav = function TopNav(props) {
  return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "/_next/static/style.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  })), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_layout___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Header, {
    style: {
      position: 'fixed',
      height: '64px',
      width: '100%',
      padding: 0,
      zIndex: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_row___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default.a, {
    span: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_col___default.a, {
    span: 17,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_menu___default.a, {
    theme: "dark",
    mode: "horizontal",
    defaultSelectedKeys: ['2'],
    style: {
      lineHeight: '64px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, routes.map(function (item, index) {
    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_menu___default.a.Item, {
      key: item.href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      }
    }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_link___default.a, {
      href: item.href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      }
    }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      }
    }, item.txt)));
  }))))), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Content, {
    style: {
      padding: '0 50px',
      marginTop: 64
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_TopTips__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }))));
};

/* harmony default export */ __webpack_exports__["a"] = (TopNav);

/***/ }),

/***/ "./components/TopTips/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_breadcrumb__ = __webpack_require__("./node_modules/_antd@3.6.5@antd/lib/breadcrumb/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_breadcrumb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_breadcrumb__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_button__ = __webpack_require__("./node_modules/_antd@3.6.5@antd/lib/button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_alert__ = __webpack_require__("./node_modules/_antd@3.6.5@antd/lib/alert/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_alert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_alert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("./node_modules/_react@16.4.1@react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link__ = __webpack_require__("./node_modules/_next@6.1.1@next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_link__);



var _jsxFileName = "F:\\myself\\ctrl\\next-blog3\\next-blog\\components\\TopTips\\index.js";



var TopTips = function TopTips(props) {
  // console.log(props,this,window)

  /*onst pathnameArr = location.pathname.split('/').slice(1);
  const pathBreancrumbList = [
    {
      key:'',
      value:['网站首页']
    },
    {
      key:'Blog',
      value:['文章列表']
    },
    {
      key:'Admin',
      value:['后台管理']
    },
    {
      key:'Life',
      value:['生活记录']
    },
    {
      key:'PostArticle',
      value:['发布文章']
    },
  ]
  const fn = (arr,pathBreancrumbList)=>{
    if(arr.length===1){
      let valueIndex = pathBreancrumbList.findIndex(s=>s.key===arr.join(' '));
      return pathBreancrumbList[valueIndex].value;
    }
    return ['文章列表',arr[1]]
  }*/
  var BreadcrumbItemList = ['']; // const BreadcrumbItemList = fn(pathnameArr,pathBreancrumbList)
  // console.log(BreadcrumbItemList)

  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
    className: "Blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd_lib_alert___default.a, {
    message: "\u535A\u5BA2\u6B63\u5728\u91CD\u6784\u548C\u5F00\u53D1\u4E2D......",
    type: "warning",
    closable: true,
    banner: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_button___default.a, {
    href: "https://github.com/Weibozzz/react-blog",
    icon: "github",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, "Github")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_breadcrumb___default.a, {
    style: {
      margin: '16px 0'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, BreadcrumbItemList.map(function (v, index) {
    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_antd_lib_breadcrumb___default.a.Item, {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      }
    }, "\u7F51\u7AD9\u9996\u9875");
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (TopTips);

/***/ }),

/***/ "./config/constantsData.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return DEV_DOMAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return pageNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return INDEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return INDEX_TXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return BLOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return BLOG_TXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADMIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADMIN_TXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LIFE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return LIFE_TXT; });
/* unused harmony export TEST */
/* unused harmony export TEST_TXT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return POST_ARTICLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return POST_ARTICLE_TXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return COMMON_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return INDEX_TITLE; });
var DEV_DOMAIN = 'http://localhost:7654';
var pageNum = 10; //分页数

var TITLE = 'title';
var ALL = 'all'; //导航路由

var INDEX = '/';
var INDEX_TXT = '网站首页';
var BLOG = '/Blog';
var BLOG_TXT = '文章列表';
var ADMIN = '/Admin';
var ADMIN_TXT = '后台管理';
var LIFE = '/Life';
var LIFE_TXT = '生活记录';
var TEST = '/Test';
var TEST_TXT = '测试';
var POST_ARTICLE = '/PostArticle';
var POST_ARTICLE_TXT = '发布文章'; //seo

var COMMON_TITLE = '>>刘伟波-天天向上';
var INDEX_TITLE = '刘伟波的个人主页';

/***/ }),

/***/ "./node_modules/_antd@3.6.5@antd/lib/button/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = __webpack_require__("./node_modules/_antd@3.6.5@antd/lib/button/button.js");

var _button2 = _interopRequireDefault(_button);

var _buttonGroup = __webpack_require__("./node_modules/_antd@3.6.5@antd/lib/button/button-group.js");

var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_button2['default'].Group = _buttonGroup2['default'];
exports['default'] = _button2['default'];
module.exports = exports['default'];

/***/ })

})
//# sourceMappingURL=1.851d38c6da0b6f717bb6.hot-update.js.map