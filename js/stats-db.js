!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3230)}({0:function(e,t){var t=e.exports={};t.findBootstrapEnvironment=function(){var e=["xs","sm","md","lg"],t=window.document,n=t.createElement("div");t.body.appendChild(n);for(var o=e.length-1;o>=0;o--){var r=e[o];if(n.className="hidden-"+r,null===n.offsetParent)return t.body.removeChild(n),r}return""},t.localStorageSaveItem=function(e,t){"undefined"!=typeof localStorage?localStorage.setItem(e,t):console.error("window.localStorage, not defined")},t.localStorageRemoveItem=function(e){"undefined"!=typeof localStorage?localStorage.removeItem(e):console.error("window.localStorage, not defined")},t.localStorageGetItem=function(e){if("undefined"!=typeof localStorage)return localStorage.getItem(e);console.error("window.localStorage, not defined")},t.getUrlParameter=function(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)"),n=t.exec(location.search);return null===n?null:decodeURIComponent(n[1].replace(/\+/g," "))}},12:function(e,t,n){function o(){stitch.StitchClientFactory.create("wwe-champions-guide-pgwcj").then(function(e){var t=e.service("mongodb","mongodb-atlas").db("wwe-champions");e.login().then(function(){return t.collection("players").aggregate([{$unwind:"$feudScores"},{$match:{"feudScores.rank":{$lte:d},"feudScores.ffID":l}},{$sort:{"feudScores.rank":1}}])}).then(function(e){r(),e?c(e):a()}).catch(function(e){console.error("Invalid request"),console.error(e),r(),a()})})}function r(){$("#loading").hide()}function a(){$("#results").empty(),$("#results").text("Error loading!")}function c(e){var t=$("<tbody/>"),n=new Date(e[0].feudScores.ffStartTime),o=n.getUTCDate(),r=n.toLocaleString("en-US",{timeZone:"UTC",month:"long"}),a=n.getUTCFullYear();e.forEach(function(e){t.append($("<tr/>").append($("<td/>").append($("<a/>",{href:"/stats/players/profile.html?id="+e._id.toString(),text:e.name}))).append($("<td/>").append($("<a/>",{href:"/stats/factions/profile.html?name="+e.feudScores.faction+"&fID="+l,text:e.feudScores.faction}))).append($("<td/>",{text:e.feudScores.score})).append($("<td/>",{text:e.feudScores.rank})))}),$("#results").empty(),$("#results").append($("<h3/>",{text:"Top 100 Feud Players ("+r+" "+o+" "+a+")"})),$("#results").append($("<table/>",{class:"table"}).append($("<thead/>").append($("<tr/>").append($("<th/>",{text:"Name"})).append($("<th/>",{text:"Faction"})).append($("<th/>",{text:"Score"})).append($("<th/>",{text:"Rank"})))).append(t))}var l=(n(0),"FF20180928"),d=100;$(document).ready(function(){o()})},3230:function(e,t,n){e.exports=n(12)}});