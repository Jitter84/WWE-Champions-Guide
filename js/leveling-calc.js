!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1423)}({1423:function(e,t,r){e.exports=r(5)},5:function(e,t){$(document).ready(function(){function e(e){var t=v.LevelUpCosts;for(var r in t){var n=t[r];if(n.Stars==e)return n.LevelsCost}}function t(e){var t=v.EvoTokens;for(var r in t){var n=t[r];if(n.Color==e)return n.Items}}function r(e,r,n){var o={},a=t(e);if(n<=a.length&&r<n)for(var u=r;u<n;u++)a[u].Tokens.forEach(function(e){o[e.ID]?o[e.ID]=o[e.ID]+e.Amount:o[e.ID]=e.Amount});return o}function n(t,r,n){var o=e(t),a=0;if(n<=o.length&&r<n)for(var u=r;u<n;u++)a+=o[u];return a}function o(e,t){var r=v.MoveUpgrade,n=0;if(t<=r.length&&e<t)for(var o=e;o<t;o++)n+=parseInt(r[o].TP);return n}function a(e,t){e<=0?$("#levelUpResultsTotal").text(t):$("#levelUpResults"+e+"Star").text(t)}function u(e){for(var t in e)$("#moveUpgradeResults"+t).text(e[t])}function i(e){for(var t in e)$("#"+t).text(e[t])}function s(){$("#evoTokenResultsTable .token-cost-result-evolution").text(0)}function l(e,t){var r=0,n=0;switch(t.toLowerCase()){case"bronze":r=0;break;case"silver":r=1;break;case"gold":r=2}switch(e){case 1:n=0;break;case 2:n=3;break;case 3:n=6}return r+n}!function(){$("#levelUpCostForm :checkbox, #moveUpgradeForm :checkbox").change(function(e){$(this).is(":checked")?($('input[name="start-'+e.target.name+'"]').prop("disabled",!1),$('input[name="target-'+e.target.name+'"]').prop("disabled",!1)):($('input[name="start-'+e.target.name+'"]').prop("disabled",!0),$('input[name="target-'+e.target.name+'"]').prop("disabled",!0))})}();var v={};$.getJSON("/db/misc/leveling.json",function(e){v=e}).fail(function(){alert("error")}),$("#levelUpCostForm").on("submit",function(e){e.preventDefault();var t=$(this).serializeArray().reduce(function(e,t){return e[t.name]=t.value,e},{});if(t){for(var r=0,o=1;o<4;o++)if(t["level-up-"+o+"-star"]&&"on"==t["level-up-"+o+"-star"].toLowerCase()){var u=t["start-level-up-"+o+"-star"]?parseInt(t["start-level-up-"+o+"-star"]):0,i=t["target-level-up-"+o+"-star"]?parseInt(t["target-level-up-"+o+"-star"]):0,s=n(o,u,i);r+=s,a(o,s)}else a(o,0);a(0,r)}}),$("#moveUpgradeForm").on("submit",function(e){e.preventDefault();var t={Black:0,Yellow:0,Green:0,Purple:0,Blue:0,Red:0},r=$(this).serializeArray().reduce(function(e,t){return e[t.name]=t.value,e},{});if(r)for(var n=1;n<6;n++)if(r["move-upgrade-"+n]&&"on"==r["move-upgrade-"+n].toLowerCase()){var a=r["start-move-upgrade-"+n]?parseInt(r["start-move-upgrade-"+n]):0,i=r["target-move-upgrade-"+n]?parseInt(r["target-move-upgrade-"+n]):0,s=r["type-move-upgrade-"+n]?r["type-move-upgrade-"+n]:"",l=o(a,i);t[s]=t[s]+l}u(t)}),$("#evolutionForm").on("submit",function(e){e.preventDefault(),s();var t=$(this).serializeArray().reduce(function(e,t){return e[t.name]=t.value,e},{});if(t){var n=t["start-stars-evolution"]?parseInt(t["start-stars-evolution"]):0,o=t["start-tier-evolution"]?t["start-tier-evolution"]:"",a=t["target-stars-evolution"]?parseInt(t["target-stars-evolution"]):0,u=t["target-tier-evolution"]?t["target-tier-evolution"]:"",v=t["wrestler-color-evolution"]?t["wrestler-color-evolution"]:"",c=l(n,o),f=l(a,u);if(f>c){i(r(v,c,f))}}})})}});