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

- **Feature**: astro-migration-base
- **Phase / Task**: Phase 3 / T8 - Create index.astro and verify static build
- **Completed**: T1, T2, T3, T4, T5, T6, T7, T8
- **In-progress** (file:line): `.specs/features/astro-migration-base/validation.md:1`
- **Next step**: Avançar para a Fase 2 (Migração de Posts Markdown e Content Collections do Astro).
- **Blockers**: none
- **Uncommitted files**: none
- **Branch**: feature/astro-tailwind
