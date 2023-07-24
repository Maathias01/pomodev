const botao = document.getElementById("button")
const counterhtml = document.getElementById("counter")

var seconds = 0;
var interval ;
var originalTitle = document.title;

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
}

function counter(mins = 25) {
    seconds = mins*60 || 0;
    botao.disabled = true;
    document.title = formatTime(seconds) + " - PomoDev";
    interval = setInterval(function() {
       if (seconds <= 0){
            clearInterval(interval);
            showNotification("Tempo esgotado!");
            intervalo();
        } else{
            seconds--;
            counterhtml.innerHTML = formatTime(seconds);
            document.title = formatTime(seconds) + " - PomoDev";
        }
   },1000)
}

function intervalo() {
    seconds = 10;
    botao.disabled = true;
    document.title = formatTime(seconds) + " - PomoDev";
    interval = setInterval(function() {
       if (seconds <= 0){
            clearInterval(interval);
            showNotification("Intervalo esgotado!");
            counter(0.1);
        } else{
            seconds--;
            counterhtml.innerHTML = formatTime(seconds);
            document.title = formatTime(seconds) + " - PomoDev";
        }
   },1000)
}

function showNotification(message) {
    if ('Notification' in window) {
        Notification.requestPermission().then(function (permission) {
            if (permission === 'granted') {
                new Notification('PomoDev', {
                    body: message,
                });
            }
        });
    }
}

botao.addEventListener("click", () => counter(0.1))