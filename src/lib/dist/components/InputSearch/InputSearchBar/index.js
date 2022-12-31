"use strict";var _react=_interopRequireDefault(require("react"));Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}const InputSearchBar=a=>/*#__PURE__*/_react.default.createElement("div",{className:"app-input-search-bar",title:a.tooltip},/*#__PURE__*/_react.default.createElement("input",{style:{width:a.width},className:"app-input-text",type:"search",name:a.name,value:a.value,onClick:a.onClick,onChange:a.onChange,onKeyUp:a.onKeyUp,onKeyDown:a.onKeyDown,disabled:a.disabled,placeholder:a.placeholder}),/*#__PURE__*/_react.default.createElement("button",{type:"submit",onClick:()=>a.onSubmit(a.value)}));InputSearchBar.defaultProps={placeholder:"Search here..",onSubmit:()=>{}};var _default=InputSearchBar;exports.default=_default;