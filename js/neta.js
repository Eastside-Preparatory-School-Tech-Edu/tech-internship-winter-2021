// function to edit activity list
function EditActivities() {
    let myIcon = document.getElementById("icon");
    let myList = document.getElementById("activitiesList");
    if (myList.contentEditable == "false") {
        icon.src = "images/doneIcon.png";
        icon.alt = "Save";
        myList.contentEditable = "true";
        myList.style = "border: dotted 1px black;";
    } else {
        icon.src = "images/editIcon.png";
        icon.alt = "Edit";
        myList.contentEditable = "false";
        alert("Edits saved!");
        myList.style = "border: none;";
    }
}

function getRandActivity() {
    let myItems = document.querySelectorAll("#activitiesList li");
    let limit = myItems.length - 1;
    let randNum = Math.floor((Math.random() * (limit)) + 0);
    alert(myItems[randNum].innerText);
}