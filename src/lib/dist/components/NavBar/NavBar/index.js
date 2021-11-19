"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,require("core-js/modules/web.dom-collections.iterator.js");var _react=_interopRequireWildcard(require("react")),_ThemeManager=_interopRequireDefault(require("../../utils/ThemeManager"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=_getRequireWildcardCache(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!=f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}const NavBar=a=>{(0,_react.useEffect)(()=>{_ThemeManager.default.createAlphaPrimaryColor()},[]);const[b,c]=(0,_react.useState)(!1),[d,f]=(0,_react.useState)(!1);return/*#__PURE__*/_react.default.createElement("div",{className:b?"app-nav-wrap toggled":"app-nav-wrap",ref:a.ref,id:"app-nav-wrap-id"},/*#__PURE__*/_react.default.createElement("nav",{className:"animate",onScroll:a=>{50>a.target.scrollTop?f(!1):f(!0)}},/*#__PURE__*/_react.default.createElement("div",{className:"app-nav-header",style:a.shadowOnScroll?d?{boxShadow:"0 6px 8px -8px var(--color_link_bg_hover)"}:{boxShadow:""}:{boxShadow:""}},/*#__PURE__*/_react.default.createElement("span",{className:"app-nav-toggle",onClick:()=>c(!b)}),/*#__PURE__*/_react.default.createElement("span",{className:"app-name"},a.title)),/*#__PURE__*/_react.default.createElement("ul",{className:a.mobileHasIcons?"app-mobile-has-icons":""},a.children)))};var _default=NavBar;exports.default=_default;