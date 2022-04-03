let minutes = 0;
let seconds = 0;
let appendMinutes = document.getElementById("minutes");
let appendSeconds = document.getElementById("seconds");
let addBtn = document.getElementById("add");
let toggleBtn = document.getElementById("toggle");
let resetBtn = document.getElementById("reset");
let interval;
let timersArr = [];
let isTimer = false;

const startTimer = () => {
  seconds++;

  if (seconds < 10) {
    appendSeconds.innerHTML = "0" + seconds;
  }

  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }

  if (seconds > 59) {
    minutes++;
    appendMinutes.innerHTML = "0" + minutes;
    seconds = 0;
    appendSeconds.innerHTML = "0" + seconds;
  }

  if (minutes > 9) {
    appendMinutes.innerHTML = minutes;
  }
};

const toggle = () => {
  if (window.localStorage.getItem("timerHistory") !== null) {
    
  }

  if (toggleBtn.innerHTML == "Start") {
    interval = setInterval(startTimer, 1000);
    toggleBtn.innerHTML = "Pause";
    addBtn.removeAttribute("disabled");
    resetBtn.removeAttribute("disabled");
  } else {
    clearInterval(interval);
    toggleBtn.innerHTML = "Start";
  }
  isTimer = true;
};

addBtn.addEventListener("click", () => {
  console.log("add btn clicked");
});

toggleBtn.addEventListener("click", toggle);

resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  addBtn.setAttribute("disabled", "");
  resetBtn.setAttribute("disabled", "");
  toggleBtn.innerHTML = "Start";
  seconds = "00";
  minutes = "00";
  appendSeconds.innerHTML = seconds;
  appendMinutes.innerHTML = minutes;
});

window.addEventListener("beforeunload", () => {
  if (isTimer && (seconds != 0 || minutes != 0)) {
    let timerData = {
      seconds: seconds,
      minutes: minutes,
    };
    window.localStorage.setItem("timerHistory", JSON.stringify(timerData));
  }
});

window.addEventListener("load", toggle);
