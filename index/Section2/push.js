
//example 1:

// let numbers = [10, 20, 30];
// const length = numbers.push(40);
// console.log(length);
// console.log(numbers);

//ans:	4
//	[ 10, 20, 30, 40 ]

//example 2:
// let numbers = [10, 20, 30];
// const length = numbers.push(40, 50);

// console.log(length);
// console.log(numbers);

// ans:	5
// 	[ 10, 20, 30, 40, 50 ]

// example 3:

// let colors = ['red', 'green', 'blue'];
// let cmyk = ['cyan', 'magenta', 'yellow', 'back'];

// for (const color of cmyk) {
//   colors.push(color);
// }

// console.log(colors);

// ans:['red', 'green', 'blue', 'cyan', 'magenta', 'yellow', 'back']

// example 4:

// let colors = ['red', 'green', 'blue'];
// let cmyk = ['cyan', 'magenta', 'yellow', 'back'];

// colors.push(...cmyk);
// console.log(colors);

// ans:['red', 'green', 'blue', 'cyan', 'magenta', 'yellow', 'back']

// example 5:

// let greetings = {
//   0: 'Hi',
//   1: 'Hello',
//   length: 2,
//   append(message) {
//     [].push.call(this, message);
//   },
// };
// greetings.append('Howdy');
// greetings.append('Bonjour');

// console.log(greetings);

// ans:{
//   '0': 'Hi',
//   '1': 'Hello',
//   '2': 'Howdy',
//   '3': 'Bonjour',
//   length: 4,
//   add: [Function: add]
// }

// example 6:
let greetings = {
0: 'Hi',
1: 'Hello',
length: 2,
append() {
[].push.call(this, ...arguments);
},
};
greetings.append('Howdy', 'Bonjour');

console.log(greetings);

// ans:
// let greetings = {
//   0: 'Hi',
//   1: 'Hello',
//   length: 2,
//   append(message) {
//     [].push.call(this, message);
//   },
// };


