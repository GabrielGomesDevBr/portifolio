# Sprint 03 — Design system e shell

## Objetivo

Transformar a especificação visual em tokens e componentes reais antes de desenhar páginas inteiras.

## Resultado esperado

Shell responsivo, biblioteca de primitives e página interna de demonstração dos estados essenciais.

## Dependências

- Sprint 02 concluído;
- ativos de marca disponíveis;
- `03-DESIGN-SYSTEM.md` aprovado.

## Escopo

1. Implementar tokens de cor, espaço, tipografia, raio, sombra e z-index.
2. Configurar fontes com estratégia de carregamento.
3. Implementar container, grid e seções.
4. Criar botões e links em todos os estados.
5. Criar labels, chips, métricas e superfícies.
6. Criar frames de navegador, painel e mobile.
7. Criar header, menu mobile e footer.
8. Criar skip link e foco global.
9. Criar primitives de diagrama.
10. Implementar primitive central de movimento seguro, ainda sem cenas complexas.
11. Criar página dev-only ou Storybook equivalente leve para revisão.

## Regras

- Não construir a home inteira neste sprint.
- Todo componente tem estados de teclado e movimento reduzido.
- Componentes não assumem textos curtos em português.
- Cor de case entra por tema, não por classes duplicadas.

## Critérios de aceite

- Header funciona em 390–1920 px.
- Menu mobile gerencia foco e Escape.
- Componentes passam contraste AA.
- Sistema suporta tema global e temas dos cases.
- Nenhum componente depende de hover.
- A página de demonstração contém todos os estados.
- Não há layout shift perceptível na carga das fontes.

## Testes obrigatórios

- testes de componente do menu;
- teclado no header;
- foco visível;
- snapshots visuais de primitives;
- textos longos em inglês;
- movimento reduzido.

## Fora de escopo

- hero final;
- narrativa completa da home;
- cases;
- diagrama animado definitivo.
