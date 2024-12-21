function initializeFretboard() {
    let guitarFretboard = [[],[],[],[],[],[]]; //6 strings, 12 frets. value in each element is the increment number where 0 is the open E string.
    for (i=0;i<=12;i++) { //the first twelve frets in the string and the open string
        guitarFretboard[5].push(i); //low E string
        guitarFretboard[4].push(i+5);
        guitarFretboard[3].push(i+10);
        guitarFretboard[2].push(i+15);
        guitarFretboard[1].push(i+19);
        guitarFretboard[0].push(i+24); //high E string
    }   

    return guitarFretboard;
}

function initializeColorboard() { //6 strings, 12 frets. value in each element is initialized to 0, and relevent elements will be turned to 1 when a key is selected
    let guitarColorboard = Array(6).fill().map(() => Array(13).fill(0));
    
    return guitarColorboard;
}

function initializeKeySet() {
    const keySet = ["E", "F", "F#", "G", "Ab", "A", "Bb", "B", "C", "C#", "D", "Eb"];
    
    return keySet;
}

function initializeLegends(type) {
    const minorKeyLegend = [0,2,3,5,7,8,10];
    const majorKeyLegend = [0,2,4,5,7,9,11];
    if (type != null && type == "minor") {
        return minorKeyLegend;
    }
    else{
        return majorKeyLegend;
    }
}