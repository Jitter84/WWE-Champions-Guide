!function(e){function t(n){if(a[n])return a[n].exports;var o=a[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var a={};t.m=e,t.c=a,t.i=function(e){return e},t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2992)}({0:function(e,t){var t=e.exports={};t.findBootstrapEnvironment=function(){var e=["xs","sm","md","lg"],t=window.document,a=t.createElement("div");t.body.appendChild(a);for(var n=e.length-1;n>=0;n--){var o=e[n];if(a.className="hidden-"+o,null===a.offsetParent)return t.body.removeChild(a),o}return""},t.localStorageSaveItem=function(e,t){"undefined"!=typeof localStorage?localStorage.setItem(e,t):console.error("window.localStorage, not defined")},t.localStorageRemoveItem=function(e){"undefined"!=typeof localStorage?localStorage.removeItem(e):console.error("window.localStorage, not defined")},t.localStorageGetItem=function(e){if("undefined"!=typeof localStorage)return localStorage.getItem(e);console.error("window.localStorage, not defined")},t.getUrlParameter=function(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)"),a=t.exec(location.search);return null===a?null:decodeURIComponent(a[1].replace(/\+/g," "))}},2992:function(e,t,a){e.exports=a(7)},7:function(e,t,a){function n(){var e=c.findBootstrapEnvironment();"xs"==e||"sm"==e?$(".crates-chances-table").removeClass("in"):$(".crates-chances-table").addClass("in")}function o(){if($("#ads").length){var e="",t=[];"xs"!=c.findBootstrapEnvironment()?(e="/js/ads/728_90_header.js",t=["adLeaderboard","pubclerks_3785"]):(e="/js/ads/320_50_header.js",t=["adMobileLeaderboard","pubclerks_3786"]),function(e){var t=$("<div/>",{id:e[0],class:"ad"}).append($("<p/>",{class:"ad-help-text"}).append($("<a/>",{href:"http://adclerks.com/marketplace/website/8954/wwe-champions-guide",target:"_blank",text:"Advertise here for as low as $0.1 NOW! Factions ads are welcomed."})).append($("<div/>",{id:e[1]})));$("#ads").append(t)}(t),$.getScript(e)}}function r(){console.log("AdBlock is not enabled"),$("#adBlocked").removeClass("alert").removeClass("alert-danger").attr("role",null).empty()}function i(){console.log("AdBlock is enabled"),$("#adBlocked").addClass("alert").addClass("alert-danger").attr("role","alert").append($("<p/>",{class:"text-center",text:"To keep the website updated frequently, please help support it by whitelisting it on your ad blocker. Thank you!"}))}function l(){o(),adblockDetect(function(e){e?i():r()})}function s(e){var t=[];e.years&&t.push(e.years+"y"),e.months&&t.push(e.months+"m"),e.days&&t.push(e.days+"d"),e.hours&&t.push(e.hours+"h"),e.minutes&&t.push(e.minutes+"m");var a=t.join(" ");return e.firstDateWasLater?a="in "+a:a+=" ago",a}function d(){$(".panel-events").length&&(console.log("There are events!"),$(".panel-events .panel").each(function(){var e=moment($(this).find("time.start-time").first().attr("datetime")),t=moment($(this).find("time.end-time").first().attr("datetime")),a=moment(),n=moment().add(1,"day");a>=t?($(this).find("time.title-time").length?$(this).find("time.title-time").first().text("Expired!"):$(this).find(".panel-title a").first().text("Expired!"),$(this).removeClass("panel-default").addClass("panel-danger")):a>=e&&a<t?$(this).removeClass("panel-default").addClass("panel-success"):e<=n&&$(this).removeClass("panel-default").addClass("panel-warning")}))}var c=a(0);$(document).ready(function(){l(),n(),$('[data-toggle="offcanvas"]').click(function(){$(".row-offcanvas").toggleClass("active")}),$('[data-toggle="popover"]').popover({animation:!1}),$('a[data-toggle="popover"]').on("click",function(e){return e.preventDefault(),!1}),$("a.date-time time, a.date-time time.relative, time.relative").each(function(){var e=moment($(this).attr("datetime")),t=moment(),a=moment(e).preciseDiff(t,!0),n=s(a);$(this).text(n)}),d(),$(document).on("touchstart click",function(e){$('[data-toggle="popover"],[data-original-title]').each(function(){$(this).is(e.target)||0!==$(this).has(e.target).length||0!==$(".popover").has(e.target).length||((($(this).popover("hide").data("bs.popover")||{}).inState||{}).click=!1)})})})}});