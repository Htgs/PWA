if ('serviceWorker' in navigator) {
    // 这个sw.js 文件是根据当前网站的根路径的相对路径决定
    navigator.serviceWorker.register('/sw.js')
        .then(reg => {
            console.log('service worker registed!', reg);
        })
        .catch(err => {
            console.log('it not support serviceWorker');
        });
}

window.onload = function() {
    var div = document.createElement('div');
    div.innerText = 'PWA!';
    document.body.appendChild(div);
};
