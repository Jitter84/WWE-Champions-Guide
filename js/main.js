!function(e){function t(o){if(a[o])return a[o].exports;var n=a[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var a={};t.m=e,t.c=a,t.i=function(e){return e},t.d=function(e,a,o){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1356)}({0:function(e,t){var t=e.exports={};t.findBootstrapEnvironment=function(){var e=["xs","sm","md","lg"],t=window.document,a=t.createElement("div");t.body.appendChild(a);for(var o=e.length-1;o>=0;o--){var n=e[o];if(a.className="hidden-"+n,null===a.offsetParent)return t.body.removeChild(a),n}return""},t.localStorageSaveItem=function(e,t){"undefined"!=typeof localStorage?localStorage.setItem(e,t):console.error("window.localStorage, not defined")},t.localStorageRemoveItem=function(e){"undefined"!=typeof localStorage?localStorage.removeItem(e):console.error("window.localStorage, not defined")},t.localStorageGetItem=function(e){if("undefined"!=typeof localStorage)return localStorage.getItem(e);console.error("window.localStorage, not defined")}},1356:function(e,t,a){e.exports=a(4)},4:function(e,t,a){function o(){$("#adSkyscrapper").length&&$("<script>").attr("type","text/javascript").attr("src","//servedby.eleavers.com/ads/ads.php?t=MTU1Mjc7NzI1Njt2ZXJ0aWNhbC5za3lzY3JhcGVy&index=1").appendTo("#adSkyscrapper")}function n(){$(".inner-content-eleavers-250-ad").length&&$(".inner-content-eleavers-250-ad").each(function(){var e=$(this).data("ad-index")||1;$("<script>").attr("type","text/javascript").attr("src","//servedby.eleavers.com/ads/ads.php?t=MTU1Mjc7NzI0ODtzcXVhcmUuc3F1YXJlX2JveA==&index="+e).appendTo(this)}),$(".inner-content-eleavers-468-ad").length&&$(".inner-content-eleavers-468-ad").each(function(){var e=$(this).data("ad-index")||1;$("<script>").attr("type","text/javascript").attr("src","//servedby.eleavers.com/ads/ads.php?t=MTU1Mjc7NzI5NDtob3Jpem9udGFsLmJhbm5lcg==&index="+e).appendTo(this)}),$(".inner-content-eleavers-300-ad").length&&$(".inner-content-eleavers-300-ad").each(function(){var e=$(this).data("ad-index")||1;$("<script>").attr("type","text/javascript").attr("src","//servedby.eleavers.com/ads/ads.php?t=MTU1Mjc7NzMwMDtzcXVhcmUubWVkaXVtX3JlY3RhbmdsZQ==&index="+e).appendTo(this)})}function r(){if($("#ads").length){var e="",t=[];"xs"!=p.findBootstrapEnvironment()?(e="/js/ads/728_90_header.js",t=["adLeaderboard","pubclerks_3785"]):(e="/js/ads/320_50_header.js",t=["adMobileLeaderboard","pubclerks_3786"]),function(e){var t=$("<div/>",{id:e[0],class:"ad"}).append($("<p/>",{class:"ad-help-text"}).append($("<a/>",{href:"http://adclerks.com/marketplace/website/8954/wwe-champions-guide",target:"_blank",text:"Advertise here for as low as $0.1 NOW! Factions ads are welcomed."})).append($("<div/>",{id:e[1]})));$("#ads").append(t)}(t),$.getScript(e)}}function c(){console.log("AdBlock is not enabled"),$("#adBlocked").removeClass("alert").removeClass("alert-danger").attr("role",null).empty()}function i(){console.log("AdBlock is enabled"),$("#adBlocked").addClass("alert").addClass("alert-danger").attr("role","alert").append($("<p/>",{class:"text-center",text:"To keep the website updated frequently, please help support it by whitelisting it on your ad blocker. Thank you!"}))}function d(){r(),o(),n(),adblockDetect(function(e){e?i():c()})}function s(e){var t=[];e.years&&t.push(e.years+"y"),e.months&&t.push(e.months+"m"),e.days&&t.push(e.days+"d"),e.hours&&t.push(e.hours+"h"),e.minutes&&t.push(e.minutes+"m");var a=t.join(" ");return e.firstDateWasLater?a="in "+a:a+=" ago",a}function l(){var e=p.localStorageGetItem("ad-code"),t=p.localStorageGetItem("ad-email"),a=p.localStorageGetItem("ad-expires");e&&t&&a?$.post("https://wwe-champions-guide-admin.herokuapp.com/adcode",{code:e},function(e){console.log("success"),p.localStorageSaveItem("ad-code",e.code),p.localStorageSaveItem("ad-email",e.email),p.localStorageSaveItem("ad-expires",e.expires),$("#ads, #adSkyscrapper, #infolinkScript, iframe, .a-box, .native-placement").remove()}).fail(function(e){console.log("error"),p.localStorageRemoveItem("ad-code"),p.localStorageRemoveItem("ad-email"),p.localStorageRemoveItem("ad-expires"),d()}):d()}var p=a(0);$(document).ready(function(){l(),$('[data-toggle="offcanvas"]').click(function(){$(".row-offcanvas").toggleClass("active")}),$('[data-toggle="popover"]').popover({animation:!1}),$('a[data-toggle="popover"]').on("click",function(e){return e.preventDefault(),!1}),$("a.date-time time, a.date-time time.relative, time.relative").each(function(){var e=moment($(this).attr("datetime")),t=moment(),a=moment(e).preciseDiff(t,!0),o=s(a);$(this).text(o)}),$(document).on("touchstart click",function(e){$('[data-toggle="popover"],[data-original-title]').each(function(){$(this).is(e.target)||0!==$(this).has(e.target).length||0!==$(".popover").has(e.target).length||((($(this).popover("hide").data("bs.popover")||{}).inState||{}).click=!1)})})})}});