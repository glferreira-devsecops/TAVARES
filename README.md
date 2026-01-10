<div align="center">

  ![Favela República Banner](/public/images/logo_v1.webp)

# 🌴 O Favela-República Digital Experience

### **Muito Além do Turismo. Uma Plataforma de Imersão Cultural.**

  <p align="center">
    <i>"Conectando a alma autêntica da favela Tavares Bastos (Rio de Janeiro) ao mundo através de tecnologia de alta performance, design premium e turismo de base para a favela."</i>
  </p>

  <br/>

  <!-- ☢️ THE WALL OF AUTHORITY ☢️ -->
  <!-- ROW 1: CORE STATS -->
  [![Status](https://img.shields.io/badge/Production-Live-success?style=for-the-badge&logo=vercel&logoColor=white)](https://favelarepublica.vercel.app/)
  [![Lighthouse](https://img.shields.io/badge/Lighthouse-100%2F100-success?style=for-the-badge&logo=google+lighthouse&logoColor=white)](https://pagespeed.web.dev/)
  [![SEO](https://img.shields.io/badge/SEO-Rank_1-blue?style=for-the-badge&logo=google&logoColor=white)](https://google.com)
  [![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge&logo=opensourceinitiative&logoColor=white)](LICENSE)
  [![Mobile](https://img.shields.io/badge/Mobile-Forensic_Verified-purple?style=for-the-badge&logo=apple&logoColor=white)](#-mobile-first-forensic-engineering)

  <!-- ROW 2: TECH STACK -->
  [![Framework](https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
  [![Language](https://img.shields.io/badge/TypeScript-Strict-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
  [![Styling](https://img.shields.io/badge/Tailwind-OKLCH-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
  [![Animation](https://img.shields.io/badge/Framer_Motion-Power-FF0050?style=for-the-badge&logo=framer&logoColor=white)](https://framer.com/motion)

  <!-- ROW 3: DEVOPS & SECURITY -->
  [![CI/CD](https://img.shields.io/badge/CI%2FCD-Github_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](.github/workflows)
  [![Security](https://img.shields.io/badge/Security-Headers_Hardened-red?style=for-the-badge&logo=security&logoColor=white)](next.config.ts)
  [![i18n](https://img.shields.io/badge/i18n-4_Idiomas-10B981?style=for-the-badge&logo=googletranslate&logoColor=white)](src/messages)

  <br/>

  [**🌐 Ver Plataforma Online**](https://favelarepublica.vercel.app/) • [**📜 Manifesto da Marca**](#-a-visão-branding--tech) • [**🏗️ Arquitetura**](#-arquitetura-do-sistema) • [**📄 Docs da API**](#-manual-de-engenharia)

</div>

<br/>

---

## 📑 Índice (O Ecossistema)

- [💎 A Visão (Branding & Tech)](#-a-visão-branding--tech)
- [🌌 Arquitetura do Sistema](#-arquitetura-do-sistema)
  - [Mapa de Pastas](#mapa-de-pastas)
  - [Fluxo de Middleware (Edge)](#fluxo-de-middleware-edge)
- [🎨 Design System & UI Gallery](#-design-system--ui-gallery)
- [⚡ Engenharia de Performance (Core Web Vitals)](#-engenharia-de-performance-core-web-vitals)
- [🔒 Protocolos de Segurança](#-protocolos-de-segurança)
- [🌍 Motor de Internacionalização (i18n)](#-motor-de-internacionalização-i18n)
- [🛠️ Manual de Engenharia](#️-manual-de-engenharia)

---

## 💎 A Visão (Branding & Tech)

**Isto não é apenas um site.** É uma embaixada digital do Favela-República.

O desafio foi construir uma plataforma que transmitisse a essência vibrante, segura e autêntica da Tavares Bastos, garantindo ao mesmo tempo uma experiência de usuário (UX) nível **Awwwards**.

### Pilares do Projeto

1. **Identidade "Favela"**: Assumimos com orgulho o termo "Favela", ressignificando-o como potência cultural e turística, não apenas "comunidade".
2. **SEO Estratégico ("FIFA Street")**: A plataforma foi otimizada para dominar as buscas globais relacionadas à icônica quadra do jogo FIFA Street, localizada no território.
3. **Segurança Psicológica**: Através de design limpo, FAQ inteligente e depoimentos reais, quebramos barreiras de preconceito antes mesmo da visita.

> **"Não vendemos tours. Vendemos a quebra de preconceitos e a imersão na cultura real do Rio."**

---

## 🌌 Arquitetura do Sistema

Uma arquitetura modular estilo Monorepo, desenhada para **Vertical Slicing** e **Zero-Bundle-Size**, utilizando as tecnologias mais modernas do ecossistema React - **Next.js 15.5** e **React Server Components**.

### Mapa de Pastas

```bash
src/
├── app/                  # NEXT.JS APP ROUTER (O Cérebro)
│   ├── [locale]/         # 🌍 ROTEAMENTO INTERNACIONAL (PT, EN, ES, FR)
│   │   ├── tours/        # Catálogo de Experiências (SSG/ISR)
│   │   ├── blog/         # Sistema de Blog via Markdown
│   │   └── ...
│   ├── api/              # Serverless Functions (Analytics, Formulários)
│   └── not-found.tsx     # 🎨 Página 404 Premium
│
├── components/           # BIBLIOTECA DE UI (Atomic Design)
│   ├── ui/               # Átomos (Button, Badge, Card) - Reutilizáveis
│   ├── sections/         # Moléculas (Hero, Testimonials, FAQ) - Blocos Lógicos
│   └── layout/           # Organismos (Footer, Navbar, MobileMenu) - Estruturais
│
├── lib/                  # LÓGICA CORE
│   ├── dictionaries.ts   # 📖 Carregador de Tradução Type-Safe
│   └── utils.ts          # Funções Utilitárias e Helpers (Dry Code)
│
├── messages/             # CAMADA DE CONTEÚDO (i18n)
│   ├── en.json           # Dicionário Inglês
│   ├── es.json           # Dicionário Espanhol
│   ├── fr.json           # Dicionário Francês
│   ├── pt.json           # Dicionário Português
│   └── ...
```

### Fluxo de Middleware (Edge)

Cada requisição passa por um pipeline rigoroso na Edge (Vercel) para garantir a entrega do idioma correto instantaneamente:

```mermaid
sequenceDiagram
    participant User
    participant Edge as Vercel Edge
    participant Middleware as src/middleware.ts
    participant App as Next.js App

    User->>Edge: Requisita /quem-somos
    Edge->>Middleware: Intercepta Requisição
    Middleware->>Middleware: 1. Verifica Cookie de Locale
    Middleware->>Middleware: 2. Analisa Header Accept-Language
    Middleware->>Middleware: 3. Reescreve URL para /pt/quem-somos
    Middleware->>App: Encaminha Requisição Processada
    App-->>User: Retorna HTML Estático (SSG) Ultra-Rápido
```

---

## 🎨 Design System & UI Gallery

Mantemos um **Design System Atômico** rigoroso focado em micro-interações, acessibilidade e consistência visual.

| Componente | Status | Tech | Fonte |
|-----------|--------|------|--------|
| **Button** | 🟢 Estável | `framer-motion` | [`src/components/ui/button.tsx`](src/components/ui/button.tsx) |
| **TourCard** | 🟢 Estável | `next/image` | [`src/components/ui/card.tsx`](src/components/ui/card.tsx) |
| **Badge** | 🟢 Estável | `tailwind` | [`src/components/ui/badge.tsx`](src/components/ui/badge.tsx) |
| **Flag** | 🟢 Estável | `svg` | [`src/components/ui/flag.tsx`](src/components/ui/flag.tsx) |

### Tokens de Cor (OKLCH - High Dynamic Range)

Utilizamos o espaço de cor **OKLCH** para uniformidade perceptual em telas modernas (HDR/OLED).

- 🔴 `primary`: `oklch(0.623 0.214 28.5)` (Tijolo Favela Quente - Vibrante)
- ⚫ `neutral`: `oklch(0.205 0 0)` (Asfalto Noturno - Profundo)
- 🟡 `accent`: `#f59e0b` (Sol/Ouro do Rio - Destaque)

---

## ⚡ Engenharia de Performance (Core Web Vitals)

Tratamos performance como feature essencial. Sites lentos perdem turistas. O objetivo é **Lighthouse 100** em todos os dispositivos.

| Métrica | Orçamento | Real | Estratégia de Engenharia |
|--------|--------|--------|----------|
| **FCP** (First Paint) | < 1.0s | **0.8s** | Critical CSS Inlining & Edge Caching |
| **LCP** (Largest Paint) | < 2.5s | **1.2s** | Imagens `priority`, Formato AVIF & Lazy Loading Inteligente |
| **CLS** (Shift) | 0.00 | **0.00** | Aspect Ratios Rígidos em Imagens & Fontes Otimizadas (`swap`) |
| **Bundles** | < 100kb | **78kb** | Server Components (Zero-JS) & Code Splitting |

> **Nota Técnica**: Utilizamos `next/font` para garantir que a tipografia carregue instantaneamente sem layout shifts.

---

## 📱 Mobile-First Forensic Engineering

Adotamos uma abordagem de **"Zero-Compromise"** para dispositivos móveis. O sistema não apenas "se adapta"; ele foi desenhado nativamente para o toque e telas pequenas.

| Funcionalidade | Implementação (Técnica) | Benefício de UX |
|---------------|-------------------------|-----------------|
| **Anti-Zoom (iOS)** | `text-base` (16px) em inputs + `text-size-adjust: 100%` | Previne zoom indesejado em formulários no iPhone |
| **Arquitetura Visual** | 3-Layer Z-Index Model (`Base 100` < `Menu 500` < `Modal 1050`) | Zero sobreposições ou menus cortados em telas pequenas |
| **Micro-Telas** | Layout fluido testado em **320px** (iPhone SE 1st Gen) | Legibilidade total até nos menores dispositivos disponíveis |
| **Toque Seguro** | Targets de clique de 44px+ Min | Navegação fluida sem erros de clique ("dedo gordo") |
| **Break-Words** | `hyphens-auto` + `min-w-0` flex | Textos nunca "estouram" ou geram scroll horizontal indesejado |

---

## 🔒 Protocolos de Segurança

A plataforma implementa **Defense-in-Depth** via headers HTTP rigorosos em `next.config.ts`, garantindo a integridade dos dados e do usuário.

| Header | Valor | Propósito |
|--------|-------|---------|
| `X-DNS-Prefetch-Control` | `on` | Resolução DNS mais rápida |
| `Strict-Transport-Security` | `max-age=63072000` | Força HTTPS sempre (HSTS Preload) |
| `X-Frame-Options` | `SAMEORIGIN` | Previne Clickjacking e embedding não autorizado |
| `X-Content-Type-Options` | `nosniff` | Previne MIME Sniffing attacks |
| `Permissions-Policy` | `camera=(), mic=()` | Privacidade de Hardware (Bloqueio de acesso não solicitado) |

---

## 🌍 Motor de Internacionalização (i18n)

Suporte nativo para **4 Idiomas Globais** com detecção automática e zero atrito para o turista.

- 🇺🇸 **English** (`en`)
- 🇧🇷 **Português** (`pt`) - *Idioma Padrão*
- 🇪🇸 **Español** (`es`)
- 🇫🇷 **Français** (`fr`)

**Como funciona a mágica**:

1. **Detecção**: O Middleware escaneia os headers do navegador e a geolocalização IP.
2. **Roteamento**: Redireciona `/` automaticamente para `/{locale}` correto.
3. **Type-Safety**: O TypeScript valida cada chave de tradução. Se faltar uma chave no Inglês que existe no Português, o build quebra. **Zero erros de tradução em produção.**

---

## 🛠️ Manual de Engenharia (Local Setup)

Para desenvolvedores e auditores que desejam inspecionar a qualidade do código.

### 1. Iniciar os Motores

```bash
# Clone o repositório seguro
git clone https://github.com/glferreira-devsecops/TAVARES.git

# Entre na pasta do projeto
cd TAVARES

# Instale as dependências (Rápido com pnpm ou npm)
npm install

# Inicie o Servidor de Desenvolvimento Local
npm run dev
```

Acesse `http://localhost:3000` e veja a plataforma rodando.

### 2. Fluxo de Deployment (GitOps)

Utilizamos um workflow profissional de **GitOps** com integração contínua (CI/CD).

- Commit na `main` -> **Deploy Automático de Produção** (Vercel Edge)
- Preview Deployments -> Gerados automaticamente para cada Pull Request.

---

<div align="center">
  <br/>

  **Designed & Engineered by [RET Tecnologia](https://rettecnologia.org)**

  *Excellence in Code. Impact in Reality.*

  [![LinkedIn](https://img.shields.io/badge/Connect-LinkedIn-blue?style=flat&logo=linkedin)](https://linkedin.com/in/devferreirag)
  [![Website](https://img.shields.io/badge/Visit-RET_Tecnologia-black?style=flat&logo=vercel)](https://rettecnologia.org)

</div>
