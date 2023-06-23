ampm = document.getElementById("ampm");

function displayDate() {
  let date = new Date();
  console.log(date);
  let cDate = date.getDate();
  let cMonth = date.getUTCMonth();
  let cYear = date.getFullYear();

  cDate = padZero(cDate);
  cMonth = padZero(cMonth);
  document.getElementById("date").innerHTML = cDate;
  document.getElementById("month").innerHTML = cMonth;
  document.getElementById("year").innerHTML = cYear;
}
displayDate();

function displayTime() {
  let dateTime = new Date();
  let hr = dateTime.getHours();
  let min = padZero(dateTime.getMinutes());
  let sec = padZero(dateTime.getSeconds());
  if (hr > 12) {
    ampm.innerHTML = "PM";
    hr = hr - 12;
  } else {
    ampm.innerHTML = "AM";
  }
  hr = padZero(hr);
  document.getElementById("hours").innerHTML = hr;
  document.getElementById("mins").innerHTML = min;
  document.getElementById("seconds").innerHTML = sec;
}

function padZero(num) {
  return num < 10 ? "0" + num : num;
}

setInterval(displayTime, 500);

const minEl = document.querySelector(".min");
const secEl = document.querySelector(".sec");
const hourEl = document.querySelector(".hour");

setInterval(() => {
  const date = new Date();
  const secDeg = (date.getSeconds() / 60) * 360 - 90;
  const minDeg = (date.getMinutes() / 60) * 360 - 90;
  const hourDeg = (date.getHours() / 12) * 360 - 90;
  secEl.style.transform = `rotate(${secDeg}deg)`;
  minEl.style.transform = `rotate(${minDeg}deg)`;
  hourEl.style.transform = `rotate(${hourDeg}deg)`;
}, 1000);
