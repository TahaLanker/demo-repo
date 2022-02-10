//nullish coalescing///////
//0 and ''
const foo = 0 ?? "default string";
console.log("??", foo); //0
const baz = 0 || "default string";
console.log("||", baz); //'default string'

//styling console/////////
console.log(`%c foo ?? ${foo} %c baz || ${baz}`, "color:red", "color:blue");

//optioanl chaining///////
const adventurer = {
  name: "Alice",
  cat: {
    name: "Dinah",
  },
};
//   const dogName = adventurer.dog.name;
//   console.log(dogName);
const dogName_o = adventurer.dog?.name;
console.log("optional chaining: ", dogName_o);
// expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// expected output: undefined

//object shorthand///////////////
let cat = "Miaow";
let dog = "Woof";
let bird = "Peet peet";
let someObject = {
  cat,
  dog,
  bird,
};
console.log("shorthand obj: ", someObject);

//scope///////////////
//block statements
const a = 1;
function main() {
  const a = 2;
  console.log("main a: ", a);
}
main();
console.log("global a: ", a);

switch (new Date().getDay()) {
  case 6: {
    const text = "Today is Saturday";
    console.log(text);
    break;
  }
  case 0: {
    const text = "Today is Sunday";
    console.log(text);
    break;
  }
  default: {
    const text = "Looking forward to the Weekend";
    console.log(text);
  }
}

//generator fxns
function* generator(i) {
  yield i;
  yield i + 10;
}

const gen = generator(10);
console.log(gen.next().value);
// expected output: 10
console.log(gen.next());
// expected output: {value: 20, done: false}
console.log(gen.next());
// expected output: {value: undefined, done: true}

//dynamic import
let grandparent_btn = document.querySelector(".grandparent");
grandparent_btn.addEventListener('click', async function(e){
//if (true) {
  await import("./module.js").then(({ default: printModule }) => {
    printModule();
  });
})
