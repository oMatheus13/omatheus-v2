# omatheus-v2 — Prompt da Home (index)

## Contexto
Site pessoal de Matheus Farias (omatheus.com) — v2.
O território já foi preparado: projeto inicializado, tokens configurados, estrutura de pastas criada.
Esta sessão é exclusiva para construir a página Home (src/pages/Home.tsx) e seus componentes de seção.

---

## Sobre Matheus Farias

Nasceu e cresceu em Garanhuns, PE. Desde antes dos 10 anos já inventava coisas pra fazer e vender — catava palitos de picolé do chão pra fazer experimentos, vendia bolo no pote, biscoito, sacolé, aprendeu crochê com a filha da vizinha e fez cachecóis no tear de pregos. Nunca esperou ter tudo pra começar.

Aos 13 criou canal no YouTube, aprendeu a editar vídeo, fazer thumbnail e render no Blender — tudo na raça, num PC tão antigo que nem tem no Google. Fez uma render que levou 12h pra processar. O notebook veio anos depois — trocou o celular por ele. Em 7 dias a tela ficou toda verde. Trabalhou assim por mais de um ano usando AnyDesk no celular pra ver as cores. Foi nesse período que aprendeu Illustrator, criou marcas, identidades visuais e fez o trabalho de uma editora inteira sozinho — dois livros publicados do zero ao impresso.

Cada fase alimentou a próxima. Cozinheiro, youtuber, 3D, designer, editor, criador de conteúdo — nenhuma foi em vão. Tudo se juntou na Umoya.

O pai soltou uma ideia ao ar: "bora abrir um pré-moldados?" Matheus não recusou. Largou tudo. Foi construir com as mãos — com concreto e com tudo que aprendeu até ali. Menos de 1 ano: fábrica funcionando, 2 clientes grandes, 1 prédio em construção, OS interno completo (ERP, PDV, POP).

Nunca teve aulas sobre o que aprendeu. Aprendeu na curiosidade e na vontade de fazer algo de bom.

---

## Identidade visual

- Fundo base: #0f1219 (Obsidiana)
- Texto: #f0ebe0 (Areia)
- Destaque: #b97d52 (Terracota)
- Acento verde: #3d4f3c (Musgo)
- Fonte display: Melodrama (títulos grandes)
- Fonte corpo: Work Sans
- Tokens completos em src/styles/globals.css (já configurado)

---

## Animações

- GSAP + ScrollTrigger: animações de scroll, entradas direcionais, parallax
- Anime.js: micro-interações, stagger de letras, hover
- Framer Motion: já configura PageWrapper nesta página
- Cursor customizado (componente CustomCursor) já deve estar criado — importar

Padrão de entrada de texto:
Usar GSAP SplitText em h1/h2. Palavras entram em direções alternadas:
palavra 1 → x: -60, palavra 2 → y: 40, palavra 3 → x: 60. Stagger 0.08s, ease "power3.out".

Padrão de entrada de seções:
ScrollTrigger start "top 80%". Elementos à esquerda entram da esquerda, à direita da direita, centrais de baixo. Opacity 0→1, duration 0.8s, ease "power2.out".

---

## Estrutura da Home — seção por seção

### Seção 1 — Hero

Componente: src/components/sections/Hero/Hero.tsx

- Fundo Obsidiana com ruído sutil (SVG filter no pseudo-elemento)
- "MATHEUS FARIAS" em Melodrama, clamp(4rem, 12vw, 14rem), ocupando quase toda a largura
- Abaixo: "Eu começo, improviso, executo, erro e recomeço." em Work Sans, pequena, tracking 0.16em
- Sem foto, sem avatar, sem CTA — só nome e peso
- Animação de entrada: nome com GSAP SplitText letra por letra, stagger 0.04s
- Frase entra após o nome terminar, varrendo da esquerda com clip-path

---

### Seção 2 — O Padrão (narrativa de origem)

Componente: src/components/sections/Origem/Origem.tsx

Sem título óbvio. Texto narrativo em parágrafos, voz direta do Matheus.
Layout em zigue-zague diagonal — parágrafos alternam entre lado esquerdo e direito da tela, com deslocamento vertical entre eles criando um caminho diagonal. Não é um grid simétrico — é um rastro, como uma trilha.

Cada parágrafo entra vindo da sua direção natural (esquerdo vem da esquerda, direito vem da direita) com ScrollTrigger. O objeto 3D aparece no lado oposto ao texto — quando o texto está à esquerda, o 3D flutua à direita, e vice-versa.

Entre os parágrafos, uma linha fina (1px, cor border) conecta os blocos visualmente, reforçando a ideia de caminho contínuo.

Copy dos parágrafos:

Parágrafo 1 (palitos):
"Antes dos 10 anos, catava palitos de picolé do chão na saída da escola pra fazer experimentos que via na internet. Não tinha os materiais — então ia atrás."

Parágrafo 2 (bolo/tear):
"Vendia bolo no pote, biscoito, sacolé. Aprendeu crochê com a filha da vizinha. Fez cachecóis no tear de pregos e vendeu. Nunca esperou ter tudo pra começar."

Parágrafo 3 (Blender/relógio):
"Aos 13, criou canal no YouTube, aprendeu a editar vídeo e render no Blender — tudo na raça, num PC tão antigo que nem tem no Google. Fez uma render que levou 12 horas pra processar. Ficou olhando o progresso a noite toda."

Parágrafo 4 (notebook/tela verde):
"O notebook veio depois — trocou o celular por ele. Em 7 dias a tela ficou toda verde. Trabalhou assim por mais de um ano usando AnyDesk no celular pra ver as cores. Foi nesse período que aprendeu Illustrator, criou marcas, fez o trabalho de uma editora inteira sozinho."

Parágrafo 5 (virada — ponto de transição para a Umoya):
"Cada fase alimentou a próxima. O crochê ensinou paciência. O Blender ensinou forma. O Illustrator ensinou identidade. Os livros ensinaram narrativa. O código ensinou estrutura. Nenhuma foi em vão — porque tudo isso chegou ao mesmo tempo numa manhã em que meu pai soltou uma ideia ao ar."

Este parágrafo é o ponto de virada narrativo. Visualmente deve ter tratamento diferente dos anteriores — tipografia levemente maior, sem objeto 3D ao lado, centralizado na tela, como uma respiração antes da seção da Umoya. A linha de conexão do zigue-zague termina aqui e dá lugar ao divisor da próxima seção.

Objetos 3D por parágrafo:
Os modelos chegam aos poucos via repo — a seção DEVE funcionar sem eles (só texto).
Quando o arquivo existir em /public/models/historia/, o modelo aparece. Quando não existe, o layout se ajusta sem erro nem espaço vazio.

```
Parágrafo 1 → /public/models/historia/palitos.glb
Parágrafo 2 → /public/models/historia/tear.glb
Parágrafo 3 → /public/models/historia/relogio.glb
Parágrafo 4 → /public/models/historia/notebook.glb
```

Comportamento do 3D: ao entrar no viewport do parágrafo (ScrollTrigger), modelo aparece com fade-in + rotação suave em loop. Ao avançar pro próximo parágrafo, o anterior some. Iluminação: ambientLight fraca + pointLight terracota vindo de cima.

Implementar com React Three Fiber + Suspense. Usar useGLTF do @react-three/drei. Verificar existência do arquivo antes de tentar carregar — se não existir, renderizar null sem quebrar.

---

### Seção 3 — Umoya (O Recomeço)

Componente: src/components/sections/Umoya/Umoya.tsx

Divisor antes da seção — frase em Melodrama, centralizada, grande:
"Recomeçar não quer dizer que eu errei. É melhorar o que já estava bom."

Narrativa curta:
"O pai soltou uma ideia ao ar. Matheus não recusou. Largou tudo. Foi construir com as mãos — com concreto e com tudo que havia aprendido até ali."

Modelos 3D da vigota e pingadeira: /public/models/umoya/vigota.glb e pingadeira.glb
Aparecem em destaque, girando lentamente, iluminação dramática, fundo levemente mais claro que o Obsidiana base (#161b24).
Mesmo padrão: se o .glb não existir, seção funciona sem ele.

CTA: "Conheça a Umoya →"
Abre site da Umoya em nova aba. URL: https://umoya.omatheus.com (confirmar com cliente).
Estilo: texto com seta, sem botão pesado, hover sublinha em terracota.

---

### Seção 4 — Bússola DBV

Componente: src/components/sections/BussolaDBV/BussolaDBV.tsx

Não é seção de destaque — é uma menção presente. Sem 3D, sem animação pesada, sem peso visual equivalente à Umoya. Card compacto e elegante, integrado ao fluxo sem interromper o ritmo.

Contexto completo para o Codex escrever o copy com propriedade:
A Bússola DBV é uma plataforma digital criada por Matheus — um Desbravador — para os Desbravadores. Sem fins lucrativos. Nasceu há poucas semanas e já tem usuários ativos. É um espaço onde a comunidade pode acompanhar progresso nas classes, registrar especialidades, conectar clubes, explorar o guia do movimento e interagir numa comunidade feita pra quem vive os ideais do clube — fora das redes sociais comuns. Tem perfil de desbravador, rankings, conquistas, biblioteca e comunidade social. A visão é se tornar a principal plataforma digital dos Desbravadores.

Copy da descrição (adaptar com voz direta):
"Uma plataforma feita por um Desbravador pra quem vive os ideais do clube. Classes, especialidades, comunidade — tudo num só lugar."

Visual: card com borda sutil (1px rgba(240,235,224,0.1)), fundo levemente diferente do bg base (#161b24), badge "sem fins lucrativos" em Musgo, título em Melodrama médio, descrição em Work Sans pequena.

CTA: "Conhecer →" → https://bussola.omatheus.com (abre em nova aba)

---

### Seção 5 — CIER

Componente: src/components/sections/CIER/CIER.tsx

Não é venda. É o nome que Matheus deu pra um jeito de viver que ele já tinha antes de saber que tinha.

Cada pilar ocupa 100vh — tela inteira, sem escapatória. O usuário passa por cada um como se estivesse passando por uma câmara.

Layout por pilar:
- Letra do pilar (C / I / E / R) em Melodrama, tamanho absurdo — 30vw ou mais, quase saindo da tela
- Nome completo do pilar abaixo, menor mas ainda grande
- 2 frases em Work Sans, curtas, diretas
- Objeto 3D: um pilar grego clássico (coluna dórica/jônica simplificada) atravessando o texto — não ao lado, mas sobreposto, com z-index intercalado entre as camadas de texto. Parte do pilar fica atrás da letra gigante, parte fica na frente, criando profundidade real
- O pilar 3D reage levemente ao scroll (parallax sutil) — não gira, só se desloca no eixo Y enquanto o usuário passa

Um único modelo base de pilar grego: /public/models/cier/pilar.glb
Cada pilar da seção usa o mesmo modelo — o que muda é a iluminação e a cor do ponto de luz:
  C — luz terracota (#b97d52)
  I — luz musgo (#3d4f3c)
  E — luz areia fria (#f0ebe0) com baixa intensidade
  R — luz branca fria, mais dramática

```
C — Coragem
frases: "Dizer sim antes de saber tudo." / "Sempre foi assim."

I — Improviso
frases: "Sem o material certo." / "Com o que tinha."

E — Execução
frases: "Enquanto aprendia, já fazia." / "Sempre ao mesmo tempo."

R — Recomeço
frases: "Não é fracasso." / "É a próxima versão do que já estava bom."
```

Modelo chega aos poucos — fallback: letra gigante e frases sem o 3D, igualmente impactante.
CTA discreto após os 4 pilares: "entender o CIER →" → /sobre

---

### Seção 6 — Fragmentos

Componente: src/components/sections/FragmentosPreview/FragmentosPreview.tsx

Título: "Fragmentos" em Melodrama
Subtítulo: "Cada fase virou cicatriz. Cada cicatriz virou prova."

Preview dos fragmentos em scroll horizontal animado (GSAP ScrollTrigger horizontal).
Dados vêm de src/data/fragmentos.ts — renderizar os primeiros 3 com destaque=true primeiro.
Cards: thumbnail, categoria, título, ano.
Hover: thumbnail scale(1.03), título revela com clip-path da esquerda pra direita.

CTA: "Ver todos →" → /fragmentos

---

### Seção 7 — Contato

Componente: src/components/sections/Contato/Contato.tsx

Simples. Sem formulário.
Texto: "Se algo aqui fez sentido pra você — me fala."
Link: WhatsApp ou email — URL a ser fornecida pelo cliente, usar placeholder "#" por enquanto.

---

## Organização dos componentes

Cada seção é um componente isolado em src/components/sections/.
Home.tsx apenas importa e compõe as seções em ordem:

```tsx
// src/pages/Home.tsx
import PageWrapper from "@components/layout/PageWrapper/PageWrapper"
import Hero from "@components/sections/Hero/Hero"
import Origem from "@components/sections/Origem/Origem"
import Umoya from "@components/sections/Umoya/Umoya"
import BussolaDBV from "@components/sections/BussolaDBV/BussolaDBV"
import CIER from "@components/sections/CIER/CIER"
import FragmentosPreview from "@components/sections/FragmentosPreview/FragmentosPreview"
import Contato from "@components/sections/Contato/Contato"

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <Origem />
      <Umoya />
      <BussolaDBV />
      <CIER />
      <FragmentosPreview />
      <Contato />
    </PageWrapper>
  )
}
```

---

## Notas finais

- Modelos 3D ausentes nunca devem quebrar a página — sempre fallback gracioso
- Copy dos parágrafos está no briefing mas o Codex pode ajustar o tom mantendo a voz direta e sem floreio
- URLs de CTA marcadas como placeholder devem ter comentário // TODO: confirmar URL com cliente
- ScrollTrigger.refresh() no useLayoutEffect do PageWrapper
- Testar em mobile — animações de scroll devem funcionar no touch

---

## Sistema Visual — Efeitos, Gradientes e Transições

### Bibliotecas adicionais necessárias

Adicionar ao package.json:

```
@tsparticles/react        → partículas no hero (reage ao cursor)
tsparticles-slim          → engine leve do tsParticles
ogl                       → WebGL leve para luz vazando (alternativa ao Three.js para efeitos 2D)
```

Grain/ruído não precisa de biblioteca — implementar via canvas animado ou SVG feTurbulence filter (mais leve, zero dependência).

---

### Grain — granulação cinematográfica

Presente em todas as seções. Camada fixa, nunca chama atenção.

Implementar como componente global `<GrainOverlay />` montado no App.tsx, acima de tudo:

```tsx
// Canvas animado, atualiza a cada 2 frames (não todo frame — economiza CPU)
// position: fixed, inset: 0, z-index: var(--z-cursor - 1)
// mix-blend-mode: overlay
// opacity: 0.035
// pointer-events: none
```

O canvas gera ruído aleatório em cada atualização — é o que dá o efeito de "filme vivo", não uma textura estática repetida.

---

### Partículas — hero apenas

Usar `@tsparticles/react` com `tsparticles-slim`.

Configuração para o hero:
```typescript
{
  particles: {
    number: { value: 60 },
    color: { value: "#f0ebe0" },       // Areia
    opacity: { value: 0.15, random: true },
    size: { value: 1.5, random: true },
    move: {
      enable: true,
      speed: 0.4,
      direction: "none",
      random: true,
      outModes: "out"
    },
    interactivity: {
      onHover: {
        enable: true,
        mode: "repulse",               // partículas fogem do cursor
        distance: 80
      }
    }
  },
  background: { color: "transparent" },
  detectRetina: true
}
```

Partículas somem gradualmente com GSAP conforme o usuário rola para baixo — opacity 1→0 nos primeiros 30% do scroll.

---

### Luz vazando — efeitos de claridade

Não é uma biblioteca — é CSS + SVG filter aplicado em pontos estratégicos.

Implementar como componente `<LightLeak />` reutilizável:
```css
.light-leak {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  mix-blend-mode: screen;
  opacity: 0.12;
}
```

Onde aparece e com qual cor:
```
Hero              → Areia (#f0ebe0), 400px, atrás do nome, centro-topo
Umoya             → Terracota (#b97d52), 300px, atrás dos modelos 3D
CIER — Coragem    → Terracota (#b97d52), 500px, centro da tela
CIER — Improviso  → Musgo (#3d4f3c), 500px, centro
CIER — Execução   → Areia (#f0ebe0) opacidade 0.06, 500px, centro
CIER — Recomeço   → Branco frio (#e8e8f0), 500px, centro
```

A luz reage levemente ao scroll — GSAP ScrollTrigger move o centro da luz em parallax lento (y: -30 a +30) enquanto a seção passa.

---

### Gradientes entre seções — transições fluidas

Sem bordas entre seções. Cada seção tem um `padding-bottom` com gradiente longo que já começa a virar a cor da seção seguinte.

Jornada de temperatura da página (de cima pra baixo):
```
Hero          → #0f1219 (Obsidiana puro)
               ↓ gradiente longo 200px
Origem        → #0f1219 → #111a10 (toque de Musgo muito escuro)
               ↓ gradiente longo 200px
Umoya         → #111a10 → #1a1008 (Musgo + toque Terracota escuro)
               ↓ gradiente longo 200px  
Bússola       → #1a1008 → #0f1219 (volta ao centro)
               ↓ gradiente longo 200px
CIER          → #0a0c0f (Obsidiana mais profundo, quase preto)
               ↓ gradiente longo 200px
Fragmentos    → #0a0c0f → #131210 (leve calor)
               ↓ gradiente longo 200px
Contato       → #131210 → #1a1714 (o mais claro — Areia em baixíssima opacidade)
```

Implementar via `background: linear-gradient()` no elemento wrapper de cada seção. A sobreposição dos gradientes cria o efeito fluido — uma seção derrete na próxima sem linha visível.

---

### Header / Topbar

Componente: `src/components/layout/Header/Header.tsx`

**Layout:**
- Esquerda: logo tipográfica "MATHEUS FARIAS" em Melodrama, tamanho pequeno (~14-16px), tracking largo
- Direita: ícone hamburger (3 linhas com gap) — sem texto
- `position: fixed`, `top: 0`, `width: 100%`, `z-index: var(--z-overlay)`
- Altura: 64px

**Efeito de fundo — backdrop blur (vidro real do brandbook):**
```css
background: rgba(15, 18, 25, 0.6);
backdrop-filter: blur(16px);
-webkit-backdrop-filter: blur(16px);
border-bottom: 1px solid rgba(240, 235, 224, 0.06);
```

O header começa completamente transparente (sem blur, sem fundo) e o backdrop aparece suavemente após o usuário rolar 80px — transição CSS de 0.3s.

**Menu hamburger — abre fullscreen:**
Ao clicar, uma overlay cobre 100% da viewport com:
- Fundo: #0f1219 com grain ativo
- Animação de abertura: clip-path da esquerda pra direita (inspiração Leclerc/Norris)
  `clip-path: inset(0 100% 0 0)` → `clip-path: inset(0 0% 0 0)`, duration 0.6s, ease "power3.inOut"
- Links do menu em Melodrama, gigantes (~8vw), entrando em stagger com GSAP
- Cada link: hover revela linha em Terracota deslizando da esquerda
- X de fechar no canto direito, mesma posição do hamburger
- Fechamento: clip-path inverso, duration 0.4s

**Links do menu:**
```
Início       → /
Sobre        → /sobre
Fragmentos   → /fragmentos
Ferramentas  → /ferramentas
Contato      → /contato
```

**Interação com o cursor customizado:**
No hover dos links do menu, o ring do cursor expande para 64px e muda para Terracota.

---

### Resumo das dependências adicionais

Adicionar ao package.json do projeto (além das já definidas no starter):

```json
"@tsparticles/react": "^3.0.0",
"tsparticles-slim": "^3.0.0"
```

OGL e efeitos de luz vazando são implementados em CSS puro — sem dependência extra.
Grain via canvas — sem dependência extra.
