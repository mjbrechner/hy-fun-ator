'use strict';

function hyphenator() {

    let e;
    e = document.getElementById("original-text").value;

    if (e != "") {
        document.getElementById("results-no-dash").textContent = e.replaceAll('-', ' ');
        document.getElementById("results-hyphen").textContent = e;
        document.getElementById("results-figure-dash").textContent = e.replaceAll('-', '‒');
        document.getElementById("results-en-dash").textContent = e.replaceAll('-', '–');
        document.getElementById("results-quotation-dash").textContent = e.replaceAll('-', '―');
        document.getElementById("results-em-dash").textContent = e.replaceAll('-', '—');
    }
}