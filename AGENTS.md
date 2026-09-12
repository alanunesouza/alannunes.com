# Diretrizes e Contexto do Projeto (alannunes.com)

Site pessoal e blog de Alan Nunes, desenvolvido em Gatsby.js com React e Styled Components.

---

## 1. Visão Geral da Stack Tecnológica

- **Framework**: Gatsby v2 (`gatsby@^2.24.63`)
- **UI / Biblioteca**: React 16 (`react@^16.12.0`)
- **Estilização**: Styled Components v5 (`styled-components@^5.2.0`)
- **Dados & Conteúdo**: GraphQL, Markdown Remark (`gatsby-transformer-remark`)
- **Busca**: Algolia Search (`react-instantsearch-dom`, `gatsby-plugin-algolia`)
- **Hospedagem & Deploy**: Netlify

---

## 2. Requisitos de Ambiente (IMPORTANTE)

> [!WARNING] > **Compatibilidade do Node.js**: Este projeto utiliza dependências de 2020 (`gatsby@2` e `sharp@0.27.2`). O Node.js moderno (versões 20, 22 ou 24) falha ao compilar módulos nativos antigos (`sharp`/`node-gyp`) em arquitetura Apple Silicon (`darwin-arm64`).
>
> - **Versão recomendada do Node.js**: Node.js **14.x** ou **16.x**.
> - Se estiver usando **Volta**:
>   ```bash
>   volta install node@16
>   volta pin node@16
>   ```
> - Se estiver usando **nvm**:
>   ```bash
>   nvm use 16
>   ```
> - No macOS Apple Silicon (M1/M2/M3/M4), o módulo nativo `sharp@0.27` precisa da biblioteca gráfica `vips` instalada no sistema para compilar:
>   ```bash
>   brew install vips
>   ```

---

## 3. Scripts do Projeto

Os scripts configurados no `package.json` são:

- `npm run dev`: Inicia o servidor de desenvolvimento na porta `7777` com GraphQL IDE habilitado (`cross-env GATSBY_GRAPHQL_IDE=playground gatsby develop --port 7777`).
- `npm run build`: Gera o bundle de produção do Gatsby.
- `npm run serve`: Executa o build de produção localmente.
- `npm run clean`: Limpa cache e diretório `.cache` / `public`.
- `npm run format`: Executa o Prettier em arquivos JS, JSX, TS, TSX, JSON e MD.

---

## 4. Estrutura de Diretórios

```
alannunes.com/
├── src/
│   ├── assets/       # Imagens estáticas, ícones e favicon
│   ├── components/   # Componentes reutilizáveis (Layout, Header, Menu, etc.)
│   ├── contexts/     # Contextos React (tema, estado global)
│   ├── pages/        # Páginas estáticas / rotas diretas do Gatsby
│   ├── posts/        # Artigos do blog em Markdown (.md)
│   ├── styles/       # Estilos globais e temas do styled-components
│   ├── templates/    # Templates para páginas geradas dinamicamente (blog post)
│   └── utils/        # Funções utilitárias auxiliares
├── config/           # Configurações de plugins e SEO
├── gatsby-config.js  # Configuração central do Gatsby e seus plugins
├── gatsby-node.js    # Criação de páginas dinâmicas (posts do blog)
└── .agents/          # Configurações do Antigravity (regras e skills)
```

---

## 5. Diretrizes para o Agente Antigravity

1. **Preservação de Estilo**: Seguir a arquitetura de componentes existente (`src/components/NomeDoComponente/index.js` e `styled.js`).
2. **Novos Posts**: Sempre criar arquivos de post em `src/posts/` no formato Markdown com frontmatter válido (`title`, `author`, `date`, `tags`).
3. **Validação**: Sempre verificar a integridade da formatação com `npm run format` após criar ou alterar arquivos.
4. **Respeito às Versões**: Não adicionar dependências modernas que quebrem a compatibilidade com React 16 ou Gatsby 2 sem planejamento prévio de migração.
