!function(e){function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var t={};n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=1271)}({0:function(e,n){(e.exports={}).findBootstrapEnvironment=function(){var e=["xs","sm","md","lg"],n=window.document,t=n.createElement("div");n.body.appendChild(t);for(var o=e.length-1;o>=0;o--){var r=e[o];if(t.className="hidden-"+r,null===t.offsetParent)return n.body.removeChild(t),r}return""}},1271:function(e,n,t){e.exports=t(6)},6:function(e,n,t){var o=t(0);$(document).ready(function(){var e=o.findBootstrapEnvironment(),n={valueNames:["wrestler-name"],page:10,pagination:[{paginationClass:"paginationTop"},{paginationClass:"paginationBottom"}]},t=new List("wrestlers",n);$("#search").on("submit",function(e){return e.preventDefault(),!1}),$("#search").on("keyup keypress",function(e){if(13===(e.keyCode||e.which))return e.preventDefault(),!1}),$("#search").on("awesomplete-selectcomplete",function(){t.search(this.value)});var r=new LazyLoad;t.on("updated",function(e){r.update()}),"xs"==e&&$("#search").on("focus",function(){document.body.scrollTop+=this.getBoundingClientRect().top-10}),$("#search").on("input propertychange",function(){var e=$(this),n=Boolean(e.val());$(".form-control-clear").toggleClass("hidden",!n)}).trigger("propertychange"),$(".form-control-clear").click(function(){t.search(""),$("#search").val("").trigger("propertychange").focus()})})}});