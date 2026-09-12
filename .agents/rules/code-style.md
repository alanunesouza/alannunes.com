# Diretrizes de Estilo e Código

## 1. Componentes React

- Utilizar componentes funcionais com Hooks (`useState`, `useEffect`, `useMemo`, `useCallback`).
- Manter componentes modulares e desacoplados.
- Estrutura preferencial de componente:
  - Pasta com o nome do componente em `src/components/<ComponentName>/`
  - Arquivo principal `index.js` (lógica e estrutura JSX)
  - Arquivo de estilos `styled.js` (definições de styled-components)

## 2. Styled Components

- Nomes claros e semânticos para elementos estilizados (`Wrapper`, `Container`, `Title`, etc.).
- Centralizar cores e variáveis no tema ou em `src/styles/`.
- Evitar inline styles (`style={{ ... }}`).

## 3. Linting e Formatação

- Seguir as regras do ESLint configuradas no repositório (`.eslintrc`).
- Manter o padrão Prettier configurado em `.prettierrc`:
  - Aspas simples (`singleQuote: true`)
  - Sem ponto e vírgula desnecessário quando configurado
  - Indentação de 2 espaços
