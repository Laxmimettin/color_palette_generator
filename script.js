const palette = document.getElementById("palette");
const generateBtn = document.getElementById("generateBtn");
const copyMessage = document.getElementById("copyMessage");
const copyText = document.getElementById("copyText");

// Generate a random HEX color
function generateRandomColor() {
  const characters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * 16);
    color += characters[randomIndex];
  }

  return color;
}

// Create a single color card
function createColorCard(color) {
  const card = document.createElement("div");

  card.className = "color-card";
  card.style.setProperty("--color", color);

  card.innerHTML = `
        <div class="color-info">
            <span class="hex-code">${color}</span>
            <span class="copy-icon">⧉</span>
        </div>
    `;

  card.addEventListener("click", () => {
    copyColor(color);
  });

  return card;
}

// Generate the palette
function generatePalette() {
  palette.innerHTML = "";

  for (let i = 0; i < 5; i++) {
    const color = generateRandomColor();
    const card = createColorCard(color);

    palette.appendChild(card);
  }
}

// Copy color to clipboard
async function copyColor(color) {
  try {
    await navigator.clipboard.writeText(color);

    showCopyMessage(`${color} copied!`);
  } catch (error) {
    // Fallback for browsers that don't support Clipboard API
    const textArea = document.createElement("textarea");

    textArea.value = color;
    document.body.appendChild(textArea);

    textArea.select();
    document.execCommand("copy");

    textArea.remove();

    showCopyMessage(`${color} copied!`);
  }
}

// Show copy confirmation
function showCopyMessage(message) {
  copyText.textContent = message;

  copyMessage.classList.add("show");

  setTimeout(() => {
    copyMessage.classList.remove("show");
  }, 1800);
}

// Generate a new palette when button is clicked
generateBtn.addEventListener("click", generatePalette);

// Generate initial palette
generatePalette();
