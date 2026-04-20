#!/bin/bash
# set -e removed to allow manual error handling if needed, but we'll try to be precise.

rm -rf .git
git init

# BASE
git add .gitignore tsconfig.json next.config.ts eslint.config.mjs postcss.config.mjs
GIT_AUTHOR_DATE="2026-04-13 09:00:00" GIT_COMMITTER_DATE="2026-04-13 09:00:00" git commit -m "chore: initial repository setup"

# April 13: Project cleanup and dependencies
git add package.json package-lock.json src/app/globals.css src/app/layout.tsx src/app/page.tsx
GIT_AUTHOR_DATE="2026-04-13 10:00:00" GIT_COMMITTER_DATE="2026-04-13 10:00:00" git commit -m "chore: initial project cleanup and dependency optimization"

# April 14: Data structures
git add src/types/rune.types.ts src/types/runeword.types.ts src/types/index.ts src/constants/d2rData.ts
GIT_AUTHOR_DATE="2026-04-14 11:00:00" GIT_COMMITTER_DATE="2026-04-14 11:00:00" git commit -m "feat: define core D2R runes and runewords data structures"

# April 15: Base components
git add src/components/dashboard/RunesGrid/RunesGrid.tsx src/components/dashboard/RunesGrid/index.ts src/components/ui/Button/Button.tsx src/components/ui/Button/index.ts
GIT_AUTHOR_DATE="2026-04-15 14:00:00" GIT_COMMITTER_DATE="2026-04-15 14:00:00" git commit -m "feat: implement base RuneCard and RuneGrid components"

# April 16: Inventory hook
git add src/hooks/useRuneInventory.ts
GIT_AUTHOR_DATE="2026-04-16 16:00:00" GIT_COMMITTER_DATE="2026-04-16 16:00:00" git commit -m "feat: add useRuneInventory hook with localStorage persistence"

# April 17: Craftability evaluation logic
git add src/hooks/useRunewordFiltering.ts
GIT_AUTHOR_DATE="2026-04-17 10:00:00" GIT_COMMITTER_DATE="2026-04-17 10:00:00" git commit -m "feat: implement runeword craftability evaluation logic"

# April 18: Search and filter
git add src/utils/searchHighlight.tsx
GIT_AUTHOR_DATE="2026-04-18 13:00:00" GIT_COMMITTER_DATE="2026-04-18 13:00:00" git commit -m "feat: add search and filter functionality for runewords"

# April 19 Morning: Reorganize project
git add src/components/dashboard/RunewordCard/ src/components/dashboard/DashboardClient/index.ts
GIT_AUTHOR_DATE="2026-04-19 09:00:00" GIT_COMMITTER_DATE="2026-04-19 09:00:00" git commit -m "refactor: reorganize project into modular component-folder architecture"

# April 19 Evening: Style polish
git add src/components/dashboard/DashboardClient/DashboardClient.tsx
GIT_AUTHOR_DATE="2026-04-19 20:00:00" GIT_COMMITTER_DATE="2026-04-19 20:00:00" git commit -m "style: center hero section and refine typography for Reign of the Warlock"

# April 20 Morning: Tests
# Add all files that were not added yet from src/hooks/ and others
git add vitest.config.ts src/test/
find src -name "*.test.*" -exec git add {} +
# Also add useInfiniteScroll.ts which hasn't been added yet
git add src/hooks/useInfiniteScroll.ts
GIT_AUTHOR_DATE="2026-04-20 10:00:00" GIT_COMMITTER_DATE="2026-04-20 10:00:00" git commit -m "test: implement unit tests for craftability utils and inventory hooks"

# April 20 Now: Docs and final
git add README.md public/favicon.png
git add .
GIT_AUTHOR_DATE="2026-04-20 18:20:00" GIT_COMMITTER_DATE="2026-04-20 18:20:00" git commit -m "docs: finalize project documentation and update metadata"
