"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,require("core-js/modules/web.dom-collections.iterator.js"),require("core-js/modules/es.array.includes.js"),require("core-js/modules/es.string.includes.js");var _react=_interopRequireDefault(require("react")),_reactRouterDom=require("react-router-dom");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}const InputSearchSuggestion=a=>{const b=_react.default.useRef(),c=c=>{h(c.target.value);let d=b.current;d.style.visibility=c.target.value&&b.current.hasChildNodes()?"visible":"hidden",a.onChange()},d=a.data,[e,f]=_react.default.useState(d),[g,h]=_react.default.useState("");return/*#__PURE__*/_react.default.createElement("div",{className:"app-input-search-suggestion",title:a.tooltip},/*#__PURE__*/_react.default.createElement("div",{className:"app-input-search-box"},/*#__PURE__*/_react.default.createElement("input",{type:"search",value:g,style:{width:a.width},disabled:a.disabled,onClick:a.onClick,onKeyUp:a.onKeyUp,onKeyDown:a.onKeyDown,placeholder:a.placeholder,className:"app-input-text app-input-search",onChange:a=>{c(a);const b=d.filter(b=>b.label.toLowerCase().includes(a.target.value.toLowerCase()));f(b)}})),/*#__PURE__*/_react.default.createElement("ul",{ref:b,style:{width:a.width}},e.map(a=>/*#__PURE__*/_react.default.createElement("li",{className:"option",key:a.label},/*#__PURE__*/_react.default.createElement(_reactRouterDom.Link,{to:a.link,onClick:a.onClick},a.icon,a.label)))))};InputSearchSuggestion.defaultProps={placeholder:"Search here..",onChange:()=>{}};var _default=InputSearchSuggestion;exports.default=_default;