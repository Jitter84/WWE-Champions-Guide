!function(e){function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}var n={};o.m=e,o.c=n,o.i=function(e){return e},o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},o.p="",o(o.s=1364)}({0:function(e,o){var o=e.exports={};o.findBootstrapEnvironment=function(){var e=["xs","sm","md","lg"],o=window.document,n=o.createElement("div");o.body.appendChild(n);for(var t=e.length-1;t>=0;t--){var r=e[t];if(n.className="hidden-"+r,null===n.offsetParent)return o.body.removeChild(n),r}return""},o.localStorageSaveItem=function(e,o){"undefined"!=typeof localStorage?localStorage.setItem(e,o):console.error("window.localStorage, not defined")},o.localStorageRemoveItem=function(e){"undefined"!=typeof localStorage?localStorage.removeItem(e):console.error("window.localStorage, not defined")},o.localStorageGetItem=function(e){if("undefined"!=typeof localStorage)return localStorage.getItem(e);console.error("window.localStorage, not defined")}},1364:function(e,o,n){e.exports=n(8)},8:function(e,o,n){var t=n(0);$(document).ready(function(){var e=t.findBootstrapEnvironment(),o={valueNames:["wrestler-name"],page:10,pagination:[{paginationClass:"paginationTop"},{paginationClass:"paginationBottom"}]},n=new List("wrestlers",o);$("#search").on("submit",function(e){return e.preventDefault(),!1}),$("#search").on("keyup keypress",function(e){if(13===(e.keyCode||e.which))return e.preventDefault(),!1}),$("#search").on("awesomplete-selectcomplete",function(){n.search(this.value)});var r=new LazyLoad;n.on("updated",function(e){r.update()}),"xs"==e&&$("#search").on("focus",function(){document.body.scrollTop+=this.getBoundingClientRect().top-10}),$("#search").on("input propertychange",function(){var e=$(this),o=Boolean(e.val());$(".form-control-clear").toggleClass("hidden",!o)}).trigger("propertychange"),$(".form-control-clear").click(function(){n.search(""),$("#search").val("").trigger("propertychange").focus()})})}});