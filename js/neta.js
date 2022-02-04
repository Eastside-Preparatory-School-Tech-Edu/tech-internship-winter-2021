// function to edit activity list
function EditActivities() {
    let myIcon = document.getElementById("icon");
    let per1 = document.getElementById("p1");
    let per2 = document.getElementById("p2");
    let per3 = document.getElementById("p3");
    let per4 = document.getElementById("p4");
    if (per1.contentEditable == "false") {
        icon.src = "images/doneIcon.png";
        icon.alt = "Save";
        per1.contentEditable = "true";
        per2.contentEditable = "true";
        per3.contentEditable = "true";
        per4.contentEditable = "true";
        per1.style = "border: dotted 1px black;";
        per2.style = "border: dotted 1px black;";
        per3.style = "border: dotted 1px black;";
        per4.style = "border: dotted 1px black;";
    } else {
        icon.src = "images/editIcon.png";
        icon.alt = "Edit";
        per1.contentEditable = "false";
        per2.contentEditable = "false";
        per3.contentEditable = "false";
        per4.contentEditable = "false";
        alert("Edits saved!");
        per1.style = "border: none;";
        per2.style = "border: none;";
        per3.style = "border: none;";
        per4.style = "border: none;";
    }
}

function getRandActivity() {
    let myItems = document.querySelectorAll("#activitiesList dd");
    if (myItems.length === 0) {
        displayText = ("Go jump up and down and brainstorm items to add to the list");
    }
    let limit = myItems.length - 1;
    let randNum = Math.floor((Math.random() * (limit)) + 0);
    displayText = (myItems[randNum].innerText);
}