let lists = document.getElementById("list");
function Add__Todo__list() {
  let todolist = document.getElementById("todo__id");
  if (todo__id.value === "") {
    alert("Please fill the task field");
  } else {
    // Creat Li Tag Items And TextNode
    litext = document.createTextNode(todo__id.value);
    pElement = document.createElement("p");
    pElement.appendChild(litext);
    li = document.createElement("li");
    li.appendChild(pElement);
    lists.appendChild(li);
    todo__id.value = "";

    // create Div
    var divs = document.createElement("div");

    // Creat Edit Button
    editbtn = document.createElement("button");
    edittext = document.createTextNode("Edit");
    editbtn.setAttribute("class", "Edit");
    editbtn.setAttribute("onclick", "Edit_Items(this.parentNode)");
    editbtn.appendChild(edittext);
    // li.appendChild(editbtn)
    divs.appendChild(editbtn);

    // Creat Delete Button
    let deltbtn = document.createElement("button");
    let delttext = document.createTextNode("delete");
    deltbtn.setAttribute("class", "dltbtn");
    deltbtn.setAttribute("onclick", "deleteitem(this.parentNode)");
    deltbtn.appendChild(delttext);
    // li.appendChild(deltbtn)
    divs.appendChild(deltbtn);
    li.appendChild(divs);
  }
}

// Delete Button Creat Function
function deleteitem(e) {
  e.parentNode.remove();
}

// Delete All Button Creat Function
function Delete__All() {
  lists.innerHTML = "";
}
// Edit Button Creat Function
function Edit_Items(e) {
  let textForEdit = e.previousSibling;
  if (textForEdit.style.border !== "1px solid green"){
    textForEdit.setAttribute("contenteditable", "true");
    textForEdit.style.border = "1px solid green";
  }
  else {
    textForEdit.removeAttribute("contenteditable");
    textForEdit.style.border = "none";
  }
}
