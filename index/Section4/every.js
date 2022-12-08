// Example 1:  whether all the array elements are the even numbers
let number1 = [1, 3, 5];
let isEven = number1.every(function (e) {
    return e % 2 == 0;
});
console.log(isEven);   //false

// Example 2: tests if all the array elements are the odd numbers.
let number2 = [1, 3, 5];

let isOdd = number2.every(function (e) {
    return Math.abs(e % 2) == 1;
});
console.log(isOdd);   //true

// Example 3: The following example tests whether all elements in the numbers array is in the range specified by the min and max of the range object.

let numbers = [1, 3, 5];
let range = {
    min: 0,
    max: 10
};
let isInRange = numbers.every(function (e) {
    return e >= this.min && e <= this.max;
}, range);
//true
// Example 4: If you call the every() method on an empty array, the method will always return true for any condition. For example:
let gtZero = [].every(e => e > 0); // any condition
let ltZero = [].every(e => e < 0); // any condition

console.log('gtZero:', gtZero);
console.log('ltZero:', ltZero);
Output:gtZero: true
ltZero: true

// Example 5: The following example tests whether all elements in the array are bigger than 10.

function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough); // false
[12, 54, 18, 130, 44].every(isBigEnough); // true

// Example 6: The following example tests if all the elements of an array are present in another array.

const isSubset = (array1, array2) =>
  array2.every((element) => array1.includes(element));

console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false

// Example 7: The following examples tests the behavior of the every method when the array is modified.

// ---------------
// Modifying items
// ---------------
let arr = [1, 2, 3, 4];
arr.every((elem, index, arr) => {
  arr[index + 1]--;
console.log(`[${arr}][${index}] -> ${elem}`);
  return elem < 2;
});

// Loop runs for 3 iterations, but would
// have run 2 iterations without any modification
//
// 1st iteration: [1,1,3,4][0] -> 1
// 2nd iteration: [1,1,2,4][1] -> 1
// 3rd iteration: [1,1,2,3][2] -> 2

// ---------------
// Appending items
// ---------------
arr = [1, 2, 3];
arr.every((elem, index, arr) => {
  arr.push("new");
  console.log(`[${arr}][${index}] -> ${elem}`);
  return elem < 4;
});

// Loop runs for 3 iterations, even after appending new items
//
// 1st iteration: [1, 2, 3, new][0] -> 1
// 2nd iteration: [1, 2, 3, new, new][1] -> 2
// 3rd iteration: [1, 2, 3, new, new, new][2] -> 3

// ---------------
// Deleting items
// ---------------
arr = [1, 2, 3, 4];
arr.every((elem, index, arr) => {
  arr.pop();
  console.log(`[${arr}][${index}] -> ${elem}`);
  return elem < 4;
});

// Loop runs for 2 iterations only, as the remaining
// items are `pop()`ed off
//
// 1st iteration: [1,2,3][0] -> 1
// 2nd iteration: [1,2][1] -> 2
