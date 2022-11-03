// The Date object is used to work with dates & times
// Zero is a refferences point (12/31/1969, 6:00:00 PM)

let date = new Date();
// let date == new Date(0);
// let date = new Date(2023, 0, 1, 2, 3, 4, 5);
// let date = new Date("January 1, 2023 00:00:00");

/*
let year = date.getFullYear();
dayOfMonth = date.getDate();
dayOfWeek = date.getDay();
let month = date.getMonth()
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let ms = date.getMilliseconds();
*/

/*
date.setFullYear(2024);
date.setMonth(11);
date.setDate(31);
*/

// date = date.toLocaleString();
document.getElementById("myLabel").innerHTML = formatDate(date);
document.getElementById("myLabel2").innerHTML = formatTime(date);

function formatDate(date){
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${month}/${day}/${year}`
}

function formatTime(date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amOrPM = hours >= 12 ? "pm" : "am"

    hours = (hours % 12) || 12;

    return `${hours}:${minutes}:${seconds} ${amOrPM}`
}