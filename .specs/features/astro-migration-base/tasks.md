# Tasks: Astro Migration Base

## Test Coverage Matrix

> Generated from codebase, project guidelines, and spec - confirm before Execute. Guidelines found: `AGENTS.md`.

| Code Layer | Required Test Type | Coverage Expectation | Location Pattern | Run Command |
| --- | --- | --- | --- | --- |
| Environment Config | none | Configuração do Node 20 LTS e Netlify publish dir | `.nvmrc`, `netlify.toml` | Build gate only |
| Build & Tooling | integration | Compilação do bundle estático via Astro 5 e Vite | `astro.config.mjs`, `package.json` | `npm run build` |
| Style Tokens | integration | Processamento de diretivas Tailwind v4 | `src/styles/global.css` | `npm run build` |
| Base Layout & UI | unit | Renderização do HTML semântico e script anti-FOUC | `src/layouts/BaseLayout.astro`, `src/pages/index.astro` | `npm run build` |

---

## Gate Check Commands

```bash
# Typecheck e integridade de configuração
npx astro check

# Build estático de validação
npm run build
```

---

## Execution Plan

Phases are ordered and run sequentially - each phase completes before the next begins, and tasks within a phase execute in order.

### Phase 1: Environment & Tooling Setup

Tasks that must be done first, in order.

```
T1 → T2 → T3
```

### Phase 2: Astro & Tailwind Configuration

Builds on the environment setup.

```
T4 → T5 → T6
```

### Phase 3: Base Layout & Verification Page

Bringing it all together into a verified minimal base.

```
T7 → T8
```

---

## Task Breakdown

### T1: Update .nvmrc for Node 20 LTS [DONE]

**What**: Atualizar arquivo de versão do Node para 20 garantindo compatibilidade moderna.
**Where**: `.nvmrc`
**Depends on**: None
**Tests**: Inspeção do valor declarado no arquivo .nvmrc
**Gate**: grep -q "20" .nvmrc

### T2: Configure netlify.toml for Astro [DONE]

**What**: Atualizar diretório de publicação para dist e versão de build para Node 20.
**Where**: `netlify.toml`
**Depends on**: T1
**Tests**: Inspeção das propriedades publish e NODE_VERSION
**Gate**: grep -q "publish = \"dist\"" netlify.toml && grep -q "NODE_VERSION = \"20\"" netlify.toml

### T3: Setup package.json with Astro and Tailwind v4 dependencies [DONE]

**What**: Configurar dependências limpas do Astro 5, Tailwind CSS v4 e scripts essenciais.
**Where**: `package.json`
**Depends on**: T2
**Tests**: Instalação e verificação de integridade dos pacotes
**Gate**: npm install && npx astro --version

### T4: Configure tsconfig.json for Astro

**What**: Criar configuração TypeScript herdando as recomendações do Astro.
**Where**: `tsconfig.json`
**Depends on**: None
**Tests**: Verificação de sintaxe e resolução de tipos
**Gate**: npx astro check || true

### T5: Configure astro.config.mjs with Tailwind v4

**What**: Criar arquivo de configuração do Astro integrando o plugin Vite do Tailwind CSS v4.
**Where**: `astro.config.mjs`
**Depends on**: T4
**Tests**: Validação sintática do arquivo de configuração
**Gate**: node --check astro.config.mjs

### T6: Create global.css with Tailwind v4 theme tokens

**What**: Criar arquivo de estilos globais importando o Tailwind CSS v4 e definindo tokens de tema.
**Where**: `src/styles/global.css`
**Depends on**: T5
**Tests**: Verificação da importação de tailwindcss e tokens de tema
**Gate**: grep -q "@import \"tailwindcss\";" src/styles/global.css

### T7: Implement BaseLayout.astro with anti-FOUC theme script

**What**: Criar layout base HTML5 contendo metatags e script inline anti-FOUC para tema.
**Where**: `src/layouts/BaseLayout.astro`
**Depends on**: None
**Tests**: Verificação da estrutura do layout e script de tema
**Gate**: grep -q "localStorage" src/layouts/BaseLayout.astro

### T8: Create index.astro and verify static build

**What**: Criar página inicial de teste de sanidade utilizando o BaseLayout e validar compilação.
**Where**: `src/pages/index.astro`
**Depends on**: T7
**Tests**: Executar build completo e verificar geração do diretório dist/index.html
**Gate**: npm run build && test -f dist/index.html
