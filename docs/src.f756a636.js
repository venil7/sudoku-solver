parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"hc0O":[function(require,module,exports) {
"use strict";var r=this&&this.__spreadArrays||function(){for(var r=0,n=0,t=arguments.length;n<t;n++)r+=arguments[n].length;var e=Array(r),u=0;for(n=0;n<t;n++)for(var a=arguments[n],o=0,f=a.length;o<f;o++,u++)e[u]=a[o];return e};Object.defineProperty(exports,"__esModule",{value:!0});var n=function(r){return r.map(function(r){return{val:r.val,fixed:r.fixed}})},t=function(r){return function(n,t){var e=r[9*n+t];return{val:e.val,fixed:e.fixed}}},e=function(r,t,e){var u=n(r);return u[t].val=e,u},u=function(r){return function(n){var t=9*n,e=t+9;return r.slice(t,e).map(function(r){return r.val})}},a=function(r){return function(n){return Array.from(Array(9)).map(function(t,e){return r[9*e+n].val})}},o=function(r){return function(n,e){var u=t(r),a=3*Math.floor(n/3),o=3*Math.floor(e/3);return[u(a,o).val,u(a+1,o).val,u(a+2,o).val,u(a,o+1).val,u(a+1,o+1).val,u(a+2,o+1).val,u(a,o+2).val,u(a+1,o+2).val,u(a+2,o+2).val]}},f=function(r){var n=r.filter(function(r){return r>0}),t=Array.from(new Set(n).values());return n.length===t.length};exports.valid=function(r){var n=u(r),t=a(r),e=o(r);return Array.from(Array(9)).map(function(r,t){return n(t)}).map(f).every(function(r){return r})&&Array.from(Array(9)).map(function(r,n){return t(n)}).map(f).every(function(r){return r})&&Array.from(Array(9)).map(function(r,n){return e(3*Math.floor(n/3),3*Math.floor(n%3))}).map(f).every(function(r){return r})},exports.solve=function(n,t){if(void 0===t&&(t=null),t=t||n.reduce(function(n,t,e){return t.fixed?n:r(n,[e])},[]),!exports.valid(n))return null;var u=t[0],a=void 0===u?-1:u,o=t.slice(1);if(-1===a)return n;for(var f=1;f<=9;f++){var i=exports.solve(e(n,a,f),o);if(i)return i}return null};
},{}],"B6dB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./sudoku"),n=function(e){return e?e.reduce(function(e,n,t){return e+" "+(n.val||"_")+((t+1)%9==0?"\n":"")},""):"no solution"},t=[5,3,0,0,7,0,0,0,0,6,0,0,1,9,5,0,0,0,0,9,8,0,0,0,0,6,0,8,0,0,0,6,0,0,0,3,4,0,0,8,0,3,0,0,1,7,0,0,0,2,0,0,0,6,0,6,0,0,0,0,2,8,0,0,0,0,4,1,9,0,0,5,0,0,0,0,8,0,0,7,9].map(function(e){return{val:e,fixed:!!e}}),u=[9,0,0,0,0,5,0,4,0,0,0,0,0,8,0,2,1,0,0,0,0,9,0,0,7,0,3,0,0,0,1,0,0,5,0,0,3,0,0,2,5,6,0,0,7,0,0,7,0,0,9,0,0,0,1,0,6,0,0,7,0,0,0,0,7,8,0,1,0,0,0,0,0,9,0,5,0,0,0,0,8].map(function(e){return{val:e,fixed:!!e}});!function(t){document.getElementById("app").innerHTML=n(t),document.getElementById("run").onclick=function(){var u=e.solve(t);document.getElementById("app").innerHTML=n(u)}}(u);
},{"./sudoku":"hc0O"}]},{},["B6dB"], null)
//# sourceMappingURL=/src.f756a636.js.map