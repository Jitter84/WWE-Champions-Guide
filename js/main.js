!function(e){function t(o){if(n[o])return n[o].exports;var a=n[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1966)}({0:function(e,t){var t=e.exports={};t.findBootstrapEnvironment=function(){var e=["xs","sm","md","lg"],t=window.document,n=t.createElement("div");t.body.appendChild(n);for(var o=e.length-1;o>=0;o--){var a=e[o];if(n.className="hidden-"+a,null===n.offsetParent)return t.body.removeChild(n),a}return""},t.localStorageSaveItem=function(e,t){"undefined"!=typeof localStorage?localStorage.setItem(e,t):console.error("window.localStorage, not defined")},t.localStorageRemoveItem=function(e){"undefined"!=typeof localStorage?localStorage.removeItem(e):console.error("window.localStorage, not defined")},t.localStorageGetItem=function(e){if("undefined"!=typeof localStorage)return localStorage.getItem(e);console.error("window.localStorage, not defined")}},1966:function(e,t,n){e.exports=n(6)},6:function(e,t,n){function o(){var e=i.findBootstrapEnvironment();"xs"==e||"sm"==e?$(".crates-chances-table").removeClass("in"):$(".crates-chances-table").addClass("in")}function a(e){var t=[];e.years&&t.push(e.years+"y"),e.months&&t.push(e.months+"m"),e.days&&t.push(e.days+"d"),e.hours&&t.push(e.hours+"h"),e.minutes&&t.push(e.minutes+"m");var n=t.join(" ");return e.firstDateWasLater?n="in "+n:n+=" ago",n}function r(){$(".panel-events").length&&(console.log("There are events!"),$(".panel-events .panel").each(function(){var e=moment($(this).find("time.start-time").first().attr("datetime")),t=moment($(this).find("time.end-time").first().attr("datetime")),n=moment(),o=moment().add(1,"day");n>=t?($(this).find("time.title-time").length?$(this).find("time.title-time").first().text("Expired!"):$(this).find(".panel-title a").first().text("Expired!"),$(this).removeClass("panel-default").addClass("panel-danger")):n>=e&&n<t?$(this).removeClass("panel-default").addClass("panel-success"):e<=o&&$(this).removeClass("panel-default").addClass("panel-warning")}))}var i=n(0);$(document).ready(function(){o(),$('[data-toggle="offcanvas"]').click(function(){$(".row-offcanvas").toggleClass("active")}),$('[data-toggle="popover"]').popover({animation:!1}),$('a[data-toggle="popover"]').on("click",function(e){return e.preventDefault(),!1}),$("a.date-time time, a.date-time time.relative, time.relative").each(function(){var e=moment($(this).attr("datetime")),t=moment(),n=moment(e).preciseDiff(t,!0),o=a(n);$(this).text(o)}),r(),$(document).on("touchstart click",function(e){$('[data-toggle="popover"],[data-original-title]').each(function(){$(this).is(e.target)||0!==$(this).has(e.target).length||0!==$(".popover").has(e.target).length||((($(this).popover("hide").data("bs.popover")||{}).inState||{}).click=!1)})})})}});