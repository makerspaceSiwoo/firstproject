const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    clock.innerText = `${hour}:${minute}`;
}

setInterval(getClock,1000);