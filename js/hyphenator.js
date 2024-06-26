'use strict';

const originalTextHyphenator = document.getElementById("original-text");

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
}

// Running the actual hyphenator
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
    }
}

// Enter key activating the button press
originalTextHyphenator.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("hyphenator-button").click();
    }
});