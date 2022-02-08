//**Factory Function**
function createAccount(accountName, accountType, accountBalance, isActive) {
  let account = {
    name: accountName,
    type: accountType,
    balance: accountBalance,
    active: isActive,
    print: function () {
      console.log(
        `Name: ${this.name} | Type: ${this.type} | Active: ${this.active} | Bal: ${this.balance}`
      );
    },
  };

  return account;
}
const acc1 = createAccount("Taha", "Saving", 40000, true);
acc1.print();
const acc2 = createAccount("Kim", "Premium", 200000, true);
acc2.print();

//different way of factory function
function createUserAccount(name, type) {
  let user = {}; //declaring emplty obj

  user.name = name;
  user.type = type; //setting key value pair to object user
  user.accountDetails = function () {
    //sticking function to user object
    console.log(`User Account Details : ${name} | ${type}`);
  };

  return user; //return the user created
}
let user1 = createUserAccount("Taha Lanker", "Savings");
console.log(user1);
user1.accountDetails();

//**Factory function Using Constructor Function (new)**
function Person(first, last, age, nationality) {
  //let this = {} -- creates this object internally
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.nationality = nationality;
  this.print = function () {
    console.log(
      `This is ${first} ${last}. I am ${age} years old. My nationality is ${nationality}.`
    );
  };
  //in this we don't have to 'return' explixcitly
}
// Create a Person object
const myFather = new Person("Arther", "Weasley", 50, "British");
const myMother = new Person("Molly", "Weasley", 45, "Amercian");
console.log(myFather);
myFather.print();
myMother.print();

//**Factory Function**
function createCarObj(name, model, colour) {
  let carObj = {};
  carObj.name = name;
  carObj.model = model;
  carObj.colour = colour;

  carObj.print = function () {
    console.log(`This is ${name} | model: ${model} | colour: ${colour}`);
  };

  return carObj;
}

let car1 = createCarObj("BMW", "xyz", "black");
car1.print();
let car2 = createCarObj("Audi", "abc", "white");
car2.print();

//**Contructor Function**
function CarObj(name, model, colour) {
  this.name = name;
  this.model = model;
  this.colour = colour;
  this.print = function () {
    console.log(`This is ${name} | model: ${model} | colour: ${colour}`);
  };
}

let car3 = new CarObj("BMW", "xyz", "black");
car3.print();
let car4 = new CarObj("Audi", "abc", "white");
car4.print();

//**call, apply, bind**

//call & apply: It can be used to invoke (call) a method with an owner object as an argument (parameter). Invoked immediatedy
//when called
//**Difference**
// The call() method takes arguments separately
// The apply() method takes arguments as an array.
function fullName(age, school) {
  console.log(`My name is ${this.firstName} ${this.lastName}`);
  console.log(`I am ${age} years old. I study in ${school}.`);
}
const person1 = {
  firstName: "Taha",
  lastName: "Lanker",
};
const person2 = {
  firstName: "Mary",
  lastName: "Crawley",
};

// This will return "John Doe":
fullName.call(person1, 20, "PCHS");
fullName.apply(person2, [18, "Churchill School"]);

// With the bind() method, an object can borrow a method from another object.
// The example below creates 2 objects (person and member).
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};
const member = {
  firstName: "Hege",
  lastName: "Nilsen",
};
let newName = person.fullName.bind(member); //returns function
newName(); 
//Call/apply call the function immediately,
//whereas bind returns a function that, when later executed,
//will have the correct context set for calling the original function.

//**Methods of Object constructor**
let obj_new = { name: "Taha", age: 28 };
//keys**
console.log(Object.keys(obj_new)); // ["name","age"]
//values**
console.log(Object.values(obj_new)); // ["taha","28"]
//entries**
console.log(Object.entries(obj_new)); // [['name', 'Taha'], ['age', 28]]
//in**
if ("havePets" in obj_new) {
  console.log("Yes 'havePets' is a propery of the object");
} else {
  console.log("No 'havePets' is not a propery of the object");
}
//assign**
let account = {
  name: "Taha",
  type: "Savings",
  print: function () {
    console.log(`Name:  ${this.name} | Account Type: ${this.type}`);
  },
};
// Old way
//   let clonedAccount = {};
//   for (let key in account) {
//     clonedAccount[key] = account[key];
//   }
// New way
let account_new = {};
let clonedAccount = Object.assign(account_new, account); //target,source
//cloning using spread operator
//let clonedAccount = { ...account };
console.log("account", account);
console.log("clonedAccount", clonedAccount);
