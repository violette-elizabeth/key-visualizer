instrument = '';
scaleType = '';
violin = document.getElementById('violin');
violin.onclick = function(){//change instrument to violin
    instrument = 'violin';
    createDisplay(instrument,scaleType);
};
guitar = document.getElementById('guitar');
guitar.onclick = function(){//change instrument to guitar
    instrument = 'guitar'
    createDisplay(instrument,scaleType);
}; 
major = document.getElementById('major');
major.onclick = function(){//change scale type to major
    scaleType='major'
    createDisplay(instrument,scaleType);
};
minor = document.getElementById('minor');
minor.onclick = function(){//change scale type to minor
    scaleType='minor'
    createDisplay(instrument,scaleType);
};

createDisplay(instrument,scaleType);

function createDisplay(instrument, scaleType) {
    document.getElementById('key-selection').innerHTML='';
    document.getElementById('display-panel').innerHTML='';
    arrays = initialize(instrument, scaleType);
    noteBoard = arrays.notes;
    displayBoard = arrays.display;
    legend = arrays.legend;
    keyOptions = arrays.keySet;

    for(x=0;x<keyOptions.length;x++) { //generate key buttons
        button = document.createElement('button');
        button.id = "key"+x;
        panel = document.getElementById('key-selection');
        button.textContent = keyOptions[x];
        button.onclick = function(){update(noteBoard, displayBoard, legend, this)};
        panel.appendChild(button);

    }
    for (i=0;i<displayBoard.length;i++) { //generate display board
        string = document.createElement('div');
        string.className = 'string';
        string.id = "string"+i;
        fretboard = document.getElementById('display-panel');
        fretboard.appendChild(string);
        for (j=0;j<displayBoard[0].length;j++) {
            note = document.createElement('div');
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
}

function update(notes, display, legend, clicked){ //update displayboard
    key = clicked.id.slice(3);
    keyArr = Filter(36,key,legend);
    y = 0;
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
    return display;
}