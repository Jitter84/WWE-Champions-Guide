!function(e){function t(o){if(a[o])return a[o].exports;var n=a[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var a={};t.m=e,t.c=a,t.i=function(e){return e},t.d=function(e,a,o){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1356)}({0:function(e,t){var t=e.exports={};t.findBootstrapEnvironment=function(){var e=["xs","sm","md","lg"],t=window.document,a=t.createElement("div");t.body.appendChild(a);for(var o=e.length-1;o>=0;o--){var n=e[o];if(a.className="hidden-"+n,null===a.offsetParent)return t.body.removeChild(a),n}return""},t.localStorageSaveItem=function(e,t){"undefined"!=typeof localStorage?localStorage.setItem(e,t):console.error("window.localStorage, not defined")},t.localStorageRemoveItem=function(e){"undefined"!=typeof localStorage?localStorage.removeItem(e):console.error("window.localStorage, not defined")},t.localStorageGetItem=function(e){if("undefined"!=typeof localStorage)return localStorage.getItem(e);console.error("window.localStorage, not defined")}},1356:function(e,t,a){e.exports=a(4)},4:function(e,t,a){function o(){$.getScript("//native.cli.bz/nativeads/tizer/js/main.js",function(e,t,a){var o=$(".native-ad").data("clickky-id"),n=$(".native-ad").data("clickky-template"),r={site_id:o,blockId:o,hash:"ba763a2499ada20112d9335423a542f8e4d5d960",template:n,buttonClassColor:"white",styles:{background:"#fff",fontFamily:"Helvetica,Arial,sans-serif",colorFontTitle:"#000",colorFontDescription:"#000",ratingFontColor:"#000",buttonBackground:"#E63517",buttonFontColor:"#fff",buttonBorderColor:"#E63517"}},i=$("<fieldset/>",{class:"a-box"}).append($("<legend/>",{class:"a-box-legend",text:"AD"})).append($("<div/>",{id:o}));$(".native-ad").append(i),new ClickkyTizer(r).init()})}function n(){$("#infolinkScript").length&&$("<script>").attr("type","text/javascript").attr("src","//resources.infolinks.com/js/infolinks_main.js").appendTo("#infolinkScript")}function r(){$("#adSkyscrapper").length&&$("<script>").attr("type","text/javascript").attr("src","//servedby.eleavers.com/ads/ads.php?t=MTU1Mjc7NzI1Njt2ZXJ0aWNhbC5za3lzY3JhcGVy&index=1").appendTo("#adSkyscrapper")}function i(){$(".inner-content-ad").length&&$(".inner-content-ad").each(function(){var e=$(this).data("ad-index")||1;$("<script>").attr("type","text/javascript").attr("src","//servedby.eleavers.com/ads/ads.php?t=MTU1Mjc7NzI0ODtzcXVhcmUuc3F1YXJlX2JveA==&index="+e).appendTo(this)})}function l(){if($("#ads").length){var e="",t=[];"xs"!=f.findBootstrapEnvironment()?(e="/js/ads/728_90_header.js",t=["adLeaderboard","pubclerks_3785"]):(e="/js/ads/320_50_header.js",t=["adMobileLeaderboard","pubclerks_3786"]),function(e){var t=$("<div/>",{id:e[0],class:"ad"}).append($("<p/>",{class:"ad-help-text"}).append($("<a/>",{href:"http://adclerks.com/marketplace/website/8954/wwe-champions-guide",target:"_blank",text:"Advertise here for as low as $0.1 NOW! Factions ads are welcomed."})).append($("<div/>",{id:e[1]})));$("#ads").append(t)}(t),$.getScript(e)}}function c(){console.log("AdBlock is not enabled"),$("#adBlocked").removeClass("alert").removeClass("alert-danger").attr("role",null).empty()}function d(){console.log("AdBlock is enabled"),$("#adBlocked").addClass("alert").addClass("alert-danger").attr("role","alert").append($("<p/>",{class:"text-center",text:"To keep the website updated frequently, please help support it by whitelisting it on your ad blocker. Thank you!"}))}function s(){n(),l(),r(),i(),o(),adblockDetect(function(e){e?d():c()})}function p(e){var t=[];e.years&&t.push(e.years+"y"),e.months&&t.push(e.months+"m"),e.days&&t.push(e.days+"d"),e.hours&&t.push(e.hours+"h"),e.minutes&&t.push(e.minutes+"m");var a=t.join(" ");return e.firstDateWasLater?a="in "+a:a+=" ago",a}function u(){var e=f.localStorageGetItem("ad-code"),t=f.localStorageGetItem("ad-email"),a=f.localStorageGetItem("ad-expires");e&&t&&a?$.post("https://wwe-champions-guide-admin.herokuapp.com/adcode",{code:e},function(e){console.log("success"),f.localStorageSaveItem("ad-code",e.code),f.localStorageSaveItem("ad-email",e.email),f.localStorageSaveItem("ad-expires",e.expires),$("#ads, #adSkyscrapper, #infolinkScript, iframe, .a-box").remove()}).fail(function(e){console.log("error"),f.localStorageRemoveItem("ad-code"),f.localStorageRemoveItem("ad-email"),f.localStorageRemoveItem("ad-expires"),s()}):s()}var f=a(0);$(document).ready(function(){u(),$('[data-toggle="offcanvas"]').click(function(){$(".row-offcanvas").toggleClass("active")}),$('[data-toggle="popover"]').popover({animation:!1}),$('a[data-toggle="popover"]').on("click",function(e){return e.preventDefault(),!1}),$("a.date-time time, a.date-time time.relative, time.relative").each(function(){var e=moment($(this).attr("datetime")),t=moment(),a=moment(e).preciseDiff(t,!0),o=p(a);$(this).text(o)}),$(document).on("touchstart click",function(e){$('[data-toggle="popover"],[data-original-title]').each(function(){$(this).is(e.target)||0!==$(this).has(e.target).length||0!==$(".popover").has(e.target).length||((($(this).popover("hide").data("bs.popover")||{}).inState||{}).click=!1)})})})}});