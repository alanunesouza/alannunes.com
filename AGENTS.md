# Diretrizes e Contexto do Projeto (alannunes.com)

Site pessoal e blog de Alan Nunes, desenvolvido em Astro 5 com Tailwind CSS v4 e TypeScript.

---

## 1. Visão Geral da Stack Tecnológica

- **Framework**: Astro v5 (`astro@^5.0.0`)
- **Estilização**: Tailwind CSS v4 (`@tailwindcss/vite`, `@tailwindcss/typography`, `tailwindcss@^4.0.0`)
- **Linguagem**: TypeScript (`strict`)
- **Dados & Conteúdo**: Astro Content Collections (`src/content.config.ts`), Markdown em `src/posts/`
- **Renderização de Imagens**: `astro:assets` integrado ao motor nativo `sharp`
- **Hospedagem & Deploy**: Netlify (Build: `astro build`, Publish: `dist`)

---

## 2. Requisitos de Ambiente

- **Node.js**: **>= 20.x** (Node 20 LTS recomendado, configurado via `.nvmrc`).
- **Gerenciador de Pacotes**: `npm`.

---

## 3. Scripts do Projeto

Os scripts configurados no `package.json` são:

- `npm run dev`: Inicia o servidor de desenvolvimento na porta `7777` (`astro dev --port 7777`).
- `npm run build`: Gera o build estático otimizado em `dist/`.
- `npm run preview`: Visualiza o build de produção localmente na porta padrão do Astro.
- `npm run check`: Valida tipagem TypeScript e integridade dos componentes Astro (`astro check`).
- `npm run format`: Executa o Prettier em arquivos JS, TS, Astro, CSS, JSON e MD.

---

## 4. Estrutura de Diretórios

```
alannunes.com/
├── src/
│   ├── assets/           # Imagens estáticas processadas via astro:assets (profile.png, favicon.png)
│   ├── components/       # Componentes Astro reutilizáveis (Header.astro, PostCard.astro, etc.)
│   ├── layouts/          # Layout base com meta tags, SEO e anti-FOUC de tema (BaseLayout.astro)
│   ├── pages/            # Rotas estáticas (index.astro, about.astro, policies.astro, 404.astro, blog/)
│   ├── posts/            # Artigos do blog em Markdown (.md)
│   ├── styles/           # CSS global com tokens Tailwind v4 (global.css)
│   └── content.config.ts # Schema Zod e loader de artigos do blog
├── public/               # Ativos estáticos servidos diretamente na raiz (favicon.png, robots.txt)
├── astro.config.mjs      # Configuração central do Astro e plugins Vite (Tailwind v4)
├── tsconfig.json         # Configuração TypeScript estrita para Astro
└── netlify.toml          # Configuração de build e publish no Netlify
```

---

## 5. Diretrizes para o Agente Antigravity

1. **Design & Estilo**: Seguir a identidade visual moderna e minimalista com Tailwind CSS v4, suporte total a Dark/Light mode com persistência em `localStorage` e prevenção de flash (FOUC).
2. **Novos Posts**: Sempre criar arquivos de post em `src/posts/` no formato Markdown com frontmatter válido (`title`, `author`, `date`, `tags`).
3. **Validação**: Sempre verificar integridade com `npm run check` e `npm run build` após criar ou alterar componentes ou páginas.

