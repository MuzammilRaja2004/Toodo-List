let list = document.getElementById('list')
function Add__Todo__list() {
    let todolist = document.getElementById('todo__id')
    if (todo__id.value === "") {
        alert("Please fill the task field")
    }
    else{
        // Creat Li Tag Items And TextNode
        let litext = document.createTextNode(todo__id.value)
        let li = document.createElement('li')
        li.appendChild(litext)
        list.appendChild(li)
        todo__id.value = ""


        // create Div
        var divs = document.createElement('div')
        li.appendChild(divs)

        // Creat Edit Button
        let editbtn = document.createElement('button')
        let edittext = document.createTextNode('Edit')
        editbtn.setAttribute("class", "Edit")
        editbtn.setAttribute("onclick", "Edit_Items(this)")
        editbtn.appendChild(edittext)
        li.appendChild(editbtn)
        divs.appendChild(editbtn)

        // Creat Delete Button
        let deltbtn = document.createElement('button')
        let delttext = document.createTextNode('delete')
        deltbtn.setAttribute("class", "dltbtn")
        deltbtn.setAttribute("onclick", "deleteitem(this)")
        deltbtn.appendChild(delttext)
        li.appendChild(deltbtn)
        divs.appendChild(deltbtn)
    }
}

// Delete Button Creat Function
function deleteitem(e) {
    e.parentNode.remove()
}

// Delete All Button Creat Function
function Delete__All() {
    list.innerHTML = ""
}
// Edit Button Creat Function
function Edit_Items(e) {
    var value = prompt("Enter Updated Value", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = value

}