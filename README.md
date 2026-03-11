# Video Scroll React + GSAP

A premium web experience featuring a smooth, frame-by-frame video scroll animation implemented with React, TypeScript, and GSAP.

## 🚀 Overview

This project demonstrates a high-performance "video scroll" effect where a video sequence plays in sync with the user's scroll position. Unlike standard video playback, this implementation uses high-quality image frames rendered to a `<canvas>` element, providing granular control, perfect responsiveness, and zero playback latency.

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Animation:** [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/) with [ScrollTrigger](https://greensock.com/scrolltrigger/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)

## 🧬 Key Features

- **Frame-by-Frame Scrubbing:** Smooth video progression handled by GSAP ScrollTrigger.
- **Canvas Rendering:** Optimized rendering engine for high-resolution sequences.
- **Dynamic Overlays:** Context-aware text blocks that fade in and out based on scroll progress.
- **Theme Support:** Fully integrated Dark/Light mode.
- **Responsive Design:** Fluid layout and canvas sizing that adapts to any screen.

## 📖 Implementation Details

### Frame Animation

The core logic resides in `useScrollAnimation.ts`. It preloads a sequence of JPG frames and uses a GSAP timeline to "scrub" through them. Each frame is drawn to a canvas using a smart "cover" algorithm (maintaining aspect ratio while filling the viewport).

### Scroll Physics

The integration of `ScrollTrigger` allows for:

- Precise mapping of scroll distance to frame index.
- Ease-based smoothing (`scrub: 0.5`) for a premium "inertia" feel.
- Simultaneous control over text animations (opacity, Y-position) linked to the same scroll timeline.

## 🚦 Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

---

*Made with ✨ for a seamless scrolling experience.*
