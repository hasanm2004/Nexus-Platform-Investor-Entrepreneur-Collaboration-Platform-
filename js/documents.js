const fileInput = document.getElementById("fileInput");
const fileName = document.getElementById("fileName");

const signBtn = document.getElementById("signBtn");
const signature = document.getElementById("signature");
const signedText = document.getElementById("signedText");

const statusSelect = document.getElementById("statusSelect");
const statusBadge = document.getElementById("statusBadge");

const downloadPdfBtn = document.getElementById("downloadPdfBtn");

let currentFile = "";
let currentSignature = "";
let currentStatus = "Draft";

// ================= FILE =================
fileInput.addEventListener("change", () => {
    if (fileInput.files.length > 0) {
        currentFile = fileInput.files[0].name;
        fileName.innerHTML = "Selected File: " + currentFile;
    }
});

// ================= SIGN =================
signBtn.addEventListener("click", () => {

    if (signature.value.trim() === "") {
        alert("Please enter signature");
        return;
    }

    currentSignature = signature.value;

    signedText.innerHTML =
        "Document Signed By: " + currentSignature;

    currentStatus = "Signed";
    updateStatus("Signed");

});

// ================= STATUS =================
statusSelect.addEventListener("change", () => {

    currentStatus = statusSelect.value;
    updateStatus(currentStatus);

});

function updateStatus(status) {

    statusBadge.innerHTML = status;

    if (status === "Draft") {
        statusBadge.style.background = "#f59e0b";
    }
    else if (status === "In Review") {
        statusBadge.style.background = "#3b82f6";
    }
    else if (status === "Signed") {
        statusBadge.style.background = "#10b981";
    }

}

// ================= PDF DOWNLOAD =================
downloadPdfBtn.addEventListener("click", () => {

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("SIGNED DOCUMENT", 20, 20);

    doc.setFontSize(12);

    doc.text("File Name: " + (currentFile || "No File"), 20, 40);
    doc.text("Status: " + currentStatus, 20, 60);

    doc.text("Signature:", 20, 80);
    doc.setFontSize(14);
    doc.text(currentSignature || "Not Signed", 20, 100);

    doc.save("signed-document.pdf");

});