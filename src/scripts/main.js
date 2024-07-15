'use strict';
var dayOfWeek = (new Date).getDay();
var hours = ["Вихідний",
             "Вихідний",
             "10:00 - 17:00",
             "10:00 - 17:00",
             "12:00 - 19:00",
             "11:00 - 18:00",
             "10:00 - 17:00",
             ];
var todaysHours = hours[dayOfWeek];
document.getElementById("hours").innerHTML = todaysHours;

