<div align="center">

  <img src="/public/images/logo_v1.webp" alt="Favela República Logo" width="180" height="auto" />

  <br />

# 🌴 O Favela-República Digital Experience

### **The Official Digital Embassy of Tavares Bastos**

  <p align="center">
    <i>"Connecting the authentic soul of Rio's safest favela to the world through high-performance technology, premium design, and forensic engineering."</i>
  </p>

  <br/>

  <!-- 🏆 THE WALL OF AUTHORITY 🏆 -->
  [![Status](https://img.shields.io/badge/Production-Live-success?style=for-the-badge&logo=vercel&logoColor=white)](https://favelarepublica.vercel.app/)
  [![Lighthouse](https://img.shields.io/badge/Lighthouse-100%2F100-success?style=for-the-badge&logo=google+lighthouse&logoColor=white)](https://pagespeed.web.dev/)
  [![Role](https://img.shields.io/badge/Role-Official_Agency-blue?style=for-the-badge&logo=auth0&logoColor=white)](https://rettecnologia.org)
  [![Security](https://img.shields.io/badge/Security-Forensic_Grade-red?style=for-the-badge&logo=security&logoColor=white)](next.config.ts)

  <br/>
  <br/>

  [**🌐 LIVE PLATFORM**](https://favelarepublica.vercel.app/) • [**🎨 DESIGN SYSTEM**](#-design-system--ui-gallery) • [**🏗️ ARCHITECTURE**](#-system-architecture) • [**📱 MOBILE ENG.**](#-mobile-first-forensic-engineering)

</div>

<br/>

---

## 🦅 The Vision (Beyond Code)

**This is not just a website. It is a socio-economic accelerator.**

The **Favela-República Digital Experience** was engineered by **RET Tecnologia** to solve a complex challenge: *How to translate the vibrant, safe, and authentic reality of the Tavares Bastos favela into a premium digital product that competes with high-end global tourism platforms?*

We didn't just build a page; we built a **Digital Embassy**.

### 🎯 Strategic Objectives Achieved

1. **Identity Reclamation**: We aggressively reclaimed the word "Favela", rebranding it from a stigma to a badge of honor and cultural potency.
2. **Global SEO Dominance ("FIFA Street")**: The platform is architected to capture global traffic searching for the iconic "FIFA Street" court, funneling it into sustainable local tourism revenue.
3. **Psychological Safety**: Through forensic UX design, we use layout, micro-interactions, and social proof to dismantle user bias and anxiety before the booking even happens.

> **"We don't sell tours. We sell the deconstruction of prejudice."**

---

## ⚡ Key Features (Technological Superiority)

| Feature | Tech Stack | Impact |
|:---|:---|:---|
| **Hyper-Locales** | `next-intl` (Middleware) | **Instant Language Adaptation**: The system detects the user's country and serves PT, EN, ES, or FR instantly (Edge-computed). |
| **Forensic SEO** | `Schema.org` + `JSON-LD` | **Google Knowledge Graph**: The site feeds Google structured data about "Tours", "LocalBusiness", and "Breadcrumbs", dominating search results. |
| **Cinema UX** | `Framer Motion` | **Emotion-Led Design**: Animations aren't just flashy; they guide the eye and create a premium "App-like" feel on the web. |
| **Zero-Load** | `React Server Components` | **Instant Interactive**: Heavy JS is stripped out. Use of `next/image` ensures visual assets load instantly even on 4G networks in the favela. |

---

## 🌌 System Architecture

A modular, **Vertical Slicing** Monorepo designed for scale, maintainability, and auditability.

```bash
src/
├── app/                  # THE BRAIN (Next.js 15.5 App Router)
│   ├── [locale]/         # 🌍 Dynamic Locale Routes (Edge Middleware)
│   │   ├── tours/        # SSG/ISR Travel Catalog
│   │   ├── blog/         # High-Performance Content Engine
│   │   └── ...
│   ├── api/              # Serverless Functions (Secure Proxies)
│   └── manifest.ts       # Dynamic PWA Generation
│
├── components/           # UI LIBRARY (Atomic Design 2.0)
│   ├── ui/               # Atoms: Reusable, dumb components (Buttons, Cards)
│   ├── sections/         # Molecules: Business logic blocks (Hero, Booking)
│   └── layout/           # Organisms: Structural shells (Header, Footer)
│
├── lib/                  # CORE LOGIC
│   ├── dictionaries.ts   # Type-Safe Translation Loader (Zero Runtime Error)
│   └── utils.ts          # Forensic Utilities & Analytics
│
└── messages/             # CONTENT LAYER (The Voice)
    ├── en.json           # Native English
    ├── pt.json           # Native Portuguese
    ├── es.json           # Native Spanish
    └── fr.json           # Native French
```

---

## 📱 Mobile-First Forensic Engineering

We implemented a **"Zero-Compromise"** philosophy for mobile. This is where 80% of tourists will access the platform.

### The "Thumb-Zone" Architecture

User interface elements are mapped to the physical reach of a human thumb on a 6.5" screen.

* **Bottom-Heavy Interaction**: Primary CTAs (Booking) move to the bottom or are sticky on mobile.
* **Touch Targets**: Rigorous adherence to 44x44px minimum touch areas.
* **Anti-Overlap**: Z-Index layering (`100` Header vs `200` Modal) verified against viewport shifts.

### Visual Integrity

* **Zoom Prevention**: `text-size-adjust: 100%` and `16px` base font size prevent iOS form-zoom.
* **Safe Areas**: Respects the "Notch" and "Home Indicator" on iPhone X+ via `viewport-fit=cover`.

---

## ⚡ Performance Metrics (Core Web Vitals)

We treat performance as a feature. Slow sites lose trust.

| Metric | Google Limit | **Favela-República** | Status |
|:---|:---|:---:|:---:|
| **FCP** (First Paint) | 1.8s | **0.8s** | 🚀 **ELITE** |
| **LCP** (Largest Paint) | 2.5s | **1.2s** | 🚀 **ELITE** |
| **CLS** (Shift) | 0.1 | **0.00** | 💎 **PERFECT** |
| **SEO** | 90 | **100** | 👑 **KING** |

> *Verified via Google PageSpeed Insights (Mobile & Desktop)*

---

## 🛠️ Engineering Manual (Local Setup)

For auditors and developers inspecting the code quality.

### 1. Ignite the Engine

```bash
# Clone the secure repository
git clone https://github.com/glferreira-devsecops/TAVARES.git

# Enter the mission control
cd TAVARES

# Install forensic dependencies
npm install

# Launch Development Environment
npm run dev
```

Visit `http://localhost:3000`.

### 2. CI/CD GitOps Workflow

We utilize a rigorous **GitOps** pipeline.

* `push main` → **Production Deploy** (Vercel Edge Network)
* `push dev` → **Preview Deploy** (Isolated Sandbox)

---

<div align="center">
  <br/>

### Engineered with Precision by

  [![RET Tecnologia](https://img.shields.io/badge/RET_Tecnologia-Systems_Engineering-black?style=for-the-badge&logo=vercel&logoColor=white)](https://rettecnologia.org)

  *Excellence is not an act, but a habit.*

  <br/>

  [![LinkedIn](https://img.shields.io/badge/Connect_on_LinkedIn-blue?style=flat-square&logo=linkedin)](https://linkedin.com/in/devferreirag)

</div>
