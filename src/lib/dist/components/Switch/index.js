"use strict";var _react=_interopRequireDefault(require("react"));Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}const Switch=a=>/*#__PURE__*/_react.default.createElement("label",{className:"app-switch",title:a.tooltip},/*#__PURE__*/_react.default.createElement("input",{type:"checkbox",disabled:a.disabled,onChange:a.onChange,defaultChecked:a.defaultChecked}),a.label&&"start"===a.labelPosition&&/*#__PURE__*/_react.default.createElement("span",{className:"app-switch-label","data-on":a.labelOn,"data-off":a.labelOff,style:{width:a.labelFixedWidth}}),/*#__PURE__*/_react.default.createElement("div",{className:"app-switch-view"}),a.label&&"end"===a.labelPosition&&/*#__PURE__*/_react.default.createElement("span",{className:"app-switch-label","data-on":a.labelOn,"data-off":a.labelOff,style:{width:a.labelFixedWidth}}));Switch.defaultProps={label:!0,labelOn:"On",labelOff:"Off",labelPosition:"end"};var _default=Switch;exports.default=_default;