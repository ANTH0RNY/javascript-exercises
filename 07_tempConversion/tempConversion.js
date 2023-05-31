const convertToCelsius = function(temp) {
  const cel = (temp - 32) * (5/9)
  return Number(cel.toFixed(1))
  
};
const convertToFahrenheit = function(temp) {
  const fahnr = (temp * (9/5)) + 32
  return Number(fahnr.toFixed(1))

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
