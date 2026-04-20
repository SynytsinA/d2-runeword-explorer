# Runeword Explorer &mdash; Reign of the Warlock

![D2R Version](https://img.shields.io/badge/D2R_Version-3.1.2-amber?style=for-the-badge&labelColor=1a1a1a)
![License](https://img.shields.io/badge/license-MIT-emerald?style=for-the-badge&labelColor=1a1a1a)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react&labelColor=1a1a1a)
![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&labelColor=1a1a1a)

**Runeword Explorer** is a high-performance, immersive utility designed for the modern *Diablo II: Resurrected* player. Released alongside the **Reign of the Warlock** expansion (2026), this tool empowers you to master the forge by providing real-time inventory analysis and smart craftability forecasting.

---

## 💎 Key Features

- **Inventory Management (Local-First)**: Track your runes with a persistent, blazingly fast stash that respects your privacy.
- **Smart Craftability Logic**: Automatically categorizes every runeword in the game:
  - ✅ **Craftable**: You have the runes. Strike while the iron is hot.
  - ⏳ **Almost Ready**: Only one rune away from greatness.
  - ❌ **Unavailable**: The long road ahead.
- **2026 Expansion Content**: Fully updated with the latest runewords and mechanics from the *Reign of the Warlock* cycle.
- **Premium Dark Aesthetic**: A responsive UI built with carefully curated "Amber" Diablo tones, glassmorphism, and fluid animations.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16+](https://nextjs.org/) (App Router, Turbopack)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Testing**: [Vitest](https://vitest.dev/) & React Testing Library
- **Quality Gates**: [Husky](https://typicode.github.io/husky/) (Git Hooks) & ESLint

---

## 🏗️ Architecture

The project follows a modular, scalable architecture designed for clarity and performance:
- **`src/components`**: Organized into `ui/` primitives and `dashboard/` features.
- **`src/hooks`**: Encapsulated state logic (Inventory, Filtering, Infinite Scroll).
- **`src/constants`**: Single source of truth for game data and assets.
- **`src/utils`**: Pure helper functions for search, string manipulation, and analytics.

---

## 🚀 Development

### Prerequisites
- Node.js 18+ 
- npm / pnpm / yarn

### Getting Started
1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000)

### Quality Control
Before every push, automated checks run to ensure code integrity. You can run the full validation suite manually:
```bash
npm run validate
```
This script executes **Linting**, **Type-checking**, and **Unit Testing** in sequence.

---

## 🧪 Testing

We value reliability. The project includes a comprehensive test suite covering hooks, utilities, and components.

Run tests:
```bash
npm test
```

Generate coverage report:
```bash
npm run test:coverage
```

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

&copy; 2026 Artem Synytsin. Built for the community.
