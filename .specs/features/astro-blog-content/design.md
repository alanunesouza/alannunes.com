# Astro Blog Content Design

**Spec**: `.specs/features/astro-blog-content/spec.md`  
**Status**: Approved

---

## Architecture Overview

O fluxo de conteúdo conecta os arquivos Markdown existentes em `src/posts/*.md` ao ecossistema nativo de Content Collections do Astro 5 através do loader `glob()`, fornecendo tipagem estática Zod e renderização estática rápida.

```mermaid
graph TD
    A[Markdown Files: src/posts/*.md] --> B[Content Layer: src/content.config.ts]
    B --> C[Zod Schema Validation]
    C --> D[Listing Route: src/pages/blog/index.astro]
    C --> E[Dynamic Route: src/pages/blog/[...slug].astro]
    D --> F[Component: PostCard.astro]
    E --> G[Component: Header.astro]
    E --> H[Tailwind Typography: prose prose-slate]
```

---

## Code Reuse Analysis

### Existing Assets to Leverage

| Recurso / Ativo   | Localização                    | Como será reutilizado                                               |
| ----------------- | ------------------------------ | ------------------------------------------------------------------- |
| Artigos Markdown  | `src/posts/*.md`               | Lidos diretamente pelo loader do Astro sem necessidade de alteração |
| Layout Base       | `src/layouts/BaseLayout.astro` | Encapsula cabeçalho HTML, metatags e script anti-FOUC               |
| Imagens dos Posts | URLs externas / assets         | Renderizadas responsivamente pelo navegador                         |

---

## Components and Interfaces

### 1. `src/content.config.ts`

- **Função**: Define a coleção `blog` utilizando `glob({ pattern: '**/*.md', base: './src/posts' })`.
- **Schema Zod**:
  - `title`: string
  - `date`: date (coerced)
  - `author`: string (default 'Alan')
  - `tags`: array de strings (default [])

### 2. `src/components/Header.astro`

- **Função**: Header reutilizável com logotipo tipográfico, links (`Blog`, `Sobre`) e botão de alternância de tema.
- **Props**: `currentPath?: string`.

### 3. `src/components/PostCard.astro`

- **Função**: Card minimalista para cada artigo na listagem de `/blog` e na Home.
- **Props**: `post: CollectionEntry<'blog'>`.
- **Exibição**: Título, data formatada (pt-BR), tempo de leitura e tags.

### 4. `src/pages/blog/index.astro`

- **Função**: Rota de listagem do blog com cabeçalho limpo e lista de artigos ordenada por data decrescente.

### 5. `src/pages/blog/[...slug].astro`

- **Função**: Rota dinâmica para renderização do post com `getStaticPaths()`, renderização do Markdown via `<Content />`, botão voltar e tempo de leitura.

---

## Tech Decisions

| Decisão                | Escolha                                             | Justificativa                                                                             |
| ---------------------- | --------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Content Layer Loader   | `glob({ pattern: '**/*.md', base: './src/posts' })` | Permite manter a pasta `src/posts/` existente intacta sem forçar movimentação de arquivos |
| Formatador de Datas    | `Intl.DateTimeFormat('pt-BR')`                      | Nativo da plataforma JavaScript, zero dependência externa adicional                       |
| Tipografia de Markdown | `@tailwindcss/typography`                           | Classes `prose prose-slate dark:prose-invert max-w-none` para legibilidade premium        |

---

## Risks & Concerns

| Risco / Preocupação                              | Gravidade | Mitigação                                                                        |
| ------------------------------------------------ | --------- | -------------------------------------------------------------------------------- |
| Diferença de formato de data entre posts antigos | Baixa     | Utilizar `z.coerce.date()` no schema Zod para aceitar strings ISO e objetos Date |
| Conflito de rotas com arquivos legados do Gatsby | Baixa     | As páginas legadas do Gatsby já foram movidas para `legacy_gatsby/` na Fase 1    |
