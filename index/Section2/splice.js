// Example 1: Remove 0 (zero) elements before index 2, and insert "drum"

// const myFish = ["angel", "clown", "mandarin", "sturgeon"];
// const removed = myFish.splice(2, 0, "drum");

// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed is [], no elements removed

// Example 2 :Remove 0 (zero) elements before index 2, and insert "drum" and "Guitar"

// const myFish = ["angel", "clown", "mandarin", "sturgeon"];
// const removed = myFish.splice(2, 0, "drum", "guitar");

// myFish is ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
// removed is [], no elements removed


// Example 3: Remove 1 element at index 3
// const myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];
// const removed = myFish.splice(3, 1);

// myFish is ["angel", "clown", "drum", "sturgeon"]
// removed is ["mandarin"]


// Example 4: Remove 1 element at index 2, and insert "trumpet"

// const myFish = ["angel", "clown", "drum", "sturgeon"];
// const removed = myFish.splice(2, 1, "trumpet");

// myFish is ["angel", "clown", "trumpet", "sturgeon"]
// removed is ["drum"]

// Example 5: Remove 2 elements from index 0, and insert "parrot", "anemone" and "blue"

// const myFish = ["angel", "clown", "trumpet", "sturgeon"];
// const removed = myFish.splice(0, 2, "parrot", "anemone", "blue");

// myFish is ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// removed is ["angel", "clown"]


// Example 6: Remove 2 elements, starting from index 2

// const myFish = ["parrot", "anemone", "blue", "trumpet", "sturgeon"];
// const removed = myFish.splice(2, 2);

// myFish is ["parrot", "anemone", "sturgeon"]
// removed is ["blue", "trumpet"]

// Example 7: Remove 1 element from index -2

// const myFish = ["angel", "clown", "mandarin", "sturgeon"];
// const removed = myFish.splice(-2, 1);

// myFish is ["angel", "clown", "sturgeon"]
// removed is ["mandarin"]
// Example 8: Remove all elements, starting from index 2

// const myFish = ["angel", "clown", "mandarin", "sturgeon"];
// const removed = myFish.splice(2);

// myFish is ["angel", "clown"]
// removed is ["mandarin", "sturgeon"]

// Example 9: Using splice() on sparse arrays

const arr = [1, , 3, 4, , 6];
console.log(arr.splice(1, 2)); // [empty, 3]
console.log(arr); // [1, 4, empty, 6]

// example 10: Calling splice() on non-array objects

const arrayLike = {
  length: 3,
  unrelated: "foo",
  0: 5,
  2: 4,
};
console.log(Array.prototype.splice.call(arrayLike, 0, 1, 2, 3));
// [ 5 ]
console.log(arrayLike);
// { '0': 2, '1': 3, '3': 4, length: 4, unrelated: 'foo' }
