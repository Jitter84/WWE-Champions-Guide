!function(e){function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}var n={};o.m=e,o.c=n,o.i=function(e){return e},o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},o.p="",o(o.s=3267)}({0:function(e,o){var o=e.exports={};o.findBootstrapEnvironment=function(){var e=["xs","sm","md","lg"],o=window.document,n=o.createElement("div");o.body.appendChild(n);for(var t=e.length-1;t>=0;t--){var r=e[t];if(n.className="hidden-"+r,null===n.offsetParent)return o.body.removeChild(n),r}return""},o.localStorageSaveItem=function(e,o){"undefined"!=typeof localStorage?localStorage.setItem(e,o):console.error("window.localStorage, not defined")},o.localStorageRemoveItem=function(e){"undefined"!=typeof localStorage?localStorage.removeItem(e):console.error("window.localStorage, not defined")},o.localStorageGetItem=function(e){if("undefined"!=typeof localStorage)return localStorage.getItem(e);console.error("window.localStorage, not defined")},o.getUrlParameter=function(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var o=new RegExp("[\\?&]"+e+"=([^&#]*)"),n=o.exec(location.search);return null===n?null:decodeURIComponent(n[1].replace(/\+/g," "))}},10:function(e,o,n){function t(e){e=".*"+e+".*",stitch.StitchClientFactory.create("wwe-champions-guide-pgwcj").then(function(o){var n=o.service("mongodb","mongodb-atlas").db("wwe-champions");o.login().then(function(){return n.collection("players").find({name:{$regularExpression:{pattern:e,options:"i"}}}).execute()}).then(function(e){$("#loading").addClass("hidden"),e&&e.length>0?l(e):r()}).catch(function(e){$("#loading").addClass("hidden"),console.error(e)})})}function r(){console.log("No results have been found!"),$("#results").empty(),$("#results").append($("<h4/>",{text:"No results."}))}function l(e){console.log("Found the following: "),$("#results").empty();var o=$("<div/>",{class:"list-group",style:"margin-top: 30px;"});e.forEach(function(e){o.append($("<a/>",{class:"list-group-item",href:"/stats/players/profile.html?id="+e._id,text:e.name})),console.log(e)}),$("#results").append(o)}var a=n(0);$(document).ready(function(){var e=a.getUrlParameter("q");e&&(console.log("Searching for "+e),$("#loading").removeClass("hidden"),$("input.search-box").val(e),t(e))})},3267:function(e,o,n){e.exports=n(10)}});