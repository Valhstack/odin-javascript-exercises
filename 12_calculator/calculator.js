const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (numbers) {
  let sum = 0;

  for (let num of numbers) {
    sum += num;
  }

  return sum;
};

const multiply = function (args) {
  let multiplication = 1;

  for (let arg of args) {
    multiplication *= arg;
  }

  return multiplication;
};

const power = function (num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function (num) {
  let factorial = 1;

  if (num < 0) return;
  if (num === 0) return 1;

  for(let i = 1; i <= num; i++){
    factorial *= i;
  }

  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
