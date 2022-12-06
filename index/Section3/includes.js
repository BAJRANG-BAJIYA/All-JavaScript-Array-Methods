// Example 1:

let email = 'admin@example.com';
console.log(email.includes('@'));    //True

// Example 2:
// let str = 'JavaScript String';
// console.log(str.includes('Script'));
//True
// Example 3: It is case Sensetive so return False
let str = 'JavaScript String';
console.log(str.includes('script'));
//False

// Example 4:
[1, 2, 3].includes(2); // true
[1, 2, 3].includes(4); // false
[1, 2, 3].includes(3, 3); // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true
["1", "2", "3"].includes(3); // false
