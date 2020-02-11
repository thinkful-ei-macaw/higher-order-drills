"use strict"
function repeat(fn, n) {
  for(let i=0; i < n; i++) {
    fn();
  }
}

const hello = function hello() {
  console.log('Hello World');
}

const goodbye = function goodbye() {
  console.log('Goodbye World');
}

repeat(hello, 5);
repeat(goodbye, 5);

function filter(arr, fn) {
  let newArray = [];
  for( let i =0; i < arr.length; i++){
    if (fn(arr[i]) === true){
      newArray.push(arr[i]);
    }
  }
  return newArray;
}




// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES
console.log(filter(myNames, function(name) {
  return name[0] === 'J';
}));

function hazardWarningCreator(typeOfWarning){
  let warningCounter = 0;
  return function(location){
    warningCounter++;
    console.log(`"Danger! There is a ${typeOfWarning} hazard at ${location}!"`);
    console.log(`"The ${typeOfWarning} hazard alert has triggered ${warningCounter} times(s) today!"`);
  }
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const snowWarning = hazardWarningCreator('Snow on the melt');
const lavaWarning = hazardWarningCreator('Lava in the homes');

rocksWarning('Seattle');
rocksWarning('Brumuda');
snowWarning('Texas');
snowWarning('Alaska');
lavaWarning('Washington');
lavaWarning('Home');