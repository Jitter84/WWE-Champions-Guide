!function(t){function n(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var e={};n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:a})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=3287)}({3287:function(t,n,e){t.exports=e(5)},5:function(t,n){$(document).ready(function(){function t(t){if(!i||i.length<=0)return"Error!";t=t.toLowerCase();for(var n in i){var e=i[n];if(e.Difficulty.toLowerCase()==t)return e.Quests}}function n(t){if(!i||i.length<=0)return"Error!";t=t.toLowerCase();for(var n in i){var e=i[n];if(e.Difficulty.toLowerCase()==t)return e.TicketCost}}function e(t,n){for(var e in t){if(t[e].ID==n)return!0}return!1}function a(t,n){var a=[];for(var r in t){if(r==n)break;var i=t[r],o=jQuery.extend({},i.Reward);if(e(a,o.ID))for(var u in a)a.hasOwnProperty(u)&&a[u].ID==o.ID&&(a[u].Amount=parseInt(a[u].Amount)+parseInt(o.Amount));else a.push(o)}return a}function r(t,n,e,r){var i=a(t,e);$("#ticketCost").empty(),$("#rewardsTable tbody").empty(),$("#opponentsReferenceTable tbody").empty(),$("#ticketCost").text(parseInt(r)*n),$('input[name="lastOpponent"]').val(e),i.forEach(function(t){$("#rewardsTable tbody").append("<tr><td>"+t.Reward+"</td><td>"+parseInt(t.Amount)*n+"</td></tr>")}),t.forEach(function(t){$("#opponentsReferenceTable tbody").append("<tr><td>"+t.QuestID+"</td><td>"+t.Name+"</td><td>"+t.Reward.Reward+" x "+t.Reward.Amount+"</td></tr>")})}var i=[];!function(){$(".difficulty input[type=radio]").first().attr("checked","checked"),$.getJSON("/db/misc/gb-info.json",function(e){i=e;var a=t(i[0].Difficulty),o=n(i[0].Difficulty);r(a,1,a.length,o)}).fail(function(){alert("error")})}(),$(".difficulty input[type=radio]").on("change",function(){var e=$('input[name="totalRuns"]').val(),a=t(this.value),i=n(this.value);r(a,e,a.length,i)}),$("#decreaseTotalRuns").on("click",function(){var e=$(".difficulty input[type=radio]:checked").val(),a=$('input[name="lastOpponent"]').val(),i=$('input[name="totalRuns"]').val();if(!(isNaN(i)||i<=1)){var o=parseInt(i)-1;$('input[name="totalRuns"]').val(o);r(t(e),o,a,n(e))}}),$("#increaseTotalRuns").on("click",function(){var e=$(".difficulty input[type=radio]:checked").val(),a=$('input[name="lastOpponent"]').val(),i=$('input[name="totalRuns"]').val();if(!isNaN(i)){var o=parseInt(i)+1;$('input[name="totalRuns"]').val(o);r(t(e),o,a,n(e))}}),$("#decreaseLastOpponent").on("click",function(){var e=$('input[name="lastOpponent"]').val(),a=$(".difficulty input[type=radio]:checked").val(),i=$('input[name="totalRuns"]').val();if(!(isNaN(e)||e<=1)){var o=parseInt(e)-1;r(t(a),i,o,n(a))}}),$("#increaseLastOpponent").on("click",function(){var e=$('input[name="lastOpponent"]').val(),a=$(".difficulty input[type=radio]:checked").val(),i=$('input[name="totalRuns"]').val(),o=t(a),u=n(a);if(!(isNaN(e)||e>=o.length)){r(o,i,parseInt(e)+1,u)}})})}});