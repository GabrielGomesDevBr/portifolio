# Sprint 01 — Conteúdo único e TypeScript

## Objetivo

Eliminar duplicação de fatos e criar uma base tipada antes da reconstrução visual.

## Resultado esperado

Site, currículo e metadados passam a depender de uma única estrutura de conteúdo por idioma. O
projeto compila em TypeScript estrito.

## Dependências

- Sprint 00 concluído;
- fatos confirmados;
- estratégia de idioma definida o suficiente para modelagem.

## Escopo

1. Adicionar configuração TypeScript estrita.
2. Migrar entrypoint, providers, utilitários e componentes existentes sem redesign.
3. Criar `src/content/schema.ts`.
4. Criar conteúdo canônico `pt-BR` e `en`.
5. Criar seletores para home, cases, contato, SEO e currículo.
6. Remover números e descrições duplicados de componentes e do gerador de PDF.
7. Validar paridade estrutural entre os idiomas.
8. Configurar ESLint para TypeScript e React.
9. Adicionar testes dos seletores de conteúdo.

## Regras

- A migração não deve mudar a aparência deliberadamente.
- Métrica interna não pode ser renderizada sem `public: true`.
- Conteúdo ausente deve falhar no typecheck ou teste.
- Não usar `any` para acelerar a migração.
- Preservar os dois idiomas.

## Entregáveis

- projeto em TypeScript;
- fonte única de conteúdo;
- lint funcional;
- testes mínimos de dados;
- gerador de currículo consumindo conteúdo canônico.

## Critérios de aceite

- `build`, `lint`, `typecheck` e testes passam.
- Busca por textos-chave antigos não encontra cópias independentes.
- Alterar uma métrica na fonte atualiza site e currículo.
- Não há referência pública a Stripe ou pré-lançamento.
- Interface existente continua utilizável durante a transição.

## Testes obrigatórios

- locale pt-BR completo;
- locale inglês completo;
- slugs iguais entre idiomas;
- métricas privadas filtradas;
- WhatsApp e links gerados corretamente.

## Fora de escopo

- novas rotas;
- novo design system;
- novas animações;
- alteração do fluxo de navegação;
- otimização completa do PDF.
