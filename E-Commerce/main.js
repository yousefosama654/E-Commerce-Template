let dayitem = document.querySelector("#days");
let hoursitem = document.querySelector("#hours");
let minitem = document.querySelector("#min");
let secitem = document.querySelector("#sec");
let countdown = () => {
  let futuredate = new Date(" 17 May 2022");
  let currentdate = new Date();
  let mydate = futuredate - currentdate;
  let days = Math.floor(mydate / 1000 / 60 / 60 / 24);
  let hours = Math.floor(mydate / 1000 / 60 / 60) % 24;
  let min = Math.floor(mydate / 1000 / 60) % 60;
  let sec = Math.floor(mydate / 1000) % 60;
  dayitem.innerHTML = days;
  hoursitem.innerHTML = hours;
  minitem.innerHTML = min;
  secitem.innerHTML = sec;
};
countdown();
setInterval(countdown, 1000);

/***************************************** */

