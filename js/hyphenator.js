'use strict';

function hyphenator() {
    let e;
    e = document.getElementById("original-text").value;

    if (e !== "") {
        document.getElementById("results-no-dash").textContent = e.replace(/[-‒–―—]/g, ' ');
        document.getElementById("results-hyphen").textContent = e.replace(/[-‒–―—]/g, '-');;
        document.getElementById("results-figure-dash").textContent = e.replace(/[-‒–―—]/g, '‒');
        document.getElementById("results-en-dash").textContent = e.replace(/[-‒–―—]/g, '–');
        document.getElementById("results-quotation-dash").textContent = e.replace(/[-‒–―—]/g, '―');
        document.getElementById("results-em-dash").textContent = e.replace(/[-‒–―—]/g, '—');
    }
}