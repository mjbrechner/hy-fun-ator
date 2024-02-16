'use strict';

// Getting rid of text decoration, for when the hyphenator is active OR when the COPIED! message pops up
function removeTextDecoration() {
    document.getElementById("results-typewriter").style.textDecoration = "none";
    document.getElementById("results-typographic").style.textDecoration = "none";
}

// Running the  apostrophenator
function apostrophenate() {
    let e;
    e = document.getElementById("original-text").value;

    if (e !== "") {
        removeTextDecoration();
        document.getElementById("results-typewriter").textContent = e.replace(/['’]/g, `'`);
        document.getElementById("results-typographic").textContent = e.replace(/['’]/g, '’');;

    }
}