console.log('Learning JS!!');

//**Variables**

//Primitives (Value Type)
let myName, myAge;
myName = 'Taha';
console.log(myName);
console.log(typeof myName);
myAge = 18;
console.log(myAge);
console.log(typeof myAge);

//Non-primitives (Reference Type)

// let firstName = 'Taha';
// let lastName = 'Lanker';
// let favSubject = 'Javascript';
// function userDetails() {
//   console.log(`${firstName} ${lastName} loves ${favSubject}`);
// }
// userDetails();

//**Object**
let user = {
  firstName: 'Taha',
  lastName: 'Lanker',
  favSubject: 'Javascript',
  userDetails: function () {
    console.log(`${this.firstName} ${this.lastName} loves ${this.favSubject}!`);
  }
};
console.log(user);
//calling object fxn
user.userDetails();

//adding new property to object
user.age = 29;
console.log('user with new property', user);
//delete property
delete user.age;
console.log('user without deleted property', user);

//**Array**
let myArray = ['Taha', 18, true, undefined, null, ['one','two'], {middleName: 'Manzoor'}];
console.log(myArray);

//**Function**
function greeting (name, greet) {
  console.log(`${greet}! from ${name}`);
}
greeting('Taha', 'Merhaba');

//**Math Object**
console.log('**Math**')
console.log(Math.floor(45.95)); //  45
console.log(Math.ceil(7.004)); // 8
console.log(Math.max(1, 3, 2)); // 3
console.log(Math.min(2, 3, 1)); // 1

//**Date**
const now = new Date(); // current date time
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString());
// const date1 = new Date('Sep 09 2021 11:15');
// const date2 = new Date(2021, 8, 10, 11, 0);
// console.log(date1);
// console.log(date2);
let year = now.getFullYear();
let month = now.getMonth();
let date = now.getDate();
let hours = now.getHours();
let min = now.getMinutes();
console.log(`${date}/${month}/${year} ${hours}:${min}`);
