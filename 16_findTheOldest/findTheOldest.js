const findTheOldest = function(people) {
    let oldest = people[0], current, prev;

    let date = new Date();
    let currentYear = date.getFullYear();

    if(!people[0].yearOfDeath)  prev = currentYear - people[0].yearOfBirth;
    else prev = people[0].yearOfDeath - people[0].yearOfBirth;

    for(let i = 1; i < people.length; i++){
        current = people[i].yearOfDeath - people[i].yearOfBirth;

        if(current > prev){
            oldest = people[i];
            prev = current;
        }
    }

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
