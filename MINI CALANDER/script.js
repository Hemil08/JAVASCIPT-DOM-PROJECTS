const d = new Date();

// get months

let currentDate = d.getDate();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let currentMonth = months[d.getMonth()];

// get days

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let currentDays = days[d.getDay()];

// todo get current year

let currentYear = d.getFullYear();

let month = document.querySelector(".month");
let day = document.querySelector(".day");
let date = document.querySelector(".date");
let year = document.querySelector(".year");
// let liveTime = document.querySelector(".liveTime");

month.innerText = currentMonth;
day.innerText = currentDays;
date.innerText = currentDate;
year.innerText = currentYear;



