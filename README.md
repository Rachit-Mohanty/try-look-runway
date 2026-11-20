# Try the Look — Runway

[![Live Deployment](https://shields.io)](https://vercel.app)
[![Bundler](https://shields.io)](https://vitejs.dev)
[![Language](https://shields.io)](https://typescriptlang.org)
[![Architecture](https://shields.io)](https://mozilla.org)

A zero-dependency, client-side TypeScript spatial lookbook and interactive runway showcase engineered on Vite and native ES2022 Web Components.

---

## Architecture & System Overview

```text
┌───────────────────────────┐      ┌────────────────────────────┐      ┌──────────────────────────┐
│   Custom Web Components   │─────▶│  Reactive State & Spring   │─────▶│  GPU-Composited Viewport │
│  (Shadow DOM / Slots /    │◀─────│  Physics Engine (TS)       │◀─────│  (CSS3 Transforms, 3D    │
│   Lifecycle Callbacks)    │      │  RAF Loop & Gesture Input  │      │   Perspective & Spatial) │
└───────────────────────────┘      └────────────────────────────┘      └──────────────────────────┘
```

- **Component Model (Native Web Components):** Encapsulates UI primitives using standard `HTMLElement` subclasses, Shadow DOM isolation, and native lifecycle hooks (`connectedCallback`, `disconnectedCallback`, `attributeChangedCallback`) with zero framework overhead.
- **Physics & Animation Pipeline:** Drives fluid runway transitions and spatial lookbook interactions via custom spring physics calculations synchronized to `requestAnimationFrame` (rAF) and hardware-accelerated CSS `transform` / `opacity` layers.
- **Type-Safe State & Asset Management (`tsconfig.json`):** Enforces strict TypeScript interfaces across lookbook data schemas, garment metadata, viewport coordinates, and pointer/wheel gesture handlers.
- **Build & Bundling (`vite.config.ts`):** Uses Vite and ESBuild for fast TypeScript transpilation, Hot Module Replacement (HMR), asset hashing, and static bundle optimization.
- **Edge Delivery:** Deployed as a static SPA bundle via Vercel's global CDN (`try-look-runway.vercel.app`).

---

## Repository Structure

```text
try-look-runway/
├── public/                 # Unbundled static media, runway imagery, and root assets
├── src/                    # TypeScript source modules, Web Components, physics & state logic
├── .env.example            # Environment configuration template (if needed for build flags)
├── index.html              # SPA entry document and module bootstrapper
├── metadata.json           # Project manifest and application metadata
├── package.json            # Dev dependencies and build lifecycle scripts
├── package-lock.json       # Deterministic dependency lockfile
├── tsconfig.json           # Strict TypeScript compiler configuration
└── vite.config.ts          # Vite bundler and dev server configuration
```

---

## Local Development Setup

### Prerequisites

- **Node.js:** `>= 18.x` (LTS recommended)
- **Package Manager:** `npm` `>= 9.x`

### Installation & Execution

```bash
# Clone the repository
git clone https://github.com
cd try-look-runway

# Install deterministic dependencies
npm ci

# Start the Vite development server with HMR
npm run dev
```

### Build & Production Verification

```bash
# Run TypeScript type-checking and build optimized assets to dist/
npm run build

# Preview the production bundle locally
npm run preview
```

---

## Deployment (Vercel)

Configured for automated static deployments on Vercel:

- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Node.js Version:** `18.x` / `20.x`


