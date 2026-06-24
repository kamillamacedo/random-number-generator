### 🎲 Numbers Generator

A responsive and smart web application designed to generate random numbers within a custom interval, featuring an advanced unique/duplicate toggle mode.

### 🚀 About the Project

This project was originally developed as a challenge during a front-end programming course. However, instead of just following the baseline instructions, I took the time to deeply understand the logic, refactor the code architecture, and implement significant usability (UX) and clean code improvements on my own.

The goal is to provide a clean and intuitive interface where users can choose the quantity of numbers to draw, define a custom range, and toggle whether duplicate numbers are allowed or not.

### 🧠 What I Practiced & Improved

*   **Decoupled Architecture:** Separated pure mathematical logic (`numbersGenerator`) from visual interface handling (`generate`).
*   **Loop Optimization:** Replaced standard nested loops with a single, cleaner `while` loop implementation to prevent redundant code.
*   **Semantic Accessibility (Acessibilidade):** Migrated from hardcoded static text classes to native HTML5/CSS3 `:disabled` states, preserving screen-reader and keyboard navigation.
*   **User Experience (UX Refinement):** Upgraded input labels with helpful examples (`Ex: 5`), created smart fallbacks, and replaced invasive browser alerts with elegant, inline semantic feedback (`<span>`) for success and error messages.

### ⚙️ Features

*   Custom random number generation within defined boundaries (`min` and `max`).
*   Live field validation (the maximum input dynamically updates its minimum accepted value based on user selection).
*   Smart toggle mode to switch between unique numbers or allowed duplicates.
*   Robust error handling (detects empty inputs, inverted intervals, or impossible ranges for unique numbers).
*   Native state control for the reset action button.

### 🛠️ Technologies

*   HTML5
*   CSS3 (Custom switch animations & modern variables)
*   JavaScript (ES6+ clean code)

### 📌 Why This Project Matters to Me

This project represents a big step forward in my autonomy as a developer. By questioning the course's original implementation (such as duplicate visual classes and nested loops), I was able to build a more robust, secure, and accessible application. Taking ownership of the code and making these architectural choices made the learning process much more rewarding.

### 📈 Next Steps

I will continue to challenge code patterns presented in guided exercises, always aiming for accessibility, performance, and optimal user experiences in my front-end journey.

Feel free to check the code and share any feedback!