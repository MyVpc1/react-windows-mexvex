"use strict";var _react=_interopRequireDefault(require("react"));Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}const CommandBarButton=a=>/*#__PURE__*/_react.default.createElement("button",{className:"app-cmdbar-button",onClick:a.onClick,disabled:a.disabled},a.icon,/*#__PURE__*/_react.default.createElement("span",null,a.value));CommandBarButton.defaultProps={value:"Submit",disabled:!1};var _default=CommandBarButton;exports.default=_default;