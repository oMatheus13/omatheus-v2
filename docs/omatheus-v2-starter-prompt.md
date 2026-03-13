# omatheus-v2 — Prompt de Inicialização para o Codex

## ⚠️ Instrução de execução

Este prompt é de **preparação de território** — setup, estrutura e configuração apenas.

**NÃO codar nenhuma página ou componente agora.**

Ordem de execução:
1. Inicializar o projeto (dependências, configs, estrutura de pastas)
2. Criar os design tokens (globals.css, tailwind.config.ts)
3. Organizar os assets fornecidos nas pastas corretas
4. Criar apenas os arquivos base: App.tsx, main.tsx, PageWrapper, lib/gsap.ts, types/, data/
5. Confirmar que o projeto roda com "npm run dev" sem erros

As páginas serão construídas em sessões separadas, uma por vez — começando pelo index (Home).

---


## Contexto
Site pessoal de Matheus Farias (omatheus.com) — v2 completo do zero.
Construtor, empreendedor, criador do Método CIER.
Foco principal: **Umoya Pré-Moldados** (empresa física, projeto principal) + **Bússola DBV** (produto digital em construção, projeto secundário).
CIER presente como método que embasa tudo — contexto narrativo, não produto para vender.

### Referências visuais
- **Lando Norris** (landonorris.com) — blobs reativos ao cursor no hero, WebGL, identidade física do produto como identidade visual
- **Charles Leclerc** (charlesleclerc.com) — scroll horizontal dentro do scroll vertical, transições cinematográficas, texto que chega em direções diferentes, tipografia em movimento
- **Linear.app** — dark mode editorial sofisticado, tipografia grande, animações suaves de scroll

---

## Stack

```
React 18 + TypeScript + Vite 5
React Router DOM v6         → navegação SPA
GSAP + @gsap/react + ScrollTrigger  → animações pesadas, scroll cinematográfico
Anime.js v4                 → micro-interações, stagger de texto, hover de UI
Framer Motion               → transições de rota entre páginas
Three.js + @react-three/fiber + @react-three/drei  → 3D na seção Umoya
Tailwind CSS v3             → utilitários base
CSS Modules                 → estilo dos componentes complexos
```

---

## Estrutura de Pastas

```
omatheus-v2/
├── public/
│   ├── fonts/
│   │   └── Melodrama/          ← fonte display (títulos)
│   │       ├── Melodrama-Regular.woff2
│   │       ├── Melodrama-Medium.woff2
│   │       └── Melodrama-Bold.woff2
│   ├── models/
│   │   └── umoya/              ← modelos 3D .glb da Umoya (vigota, pingadeira)
│   │       ├── vigota.glb
│   │       └── pingadeira.glb
│   └── fragments/              ← assets estáticos de cada fragmento
│       ├── o-que-o-mundo-deveria-saber/
│       │   ├── assets/         ← imagens, mockups, carrosséis (migrar do v1)
│       │   └── fonts/          ← fontes exclusivas do fragmento se houver
│       └── o-fracasso-e-seu-melhor-amigo/
│           ├── assets/
│           └── fonts/
│
├── src/
│   ├── assets/
│   │   └── images/
│   │
│   ├── components/
│   │   ├── ui/                 ← componentes atômicos do design system
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   └── Button.module.css
│   │   │   ├── Badge/
│   │   │   ├── Tag/
│   │   │   └── Divider/
│   │   │
│   │   ├── layout/             ← estrutura de página
│   │   │   ├── Header/
│   │   │   │   ├── Header.tsx
│   │   │   │   └── Header.module.css
│   │   │   ├── Footer/
│   │   │   └── PageWrapper/    ← wrapper com Framer Motion para transições
│   │   │
│   │   └── sections/           ← seções completas de página
│   │       ├── Hero/
│   │       ├── Umoya/
│   │       ├── BussolaDBV/
│   │       ├── CIER/
│   │       ├── Fragmentos/
│   │       ├── Ferramentas/
│   │       └── Contato/
│   │
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Sobre.tsx
│   │   ├── Fragmentos.tsx
│   │   ├── Fragmento.tsx       ← página individual de fragmento
│   │   ├── Ferramentas.tsx
│   │   └── Contato.tsx
│   │
│   ├── hooks/
│   │   ├── useGSAP.ts          ← helper para GSAP com cleanup automático
│   │   ├── useScrollTrigger.ts
│   │   └── useCursor.ts        ← cursor customizado
│   │
│   ├── lib/
│   │   ├── gsap.ts             ← instância configurada do GSAP com plugins
│   │   └── three.ts            ← helpers Three.js
│   │
│   ├── styles/
│   │   ├── globals.css         ← tokens CSS + reset + @font-face
│   │   ├── typography.css      ← escala tipográfica
│   │   └── animations.css      ← keyframes globais
│   │
│   ├── data/
│   │   ├── fragmentos.ts       ← metadata de todos os fragmentos
│   │   └── projetos.ts         ← data dos projetos (Umoya, Bússola)
│   │
│   ├── fragments/              ← cada fragmento é um módulo React lazy-loaded
│   │   ├── _template/          ← copiar para criar novo fragmento
│   │   │   ├── index.tsx
│   │   │   ├── fragment.module.css
│   │   │   ├── tokens.ts
│   │   │   └── meta.ts
│   │   ├── o-que-o-mundo-deveria-saber/
│   │   │   ├── index.tsx
│   │   │   ├── fragment.module.css
│   │   │   ├── tokens.ts
│   │   │   └── meta.ts
│   │   └── o-fracasso-e-seu-melhor-amigo/
│   │       ├── index.tsx
│   │       ├── fragment.module.css
│   │       ├── tokens.ts
│   │       └── meta.ts
│   │
│   ├── types/
│   │   ├── fragmento.ts
│   │   └── projeto.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
│
├── .eslintrc.cjs
├── .prettierrc
├── tailwind.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── package.json
```

---

## Design Tokens — globals.css

```css
/* ============================================
   OMATHEUS V2 — DESIGN TOKENS
   Brandbook 2025 — Matheus Farias
   ============================================ */

@font-face {
  font-family: 'Melodrama';
  src: url('/fonts/Melodrama/Melodrama-Regular.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: 'Melodrama';
  src: url('/fonts/Melodrama/Melodrama-Medium.woff2') format('woff2');
  font-weight: 500;
  font-display: swap;
}
@font-face {
  font-family: 'Melodrama';
  src: url('/fonts/Melodrama/Melodrama-Bold.woff2') format('woff2');
  font-weight: 700;
  font-display: swap;
}

:root {
  /* ── CORES ───────────────────────────────── */
  /* Primárias */
  --color-obsidiana:     #0f1219;   /* Presença e Autoridade — base dark */
  --color-musgo:         #3d4f3c;   /* Impulso de Ação */
  --color-terracota:     #b97d52;   /* Conexão Criativa */
  --color-areia:         #f0ebe0;   /* Acolhimento Visual — texto claro */
  --color-cinza:         #8c8c8c;   /* Base Clara — neutro */

  /* Variações */
  --color-obsidiana-80:  rgba(15, 18, 25, 0.8);
  --color-musgo-20:      rgba(61, 79, 60, 0.2);
  --color-terracota-60:  rgba(185, 125, 82, 0.6);
  --color-areia-10:      rgba(240, 235, 224, 0.1);

  /* Semânticas */
  --color-bg:            var(--color-obsidiana);
  --color-bg-subtle:     #161b24;
  --color-surface:       rgba(240, 235, 224, 0.04);
  --color-surface-hover: rgba(240, 235, 224, 0.08);
  --color-border:        rgba(240, 235, 224, 0.1);
  --color-text:          var(--color-areia);
  --color-text-muted:    rgba(240, 235, 224, 0.5);
  --color-accent:        var(--color-terracota);
  --color-accent-green:  var(--color-musgo);

  /* ── TIPOGRAFIA ──────────────────────────── */
  --font-display:        'Melodrama', Georgia, serif;
  --font-body:           'Work Sans', system-ui, sans-serif;

  /* Escala — clamp responsivo */
  --text-xs:    clamp(0.75rem,  1vw,  0.875rem);
  --text-sm:    clamp(0.875rem, 1.2vw, 1rem);
  --text-base:  clamp(1rem,     1.5vw, 1.125rem);
  --text-lg:    clamp(1.125rem, 2vw,   1.5rem);
  --text-xl:    clamp(1.5rem,   3vw,   2rem);
  --text-2xl:   clamp(2rem,     4vw,   3rem);
  --text-3xl:   clamp(3rem,     6vw,   5rem);
  --text-4xl:   clamp(5rem,     10vw,  9rem);
  --text-hero:  clamp(4rem,     12vw,  14rem);

  /* Line heights (brandbook) */
  --leading-tight:   1.2;
  --leading-snug:    1.35;
  --leading-normal:  1.5;
  --leading-relaxed: 1.6;

  /* Letter spacing */
  --tracking-tight:  -0.02em;
  --tracking-normal: 0;
  --tracking-wide:   0.08em;
  --tracking-wider:  0.16em;
  --tracking-widest: 0.24em;

  /* ── ESPAÇAMENTO (base 24px — brandbook) ─── */
  --space-1:   4px;
  --space-2:   8px;
  --space-3:   12px;
  --space-4:   16px;
  --space-6:   24px;
  --space-8:   32px;
  --space-12:  48px;
  --space-16:  64px;
  --space-24:  96px;
  --space-32:  128px;
  --space-48:  192px;

  /* ── LAYOUT ──────────────────────────────── */
  --container-sm:  640px;
  --container-md:  768px;
  --container-lg:  1024px;
  --container-xl:  1280px;
  --container-2xl: 1440px;

  /* Margens (brandbook: 40px por lado mínimo) */
  --margin-page:   clamp(24px, 5vw, 80px);

  /* ── BORDAS ──────────────────────────────── */
  /* raio 5-10% da menor face (brandbook) */
  --radius-sm:   4px;
  --radius-md:   8px;
  --radius-lg:   12px;
  --radius-xl:   20px;
  --radius-full: 9999px;

  /* ── SOMBRAS ─────────────────────────────── */
  /* Sombra Emocional (brandbook: blur 1-2px, opacidade 80% max) */
  --shadow-sm:   0 1px 2px rgba(0, 0, 0, 0.4);
  --shadow-md:   0 2px 8px rgba(0, 0, 0, 0.5);
  --shadow-lg:   0 8px 32px rgba(0, 0, 0, 0.6);
  --shadow-glow-terracota: 0 0 40px rgba(185, 125, 82, 0.15);
  --shadow-glow-musgo:     0 0 40px rgba(61, 79, 60, 0.2);

  /* ── TRANSIÇÕES ──────────────────────────── */
  --duration-fast:   150ms;
  --duration-base:   300ms;
  --duration-slow:   600ms;
  --duration-slower: 1000ms;
  --ease-default:    cubic-bezier(0.4, 0, 0.2, 1);
  --ease-out:        cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out:     cubic-bezier(0.4, 0, 0.6, 1);
  --ease-spring:     cubic-bezier(0.34, 1.56, 0.64, 1);

  /* ── Z-INDEX ─────────────────────────────── */
  --z-base:    0;
  --z-above:   10;
  --z-overlay: 100;
  --z-modal:   200;
  --z-cursor:  9999;
}

/* ── RESET ────────────────────────────────── */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
}

body {
  background-color: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: var(--leading-normal);
  overflow-x: hidden;
  cursor: none; /* cursor customizado via JS */
}

/* Cursor customizado */
* { cursor: none !important; }

img, video, svg {
  display: block;
  max-width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}
```

---

## tailwind.config.ts

```typescript
import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidiana: '#0f1219',
        musgo:     '#3d4f3c',
        terracota: '#b97d52',
        areia:     '#f0ebe0',
        cinza:     '#8c8c8c',
      },
      fontFamily: {
        display: ['Melodrama', 'Georgia', 'serif'],
        body:    ['Work Sans', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
} satisfies Config
```

---

## vite.config.ts

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@':          path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages':     path.resolve(__dirname, './src/pages'),
      '@hooks':     path.resolve(__dirname, './src/hooks'),
      '@lib':       path.resolve(__dirname, './src/lib'),
      '@styles':    path.resolve(__dirname, './src/styles'),
      '@data':      path.resolve(__dirname, './src/data'),
      '@types':     path.resolve(__dirname, './src/types'),
    },
  },
  assetsInclude: ['**/*.glb', '**/*.gltf'],
})
```

---

## package.json — dependências

```json
{
  "name": "omatheus-v2",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev":     "vite",
    "build":   "tsc && vite build",
    "preview": "vite preview",
    "lint":    "eslint src --ext ts,tsx --report-unused-disable-directives"
  },
  "dependencies": {
    "react":                      "^18.3.1",
    "react-dom":                  "^18.3.1",
    "react-router-dom":           "^6.27.0",
    "framer-motion":              "^11.11.0",
    "gsap":                       "^3.12.5",
    "@gsap/react":                "^2.1.1",
    "animejs":                    "^4.0.0",
    "three":                      "^0.169.0",
    "@react-three/fiber":         "^8.17.10",
    "@react-three/drei":          "^9.114.0"
  },
  "devDependencies": {
    "@types/react":               "^18.3.11",
    "@types/react-dom":           "^18.3.1",
    "@types/three":               "^0.169.0",
    "@vitejs/plugin-react":       "^4.3.3",
    "autoprefixer":               "^10.4.20",
    "postcss":                    "^8.4.47",
    "tailwindcss":                "^3.4.14",
    "typescript":                 "^5.6.3",
    "vite":                       "^5.4.10",
    "@typescript-eslint/eslint-plugin": "^8.0.0",
    "@typescript-eslint/parser":        "^8.0.0",
    "eslint":                           "^9.0.0",
    "eslint-plugin-react-hooks":        "^5.0.0"
  }
}
```

---

## src/lib/gsap.ts — GSAP configurado

```typescript
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, TextPlugin, SplitText)

export { gsap, ScrollTrigger }
```

---

## src/App.tsx — estrutura de rotas

```tsx
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from '@components/layout/Header/Header'
import Footer from '@components/layout/Footer/Footer'
import Home from '@pages/Home'
import Sobre from '@pages/Sobre'
import Fragmentos from '@pages/Fragmentos'
import FragmentoPage from '@pages/Fragmento'
import Ferramentas from '@pages/Ferramentas'
import Contato from '@pages/Contato'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"              element={<Home />} />
        <Route path="/sobre"         element={<Sobre />} />
        <Route path="/fragmentos"    element={<Fragmentos />} />
        <Route path="/fragmentos/:slug" element={<FragmentoPage />} />
        <Route path="/ferramentas"   element={<Ferramentas />} />
        <Route path="/contato"       element={<Contato />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  )
}
```

---

## src/components/layout/PageWrapper — transição de página

```tsx
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
  exit:    { opacity: 0, y: -10, transition: { duration: 0.3 } },
}

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  )
}
```

---

## src/types/fragmento.ts

```typescript
export interface Fragmento {
  id:          string
  slug:        string
  titulo:      string
  subtitulo?:  string
  ano:         number
  categoria:   'design' | 'identidade' | 'produto' | 'texto' | 'codigo' | 'outro'
  descricao:   string
  thumbnail:   string
  tema: {
    bgColor:    string
    textColor:  string
    accentColor: string
  }
  links?: {
    live?:   string
    github?: string
  }
}
```

---

## src/types/projeto.ts

```typescript
export interface Projeto {
  id:         string
  slug:       string
  nome:       string
  tagline:    string
  descricao:  string
  status:     'ativo' | 'construindo' | 'pausado'
  url?:       string
  github?:    string
  logo?:      string
  cor:        string           // cor de destaque do projeto
  tags:       string[]
}
```

---

## src/data/projetos.ts

```typescript
import type { Projeto } from '@types/projeto'

export const projetos: Projeto[] = [
  {
    id:        'umoya',
    slug:      'umoya',
    nome:      'Umoya Pré-Moldados',
    tagline:   'Construindo Garanhuns com as próprias mãos.',
    descricao: 'Empresa de pré-moldados em Garanhuns-PE. Vigota, pingadeira e estrutura para quem constrói de verdade.',
    status:    'ativo',
    url:       'https://umoya.omatheus.com',
    cor:       '#b97d52',
    tags:      ['construção civil', 'pré-moldados', 'Garanhuns', 'PE'],
  },
  {
    id:        'bussola-dbv',
    slug:      'bussola-dbv',
    nome:      'Bússola DBV',
    tagline:   'Navegando com propósito.',
    descricao: 'App para jovens do DBV. Em construção.',
    status:    'construindo',
    url:       'https://dbv.omatheus.com',
    cor:       '#3d4f3c',
    tags:      ['app', 'DBV', 'jovens'],
  },
]
```

---

## Arquitetura de páginas

```
/                  → Hero cinematográfico + Umoya (foco) + Bússola DBV + CIER (contexto) + Contato
/sobre             → História + método CIER (narrativa scrollada)
/fragmentos        → Galeria animada com scroll cinematográfico
/fragmentos/:slug  → Página individual do fragmento (lazy-loaded)
/ferramentas       → oMatheusOS — interface de sistema operacional
/contato           → Simples, direto
```

---

## Sistema de Animações — inspiração Leclerc + Norris

### Responsabilidades por biblioteca
```
GSAP + ScrollTrigger  → animações de scroll, timelines de entrada de seção,
                        parallax, scroll horizontal dentro do vertical
Anime.js v4           → stagger de letras/palavras, micro-interações de UI,
                        hover de cards, tracking do cursor
Framer Motion         → transições de rota entre páginas (AnimatePresence)
```

### Padrões obrigatórios

**Entrada de texto (inspiração Leclerc)**
Usar GSAP SplitText em todos os títulos h1/h2. Cada palavra entra com direção alternada:
- Palavra 1 → vem da esquerda (x: -60)
- Palavra 2 → vem de baixo (y: 40)
- Palavra 3 → vem da direita (x: 60)
- Stagger: 0.08s entre palavras, ease: "power3.out"

**Scroll horizontal na galeria de Fragmentos**
A seção de fragmentos usa ScrollTrigger com `horizontal: true` — o usuário scrolla verticalmente e os cards deslizam horizontalmente da direita para a esquerda. Implementar com:
```javascript
gsap.to(cardsContainer, {
  x: () => -(cardsContainer.scrollWidth - window.innerWidth),
  ease: "none",
  scrollTrigger: {
    trigger: sectionRef,
    pin: true,
    scrub: 1,
    end: () => "+=" + cardsContainer.scrollWidth,
  }
})
```

**Transição de card → página de fragmento**
Ao clicar num card de fragmento: o card expande com clip-path até preencher a viewport antes de navegar. Usar Framer Motion `layoutId` no thumbnail para a transição compartilhada.

**Cursor customizado**
Dois elementos: dot (6px, segue o cursor instantaneamente) + ring (24px, segue com delay de 0.1s via Anime.js). No hover de cards e CTAs: ring expande para 48px e muda cor para terracota (#b97d52).

**Entrada de seções no scroll**
Cada seção usa ScrollTrigger com `start: "top 80%"`. Elementos entram em direções diferentes dependendo da posição:
- Elementos à esquerda → entram da esquerda
- Elementos à direita → entram da direita  
- Elementos centrais → entram de baixo
- Sempre com opacity 0→1 e ease "power2.out", duration 0.8s

**Marquee infinito**
Faixa de thumbnails/logos abaixo da galeria de fragmentos em loop infinito da direita para esquerda. Velocidade constante com GSAP:
```javascript
gsap.to(marqueeInner, {
  x: "-50%",
  duration: 20,
  ease: "none",
  repeat: -1,
})
```

---

## Fragmentos — Arquitetura

### Filosofia
Fragmentos têm **identidade Matheus Farias** — dark, Melodrama, paleta da marca — mas cada um com sua própria personalidade dentro do sistema. Como uma revista com diagramação consistente onde cada matéria tem seu clima.

### Lazy loading por fragmento
```tsx
// src/pages/Fragmento.tsx
const FragmentoComponent = lazy(
  () => import(`@/fragments/${slug}/index.tsx`)
)
```
O bundle de cada fragmento só carrega quando o usuário abre. Assets pesados (imagens, fontes exclusivas) ficam em `/public/fragments/[slug]/`.

### Estrutura da página individual de fragmento

Todas as páginas de fragmento seguem este template:

```
1. Hero          → thumbnail grande fullscreen + título em Melodrama
2. Intro         → categoria, ano, descrição curta
3. Desafio       → narrativa do problema (texto + imagem)
4. Processo      → imagens do processo, rascunhos
5. Solução       → resultado final em destaque
6. CIER          → os 4 pilares aplicados a este projeto
7. Galeria       → lightbox com todos os assets
8. Depoimento    → se houver, em destaque tipográfico
9. Resultado     → impacto / o que abriu
10. CTA          → próximo fragmento (navegação) + link externo se houver
```

### meta.ts de cada fragmento
```typescript
export const meta = {
  slug:       'o-que-o-mundo-deveria-saber',
  titulo:     'O Que o Mundo Deveria Saber',
  subtitulo:  'Design editorial e ilustração',
  ano:        2024,
  categoria:  'editorial' as const,
  thumbnail:  '/fragments/o-que-o-mundo-deveria-saber/assets/fotos-livro-fisico/Book_Dust_Jacket_Mockup_1.png',
  destaque:   true,   // aparece em 2 colunas na galeria
  cier: {
    coragem:   'Aceitei um desafio totalmente novo, sem domínio técnico.',
    improviso: 'Aprendi editoração enquanto executava.',
    execucao:  'Entregue com dedicação e foco no detalhe.',
    recomeco:  'Cada erro virou aprendizado. Marco zero da Editora Umoya.',
  }
}
```

### Galeria de Fragmentos — layout do grid
```
Cards normais:    1 coluna no grid (aspect-ratio 4/3)
Cards destaque:   2 colunas (fragmentos com destaque: true)
Separação:        1px gap com background da cor de borda (grade fina)
Hover:            thumbnail scale(1.03) + desaturação remove + seta terracota
```

---

## Notas para o Codex implementar

1. **Fonte Melodrama** — baixar de fontshare.com/fonts/melodrama e colocar os .woff2 em `/public/fonts/Melodrama/`

2. **Work Sans** — importar via Google Fonts no `index.html`:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
   ```

3. **Cursor customizado** — criar componente `<CustomCursor />` com dot (6px) + ring (24px). Ring segue com delay via Anime.js. No hover de elementos interativos: ring expande pra 48px e fica terracota (#b97d52). Body tem `cursor: none !important`.

4. **GSAP SplitText** — registrar plugin no `src/lib/gsap.ts`. Usar em todos os títulos h1/h2 com entrada de palavras em direções alternadas (esquerda, baixo, direita).

5. **Modelos 3D da Umoya** — arquivos .glb (vigota.glb, pingadeira.glb) serão fornecidos pelo cliente. Colocar em `/public/models/umoya/`. Usar apenas na seção Umoya, não no hero pessoal.

6. **Scroll horizontal nos Fragmentos** — usar GSAP ScrollTrigger com pin na seção. Cards deslizam da direita pra esquerda enquanto o usuário scrolla verticalmente.

7. **Lazy loading dos fragmentos** — usar React.lazy + Suspense com dynamic import por slug. Cada fragmento é um bundle separado.

8. **Assets dos fragmentos** — migrar pasta `public/fragments/` do repo v1 (omatheus) para o v2 sem alteração. Os caminhos das imagens já estão mapeados nos meta.ts.

9. **ScrollTrigger.refresh()** — chamar no `useLayoutEffect` de cada página para evitar bugs de posicionamento após transições de rota.

10. **Gradientes emocionais** (brandbook):
    - Obsidiana → Musgo = "da estabilidade à presença"
    - Areia → Terracota = "do acolhimento à ação"
    - Obsidiana → Areia = "da densidade à leveza"

11. **Ruído sutil** — aplicar via pseudo-elemento com SVG filter nos fundos de seção. Granulação fina, imperfeição elegante.

12. **Efeito Vidro Real** — `backdrop-filter: blur(12px)` + `border: 1px solid rgba(240,235,224,0.08)` nos cards do oMatheusOS.

13. **Transição card → fragmento** — usar Framer Motion `layoutId` no thumbnail para transição compartilhada. O card expande até preencher a viewport antes de montar a página.

---

## Repo
Criar como `omatheus-v2` no GitHub — NÃO alterar o repo `omatheus` (v1 permanece como arquivo).
Deploy: Vercel (mesmo da v1).
Branch padrão: `main`. Criar branch `dev` para desenvolvimento.

---

## Importante — setup inicial

**Não criar a pasta raiz do projeto.** O terminal já estará aberto dentro da pasta correta. Rodar os comandos de instalação diretamente a partir daí.

**Assets — fornecidos pelo cliente.** Os assets serão colocados na raiz do projeto já selecionados. O Codex deve apenas organizá-los nos destinos corretos conforme tipo e nome:

- Fontes Melodrama (.woff2) → `./public/fonts/Melodrama/`
- Modelos 3D (.glb) → `./public/models/umoya/`
- Pastas de fragmentos (imagens) → `./public/fragments/[slug]/assets/` (preservar subpastas)
- Imagens globais (logo, favicon, og-image) → `./public/`

Usar `mv` para mover da raiz para os destinos.
