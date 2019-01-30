// $( //加载时load首页
//     $('#myLoad').load('../html/index.html')
// );
var appleNum = 1;
var androidNum = 1;
$.ajax({
    type:'post',
   url:'/login/checkLogin',
   success:function (data) {
       if (data.status==200){
           $('#getUserId').html(data.userId)
       }
   }
});
$.ajax({   //检查session
    type:'post',
    url:'/login/getTopCarNum',
    success:function (data) {
        console.log(data);
        if (data.status==200){  //如果检测到session存在，改变页头，并拿到购物车数量
            $('.myPersonal').html('个人中心');
            let userId=$('#getUserId').text();

            $('.myPersonal').attr("href","/myCenter/default/"+userId);
            if (data.buyCarNum){
                $('.topCarNum').css({'display':'inline-block'}).text(data.buyCarNum);

            } else {
                $('.topCarNum').css({'display':'none'}).text(data.buyCarNum)
            }
        }else {
            $('.myPersonal').html('登陆/注册');
            $('.myPersonal').attr("href","/login/default");
        }
        console.log(data.state)  //data .state  使用sesstion 拿到的用户ID
    }
}) ;
$('.topCar').on('click',function () {
    let userId=$('#getUserId').text();
    console.log(userId);
    if (userId) {
        location.href="/shopping/default/"+userId
    }else {
        location.href="/login/default";
    }
});

$('#nav-ul li').on('mouseover', function () {
    switch (this.innerText) {
        case '首页':$('.floatDiv >div>div').css({'margin-left':'-2%','transition':'all 0.3s'})
                      ;$('.nav-ul>li:first-child').css({'background-color':'white','color':'black'});break;
        case '原创艺术':$('.floatDiv >div>div').css({'margin-left':'18%','transition':'all 0.3s'}) ;break;
        case '造艺':$('.floatDiv >div>div').css({'margin-left':'38.5%','transition':'all 0.3s'});break;
        case '藏艺术':$('.floatDiv >div>div').css({'margin-left':'56%','transition':'all 0.3s'});break;
        case '艺居生活':$('.floatDiv >div>div').css({'margin-left':'78%','transition':'all 0.3s'}) ;break;
    }

});

//滚动特效
$(document).scroll(function () {
    var w = $(document).scrollTop();
    if (w > 0) {
        $('.mylogoTrans small').css({'opacity':'0','transition':'opacity 0.5s'});
        $('.header').css({
            // 'margin-top': '-100px',
            'transition': 'all 0.5s',
            'height':'0'
        });
        $('.middle-row').css({
            'margin-top': '-50px',
            'transition': 'all 0.5s'
        });
        $('.nav-load').css({
            'width': '0',
            'transition': 'all 0.5s'
        });
        $('#nav-ul').css({
            'margin-top':'-50px',
            'transition': 'all 0.5s',
            ' background-color':'white'
        });
        $('#nav-ul a').css({
            'transition': 'all 0.5s',
            'color':'black!important'
        });
        $('#loadHeader').css({
            'height':'50px',
            'transition': 'all 0.5s',
        })
    }
    if (w == 0) {
        $('.mylogoTrans small').css({'opacity':'1','transition':'opacity 0.5s'});
        // $('.NAV').css({
        //     'height':'auto',
        //     'transition':'all 0.5s',
        //     'position':'relative',
        // });
        $('.header').css({
            'transition': 'all 0.5s',
            'top':'50px',
            'height':'45px',
            'position':'fixed'
        });
        $('.middle-row').css({
            'margin-top': '0',
        });
        $('#nav-ul').css({
            'margin-top':'0',
            'transition': 'all 0.5s',
        });
        $('#nav-ul a').css({
            'transition': 'all 0.5s',
            'color':'white'
        });
        $('#loadHeader').css({
            'height':'95px',
            'transition': 'all 0.5s',
        })
    }
});

// $('.nav-search').on('click','.navSearchInput',function () {
//
// });
