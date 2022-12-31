"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,require("core-js/modules/es.regexp.to-string.js");const getColorScheme=()=>{let a=window.getComputedStyle(document.documentElement).getPropertyValue("color-scheme");return a.toString()},setDarkScheme=()=>(document.body.classList.add("dark-theme"),document.documentElement.setAttribute("data-theme","dark"),document.getElementById("app-navbar-theme-switcher")&&(document.getElementById("app-navbar-theme-switcher").checked=!1,document.getElementById("app-navbar-theme-switcher-text").innerHTML="Night Mode"),""),setLightScheme=()=>(document.body.classList.remove("dark-theme"),document.documentElement.setAttribute("data-theme","light"),document.getElementById("app-navbar-theme-switcher")&&(document.getElementById("app-navbar-theme-switcher").checked=!0,document.getElementById("app-navbar-theme-switcher-text").innerHTML="Day Mode"),""),Appearance={getColorScheme,setDarkScheme,setLightScheme};var _default=Appearance;exports.default=_default;