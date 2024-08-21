'use strict';

const originalTextHyphenator = document.getElementById("original-text");
const title = document.getElementById("title");
const title2 = document.getElementById("title-2");
const infoText = document.getElementById("info-text");
const changeModeButton = document.getElementById("change-mode-button");
const hyphenatorArea = document.getElementById("results-container-hyphenator");
const apostrophenatorArea = document.getElementById("results-container-apostrophenator");

let currentMode = "hyphenate";

// Getting rid of text decoration, for when the hyphenator is active OR when the COPIED! message pops up
function removeTextDecoration() {
    document.getElementById("results-no-dash").style.textDecoration = "none";
    document.getElementById("results-hyphen").style.textDecoration = "none";
    document.getElementById("results-figure-dash").style.textDecoration = "none";
    document.getElementById("results-en-dash").style.textDecoration = "none";
    document.getElementById("results-quotation-dash").style.textDecoration = "none";
    document.getElementById("results-em-dash").style.textDecoration = "none";
    document.getElementById("results-hyphen2").style.textDecoration = "none";
    document.getElementById("results-nospace").style.textDecoration = "none";

    document.getElementById("results-typewriter").style.textDecoration = "none";
    document.getElementById("results-typographic").style.textDecoration = "none";
}

// Running the hyphenator/apostrophenator
function hyphenator() {
    let e;
    e = originalTextHyphenator.value;

    if (e !== "") {
        removeTextDecoration();
        document.getElementById("results-no-dash").textContent = e.replace(/[-‒–―—‐]/g, ' ');
        document.getElementById("results-hyphen").textContent = e.replace(/[-‒–―—‐]/g, '-');;
        document.getElementById("results-figure-dash").textContent = e.replace(/[-‒–―—‐]/g, '‒');
        document.getElementById("results-en-dash").textContent = e.replace(/[-‒–―—‐]/g, '–');
        document.getElementById("results-quotation-dash").textContent = e.replace(/[-‒–―—‐]/g, '―');
        document.getElementById("results-em-dash").textContent = e.replace(/[-‒–―—‐]/g, '—');
        document.getElementById("results-hyphen2").textContent = e.replace(/[-‒–―—‐]/g, '‐');
        document.getElementById("results-nospace").textContent = e.replace(/[-‒–―—‐]/g, '');

        document.getElementById("results-typewriter").textContent = e.replace(/['’]/g, `'`);
        document.getElementById("results-typographic").textContent = e.replace(/['’]/g, '’');;
    }
}

// Enter key activating the button press
originalTextHyphenator.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("hyphenator-button").click();
    }
});

function changeMode() {
    if (currentMode === "hyphenate") {
        currentMode = "apostrophenate";
        title.innerText = "Apostrophe'nator";
        title2.innerText = "explore varieties of apostrophes";
        infoText.innerText = "Want to see your text displayed with multiple versions of the apostrophe? Type something into the box and click the button to transform your existing text.";
        changeModeButton.innerText = "Hy-fun-ator";
        apostrophenatorArea.style.display = "grid";
        hyphenatorArea.style.display = "none";
    } else if (currentMode === "apostrophenate") {
        currentMode = "hyphenate";
        title.innerText = "Hy-fun-ator";
        title2.innerText = "putting the fun into hyphenation";
        infoText.innerText = "Want to see your hyphenated text with all kinds of possible dashes? Type something into the box and click the button to transform your existing hyphenation into a smorgasbord of dashes.";
        changeModeButton.innerText = "Apostrophe'nator";
        apostrophenatorArea.style.display = "none";
        hyphenatorArea.style.display = "grid";
    }
}