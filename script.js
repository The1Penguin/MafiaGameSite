day = 1;
pauseday = false;
pausedefense = false;
pausefive = false;
listOfIntervals = [];

function addPlayer(ele) {
    if (event.key === 'Enter'){
        name = ele.value;
        toAdd = "<tr><td onclick='deletePlayer(this)'>"+name+"</td><th><input id='votes'></th></tr>";
        document.getElementById("Adding").value = "";
        document.getElementById("Nominations").innerHTML += toAdd;
    }
}

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
    document.getElementById("DayTime").outerHTML = '<span id="DayTime" onclick="startDay(this)">10:00</span>';
    document.getElementById("Defense").outerHTML = '<span id="Defense" onclick="startDefense(this)">02:00</span>';
    for (i=0; i < listOfIntervals.length; i++) {
        window.clearInterval(listOfIntervals[i]);
    }
    listOfIntervals = [];
    pauseday = false;
    pausedefense = false;
}

function startTimer(duration, display, ele) {
    var timer = duration, minutes, seconds;
    let intervalId = setInterval(function () {
        if (display.id === 'DayTime'){
            pause = pauseday;
        } else if (ele.id === 'Fivemin') {
            pause = pausefive;
        } else {
            pause = pausedefense;
        }
        if (!pause){
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                window.clearInterval(intervalId);
                alert("Timer is finished");
                display.outerHTML = ele.outerHTML;
            }
        }
    }, 1000);
    listOfIntervals.push(intervalId);
}

function startDay(ele){
    if (day == 1) {
        time = 60*15;
    } else {
        time = 60*10;
    }
    ele.outerHTML = '<span id="DayTime" onclick="pauseFunc(this)">15:00</span>';
    display = document.querySelector('#DayTime');
    startTimer(time, display, ele);
}


function startDefense(ele){
    time = 2*60
    ele.outerHTML = '<span id="Defense" onclick="pauseFunc(this)">02:00</span>';
    display = document.querySelector('#Defense');
    startTimer(time, display, ele);
}

function startFive(ele){
    time = 5*60
    ele.outerHTML = '<span id="Fivemin" onclick="pauseFunc(this)">05:00</span>';
    display = document.querySelector('#Fivemin');
    startTimer(time, display, ele);
}

function pauseFunc(ele){
    if (ele.id === 'DayTime'){
        pauseday = !pauseday;
    } else if (ele.id === 'Fivemin') {
        pausefive = !pausefive;
    } else {
        pausedefense = !pausedefense;
    }
}
