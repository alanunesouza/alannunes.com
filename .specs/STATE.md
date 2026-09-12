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
- **Phase / Task**: Specify & Design
- **Completed**: none
- **In-progress** (file:line): `.specs/features/astro-migration-base/spec.md`
- **Next step**: Finalizar a especificação EARS e design da base técnica do Astro + Tailwind v4.
- **Blockers**: none
- **Uncommitted files**: `tmp/roadmap.md`, `.specs/STATE.md`
- **Branch**: feature/astro-tailwind
