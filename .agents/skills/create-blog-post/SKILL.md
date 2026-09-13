---
name: create-blog-post
description: Cria um novo artigo no blog em src/posts/ com frontmatter adequado e estrutura padronizada.
---

# Procedimento: Criação de Novo Post no Blog

Ao solicitar a criação de um novo post para o blog:

1. **Localização**:

   - O arquivo deve ser salvo em `src/posts/<slug-do-post>.md`.
   - O nome do arquivo deve ser em kebab-case, sem caracteres especiais (ex: `meu-novo-artigo.md`).

2. **Formato do Frontmatter (YAML)**:

   ```yaml
   ---
   title: Título do Post
   author: Alan
   date: YYYY-MM-DD
   tags: ['tag1', 'tag2', 'tag3']
   ---
   ```

3. **Estrutura do Conteúdo**:

   - Iniciar com uma introdução em comentário HTML ou texto descritivo:
     `<!-- Introduction to my blog post -->`
   - Desenvolver o conteúdo com subtítulos Markdown (`###`).
   - Usar itálico e listas onde for apropriado para leitura fluida.

4. **Verificação**:
   - Executar `npm run format` para garantir que a formatação Markdown esteja consistente com o Prettier.
