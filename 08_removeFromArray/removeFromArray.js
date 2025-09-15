const removeFromArray = function (arr, ...argsToRemoveFromArr) {
    let arrToReturn = arr;

    for (let i = 0; i < arrToReturn.length; i++) {
        for (let j = 0; j < argsToRemoveFromArr.length; j++) {
            if (argsToRemoveFromArr[j] === arr[i]) {
                arrToReturn.splice(i, 1);
                i--;
            }
        }
    }

    return arrToReturn;
};

// Do not edit below this line
module.exports = removeFromArray;
