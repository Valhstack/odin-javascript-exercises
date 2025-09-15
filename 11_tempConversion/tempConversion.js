const convertToCelsius = function(tempFarenheit) {
  let tempCelsius = (tempFarenheit - 32) * 5 / 9;

  tempCelsius = Number(tempCelsius.toFixed(1));

  return tempCelsius;
};

const convertToFahrenheit = function(tempCelsius) {
  let tempFarenheit = (tempCelsius * 9 / 5) + 32;

  tempFarenheit = Number(tempFarenheit.toFixed(1));

  return tempFarenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
