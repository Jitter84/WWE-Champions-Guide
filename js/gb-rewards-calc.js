!function(t){function n(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var e={};n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:a})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=1410)}({1410:function(t,n,e){t.exports=e(4)},4:function(t,n){$(document).ready(function(){function t(t){if(!o||o.length<=0)return"Error!";t=t.toLowerCase();for(var n in o){var e=o[n];if(e.Difficulty.toLowerCase()==t)return e.Quests}}function n(t){if(!o||o.length<=0)return"Error!";t=t.toLowerCase();for(var n in o){var e=o[n];if(e.Difficulty.toLowerCase()==t)return e.TicketCost}}function e(t,n){for(var e in t){if(t[e].ID==n)return!0}return!1}function a(t,n){var a=[];for(var r in t){if(r==n)break;var o=t[r],i=jQuery.extend({},o.Reward);if(e(a,i.ID))for(var u in a)a.hasOwnProperty(u)&&a[u].ID==i.ID&&(a[u].Amount=parseInt(a[u].Amount)+parseInt(i.Amount));else a.push(i)}return a}function r(t,n,e,r){var o=a(t,e);$("#ticketCost").empty(),$("#rewardsTable tbody").empty(),$("#opponentsReferenceTable tbody").empty(),$("#ticketCost").text(parseInt(r)*n),o.forEach(function(t){$("#rewardsTable tbody").append("<tr><td>"+t.Reward+"</td><td>"+parseInt(t.Amount)*n+"</td></tr>")}),t.forEach(function(t){$("#opponentsReferenceTable tbody").append("<tr><td>"+t.QuestID+"</td><td>"+t.Name+"</td><td>"+t.Reward.Reward+" x "+t.Reward.Amount+"</td></tr>")})}var o=[];$.getJSON("/db/misc/gb-info.json",function(e){o=e;var a=t("normal"),i=n("normal");r(a,1,a.length,i)}).fail(function(){alert("error")}),$(".difficulty input[type=radio]").on("change",function(){var e=$('input[name="totalRuns"]').val(),a=t(this.value),o=n(this.value);$('input[name="lastOpponent"]').val(a.length),r(a,e,a.length,o)}),$("#decreaseTotalRuns").on("click",function(){var e=$(".difficulty input[type=radio]:checked").val(),a=$('input[name="lastOpponent"]').val(),o=$('input[name="totalRuns"]').val();if(!(isNaN(o)||o<=1)){var i=parseInt(o)-1;$('input[name="totalRuns"]').val(i);r(t(e),i,a,n(e))}}),$("#increaseTotalRuns").on("click",function(){var e=$(".difficulty input[type=radio]:checked").val(),a=$('input[name="lastOpponent"]').val(),o=$('input[name="totalRuns"]').val();if(!isNaN(o)){var i=parseInt(o)+1;$('input[name="totalRuns"]').val(i);r(t(e),i,a,n(e))}}),$("#decreaseLastOpponent").on("click",function(){var e=$('input[name="lastOpponent"]').val(),a=$(".difficulty input[type=radio]:checked").val(),o=$('input[name="totalRuns"]').val();if(!(isNaN(e)||e<=1)){var i=parseInt(e)-1;$('input[name="lastOpponent"]').val(i);r(t(a),o,i,n(a))}}),$("#increaseLastOpponent").on("click",function(){var e=$('input[name="lastOpponent"]').val(),a=$(".difficulty input[type=radio]:checked").val(),o=$('input[name="totalRuns"]').val(),i=t(a),u=n(a);if(!(isNaN(e)||e>=i.length)){var p=parseInt(e)+1;$('input[name="lastOpponent"]').val(p),r(i,o,p,u)}})})}});