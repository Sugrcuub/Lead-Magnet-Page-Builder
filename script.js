const form = document.getElementById("builder-form");
const previewFrame = document.getElementById("preview-frame");
const downloadBtn = document.getElementById("download-btn");
const successMsg = document.getElementById("success-msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const headline = document.getElementById("headline").value;
  const subheadline = document.getElementById("subheadline").value;
  const cta = document.getElementById("cta").value;
  const color = document.getElementById("color").value;

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>My Landing Page</title>
  <style>
    body { font-family: sans-serif; background: #f9f9f9; padding: 3rem; text-align: center; }
    h1 { color: ${color}; font-size: 2rem; }
    p { font-size: 1.2rem; margin: 1rem 0 2rem; }
    a.button {
      background: ${color};
      color: white;
      padding: 1rem 2rem;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
      display: inline-block;
    }
  </style>
</head>
<body>
  <h1>${headline}</h1>
  <p>${subheadline}</p>
  <a class="button" href="#">${cta}</a>
</body>
</html>
  `;

  // Update preview
  previewFrame.srcdoc = htmlContent;

  // Prepare for download
  const blob = new Blob([htmlContent], { type: "text/html" });
  const url = URL.createObjectURL(blob);

  downloadBtn.style.display = "inline-block";
  downloadBtn.onclick = () => {
    const a = document.createElement("a");
    a.href = url;
    a.download = "landing-page.html";
    a.click();
    successMsg.textContent = "✅ Landing page downloaded successfully!";
    setTimeout(() => (successMsg.textContent = ""), 4000);
  };
});
