module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "001b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_944be45c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4773");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_944be45c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_944be45c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_944be45c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "05f7":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bean_five.b905dbab.png";

/***/ }),

/***/ "32c9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/point_ten.056fbde1.png";

/***/ }),

/***/ "392c":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/give_up.c8c1c287.png";

/***/ }),

/***/ "4773":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "51f8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "9639":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bean_one.84279a9a.png";

/***/ }),

/***/ "c765":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bean_500.6732d3b0.png";

/***/ }),

/***/ "e0df":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Btn_vue_vue_type_style_index_0_id_1f9cb324_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("51f8");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Btn_vue_vue_type_style_index_0_id_1f9cb324_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Btn_vue_vue_type_style_index_0_id_1f9cb324_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Btn_vue_vue_type_style_index_0_id_1f9cb324_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "e125":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/point_five.31fb23b0.png";

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"183e054f-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/button/src/Btn.vue?vue&type=template&id=1f9cb324&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"btn",class:[ {'btnClick': _vm.loadingBtn},  _vm.btnSize  ],style:(_vm.typeBtn),on:{"mouseover":_vm.itemHover,"mouseout":_vm.removeHover,"click":_vm.clickBtn}},[_vm._t("default",[_vm._v("按钮")])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/button/src/Btn.vue?vue&type=template&id=1f9cb324&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/button/src/Btn.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Btnvue_type_script_lang_js_ = ({
  name: "zzm-btn",
  props: {
    loading: Boolean,
    type: String,
    size: String
  },
  data() {
    return {
      loadingBtn: this.loading,
      typeBtn: {
        background: "#409EFF"
      },
     btnSize:'btnSize',
     sss: 'aaa'
    };
  },
  watch: {
    loading(data) {
      this.loadingBtn = data;
    },
    type(data) {
      // console.log(data);
      this.type = data;
      this.initBtnType();
    },
    size(data){
      // console.log(data, "size");
      this.size = data;
      this.initBtnSize();
    }
  },
  methods: {
    init() {
      this.initBtnType();
      this.initBtnSize()
    },
    initBtnType() {
      switch (this.type) {
        case "primary":
          this.typeBtn.background = "#409EFF";
          break;
        case "success":
          this.typeBtn.background = "#67C23A";
          break;
        case "info":
          this.typeBtn.background = "#909399";
          break;
        case "warning":
          this.typeBtn.background = "#e6a23c";
          break;
        case "danger":
          this.typeBtn.background = "#f56c6c";
          break;
        default:
          this.typeBtn.background = "#409EFF";
      }
    },
    initBtnSize() {
      switch (this.size) {
        case "medium":
          this.btnSize = "btnSize-medium";
          break;
        case "small":
          this.btnSize = "btnSize-small";
          break;
        case "mini":
          this.btnSize = "btnSize-mini";
          break;
        default:
          this.btnSize = "btnSize";
      }
    },
    initBtnHoverType() {
      switch (this.type) {
        case "primary":
          this.typeBtn.background = "#66b1ff";
          break;
        case "success":
          this.typeBtn.background = "#85ce61";
          break;
        case "info":
          this.typeBtn.background = "#a6a9ad";
          break;
        case "warning":
          this.typeBtn.background = "#ebb563";
          break;
        case "danger":
          this.typeBtn.background = "#f78989";
          break;
        default:
          this.typeBtn.background = "#409EFF";
      }
    },
    itemHover() {
      this.initBtnHoverType();
    },
    removeHover() {
      this.initBtnType();
    },
    clickBtn() {
      this.$emit("click", true);
    }
  },
  mounted() {
    this.init();
  }
});

// CONCATENATED MODULE: ./packages/button/src/Btn.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Btnvue_type_script_lang_js_ = (Btnvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/button/src/Btn.vue?vue&type=style&index=0&id=1f9cb324&scoped=true&lang=css&
var Btnvue_type_style_index_0_id_1f9cb324_scoped_true_lang_css_ = __webpack_require__("e0df");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/button/src/Btn.vue






/* normalize component */

var component = normalizeComponent(
  src_Btnvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "1f9cb324",
  null
  
)

/* harmony default export */ var Btn = (component.exports);
// CONCATENATED MODULE: ./packages/button/index.js

// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
Btn.install = function (Vue) {
  Vue.component(Btn.name, Btn)
}

// 默认导出组件
/* harmony default export */ var packages_button = (Btn);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"183e054f-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/turntable/src/index.vue?vue&type=template&id=944be45c&scoped=true&
var srcvue_type_template_id_944be45c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('div',{staticClass:"wheel-main"},[_c('div',{staticClass:"wheel-pointer",on:{"click":function($event){return _vm.beginRotate()}}}),_c('canvas',{style:(_vm.rotateBgStyle),attrs:{"width":"600","height":"400","id":"canvas_bg"}}),_c('div',{staticClass:"wheel-bg",style:(_vm.rotateStyle)},[_c('div',{staticClass:"prize-list"},_vm._l((_vm.prizeList),function(item,index){return _c('div',{key:index,staticClass:"prize-item",style:(item.style)},[_c('div',{staticClass:"prize-pic"},[_c('img',{attrs:{"src":item.icon}})]),_c('div',{staticClass:"prize-type"},[_vm._v(_vm._s(item.name))])])}),0)])]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.prize),expression:"prize"}],staticClass:"toast"},[_c('div',{staticClass:"toast-container"},[_c('div',{staticClass:"toast-picture",class:_vm.prize && _vm.prize.isPrize === 1 ? 'congratulation-img' : 'sorry-img'}),_c('div',{staticClass:"close",on:{"click":function($event){return _vm.closeToast()}}}),_c('div',{staticClass:"toast-title"},[_vm._v(_vm._s(_vm.toastTitle))]),_c('div',{staticClass:"toast-btn"},[_c('div',{staticClass:"toast-cancel",on:{"click":_vm.closeToast}},[_vm._v("关闭")])])])]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.prize),expression:"prize"}],staticClass:"toast-mask"})])}
var srcvue_type_template_id_944be45c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/turntable/src/index.vue?vue&type=template&id=944be45c&scoped=true&

// CONCATENATED MODULE: ./packages/turntable/src/config.js
const prizeList = [
  {
    icon: __webpack_require__("c765"), // 奖品图片
    name: "鱼香茄子", // 奖品名称
    isPrize: 1 // 该奖项是否为奖品
  },
  {
    icon: __webpack_require__("05f7"),
    name: "手撕鸡",
    isPrize: 1
  },
  {
    icon: __webpack_require__("9639"),
    name: "可乐鸡翅",
    isPrize: 1
  },
  {
    icon: __webpack_require__("e125"),
    name: "奖品4",
    isPrize: 1
  },
  {
    icon: __webpack_require__("32c9"),
    name: "奖品5",
    isPrize: 1
  },
  {
    icon: __webpack_require__("c765"),
    name: "奖品6",
    isPrize: 1
  },
  {
    icon: __webpack_require__("392c"),
    name: "奖品7",
    isPrize: 0
  },
  {
    icon: __webpack_require__("c765"),
    name: "奖品8",
    isPrize: 1
  }
]
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/turntable/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


const CIRCLE_ANGLE = 360;

const config = {
  // 总旋转时间
  duration: 4000,
  // 旋转圈数
  circle: 8,
  mode: "ease-in-out"
};

/* harmony default export */ var srcvue_type_script_lang_js_ = ({
  name: "zzm-turntable",
  props: {
    // 奖品列表
    prizeListProp: {
      type: Array,
      default: () => prizeList
    },
    // 剩余抽奖次数
    countProp: {
      type: Number,
      default: 3
    }
  },
  data() {
    return {
      count: this.countProp, // 剩余抽奖次数
      duration: 3000, // 转盘旋转时间
      prizeList: [], // 奖品列表
      rotateAngle: 0, // 旋转角度
      index: 0,
      prize: null
    };
  },
  created() {
    // 初始化一些值
    this.angleList = [];
    // 是否正在旋转
    this.isRotating = false;
    // 基本配置
    this.config = config;

    // 获取奖品列表
    this.initPrizeList();
  },
  computed: {
    /**
     * 奖品旋转
     */
    rotateStyle() {
      return `
        -webkit-transition: transform ${this.config.duration}ms ${this.config.mode};
        transition: transform ${this.config.duration}ms ${this.config.mode};
        -webkit-transform: rotate(${this.rotateAngle}deg);
            transform: rotate(${this.rotateAngle}deg);`;
    },
    /**
     * 旋转背景颜色
     * 因为奖品小于8类的时候，会有样式上的错位，所以需要角度this.rotateAngle - this.prizeList.length*5.5
     */
    rotateBgStyle() {
      return `
        -webkit-transition: transform ${this.config.duration}ms ${
        this.config.mode
      };
        transition: transform ${this.config.duration}ms ${this.config.mode};
        -webkit-transform: rotate(${this.rotateAngle -
          this.prizeList.length * 5.5}deg);
            transform: rotate(${this.rotateAngle -
              this.prizeList.length * 5.5}deg);`;
    },
    toastTitle() {
      return this.prize && this.prize.isPrize === 1
        ? "恭喜您，获得" + this.prize.name
        : "未中奖";
    }
  },
  watch: {
    // prizeListProp(data) {
    //   console.log(data);
    // }
  },
  methods: {
    initPrizeList() {
      // 这里可以发起请求，从服务端获取奖品列表
      // 这里使用模拟数据
      this.prizeList = this.formatPrizeList(this.prizeListProp);
    },
    /**
     * 初始化画布（该转盘背景）
     */
    initCanvas() {
      var myCanvas = document.querySelector("canvas");
      var ctx = myCanvas.getContext("2d");
      var w = ctx.canvas.width;
      var h = ctx.canvas.height;

      /*分成几等分*/
      var num = this.prizeList.length;
      /*一份多少弧度*/
      var angle = (Math.PI * 2) / num;
      // const half = angle / 2;
      /*原点坐标*/
      var x0 = w / 2;
      var y0 = h / 2;
      /*获取随机颜色*/
      var getRandomColor = function() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + "," + g + "," + b + ")";
      };
      /*上一次绘制的结束弧度等于当前次的起始弧度*/
      var n = this.prizeList.length - 1;
      for (var i = 0; i < num; i++) {
        var startAngle = i * angle;
        var endAngle = (i + 1) * angle;
        ctx.beginPath();
        ctx.moveTo(x0, y0);
        ctx.arc(x0, y0, 150, startAngle, endAngle);
        // 若传进来有设置color，则赋值，无则随机颜色

        if(i===num-1){
          ctx.fillStyle = this.prizeList[i].color
            ? this.prizeList[num-1].color
            : getRandomColor();
        }  else  {
          n--;
          ctx.fillStyle = this.prizeList[i].color
            ? this.prizeList[n].color
            : getRandomColor();
        }

        ctx.fill();
      }
    },
    // 格式化奖品列表，计算每个奖品的位置
    formatPrizeList(list) {
      // 记录每个奖的位置
      const angleList = [];

      const l = list.length;
      // 计算单个奖项所占的角度
      const average = CIRCLE_ANGLE / l;
      // console.log(average)

      const half = average / 2;

      // 循环计算给每个奖项添加style属性
      list.forEach((item, i) => {
        // 每个奖项旋转的位置为 当前 i * 平均值 + 平均值 / 2
        const angle = -(i * average + half); // + l * 5.5
        // 增加 style
        item.style = `-webkit-transform: rotate(${angle}deg);
                      transform: rotate(${angle}deg);`;

        // 记录每个奖项的角度范围
        angleList.push(i * average + half);
      });

      this.angleList = angleList;
      return list;
    },
    beginRotate() {
      // 添加次数校验

      if (this.count === 0) return;

      // 开始抽奖
      // 这里这里向服务端发起请求，得到要获得的奖
      // 可以返回下标，也可以返回奖品 id，通过查询 奖品列表，最终得到下标

      // 随机获取下标
      this.index = this.random(this.prizeList.length - 1);

      // 减少剩余抽奖次数
      this.count--;

      // 开始旋转
      this.rotating();
    },
    random(max, min = 0) {
      return parseInt(Math.random() * (max - min + 1) + min);
    },
    rotating() {
      const { isRotating, angleList, config, rotateAngle, index } = this;

      if (isRotating) return;

      this.isRotating = true;

      // 计算角度
      const angle =
        // 初始角度
        rotateAngle +
        // 多旋转的圈数
        config.circle * CIRCLE_ANGLE +
        // 奖项的角度
        angleList[index] -
        (rotateAngle % CIRCLE_ANGLE);

      this.rotateAngle = angle;

      // 旋转结束后，允许再次触发
      setTimeout(() => {
        this.rotateOver();
      }, config.duration + 1000);
    },
    rotateOver() {
      this.isRotating = false;

      this.prize = this.prizeListProp[this.index];

      this.$emit("draw", [this.prize, this.count]);

      //   console.log(this.prize, this.index, this.count);
    },
    //关闭弹窗
    closeToast() {
      this.prize = null;
    }
  },
  mounted() {
    this.initCanvas();
  }
});

// CONCATENATED MODULE: ./packages/turntable/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var turntable_srcvue_type_script_lang_js_ = (srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/turntable/src/index.vue?vue&type=style&index=0&id=944be45c&scoped=true&lang=css&
var srcvue_type_style_index_0_id_944be45c_scoped_true_lang_css_ = __webpack_require__("001b");

// CONCATENATED MODULE: ./packages/turntable/src/index.vue






/* normalize component */

var src_component = normalizeComponent(
  turntable_srcvue_type_script_lang_js_,
  srcvue_type_template_id_944be45c_scoped_true_render,
  srcvue_type_template_id_944be45c_scoped_true_staticRenderFns,
  false,
  null,
  "944be45c",
  null
  
)

/* harmony default export */ var turntable_src = (src_component.exports);
// CONCATENATED MODULE: ./packages/turntable/index.js

// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
turntable_src.install = function (Vue) {
  Vue.component(turntable_src.name, turntable_src)
}

// 默认导出组件
/* harmony default export */ var turntable = (turntable_src);

// CONCATENATED MODULE: ./packages/index.js
// 导入颜色选择器组件



// 存储组件列表
const components = [
    packages_button,turntable
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

/* harmony default export */ var packages_0 = ({
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  zzmButton: packages_button,
  zzmTurntable: turntable
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
//# sourceMappingURL=zzmcomponentlib.common.js.map