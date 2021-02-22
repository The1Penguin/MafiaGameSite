function addPlayer(ele) {
    if (event.key === 'Enter'){
        name = ele.value;
        toAdd = "<tr><td onclick='strikeThrough(this)'>"+name+"</td><th><input></th></tr>";
        document.getElementById("Adding").value = "";
        document.getElementById("Nominations").innerHTML += toAdd;
    }
}

day = 1;

function strikeThrough(ele) {
    ele.innerHTML = "<p style='text-decoration: line-through;'>" + ele.innerHTML + "</p>";
}

function setDay(day){
    toSet = "Dag " + day;
    document.getElementById("Day").innerHTML = toSet;
}

function goToNext(){
    document.getElementById("Nominations").innerHTML = "";
    setDay(++day);
}
