function addPlayer(ele) {
    if (event.key === 'Enter'){
        name = ele.value;
        toAdd = "<tr><td onclick='deletePlayer(this)'>"+name+"</td><th></th></tr>";
        document.getElementById("Adding").value = "";
        document.getElementById("Nominations").innerHTML += toAdd;
    }
}

function deletePlayer(ele) {
    i = ele.parentNode.parentNode;
    ele.parentNode.parentNode.remove(i);
}

function randomize(){
    table = document.getElementById("Nominations");
    var frimurare = 0, maffia = 0, detective = 0;
    var tbodyRowCount = table.rows.length;
    if (tbodyRowCount < 9 || tbodyRowCount > 10){
        frimurare = 2;
    }
    if (tbodyRowCount > 8) {
        detective = 1;
    }
    maffia = tbodyRowCount/4;
    if (maffia % 1 <= 0.5){
        maffia = Math.floor(maffia);
    } else {
        maffia = Math.ceil(maffia);
    }
    
}
