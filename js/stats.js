!function(e){function t(a){if(n[a])return n[a].exports;var l=n[a]={i:a,l:!1,exports:{}};return e[a].call(l.exports,l,l.exports,t),l.l=!0,l.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1143)}({1143:function(e,t,n){e.exports=n(2)},2:function(e,t){$(document).ready(function(){function e(){o=s[v][u]}function t(){$("#wrestlerLevelUI").text("1/"+o.LevelCap),$("#wrestlerMaxLevel").val(o.LevelCap),$("#wrestlerLevelInput").val(1),$("#wrestlerLevelInput").prop("min",1),$("#wrestlerLevelInput").prop("max",o.LevelCap),n(1),l(o.Abilities)}function n(e){var t=r(e);$("#stat-hp").text(t.HP),$("#stat-red").text(t.Red),$("#stat-black").text(t.Black),$("#stat-yellow").text(t.Yellow),$("#stat-blue").text(t.Blue),$("#stat-green").text(t.Green),$("#stat-purpel").text(t.Purpel)}function a(e){return $("<div/>",{class:"row",sylte:"margin-bottom:10px;"}).append($("<div/>",{class:"col-xs-3"}).append($("<img/>",{src:"/img/Gems/"+e.gemType+".png",width:45,height:45,alt:e.gemType+" Gem",class:"center-block"})).append($("<p/>",{text:e.cost,class:"text-center"}))).append($("<div/>",{class:"col-xs-9"}).append($("<div/>",{class:"row"}).append($("<div/>",{class:"col-xs-12"}).append($("<p/>").append($("<strong/>",{text:e.name})))).append($("<div/>",{class:"col-xs-12"}).append($("<p/>",{text:e.levels[0].text,class:"ability-text"}))).append($("<div/>",{class:"col-xs-11"}).append($("<div/>",{class:"level-selector"}).append($("<p/>").append($("<span/>",{text:1,class:"abilitySelectedLevel"})).append("/").append($("<span/>",{text:e.levelCap,class:"abilityMaxLevel"}))).append($("<input/>",{type:"range",name:"ability-level",min:1,max:e.levelCap,value:1}).on("input",function(){var e=$(this).val(),t=$(this).parent().find(".abilitySelectedLevel").first(),n=$(this).parent().parent().parent().find(".ability-text").first(),a=$(this).next().val(),l=p(a,e);t.text(e),n.text(l.text)})).append($("<input/>",{class:"ability-id",name:"ability-id",type:"hidden",value:e.ID}))))))}function l(e){$("#abilities").empty(),e.forEach(function(e,t,n){$("#abilities").append(a(e))})}function r(e){for(var t in o.Stats){var n=o.Stats[t];if(n.level==e)return n.stats}}function i(e){var t=o.Abilities;for(var n in t)if(t[n].ID==e)return t[n];return!1}function p(e,t){var n=i(e),a=n.levels;for(var l in a)if(a[l].level==t)return a[l];return!1}var s={},o={},c=$("#wrestlerSlug").val();if(c){var u="1_1",v="Bronze";$.getJSON("/db/wrestler/"+c+".json",function(n){s=n,e(),t()}),$("#wrestlerLevelInput").on("input",function(){var e=$(this).val(),t=$("#wrestlerMaxLevel").val();$("#wrestlerLevelUI").text(e+"/"+t),n(e)}),$('input[name="stars"]').on("change",function(){u=$(this).val(),e(),t()}),$('input[name="tier"]').on("change",function(){v=$(this).val(),e(),t()})}})}});