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
- **Phase / Task**: Phase 1 / T1 - Install @tailwindcss/typography
- **Completed**: none
- **In-progress** (file:line): `.specs/features/astro-blog-content/tasks.md:1`
- **Next step**: Instalar @tailwindcss/typography e configurar Content Collections no Astro 5.
- **Blockers**: none
- **Uncommitted files**: none
- **Branch**: feature/astro-tailwind
