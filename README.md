# Meet — Cinematic 3D Developer Portfolio

> An ultra-luxurious, production-grade 3D personal portfolio engineered with the visual language, performance, and craftsmanship of premier AI startups (Linear, OpenAI, Apple).

[![React 19](https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-R3F-black?style=flat-square&logo=three.js)](https://threejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS%204.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-39FF14?style=flat-square)](LICENSE)

---

## 🌟 Live Preview

- 🌐 **Live Website**: [meetpatel.dev](https://meetpatel.dev)
- 🐙 **GitHub Profile**: [@meet-patel12](https://github.com/meet-patel12)
- 💼 **LinkedIn**: [Meet Patel](https://linkedin.com/in/meetpatel)

---

## 🚀 Project Overview

This portfolio serves as both an interactive digital resume and a showcase of high-performance creative web engineering. Built from the ground up without templates, it marries an AI-startup aesthetic with strict performance budgets, GPU-accelerated 3D graphics, and responsive glassmorphism.

### Design Vision
- **Theme**: Void black background (`#000000`), card surfaces (`#1A1A1A`), and radiant neon green (`#39FF14`).
- **Color Discipline**: Strict **90/10 rule**—90% dark obsidian surfaces with 10% intentional high-contrast laser green accents.
- **Micro-Interactions**: Physics-based magnetic CTAs, hardware-accelerated spring card tilt, and butter-smooth Lenis scrolling.
- **Responsiveness**: Pixel-perfect layout adaptation from 320px mobile viewports up to 4K ultra-wide screens.

---

## ⚡ Core Features

### 1. Interactive 3D WebGL Experiences
- **Floating 3D Portrait Card**: Custom 3D tilt mechanics driven by pointer coordinate deltas, paired with concentric orbiting toruses and technology badges.
- **Fibonacci 3D Skill Sphere**: Interactive Three.js point-cloud sphere distributing core languages and frameworks evenly on a spherical surface.
- **Interactive 3D Earth Globe**: WebGL coordinate pin highlighting Meet's location (Surat, Gujarat, India ~ 21°N, 73°E) with pulsing atmospheric glow rings.
- **Viewport Throttling**: Intelligent `IntersectionObserver` halts off-screen 3D canvas render loops (`frameloop="never"`), reclaiming up to 66% GPU resources while navigating.

### 2. High-Performance UI & Interaction Engine
- **Zero-Latency Custom Cursor**: Precision 0ms pointer tracking driven by raw motion values decoupled from damped aura physics.
- **Zero Layout Thrashing**: Cached bounding rects on `mouseenter` eliminate forced synchronous layout recalculations during rapid mouse hover.
- **State-Free Scroll Progress**: Pure compositor `scaleX` matrix transforms with zero React re-renders during scrolling.
- **Frosted Glass Engine**: CSS `contain: content;` and GPU-accelerated composite transitions with calibrated backdrop blurs.

### 3. Narrative Portfolio Sections
- **Hero**: Typographic headline, animated typewriter roles, quick social badges, and magnetic CTA buttons.
- **About**: Engineering philosophy, education credentials (CS & Engineering), and a 4-metric statistics grid.
- **Skills**: Categorized competencies spanning Frontend, Backend Systems, Cloud DevOps, and 3D Graphics.
- **Projects**: Filterable showcase featuring 3D preview cards, live preview links, and direct GitHub source code links.
- **Experience Timeline**: Vertical laser-line milestone timeline detailing career progression and technical impact.
- **Services**: 4 specialized client capability offerings with frosted glass cards.
- **Certifications & Leadership**: Verified credentials and leadership roles (Hackathon Organizer, IEEE, Racing Team).
- **Contact**: Interactive globe accompanied by a responsive contact form with real-time validation and ARIA live regions.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/) |
| **Build Tool & Bundler** | [Vite 6](https://vitejs.dev/) with Rollup code-splitting |
| **3D & WebGL Engine** | [Three.js](https://threejs.org/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber), [@react-three/drei](https://github.com/pmndrs/drei) |
| **Styling & Effects** | [Tailwind CSS 4](https://tailwindcss.com/), Custom Glassmorphism CSS Engine |
| **Motion & Scroll** | [Framer Motion](https://www.framer.com/motion/), [Lenis Smooth Scroll](https://github.com/darkroomengineering/lenis) |
| **Icons & Media** | [Lucide React](https://lucide.dev/), Custom Zero-Dependency SVG Primitives |
| **Image Optimization** | [Sharp](https://sharp.pixelplumbing.com/) (WebP near-lossless pipeline) |

---

## 📊 Performance & Optimization Metrics

- **Target Framerate**: Locked **60–120 FPS** sustained across all interactions.
- **Asset Compression**: PNG-to-WebP conversion reduced asset payload from 3.58 MB down to **306 KB** (91.4% reduction).
- **Bundle Efficiency**: Core entry JavaScript bundle is only **31.5 kB** gzipped with vendor-split Three.js and Framer Motion chunks.
- **Accessibility**: 100% WCAG 2.1 Level AA compliant with AAA contrast ratios, keyboard skip links, and semantic `.sr-only` 3D crawler mirrors.
- **SEO Ready**: Embedded Open Graph, Twitter cards, canonical tags, and Schema.org `Person` JSON-LD structured data.

---

## 📁 Project Architecture

```
3D protfolio/
├── public/                    # Static assets, WebP images, sitemap, robots.txt
│   ├── images/                # Optimized WebP assets
│   ├── favicon.svg            # Branded neon green SVG favicon
│   ├── robots.txt             # Search crawler directives
│   └── sitemap.xml            # XML sitemap index
├── src/
│   ├── components/
│   │   ├── 3d/                # Three.js / R3F Canvas components (Hero, Earth, Skills)
│   │   ├── layout/            # Navbar, Footer, PageLayout, SmoothScroll
│   │   ├── sections/          # Narrative sections (Hero, About, Skills, Projects, etc.)
│   │   └── ui/                # Buttons, 3D Tilt Card, CustomCursor, ScrollProgress
│   ├── context/               # Global ThemeContext & provider
│   ├── data/                  # Centralized portfolio data (portfolioData.ts)
│   ├── hooks/                 # Custom hooks (useInView, viewport tracking)
│   ├── styles/                # Tailwind, design tokens, glassmorphism CSS
│   ├── App.tsx                # Application root with section flow
│   └── main.tsx               # DOM entry point
├── package.json               # Dependencies and build scripts
├── tsconfig.json              # TypeScript strict configuration
└── vite.config.ts             # Vite bundler configuration & manual chunks
```

---

## 💻 Getting Started

### Prerequisites
- **Node.js**: `v18.0.0` or higher
- **npm** or **pnpm**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/meet-patel12/meet-3d-portfolio.git
   cd meet-3d-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview the production build locally**:
   ```bash
   npm run preview
   ```

---

## 👤 Author

**Meet Patel**
- Portfolio: [meetpatel.dev](https://meetpatel.dev)
- GitHub: [@meet-patel12](https://github.com/meet-patel12)
- LinkedIn: [Meet Patel](https://linkedin.com/in/meetpatel)
- Email: [meetviral120@gmail.com](mailto:meetviral120@gmail.com)

---

## 📄 License

This project is open-source and licensed under the [MIT License](LICENSE).
