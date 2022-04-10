const timeText = document.getElementById("time");
const dateText = document.getElementById("date");

setInterval(function () {
    myTime = new Date();
    const year = myTime.getFullYear();
    const month = myTime.getMonth();
    const day = myTime.getDate();
    const hour = myTime.getHours();
    const hours = ("0" + hour).slice(-2);
    const minute = myTime.getMinutes();
    const minutes = ("0" + minute).slice(-2);
    const second = myTime.getSeconds();
    const seconds = ("0" + second).slice(-2);
    dateText.textContent = `${day}-${month}-${year}`;
    timeText.textContent = `${hours}:${minutes}:${seconds}`;
  }, 1000);