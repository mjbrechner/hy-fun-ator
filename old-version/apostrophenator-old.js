'use strict';

const originalTextApostrophenator = document.getElementById("original-text");

// Getting rid of text decoration, for when the hyphenator is active OR when the COPIED! message pops up
function removeTextDecoration() {
    document.getElementById("results-typewriter").style.textDecoration = "none";
    document.getElementById("results-typographic").style.textDecoration = "none";
}

// Running the  apostrophenator
function apostrophenate() {
    let e;
    e = originalTextApostrophenator.value;

    if (e !== "") {
        removeTextDecoration();
        document.getElementById("results-typewriter").textContent = e.replace(/['’]/g, `'`);
        document.getElementById("results-typographic").textContent = e.replace(/['’]/g, '’');;

    }
}

// Enter key activating the button press
originalTextApostrophenator.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("apostrophenator-button").click();
    }
});