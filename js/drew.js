/* declare main variables */
let mainHours, mainMinutes, mainSeconds;
let timerEvents = [];
var popupModal;
var closeButton;

/* ___________ Optional OOP stuff I would like to have implemented throughout ___________ */

// event class to hold events and their relevant metadata
class timerEvent {
    constructor(name, description, startTime, endTime) {
        this.name = name;
        this.description = description;
        this.startTime = startTime;
        this.endTime = endTime;
    }
}

/* class to carry times easily for timerEvent class */
class time {
    constructor(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }
}

/* create a new event with given parameters */
function createNewEvent(name, description, startTime, endTime) {
    timerEvents.push(new timerEvent(name, description, startTime, endTime));
}

/* _______________ Normal Stuff resumes below _____________________ */

/* initiate some variables BEFORE main gets going */
function startup() {
    console.log("working");
    popupModal = document.getElementById("alertModal");
    closeButton = document.getElementsByClassName("close")[0];
    // close function for modal
    closeButton.onclick = function() {
        popupModal.style.display = "none";
    }
}

/* main function that orients the program */
function main() {
    /* update timer */
    TimerUpdate();
    //CheckIfEventShouldFire(mainHours, mainMinutes, mainSeconds, timerEvents);
    crudeAlertFire();
}

/* update the main body timer */
function TimerUpdate() {
    dt = new Date($.now());
    mainHours = dt.getHours();
    mainMinutes = dt.getMinutes();
    mainSeconds = dt.getSeconds();
}

/* compare event timings to the time */
function CheckIfEventShouldFire(hours, minutes, seconds, events) {
    events.forEach(element => {
        if (element.hours);
    });
}

/* Temp crude version while we figure out when we want this to fire */
function crudeAlertFire() {
    /*
    if (mainMinutes % 30 == 0 && seconds == 0) {
        Popup();
        AlertSound();
    }*/
    Popup();
    AlertSound();
}

/* Function to display the activity */
function Popup() {
    document.getElementById("modalText").innerHTML = "This Text can Be changed";
    popupModal.style.display = "block";
}

/* Function to play the sound */
function AlertSound() {

}