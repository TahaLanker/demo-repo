console.log("callback functions!!");

// Synchronous callback function example.
// This function is defined with a parameter intended for callback.
function processUserInput(first_name, last_name, callback) {
  var intro_text = "Hi, I am " + first_name + " " + last_name + ".";
  // execute the callback function
  callback(intro_text);
}

processUserInput("Taha", "Lanker", function (intro) {
  console.log("callback intro_text: " + intro);
});

//Sync Callback Example
function calculate(a, b, cb) {
  cb(a, b);
}
calculate(2, 8, function (num1, num2) {
  console.log("Sum: ", num1 + num2);
});
calculate(2, 8, function (num1, num2) {
  console.log("Product: ", num1 * num2);
});

// ================================================================== //
// Asynchronous callback function example.

let processUserInputAsync = function (first_name, last_name, callback) {
  setTimeout(function () {
    var intro_text = "Hi, I am " + first_name + " " + last_name + ".";
    // execute the callback function with our intro_text
    callback(intro_text);
  }, 2000);
};

processUserInputAsync("Toto", "Chan", function (text) {
  console.log("Async: ", text);
});

// ================================================================= //
// function getPost(postNumber, cb) {
//   fetch(`https://jsonplaceholder.typicode.com/posts/${postNumber}`)
//     .then((response) => {
//         console.log('res', response)
//       return response.json(); //converts response into json data
//     })
//     .then((data) => {
//       cb(data);
//     });
// }

// getPost(2, (data) => {
//   console.log('post data: ',data.title);
// });

//promise
fetch('https://jsonplaceholder.typicode.com/posts/3')
  .then((response) => response.json())
  .then((data) => console.log('promise data: ',data.title))
  .catch((err) => console.log('Error: ',err));
