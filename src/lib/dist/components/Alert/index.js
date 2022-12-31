"use strict";require("core-js/modules/web.dom-collections.iterator.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireWildcard(require("react")),_api=require("../../api");function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=_getRequireWildcardCache(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!=f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}const Alert=a=>{const b=b=>{b.preventDefault(),b.target===b.currentTarget&&a.onBackdropPress()};return(0,_react.useMemo)(()=>{a.isVisible?_api.ScrollView.disableScroll():_api.ScrollView.enableScroll()},[a.isVisible]),/*#__PURE__*/_react.default.createElement("div",{className:a.isVisible?"app-alert show":"app-alert",onClick:a=>b(a)},/*#__PURE__*/_react.default.createElement("div",{className:"app-alert-modal","aria-modal":"true",role:"dialog"},/*#__PURE__*/_react.default.createElement("div",{className:"app-alert-header"},/*#__PURE__*/_react.default.createElement("h1",null,a.title),/*#__PURE__*/_react.default.createElement("div",{className:"app-alert-message"},a.message)),a.children))},AlertFooter=a=>{let{children:b}=a;return/*#__PURE__*/_react.default.createElement("div",{className:"app-alert-footer"},b)};Alert.Footer=AlertFooter,Alert.defaultProps={isVisible:!1,onBackdropPress:()=>{}};var _default=Alert;exports.default=_default;