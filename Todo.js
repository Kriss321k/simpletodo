function Addtodo() {
    var newbox = document.createElement("div");     // Create Empty new children Div for Todolist
    var container = document.getElementById("divcontainer");    // Get ElementID from main container to append Div
    var input = document.getElementById("input");   // Get ElementID from Input field


    newbox.classList.add("addlist")     // Add Class to new children Div
    container.appendChild(newbox);      // Append children Div into Container
    console.log("Added")                

    var textlist = document.createElement("div");   // Create Text display field Div
    textlist.classList.add("todo")                  // Add class to display field
    textlist.innerHTML = input.value;               // Set Text to display = Input value
    newbox.appendChild(textlist);                   // Append Text display into children Div

    var trashBTN = document.createElement("div");   // Create Div for trashButton
    trashBTN.classList.add("removebtn");            // Add class for trashButton Div
    newbox.appendChild(trashBTN);                   // Append Trashbutton Div into children Div
        trashBTN.addEventListener("click", ()=>{    
            newbox.remove();                        // Add function to remove children Div for trashButton
            console.log("Removed")
        })

    input.value = "";                               // Clear Input area
    
    textlist.addEventListener("click", ()=>{
        textlist.classList.toggle("crossout")       // when text is clicked, it will be crossed out (Add-on)
    })
}

function keypress(event) {

    if(event.keyCode==13){                          // Add keypress for inputting new Todo (Enter Key code = 13) to link with Addtodo() (Add-on)
        Addtodo()
    }    
}