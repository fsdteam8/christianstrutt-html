# PitStop Pro - Vehicle Repair Website

Welcome to the **PitStop Pro** website project. This is a pixel-perfect, fully responsive HTML/CSS website designed for a family-run car repair garage based in Milton Keynes. The site acts as a modern digital brochure, highlighting the garage's general vehicle repair services and specialised BMW expertise.

## Project Architecture & Modularity

Rather than manually duplicating HTML for every service page, this project uses a custom Node.js build script (`build.js`) to generate all the sub-pages dynamically. 

By separating the content (stored as JSON data in the script) from the layout (the HTML template literal), we ensure that any global UI changes—such as updating the navigation dropdown, changing footer details, or adding a new CSS link—only need to be done in **one place**.

### Running the Build Script
If you make changes to the layout template or the service text inside `build.js`, you must run the script to regenerate the HTML files in the `services/` directory:

```bash
# Ensure you are in the project root directory (webprototype.uk)
node build.js
```

## Folder Structure

```text
webprototype.uk/
├── index.html                # The main entry point and home page for the website.
├── build.js                  # Node.js generation script. Contains the master HTML template and JSON data to build the modular service pages.
├── README.md                 # Project documentation (this file).
│
├── styles/
│   └── style.css             # The global stylesheet containing all custom CSS variables, layout grid/flexbox rules, hover effects, and responsive breakpoints.
│
├── images/                   # Directory containing all visual assets.
│   ├── Pitshop-Pro-logo.jpg  # Brand logo.
│   ├── Car.png               # Cutout of the BMW used in hero sections.
│   ├── hero-bg.png           # Neon garage background for the Home Page hero.
│   └── 3d-abstract-...jpg    # Dark particle background used for the Service Pages hero.
│
└── services/                 # Directory containing all the auto-generated service pages.
    ├── brakes.html           # Brake repairs page.
    ├── clutches.html         # Clutch repairs page.
    ├── diagnostics.html      # Diagnostics page.
    ├── exhausts.html         # Exhaust repairs page.
    ├── mot-repairs.html      # MOT repairs page.
    ├── oil-changes.html      # Oil changes page.
    ├── suspensions.html      # Suspensions page.
    ├── timing-belts.html     # Timing belts page.
    └── water-pumps.html      # Water pumps page.
```

## Key Features
- **Responsive Design**: The website smoothly scales across mobile, tablet, and desktop viewports using CSS Flexbox and Grid.
- **Pure CSS Interactions**: The navigation dropdown menus and button hover states are driven purely by CSS, without relying on client-side JavaScript.
- **Fixed Sidebar Actions**: Global "Call Us" and "Email Us" buttons are fixed to the viewport, remaining persistently visible as users scroll through the content.
- **Dark Theme Aesthetics**: The design implements a premium dark mode feel, leveraging neon red accents, drop shadows, and subtle glassmorphism (`backdrop-filter: blur`) over vivid background imagery. 

## Development Notes
- The site relies on the **Outfit** Google Font for typography.
- Icons are rendered using **FontAwesome** via CDN.
- If you add new services in the future, simply add a new object to the `services` array inside `build.js`, run the script, and add a link to the new file in the `index.html` navigation dropdown.
