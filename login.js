
//
$('.loginWins').on('click','.placeHold,input[name=account]',function () {

    $('.placeHold p').css({
        'position':'absolute',
        'bottom':'-12px',
        'transition': 'all 0.5s',
        'font-size':'10px',
        'color':'#F5A066'
    });
    $('.line').css({
        'width':'290px'
    })
});
$('.loginWins').on('click','.placeHold2,input[name=password]',function () {
    $('.placeHold2 p').css({
        'position':'absolute',
        'bottom':'-12px',
        'transition': 'all 0.5s',
        'font-size':'10px',
        'color':'#F5A066'
    })
    ; $('.line2').css({
        'width':'290px'
    })
});
//忘记密码
$('.loginWins').on('click','.forgetPSWSpan',function () {
    let str='';
    str+=' <div class="login-top">\n' +
        '            <a class="fa fa-close fa-2x returnLogin"></a>\n' +
        '        </div>\n' +
        '        <div class="chooseLogin">\n' +
        '            <div style="text-align: left">\n' +
        '                <span class="" >修改密码</span>\n' +
        '            </div>\n' +
        '            <div>\n' +
        '                <span class="phoneLoad" style="border-bottom: 3px solid black"></span>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '\n' +
        '        <div class="placeHold">\n' +
        '            <p> 请输入手机或邮箱</p>\n' +
        '        </div>\n' +
        '        <div class="accountInputRoom">\n' +
        '            <form action="" name="account">\n' +
        '                <input id="CodeLoginInput" type="text" name="account">\n' +
        '            </form>\n' +
        '            <div class="line"></div>\n' +
        '        </div>\n' +

        '        <div class="placeHold2">\n' +
        '            <p>请输入修改的密码</p>\n' +
        '        </div>\n' +
        '        <div class="accountInputRoom">\n' +
        '            <form action="">\n' +
        '                <input id="resetPSW" type="password" name="password">\n' +
        '            </form>\n' +
        '            <div class="line2"></div>\n' +
        '        </div>\n' +
        '        <div class="row" style="margin-top: 20px">\n' +
        '            <div class="col-lg-6 col-sm-6">\n' +
        '                <input type="text" class="input-lg btn-block loginCodeInput resetCodeInput" placeholder="请输入验证码" style="border:0;outline: none;font-size: 16px">\n' +
        '            </div>\n' +
        '            <div class="col-lg-6 col-sm-6">\n' +
        '                <button  id="resetCode" type="button" class="btn btn-block btn-md btn-danger " style="font-size: 16px">获得验证码</button>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '\n' +
        '        <div class="row" style="padding: 15px">\n' +
        '            <button id="sureResetPsw" type="button" class="btn btn-block btn-md btn-danger" style="margin-top: 20px;font-size: 16px">确认修改</button>\n' +
        '        </div>';

    $('.loginWins').html(str);
});
//手机号登录
$('.loginWins  ').on('click','.phoneLoad',function () {
    let str='';
    str+=' <div class="login-top">\n' +
        '            <a class="fa fa-close fa-2x" href="/"></a>\n' +
        '        </div>\n' +
        '        <div class=" chooseLogin">\n' +
        '            <div>\n' +
        '                <span class="accountLoad" >账号登录</span>\n' +
        '            </div>\n' +
        '            <div>\n' +
        '                <span class="phoneLoad" style="border-bottom: 3px solid black">手机号登录</span>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '\n' +
        '        <div class="placeHold">\n' +
        '            <p> 请输入手机或邮箱</p>\n' +
        '        </div>\n' +
        '        <div class="accountInputRoom">\n' +
        '            <form action="" name="account">\n' +
        '                <input id="CodeLoginInput" type="text" name="account">\n' +
        '            </form>\n' +
        '            <div class="line"></div>\n' +
        '        </div>\n' +

        // ' <div class="row slideTestRow" >' +
        // '<div class="slideTestRoom" >' +
        // '<div class="slideLeftWidth" >' +
        // '</div>' +
        // '<div class="slideTest" >' +
        // '  >> ' +
        // '</div>' +
        // '<span class="slideSpan" > <span></span> 按住滑块,拖到缺少图形的部分</span>' +
        // '' +
        // ' </div>'+
        // '</div>\n'+

        '        <div class="row" style="margin-top: 60px">\n' +
        '            <div class="col-lg-6 col-sm-6">\n' +
        '                <input type="text" class="input-lg btn-block loginCodeInput" placeholder="请输入验证码" style="border:0;outline: none;font-size: 16px">\n' +
        '            </div>\n' +
        '            <div class="col-lg-6 col-sm-6">\n' +
        '                <button  id="verify" type="button" class="btn btn-block btn-md btn-danger phoneLoginCode" style="font-size: 16px">获得验证码</button>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '\n' +
        '        <div class="row" style="padding: 15px">\n' +
        '            <button id="CodeLoginBtn" type="button" class="btn btn-block btn-md btn-danger" style="margin-top: 20px;font-size: 16px">一键登录</button>\n' +
        '        </div>';

    $('.loginWins').html(str);
});
//账号密码登陆
$('.loginWins ').on('click',' .accountLoad',function () {
    let str='';
    str+='   <div class="login-top">\n' +
        '            <a class="fa fa-close fa-2x returnIndex" href="/"></a>\n' +
        '        </div>\n' +
        '        <div class=" chooseLogin">\n' +
        '            <div>\n' +
        '                <span class="accountLoad" style="border-bottom: 3px solid black">账号登录</span>\n' +
        '            </div>\n' +
        '            <div>\n' +
        '                <span class="phoneLoad">手机号登录</span>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '        <div class="placeHold">\n' +
        '            <p> 请输入手机或邮箱</p>\n' +
        '        </div>\n' +
        '        <div class="accountInputRoom">\n' +
        '            <form action="" name="account">\n' +
        '                <input type="text" name="account">\n' +
        '            </form>\n' +
        '            <div class="line"></div>\n' +
        '        </div>\n' +
        '        <div class="placeHold2">\n' +
        '            <p> 请输入密码</p>\n' +
        '        </div>\n' +
        '        <div class="pswInputRoom">\n' +
        '            <form action="" name="password" >\n' +
        '                <input type="password" name="password" style="background-color:rgba(255,255,255,0);">\n' +
        '            </form>\n' +
        '            <div class="line2"></div>\n' +
        '        </div>\n' +
        '        <!---->\n' +
        '        <div class="forgetPSW">\n' +
        '            <span class="forgetPSWSpan"><a href="#">忘记密码</a></span>\n' +
        '        </div>\n' +
        '        <!---->\n' +
        '        <div>\n' +
        '            <button class="btn btn-block btn-success sureLoginBtn btn-md" type="button" style="background-color:#f5a066;border: 0">\n' +
        '                登录\n' +
        '            </button>\n' +
        '        </div>\n' +
        '        <!---->\n' +
        '        <div class="remindSet">\n' +
        '            <span>还没有账号？</span><a href="#" class="gotoSet" style="color: #f5a643">请注册</a>\n' +
        '        </div>\n' +
        '        <!---->\n' +
        '        <div class="otherChoose">\n' +
        '            <span></span>\n' +
        '            <span>或</span>\n' +
        '            <span></span>\n' +
        '        </div>\n' +
        '        <!---->\n' +
        '        <div class="loginIcon row">\n' +
        '            <div class="col-lg-6 col-sm-6 text-right">\n' +
        '                     <div > <i class="fa fa-qq"></i></div>\n' +
        '            </div>\n' +
        '\n' +
        '            <div class="col-lg-6 col-sm-6">\n' +
        '                <div > <i class="fa fa-wechat"></i></div>\n' +
        '            </div>\n' +
        '        </div>\n';
    $('.loginWins').html(str)
});


//-------------------------------------正则验证
//登录正则
var accountTest =0;
var pswTest =0;
var accountRight='';
var pswRight='';
$('.loginWins').on('focus','input[name=account]',function () {
    $('.placeHold>p').text('请输入手机或邮箱').css({'color':'#D97946'})
});
$('.loginWins').on('focus','input[name=setAccount]',function () {
    $('.setAccount>p').text('请输入手机或邮箱').css({'color':'#D97946'})
});

$('.loginWins').on('blur','input[name=account]',function () {   //登录账号
    let testPhone=/^[0-9-()（）]{11}$/;
    let testEmail=/^\w+((-w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    if (testPhone.test(this.value) ||  testEmail.test(this.value)) {
        $('.placeHold>p').text('✔right').css({'color':'#00cc99'});
        accountTest =1;
        accountRight='';
        accountRight=this.value;
    }else {
        $('.placeHold>p').text('请输入正确的手机或者邮箱').css({'color':'red'});
        accountTest =0;
    }
});
$('.loginWins').on('blur','input[name=password]',function () {  //登录密码正则验证
    let testPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/;
    if (testPassword.test(this.value) ) {
        $('.placeHold2>p').text('✔right').css({'color':'#00cc99'});
        pswTest =1;
        pswRight='';
        pswRight=this.value;
    }else {
        $('.placeHold2>p').text('密码8-16位，至少包含一个大写一个小写字母!').css({'color':'red'});
        pswTest =0;

    }
});
$('.loginWins').on('blur','input[name=setAccount]',function () {  //创建账号
    let testPhone=/^[0-9-()（）]{11}$/;
    let testEmail=/^\w+((-w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    let tel=this.value;
    if (testPhone.test(this.value) ||  testEmail.test(this.value)) {
        $.ajax({
           type:'post',
            data:{tel:tel},
           url:'/login/testAccountExsist',
            success:function (data) {
                console.log(data.result);
                if (data.result==="Exsist"){
                    $('.setAccount>p').text('账号已存在!').css({'color':'#ff567f'});
                    $('.sureSetAccount').attr("disabled","disabled");
                    $('.creatAccountCode').attr("disabled","disabled")
                }
                else {
                    $('.setAccount>p').text('✔right').css({'color':'#00cc99'});
                    $('.sureSetAccount').removeAttr("disabled");
                    $('.creatAccountCode').removeAttr("disabled")
                }
            }
        });
    }else {
        $('.setAccount>p').text('请输入正确的手机或者邮箱').css({'color':'red'});
    }
});
//登录得AJAX请求
$('.loginWins').on('click','.sureLoginBtn',function () {
    if (accountTest && pswTest) {
        $.ajax({

            url:'/login/surelogin',
            type:'post',
            dataType:'json',
            data:{params:[accountRight,accountRight,pswRight]},
            success:function (data) {
                if (data.length>0){
                    window.location.href='/ '
                }else {
                    alert('账号或者密码不正确！');
                    // $('input[name=account]').val('');
                    $('input[name=password]').val('');
                }
            }
        })
    }else {
        alert('请验证您的账号密码格式!');
    }
});
//短信验证一键登录
var countdown=60;
$('.loginWins').on('click','.phoneLoginCode',function () {
    let telNumber=$('#CodeLoginInput').val();
    let testPhone=/^[0-9-()（）]{11}$/;
    let testEmail=/^\w+((-w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    if (testPhone.test(telNumber) ||  testEmail.test(telNumber)) {
        $('.setAccount>p').text('✔right').css({'color':'#00cc99'});
        let storage=this;
        $.ajax({
            type:'post',
            url:'/login/smsLogin',
            data:{
                'telNumber':telNumber
            },
            success:function (data) {
                if (data.status==0){
                    alert('发送失败!'+data.err)
                } else {
                    setTimer(storage);
                    alert('验证码已发送到您的手机!')
                }
            }

        })
    }else {
        // $('.setAccount>p').text('请输入正确的手机或者邮箱').css({'color':'red'});
        alert('请核对您的账号格式！')
    }

});
//提示框倒计时以及格式校验
function setTimer(obj) {
    if (countdown == 0) {
        obj.removeAttribute("disabled");
        obj.innerHTML = "获得验证码";
        countdown = 60;
        return;
    } else {
        obj.setAttribute("disabled", true);
        obj.innerHTML = "重新发送(" + countdown + ")";
        countdown--;
    }
    setTimeout(function () {
        setTimer(obj)
    }, 1000);
};


//登录验证
$('.loginWins').on('click','#CodeLoginBtn',function () {
    let telNumber=$('#CodeLoginInput').val();
    let code=$('.loginCodeInput').val();
    $.ajax({
        type:'post',
        url: '/login/verifySmsCode',
        data:{
            'telNumber':telNumber,
            'smsCode':code
        },
        success:function (data) {
            console.log(data);
            if (data.status==200){
                alert('登录成功')
            } else {
                alert('验证码不正确!')
            }
        }
    })
});
//
$('.loginWins').on('click', 'input[name=setAccount]', function () {
    $('.setAccount p').css({
        'top': -23 + "px",
        'transition': 'all 0.5s',
        'font-size': '12px',
        'color': '#ff9272'
    });
    $('.setLine').css({
        'width': '100%',
        'transition': 'all 0.5s',
    })

});
$('.loginWins').on('click', 'input[name=setPassword]', function () {
    $('.setPassword p').css({
        'top': -23 + "px",
        'transition': 'all 0.5s',
        'font-size': '12px',
        'color': '#FF9272'
    });
    $('.setLine2').css({
        'width': '100%',
        'transition': 'all 0.5s',
    })
});

//注册账号的短信验证
$('.loginWins').on('click','.creatAccountCode',function () {
   var telNumber =$('input[name=setAccount]').val();
   var pswNumber =$('input[name=setPassword]').val();
    let storage=this;
   $.ajax({
       type:'post',
       url:'/login/setAccount',
       data:{telNumber:telNumber,pswNumber:pswNumber},
       success:function (data) {
           if (data.status==0){
               alert('发送失败!'+'\n'+data.err)
           } else {
               setTimer(storage);
               alert('验证码已发送到您的手机!')
           }
           setTimer(storage);
       }
   });
    console.log(telNumber);

});
//收到验证码后确认建立账户
$('.loginWins').on('click','.sureSetAccount',function () {
    var telNumber =$('input[name=setAccount]').val();
    var pswNumber =$('input[name=setPassword]').val();
    $.ajax({
        type:'post',
        data:{telNumber:telNumber,pswNumber:pswNumber},
        url:'/login/sureCreateActPsw',
        success:function (data) {
            if(data.msg==200){
                alert('注册成功!')
            }else {
                alert('失败')
            }
        }
    })


});

$('.loginWins').on('click', '.returnLogin', function () {
    let str = '';
    str = '    <div class="login-top">\n' +
        '    <a class="fa fa-close fa-2x returnIndex" href="/"></a>\n' +
        '    </div>\n' +
        '    <div class=" chooseLogin">\n' +
        '    <div>\n' +
        '    <span class="accountLoad" style="border-bottom: 3px solid black">账号登录</span>\n' +
        '    </div>\n' +
        '    <div>\n' +
        '    <span class="phoneLoad">手机号登录</span>\n' +
        '    </div>\n' +
        '    </div>\n' +
        '    <div class="placeHold">\n' +
        '    <p> 请输入手机或邮箱</p>\n' +
        '    </div>\n' +
        '    <div class="accountInputRoom">\n' +
        '    <form action="" name="account">\n' +
        '    <input type="text" name="account">\n' +
        '    </form>\n' +
        '    <div class="line"></div>\n' +
        '    </div>\n' +
        '    <div class="placeHold2">\n' +
        '    <p> 请输入密码</p>\n' +
        '    </div>\n' +
        '    <div class="pswInputRoom">\n' +
        '    <form action="" name="password" >\n' +
        '    <input type="password" name="password" style="background-color:rgba(255,255,255,0);">\n' +
        '    </form>\n' +
        '    <div class="line2"></div>\n' +
        '    </div>\n' +
        '    <!---->\n' +
        '    <div class="forgetPSW">\n' +
        '    <span class="forgetPSWSpan"><a href="#" >忘记密码</a></span>\n' +
        '    </div>\n' +
        '    <!---->\n' +
        '    <div>\n' +
        '    <button class="btn btn-block btn-success sureLoginBtn" type="button" style="background-color:#f5a066;border: 0">\n' +
        '    登录\n' +
        '    </button>\n' +
        '    </div>\n' +
        '    <!---->\n' +
        '    <div class="remindSet">\n' +
        '    <span>还没有账号？</span><a class="gotoSet" style="color: #f5a643">请注册</a>\n' +
        '    </div>\n' +
        '    <!---->\n' +
        '    <div class="otherChoose">\n' +
        '    <span></span>\n' +
        '    <span>或</span>\n' +
        '    <span></span>\n' +
        '    </div>\n' +
        '    <!---->\n' +
        '    <div class="loginIcon row">\n' +
        '    <div class="col-lg-6 col-sm-6 text-right">\n' +
        '    <div > <i class="fa fa-qq"></i></div>\n' +
        '    </div>\n' +
        '\n' +
        '    <div class="col-lg-6 col-sm-6">\n' +
        '    <div > <i class="fa fa-wechat"></i></div>\n' +
        '    </div>\n' +
        '    </div>\n';

    $('.loginWins').html(str)
});

$('.loginWins').on('click', '.gotoSet', function () {

    let str = "";
    str += '        <div class="login-top">\n' +
        '            <a class="fa fa-close fa-2x returnLogin"></a>\n' +
        '        </div>\n' +

        '        <div class="setAccount">\n' +
        '            <p>请输入手机号或者邮箱</p>\n' +
        '            <input type="text" name="setAccount" class="btn-block">\n' +
        '            <div class="setLine"></div>\n' +
        '        </div>\n' +
        '\n' +
        '        <div class="setPassword" style="margin-top: -15px">\n' +
        '            <p>请输入您的密码</p>\n' +
        '            <input type="password" name="setPassword" class="btn-block">\n' +
        '            <div class="setLine2"></div>\n' +
        '        </div>\n' +
        '            <div class="col-lg-6 col-sm-6 setAccountInput" style="margin: -20px 0 20px 0">\n' +
        '                <input type="text" class="input-lg" placeholder="请输入验证码" style="border:0;outline: none;font-size: 16px">\n' +
        '            </div>\n' +
        '            <div class="col-lg-6 col-sm-6" style="margin:-20px 0 20px 0">\n' +
        '                <button type="button" class="btn btn-block btn-md btn-danger creatAccountCode" style="font-size: 16px">获得验证码</button>\n' +
        '            </div>\n' +
        '        <div class="sureSet">\n' +
        '            <button class="btn btn-block btn-warning sureSetAccount btn-md">\n' +
        '                注册\n' +
        '            </button>\n' +
        '        </div>\n' +
        '        <div class="text-center " style="margin-top: 20px">\n' +
        '            <span>已有账号？</span>\n' +
        '            <a class="text-danger returnLogin" style="cursor: pointer;text-decoration: none">请登录</a>\n' +
        '        </div>\n';
    $('.loginWins').html(str);
});

$('.loginWins').on('mousedown','.slideTest',function (e) {
    var positionDiv = $(this).offset();
    var distenceX = e.pageX - positionDiv.left;
    var distenceY = e.pageY - positionDiv.top;


});


$('.loginWins').on('mousedown','.slideTest',function (e) {
     mouseLeftDistance=e.offsetX;
    console.log(mouseLeftDistance);
    e. stopPropagation()
    e. preventDefault()

});
$('.loginWins').on('mousemove','.slideTestRoom',function (m) {   //最外层的框闪烁 ？
    m. stopPropagation()
    m. preventDefault()
    var mouse= m.offsetX;
    console.log(mouse);
    let disTantx=mouse-28;
    $('.slideLeftWidth').css({'width':disTantx});
    // console.log(disTantx)
    $('.slideTest').css({'margin-left':disTantx})
});


$('.loginWins').on('click','#resetCode',function () {
    var telNumber=$('input[name=account]').val();
    $.ajax({
        type:'post',
        url:'/login/resetPSW',
        data:{telNumber},
        success:function (data) {
            if (data.status==200){
                alert('发送成功')
            } else {
                alert('发送失败')
            }
    }
    })
});
$('.loginWins').on('click','#sureResetPsw',function () {
    var telNumber=$('input[name=account]').val();
    var resetPassword=$('input[name=password]').val();
    var smsCode=$('.resetCodeInput').val();
    $.ajax({
        type:'post',
        url:'/login/sureResetPSW',
        data:{smsCode,telNumber,resetPassword},
        success:function (data){
            console.log(data.mas);
            if (data.status==200) {
                alert('修改成功!')
            }else {
                alert('修改失败！请核对你的信息！')
            }
    }
    })

});
