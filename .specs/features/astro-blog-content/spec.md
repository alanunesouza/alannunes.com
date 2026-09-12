# Astro Blog Content Specification

## Problem Statement

O site alannunes.com possui 3 artigos técnicos em Markdown na pasta `src/posts/` que não estão acessíveis na nova base Astro 5. É necessário configurar a camada de Content Collections tipada com Zod, implementar a página de listagem `/blog` com design minimalista e criar o template dinâmico de leitura `/blog/[slug]` com formatação tipográfica refinada via Tailwind Typography e realce de código via Shiki.

## Goals

- [ ] Integrar os posts existentes (`src/posts/*.md`) na nova Content Layer do Astro 5 usando schemas tipados Zod.
- [ ] Construir a página de listagem `/blog` com cards minimalistas contendo título, data em português, tempo de leitura e tags.
- [ ] Construir o template de leitura `/blog/[slug]` com foco em legibilidade, suporte a dark/light mode e syntax highlighting de código.
- [ ] Garantir que todas as URLs históricas de artigos permaneçam funcionais e idênticas (`/blog/slug`).

## Out of Scope

Explicitly excluded. Documented to prevent scope creep.

| Feature | Reason |
| --- | --- |
| Sistema de comentários Giscus | Pertence à Fase 3 de Serviços Externos |
| Busca estática via Pagefind | Pertence à Fase 3 de Serviços Externos |
| Páginas Sobre e Políticas | Pertence à Fase 3 de Conteúdo Estático |

---

## Assumptions & Open Questions

Every ambiguity is resolved or recorded here - nothing is left silently unclear.

| Assumption / decision | Chosen default | Rationale | Confirmed? |
| --- | --- | --- | --- |
| Estrutura de URLs dos posts | `/blog/[slug]` | Preserva 100% a compatibilidade com os links indexados e compartilhados do blog legado | y |
| Formato de data | Locale pt-BR por extenso (ex: "20 de fevereiro de 2022") | Padrão editorial brasileiro de alta qualidade | y |
| Estilização do corpo do artigo | @tailwindcss/typography com prose-slate | Padrão moderno da comunidade Tailwind para artigos e blogs técnicos | y |

**Open questions:** none - all resolved or logged above.

---

## User Stories

### P1: Content Collections e Listagem do Blog ⭐ MVP

**User Story**: As a leitor do blog, I want acessar a rota `/blog` e visualizar a lista de todos os artigos técnicos em ordem cronológica so that eu possa escolher facilmente qual texto ler.

**Why P1**: A listagem de artigos é a porta de entrada principal para o conteúdo técnico do autor.

**Acceptance Criteria**:

1. The system SHALL carregar todos os artigos Markdown da pasta `src/posts/` através de Content Collections tipadas. <!-- ubiquitous -->
2. WHEN o usuário navegar até `/blog` THEN the system SHALL listar todos os artigos ordenados do mais recente para o mais antigo. <!-- event-driven -->
3. WHILE a lista de artigos estiver sendo exibida the system SHALL renderizar para cada artigo: título, data formatada em pt-BR, tempo estimado de leitura e tags. <!-- state-driven -->
4. IF um artigo não possuir tags informadas THEN the system SHALL renderizar o card normalmente com array vazio de tags sem quebrar o layout. <!-- unwanted-behavior -->

**Independent Test**: Navegar para `/blog` e verificar que os 3 artigos existentes aparecem listados e ordenados.

---

### P1: Leitura de Artigo Individual (`/blog/[slug]`)

**User Story**: As a leitor, I want clicar em um artigo e ler seu conteúdo completo com tipografia confortável e código formatado so that eu tenha uma experiência de leitura agradável no tema claro ou escuro.

**Why P1**: O consumo de conteúdo em profundidade é o objetivo central de um blog técnico.

**Acceptance Criteria**:

1. WHEN o usuário clicar em um artigo na listagem THEN the system SHALL carregar a rota `/blog/[slug]` correspondente. <!-- event-driven -->
2. The system SHALL renderizar o conteúdo Markdown completo com formatação proporcional via `@tailwindcss/typography`. <!-- ubiquitous -->
3. WHILE o tema escuro estiver ativo the system SHALL aplicar inversão proporcional de cores tipográficas no artigo via `dark:prose-invert`. <!-- state-driven -->
4. The system SHALL exibir no topo do artigo o botão de retorno para `/blog`, data de publicação e tempo de leitura. <!-- ubiquitous -->
5. IF o usuário tentar acessar uma URL de artigo inexistente THEN the system SHALL retornar status 404. <!-- unwanted-behavior -->

**Independent Test**: Abrir `/blog/tdd-minha-visao` no navegador e verificar legibilidade, realce de sintaxe de código e alternância de tema.

---

## Edge Cases

- IF o arquivo Markdown possuir imagens externas com protocolo HTTP/HTTPS THEN the system SHALL exibi-las responsivamente com largura máxima de 100%.
- IF o artigo possuir trechos de código com blocos multilinha THEN the system SHALL renderizar syntax highlighting com scroll horizontal suave quando necessário.

---

## Requirement Traceability

Each requirement gets a unique ID for tracking across design, tasks, and validation.

| Requirement ID | Story | Phase | Status |
| --- | --- | --- | --- |
| BLOG-01 | P1: Content Collections e Listagem do Blog | In Design | Pending |
| BLOG-02 | P1: Content Collections e Listagem do Blog | In Design | Pending |
| BLOG-03 | P1: Content Collections e Listagem do Blog | In Design | Pending |
| BLOG-04 | P1: Content Collections e Listagem do Blog | In Design | Pending |
| POST-01 | P1: Leitura de Artigo Individual (`/blog/[slug]`) | In Design | Pending |
| POST-02 | P1: Leitura de Artigo Individual (`/blog/[slug]`) | In Design | Pending |
| POST-03 | P1: Leitura de Artigo Individual (`/blog/[slug]`) | In Design | Pending |
| POST-04 | P1: Leitura de Artigo Individual (`/blog/[slug]`) | In Design | Pending |
| POST-05 | P1: Leitura de Artigo Individual (`/blog/[slug]`) | In Design | Pending |

**Coverage:** 9 total, 9 mapped to tasks, 0 unmapped.

---

## Success Criteria

How we know the feature is successful:

- [ ] O comando `npm run build` compila com sucesso gerando as páginas estáticas de `/blog` e de todos os artigos individuais.
- [ ] O comando `npx astro check` valida o schema e tipos das Content Collections sem erros.
- [ ] As URLs históricas dos artigos abrem corretamente no navegador.
