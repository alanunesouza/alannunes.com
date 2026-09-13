# STATE

## Decisions

### AD-001

- **Decision**: Migrar a base do site de Gatsby v2 + Styled Components para Astro 5 + Tailwind CSS v4 + TypeScript.
- **Reason**: Romper o lock-in de Node 14/16 e sharp legados, obter compilação instantânea com Vite, gerar zero JS no cliente por padrão e adotar um design minimalista moderno.
- **Trade-off**: Reescrita das cascas de layout (.astro) e abandono de bibliotecas CSS-in-JS legadas em favor de utility classes e tokens modernos em CSS puro.
- **Scope**: Todo o projeto alannunes.com.
- **Date**: 2026-09-12
- **Status**: active

---

## Handoff

- **Feature**: astro-blog-content
- **Phase / Task**: Phase 3 / T8 - Validate static build of all blog routes
- **Completed**: T1, T2, T3, T4, T5, T6, T7, T8
- **In-progress** (file:line): `.specs/features/astro-blog-content/validation.md:1`
- **Next step**: Avançar para a Fase 3 (Páginas Estáticas: Sobre, Políticas de Privacidade e Página 404).
- **Blockers**: none
- **Uncommitted files**: none
- **Branch**: feature/astro-tailwind
