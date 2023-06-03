/*
*
*/

import pps from './ppsQuery.js'



// 检测客户端 背景图片设置
{
    const changeBtn = document.querySelectorAll('.back-change-button');
    const body = document.body;
    let pci = Math.floor(Math.random() * 4);
    let mbi = Math.floor(Math.random() * 3) + 1;
    const imgArr = ['url(./img/a.jpg)', 'url(./img/b.jpg)', 'url(./img/c.jpg)', 'url(./img/d.jpg)', 'url(./img/e.jpg)'];

    pps.ppsPortdo({
        pc: function () {
            changeBtn[0].onclick = function changeBack() {
                pci >= 4 ? pci = 0 : pci++;
                body.style.backgroundImage = imgArr[pci];
            }
            body.style.backgroundImage = imgArr[pci];
        },
        pmd: function () {
            changeBtn[1].onclick = function () {
                mbi >= 3 ? mbi = 1 : mbi++;
                body.style.backgroundImage = `url(./img/mobile${mbi}.jpg)`;
            }
            body.style.backgroundImage = `url(./img/mobile${mbi}.jpg)`;
        }
    })
}

// 头部导航栏设置
{
    //导航栏
    const nav = document.querySelector('nav');
    const nav_list = nav.querySelector('.nav-list');
    const menu = nav.querySelector('.menu');
    const mobile_nav = document.querySelector('.mobile-nav');
    const mobile_nav_list = mobile_nav.querySelector('.nav-list');
    const mobile_nav_item = mobile_nav_list.querySelectorAll('.nav-item');

    pps.ppsPortdo({
        pmd: function () {
            nav_list.style.display = 'none';
            menu.style.display = 'flex';
        },
        pc: function () {
            menu.style.display = 'none';
        }
    });

    let menu_flag = false;
    menu.addEventListener('click', () => {
        menu_flag = !menu_flag;
        if (menu_flag) {
            pps.ppsAnimate(mobile_nav, 50, 8);
            mobile_nav.style.display = 'block';
        } else {
            pps.ppsAnimate(mobile_nav, -200, 10);
            // mobile_nav.style.display = 'none';
        }
    });

    for (let i = 0; i < mobile_nav_item.length; i++) {
        mobile_nav_item[i].addEventListener('click', function () {
            for (let i = 0; i < mobile_nav_item.length; i++) {
                mobile_nav_item[i].querySelector('.bottom-item').style.display = 'none';
            }
            this.querySelector('.bottom-item').style.display = 'block';
            console.log(1);
        });
    }

    //调节颜色
    const sider_input = document.querySelector('.ran');
    const color_input = document.querySelector('.color-input');
    sider_input.onchange = function () {
        root.style.setProperty('--num', sider_input.value / 100);
        showPercentage.innerText = `${sider_input.value}%`
    }
    color_input.onchange = function () {
        document.body.style.background = `${color_input.value}`
    }

    //关闭颜色按钮
    const close_color = document.querySelector('.closeColor');
    let isColorClose = false;
    close_color.onclick = () => {
        if (isColorClose) {
            isColorClose = false;
            closeBtn();
        } else {
            isColorClose = true;
            openBtn();
        }
    }

    //滑块部分
    const silder = document.querySelector('.silder');
    const moveBtn = document.querySelector('.moveBtn');
    const showPercentage = document.querySelector('#percentage');
    const root = document.querySelector(':root');
    const changeBtn = document.querySelector('.btn1');
    let moveAlphaNum = 0.3;
    let isMoveDown = false;

    // 滑块透明度部分
    function moveButtonDown(e) {
        isMoveDown = true;
    }
    function moveButtonUp(e) {
        isMoveDown = false;
    }
    function moveButtonMove(e) {
        if (isMoveDown == true) {
            var left = 0;
            if (e.pageX - silder.offsetLeft > silder.clientWidth - moveBtn.clientWidth) {
                left = silder.clientWidth - moveBtn.clientWidth;
            } else if (e.pageX - silder.offsetLeft < 0) {
                left = 0;
            } else {
                left = e.pageX - silder.offsetLeft;
            }
            moveBtn.style.left = left + "px";
            moveAlphaNum = moveBtn.offsetLeft / 180;
            root.style.setProperty('--num', moveAlphaNum);
            showPercentage.innerText = `${Math.floor(moveAlphaNum * 100)}%`;
        }
    }

    function closeBtn() {
        root.style.setProperty('--num', moveAlphaNum = 0);
        moveBtn.style.left = 40 + 'px';
        showPercentage.innerText = '30%';
        close_color.innerText = '关闭颜色';
    }
    function openBtn() {
        root.style.setProperty('--num', moveAlphaNum = 0.3);
        moveBtn.style.left = 0 + 'px';
        showPercentage.innerText = '0%';
        close_color.innerText = '打开颜色';
    }

    function addListener() {
        moveBtn.addEventListener('mousedown', moveButtonDown);
        document.addEventListener('mousemove', moveButtonMove);
        document.addEventListener('mouseup', moveButtonUp)
    }
    function removeListener() {
        moveBtn.removeEventListener('mousedown', moveButtonDown);
        document.removeEventListener('mousemove', moveButtonMove);
        document.removeEventListener('mouseup', moveButtonUp)
    }

    addListener();

    //
}

// B站搜索区域样式

{
    let item_content_sign = document.querySelector('.user-sign .item-content');
    let item_content_hidden = document.querySelector('.item-content-hidden');
    let item_content_close = item_content_hidden.querySelector('strong');
    let item_content_hidden_sign = item_content_hidden.querySelector('span');

    item_content_sign.addEventListener('click', handleHidden);
    item_content_close.addEventListener('click', handleHidden);

    function handleHidden() {
        if (item_content_hidden.style.display == 'none') {
            if (item_content_sign.innerText) {
                item_content_hidden_sign.innerText = item_content_sign.innerText;
                item_content_hidden_sign.style.color = '#2e2e2e'
            } else {
                item_content_hidden_sign.innerText = '无可引用的用户数据！';
                item_content_hidden_sign.style.color = 'red'
            }
            item_content_sign.style.backgroundColor = '#e3e5e7';
            item_content_hidden.style.display = 'block';
            item_content_sign.title = '再次点击关闭';
        } else {
            item_content_sign.title = '点击查看全部';
            item_content_sign.style.backgroundColor = '#fff';
            item_content_hidden.style.display = 'none';
        }
    }
}

//首次进入弹窗
{
    const move_window = document.querySelector('#window-mask .window');
    const move_title = move_window.querySelector('.title');
    const move_content=move_window.querySelector('.content');

    pps.ppsMoveBox({
        moveOptions: move_window,
        moveArea: move_title,
        axis: ''
    });

    pps.ppsPortdo({
        pmd:function(){
            move_window.style.width=`300px`;
            move_window.style.height=`400px`
            move_content.style.width=`300px`;
            move_content.style.left=0;
            move_content.style.margin=`0 10px`;
            move_content.style.fontSize=`16px`
        }
    });
}