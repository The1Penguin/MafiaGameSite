function addPlayer(ele) {
    if (event.key === 'Enter'){
        name = ele.value;
        toAdd = "<tr><th>"+name+"</th><th><input></th></tr>";
        document.getElementById("Adding").value = "";
        document.getElementById("Nominations").innerHTML += toAdd;
    }
}

day = 1;

function setDay(day){
    toSet = "Dag " + day;
    document.getElementById("Day").innerHTML = toSet;
}

function goToNext(){
    setDay(++day);
}
