/*
 *  封装ajax
 *  cover by:space
 *
 */


//==================== ajax ======================//
function ppsAjax(options) {
    let default_options = {
        url: "",
        method: "GET",
        async: true,
        data: {},
        Headers: {},
        success: function () { },
        error: function () { }
    }
    let { url, method, async, data, Headers, success, error } = {
        ...default_options,
        ...options
    }
    if (typeof data === 'object' && Headers["content=type"]?.indexOf("json") > -1) {
        data = JSON.stringify(data);

    } else {
        data = query_stringify(data);
    }

    // 判断get，组装url
    if (/^get$/i.test(method) && data) url += '?' + data;
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, async);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (!/^2\d{2}$/.test(xhr.status)) {
                error(`错误状态码：${xhr.status}`);
                return;
            }

            // 执行解析
            try {
                success(JSON.parse(xhr.responseText));
            } catch (err) {
                error('PPS_Warn:解析失败！返回结果不是json格式字符串');
            }
        }
    }
    // 设置请求头信息
    for (let k in Headers) xhr.setRequestHeader(k, Headers[k]);
    if (/^get$/i.test(method)) {
        data = null;
    }
    try {
        xhr.send(data);
    } catch (error) {
        console.log(error);
    }

}

function query_stringify(obj) {
    let str = '';
    for (let k in obj) str += `${k}=${obj[k]}&`;
    return str.slice(0, -1);
}

//===================== end ========================//


//==================== 拖动框 =======================//
function ppsMoveBox(options) {
    let default_object = {
        axis: ''
    }
    let { moveOptions, moveArea, axis } = { ...default_object, ...options }
    moveArea.addEventListener('mousedown', function (e) {
        let x = e.pageX - moveOptions.offsetLeft;
        let y = e.pageY - moveOptions.offsetTop;

        function move(e) {
            if (axis == 'x') {
                moveOptions.style.left = `${e.pageX - x}px`
            } else if (axis == 'y') {
                moveOptions.style.top = `${e.pageY - y}px`
            } else {
                moveOptions.style.left = `${e.pageX - x}px`
                moveOptions.style.top = `${e.pageY - y}px`
            }
        }
        document.addEventListener('mousemove', move);
        document.addEventListener('mouseup', function () {
            document.removeEventListener('mousemove', move)
        })
    })
}
//===================== end ========================//


//==================== 判断客户端 =======================//
function ppsPortdo(options) {
    let default_options = {
        pc: function () { console.log('%c当前客户端为：pc', `color:blue;font-weight:bold;`); },
        pmd: function () { console.log('%c当前客户端为：pmd', `color:blue;font-weight:bold;`); }
    }
    let { pc, pmd } = { ...default_options, ...options }
    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
        pmd();
    } else {
        pc();
    }
}
//===================== end ========================//


//==================== ppsAnimate =======================//
function ppsAnimate(obj, target, time, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var step = (target - obj.offsetTop) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetTop == target) {
            clearInterval(obj.timer);
            if (callback) {
                callback();
            }
        }
        obj.style.top = obj.offsetTop + step + 'px'
    }, time)
}
//===================== end ========================//


export default {
    ppsAjax, ppsMoveBox, ppsPortdo,ppsAnimate
}