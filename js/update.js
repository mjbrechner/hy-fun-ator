'use strict';

let updateInfoVisibility = document.getElementById("updateInfo");

let isUpdateOpen = "no";

function updateInfo() {
    if (isUpdateOpen == "no") {
        updateInfoVisibility.style.visibility = "visible";
        isUpdateOpen = "yes";
    } else if (isUpdateOpen == "yes") {
        updateInfoVisibility.style.visibility = "hidden";
        isUpdateOpen = "no";
    }
}

function hideUpdateInfo() {
    updateInfoVisibility.style.visibility = "hidden";
}