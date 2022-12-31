"use strict";require("core-js/modules/web.dom-collections.iterator.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireWildcard(require("react")),_reactRouterDom=require("react-router-dom"),_ContainerInner=_interopRequireDefault(require("./ContainerInner")),_ContainerTitleBar=_interopRequireDefault(require("./ContainerTitleBar"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=_getRequireWildcardCache(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!=f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){_defineProperty(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}const NavPageContainer=a=>{const{pathname:b}=(0,_reactRouterDom.useLocation)();(0,_react.useEffect)(()=>{var b=document.getElementById("app-section-container-id");b&&a.animateTransition&&b.classList.add("transition-left"),a.scrollTopOnMount&&window.scrollTo({top:0,left:0,behavior:"instant"})},[b,a.animateTransition,a.scrollTopOnMount]);const c=()=>a.animateTransition?" transition":"";return/*#__PURE__*/_react.default.createElement("div",{id:"app-section-container-id",className:a.hasPadding?"app-section-container has-padding".concat(c()):"app-section-container".concat(c()),style:_objectSpread({backgroundColor:a.backgroundColor},a.style)},a.children)};NavPageContainer.Inner=_ContainerInner.default,NavPageContainer.TitleBar=_ContainerTitleBar.default;var _default=NavPageContainer;exports.default=_default;