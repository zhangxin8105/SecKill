function login(t,o){$.showLoading(),$.apiPost("proxyLogin",{account:t,password:md5(o)},function(t){$.setToken(t.data),$.alert("注册成功！",function(){location.href="index.html"})})}$(function(){$("#registerButton").on("click",function(){var t=$.trim($("#account").val()),o=$.trim($("#password").val()),n=$.trim($("#repassword").val()),r=$.trim($("#previousProxyAccount").val()),a=$.trim($("#email").val());return t.length<=0?($.alert("账号不能为空。"),!1):o.length<=0?($.alert("密码不能为空。"),!1):n!=o?($.alert("两次密码不一致。"),!1):r.length<=0?($.alert("邀请人账号不能为空。"),!1):a.length<=0?($.alert("邮箱不能为空。"),!1):/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(a)?($.showLoading(),void $.apiPost("registerProxy",{account:t,password:md5(o),previousProxyAccount:r,email:a},function(n){login(t,o)})):($.alert("邮箱格式错误。"),!1)})});