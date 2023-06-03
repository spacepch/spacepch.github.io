import pps from './ppsQuery.js'

// 获取QQ账户
{
    const qq = document.querySelector('.qq-part');
    const search_input = qq.querySelector('.headIpt');
    const searchBtn = qq.querySelector('.searchBtn');
    const qq_avatar = qq.querySelector('.avatar-img');
    const qq_link = qq.querySelector('a');
    const qq_name = qq.querySelector('.user-name .item-content');
    const qq_uid = qq.querySelector('.user-uid .item-content')

    searchBtn.onclick = function () {
        pps.ppsAjax({
            url: `https://api.usuuu.com/qq/${search_input.value}`,
            success: function (res) {
                // alert(1)
                qq_uid.innerText = res.data.qq;
                qq_name.innerText = res.data.name;
                qq_avatar.src = res.data.avatar;
                qq_link.href = `https://user.qzone.qq.com/${search_input.value}`;
                // console.log(qq_link);
                qq_link.target = '_blank'
                console.log(res);
            }
        })
    }
}

// 获取B站账户
{
    const bili = document.querySelector('.bili-part');
    const searchBtn = bili.querySelector('.search-bilibili .search-btn');
    const deleteBtn = bili.querySelector('.search-bilibili .pps-button-delete');
    const search_input = bili.querySelector('.headIpt1');
    const bili_avatar = bili.querySelector('.avatar-img');
    const bili_link = bili.querySelector('.user-home');
    const bili_name = bili.querySelector('.user-name .item-content');
    const bili_sex = bili.querySelector('.user-sex .item-content span');
    const bili_fans = bili.querySelector('.user-fans .item-content');
    const bili_level = bili.querySelector('.user-level .item-content');
    const bili_sign = bili.querySelector('.user-sign .item-content');
    const bili_sign_hidden = bili.querySelector('.user-sign .item-content-hidden');
    const bili_isFollow = bili.querySelector('.user-follow .item-content span');

    /*   function ajax(param) {
           var url = param;
           let promise = new Promise((resolve, reject) => {
               let xhr = new XMLHttpRequest();
               xhr.open('GET', url, true);
               xhr.onreadystatechange = function () {
                   if (xhr.readyState === 4) {
                       if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                           resolve(JSON.parse(xhr.responseText))
                       } else {
                           reject(new Error(xhr.statusText))
                       }
                   }
               };
               xhr.send(null);
           });
           return promise;
       }
   */

    // 设置是否关注
    function setFollow(object, value) {
        if (value) {
            object.style.backgroundColor = '#e3e5e7';
            object.style.color = '#61666D';
            object.innerText = '已关注';
        } else {
            object.style.backgroundColor = '#00aeec';
            object.style.color = '#fff'
            object.innerText = '未关注'
        }
    }

    // 设置性别内容、颜色
    function setSexData(object, value) {
        if (value == '男') {
            object.innerText = value;
            object.style.backgroundColor = 'skyblue';
        } else if (value == '女') {
            object.innerText = value;
            object.style.backgroundColor = 'pink';
        } else {
            object.innerText = value;
            object.style.backgroundColor = '#9f9f9f';
        }
    }

    // 设置等级
    function setLevel(object, value) {
        const level_1 = ''
        const level_2 = '<svg viewBox="0 0 1901 1024" width="30" height="30">< path d = "M1779.565714 73.142857c24.795429 0 49.590857 24.722286 43.446857 49.444572v747.52a48.786286 48.786286 0 0 1-49.590857 49.298285H144.603429a48.713143 48.713143 0 0 1-49.590858-49.371428V208.969143c0-24.649143 18.578286-49.371429 49.590858-49.371429h1021.805714v-37.010285c0-24.722286 18.578286-49.444571 49.517714-49.444572h563.565714zM733.037714 264.630857h-49.590857c-18.578286 0-37.156571 18.578286-37.156571 37.010286v302.811428c0 13.897143 0 33.060571 6.217143 36.937143l173.348571 172.982857c12.434286 12.434286 43.373714 12.434286 43.373714 12.434286s31.012571 0 43.373715-12.434286l185.782857-172.982857c6.217143-6.070857 6.217143-18.432 6.217143-30.866285V307.931429c0-18.505143-18.578286-37.083429-37.156572-37.083429h-49.517714c-18.651429 0-37.156571 18.578286-37.156572 37.083429V585.874286l-105.325714 104.96-105.325714-104.96V301.641143c0-18.432-18.505143-37.010286-37.083429-37.010286z m-445.952 0h-49.517714c-18.578286 0-37.156571 18.578286-37.156571 37.010286v488.082286c0 18.578286 18.578286 37.010286 37.156571 37.010285h297.252571c18.578286 0 37.156571-18.432 37.156572-37.010285v-49.371429c0-18.651429-18.578286-37.156571-37.156572-37.156571H324.242286v-401.554286c0-18.432-18.578286-37.010286-37.156572-37.010286z m1399.661715-92.672h-384c-18.578286 0-37.083429 18.505143-37.083429 37.010286v49.444571c0 18.505143 18.505143 37.083429 37.083429 37.083429h297.252571v142.043428h-297.252571c-18.578286 0-37.083429 18.505143-37.083429 37.083429v315.099429c0 18.505143 18.505143 37.010286 37.083429 37.010285h384c18.578286 0 37.156571-18.505143 37.156571-37.010285v-49.444572c0-18.578286-18.578286-37.156571-37.156571-37.156571h-297.179429V561.152h297.179429c18.578286 0 37.156571-18.578286 37.156571-37.083429V208.969143c0-18.505143-18.578286-37.010286-37.156571-37.010286z"fill = "#8BD29B" ></path ></svg >'
        const level_3 = '<svg viewBox="0 0 1901 1024" width="30" height="30"><path d="M1757.622857 73.142857c24.795429 0 49.517714 24.722286 43.373714 49.444572v747.446857a48.859429 48.859429 0 0 1-49.590857 49.371428H122.660571A48.786286 48.786286 0 0 1 73.142857 870.034286V209.042286c0-24.722286 18.578286-49.444571 49.517714-49.444572h1021.805715v-37.010285c0-24.722286 18.651429-49.444571 49.590857-49.444572h563.565714zM710.948571 264.630857h-49.517714c-18.578286 0-37.156571 18.578286-37.156571 37.083429v302.665143c0 13.165714 0 32.987429 6.217143 37.083428l173.348571 172.909714c11.044571 10.971429 36.717714 12.214857 42.349714 12.434286h1.024s31.012571 0 43.373715-12.434286l185.782857-172.909714c6.217143-6.217143 6.217143-18.505143 6.217143-30.866286V307.858286c0-18.505143-18.578286-37.010286-37.156572-37.010286h-49.517714c-18.651429 0-37.229714 18.505143-37.229714 37.010286v277.942857l-105.325715 105.033143L748.251429 585.874286V301.714286c0-18.505143-18.651429-37.083429-37.156572-37.083429z m-445.878857 0h-49.590857c-18.578286 0-37.156571 18.578286-37.156571 37.083429v488.009143c0 18.505143 18.578286 37.010286 37.156571 37.010285h297.325714c18.578286 0 37.156571-18.505143 37.156572-37.010285v-49.444572c0-18.578286-18.578286-37.083429-37.156572-37.083428h-210.651428v-401.554286c0-18.432-18.505143-37.010286-37.083429-37.010286zM1664.731429 171.958857h-384c-18.578286 0-37.083429 18.505143-37.083429 37.010286v49.444571c0 18.505143 18.505143 37.083429 37.083429 37.083429h297.252571v142.043428h-297.252571c-18.578286 0-37.083429 18.505143-37.083429 37.083429v49.444571c0 18.505143 18.505143 37.010286 37.083429 37.010286h297.252571v142.116572h-297.252571c-18.578286 0-37.083429 18.432-37.083429 37.010285v49.444572c0 18.505143 18.505143 37.083429 37.083429 37.083428h384c18.578286 0 37.156571-18.578286 37.156571-37.083428V208.969143c0-18.505143-18.578286-37.010286-37.156571-37.010286z" fill="#7BCDEF"></path></svg>'
        const level_4 = '<svg viewBox="0 0 1901 1024" width="30" height="30"><path d="M1757.622857 73.142857c24.795429 0 49.517714 24.722286 43.373714 49.444572v747.446857a48.859429 48.859429 0 0 1-49.590857 49.371428H122.660571A48.786286 48.786286 0 0 1 73.142857 870.034286V209.042286c0-24.722286 18.578286-49.444571 49.517714-49.444572h1021.805715v-37.010285c0-24.722286 18.651429-49.444571 49.590857-49.444572h563.565714zM710.948571 264.630857h-49.517714c-18.578286 0-37.156571 18.578286-37.156571 37.083429v309.248c0.146286 13.238857 0.877714 26.770286 6.217143 30.500571l173.348571 172.909714c12.434286 12.434286 43.373714 12.434286 43.373714 12.434286h1.097143c5.558857-0.219429 31.232-1.462857 42.276572-12.434286l185.782857-172.909714c6.217143-6.217143 6.217143-18.505143 6.217143-30.866286V307.858286c0-18.505143-18.578286-37.010286-37.156572-37.010286h-49.517714c-18.651429 0-37.229714 18.505143-37.229714 37.010286v277.942857l-105.325715 105.033143L748.251429 585.874286V301.714286c0-18.505143-18.651429-37.083429-37.156572-37.083429z m-445.878857 0h-49.590857c-18.578286 0-37.156571 18.578286-37.156571 37.083429v488.009143c0 18.505143 18.578286 37.010286 37.156571 37.010285h297.325714c18.578286 0 37.156571-18.505143 37.156572-37.010285v-49.444572c0-18.578286-18.578286-37.083429-37.156572-37.083428h-210.651428v-401.554286c0-18.432-18.505143-37.010286-37.083429-37.010286z m1065.179429-92.672h-49.517714c-18.578286 0-37.083429 18.505143-37.083429 37.010286v315.026286c0 18.578286 18.505143 37.083429 37.083429 37.083428h297.252571v228.571429c0 18.505143 18.578286 37.083429 37.229714 37.083428h49.517715c18.578286 0 37.156571-18.578286 37.156571-37.083428V208.969143c0-18.505143-18.578286-37.010286-37.156571-37.010286h-49.517715c-18.651429 0-37.229714 18.505143-37.229714 37.010286v228.571428h-210.505143V208.969143c0-18.505143-18.651429-37.010286-37.229714-37.010286z" fill="#FEBB8B"></path></svg>'
        const level_5 = '<svg viewBox="0 0 1901 1024" width="30" height="30"><path d="M1779.565714 73.142857c24.795429 0 49.590857 24.722286 43.446857 49.444572v747.446857a48.859429 48.859429 0 0 1-49.590857 49.371428H144.603429a48.786286 48.786286 0 0 1-49.590858-49.371428V209.042286c0-24.722286 18.578286-49.444571 49.590858-49.444572h1021.805714v-37.010285c0-24.722286 18.578286-49.444571 49.517714-49.444572h563.565714zM733.037714 264.630857h-49.590857c-18.578286 0-37.156571 18.578286-37.156571 37.083429v302.665143c0 12.507429 0 31.232 6.217143 37.083428l173.348571 172.909714c11.044571 10.971429 36.790857 12.214857 42.349714 12.434286h1.024s31.012571 0 43.373715-12.434286l185.782857-172.909714c6.217143-6.217143 6.217143-18.505143 6.217143-30.866286V307.858286c0-18.505143-18.578286-37.010286-37.156572-37.010286h-49.517714c-18.651429 0-37.156571 18.505143-37.156572 37.010286v277.942857l-105.325714 105.033143-105.325714-104.96V301.714286c0-18.505143-18.505143-37.083429-37.083429-37.083429z m-445.952 0h-49.517714c-18.578286 0-37.156571 18.578286-37.156571 37.083429v488.009143c0 18.505143 18.578286 37.010286 37.156571 37.010285h297.252571c18.578286 0 37.156571-18.505143 37.156572-37.010285v-49.444572c0-18.578286-18.578286-37.083429-37.156572-37.083428H324.242286v-401.554286c0-18.432-18.578286-37.010286-37.156572-37.010286z m1399.661715-92.672h-384c-18.578286 0-37.083429 18.505143-37.083429 37.010286v315.026286c0 18.578286 18.505143 37.083429 37.083429 37.083428h297.252571v142.116572h-297.252571c-18.578286 0-37.083429 18.432-37.083429 37.010285v49.444572c0 18.505143 18.505143 37.083429 37.083429 37.083428h384c18.578286 0 37.156571-18.578286 37.156571-37.083428V474.624c0-18.505143-18.578286-37.083429-37.156571-37.083429h-297.179429V301.641143h297.179429c18.578286 0 37.156571-18.505143 37.156571-37.083429v-55.588571c0-18.505143-18.578286-37.010286-37.156571-37.010286z" fill="#EE672A"></path></svg>'
        const level_6 = '<svg viewBox="0 0 1901 1024" width="30" height="30"><path d="M1779.565714 93.037714c22.674286 0 45.421714 20.772571 44.324572 43.300572l-0.877715 6.144v747.446857c0 22.454857-15.36 44.909714-41.472 48.859428l-8.118857 0.585143H144.603429a48.859429 48.859429 0 0 1-49.005715-41.325714l-0.585143-8.118857V228.937143c0-22.454857 15.36-44.909714 41.398858-48.786286l8.192-0.585143h1021.805714v-37.083428c0-22.454857 15.36-44.909714 41.398857-48.786286l8.118857-0.658286h563.565714z m-92.891428 105.033143h-383.926857c-16.457143 0-32.914286 14.628571-36.425143 30.939429l-0.658286 6.144v574.464c0 16.457143 14.628571 32.914286 30.939429 36.425143l6.144 0.658285h384c16.530286 0 32.987429-14.628571 36.498285-30.939428l0.658286-6.144V494.592c0-16.530286-14.628571-32.914286-31.012571-36.425143l-6.144-0.658286h-297.179429V321.609143h297.179429c16.530286 0 32.987429-14.628571 36.498285-30.939429l0.658286-6.144v-49.371428c0-18.578286-18.578286-37.083429-37.156571-37.083429zM733.110857 284.598857h-49.590857c-18.578286 0-37.156571 18.505143-37.156571 37.010286v302.738286c0 16.749714 0 31.817143 6.217142 37.010285l173.348572 172.909715c7.899429 7.899429 23.259429 10.752 33.426286 11.849142l9.947428 0.585143 8.557714-0.438857c10.093714-0.950857 26.550857-3.657143 34.816-11.995428l185.782858-172.909715c4.973714-4.900571 5.997714-13.824 6.144-23.478857V327.68c0-18.505143-18.505143-37.010286-37.083429-37.010286h-49.517714c-18.651429 0-37.156571 18.505143-37.156572 37.083429v277.942857l-105.325714 104.96-105.325714-104.96V321.609143c0-18.505143-18.505143-37.010286-37.083429-37.010286z m-445.952 0h-49.517714c-16.530286 0-33.060571 14.628571-36.571429 30.866286l-0.585143 6.144v488.009143c0 16.530286 14.628571 32.914286 30.939429 36.425143l6.217143 0.658285h297.252571c16.530286 0 32.987429-14.628571 36.498286-30.939428l0.658286-6.144v-49.371429c0-16.603429-14.628571-32.987429-31.012572-36.425143l-6.144-0.658285H324.242286v-401.554286c0-18.505143-18.578286-37.010286-37.156572-37.010286z m1312.914286 296.448v142.116572h-210.505143V581.046857h210.505143z" fill="#FF0000"></path></svg>'
        const level_0 = '<svg viewBox="0 0 1901 1024" width="30" height="30"><path d="M1763.766857 73.142857c24.868571 0 44.544 18.285714 43.593143 49.444572v747.52a48.859429 48.859429 0 0 1-49.737143 49.298285H122.88a48.859429 48.859429 0 0 1-49.737143-49.371428V208.969143c0-24.649143 18.651429-49.371429 49.737143-49.371429H1148.342857v-37.010285c0-24.722286 18.651429-49.444571 49.737143-49.444572h565.613714zM265.801143 264.630857h-49.737143c-18.578286 0-37.302857 18.578286-37.302857 37.010286v488.082286c0 18.578286 18.724571 37.010286 37.302857 37.010285h298.422857c18.651429 0 37.302857-18.432 37.302857-37.010285v-49.371429c0-18.651429-18.651429-37.156571-37.302857-37.156571h-211.382857v-401.554286c0-18.432-18.651429-37.010286-37.302857-37.010286z m447.634286 0h-49.737143c-18.651429 0-37.302857 18.578286-37.302857 37.010286v302.811428c-0.365714 12.653714 0 30.427429 6.217142 36.937143l174.08 172.982857c6.875429 6.875429 19.529143 9.947429 29.403429 11.264l10.020571 0.950858h8.045715l10.020571-0.950858c9.874286-1.316571 22.601143-4.388571 29.476572-11.264l174.08-172.982857c6.144-6.070857 18.578286-18.432 18.578285-30.866285V307.931429c0-18.505143-18.651429-37.083429-37.302857-37.083429h-49.590857c-18.724571 0-37.376 18.578286-37.376 37.083429V585.874286l-105.691429 104.96-105.618285-104.96V301.641143c0-18.432-18.651429-37.010286-37.302857-37.010286zM1658.148571 178.102857h-354.304a49.005714 49.005714 0 0 0-49.737142 49.444572v543.670857c0 24.649143 18.651429 49.371429 49.737142 49.371428h354.304c24.868571 0 49.737143-18.505143 49.737143-49.371428V227.474286a48.932571 48.932571 0 0 0-49.737143-49.444572zM1552.457143 295.497143c16.603429 0 33.206857 14.628571 36.717714 30.866286l0.658286 6.144v333.677714c0 16.457143-14.774857 32.914286-31.158857 36.352l-6.217143 0.658286h-142.921143c-16.603429 0-33.133714-14.628571-36.571429-30.866286l-0.731428-6.144V332.580571c0-16.457143 14.701714-32.914286 31.085714-36.352l6.217143-0.658285h142.921143z" fill="#C0C0C0"></path></svg>'
        let level_svg;
        let div = document.createElement('div');
        switch (value) {
            case '1':
                level_svg = level_1;
                break;
            case '2':
                level_svg = level_2;
                break;
            case '3':
                level_svg = level_3;
                break;
            case '4':
                level_svg = level_4;
                break;
            case '5':
                level_svg = level_5;
                break;
            case '6':
                level_svg = level_6;
                break;
            default:
                level_svg = level_0;
        }
        div.innerHTML = level_svg;
        object.innerHTML = ''
        object.appendChild(div);
    }

    // 设置个性签名
    function setSign(object, value) {
        if (value) {
            object.innerText = value;
        } else {
            object.innerText = `这个人没有简介啊~~~`;
        }
    }

    document.addEventListener('keyup', (e) => { if (e.keyCode == 191) search_input.focus() })
    search_input.addEventListener('keydown', (e) => { if (e.keyCode == 13) bilibili() });
    searchBtn.addEventListener('click', bilibili);
    deleteBtn.addEventListener('click', clearData);

    function bilibili() {
        let uid = search_input.value.trim();
        if (uid.length) {
            search_input.classList.remove('pps-input-error');
            let url = `http://192.168.10.3:5000/apiBilibili`;
            // if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
            //     console.log('手机版');
            //     url = `http://192.168.10.3:5000/apiBilibili`;
            // } else {
            //     console.log('电脑版');
            //     url = `http://127.0.0.1:5000/apiBilibili`;
            // }
            // if (!uid) uid = 388609984;
            pps.ppsAjax({
                url: url,
                method: "get",
                data: { uid },
                async: true,
                success: function (res) {
                    // alert(1)
                    // console.log(res);
                    bili_name.innerText = `${res.name}`;
                    bili_fans.innerText = `${res.fans}`;
                    setSign(bili_sign, res.sign);
                    setFollow(bili_isFollow, res.isFollow);
                    setLevel(bili_level, res.level);
                    setSexData(bili_sex, res.sex);
                    // 设置头像
                    bili_avatar.src = res.avatar;
                    bili_link.href = `https://space.bilibili.com/${uid}`;
                    bili_link.target = '_blank';
                },
                error: function (err) {
                    console.error(err);
                }
            })

        } else {
            search_input.value = '';
            search_input.placeholder = '请先输入需查询的uid！'
            search_input.classList.add('pps-input-error');
            clearData();
        }
    }

    function clearData() {
        bili_avatar.src = 'https://static.hdslb.com/images/member/noface.gif';
        bili_link.href = 'javascript:;';
        bili_link.target = ''
        bili_name.innerText = '';
        bili_sex.innerText = '';
        bili_sex.style.backgroundColor = '#fff';
        bili_fans.innerText = '';
        bili_level.innerText = '';
        bili_sign.innerText = '';
        bili_sign_hidden.style.display = 'none';
        bili_sign.style.backgroundColor = '#fff';
        bili_isFollow.innerText = '';
        search_input.value = ''
    }
}

//首次进入弹窗
{
    const body = document.body;
    const mask_window = document.querySelector('.pps-window');
    const move_window = mask_window.querySelector('.window');
    const move_title = move_window.querySelector('.title');
    const close_btn = mask_window.querySelector('.close');
    const comfirm_btn = mask_window.querySelector('.pps-button-confirm');

    function close() {
        mask_window.style.display = 'none';
        if (mask_window.style.display == 'block') {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'scroll';
        }
    }

    if (JSON.parse(localStorage.getItem('isFirst'))) {
        mask_window.style.display = 'none';
        body.style.overflow = 'scroll';
    } else {
        mask_window.style.display = 'block';
        body.style.overflow = 'hidden';
    }
    close_btn.addEventListener('click', close);
    comfirm_btn.addEventListener('click', close);


    //记录按钮及弹窗
    const local_btn = document.querySelector('.headNavbar nav .local-log .local-close')

    function localFalse() {
        local_btn.classList.remove('pps-button-delete');
        local_btn.classList.add('pps-button-confirm');
        local_btn.innerText = '关闭弹窗';
        localStorage.setItem('isFirst', false);
    }
    function localTrue() {
        local_btn.classList.remove('pps-button-confirm');
        local_btn.classList.add('pps-button-delete');
        local_btn.innerText = '打开弹窗';
        localStorage.setItem('isFirst', true);
    }

    if (!(localStorage.getItem('local-btn'))) {
        console.log(!(localStorage.getItem('local-btn')));
        localStorage.setItem('local-btn', true);
    }
    if (JSON.parse(localStorage.getItem('local-btn'))) {
        localFalse()
    } else {
        localTrue()
    }
    local_btn.onclick = function () {
        let local_flag = JSON.parse(localStorage.getItem('local-btn'));
        local_flag = !local_flag
        localStorage.setItem('local-btn', local_flag);
        if (local_flag) { localFalse() } else { localTrue() }
    }
}