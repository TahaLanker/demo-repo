//**Arrow functions**

//Imlicit return
let newGreet = (greeting, name) => `${greeting}, from ${name}!`;
console.log(newGreet("Hello", "Taha"));

//Shorthand object
const userData = (name, email) => ({
  name,
  email,
});

console.log(userData("Taha", "taha@email.com"));

//var vs let
//var: fxn scope & let: block scope
function forWithVar() {
  for (var i = 0; i < 5; i++) {
    //same 'i' used for every iteration
    console.log("i: ", i);
    setTimeout(() => {
      console.log("i: ", i); // by the time this runs, i = 5 & there is just one i
    }, 1000);
  }
}
forWithVar();

function forWithLet() {
  for (let j = 0; j < 5; j++) {
    //different 'j' counter for every new iteration
    console.log("j: ", j);
    setTimeout(() => {
      console.log("j: ", j);
      // because of block scope, every iteration gets a separate j
      // 'let' automatically creates a new j for each iteration
      // instead of creating one j for the whole loop,
      // we have brand new j's for each iteration. Thanks to block scope.
    }, 1000);
  }
}
forWithLet();

//const
// const name = "Vivek";
// name = "Akash"; // Uncaught TypeError: Assignment to constant variable.

const user_const = {
  name: "Vivek",
};
user_const.name = "Akash"; //can change property value in const but can't change the whole value(new ressigning of const variable)
console.log(user_const); // {name: 'Akash'}

const user_const_arr = ["a", "b", "c"];
user_const_arr.push("d");
console.log(user_const_arr); // ['a', 'b', 'c', 'd']

//rest operator
// rest operator helps collect all the arguments in an array
function doSomething(first, ...rest) {
  console.log(first, rest); // rest is guarenteed to be an array
}
doSomething(1, 2, 3, 4, 5);

function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}
let sum_x = sum(4, 9, 16, 25, 29, 100, 66, 77);
console.log("...rest sum: ", sum_x);

//spread operator
// The spread operator explodes array or objects in place
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log("...spread array ", numbersCombined);

let user_spread = {
  firstName: "Vivek",
  lastName: "Agarwal",
};
console.log({
  ...user_spread,
  fullName: `${user_spread.firstName} ${user_spread.lastName}`,
});

//**Destructuring Arrays and Objects**

//eg1 destructure array
const arr_des = [1, 3, 5, 7, 9];
const [index1, index2, ...rest] = arr_des;
console.log(index1, index2, rest);

//eg2 destructure obj
let obj = {
  a: 10,
  b: 20,
  c: 30,
  d: 40,
};
const { a: item1, b: item2, ...restObj } = obj;
console.log(item1); // 10
console.log(item2); // 20
console.log(restObj); // {c: 30, d: 40}

//eg3 destructure obj
let user_99 = {
  firstName: "Vivek",
  lastName: "Agarwal",
  age: 38,
  posts: [
    { title: "Post 1", comments: 10 },
    { title: "Post 2", comments: 11 },
  ],
};
const { firstName: first, lastName, age = 40 } = user_99;
console.log(first, lastName, age);
// only the deepest keys become variables
const {
  posts: [{ title, comments }, { title: t2 }],
} = user_99;
console.log(`posts: (${title}| ${comments}), ${t2}`);

//eg4
// a function that returns an array of a number and a function
function useState(num) {
  let count = num;
  let setCount = function () {
    console.log(`setting the count: ${count}`);
  };

  return [count, setCount];
}
// way 1
let resultArr = useState(20);
let resultCount = resultArr[0];  //count variable
let resultSetFunction = resultArr[1];  //setCountFxn
resultSetFunction(); //-> setting the count: 20
// the destructuring way, super neat
let [count, setCount] = useState(30);
setCount(); //-> setting the count: 30
