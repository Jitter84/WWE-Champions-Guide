!function(e){function o(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,o),a.l=!0,a.exports}var t={};o.m=e,o.c=t,o.i=function(e){return e},o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},o.p="",o(o.s=1359)}({0:function(e,o){var o=e.exports={};o.findBootstrapEnvironment=function(){var e=["xs","sm","md","lg"],o=window.document,t=o.createElement("div");o.body.appendChild(t);for(var n=e.length-1;n>=0;n--){var a=e[n];if(t.className="hidden-"+a,null===t.offsetParent)return o.body.removeChild(t),a}return""},o.localStorageSaveItem=function(e,o){"undefined"!=typeof localStorage?localStorage.setItem(e,o):console.error("window.localStorage, not defined")},o.localStorageRemoveItem=function(e){"undefined"!=typeof localStorage?localStorage.removeItem(e):console.error("window.localStorage, not defined")},o.localStorageGetItem=function(e){if("undefined"!=typeof localStorage)return localStorage.getItem(e);console.error("window.localStorage, not defined")}},1359:function(e,o,t){e.exports=t(5)},5:function(e,o,t){function n(){l.localStorageRemoveItem("ad-code"),l.localStorageRemoveItem("ad-email"),l.localStorageRemoveItem("ad-expires")}function a(){$("#removeAdContent").empty();var e=$("<p/>",{text:"Please put the ad removal code below"});$("#removeAdContent").append(e),$("#removeAdContent").append($("<div/>",{style:"margin-bottom:20px;"}).append($("<form/>",{id:"removeAdsForm"}).append($("<div/>",{class:"form-group"}).append($("<label/>",{for:"removeAdsCodeTextbox",text:"Ad Removal Code"})).append($("<input/>",{id:"removeAdsCodeTextbox",class:"form-control input-text-xs-fix",type:"text",name:"ad-code",autocomplete:"off",value:"",required:!0}))).append($("<button/>",{type:"submit","data-loading-text":"<i class='fa fa-spinner fa-spin '></i> Loading",class:"btn btn-primary",text:"Submit"}))))}function r(e){$("#removeAdContent").empty();var o=$("<p/>",{text:"You are currently logged in to the system, and ads are disabled. You code will expire on "}).append($("<strong/>").append($("<span/>",{id:"codeExpiry",text:e+" UTC"})));$("#removeAdContent").append(o),$("#removeAdContent").append($("<p/>",{text:"Would you like to logout and re-enable the ads?"})),$("#removeAdContent").append($("<p/>",{class:"help-block",text:"Note: You will have to put the Ad removal code back."})),$("#removeAdContent").append($("<button/>",{type:"button",id:"logout",class:"btn btn-primary",text:"Logout"}))}function d(){var e=l.localStorageGetItem("ad-code"),o=l.localStorageGetItem("ad-email"),t=l.localStorageGetItem("ad-expires");e&&o&&t?$.post("https://wwe-champions-guide-admin.herokuapp.com/adcode",{code:e},function(e){l.localStorageSaveItem("ad-code",e.code),l.localStorageSaveItem("ad-email",e.email),l.localStorageSaveItem("ad-expires",e.expires),r(moment.utc(e.expires).format("dddd, MMMM Do YYYY, h:mm:ss a"))}).fail(function(e){n(),a()}):a()}var l=t(0);$(document).ready(function(){d(),$(document).on("click","#logout",function(e){console.log("Test"),n(),window.location="/"}),$("#removeAdsForm").on("submit",function(e){e.preventDefault(),$('button[type="submit"]').button("loading");var o=$(this).serializeArray().reduce(function(e,o){return e[o.name]=o.value,e},{});$.post("https://wwe-champions-guide-admin.herokuapp.com/adcode",{code:o["ad-code"]},function(e){console.log("success"),$("#modalSuccess").modal(),l.localStorageSaveItem("ad-code",e.code),l.localStorageSaveItem("ad-email",e.email),l.localStorageSaveItem("ad-expires",e.expires)}).fail(function(e){console.log("error"),$("#modalError").modal(),n()}).always(function(){$('button[type="submit"]').button("reset")})})})}});