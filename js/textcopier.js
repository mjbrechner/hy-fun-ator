'use strict';

let resultsNoDashContents;
let resultsHyphenContents;
let resultsFigureDashContents;
let resultsEnDashContents;
let resultsQuotationDashContents;
let resultsEmDashContents;
let resultsHyphen2Contents;
let resultsNoSpaceContents;

// Returning appearance to normal after COPY message appears
// Adding text decoration to highlight the most recent line that was copied
function copiedReturnToNormalNoDash() {
    document.getElementById("results-no-dash").textContent = resultsNoDashContents;
    document.getElementById("results-no-dash").style.backgroundColor = "#DCD7C9";
    document.getElementById("results-no-dash").style.color = "#3F4E4F";
    document.getElementById("results-no-dash").style.textDecoration = "underline #A27B5C";
}

function copiedReturnToNormalHyphen() {
    document.getElementById("results-hyphen").textContent = resultsHyphenContents;
    document.getElementById("results-hyphen").style.backgroundColor = "#DCD7C9";
    document.getElementById("results-hyphen").style.color = "#3F4E4F";
    document.getElementById("results-hyphen").style.textDecoration = "underline #A27B5C";
}

function copiedReturnToNormalFigureDash() {
    document.getElementById("results-figure-dash").textContent = resultsFigureDashContents;
    document.getElementById("results-figure-dash").style.backgroundColor = "#DCD7C9";
    document.getElementById("results-figure-dash").style.color = "#3F4E4F";
    document.getElementById("results-figure-dash").style.textDecoration = "underline #A27B5C";
}

function copiedReturnToNormalEnDash() {
    document.getElementById("results-en-dash").textContent = resultsEnDashContents;
    document.getElementById("results-en-dash").style.backgroundColor = "#DCD7C9";
    document.getElementById("results-en-dash").style.color = "#3F4E4F";
    document.getElementById("results-en-dash").style.textDecoration = "underline #A27B5C";
}

function copiedReturnToNormalQuotationDash() {
    document.getElementById("results-quotation-dash").textContent = resultsQuotationDashContents;
    document.getElementById("results-quotation-dash").style.backgroundColor = "#DCD7C9";
    document.getElementById("results-quotation-dash").style.color = "#3F4E4F";
    document.getElementById("results-quotation-dash").style.textDecoration = "underline #A27B5C";
}

function copiedReturnToNormalEmDash() {
    document.getElementById("results-em-dash").textContent = resultsEmDashContents;
    document.getElementById("results-em-dash").style.backgroundColor = "#DCD7C9";
    document.getElementById("results-em-dash").style.color = "#3F4E4F";
    document.getElementById("results-em-dash").style.textDecoration = "underline #A27B5C";
}

function copiedReturnToNormalHyphen2() {
    document.getElementById("results-hyphen2").textContent = resultsHyphen2Contents;
    document.getElementById("results-hyphen2").style.backgroundColor = "#DCD7C9";
    document.getElementById("results-hyphen2").style.color = "#3F4E4F";
    document.getElementById("results-hyphen2").style.textDecoration = "underline #A27B5C";
}

function copiedReturnToNormalNoSpace() {
    document.getElementById("results-nospace").textContent = resultsNoSpaceContents;
    document.getElementById("results-nospace").style.backgroundColor = "#DCD7C9";
    document.getElementById("results-nospace").style.color = "#3F4E4F";
    document.getElementById("results-nospace").style.textDecoration = "underline #A27B5C";
}

// Copying contents to clipboard and flashing notifications
function resultsNoDashCopier() {
    if (document.getElementById("results-no-dash").textContent != "COPIED!") {
        resultsNoDashContents = document.getElementById("results-no-dash").textContent;
        navigator.clipboard.writeText(resultsNoDashContents);
        removeTextDecoration();
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
        removeTextDecoration();
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
        removeTextDecoration();
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
        removeTextDecoration();
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
        removeTextDecoration();
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
        removeTextDecoration();
        document.getElementById("results-em-dash").textContent = "COPIED!";
        document.getElementById("results-em-dash").style.backgroundColor = "#3F4E4F";
        document.getElementById("results-em-dash").style.color = "#DCD7C9";
        setTimeout(copiedReturnToNormalEmDash, 750);
    }
}

function resultsHyphen2Copier() {
    if (document.getElementById("results-hyphen2").textContent != "COPIED!") {
        resultsHyphen2Contents = document.getElementById("results-hyphen2").textContent;
        navigator.clipboard.writeText(resultsHyphen2Contents);
        removeTextDecoration();
        document.getElementById("results-hyphen2").textContent = "COPIED!";
        document.getElementById("results-hyphen2").style.backgroundColor = "#3F4E4F";
        document.getElementById("results-hyphen2").style.color = "#DCD7C9";
        setTimeout(copiedReturnToNormalHyphen2, 750);
    }
}

function resultsNoSpaceCopier() {
    if (document.getElementById("results-nospace").textContent != "COPIED!") {
        resultsNoSpaceContents = document.getElementById("results-nospace").textContent;
        navigator.clipboard.writeText(resultsNoSpaceContents);
        removeTextDecoration();
        document.getElementById("results-nospace").textContent = "COPIED!";
        document.getElementById("results-nospace").style.backgroundColor = "#3F4E4F";
        document.getElementById("results-nospace").style.color = "#DCD7C9";
        setTimeout(copiedReturnToNormalNoSpace, 750);
    }
}