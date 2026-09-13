# Tasks: Astro Blog Content

## Test Coverage Matrix

> Generated from codebase, project guidelines, and spec - confirm before Execute. Guidelines found: `AGENTS.md`.

| Code Layer          | Required Test Type | Coverage Expectation                            | Location Pattern                                               | Run Command       |
| ------------------- | ------------------ | ----------------------------------------------- | -------------------------------------------------------------- | ----------------- |
| Styling Tools       | integration        | Instalação e diretivas do plugin de tipografia  | `package.json`, `src/styles/global.css`                        | `npm run build`   |
| Content Collections | unit               | Validação do schema Zod e tipos de coleção      | `src/content.config.ts`                                        | `npx astro check` |
| UI Components       | unit               | Componentes de cabeçalho e card de artigo       | `src/components/Header.astro`, `src/components/PostCard.astro` | `npx astro check` |
| Blog Pages          | integration        | Geração estática das rotas /blog e /blog/[slug] | `src/pages/blog/index.astro`, `src/pages/blog/[...slug].astro` | `npm run build`   |

---

## Gate Check Commands

```bash
# Typecheck das coleções e componentes
npx astro check

# Build estático de todas as páginas do blog
npm run build
```

---

## Execution Plan

Phases are ordered and run sequentially - each phase completes before the next begins, and tasks within a phase execute in order.

### Phase 1: Dependencies & Styling Setup

Setup do plugin de tipografia para formatação dos artigos.

```
T1 → T2
```

### Phase 2: Content Layer & Components

Configuração do schema de posts e componentes reutilizáveis.

```
T3 → T4 → T5
```

### Phase 3: Blog Routes & Build Verification

Criação das páginas de listagem e leitura com validação de build.

```
T6 → T7 → T8
```

---

## Task Breakdown

### T1: Install @tailwindcss/typography [DONE]

**What**: Instalar pacote @tailwindcss/typography para formatação de conteúdo Markdown.
**Where**: `package.json`
**Depends on**: None
**Tests**: Verificação da presença de @tailwindcss/typography nas dependências
**Gate**: grep -q "@tailwindcss/typography" package.json

### T2: Import typography plugin in global.css [DONE]

**What**: Adicionar diretiva @plugin no global.css para habilitar classes prose.
**Where**: `src/styles/global.css`
**Depends on**: T1
**Tests**: Verificação da diretiva @plugin no arquivo global.css
**Gate**: grep -q "@plugin \"@tailwindcss/typography\";" src/styles/global.css

### T3: Configure Content Collections in content.config.ts [DONE]

**What**: Criar arquivo src/content.config.ts com schema Zod e loader glob para a pasta src/posts/.
**Where**: `src/content.config.ts`
**Depends on**: None
**Tests**: Validação do schema via verificação de tipos do Astro
**Gate**: npx astro check

### T4: Implement reusable Header.astro component [DONE]

**What**: Criar componente Header.astro modularizado com navegação e botão de alternância de tema.
**Where**: `src/components/Header.astro`
**Depends on**: T3
**Tests**: Verificação de integridade e existência do componente
**Gate**: test -f src/components/Header.astro

### T5: Implement PostCard.astro component [DONE]

**What**: Criar componente PostCard.astro para exibir preview limpo do artigo na listagem.
**Where**: `src/components/PostCard.astro`
**Depends on**: T4
**Tests**: Verificação de integridade e existência do componente
**Gate**: test -f src/components/PostCard.astro

### T6: Create /blog listing page [DONE]

**What**: Criar página src/pages/blog/index.astro listando todos os artigos ordenados cronologicamente.
**Where**: `src/pages/blog/index.astro`
**Depends on**: None
**Tests**: Verificação de integridade e existência do arquivo
**Gate**: test -f src/pages/blog/index.astro

### T7: Create /blog/[...slug].astro article reading page [DONE]

**What**: Criar página dinâmica src/pages/blog/[...slug].astro com renderização do post via Prose e Shiki.
**Where**: `src/pages/blog/[...slug].astro`
**Depends on**: T6
**Tests**: Verificação de integridade e existência do arquivo
**Gate**: test -f src/pages/blog/[...slug].astro

### T8: Validate static build of all blog routes [DONE]

**What**: Executar build completo e verificar geração das páginas estáticas do blog e de todos os artigos.
**Where**: `dist/blog/`
**Depends on**: T7
**Tests**: Executar build estático e verificar geração dos diretórios correspondentes
**Gate**: npm run build && test -f dist/blog/index.html && test -f dist/blog/tdd-minha-visao/index.html
