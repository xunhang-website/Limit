// 获取显示倒计时的元素
var countdownElement = document.getElementById('countdown-number');

// 设置初始倒计时时间
var countdown = 10;

// 更新倒计时并在倒计时结束时跳转
function updateCountdown() {
    countdown -= 1;
    countdownElement.textContent = countdown;

    if (countdown <= 0) {
        window.close();
        document.body.innerHTML = "<h2>页面已经自动关闭</h2>";
    } else {
        setTimeout(updateCountdown, 1000);  // 每秒更新一次倒计时
    }
}

// 页面加载后开始倒计时
window.onload = function () {
    updateCountdown();
};