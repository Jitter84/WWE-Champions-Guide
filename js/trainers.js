!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3274)}({0:function(e,t){var t=e.exports={};t.findBootstrapEnvironment=function(){var e=["xs","sm","md","lg"],t=window.document,n=t.createElement("div");t.body.appendChild(n);for(var r=e.length-1;r>=0;r--){var o=e[r];if(n.className="hidden-"+o,null===n.offsetParent)return t.body.removeChild(n),o}return""},t.localStorageSaveItem=function(e,t){"undefined"!=typeof localStorage?localStorage.setItem(e,t):console.error("window.localStorage, not defined")},t.localStorageRemoveItem=function(e){"undefined"!=typeof localStorage?localStorage.removeItem(e):console.error("window.localStorage, not defined")},t.localStorageGetItem=function(e){if("undefined"!=typeof localStorage)return localStorage.getItem(e);console.error("window.localStorage, not defined")},t.getUrlParameter=function(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)"),n=t.exec(location.search);return null===n?null:decodeURIComponent(n[1].replace(/\+/g," "))}},15:function(e,t,n){n(0);$(document).ready(function(){function e(){$("input.trainer-level").on("input",function(){var e=parseInt($(this).val()),t=($(this).attr("max"),$($(this).closest(".trainer").first())),n=t.find("input.trainer-level-data[data-level="+e+"]").first(),r=t.find(".trainer-buff").first(),o=t.find(".trainer-current-talent-score").first(),a=t.find(".trainer-current-level-number").first();r.empty(),r.text(n.val()),o.empty(),o.text(n.attr("data-talent-score")),a.empty(),a.text(n.attr("data-level"))})}var t={valueNames:["wrestler-name","trainer-buff","trainer-type"],page:10,pagination:[{paginationClass:"paginationTop",innerWindow:1},{paginationClass:"paginationBottom",innerWindow:1}]},n=new List("trainers",t);$("a.filter-by-type").on("click",function(e){var t=$(this).attr("data-type-id");$("button.filter-by-type-button").html($(this).text()+" <span class='caret'></span>"),"All"==t?n.filter():n.filter(function(e){return e.values()["trainer-type"]==t}),e.preventDefault()}),e(),n.on("updated",function(){e()})})},3274:function(e,t,n){e.exports=n(15)}});