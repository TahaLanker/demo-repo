let node_id = document.getElementById("item1");
console.log("node_id", node_id);

let node_class = document.getElementsByClassName("item2");
console.log("node_class", node_class);

let allItems = document.querySelectorAll(".item");
console.log("all items: ", allItems); // NodeList

//The NodeList returned by querySelectorAll() can be converted to a proper Javascript array
//using Array.from() method & the Spread operator
let allItems_Arr1 = Array.from(allItems);
console.log("allItems_Arr1: Array from: ", allItems_Arr1);

let allItems_Arr2 = [...allItems];
console.log("allItems_Arr2: Spread: ", allItems_Arr2);

//forEach() method that can be used to used to loop through it
//(this is different from the forEach statement used to loop arrays).
let each_Item = allItems.forEach((item) => {
  console.log("each item: ", item);
});

for (let item of allItems) {
  console.log("each item using for of: ", item.innerHTML);
}
for (let itemKey of allItems_Arr2.keys()) {
  //applied on array list not nodelist
  console.log("key: ", itemKey);
}
for (let itemValue of allItems_Arr2.values()) {
  //applied on array list not nodelist
  console.log("value: ", itemValue);
}
for (let itemEntry of allItems.entries()) {
  console.log("entries: ", itemEntry);
}

//Grab Children/Parent Node(s)
// Get child nodes
let parent_node = document.querySelector(".item-container");
parent_node.style.border = "2px solid blue";
parent_node.style.padding = "10px";

let children = parent_node.childNodes;
console.log("children: ", children);
// Get parent node
let child_node = document.querySelector(".item1");
let parental = child_node.parentNode;
console.log("parental: ", parental);

// Get closest parent up the tree
let grandparent = child_node.closest(".item-container");
console.log("closet container", grandparent);

// create new elments
let subHeading = document.createElement('h4');
let newHeading = document.createElement('h4');
let newParagraph = document.createElement("p");

// create text nodes for new elements
let h4Text = document.createTextNode("DOM Manipulation");
let subText = document.createTextNode("Learning JavaScript!!!!");
let pText =
  document.createTextNode(`DOM Gets constructed by the browser when it loads your HTML content.
                        The DOM is an object-oriented tree-like representation of the web page. 
                        The DOM basically represents the web page document so it can be traversed easily and manipulated at runtime. 
                        In other words, DOM Allows Javascript to connect to content - manipulate it, update it and style it.`);

// attach new text nodes to new elements
subHeading.append(subText);
newHeading.appendChild(h4Text);
newParagraph.appendChild(pText);

//append to body
parent_node.insertBefore(subHeading, child_node);
//document.body.append(subHeading);
document.body.append(newHeading);
document.body.append(newParagraph);

//Get/Set text to elements
// Get operation
console.log('innerText: ',document.getElementById("demoPara").innerText);
//-> This element has extra spacing and contains a span element. Also, the second span is hidden:
// the log from innerText is identical to what is rendered in the browser. There are no extra spaces and the second span is hidden

console.log('textContent: ',document.getElementById("demoPara").textContent);
//-> This element has extra                spacing and 
//-> contains 
//-> a span element. Also, the second span is hidden: I am hidden
// the log from textContent is identical to what we wrote(text in code)

console.log('innerrHtml: ',document.getElementById("demoPara").innerHTML);
//-> This element has extra                spacing and 
//-> contains 
//-> <span>a span element</span>. Also, the second span is hidden: <span style="display:none">I am hidden</span>
// the log from innerHTML is identical to what we wrote(all the code including tags)

// Set operation

const body = document.body;
const div1 = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");

div1.innerText = `Hello 
World`;
/*
<div>
  "Hello "
  <br>
  "World"
</div>
*/

div2.textContent = `Bye 
World`
/*
<div>Bye 
World</div>
*/

div3.innerHTML = `<h1>What's Up 
World</h1>`
/*
<div>Whatsup 
World</div>
*/

body.append(div1);
body.append(div2)
body.append(div3)

//Add/Remove/Toggle/Check Classes
child_node.classList.add('new-class'); //adds class
//child_node.classList.remove('item1'); //removes class
//child_node.classList.toggle('visible');

//Add/Remove attributes
child_node.setAttribute('title', 'This is Item 1');
child_node.getAttribute('title');

//dataset list -- data-id, data-new-test
//node.dataset.id, node.dataset.newTest