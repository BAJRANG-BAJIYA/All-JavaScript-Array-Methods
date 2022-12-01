//Example1:

//const numbers = [10, 20, 30];
//const last = numbers.pop();
//console.log(last); // 30
//console.log(numbers.length); // 2


//example:2
// const myFish = ["angel", "clown", "mandarin", "sturgeon"];
// const popped = myFish.pop();

// console.log(myFish); // ['angel', 'clown', 'mandarin' ]
// console.log(popped); // 'sturgeon'

// example3: Calling pop on non array object.

// const arrayLike = {
//   length: 3,
//   unrelated: "foo",
//   2: 4,
// };
// console.log(Array.prototype.pop.call(arrayLike));
// 4
// console.log(arrayLike);
// { length: 2, unrelated: 'foo' }

// const plainObj = {};
// There's no length property, so the length is 0
// Array.prototype.pop.call(plainObj);
// console.log(plainObj);
// { length: 0 }

// Example 4:

// const collection = {
//   length: 0,
//   addElements(...elements) {
    // obj.length will be incremented automatically
    // every time an element is added.

    // Returning what push returns; that is
    // the new value of length property.
//     return [].push.call(this, ...elements);
//   },
//   removeElement() {
    // obj.length will be decremented automatically
    // every time an element is removed.

    // Returning what pop returns; that is
    // the removed element.
//     return [].pop.call(this);
//   },
// };

// collection.addElements(10, 20, 30);
// console.log(collection.length); // 3
// collection.removeElement();
// console.log(collection.length); // 2


// Example5: calling pop on empty array
// const numbers = [];
// const last = numbers.pop();

// console.log(last); //undefined
// console.log(numbers.length);  //0


// example6: Using pop() method with array-like objects

let greetings = {
    0: 'Hi',
    1: 'Hello',
    2: 'Howdy',
    length: 2,
    removeLast() {
      return [].pop.call(this);
    },
  };
  
  let greting = greetings.removeLast();
  
  console.log(greting);
  console.log(greetings);
  
  // Output:
  // 'Howdy'
  
  // {
  //   '0': 'Hi',
  //   '1': 'Hello',
  //   length: 2,
  //   removeLast: [Function: removeLast]
  // }
  