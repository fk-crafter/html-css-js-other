const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
  const now = new Date();
  const h = now.getHours() % 12 || 12;
  const m = now.getMinutes();
  const s = now.getSeconds();
  const ampm = now.getHours() >= 12 ? "PM" : "AM";

  const formattedH = h < 10 ? "0" + h : h;
  const formattedM = m < 10 ? "0" + m : m;
  const formattedS = s < 10 ? "0" + s : s;

  hourEl.innerText = formattedH;
  minuteEl.innerText = formattedM;
  secondEl.innerText = formattedS;
  ampmEl.innerText = ampm;
}

setInterval(updateClock, 1000);
updateClock();
