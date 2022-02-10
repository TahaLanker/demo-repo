let grandparent_div = document.querySelector(".grandparent");
let parent_div = document.querySelector(".parent");
let child_div = document.querySelector(".child");

grandparent_div.addEventListener("click", function (e) {
  console.log("Grandparent clicked 1");
  grandparent_div.style.color = "white"
  // console.log(e.target);
  // the element on which the event actually happend
});

parent_div.addEventListener("click", function (e) {
  console.log("Parent clicked 1");
  // console.log(e.target);
  parent_div.style.color = "blue";
  e.stopPropagation();
});

child_div.addEventListener("click", function (e) {
  console.log("child clicked 1");
  // console.log(e.target);
  child_div.style.color = "gold";
  e.stopPropagation();
});
