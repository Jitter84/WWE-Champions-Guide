!function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var r={};t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2236)}({0:function(e,t){var t=e.exports={};t.findBootstrapEnvironment=function(){var e=["xs","sm","md","lg"],t=window.document,r=t.createElement("div");t.body.appendChild(r);for(var n=e.length-1;n>=0;n--){var a=e[n];if(r.className="hidden-"+a,null===r.offsetParent)return t.body.removeChild(r),a}return""},t.localStorageSaveItem=function(e,t){"undefined"!=typeof localStorage?localStorage.setItem(e,t):console.error("window.localStorage, not defined")},t.localStorageRemoveItem=function(e){"undefined"!=typeof localStorage?localStorage.removeItem(e):console.error("window.localStorage, not defined")},t.localStorageGetItem=function(e){if("undefined"!=typeof localStorage)return localStorage.getItem(e);console.error("window.localStorage, not defined")},t.getUrlParameter=function(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)"),r=t.exec(location.search);return null===r?null:decodeURIComponent(r[1].replace(/\+/g," "))}},15:function(e,t,r){var n=r(0);$(document).ready(function(){function e(){var e=[];"All"==t.Class&&"All"==t.Era?o.filter(function(t){return e.push(t.values()["wrestler-name"]),!0}):o.filter(function(r){return"All"!=t.Class&&"All"==t.Era?r.values()["wrestler-class"]==t.Class&&(e.push(r.values()["wrestler-name"]),!0):"All"!=t.Era&&"All"==t.Class?r.values()["wrestler-era"]==t.Era&&(e.push(r.values()["wrestler-name"]),!0):"All"!=t.Class&&"All"!=t.Era?r.values()["wrestler-class"]==t.Class&&r.values()["wrestler-era"]==t.Era&&(e.push(r.values()["wrestler-name"]),!0):void 0}),s.list=e}var t={Class:"All",Era:"All"},r=n.findBootstrapEnvironment(),a={valueNames:["wrestler-name","wrestler-class","wrestler-era"],page:10,pagination:[{paginationClass:"paginationTop",innerWindow:1},{paginationClass:"paginationBottom",innerWindow:1}]},o=new List("wrestlers",a),l=document.getElementById("search"),s=new Awesomplete(l,{list:"#wrestlersList"});$("#search").on("submit",function(e){return e.preventDefault(),!1}),$("a.filter-by-era").on("click",function(r){t.Era=$(this).attr("data-class-id"),$("button.filter-by-era-button").html($(this).text()+" <span class='caret'></span>"),e(),r.preventDefault()}),$("a.filter-by-class").on("click",function(r){t.Class=$(this).attr("data-class-id"),$("button.filter-by-class-button").html($(this).text()+" <span class='caret'></span>"),e(),r.preventDefault()}),$("#search").on("keyup keypress",function(e){if(13===(e.keyCode||e.which))return e.preventDefault(),!1}),$("#search").on("awesomplete-selectcomplete",function(){o.search(this.value,["wrestler-name"])});var c=new LazyLoad;o.on("updated",function(e){c.update()}),"xs"==r&&$("#search").on("focus",function(){document.body.scrollTop+=this.getBoundingClientRect().top-10}),$("#search").on("input propertychange",function(){var e=$(this),t=Boolean(e.val());$(".form-control-clear").toggleClass("hidden",!t)}).trigger("propertychange"),$(".form-control-clear").click(function(){o.search(""),$("#search").val("").trigger("propertychange").focus()})})},2236:function(e,t,r){e.exports=r(15)}});