//******#Rule 1**********

{
  /* <h1>How is 𝑡𝒽𝑖𝓈 determined in a regular function?</h1>
<p>
  <strong>CORE Concept: </strong>For regular functions, what will the
  keyword <code>this</code> point to, is determined entirely by
  <em><strong>HOW</strong> THE FUNCTION WAS CALLED!!</em>.
</p>
<p>
  <strong>Rules 1:</strong> if we simply execute a regular function
  (without explicity or implicity bining the this to any object) the
  <code>this</code> points to the <code>global</code> object , which in
  browser is the <code>Window</code> object. 
</p>*/
}
/**
 * When you are trying to determine the this, in your JS code, you need to look at
 * how the function was called
 */
/**
 * Rule 1: if we simply execute a regular function, without explicity or implicity
 * bining the this to any object,
 * the this points to the global object in browser which is the Window object.
 */
// function sayGoodbye() {
//   console.log("Rule 1 Good bye! ", this);
// }
// function sayHello() {
//   console.log("Rule 1 Helloo! ", this);
//   sayGoodbye();
// }
// sayHello();

//*****#Rule 2****** */

// <h1>Rule 2 : the implicit binding of  𝑡𝒽𝑖𝓈</h1>

// <p>
//   When a method is called as a porperty of an object, then the <code>this</code> implicity
//   refers to the parent object.

//   If a function attached to an object is called by
//   <code>objectname.functionname</code> syntax, the <code>this</code> points to the
//   object to which the function is attached.
// </p>

// function sayHello() {
//   console.log("Hello! from ", this.name);
// }
// var john = {
//   name: "John Doe",
//   age: 30,
//   sayName: function () {
//     // this.age = 35;
//     console.log("Rule2: My name is ", this.name);
//   },
//   sayHello: sayHello
// };
// var james = {
//   name: "James Bond",
//   age: 27,
//   sayName: function () {
//     console.log("Rule 2: My name is ", this.name);
//   },
//   sayHello: sayHello
// };
// john.sayName();
// john.sayHello();
// james.sayName();
// james.sayHello();

//**#Rule 3 */

{
  /* <h1>Rule 3 : the explicit binding of  𝑡𝒽𝑖𝓈 using <code>call</code>/<code>apply</code></h1>
<p>
When a function is called using the <code>call</code> or <code>apply</code> methods, then <code>this</code> refers to 
the value passed as the first argument of the call or apply function.
</p> */
}
// function sayHello() {
//   console.log("Rule3: Hello! ", this);
// }
// var john = {
//   name: "John Doe",
//   age: 30
// };
// var james = {
//   name: "James Bond",
//   age: 30
// };
// sayHello.call(james);
// sayHello.call(john);

//***#Rule 4 */

{
  /* <h1>Rule 4 : the hard binding of  𝑡𝒽𝑖𝓈 using <code>bind</code></h1>
<p>
  <code>bind</code> creates a new function hard bound to the object that we have specified.
</p> */
}
// function sayHello() {
//   console.log("Rule 4: Hello! ", this, this.name);
// }
// var John = {
//   name: "John Doe",
//   age: 30
// };
// var johnSayHello = sayHello.bind(John);
// johnSayHello();

//**#Rule 5*** */

{
  /* <h1>Rule 5 : Binding 𝑡𝒽𝑖𝓈 using the <code>new</code> keyword</h1>
<p>
When a function is called with the <code>new</code> operator, it gives us a brand new object & the
 <code>this</code> refers to the newly created object.
</p> */
}
// function Person(name) {
//   this.name = name;
//   this.sayHello = function () {
//     console.log("Rule 5: Hello! ", this, this.name);
//   };
// }
// var james = new Person("James Bond");
// var john = new Person("John Doe");
// john.sayHello();
// james.sayHello();

//**#Rule 6***** */

{
  /* <h1>Arrow Functions does not bind 𝑡𝒽𝑖𝓈 at all</h1>
<p>
In an arrow function, the <code>this</code> keyword behaves like any other variable, the <code>this</code>
gets lexically resolved from one of its parents scope (Just like any other variable).  
</p>
<p>
 - if its a regular function, how the function is invoked matters to determine <code>this</code>!!
 - if its an arrow function, where the function sits (lexically) matters to determine <code>this</code>, no matter how it was invoked!!
</p>
<p>
- when you want the <code>this</code> keyword to resolve lexically from one of its parents scope, use arrow function
- when you want the <code>this</code> keyowrd to resolve dynamacally at call site, use the regular functions.
</p> */
}

// var john = { name: "John Doe", age: 25 };
// var james = { name: "James Bond", age: 30 };

// function sayRegularHello() {
//   console.log("Regular Hello ", this);
// }
// function sayRegularWelcome() {
//   sayRegularHello();
//   console.log("Rule6: Regular Welcome ", this);
// }
// function sayRegularName() {
//   sayRegularWelcome();
//   console.log("Rule6: My Regular name is ", this.name, this);
// }
// sayRegularName();

// var sayArrowHello = () => {
//   console.log("Rule6: Arrow Hello ", this);
// };
// var sayArrowWelcome = () => {
//   sayArrowHello();
//   console.log("Rule6: Arrow Welcome ", this);
// };
// function sayArrowName() {
//   sayArrowWelcome();
//   console.log("Rule6: My Arrow name is ", this);
// }
// sayArrowName();

//example 2
var john = { name: "John Doe", age: 25 };

var sayArrowHello = () => {
  console.log("Arrow Hello ", this); //global
};

function sayRegularHello() {
  console.log("Regular Hello ", this); //global
}

function sayRegularName() {
  console.log("My Regular name is ", this.name, this); // points to john because of line no.172 john obj
  sayRegularHello();
  sayArrowHello();
  var sayArrowGoodBye = () => {
    console.log("Arrow GoodBye ", this); // lexically resolves to john
  };
  sayArrowGoodBye();
}
sayRegularName.call(john);
