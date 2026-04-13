# Portfolio site

Personal portfolio for **Gurushreeram Sureshbabu** — a static, single-page site meant for **GitHub Pages**. It presents background, skills, experience, projects, and contact information in one scrollable layout.

## What’s in this repo

| File | Role |
|------|------|
| `index.html` | Page structure and content (sections, meta tags for SEO) |
| `styles.css` | Layout, typography, responsive design, light/dark theming |
| `script.js` | Theme toggle, scroll reveal / small interactions |

No build step or framework: plain **HTML**, **CSS**, and **JavaScript**.

## Features

- Responsive layout for different screen sizes  
- **Dark / light mode** (toggle in the header)  
- Section-based navigation: About, Skills, Experience, Projects, Contact  
- Lightweight animations (e.g. reveal on scroll) via CSS and JS  

## Run locally

Open the site without a server:

```bash
open index.html
```

Or serve the folder so links behave like on the web:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## GitHub Pages

Publish this repository’s `main` branch (root or `/docs` as configured in the repo **Settings → Pages**). The entry file is `index.html` at the site root.

---

*Repository: [Portfolio](https://github.com/Guruhomm1427/Portfolio)*
