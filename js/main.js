!function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};t.m=e,t.c=o,t.i=function(e){return e},t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1260)}({1:function(e,t){$(document).ready(function(){function e(){console.log("AdBlock is not enabled"),$("#adBlocked").removeClass("alert").removeClass("alert-danger").attr("role",null).empty()}function t(){console.log("AdBlock is enabled"),$("#adBlocked").addClass("alert").addClass("alert-danger").attr("role","alert").append($("<p/>",{class:"text-center",text:"To keep the website updated frequently, please help support it by whitelisting it on your ad blocker. Thank you!"}))}$('[data-toggle="offcanvas"]').click(function(){$(".row-offcanvas").toggleClass("active")}),"undefined"==typeof fuckAdBlock?t():(fuckAdBlock.setOption({debug:!1}),fuckAdBlock.onDetected(t).onNotDetected(e))})},1260:function(e,t,o){e.exports=o(1)}});