# Portfólio Gabriel Gomes — Plano da versão 2

Este diretório é a fonte de orientação para a reformulação completa do portfólio. A implementação
não deve depender do histórico de uma conversa: decisões duráveis vivem aqui, fatos verificáveis
vivem na fonte de verdade e cada etapa executável possui seu próprio sprint.

## Ordem de leitura

Antes de iniciar qualquer sprint, leia nesta ordem:

1. [`00-GUIA-MASTER.md`](./00-GUIA-MASTER.md)
2. [`STATUS.md`](./STATUS.md)
3. [`DECISOES.md`](./DECISOES.md)
4. O documento do sprint solicitado
5. A especificação temática relacionada ao sprint

## Documentos permanentes

| Documento | Responsabilidade |
|---|---|
| [`00-GUIA-MASTER.md`](./00-GUIA-MASTER.md) | Visão, objetivos, princípios, regras globais e definição de pronto |
| [`01-FONTE-DA-VERDADE.md`](./01-FONTE-DA-VERDADE.md) | Fatos públicos, métricas, links, fontes e itens que exigem confirmação |
| [`02-ARQUITETURA-DE-CONTEUDO.md`](./02-ARQUITETURA-DE-CONTEUDO.md) | Sitemap, hierarquia narrativa, mensagens, CTAs e conteúdo de cada página |
| [`03-DESIGN-SYSTEM.md`](./03-DESIGN-SYSTEM.md) | Direção de arte, tokens, grid, tipografia, componentes e responsividade |
| [`04-MOTION-SYSTEM.md`](./04-MOTION-SYSTEM.md) | Linguagem de movimento, timings, scrollytelling, acessibilidade e limites |
| [`05-ARQUITETURA-TECNICA.md`](./05-ARQUITETURA-TECNICA.md) | Stack, estrutura de código, dados, rotas, imagens, testes e build |
| [`06-QUALIDADE-E-MEDICAO.md`](./06-QUALIDADE-E-MEDICAO.md) | Performance, acessibilidade, SEO, analytics, segurança e QA |
| [`DECISOES.md`](./DECISOES.md) | Registro cronológico das decisões que alteram ou refinam o plano |
| [`STATUS.md`](./STATUS.md) | Estado curto do projeto, sprint atual, próximos passos e bloqueios |

## Sprints

Os sprints estão no [`índice de sprints`](./sprints/README.md). Eles são deliberadamente curtos e
devem produzir um resultado verificável. Um sprint não autoriza executar o próximo.

| Sprint | Resultado principal |
|---|---|
| [00](./sprints/00-BASELINE-FATOS-E-ATIVOS.md) | Baseline, inventário de ativos e validação dos fatos |
| [01](./sprints/01-CONTEUDO-UNICO-E-TYPESCRIPT.md) | Fonte única de conteúdo e migração para TypeScript |
| [02](./sprints/02-FUNDACAO-TECNICA-E-ROTAS.md) | Fundação técnica, rotas e testes mínimos |
| [03](./sprints/03-DESIGN-SYSTEM-E-SHELL.md) | Design system implementado e shell responsivo |
| [04](./sprints/04-HERO-E-PRIMEIRA-DOBRA.md) | Hero e primeira dobra premium |
| [05](./sprints/05-HOME-PROVAS-E-CASES.md) | Home, provas de valor e prévias dos cases |
| [06](./sprints/06-CASE-ABAPLAY.md) | Case imersivo do ABAplay |
| [07](./sprints/07-CASE-LUMINIPSI.md) | Case imersivo do LuminiPsi |
| [08](./sprints/08-CASE-ASAAS-NFSE.md) | Case de sistema Asaas + NFS-e |
| [09](./sprints/09-PROCESSO-SOBRE-LAB-E-CONVERSAO.md) | Processo, sobre, laboratório e conversão |
| [10](./sprints/10-I18N-CURRICULO-SEO-E-ANALYTICS.md) | Internacionalização, currículo, SEO e analytics |
| [11](./sprints/11-PERFORMANCE-ACESSIBILIDADE-E-MOTION-QA.md) | Performance, acessibilidade e movimento reduzido |
| [12](./sprints/12-LANCAMENTO-E-OBSERVABILIDADE.md) | QA final, lançamento e observabilidade |

## Protocolo de encerramento de sprint

Ao terminar qualquer sprint:

1. Execute todos os testes e verificações definidos no documento do sprint.
2. Registre decisões não triviais em `DECISOES.md`.
3. Atualize `STATUS.md` com o resultado real, não apenas o planejado.
4. Atualize a fonte de verdade se algum fato público tiver mudado.
5. Liste pendências conhecidas sem escondê-las no código.
6. Não marque o sprint como concluído se houver critério de aceite obrigatório pendente.

## Regra de escopo

Os repositórios do ABAplay e do LuminiPsi são fontes de leitura. A reformulação do portfólio não
autoriza alterar esses produtos, acessar dados de pacientes, copiar credenciais ou publicar telas
com informações reais. Ativos só podem ser copiados depois de revisão visual e anonimização.
