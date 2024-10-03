const start = document.getElementById("Start");
const stop = document.getElementById("Stop");
const reset = document.getElementById("Seset");
const time = document.getElementById("time");

let interval;
let timeHave = 1500;

function Time() {
    let minute = Math.floor(timeHave / 60);
    let second = timeHave % 60;
    let mainTime = `${minute.toString()}:${second.toString()}`;
  
    time.innerHTML = mainTime;
  }

function startTime() {
    interval = setInterval(() => {
        timeHave--;
      Time();
      if (timeHave == -1) {
        clearInterval(interval);
        alert("Time tugadi!");
        timeHave = 1500;
        Time();
      }
    }, 1000);
  }
  function stopTime() {
    clearInterval(interval);
  }
  function resetTime() {
    clearInterval(interval);
    timeHave = 1500;
    Time();
  }
