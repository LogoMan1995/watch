function time() {
    const dateText = document.querySelector('.date');
    const time = document.querySelector('.time');
    const date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();




    hours = formatTimeComponent(hours);
    minutes = formatTimeComponent(minutes);
    seconds = formatTimeComponent(seconds);
    day = formatTimeComponent(day);
    month = formatTimeComponent(month);




    time.textContent = `${hours}:${minutes}:${seconds}`;
    dateText.textContent = `${day}.${month}.${year}`;
}

function formatTimeComponent(component){
    return component < 10 ? "0" + component : component;
}


setInterval(time, 1000);
