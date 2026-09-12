# Fluxo de Versionamento Git

## 1. Mensagens de Commit

Seguir o padrão **Conventional Commits**:

- `feat:` Nova funcionalidade ou novo post
- `fix:` Correção de bug
- `docs:` Alterações em documentação
- `style:` Formatação de código sem alteração lógica
- `refactor:` Refatoração de código
- `chore:` Atualizações de dependências ou tarefas de manutenção

Exemplos:

- `feat(blog): adiciona post sobre boas praticas de dev`
- `fix(seo): ajusta metatag de compartilhamento do twitter`
- `chore: atualiza regras do antigravity`

## 2. Boas Práticas

- Manter commits atômicos e descritivos.
- Não commitar segredos ou chaves sensíveis (verificar `.gitignore` e `.env`).
