!function(e){function t(r){if(a[r])return a[r].exports;var i=a[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var a={};t.m=e,t.c=a,t.i=function(e){return e},t.d=function(e,a,r){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1378)}({1378:function(e,t,a){e.exports=a(7)},7:function(e,t){function a(e){switch(e){case"Move_Generate_Abs":return"Generate";case"Move_Bleed_Perc":return"MoveBleedImprove";case"Move_Destroy_Abs":return"GemDestroy";case"Move_Steal_Perc":return"MoveStealImprove";case"Move_Submission_Dmg_Perc":return"MoveSubmissionDamage";case"Move_Dmg_Perc":case"Move_StartCharge_Abs":return"MoveEffectImprove";case"ModGem_Effect_Heal_Perc":return"GemEffectImprove";default:return"None"}}$(document).ready(function(){function e(e){for(var t in _){var a=_[t];if(a.ID==e)return a}return!1}function t(t,a){var r=e(t);if(r)for(var i in r.levels){var n=r.levels[i];if(n.level==a)return n}return!1}function r(){var e=[];for(var t in _){var a=_[t];e.push(a.Name+' "'+a.NickName+'"');var r=d(a);$(".add-trainers-list").append(r)}}function i(t){var a=e(t);if(a){var r=f(a);return $(".added-trainers").append(r),!0}return!1}function n(){I=g[w][C]}function s(e){$("#wrestlerLevelUI").text(I.LevelCap+"/"+I.LevelCap),$("#wrestlerMaxLevel").val(I.LevelCap),$("#wrestlerLevelInput").prop("min",1),$("#wrestlerLevelInput").prop("max",I.LevelCap),$("#wrestlerLevelInput").val(I.LevelCap),l(I.LevelCap),p(I.Abilities)}function l(e){var t=$("#wrestlerLevelInput").val()||1;e&&(t=e);var a=c(t);$(".gem-stat").removeClass("trainer-buff-modification"),$("#stat-hp").text(a.HP),$("#stat-red").text(a.Red).attr("data-variable-value",a.Red),$("#stat-black").text(a.Black).attr("data-variable-value",a.Black),$("#stat-yellow").text(a.Yellow).attr("data-variable-value",a.Yellow),$("#stat-blue").text(a.Blue).attr("data-variable-value",a.Blue),$("#stat-green").text(a.Green).attr("data-variable-value",a.Green),$("#stat-purpel").text(a.Purpel).attr("data-variable-value",a.Purpel)}function d(e){return $("<a/>",{class:"list-group-item add-trainer",href:"#","data-trainer-id":e.ID}).on("click",function(e){e.preventDefault(),$("#addTrainerModal").modal("hide"),i($(this).attr("data-trainer-id"))}).append($("<div/>",{class:"row"}).append($("<div/>",{class:"col-xs-3"}).append($("<div/>",{class:"added-trainer-thumbnail",style:'background-image:url("/img/Portraits/'+e.Portrait+'")'}))).append($("<div/>",{class:"col-xs-9"}).append($("<h4/>",{style:"margin-top:0;",class:"wrestler-name",text:e.Name+' "'+e.NickName+'"'})).append($("<p/>",{text:e.levels[0].text}))))}function f(e){return $("<div/>",{style:"margin-bottom:15px;",class:"row trainer","data-trainer-id":e.ID,"data-activated":"false","data-buff-gem-type":e.buffGemType,"data-buff-move-type":e.buffMoveType,"data-buff-value":e.levels[0].buffValue}).append($("<div/>",{class:"col-xs-12"}).append($("<h4/>",{text:e.Name+' "'+e.NickName+'"'})).append($("<div/>",{class:"row"}).append($("<div/>",{class:"col-xs-3"}).append($("<div/>",{class:"added-trainer-thumbnail",style:'background-image:url("/img/Portraits/'+e.Portrait+'")'}))).append($("<div/>",{class:"col-xs-9"}).append($("<div/>",{class:"row"}).append($("<div/>",{class:"col-xs-3 text-left"}).append($("<button/>",{class:"btn btn-danger",html:'<i class="fa fa-trash-o"></i>'}).on("click",function(){$(this).closest(".trainer").first().find("button.deactivate-trainer-effect").first().trigger("click"),$(this).closest(".trainer").first().remove()}))).append($("<div/>",{class:"col-xs-6 text-center"}).append($("<span/>",{class:"trainer-talent-score",text:e.levels[0].talentScore+"/"+e.maxTalentScore}))).append($("<div/>",{class:"col-xs-3 text-right"}).append($("<button/>",{class:"btn btn-success activate-trainer-effect",html:'<i class="fa fa-check"></i>'}).on("click",function(){$(this).addClass("hidden"),$(this).closest(".trainer").first().find(".deactivate-trainer-effect").removeClass("hidden"),$(this).closest(".trainer").first().attr("data-activated","true"),p(I.Abilities,!0),l(),y()})).append($("<button/>",{class:"btn btn-primary deactivate-trainer-effect hidden",html:'<i class="fa fa-ban"></i>'}).on("click",function(){$(this).addClass("hidden"),$(this).closest(".trainer").first().find(".activate-trainer-effect").removeClass("hidden"),$(this).closest(".trainer").first().attr("data-activated","false"),p(I.Abilities,!0),l(),y()})))).append($("<div/>",{class:"row",style:"margin-top:8px;"}).append($("<div/>",{class:"col-xs-12"}).append($("<p/>",{class:"trainer-buff-text",text:e.levels[0].text})))).append($("<div/>",{class:"row",style:"margin-top:0px;"}).append($("<div/>",{class:"col-xs-11"}).append($("<input/>",{class:"trainer-level",type:"range",name:"trainer-level",min:"1",max:e.levels.length,value:"1"}).on("input",function(){var a=parseInt($(this).val()),r=($(this).attr("max"),$($(this).closest(".trainer").first())),i=r.attr("data-activated"),n=r.find(".trainer-buff-text").first(),s=r.find(".trainer-talent-score").first(),d=r.attr("data-trainer-id"),f=t(d,a);parseInt(r.attr("data-buff-value")),f.buffValue;r.attr("data-buff-value",f.buffValue),s.empty(),s.text(f.talentScore+"/"+e.maxTalentScore),n.empty(),n.text(f.text),"true"===i&&(p(I.Abilities,!0),l(),y())})))))))}function v(e,t){return t=t||e.levelCap,$("<div/>",{class:"row ability",sylte:"margin-bottom:10px;","data-buffed-id":e.move.AffectedValueID,"data-gem-type":e.gemType,"data-effects":JSON.stringify(e.move.Effects)}).append($("<div/>",{class:"col-xs-3"}).append($("<img/>",{src:"/img/Gems/"+e.gemType+".png",width:45,height:45,alt:e.gemType+" Gem",class:"center-block"})).append($("<p/>",{html:'<span class="ability-mp">0</span> / <span class="ability-cost">'+e.cost+"</span>",class:"text-center"}))).append($("<div/>",{class:"col-xs-9"}).append($("<div/>",{class:"row"}).append($("<div/>",{class:"col-xs-12"}).append($("<p/>").append($("<strong/>",{text:e.name})))).append($("<div/>",{class:"col-xs-12"}).append($("<p/>",{html:e.levels[t-1].html,class:"ability-text"}))).append($("<div/>",{class:"col-xs-11"}).append($("<div/>",{class:"level-selector"}).append($("<p/>").append($("<span/>",{text:t,class:"abilitySelectedLevel"})).append("/").append($("<span/>",{text:e.levelCap,class:"abilityMaxLevel"}))).append($("<input/>",{type:"range",name:"ability-level",min:1,max:e.levelCap,value:t}).on("input",function(){var e=$(this).val(),t=$(this).parent().find(".abilitySelectedLevel").first(),a=$($(this).closest(".ability").first()),r=a.find(".ability-text").first(),i=$(this).next().val(),n=u(i,e);t.text(e),r.html(n.html),a.find(".ability-mp").first().text(0),l(),y(a)})).append($("<input/>",{class:"ability-id",name:"ability-id",type:"hidden",value:e.ID}))))))}function p(e,t){var a=[];t&&$('input[name="ability-level"]').each(function(){a.push(parseInt($(this).val()))}),$("#abilities").empty(),e.forEach(function(e,r,i){var n=1;t&&a&&a.length>0?(n=a[r],$("#abilities").append(v(e,n))):$("#abilities").append(v(e))})}function c(e){for(var t in I.Stats){var a=I.Stats[t];if(a.level==e)return a.stats}}function o(e){var t=I.Abilities;for(var a in t)if(t[a].ID==e)return t[a];return!1}function u(e,t){var a=o(e),r=a.levels;for(var i in r)if(r[i].level==t)return r[i];return!1}function m(e,t,a,r,i,n){if(-1!==$.inArray(e,t)){if("Generate"==e||"GemDestroy"==e){var s=a.find("span[data-variable-name='"+r+"']");if(s&&s.length){var l=s.first().attr("data-variable-value");if(i==l)return!0}}else if("MoveEffectImprove"==e){if(i==n)return!0}else if("GemEffectImprove"==e){var s=a.find("span[data-variable-name='min2']");if(s&&s.length){var l=s.first().attr("data-variable-value");if("Heal"==l)return!0}}else if("MoveSubmissionDamage"==e||"MoveStealImprove"==e||"MoveBleedImprove"==e)return!0;return!1}return!1}function b(e,t,a,r){if("Move_Bleed_Perc"==r){var i=e.find("span[data-variable-name='val2']").first();i.addClass("trainer-buff-modification");var n=i.attr("data-variable-value"),s=i.text(),l=parseInt(n)*t,d=parseInt(s)+l;i.text(d)}if("Move_Destroy_Abs"==r){var f=e.find("span[data-variable-name='val1']").first();f.addClass("trainer-buff-modification");var d=parseInt(f.text())+t;f.text(d)}if("Move_Generate_Abs"==r){var f=e.find("span[data-variable-name='val1']").first();f.addClass("trainer-buff-modification");var d=parseInt(f.text())+t;f.text(d)}if("Move_Dmg_Perc"==r){var i=e.find("span[data-variable-name='damage']").first();i.addClass("trainer-buff-modification");var n=i.attr("data-variable-value"),s=i.text(),l=parseInt(n)*t,d=parseInt(s)+l;i.text(d)}if("Move_StartCharge_Abs"==r){var f=e.closest(".ability").first().find(".ability-mp").first();f.addClass("trainer-buff-modification");var d=parseInt(f.text())+t;f.text(d)}if("ModGem_Effect_Heal_Perc"==r){var i=e.find("span[data-variable-name='val3']").first();i.addClass("trainer-buff-modification");var n=i.attr("data-variable-value"),s=i.text(),l=parseInt(n)*t,d=parseInt(s)+l;i.text(d)}if("Move_Submission_Dmg_Perc"==r||"Move_Steal_Perc"==r){var i=e.find("span[data-variable-name='val1']").first();i.addClass("trainer-buff-modification");var n=i.attr("data-variable-value"),s=i.text(),l=parseInt(n)*t,d=parseInt(s)+l;i.text(d)}}function x(e,t,a){if("Gem_Dmg_Perc"==a){var r=$($(".gem-stats").first().find('[data-gem-type="'+e+'"]').first());r.addClass("trainer-buff-modification");var i=r.attr("data-variable-value"),n=r.text(),s=parseInt(i)*t,l=parseInt(n)+s;r.text(l)}if("Gem_Dmg_Abs"==a){var r=$($(".gem-stats").first().find('[data-gem-type="'+e+'"]').first()),i=r.attr("data-variable-value"),n=r.text(),l=parseInt(n)+t;r.text(l)}$(".gem-stat").each(function(e,t){var a=$(this).text();a=Math.round(a),$(this).text(a)})}function h(e,t,a,r,i){if(i){var n=i.data("effects"),s=i.data("buffed-id"),l=i.data("gem-type"),d=i.find(".ability-text").first();m(t,n,d,s,e,l)&&b(d,a,t,r)}else $(".ability").each(function(i,n){var s=$(this).data("effects"),l=$(this).data("buffed-id"),d=$(this).data("gem-type"),f=$(this).find(".ability-text").first();m(t,s,f,l,e,d)&&b(f,a,t,r)});$('span[data-variable-name="damage"], span[data-variable-name="val1"], span[data-variable-name="val2"], span[data-variable-name="val3"]').each(function(e,t){var a=$(this).text();a=Math.round(a),$(this).text(a)})}function y(e){$(".added-trainers").find('.trainer[data-activated="true"]').each(function(t,r){var i=$(r),n=1*i.attr("data-buff-value"),s=i.data("buff-gem-type"),l=i.data("buff-move-type");h(s,a(l),n,l,e),x(s,n,l)})}var g={},_={},I={},M=$("#wrestlerSlug").val();if(M){var C="3_3",w="Gold";$.getJSON("/db/wrestler/"+M+".json",function(e){g=e,n(),s(I.LevelCap)}),$.getJSON("/db/misc/trainers.json",function(e){_=e,r()}),$("#search").on("keyup keypress",function(e){if(13===(e.keyCode||e.which))return e.preventDefault(),!1;var t=$(this).val().toUpperCase();$(".add-trainer").each(function(){$(this).find(".wrestler-name").first().text().toUpperCase().indexOf(t)>-1?$(this).removeClass("hidden"):$(this).addClass("hidden")})}),$("#wrestlerLevelInput").on("input",function(){var e=$(this).val(),t=$("#wrestlerMaxLevel").val();$("#wrestlerLevelUI").text(e+"/"+t),p(I.Abilities,!0),l(e),y()}),$('input[name="stars"]').on("change",function(){C=$(this).val(),n(),s(),y()}),$('input[name="tier"]').on("change",function(){w=$(this).val(),n(),s(),y()}),$("input.trainer-level").on("input",function(){var e=parseInt($(this).val()),a=($(this).attr("max"),$($(this).closest(".trainer").first())),r=a.attr("data-activated"),i=a.find(".trainer-buff-text").first(),n=a.find(".trainer-talent-score").first(),s=a.attr("data-trainer-id"),d=t(s,e);parseInt(a.attr("data-buff-value")),d.buffValue;a.attr("data-buff-value",d.buffValue),n.empty(),n.text(d.talentScore+"/"+d.maxTalentScore),i.empty(),i.text(d.text),"true"===r&&(p(I.Abilities,!0),l(),y())})}})}});