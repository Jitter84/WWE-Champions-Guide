!function(e){function a(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,a),i.l=!0,i.exports}var t={};a.m=e,a.c=t,a.i=function(e){return e},a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},a.p="",a(a.s=3239)}({13:function(e,a){function t(e){switch(e){case"Move_Generate_Abs":return"Generate";case"Move_Bleed_Perc":return"MoveBleedImprove";case"Move_Destroy_Abs":case"Move_Destroy_Rnd_Abs":return"GemDestroy";case"Move_Steal_Perc":return"MoveStealImprove";case"Move_Submission_Turn_Abs":return"MoveSubmissionTurn";case"Move_Submission_Dmg_Perc":return"MoveSubmissionDamage";case"Move_Steal_Gem_Abs":return"MoveStealGemImprove";case"Move_Dmg_Perc":return"MoveEffectImprove";case"ModGem_Effect_Strike_Perc":case"ModGem_Effect_Heal_Perc":case"ModGem_Effect_Block_Perc":return"GemEffectImprove";case"Gem_Dmg_Perc":case"Gem_Dmg_Abs":return"GemDamage";default:return"None"}}$(document).ready(function(){function e(e){$(".btn-equip-ability").each(function(a){-1!==e.indexOf(a)&&$(this).trigger("click")})}function a(e){for(var a in M){var t=M[a];if(t.ID==e)return t}return!1}function r(e,t){var r=a(e);if(r)for(var i in r.levels){var n=r.levels[i];if(n.level==t)return n}return!1}function i(){var e=[];for(var a in M){var t=M[a];e.push(t.Name+' "'+t.NickName+'"');var r=v(t);$(".add-trainers-list").append(r)}}function n(e){var t=a(e);if(t){var r=o(t);return $(".added-trainers").append(r),!0}return!1}function s(){C=I[G][w]}function l(e){$("#wrestlerLevelUI").text(C.LevelCap+"/"+C.LevelCap),$("#wrestlerMaxLevel").val(C.LevelCap),$("#wrestlerLevelInput").prop("min",1),$("#wrestlerLevelInput").prop("max",C.LevelCap),$("#wrestlerLevelInput").val(C.LevelCap),p(C.Abilities),f(C.LevelCap)}function f(e){var a=$("#wrestlerLevelInput").val()||1;e&&(a=e);var t=u(a);$(".gem-stat").removeClass("trainer-buff-modification"),$("#statsTalentScore").val(t.TalentScore),$("#stat-hp").text(t.HP),$("#stat-red").text(t.Red).attr("data-variable-value",t.Red),$("#stat-black").text(t.Black).attr("data-variable-value",t.Black),$("#stat-yellow").text(t.Yellow).attr("data-variable-value",t.Yellow),$("#stat-blue").text(t.Blue).attr("data-variable-value",t.Blue),$("#stat-green").text(t.Green).attr("data-variable-value",t.Green),$("#stat-purple").text(t.Purple).attr("data-variable-value",t.Purple),d()}function d(){var e=parseInt($("#statsTalentScore").val()),a=0;$(".row.ability.equipped").each(function(e){var t=$(this).find('input[name="talent-score"]').first().val();a+=parseInt(t)});var t=parseInt((e+a+414)/2.2);$("#stat-talent").text(t)}function v(e){return $("<a/>",{class:"list-group-item add-trainer",href:"#","data-trainer-id":e.ID}).on("click",function(e){e.preventDefault(),$("#addTrainerModal").modal("hide"),n($(this).attr("data-trainer-id"))}).append($("<div/>",{class:"row"}).append($("<div/>",{class:"col-xs-3"}).append($("<div/>",{class:"added-trainer-thumbnail",style:'background-image:url("/img/Portraits/'+e.Portrait+'")'}))).append($("<div/>",{class:"col-xs-9"}).append($("<h4/>",{style:"margin-top:0;",class:"wrestler-name",text:e.Name+' "'+e.NickName+'"'})).append($("<p/>",{text:e.levels[0].text}))))}function o(e){return $("<div/>",{style:"margin-bottom:15px;",class:"row trainer","data-trainer-id":e.ID,"data-activated":"false","data-buff-gem-type":e.buffGemType,"data-buff-move-type":e.buffMoveType,"data-buff-value":e.levels[0].buffValue}).append($("<div/>",{class:"col-xs-12"}).append($("<h4/>",{text:e.Name+' "'+e.NickName+'"'})).append($("<div/>",{class:"row"}).append($("<div/>",{class:"col-xs-3"}).append($("<div/>",{class:"added-trainer-thumbnail",style:'background-image:url("/img/Portraits/'+e.Portrait+'")'}))).append($("<div/>",{class:"col-xs-9"}).append($("<div/>",{class:"row"}).append($("<div/>",{class:"col-xs-3 text-left"}).append($("<button/>",{class:"btn btn-danger",html:'<i class="fa fa-trash-o"></i>'}).on("click",function(){$(this).closest(".trainer").first().find("button.deactivate-trainer-effect").first().trigger("click"),$(this).closest(".trainer").first().remove()}))).append($("<div/>",{class:"col-xs-6 text-center"}).append($("<span/>",{class:"trainer-talent-score",text:e.levels[0].talentScore+"/"+e.maxTalentScore}))).append($("<div/>",{class:"col-xs-3 text-right"}).append($("<button/>",{class:"btn btn-success activate-trainer-effect",html:'<i class="fa fa-check"></i>'}).on("click",function(){$(this).addClass("hidden"),$(this).closest(".trainer").first().find(".deactivate-trainer-effect").removeClass("hidden"),$(this).closest(".trainer").first().attr("data-activated","true"),p(C.Abilities,!0),f(),g()})).append($("<button/>",{class:"btn btn-primary deactivate-trainer-effect hidden",html:'<i class="fa fa-ban"></i>'}).on("click",function(){$(this).addClass("hidden"),$(this).closest(".trainer").first().find(".activate-trainer-effect").removeClass("hidden"),$(this).closest(".trainer").first().attr("data-activated","false"),p(C.Abilities,!0),f(),g()})))).append($("<div/>",{class:"row",style:"margin-top:8px;"}).append($("<div/>",{class:"col-xs-12"}).append($("<p/>",{class:"trainer-buff-text",text:e.levels[0].text})))).append($("<div/>",{class:"row",style:"margin-top:0px;"}).append($("<div/>",{class:"col-xs-11"}).append($("<input/>",{class:"trainer-level",type:"range",name:"trainer-level",min:"1",max:e.levels.length,value:"1"}).on("input",function(){var a=parseInt($(this).val()),t=($(this).attr("max"),$($(this).closest(".trainer").first())),i=t.attr("data-activated"),n=t.find(".trainer-buff-text").first(),s=t.find(".trainer-talent-score").first(),l=t.attr("data-trainer-id"),d=r(l,a);parseInt(t.attr("data-buff-value")),d.buffValue;t.attr("data-buff-value",d.buffValue),s.empty(),s.text(d.talentScore+"/"+e.maxTalentScore),n.empty(),n.text(d.text),"true"===i&&(p(C.Abilities,!0),f(),g())})))))))}function c(e,a){return a=a||e.levelCap,$("<div/>",{class:"row ability",sylte:"margin-bottom:10px;","data-buffed-id":e.move.AffectedValueID,"data-gem-type":e.gemType,"data-effects":JSON.stringify(e.move.Effects)}).append($("<input/>",{type:"hidden",value:e.levels[a-1].talentScore,name:"talent-score"})).append($("<div/>",{class:"col-xs-3"}).append($("<img/>",{src:"/img/Gems/"+e.gemType+".png",width:45,height:45,alt:e.gemType+" Gem",class:"center-block"})).append($("<p/>",{html:'<span class="ability-mp">0</span> / <span class="ability-cost">'+e.cost+"</span>",class:"text-center"})).append($("<p/>",{class:"text-center"}).append($("<button/>",{class:"btn btn-xs btn-primary btn-equip-ability",html:"Equip"}).on("click",function(){var e=$($(this).closest(".ability").first());$(this).hasClass("btn-primary")?($(this).removeClass("btn-primary"),$(this).addClass("btn-success"),e.addClass("equipped"),$(this).text("Equipped")):($(this).removeClass("btn-success"),$(this).addClass("btn-primary"),e.removeClass("equipped"),$(this).text("Equip")),d()})))).append($("<div/>",{class:"col-xs-9"}).append($("<div/>",{class:"row"}).append($("<div/>",{class:"col-xs-12"}).append($("<p/>").append($("<strong/>",{text:e.name})))).append($("<div/>",{class:"col-xs-12"}).append($("<p/>",{html:e.levels[a-1].html,class:"ability-text"}))).append($("<div/>",{class:"col-xs-11"}).append($("<div/>",{class:"level-selector"}).append($("<p/>").append($("<span/>",{text:a,class:"abilitySelectedLevel"})).append("/").append($("<span/>",{text:e.levelCap,class:"abilityMaxLevel"}))).append($("<input/>",{type:"range",name:"ability-level",min:1,max:e.levelCap,value:a}).on("input",function(){var e=$(this).val(),a=$(this).parent().find(".abilitySelectedLevel").first(),t=$($(this).closest(".ability").first()),r=t.find(".ability-text").first(),i=t.find('input[name="talent-score"]').first(),n=$(this).next().val(),s=b(n,e);a.text(e),r.html(s.html),i.val(s.talentScore),t.find(".ability-mp").first().text(0),f(),g(t)})).append($("<input/>",{class:"ability-id",name:"ability-id",type:"hidden",value:e.ID}))))))}function p(a,t){var r=[],i=[0,1,2];t&&(i=[],$('input[name="ability-level"]').each(function(){r.push(parseInt($(this).val()))}),$(".row.ability").each(function(e){$(this).hasClass("equipped")&&i.push(e)})),$("#abilities").empty(),a.forEach(function(e,a,i){if(t&&r&&r.length>0){var n=r[a];$("#abilities").append(c(e,n))}else $("#abilities").append(c(e))}),e(i)}function u(e){for(var a in C.Stats){var t=C.Stats[a];if(t.level==e)return t.stats}}function m(e){var a=C.Abilities;for(var t in a)if(a[t].ID==e)return a[t];return!1}function b(e,a){var t=m(e),r=t.levels;for(var i in r)if(r[i].level==a)return r[i];return!1}function x(e,a,t,r,i,n,s){if("Move_StartCharge_Abs"==s){if("Rainbow"==i||i==n)return!0}else if(-1!==$.inArray(e,a)){if("Generate"==e||"GemDestroy"==e){var l=t.find("span[data-variable-name='"+r+"']");if(l&&l.length){var f=l.first().attr("data-variable-value");if(i==f)return!0}else if(i==n)return!0}else if("MoveEffectImprove"==e){if("Rainbow"==i||i==n)return!0}else if("MoveStealGemImprove"==e){var l=t.find("span[data-variable-name='"+r+"']");if(l&&l.length){var f=l.first().attr("data-variable-value");if(i==f)return!0}}else if("GemEffectImprove"==e){var l=t.find("span[data-variable-name='"+r+"']");if(l&&l.length){var f=l.first().attr("data-variable-value");if("ModGem_Effect_Strike_Perc"==s&&"Strike"==f)return!0;if("ModGem_Effect_Heal_Perc"==s&&"Heal"==f)return!0;if("ModGem_Effect_Block_Perc"==s&&"Block"==f)return!0}}else if("MoveSubmissionDamage"==e){if("Rainbow"==i||i==n)return!0}else if("GemDamage"==e){var l=t.find('span[data-variable-name="min2"]');if(l&&l.length){var f=l.first().attr("data-variable-value");if("Rainbow"==i||f==i)return!0}}else if("MoveSubmissionTurn"==e){if("Rainbow"==i||i==n)return!0}else if("MoveStealImprove"==e||"MoveBleedImprove"==e)return!0;return!1}return!1}function h(e,a,t,r){if("Move_Bleed_Perc"==r){var i=e.find("span[data-variable-name='val2']").first();i.addClass("trainer-buff-modification");var n=i.attr("data-variable-value"),s=i.text(),l=parseInt(n)*a,f=parseInt(s)+l;i.text(f)}if("Move_Destroy_Abs"==r){var d=e.find("span[data-variable-name='val1']").first();d.addClass("trainer-buff-modification");var f=parseInt(d.text())+a;d.text(f)}if("Move_Submission_Turn_Abs"==r){var d=e.find("span[data-variable-name='val5']").first();d.addClass("trainer-buff-modification");var f=parseInt(d.text())+a;d.text(f)}if("Move_Steal_Gem_Abs"==r){var d=e.find("span[data-variable-name='val1']").first();d.addClass("trainer-buff-modification");var f=parseInt(d.text())+a;d.text(f)}if("Move_Destroy_Rnd_Abs"==r){var d=e.find("span[data-variable-name='val1']").first();d.addClass("trainer-buff-modification");var f=parseInt(d.text())+a;d.text(f)}if("Move_Generate_Abs"==r){var d=e.find("span[data-variable-name='val1']").first();d.addClass("trainer-buff-modification");var f=parseInt(d.text())+a;d.text(f)}if("Gem_Dmg_Abs"==r){var d=e.find("span[data-variable-name='val1']").first();d.addClass("trainer-buff-modification");var f=parseInt(d.text())+a;d.text(f)}if("Move_Dmg_Perc"==r){var i=e.find("span[data-variable-name='damage']").first();i.addClass("trainer-buff-modification");var n=i.attr("data-variable-value"),s=i.text(),l=parseInt(n)*a,f=parseInt(s)+l;i.text(f)}if("Gem_Dmg_Perc"==r){var i=e.find("span[data-variable-name='val1']").first();i.addClass("trainer-buff-modification");var n=i.attr("data-variable-value"),s=i.text(),l=parseInt(n)*a,f=parseInt(s)+l;i.text(f)}if("Move_StartCharge_Abs"==r){var d=e.closest(".ability").first().find(".ability-mp").first();d.addClass("trainer-buff-modification");var f=parseInt(d.text())+a;d.text(f)}if("ModGem_Effect_Heal_Perc"==r){var i=e.find("span[data-variable-name='val3']").first();i.addClass("trainer-buff-modification");var n=i.attr("data-variable-value"),s=i.text(),l=parseInt(n)*a,f=parseInt(s)+l;i.text(f)}if("ModGem_Effect_Strike_Perc"==r){var i=e.find("span[data-variable-name='val3']").first();i.addClass("trainer-buff-modification");var n=i.attr("data-variable-value"),s=i.text(),l=parseInt(n)*a,f=parseInt(s)+l;i.text(f)}if("ModGem_Effect_Block_Perc"==r){var i=e.find("span[data-variable-name='val3']").first();i.addClass("trainer-buff-modification");var n=i.attr("data-variable-value"),s=i.text(),l=parseInt(n)*a,f=parseInt(s)+l;i.text(f)}if("Move_Submission_Dmg_Perc"==r||"Move_Steal_Perc"==r){var i=e.find("span[data-variable-name='val1']").first();i.addClass("trainer-buff-modification");var n=i.attr("data-variable-value"),s=i.text(),l=parseInt(n)*a,f=parseInt(s)+l;i.text(f)}}function _(e,a,t){if("Gem_Dmg_Perc"==t){var r=$($(".gem-stats").first().find('[data-gem-type="'+e+'"]').first());r.addClass("trainer-buff-modification");var i=r.attr("data-variable-value"),n=r.text(),s=parseInt(i)*a,l=parseInt(n)+s;r.text(l)}if("Gem_Dmg_Abs"==t){var r=$($(".gem-stats").first().find('[data-gem-type="'+e+'"]').first());r.addClass("trainer-buff-modification");var i=r.attr("data-variable-value"),n=r.text(),l=parseInt(n)+a;r.text(l)}$(".gem-stat").each(function(e,a){var t=$(this).text();t=Math.round(t),$(this).text(t)})}function y(e,a,t,r,i){if(i){var n=i.data("effects"),s=i.data("buffed-id"),l=i.data("gem-type"),f=i.find(".ability-text").first();x(a,n,f,s,e,l,r)&&h(f,t,a,r)}else $(".ability").each(function(i,n){var s=$(this).data("effects"),l=$(this).data("buffed-id"),f=$(this).data("gem-type"),d=$(this).find(".ability-text").first();x(a,s,d,l,e,f,r)&&h(d,t,a,r)});$('span[data-variable-name="damage"], span[data-variable-name="val1"], span[data-variable-name="val2"], span[data-variable-name="val3"]').each(function(e,a){var t=$(this).text();t=Math.round(t),$(this).text(t)})}function g(e){$(".added-trainers").find('.trainer[data-activated="true"]').each(function(a,r){var i=$(r),n=1*i.attr("data-buff-value"),s=i.data("buff-gem-type"),l=i.data("buff-move-type");y(s,t(l),n,l,e),_(s,n,l)})}var I={},M={},C={},S=$("#wrestlerSlug").val();if(S){var w="3_3",G="Gold";$.getJSON("/db/wrestler/"+S+".json?v=0.1.1.0",function(e){I=e,s(),l(C.LevelCap)}),$.getJSON("/db/misc/trainers.json",function(e){M=e,i()}),$("#search").on("keyup keypress",function(e){if(13===(e.keyCode||e.which))return e.preventDefault(),!1;var a=$(this).val().toUpperCase();$(".add-trainer").each(function(){$(this).find(".wrestler-name").first().text().toUpperCase().indexOf(a)>-1?$(this).removeClass("hidden"):$(this).addClass("hidden")})}),$("#wrestlerLevelInput").on("input",function(){var e=$(this).val(),a=$("#wrestlerMaxLevel").val();$("#wrestlerLevelUI").text(e+"/"+a),p(C.Abilities,!0),f(e),g()}),$('input[name="stars"]').on("change",function(){w=$(this).val(),s(),l(),g()}),$('input[name="tier"]').on("change",function(){G=$(this).val(),s(),l(),g()}),$("input.trainer-level").on("input",function(){var e=parseInt($(this).val()),a=($(this).attr("max"),$($(this).closest(".trainer").first())),t=a.attr("data-activated"),i=a.find(".trainer-buff-text").first(),n=a.find(".trainer-talent-score").first(),s=a.attr("data-trainer-id"),l=r(s,e);parseInt(a.attr("data-buff-value")),l.buffValue;a.attr("data-buff-value",l.buffValue),n.empty(),n.text(l.talentScore+"/"+l.maxTalentScore),i.empty(),i.text(l.text),"true"===t&&(p(C.Abilities,!0),f(),g())})}})},3239:function(e,a,t){e.exports=t(13)}});