"use strict";var _react=_interopRequireDefault(require("react"));Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}const ProgressBarIndeterminate=a=>/*#__PURE__*/_react.default.createElement("div",{className:a.isLoading?"app-progress-indeterminate animate":"app-progress-indeterminate"},/*#__PURE__*/_react.default.createElement("div",{className:"progress-bar"}));ProgressBarIndeterminate.defaultProps={isLoading:!0};var _default=ProgressBarIndeterminate;exports.default=_default;