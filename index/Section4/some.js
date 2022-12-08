// Example 1: Check if an element exists in the array
function exists(value, array) {
    return array.some(e => e === value);
}

let marks = [4, 5, 7, 9, 10, 2];

console.log(exists(4, marks));		//true
console.log(exists(11, marks));		//false

// Example 2: Check if an array has one element that is in a range
// The following example shows how to check if any number in the marks array is in the range of (8, 10):

let mark = [4, 5, 7, 9, 10, 2];
const range = {
    min: 8,
    max: 10
};
let result = mark.some(function (e) {
    return e >= this.min && e <= this.max;
}, range);
console.log(result);  //true

// Example 3: If you call the some() method on an empty array, the result is always false regardless of any condition. For example:

let results = [].some(e => e > 0);
console.log(results);

results = [].some(e => e <= 0);
console.log(results);  //false


// Example 4: Checking whether a value exists in an array

const fruits = ["apple", "banana", "mango", "guava"];
function checkAvailability(arr, val) {
  return arr.some((arrVal) => val === arrVal);
}

checkAvailability(fruits, "kela"); // false
checkAvailability(fruits, "banana"); // true
// Example 5: Converting any value to Boolean

const TRUTHY_VALUES = [true, "true", 1];

function getBoolean(value) {
  if (typeof value === "string") {
    value = value.toLowerCase().trim();
  }

  return TRUTHY_VALUES.some((t) => t === value);
}

getBoolean(false); // false
getBoolean("false"); // false
getBoolean(1); // true
getBoolean("true"); // true
