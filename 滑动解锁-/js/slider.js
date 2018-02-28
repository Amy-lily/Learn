/**

 * 开发时间：2016/5/24

 * 开发人员：boxUnll

 * 开发项目：移动端滑动验证代码

 */
document.addEventListener('touchmove', function(event) { event.preventDefault(); }, false);
var control = navigator.control || {};

if (control.gesture) {

    control.gesture(false);

}
var oBtn = document.getElementById('btn');//小圆

var oW, oLeft;

var oSlider = document.getElementById('slider');

var oTrack = document.getElementById('track');

var oIcon = document.getElementById('icon');

var oSpinner = document.getElementById('spinner');//成功后显示的按钮

var flag = 1;

oBtn.addEventListener('touchstart', function(e) {

    if (flag == 1) {

        // console.log(e);

        var touches = e.touches[0];

        oW = touches.clientX - oBtn.offsetLeft;

        oBtn.className = "button";

        oTrack.className = "track";

    }
}, false);

oBtn.addEventListener("touchmove", function(e) {

    if (flag == 1) {
        var touches = e.touches[0];

        oLeft = touches.clientX - oW;
        var sLeft = $('.slider').width();
        // console.log($('.slider').width())
        if (oLeft < 0) {

            oLeft = 0;

         } else if (oLeft > sLeft - oBtn.offsetWidth) {
            alert('end')
            oLeft = ( sLeft - oBtn.offsetWidth);

        }

        oBtn.style.left = oLeft + "px";

        oTrack.style.width = oLeft + oBtn.offsetWidth+ 'px';

    }

}, false);

oBtn.addEventListener("touchend", function() {

    if (oLeft >= (oSlider.clientWidth - oBtn.clientWidth)) {

        oBtn.style.left = (document.documentElement.clientWidth - oBtn.offsetWidth - 30);

        oTrack.style.width = (document.documentElement.clientWidth - oBtn.offsetWidth - 30);

        console.log(oTrack.style.width)
        // oIcon.style.display = 'none';

        // oSpinner.style.display = 'block';
        // window.location.href = "http://www.baidu.com";

        flag = 0;

    } else {

        oBtn.style.left = 0;

        oTrack.style.width = 0;

    }
    oBtn.className = "button-on";

    oTrack.className = "track-on";

}, false);
