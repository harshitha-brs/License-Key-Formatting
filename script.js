// Add event listener for keypress event on the document
document.addEventListener("keypress", function(event) {
  // Check if the pressed key is Enter
  if (event.key === "Enter") {
    // Call the handleSubmit function
    handleSubmit();
  }
});

// Add click event listener for the submit button
document.getElementById("submit").addEventListener("click", function() {
  // Call the handleSubmit function
  handleSubmit();
});

// Define handleSubmit function to handle the form submission
function handleSubmit() {
  const s = document.getElementById("sInput").value.trim();
  const k = parseInt(document.getElementById("kInput").value.trim());

  const outputDiv = document.getElementById("output");

  if (s === "" || isNaN(k) || k <= 0) {
    outputDiv.textContent = "Please enter valid values for s and k.";
  } else {
    const result = licenseKeyFormatting(s, k);
    outputDiv.textContent = result;
  }
}

// Define the licenseKeyFormatting function
const licenseKeyFormatting = function(s, k) {
  s = s
    .replaceAll("-", "")
    .toUpperCase()
    .split("");

  for (let i = s.length - k; i > 0; i -= k) {
    s[i] = `-${s[i]}`;
  }

  return s.join("");
};
