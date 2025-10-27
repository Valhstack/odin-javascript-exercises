const palindromes = function (palindrome) {
    let normilised = palindrome.toLowerCase().replace(/[^a-zA-Z\d]/g, "");

    let reversed = normilised.split("").reverse().join("");;

    let isPalindrome = normilised === reversed ? true : false;

    return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
