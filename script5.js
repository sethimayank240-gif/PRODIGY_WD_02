let timerdisplay = document.querySelector('.timerdisplay');
let stopBtn = document.getElementById('stopBtn');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');

let msec = 0;
let secs = 0;
let mins = 0;
let timerId = null;

startBtn.addEventListener('click', () => {
  if (timerId !== null) {
    clearInterval(timerId);
  }
  timerId = setInterval(startTimer, 10);
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
});

resetBtn.addEventListener('click', () => {
  clearInterval(timerId);
  msec = secs = mins = 0;
  timerdisplay.innerHTML = "00 : 00 : 00";
});

function startTimer() {
  msec++;
  if (msec === 100) {
    msec = 0;
    secs++;
    if (secs === 60) {
      secs = 0;
      mins++;
    }
  }

  let msecStr = msec < 10 ? `0${msec}` : msec;
  let secStr = secs < 10 ? `0${secs}` : secs;
  let minStr = mins < 10 ? `0${mins}` : mins;

  timerdisplay.innerHTML = `${minStr} : ${secStr} : ${msecStr}`;
}
