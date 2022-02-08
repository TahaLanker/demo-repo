console.log(new Date().getHours());

//If..Else
if (new Date().getHours() < 12) {
  console.log("Good Morning!");
}
if (new Date().getHours() < 18) {
  console.log("Good Afternoon!");
} else {
  console.log("Good Evening!");
}

//Switch..case
let day;
console.log(new Date().getDay());
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
console.log(`Today is ${day}`);

//Loops
for(let i=0; i<5; i++){
  console.log('Hello for loop!');
}

let i = 1;
while (i <= 10) {
  if (i === 7) break; // jump out of the loop

  if (i === 2) {
    i++;
    continue; // jump out of the iteration
  }

  console.log(i);
  i++;
}

//////////////////////////////////
const marks = [80, 80, 50, 30, 75];
//calculate average
var total = 0;
for(let i = 0; i < marks.length; i++) {
    total += marks[i];
}
var avg = total / marks.length;
console.log('avg--', avg);

function calculateGrade(marks) {
  // your code below here 👇
  console.log(marks)
    let average = (array) => array.reduce((a, b) => a + b) / array.length;
    console.log('average-', average(marks));
    let mark = average(marks);

    if(mark > 0 && mark < 70) {
      return 'C';
    }
    else if(mark >= 70 && mark < 90) {
      console.log('B')
    }
    else if(mark > 90){
      console.log('A')
    }
    else {
      return 'default';
    }
  
  // your code above here 👆
}

console.log(calculateGrade(marks));
