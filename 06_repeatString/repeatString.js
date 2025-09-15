const repeatString = function (incomingString, repeatNumber) {
    let outcomingString = "";

    if (repeatNumber < 0) {
        return outcomingString = "ERROR";
    }
    else if (repeatNumber === 0) {
        return outcomingString = "";
    }
    else {
        for (let i = 0; i < repeatNumber; i++) {
            outcomingString += incomingString;
        }
        return outcomingString;
    }
};

// Do not edit below this line
module.exports = repeatString;
