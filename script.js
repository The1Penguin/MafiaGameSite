function addPlayer(ele) {
    if (event.key === 'Enter'){
        name = ele.value;
        toAdd = "<tr><td onclick='deletePlayer(this)'>"+name+"</td><th><input></th></tr>";
        document.getElementById("Adding").value = "";
        document.getElementById("Nominations").innerHTML += toAdd;
    }
}

day = 1;

function deletePlayer(ele) {
    table = document.getElementById("Nominations");
    i = ele.parentNode.rowIndex;
    table.deleteRow(i);
}

function setDay(day){
    toSet = "Dag " + day;
    document.getElementById("Day").innerHTML = toSet;
}

function goToNext(){
    document.getElementById("Nominations").innerHTML = "";
    setDay(++day);
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        if (!pauseday){
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                timer = duration;
            }
        }
    }, 1000);
}

function startDay(ele){
    if (day == 1) {
        time = 60*15;
    } else {
        time = 60*10;
    }
    ele.outerHTML = '<span id="DayTime" onclick="pauseDay()">15:00</span>';
    display = document.querySelector('#DayTime');
    startTimer(time, display);
}

pauseday = false

function pauseDay(){
    pauseday = !pauseday;
}
