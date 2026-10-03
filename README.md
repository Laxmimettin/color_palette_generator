# 🎨 Color Palette Generator

A modern and responsive **Color Palette Generator** built using HTML5, CSS3, and JavaScript. This application generates random color palettes containing five colors and allows users to copy HEX color codes to the clipboard with a single click.

The project features a clean user interface, smooth animations, interactive color cards, and responsive layouts for desktop, tablet, and mobile devices.

## ✨ Features

* **Random Color Generation:** Generate five random colors with a single click.
* **HEX Color Codes:** Display the HEX code for each generated color.
* **Click-to-Copy:** Click any color card to copy its HEX code.
* **Copy Confirmation:** Display a notification when a color is copied.
* **Interactive UI:** Smooth hover effects and card animations.
* **Responsive Design:** Adapts to different screen sizes.
* **Modern Interface:** Gradient typography, rounded cards, and subtle background effects.
* **No Frameworks Required:** Built using pure HTML, CSS, and JavaScript.

## 🛠️ Technologies Used

| Technology       | Purpose                                                              |
| ---------------- | -------------------------------------------------------------------- |
| HTML5            | Structures the web page and its components.                          |
| CSS3             | Provides styling, animations, hover effects, and responsive layouts. |
| JavaScript       | Generates random colors and handles user interactions.               |
| Math.random()    | Generates random values for HEX color codes.                         |
| Clipboard API    | Copies HEX color codes to the clipboard.                             |
| DOM Manipulation | Dynamically creates and updates color cards.                         |

## 📂 Project Structure


Color-Palette-Generator/
│
├── index.html
├── style.css
├── script.js
└── README.md
### File Description

* **index.html:** Contains the structure of the application.
* **style.css:** Defines the visual design, animations, and responsive layout.
* **script.js:** Implements random color generation, palette rendering, and clipboard functionality.
* **README.md:** Documents the project, its features, and instructions for use.

## 🚀 How to Run the Project

Follow these steps to run the application on your computer.

### Step 1: Download or Clone the Repository

Clone the repository using Git:

git clone <your-repository-url>

Alternatively, download the project files to your computer.

### Step 2: Open the Project Folder

Open the `Color-Palette-Generator` folder in Visual Studio Code or another code editor.

### Step 3: Run the Application

Open `index.html` in your browser.

For the best development experience, use the **Live Server** extension in Visual Studio Code.

1. Install the Live Server extension.
2. Open `index.html`.
3. Right-click inside the editor.
4. Select **Open with Live Server**.

The application will open in your default browser.

## 🎯 How to Use

1. Open the Color Palette Generator in your browser.
2. View the five randomly generated color swatches.
3. Click the **Generate New Palette** button to create a new set of colors.
4. Click any color card to copy its HEX code.
5. Look for the confirmation notification.
6. Paste the copied HEX code into your CSS or design project.

## ⚙️ How It Works

### 1. Random Color Generation

JavaScript generates a six-digit hexadecimal color code using the characters `0–9` and `A–F`.

Each color begins with `#`, followed by six randomly selected hexadecimal characters.

Example:

#6366F1
#EC4899
#22C55E
#F97316
#0EA5E9

### 2. Palette Rendering

The application creates five color cards dynamically using JavaScript DOM manipulation.

Each card displays its HEX code and uses the generated color as its background.

### 3. Clipboard Functionality

When a user clicks a color card, the Clipboard API copies its HEX code.

A confirmation notification appears to indicate that the copy action was completed.

Clipboard access generally requires a secure context, such as HTTPS or localhost.

### 4. Responsive Design

CSS Grid, Flexbox, and media queries adjust the layout for different screen sizes.

The palette displays five columns on larger screens, three columns on tablet-sized screens, and two columns on smaller screens.

## 📚 Learning Outcomes

This project helps develop practical skills in:

* Writing semantic HTML5.
* Styling web pages using CSS3.
* Creating responsive layouts with CSS Grid and Flexbox.
* Generating random values with `Math.random()`.
* Understanding hexadecimal color codes.
* Manipulating HTML elements using JavaScript.
* Handling click events.
* Using the Clipboard API.
* Displaying interactive notifications.
* Applying CSS animations and transitions.
* Organizing a frontend project into separate files.

## 🔮 Future Enhancements

The application can be extended with the following features:

* Lock individual colors while generating new palettes.
* Save favorite color palettes.
* Export palettes as CSS variables or JSON.
* Generate complementary and analogous color schemes.
* Add RGB, HSL, and other color formats.
* Include a color search and filtering option.
* Add palette history.
* Allow users to choose the number of colors generated.
* Add accessibility checks for color contrast.

## 🌐 Applications

The Color Palette Generator can be useful for:

* Website and application design.
* Frontend development.
* Graphic design projects.
* UI/UX prototyping.
* Selecting color combinations for portfolios.
* Learning hexadecimal colors and JavaScript.

