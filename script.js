var countdownElement = document.getElementById('countdown-number');

var countdown = 10;

function updateCountdown() {
    countdown -= 1;
    countdownElement.textContent = countdown;

    if (countdown <= 0) {
        window.location.href = "https://www.bilibili.com";  // 替换成您要跳转的网址
    } else {
        setTimeout(updateCountdown, 1000);  // 每秒更新一次倒计时
    }
}

window.onload = function () {
    updateCountdown();
};
