# DevTools Hub

A modern, high-performance developer tools collection built for efficiency and aesthetics.

![DevTools Hub Preview](https://placehold.co/800x400/020817/22C55E?text=DevTools+Hub+Preview)

## 🚀 Overview

**DevTools Hub** is a curated suite of online developer tools designed with a "Dark Mode First" philosophy. It aims to provide a distraction-free, high-performance environment for developers to perform common tasks like JSON formatting, validation, and data transformation.

> **Core Philosophy**: Minimalist • Dark Mode First • Local Processing • Speed

## ✨ Key Features

### 🛠️ JSON Formatter (MVP)
The flagship tool of the hub, featuring a VS Code-grade editing experience.
- **Advanced Editing**: Powered by **Monaco Editor**, offering syntax highlighting, code folding, and minimap.
- **Smart Formatting**: Instant **Prettify** and **Minify** operations.
- **Real-time Validation**: Detects and highlights JSON syntax errors with line-precision.
- **Theme System**:
  - **Dark Themes**: GitHub Dark, Dracula, One Dark Pro, Nord, VS Code Dark.
  - **Light Themes**: GitHub Light, Atom One Light, Solarized Light.
  - *Grouped selection for easy switching.*
- **Utilities**: One-click Copy, Download (`.json`), and Clear.
- **State Persistence**: Your input and theme preferences are saved automatically.

### 🎨 UI/UX Design
- **Premium Dark Mode**: Deep blue-black (`#020817`) foundation for eye comfort.
- **Vibrant Accents**: Neon Green (`#22C55E`) primary actions for a hacker-chic vibe.
- **Responsive Layout**: Optimized for wide-screen coding and mobile viewing.
- **Typography**: `JetBrains Mono` for code, `IBM Plex Sans` for UI.

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
- **Editor Engine**: [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Icons**: [Lucide React](https://lucide.dev/)

## ⚡️ Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/midasgao/devtools-hub.git
   cd devtools-hub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📂 Project Structure

```
src/
├── components/
│   ├── editor/       # Monaco Editor wrapper & config
│   ├── layout/       # Navbar, Footer, MainLayout
│   └── ui/           # shadcn/ui primitive components
├── lib/
│   ├── json-utils.ts # Core JSON processing logic
│   └── monaco-themes.ts # Theme definitions
├── pages/
│   ├── json/         # JSON Formatter page
│   └── Home.tsx      # Landing page
├── stores/           # Zustand state management
└── App.tsx           # Routing & Theme Provider
```

## 📅 Roadmap

- [x] **Phase 1: MVP** - JSON Formatter & Core UI
- [ ] **Phase 2: Encoders** - Base64, URL, JWT Debugger
- [ ] **Phase 3: Converters** - JSON to TS/Go/Rust
- [ ] **Phase 4: PWA Support** - Offline capabilities

## 👤 Author

**midasgao**

---
*Built with ❤️ for developers.*
