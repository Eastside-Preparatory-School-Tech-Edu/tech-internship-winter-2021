var months = [
    "January", "February", "March", "April", "May",
    "June", "July", "August", "September", "October",
    "November", "December"
];

// Function to get current date
function GetDate() {
    let time = "";
    let currDate = new Date();
    let afternoon = false;
    let hours = currDate.getHours();
    if (hours > 12) {
        hours = hours % 12;
        afternoon = true;
    } else if (hours == 12) {
        afternoon = true;
    }
    time = hours + ":" + ("0" + currDate.getMinutes()).slice(-2) + ":" + ("0" + currDate.getSeconds()).slice(-2);
    if (afternoon) {
        time = time += " PM"
    } else {
        time = time += " AM"
    }
    let date = months[currDate.getMonth()] + " " + currDate.getDate() + ", " + currDate.getFullYear();
    document.getElementById("currentDate").innerHTML = date;
    document.getElementById("currentTime").innerHTML = time;
    // console.log(time + "\n" + date);
}

// Function to toggle between light and dark mode
function DarkModeToggle() {
    let body = document.body;
    let date = document.getElementById("DateBox");
    let modal_obj = document.getElementById("modal-content");
    if (body.className == "light-mode") {
        body.className = "dark-mode";
        modal_obj.className = "dark-mode";
        date.className = "light-mode";
    } else {
        body.className = "light-mode";
        modal_obj.className = "light-mode";
        date.className = "dark-mode";
    }
}

// GetDate();