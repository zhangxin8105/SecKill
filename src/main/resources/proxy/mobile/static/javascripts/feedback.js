$(function(){$("#content").on("input",function(){var t=$(this).val().length;t<=200?$(".count-words").removeClass("sui-orange").text(t+" / 200"):$(".count-words").addClass("sui-orange").text("字数过多。")}),$("#submitButton").on("click",function(){var t=$.trim($("#content").val());return t.length<=0?void $.alert("请输入要反馈的内容。"):t.length>200?void $.alert("字数过多。"):($.showLoading(),void $.apiPost("addFeedback",{token:$.getToken(),content:t},function(t){$.alert("感谢您的宝贵意见。",function(){location.href="index.html"})}))})});