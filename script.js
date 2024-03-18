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

document.getElementById("submit").addEventListener("click", function() {
  const s = document.getElementById("sInput").value.trim();
  const k = parseInt(document.getElementById("kInput").value.trim());

  const outputDiv = document.getElementById("output");

  if (s === "" || isNaN(k) || k <= 0) {
    outputDiv.textContent = "Please enter valid values for s and k.";
  } else {
    const result = licenseKeyFormatting(s, k);
    outputDiv.textContent = result;
  }
});
