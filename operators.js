let x = 10,
y = 5;

console.log(x ** y); //x to the power y (exponentiation)

//**Increment Operator**
console.log('x', x);
console.log('post increment', x++); //return value before incrementing
console.log('x', x);

console.log('y', y);
console.log('pre increment', ++y);  //increments value before returning value

//**Logical Operators**
//basic skills
let knowsHTML = true;
let knowsCSS = true;
let knowsJS = true;

// advanced skills
let knowsReact = true;
let knowsAngular = false;
let knowsVue = false;

let isJuniorDeveloper = knowsHTML && knowsCSS && knowsJS;
let isSeniorDeveloper = knowsReact || knowsAngular || knowsVue;

// if they are not junior && they are not sernior they are rejected
// let isRejected = !isJuniorDeveloper && !isSeniorDeveloper;
// not (either junior or senior) they are rejected
let isRejected = !(isJuniorDeveloper || isSeniorDeveloper);

console.log('isJuniorDeveloper: ', isJuniorDeveloper);
console.log('isSeniorDeveloper: ', isSeniorDeveloper);
console.log('isRejected: ', isRejected);

//**Truthy/Falsey Values**
let value1 = ""; //falsey
let value2 = "Taha"; //truthy

//with Logial OR
// let a = false, b = 0, c = '';
// console.log(a || b || c); //return ''(empty string) i.e. last falsey value
let a = false, b = 'Taha', c = true;
console.log(a || b || c); //return Taha i.e. first truthy value

//with Logial AND
// let d = 'Taha', e = 0, f = '';
// console.log(d && e && f); //return 0 i.e. first falsey value
let d = 'false', e = '0', f = true;
console.log(d && e && f); //return true i.e. last truthy value
