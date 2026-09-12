# Astro Migration Base Specification

## Problem Statement

O projeto alannunes.com está bloqueado no Node 14/16 devido ao uso de Gatsby v2 e dependências descontinuadas de 2020. É necessário estabelecer uma nova base técnica moderna utilizando Astro 5, Tailwind CSS v4 e TypeScript, permitindo desenvolvimento em Node 20 LTS e arquiteturas modernas com inicialização rápida e zero JavaScript no cliente por padrão.

## Goals

- [ ] Configurar a fundação do Astro 5 com suporte a TypeScript e Tailwind CSS v4.
- [ ] Atualizar as configurações de ambiente (.nvmrc e netlify.toml) para Node 20 LTS.
- [ ] Estabelecer um design system minimalista com suporte nativo a temas Dark e Light.

## Out of Scope

Explicitly excluded. Documented to prevent scope creep.

| Feature | Reason |
| --- | --- |
| Migração dos artigos em Markdown | Pertence à Fase 2 (Migração de Conteúdo e Collections) |
| Criação de páginas internas (Sobre, Políticas, Artigo) | Pertence às Fases 2 e 3 |
| Configuração de Giscus e busca Pagefind | Pertence à Fase 3 |

---

## Assumptions & Open Questions

Every ambiguity is resolved or recorded here - nothing is left silently unclear.

| Assumption / decision | Chosen default | Rationale | Confirmed? |
| --- | --- | --- | --- |
| Versão do Tailwind CSS | Tailwind CSS v4 via @tailwindcss/vite | Usuário confirmou explicitamente o uso da versão v4 para máxima modernidade e velocidade | y |
| Versão de Node para deploy e desenvolvimento | Node 20 LTS | Padrão corporativo moderno e compatível com Apple Silicon | y |
| Estratégia de styling | CSS-first com @theme e utility classes | Substitui 100% o runtime de styled-components | y |

**Open questions:** none - all resolved or logged above.

---

## User Stories

### P1: Configuração do Core Astro + Tailwind v4 ⭐ MVP

**User Story**: As a desenvolvedor, I want uma base Astro 5 configurada com Tailwind CSS v4 e TypeScript so that eu possa desenvolver o site em Node moderno sem erros de compilação.

**Why P1**: É a fundação arquitetural necessária para todas as fases subsequentes de desenvolvimento.

**Acceptance Criteria**:

1. The system SHALL compilar sem erros utilizando Node.js na versão 20 ou superior. <!-- ubiquitous -->
2. WHEN o comando `npm run build` for executado THEN the system SHALL gerar os arquivos estáticos na pasta `dist`. <!-- event-driven -->
3. WHEN o comando `npm run dev` for disparado THEN the system SHALL iniciar o servidor de desenvolvimento Vite localmente. <!-- event-driven -->
4. IF uma configuração inválida do Astro ou Tailwind for fornecida THEN the system SHALL emitir erro explicativo no terminal e interromper o build. <!-- unwanted-behavior -->

**Independent Test**: Executar `npm run build` com Node 20 e verificar a geração bem-sucedida do diretório `dist`.

---

### P1: Sistema de Temas e Tokens Minimalistas

**User Story**: As a leitor do blog, I want alternar entre modo claro e escuro de forma fluida so that eu tenha conforto visual durante a leitura.

**Why P1**: O dark mode refinado é parte essencial da nova identidade visual minimalista definida para o site.

**Acceptance Criteria**:

1. WHILE a classe `dark` estiver ativa no elemento raiz HTML the system SHALL aplicar as cores de fundo escuro e texto claro definidas pelo Tailwind. <!-- state-driven -->
2. WHEN a página for carregada no cliente THEN the system SHALL aplicar a preferência de cor salva ou do sistema antes do render visual prevenindo clarões (FOUC). <!-- event-driven -->
3. The system SHALL manter contraste de cor acessível em conformidade com WCAG AA para textos e fundos tanto no modo claro quanto no modo escuro. <!-- ubiquitous -->

**Independent Test**: Inspecionar elementos em navegador alternando a classe `dark` e verificar a aplicação dos tokens de cor sem FOUC.

---

## Edge Cases

- IF o usuário acessar com navegador sem preferência salva de tema THEN the system SHALL adotar a preferência indicada pelo sistema operacional via prefers-color-scheme.
- IF o JavaScript estiver desabilitado no navegador THEN the system SHALL renderizar o conteúdo estático legível no tema padrão claro.

---

## Requirement Traceability

Each requirement gets a unique ID for tracking across design, tasks, and validation.

| Requirement ID | Story | Phase | Status |
| --- | --- | --- | --- |
| BASE-01 | P1: Configuração do Core Astro + Tailwind v4 | In Design | Pending |
| BASE-02 | P1: Configuração do Core Astro + Tailwind v4 | In Design | Pending |
| BASE-03 | P1: Configuração do Core Astro + Tailwind v4 | In Design | Pending |
| BASE-04 | P1: Configuração do Core Astro + Tailwind v4 | In Design | Pending |
| THEME-01 | P1: Sistema de Temas e Tokens Minimalistas | In Design | Pending |
| THEME-02 | P1: Sistema de Temas e Tokens Minimalistas | In Design | Pending |
| THEME-03 | P1: Sistema de Temas e Tokens Minimalistas | In Design | Pending |

**Coverage:** 7 total, 7 mapped to tasks, 0 unmapped.

---

## Success Criteria

How we know the feature is successful:

- [ ] Execução de `npm run build` conclui com sucesso gerando a pasta `dist`.
- [ ] Execução de `npm run check` (Astro typecheck) não acusa erros de TypeScript.
- [ ] O tema escuro e claro é aplicado corretamente via utility classes do Tailwind v4.
