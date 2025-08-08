const form = document.getElementById('builder-form');
const previewFrame = document.getElementById('preview-frame');
const downloadBtn = document.getElementById('download-btn');

form.addEventListener('submit', e => {
  e.preventDefault();
  const headline = document.getElementById('headline').value;
  const subheadline = document.getElementById('subheadline').value;
  const cta = document.getElementById('cta').value;
  const color = document.getElementById('color').value;

  const htmlContent = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>My Lead Magnet</title>
    <style>
      body { font-family: sans-serif; text-align: center; background: #f9f9f9; padding: 5rem; }
      h1 { color: ${color}; }
      p { font-size: 1.2rem; margin-bottom: 2rem; }
      a.button {
        display: inline-block;
        background: ${color};
        color: white;
        padding: 1rem 2rem;
        text-decoration: none;
        border-radius: 5px;
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

  previewFrame.srcdoc = htmlContent;

  // Create downloadable zip
  const blob = new Blob([htmlContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  downloadBtn.style.display = 'inline-block';
  downloadBtn.onclick = () => {
    const a = document.createElement('a');
    a.href = url;
    a.download = 'landing-page.html';
    a.click();
  };
});

