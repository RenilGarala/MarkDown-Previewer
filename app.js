const markdownInput = document.getElementById("markdown");
const preview = document.getElementById("preview");

// Function to render Markdown with Marked.js
function renderMarkdown() {
  const markdownText = markdownInput.value;
  const htmlOutput = marked.parse(markdownText);

  preview.innerHTML = htmlOutput;
}

// every change we rendering for real time update
markdownInput.addEventListener("input", renderMarkdown);

// initialize with demo text
markdownInput.value = `# Welcome to Markdown Previewer  
## Developed by Renil for ChaiCode
### Features:
- **Bold Text**
- *Italic Text*
- \`Inline code\`
- Copy button
- Reset button
- [Linkedin](https://www.linkedin.com/in/renilgarala/)
- \`\`\`
  Code blocks 1
- \`\`\`
  Code blocks 2
  `;
renderMarkdown();

//copy funtionality
function copyMarkedText() {
  const text = document.getElementById("markdown").value;
  navigator.clipboard.writeText(text);
  alert("Text Copyed!");
}

//reset funtionality
function resetMarkedText() {
  let text = document.getElementById("markdown");
  text.value = `# Welcome to Markdown Previewer  
## Developed by Renil for ChaiCode
### Features:
- **Bold Text**
- *Italic Text*
- \`Inline code\`
- Copy button
- Reset button
- [Linkedin](https://www.linkedin.com/in/renilgarala/)
- \`\`\`
  Code blocks 1
- \`\`\`
  Code blocks 2
`;
}
