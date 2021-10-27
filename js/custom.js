var day = document.getElementById("day");
var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");


function countdown(){
    
    var currentTime = new Date();
    var vaildTime = new Date("Nov 30 2021 00:00:00");
    var diff = vaildTime-currentTime;

    var s = Math.floor(diff/1000) % 60;
    var m = Math.floor(diff/1000/60) % 60;
    var h = Math.floor(diff/1000/60/60) % 60;
    var d = Math.floor(diff/1000/60/60/24);

    // DOM
    second.innerHTML = (s < 10) ? "0" + s : s;
    minute.innerHTML = (m < 10) ? "0" + m : m;
    hour.innerHTML = (h < 10) ? "0" + h : h;
    day.innerHTML = (d < 10) ? "0" + d : d;
}

// BOM
setInterval(countdown,1000)