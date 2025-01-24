let timer;
let seconds = 3600 * 24;
let isRunning = false;

function startCountdown() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      if (seconds > 0) {
        seconds--;
        let hours = Math.floor(seconds / 3600);
        let minutes = Math.floor((seconds % 3600) / 60);
        let secs = seconds % 60;
        // document.getElementById(
        //   "timerDisplay"
        // ).textContent = `${hours}h ${minutes}m ${secs}s`;
        document.getElementById("hours").textContent = `${hours}H`;
        document.getElementById("munites").textContent = `${minutes}M`;
        document.getElementById("seconds").textContent = `${secs}S`;
        
        document.getElementById("CircleHour").innerHTML = `${hours}H`;
        document.getElementById("CircleMunite").textContent = `${minutes}M`;
        document.getElementById("CircleSecond").textContent = `${secs}S`;
      } else {
        clearInterval(timer);
        document.getElementById("timerDisplay").textContent = "Time's up!";
      }
    }, 1000);
  }
}

function resetCountdown() {
  clearInterval(timer);
  isRunning = false;
  seconds = 3600;
  document.getElementById("timerDisplay").textContent = `1h 0m 0s`;
}
startCountdown();
