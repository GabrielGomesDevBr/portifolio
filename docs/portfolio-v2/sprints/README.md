# Índice e protocolo dos sprints

## Sequência

| Sprint | Documento | Portão principal |
|---|---|---|
| 00 | [Baseline, fatos e ativos](./00-BASELINE-FATOS-E-ATIVOS.md) | Fatos e hospedagem confirmados |
| 01 | [Conteúdo único e TypeScript](./01-CONTEUDO-UNICO-E-TYPESCRIPT.md) | Conteúdo sem duplicação; lint/typecheck |
| 02 | [Fundação técnica e rotas](./02-FUNDACAO-TECNICA-E-ROTAS.md) | Acesso direto e prerender provados |
| 03 | [Design system e shell](./03-DESIGN-SYSTEM-E-SHELL.md) | Primitives responsivas e acessíveis |
| 04 | [Hero e primeira dobra](./04-HERO-E-PRIMEIRA-DOBRA.md) | Posicionamento e LCP preliminar |
| 05 | [Home, provas e cases](./05-HOME-PROVAS-E-CASES.md) | Narrativa completa da home |
| 06 | [Case ABAplay](./06-CASE-ABAPLAY.md) | Prova de mercado e operação |
| 07 | [Case LuminiPsi](./07-CASE-LUMINIPSI.md) | Produção, conformidade e evolução |
| 08 | [Case Asaas + NFS-e](./08-CASE-ASAAS-NFSE.md) | Sistema compartilhado compreensível e seguro |
| 09 | [Processo, Sobre, lab e conversão](./09-PROCESSO-SOBRE-LAB-E-CONVERSAO.md) | Oferta e contato claros |
| 10 | [i18n, currículo, SEO e analytics](./10-I18N-CURRICULO-SEO-E-ANALYTICS.md) | Rotas localizadas e mensuração |
| 11 | [Performance, acessibilidade e motion QA](./11-PERFORMANCE-ACESSIBILIDADE-E-MOTION-QA.md) | Orçamentos e WCAG |
| 12 | [Lançamento e observabilidade](./12-LANCAMENTO-E-OBSERVABILIDADE.md) | Deploy reversível e smoke em produção |

## Regras de execução

1. Um pedido para executar um sprint não autoriza executar os seguintes.
2. Se uma dependência não estiver satisfeita, resolver apenas o necessário ou registrar o bloqueio.
3. Critérios de aceite obrigatórios não podem ser trocados por uma descrição de “parece pronto”.
4. Toda mudança fora do escopo precisa ser justificada e registrada.
5. A implementação deve preservar alterações do usuário não relacionadas.
6. Nenhum sprint pode alterar os repositórios ABAplay ou LuminiPsi.
7. Dados e screenshots dos produtos precisam ser revisados antes de copiar.
8. `STATUS.md` e `DECISOES.md` fazem parte da entrega do sprint.

## Template para um sprint adicional

```md
# Sprint NN — Nome

## Objetivo

## Resultado esperado

## Dependências

## Escopo

## Regras

## Entregáveis

## Critérios de aceite

## Testes obrigatórios

## Fora de escopo
```

Um sprint adicional só deve ser criado quando houver resultado autônomo, dependência clara e
critérios próprios. Pendências pequenas devem entrar no sprint que as originou.
