'use strict';

let resultsNoDashContents;
let resultsHyphenContents;
let resultsFigureDashContents;
let resultsEnDashContents;
let resultsQuotationDashContents;
let resultsEmDashContents;

// Returning appearance to normal after COPY message appears

function copiedReturnToNormalNoDash() {
    document.getElementById("results-no-dash").textContent = resultsNoDashContents;
    document.getElementById("results-no-dash").style.backgroundColor = "#DCD7C9";
    document.getElementById("results-no-dash").style.color = "#3F4E4F";
}

function copiedReturnToNormalHyphen() {
    document.getElementById("results-hyphen").textContent = resultsHyphenContents;
    document.getElementById("results-hyphen").style.backgroundColor = "#DCD7C9";
    document.getElementById("results-hyphen").style.color = "#3F4E4F";
}

function copiedReturnToNormalFigureDash() {
    document.getElementById("results-figure-dash").textContent = resultsFigureDashContents;
    document.getElementById("results-figure-dash").style.backgroundColor = "#DCD7C9";
    document.getElementById("results-figure-dash").style.color = "#3F4E4F";
}

function copiedReturnToNormalEnDash() {
    document.getElementById("results-en-dash").textContent = resultsEnDashContents;
    document.getElementById("results-en-dash").style.backgroundColor = "#DCD7C9";
    document.getElementById("results-en-dash").style.color = "#3F4E4F";
}

function copiedReturnToNormalQuotationDash() {
    document.getElementById("results-quotation-dash").textContent = resultsQuotationDashContents;
    document.getElementById("results-quotation-dash").style.backgroundColor = "#DCD7C9";
    document.getElementById("results-quotation-dash").style.color = "#3F4E4F";
}

function copiedReturnToNormalEmDash() {
    document.getElementById("results-em-dash").textContent = resultsEmDashContents;
    document.getElementById("results-em-dash").style.backgroundColor = "#DCD7C9";
    document.getElementById("results-em-dash").style.color = "#3F4E4F";
}

// Copying contents to clipboard and flashing notifications

function resultsNoDashCopier() {
    if (document.getElementById("results-no-dash").textContent != "COPIED!") {
        resultsNoDashContents = document.getElementById("results-no-dash").textContent;
        navigator.clipboard.writeText(resultsNoDashContents);
        document.getElementById("results-no-dash").textContent = "COPIED!";
        document.getElementById("results-no-dash").style.backgroundColor = "#3F4E4F";
        document.getElementById("results-no-dash").style.color = "#DCD7C9";
        setTimeout(copiedReturnToNormalNoDash, 750);
    }
}

function resultsHyphenCopier() {
    if (document.getElementById("results-hyphen").textContent != "COPIED!") {
        resultsHyphenContents = document.getElementById("results-hyphen").textContent;
        navigator.clipboard.writeText(resultsHyphenContents);
        document.getElementById("results-hyphen").textContent = "COPIED!";
        document.getElementById("results-hyphen").style.backgroundColor = "#3F4E4F";
        document.getElementById("results-hyphen").style.color = "#DCD7C9";
        setTimeout(copiedReturnToNormalHyphen, 750);
    }
}

function resultsFigureDashCopier() {
    if (document.getElementById("results-figure-dash").textContent != "COPIED!") {
        resultsFigureDashContents = document.getElementById("results-figure-dash").textContent;
        navigator.clipboard.writeText(resultsFigureDashContents);
        document.getElementById("results-figure-dash").textContent = "COPIED!";
        document.getElementById("results-figure-dash").style.backgroundColor = "#3F4E4F";
        document.getElementById("results-figure-dash").style.color = "#DCD7C9";
        setTimeout(copiedReturnToNormalFigureDash, 750);
    }
}

function resultsEnDashCopier() {
    if (document.getElementById("results-en-dash").textContent != "COPIED!") {
        resultsEnDashContents = document.getElementById("results-en-dash").textContent;
        navigator.clipboard.writeText(resultsEnDashContents);
        document.getElementById("results-en-dash").textContent = "COPIED!";
        document.getElementById("results-en-dash").style.backgroundColor = "#3F4E4F";
        document.getElementById("results-en-dash").style.color = "#DCD7C9";
        setTimeout(copiedReturnToNormalEnDash, 750);
    }
}

function resultsQuotationDashCopier() {
    if (document.getElementById("results-quotation-dash").textContent != "COPIED!") {
        resultsQuotationDashContents = document.getElementById("results-quotation-dash").textContent;
        navigator.clipboard.writeText(resultsQuotationDashContents);
        document.getElementById("results-quotation-dash").textContent = "COPIED!";
        document.getElementById("results-quotation-dash").style.backgroundColor = "#3F4E4F";
        document.getElementById("results-quotation-dash").style.color = "#DCD7C9";
        setTimeout(copiedReturnToNormalQuotationDash, 750);
    }
}

function resultsEmDashCopier() {

    if (document.getElementById("results-em-dash").textContent != "COPIED!") {
        resultsEmDashContents = document.getElementById("results-em-dash").textContent;
        navigator.clipboard.writeText(resultsEmDashContents);
        document.getElementById("results-em-dash").textContent = "COPIED!";
        document.getElementById("results-em-dash").style.backgroundColor = "#3F4E4F";
        document.getElementById("results-em-dash").style.color = "#DCD7C9";
        setTimeout(copiedReturnToNormalEmDash, 750);
    }
}