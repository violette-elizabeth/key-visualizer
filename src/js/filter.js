//numNotes = 36 for guitar; number of playable notes on the guitar, up to the 12th fret on the high E string
//key = 0-11 this is the major key, 0 is E, 11 is Eb/D#
//keyNotesArr = [0,2,4,5,7,9,11] for major key; notes that fit the major key with zero as base note; [0,2,3,5,7,8,10] for minor key
//outputArr = [] output container
function Filter(numNotes, key, legend){
    outputArr = [];
    for (x = 0; x<=numNotes; x++) {
        if (legend.includes((x+12-key) % 12)) {
            outputArr.push(x);
        }
    }
    return outputArr;
}