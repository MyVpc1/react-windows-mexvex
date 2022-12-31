"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,require("core-js/modules/web.dom-collections.iterator.js"),require("core-js/modules/es.array.includes.js"),require("core-js/modules/es.string.includes.js");var _react=_interopRequireWildcard(require("react")),_reactRouterDom=require("react-router-dom"),_hooks=require("../../../hooks");function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=_getRequireWildcardCache(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!=f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}const NavBarSearchSuggestion=a=>{const b=(0,_react.useRef)(null),c=(0,_react.useRef)(null),[d,e]=(0,_react.useState)(!1),[f,g]=(0,_react.useState)("hide"),h=a.data,[i,j]=_react.default.useState(h),[k,l]=_react.default.useState("");(0,_hooks.useOutSideClick)(b,()=>e(!1)),(0,_hooks.useOutSideClick)(c,()=>g("hide"));const m=a=>{a.target.value?g("show"):g("hide")},n=()=>{l(""),g("hide")};return/*#__PURE__*/_react.default.createElement("div",{className:"app-nav-search",title:a.tooltip},/*#__PURE__*/_react.default.createElement("div",{className:"app-input-search-box"},/*#__PURE__*/_react.default.createElement("input",{className:"app-input-text",type:"search",value:k,placeholder:a.placeholder,onChange:a=>{m(a);const b=h.filter(b=>b.label.toLowerCase().includes(a.target.value.toLowerCase()));j(b),l(a.target.value)}})),/*#__PURE__*/_react.default.createElement("div",{onClick:()=>e(!d),className:"app-search-dialog-trigger"},/*#__PURE__*/_react.default.createElement("i",{className:"icons10-search"})),/*#__PURE__*/_react.default.createElement("div",{className:d?"app-search-dialog show":"app-search-dialog",ref:b},/*#__PURE__*/_react.default.createElement("input",{className:"app-input-text",type:"search",value:k,placeholder:a.placeholder,onChange:a=>{m(a);const b=h.filter(b=>b.label.toLowerCase().includes(a.target.value.toLowerCase()));j(b),l(a.target.value)}}),/*#__PURE__*/_react.default.createElement("button",{className:"font-size-16px",onClick:n},/*#__PURE__*/_react.default.createElement("i",{className:"icons10-cross"}))),/*#__PURE__*/_react.default.createElement("ul",{className:f,ref:c,onClick:n},i.map(a=>/*#__PURE__*/_react.default.createElement("li",{className:"option",key:a.label},/*#__PURE__*/_react.default.createElement(_reactRouterDom.Link,{to:a.link,onClick:a.onClick},a.icon,a.label)))))};NavBarSearchSuggestion.defaultProps={placeholder:"Search here..",data:[]};var _default=NavBarSearchSuggestion;exports.default=_default;