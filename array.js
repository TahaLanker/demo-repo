//**push & pop** = add remove from end of array
let arr_1 = [1, 2, 3, 4, 5];
console.log("push", arr_1.push(8)); //returns length of array
console.log("new arr push", arr_1);
console.log("pop", arr_1.pop()); //returns element from end
console.log("new arr pop", arr_1);

//**unshift & shift** = add remove from beginning of array - changes index of elements
let arr_2 = [1, 2, 3, 4, 5];
console.log("unshift", arr_2.unshift(8)); //returns length of array
console.log("new arr unshift", arr_2);
console.log("shift", arr_2.shift()); //returns element from beginning
console.log("new arr shift", arr_2);

//add at the end and remove from beginning
let arr_3 = [1, 2, 3, 4, 5];
console.log("add at end - push ", arr_3.push(10));
console.log("new array after adding element ", arr_3);
console.log("remove from start - shift ", arr_3.shift());
console.log("new array after removing element ", arr_3);

//**slice**
// The slice() method returns selected elements in an array, as a new array.
// The slice() method selects from a given start(inclusive), up to a given end (exclusive).
// The slice() method does not change the original array.
const fruits_1 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits_1.slice(1, 3);
console.log("citrus: ", citrus); //[orange, lemon]

//**splice**
const fruits_2 = ["Banana", "Orange", "Apple", "Mango"];
fruits_2.splice(2, 0, "Lemon", "Kiwi");
// At position 2, add 2 elements:
console.log("splice fruit: ", fruits_2); //Banana,Orange,Lemon,Kiwi,Apple,Mango

const fruits_3 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// At position 2, remove 2 items:
fruits_3.splice(2, 2);
console.log(fruits_3); //Banana,Orange,Kiwi

const fruits_4 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// At position 2, remove 2 items:
fruits_4.splice(2, 4, "Papaya");
console.log(fruits_4); //Banana,Orange,Papaya

//** Array Methods**

//includes
const ex1 = ["Banana", "Orange", "Apple", "Mango"];
console.log("includes: ", ex1.includes("Mango"));
console.log("includes: ", ex1.includes("Banana", 3)); //Check if arr contains "Banana", starting from position 3

//forEach
//The forEach() method calls a function for each element in an array.
ex1.forEach((item, index) => {
  console.log(`Fruit Available ${index}: `, item);
});

let user_arr = [
  { name: "Taha", balance: 1000 },
  { name: "Atifa", balance: 10 },
  { name: "Afreen", balance: 100 },
  { name: "Laiba", balance: 1500 },
];

//filter
//The filter() method creates a new array filled with elements that pass a test provided by a function.
//The filter() method does not change the original array.
let filteredArr = user_arr.filter((item) => {
  return item.balance <= 100;
});
console.log("filteredArr: ", filteredArr);

const ages = [32, 33, 16, 40];
let filteredArr1 = ages.filter((age) => {
  return age >= 18;
});
console.log("filteredArr1: ", filteredArr1);

//map
// map() creates a new array from calling a function for every array element.
// map() calls a function once for each element in an array.
// map() does not change the original array.
let mappedArray = user_arr.map((item) => {
  return item.balance;
});
console.log("mappedArray: ", mappedArray);

const numbers = [4, 9, 16, 25];
console.log("map: ", numbers.map(Math.sqrt));

//find
//The find() method returns the value of the first element that passes a test.
let foundItem = user_arr.find((item) => {
  return item.balance === 100;
});
console.log("foundItem: ", foundItem);

//some
// The some() method checks if any array elements pass a test (provided as a function).
// The some() method executes the function once for each array element:
// If the function returns true, some() returns true and stops.
// If the function returns false, some() returns false and stops.
let hasSomeItem = user_arr.some((item) => {
  return item.balance <= 100;
});
console.log("hasSomeItem", hasSomeItem);

//every
let hasEveryItem = user_arr.every((item) => {
  return item.balance <= 100;
});
console.log("hasEveryItem", hasEveryItem);

//reduce
// The reduce() method executes a reducer function for array element.
// The reduce() method returns a single value: the function's accumulated result.

let reducedArr = user_arr.reduce((currentPt, item) => {
  return currentPt + item.balance;
}, 0);
console.log("reducedArr: ", reducedArr);

const numbers_arr = [15.5, 2.3, 1.1, 4.7];
console.log("reduces arr: ", numbers_arr.reduce(getSum, 0));

function getSum(total, num) {
  return total + Math.round(num);
}

let developers_array = [
  {
    first: "John",
    last: "Doe",
    dept: "FE",
    commits: 10,
  },
  {
    first: "Jane",
    last: "Doe",
    dept: "BE",
    commits: 15,
  },
  {
    first: "James",
    last: "bond",
    dept: "BE",
    commits: 8,
  },
];

let reduced_array = developers_array.reduce(
  function (acc, item) {
    item.dept === "BE" ? acc.BE.push(item.first) : acc.FE.push(item.first);
    return acc;
  },
  { FE: [], BE: [] }
);

console.log(reduced_array);

//sort
let arr_sort = [21, 12, 33, 14, 15, 96, 7];
let arr2 = arr_sort.sort(function (a, b) {
  console.log("Sorting ", a, b);
  if (b < a) return 1;
  // we retrun a +ve number if we need b to come first
  else if (a < b) return -1;
  // we retrun a -ve number if we need a to come first
  else return 0;
});
console.log("sorted array- ", arr2);
