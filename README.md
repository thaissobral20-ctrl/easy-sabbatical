# 🌍 Easy Sabbatical | Plan Your Dream Year

> **Your Global Gap Year Partner** — A modern, fully responsive Single Page Application (SPA) designed to help professionals, students, and adventurers plan and manage their personalized gap year.

![Easy Sabbatical Banner](https://img.shields.io/badge/Status-Complete-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=flat&logo=three.js&logoColor=white)

---

## About the Project

**Easy Sabbatical** takes the complexity out of long-term international travel. From international visas and monthly budget tracking to curated routes and health insurance, our platform streamlines the entire sabbatical planning process.

This front-end application features a sleek corporate visual identity, clean tabbed navigation, interactive package modals, a comprehensive financial dashboard, live support elements, and an interactive 3D photorealistic Earth powered by **Three.js**.

---

## Key Features

- **SPA Architecture (Single Page Application):** Seamless navigation across different sections (*Home, Packages, Dashboard & Routes, Support*) with rigorous state isolation.
- **Interactive 3D Earth (Three.js):** Real-time rotating photorealistic 3D globe rendered directly on the homepage using official high-resolution atmospheric textures via CDN.
- **Corporate Visual Identity:** Tailored color palette featuring a warm light beige background (`#fff8eb`), corporate orange (`#f57c00`), and deep brown text (`#4a3600`).
- **Interactive Package Modals:** Detailed modal popups for *Backpacking*, *Comfortable*, and *Luxury* packages complete with planning fees, descriptions, and feature checklists.
- **Financial & Routes Dashboard:** Multi-continent breakdown (Europe, Southeast Asia, South America) detailing estimated monthly budgets by travel style, expense percentage charts, and suggested routes.
- **24/7 Support Center:** Floating live chat window alongside a priority contact form for mid-trip emergency assistance.
- **Mobile Responsive Design:** Fully optimized layout featuring mobile touch-friendly horizontal scrolling menus, stacked content sections, and fluid component scaling.

---

## 🛠️ Technologies Used

- **HTML5:** Semantic and structured markup.
- **CSS3:** Flexbox layout, responsive media queries, modern UI components, and strict state management (`.hidden`).
- **JavaScript (ES6+):** DOM manipulation, tab switching logic, dynamic modal rendering, and real-time dashboard data updates.
- **Three.js (r128):** WebGL 3D rendering engine for the interactive Earth globe.

---

## 📂 Project Structure

```text
easy-sabbatical/
│
├── index.html          # Main HTML structure (SPA containers & modals)
├── style.css           # Global styles, layout rules, and responsive media queries
├── script.js           # Navigation logic, modals, dashboard data, and Three.js 3D globe
└── imagens/            # Visual assets and package photos (backpacking, comfort, luxury)
