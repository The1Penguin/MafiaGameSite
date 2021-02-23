function addPlayer(ele) {
    if (event.key === 'Enter'){
        name = ele.value;
        toAdd = "<tr><td class='pointer' id='Name' onclick='deletePlayer(this)'>"+name+"</td><th></th></tr>";
        document.getElementById("Adding").value = "";
        document.getElementById("Nominations").innerHTML += toAdd;
    }
}

function deletePlayer(ele) {
    i = ele.parentNode.parentNode;
    ele.parentNode.parentNode.remove(i);
}

function clear(table){
    var tbodyRowCount = table.rows.length;
    for (i=0; i < tbodyRowCount; i++){
        var y=table.rows[i].cells;
        y[1].innerHTML="";
    }
}

function randomize(){
    table = document.getElementById("Nominations");
    var frimurare = 0, maffia = 0, detective = 0;
    var tbodyRowCount = table.rows.length;
    clear(table)
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
    numbers = Array(tbodyRowCount).fill().map((_, index) => index);
    numbers = shuffle(numbers);
    for (i = 0; i < maffia+detective+frimurare; i++){
        a = numbers[i];
        var y=table.rows[a].cells;
        if (i < maffia){
            y[1].innerHTML="Maffia";
        } else if (i < maffia + detective) {
            y[1].innerHTML="Detektiv";
        } else if ( i < maffia + detective + frimurare) {
            y[1].innerHTML="Frimurare";
        } else {
            break;
        }
    }
}

function shuffle(arr){
    var i = arr.length, k , temp;
    while(--i > 0){
      k = Math.floor(Math.random() * (i+1));
      temp = arr[k];
      arr[k] = arr[i];
      arr[i] = temp;
   }
    return arr
}
