# Simple Calculator 🔢

Here I created a **simple web-based calculator** that supports basic operations and theme switching, complete with a click sound effect when pressing buttons.


## Features
- Basic operations: Addition (`+`), Subtraction (`-`), Multiplication (`*`), Division (`/`)
- **Dark** and **Light** theme modes
- Button click sound effect

## Demo
You can run this project directly in your browser without any additional installation.  
  


## Installation & How to Run
Follow these steps to run the calculator:

### 1. Clone the repository
```bash
git clone https://github.com/username/simple-calculator.git
```

### 2. Navigate to the project directory
```bash
cd simple-calculator
```

### 3. Open in the browser

There are two ways:

**A. Open the file directly (local file)**
- Right click index.html → “Open with” → choose your preferred browser.

>Note: Some browsers may block the click sound when opened directly from a local file (file://). 

**B. Use a local server (recommended)**
- Use Python 3 to start a local server:
```bash
python -m http.server 8000
```
- Open your browser and go to: http://localhost:8000/index.html

>With this method, the click sound will work across all browsers.

### 4. Start using the calculator
1. Enter the first number.
2. Choose a mathematical operation (`+`, `-`, `*`, `/`).
3. Enter the second number.
4. Click `=` to display the result.
5. Use the **Switch Mode** button to toggle between **Dark** and **Light** themes.
6. Each button click will trigger a click sound (if the browser allows it).

## Preview
**Light Mode:**  
![Light Mode Screenshot](/src/light-mode.png)  

**Dark Mode:**  
![Dark Mode Screenshot](/src/dark-mode.png)  

## File Structure
```
simple-calculator/
├── README.md             # Markdown 
├── index.html            # Main page
├── script.js             # Logic calculator & click effect
├── src                   # Source
│   ├── click.mp3         # Audio file for click effect
│   ├── dark-mode.png     # Dark mode preview
│   └── light-mode.png    # Light mode preview
└── style.css             # Style for Dark/Light mode

```

## Notes
- The audio file (`click.mp3`) must be placed inside the (`src`) directory for the click sound effect to work.
- If opened directly (`file://`), some browsers may block audio playback. Use a local server for consistent sound.
- This project was created as practice for understanding basic web-based calculator operations and simple theme switching.

## License
No specific license for this project. This project is open-source and free to use or modify for learning purposes

## Message✉️
Please click the ⭐ (`star`) button if you like this project — it motivates me to create more projects 👉👈

<a href="https://imgbb.com/"><img src="https://i.ibb.co.com/Fbsw7bwC/pwissss.webp" alt="pwissss" border="0" width="200"></a>
