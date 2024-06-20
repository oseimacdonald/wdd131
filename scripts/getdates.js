// Get the current year
const currentYear = new Date().getFullYear();

// Update the footer with the current year
const yearSpan = document.getElementById('currentyear');
if (yearSpan) {
    yearSpan.textContent = currentYear;
}

// Get the last modified date of the document
const lastModified = document.lastModified;

// Update the paragraph with the last modified date
const lastModifiedParagraph = document.getElementById('lastModified');
if (lastModifiedParagraph) {
    lastModifiedParagraph.textContent = `Last modified: ${lastModified}`;
}
