// Example 1:
let books = [
    {author: "Michelle Obama", title: "The light we Carry", year: 2022, pages: 336},
    {author: "Delia Owens", title: "Where the crowdads Sing", year: 2021, pages: 400},
    {author: "James Clear", title: "Atomic Habits", year: 2018, pages: 320},
    {author: "Prince Harry", title: "Spare", year: 2023, pages: 416},
    {author: "Jodi Picoult", title: "Small Great Things", year: 2016, pages: 510}
]

ans:
books.forEach(book => console.log(book));
  
// Example 2:
let ranks = ['A', 'B', 'C'];

ranks.forEach(function (e) {
    console.log(e);
});

ans:
A
B
C

// Example 3:
var counter = new Counter();
var numbers = [1, 2, 3];
var sum = 0;
numbers.forEach(function (e) {
    sum += e;
    this.increase();
}, counter);

console.log(sum); // 6
console.log(counter.current()); // 3

ans: 6 & 3.

// Example 4:
const numbers = [7, 10, 1, 5, 2];
numbers.forEach((item, i, arr) => {
  console.log(i, arr, item);
});
ans:

// example 5:
const fruits = ["apple", "orange", "mango", "banana", "kiwi"];
fruits.forEach(function(name, index) {
    console.log(`fruit name is ${name} with index number ${index}`)
});
// get all the names of fruits with their index number

// Example 6: Converting a for loop to forEach
const items = ["item1", "item2", "item3"];
const copyItems = [];

// before
for (let i = 0; i < items.length; i++) {
  copyItems.push(items[i]);
}

// after
items.forEach((item) => {
  copyItems.push(item);
});
