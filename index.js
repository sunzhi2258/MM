$(document).ready(function () {
    // todo 专题栏移动
    var $stage = $('.SPECIALCalSet');
    var num = $('.SPECIALCal').length;
    var AllWidth = 335 * num - 30;
    var width = 335;
    var LeftTarget = 0;

    //悬浮样式
    function SpecialHover() {
        $('.SPECIALCal').off('mouseenter').on('mouseenter', function () {
            $(this).find('.Box').stop().animate({'padding-left': '60px'}, 300);
            $(this).find('img').stop().animate({'left': '0'}, 300);
            $(this).stop().animate({'width': '440px'}, 300);
            $('.SPECIALCalSet').stop().animate({'margin-left': '-60px', 'left': LeftTarget + 'px'}, 300);
        });
        $('.SPECIALCal').off('mouseleave').on('mouseleave', function () {
            $(this).stop().animate({'width': '320px'}, 300);
            $(this).find('.Box').stop().animate({'padding-left': '0'}, 300);
            $(this).find('img').stop().animate({'left': '-60px'}, 300);
            $('.SPECIALCalSet').stop().animate({'margin-left': 0, 'left': LeftTarget + 'px'}, 300);
        });
    }
    // console.log(document.body.clientWidth);
    SpecialHover();
    //加载时给专题卡初始化样式
    $('.SPECIALCalSet')[0].style.left = '0';
    //选项卡右击事件
    $('.next').click(function () {
        var nl = $stage[0].offsetLeft;
        if ((2 * document.body.clientWidth - nl) > AllWidth) {
            $stage.stop().animate({'left': (document.body.clientWidth - AllWidth) + 'px'}, 300);
            LeftTarget = document.body.clientWidth - AllWidth;
        } else {
            var n = Math.ceil((nl - document.body.clientWidth) / width);
            $stage.stop().animate({'left': n * width + 'px'}, 300);
            LeftTarget = n * width;
        }
    });
    //选项卡左击事件
    $('.prev').click(function () {
        var nl = $stage[0].offsetLeft;
        if ((document.body.clientWidth + nl) > 0) {
            $stage.stop().animate({'left': 0}, 600);
            LeftTarget = 0;
        } else {
            var n = Math.floor((nl + document.body.clientWidth) / width);
            $stage.stop().animate({'left': (n * width) + 'px'}, 300);
            LeftTarget = n * width;
        }
    });
    // todo 选项卡事件
    // 选项卡集合
    var TagCardBoxArr = document.getElementsByClassName('TagCardBox');
    // 按钮集合
    var TabsArr = document.getElementsByClassName('Tabs');
    // 循环添加事件
    for (let k = 0; k < TabsArr.length; k++) {
        TabsArr[k].onclick = function () {
            //class样式改变
            for (let i = 0; i < TabsArr.length; i++) {
                TabsArr[i].classList.remove("active");
            }
            TabsArr[k].classList.add('active');
            //选项卡循环隐藏
            for (let j = 0; j < TagCardBoxArr.length; j++) {
                TagCardBoxArr[j].style.display = 'none';
            }
            TagCardBoxArr[k].style.display = 'block';
        };
    }
    ;
    // todo 作家查看(ajax需求数据已写好,等待后台功能完善)
    // $('.Artist').on('click',function () {
    //     console.log($(this).children().get(0).children[0].children[0].innerText)
    // })
    //
    $('.Artist').on('click', function () {
        var flag = $(this).children().get(0).children[0].children[0].getAttribute("data-id");
        location.href = '/html/AuthorInformation.html?'+flag;
        // console.log(flag)
    })
    // $('.Go').click(function () {
    //     window.location.href = '/originalArt/default'
    // })
});


