const noteBoard = initializeFretboard();
let displayBoard = initializeColorboard();
let keyOptions = initializeKeySet();
let legend = initializeLegends("major");
let x=0;
keyOptions.forEach(item =>{
    let button = document.createElement('button');
    button.id = "key"+x;
    let panel = document.getElementById('control-panel');
    button.textContent = item;
    button.onclick = function(){update(noteBoard, displayBoard, legend, this)};
    panel.appendChild(button);
    x++;
})
for (i=0;i<displayBoard.length;i++) {
    let string = document.createElement('div');
    string.className = 'string';
    string.id = "string"+i;
    let fretboard = document.getElementById('display-panel');
    fretboard.appendChild(string);
    for (j=0;j<displayBoard[0].length;j++) {
        let note = document.createElement('div');
        note.textContent = keyOptions[noteBoard[i][j]%12];
        if (displayBoard[i][j] == 1){
            note.className = 'note-active';
        }
        else {
            note.className = 'note';
        }
        string.appendChild(note);
    }
}

function update(notes, display, code, button){
    let key = button.id.slice(3);
    let keyArr = Filter(36,key,code);
    let y = 0;
    for (i=0;i<notes.length;i++){
        for (j=0;j<notes[0].length;j++) {
            y = 0;
            for (k=0; keyArr[k] > notes[i][j] || k < keyArr.length; k++) {
                if (keyArr[k] == notes[i][j]) {
                    display[i][j] = 1;
                    y = 1;
                    k = keyArr.length;
                    document.getElementById('string'+i).children[j].className = 'note-active';
                }
            }
            if (y==0){
                display[i][j] = 0;
                document.getElementById('string'+i).children[j].className = 'note';
            }
        }
    }
    displayBoard = display;
}