function initializeFretboard(instrument) {
    if (instrument != null && instrument == "violin"){
        violinNeckboard = [[],[],[],[]];
        for (i=0;i<=12;i++) {
            violinNeckboard[3].push(i);
            violinNeckboard[2].push(i+7);
            violinNeckboard[1].push(i+14);
            violinNeckboard[0].push(i+21);
        }
        return violinNeckboard;
    }
    else {
        guitarFretboard = [[],[],[],[],[],[]]; //6 strings, 12 frets. value in each element is the increment number where 0 is the open E string.
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
}

function initializeColorboard(instrument) { //6 strings, 12 frets. value in each element is initialized to 0, and relevent elements will be turned to 1 when a key is selected
    if (instrument != null && instrument == "violin"){
        violinColorboard = [[],[],[],[]];
        for (m=0;m<4;m++) {
            for (n=0;n<=12;n++) {
                violinColorboard[m].push(0);
            }
        }
        return violinColorboard;
    }
    else {
        guitarColorboard = [[],[],[],[],[],[]];
        for (m=0;m<6;m++) {
            for (n=0;n<=12;n++) {
                guitarColorboard[m].push(0);
            }
        }
        return guitarColorboard;
    }
}

function initializeKeySet(instrument) {
    if (instrument != null && instrument == "violin"){
        keySet = ["G", "Ab", "A", "Bb", "B", "C", "C#", "D", "Eb","E", "F", "F#"];
    }
    else {
        keySet = ["E", "F", "F#", "G", "Ab", "A", "Bb", "B", "C", "C#", "D", "Eb"];
    }
    return keySet;
}

function initializeLegends(type) {
    minorKeyLegend = [0,2,3,5,7,8,10];
    majorKeyLegend = [0,2,4,5,7,9,11];
    if (type != null && type == "minor") {
        return minorKeyLegend;
    }
    else{
        return majorKeyLegend;
    }
}

function initialize(instrument, scaleType) {
    arrays = {
        notes:initializeFretboard(instrument),
        display:initializeColorboard(instrument),
        keySet:initializeKeySet(instrument),
        legend:initializeLegends(scaleType)
    }
    return arrays;
}