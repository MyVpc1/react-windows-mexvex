"use strict";var _react=_interopRequireDefault(require("react"));Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}const Dialog=a=>{const b=()=>a.showDropShadow?"dropShadow":"";return/*#__PURE__*/_react.default.createElement(_react.default.Fragment,null,/*#__PURE__*/_react.default.createElement("div",{onClick:a.onBackdropPress,className:a.isVisible?"app-dim-overlay show":"app-dim-overlay"}),/*#__PURE__*/_react.default.createElement("div",{className:a.isVisible?"app-dialog ".concat(b()," show"):"app-dialog ".concat(b()),style:{padding:a.padding}},a.children))};Dialog.defaultProps={isVisible:!1};var _default=Dialog;exports.default=_default;