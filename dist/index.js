parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.useRetroWebXR=void 0;var e=/Chrom(?:e|ium)\/([0-9]+)\.([0-9]+)\.([0-9]+)\.([0-9]+)/,r=function(r){var t=navigator.userAgent.match(r||e);if(null==t||5!=t.length)return{major:-1,minor:-1,build:-1,patch:-1};var n=t.map(function(e){return parseInt(e,10)});return{major:n[1],minor:n[2],build:n[3],patch:n[4]}},t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{all:!0},t={};return(e.all||e.requestDevice)&&r().major>=79&&(window.navigator.xr.requestDevice=window.navigator.xr.requestSession,t["window.navigator.xr.requestDevice"]="window.navigator.xr.requestSession"),t};exports.useRetroWebXR=t;
},{}]},{},["Focm"], "RetroWebXR")
//# sourceMappingURL=/index.js.map