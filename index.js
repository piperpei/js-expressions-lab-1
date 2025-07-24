//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work



// Defining Variables 

const day1TempF = 32;  
const day2TempC = 25; 
const day3TempF = 70; 
const day4TempC = 18; 
const day5TempF = 80; 
const day6TempC = 15; 
const day7TempF = 72; 
const day8TempC = 28; 
const day9TempF = 68; 
const day10TempC = 20; 
const day11TempF = 75;
const day12TempC = 23; 
const day13TempF = 82; 
const day14TempC = 30; 
const day15TempF = 65; 
const day16TempC = 22; 
const day17TempF = 77; 
const day18TempC = 26; 
const day19TempF = 78; 
const day20TempC = 24; 
const day21TempF = 73; 
const day22TempC = 21; 
const day23TempF = 79; 
const day24TempC = 27; 
const day25TempF = 71; 
const day26TempC = 19; 
const day27TempF = 74; 
const day28TempC = 17; 
const day29TempF = 76; 
const day30TempC = 29; 

// Conversion functions
function toCelsius(f) {
  return (f - 32) * 5 / 9;
}
function toFahrenheit(c) {
  return (c * 9 / 5) + 32;
}

// Step 3: Convert all to both Celsius & Fahrenheit
const temperaturesInCelsius = [
  toCelsius(day1TempF),
  day2TempC,
  toCelsius(day3TempF),
  day4TempC,
  toCelsius(day5TempF),
  day6TempC,
  toCelsius(day7TempF),
  day8TempC,
  toCelsius(day9TempF),
  day10TempC,
  toCelsius(day11TempF),
  day12TempC,
  toCelsius(day13TempF),
  day14TempC,
  toCelsius(day15TempF),
  day16TempC,
  toCelsius(day17TempF),
  day18TempC,
  toCelsius(day19TempF),
  day20TempC,
  toCelsius(day21TempF),
  day22TempC,
  toCelsius(day23TempF),
  day24TempC,
  toCelsius(day25TempF),
  day26TempC,
  toCelsius(day27TempF),
  day28TempC,
  toCelsius(day29TempF),
  day30TempC,
];

const temperaturesInFahrenheit = [
  day1TempF,
  toFahrenheit(day2TempC),
  day3TempF,
  toFahrenheit(day4TempC),
  day5TempF,
  toFahrenheit(day6TempC),
  day7TempF,
  toFahrenheit(day8TempC),
  day9TempF,
  toFahrenheit(day10TempC),
  day11TempF,
  toFahrenheit(day12TempC),
  day13TempF,
  toFahrenheit(day14TempC),
  day15TempF,
  toFahrenheit(day16TempC),
  day17TempF,
  toFahrenheit(day18TempC),
  day19TempF,
  toFahrenheit(day20TempC),
  day21TempF,
  toFahrenheit(day22TempC),
  day23TempF,
  toFahrenheit(day24TempC),
  day25TempF,
  toFahrenheit(day26TempC),
  day27TempF,
  toFahrenheit(day28TempC),
  day29TempF,
  toFahrenheit(day30TempC),
];

// Adding Temperatures Together 

const tot_temperature_in_celsius = 
  temperaturesInCelsius[0] + temperaturesInCelsius[1] + temperaturesInCelsius[2] + 
  temperaturesInCelsius[3] + temperaturesInCelsius[4] + temperaturesInCelsius[5] +
  temperaturesInCelsius[6] + temperaturesInCelsius[7] + temperaturesInCelsius[8] +
  temperaturesInCelsius[9] + temperaturesInCelsius[10] + temperaturesInCelsius[11] +
  temperaturesInCelsius[12] + temperaturesInCelsius[13] + temperaturesInCelsius[14] +
  temperaturesInCelsius[15] + temperaturesInCelsius[16] + temperaturesInCelsius[17] +
  temperaturesInCelsius[18] + temperaturesInCelsius[19] + temperaturesInCelsius[20] +
  temperaturesInCelsius[21] + temperaturesInCelsius[22] + temperaturesInCelsius[23] +
  temperaturesInCelsius[24] + temperaturesInCelsius[25] + temperaturesInCelsius[26] +
  temperaturesInCelsius[27] + temperaturesInCelsius[28] + temperaturesInCelsius[29];

const tot_temperature_in_fahrenheit = 
  temperaturesInFahrenheit[0] + temperaturesInFahrenheit[1] + temperaturesInFahrenheit[2] + 
  temperaturesInFahrenheit[3] + temperaturesInFahrenheit[4] + temperaturesInFahrenheit[5] +
  temperaturesInFahrenheit[6] + temperaturesInFahrenheit[7] + temperaturesInFahrenheit[8] +
  temperaturesInFahrenheit[9] + temperaturesInFahrenheit[10] + temperaturesInFahrenheit[11] +
  temperaturesInFahrenheit[12] + temperaturesInFahrenheit[13] + temperaturesInFahrenheit[14] +
  temperaturesInFahrenheit[15] + temperaturesInFahrenheit[16] + temperaturesInFahrenheit[17] +
  temperaturesInFahrenheit[18] + temperaturesInFahrenheit[19] + temperaturesInFahrenheit[20] +
  temperaturesInFahrenheit[21] + temperaturesInFahrenheit[22] + temperaturesInFahrenheit[23] +
  temperaturesInFahrenheit[24] + temperaturesInFahrenheit[25] + temperaturesInFahrenheit[26] +
  temperaturesInFahrenheit[27] + temperaturesInFahrenheit[28] + temperaturesInFahrenheit[29];

// Averaging Temperatures 

const avg_temperature_in_celsius = tot_temperature_in_celsius / temperaturesInCelsius.length;
const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / temperaturesInFahrenheit.length;

// Computer Print 

console.log("Total temperature in Celsius:", tot_temperature_in_celsius);
console.log("Average temperature in Celsius:", avg_temperature_in_celsius);

console.log("Total temperature in Fahrenheit:", tot_temperature_in_fahrenheit);
console.log("Average temperature in Fahrenheit:", avg_temperature_in_fahrenheit);

module.exports = {
     tot_temperature_in_fahrenheit,
     tot_temperature_in_celsius,
     avg_temperature_in_fahrenheit,
     avg_temperature_in_celsius
};