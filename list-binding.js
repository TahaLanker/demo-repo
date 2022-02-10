let listItems = document.getElementById("list-items");
console.log(listItems);

class ListBinding {
  constructor(element) {
    this.listElement = element;
    this.textList = [];
  }

  static createListItem(text) {
    const li = document.createElement("li");
    li.textContent = text;
    return li;
  }

  update() {
    //remove existing li elements
    while(this.listElement.firstChild){
        this.listElement.removeChild(this.listElement.firstChild);
    }

    //add li
    for (const text of this.textList) {
      this.listElement.appendChild(ListBinding.createListItem(text));
    }
  }

  //add
  add(text) {
    this.textList.push(text);
    this.update();
  }

  //remove
  remove(index) {
    this.textList.splice(index, 1);
    this.update();
  }
}

//console.log(this.listElement.children);
let newListObj = new ListBinding(listItems);
newListObj.add("Item 10");
newListObj.add("Item 1");
newListObj.add("Item 0");
newListObj.remove(1);
