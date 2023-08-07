'use strict';

let updateInfoVisibility = document.getElementById("updateInfo");

function updateInfo() {
    if (updateInfoVisibility.style.visibility == "hidden") {
        updateInfoVisibility.style.visibility = "visible";
    } else {
        updateInfoVisibility.style.visibility = "hidden";
    }
}

function hideUpdateInfo() {
    updateInfoVisibility.style.visibility = "hidden";
}