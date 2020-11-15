function closeAlert() {
    document.getElementById('alert-message').remove()
}

setInterval(() => {
    document.getElementById('s').innerHTML = new Date().getSeconds()
}, 500);
setInterval(() => {
    document.getElementById('m').innerHTML = new Date().getMinutes()
}, 500);
setInterval(() => {
    document.getElementById('h').innerHTML = new Date().getHours()
}, 500);