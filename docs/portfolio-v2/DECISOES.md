# Registro de decisões

Este arquivo registra decisões que afetam mais de um sprint. Não usar para anotações temporárias.

## Formato

```text
### ADR-NNN — Título
Data:
Estado: proposta | aceita | substituída
Contexto:
Decisão:
Consequências:
Substitui:
```

## ADR-001 — Manter React + Vite como base

**Data:** 2026-07-23  
**Estado:** aceita

**Contexto:** O portfólio atual usa React, Vite e Tailwind. A percepção premium depende mais de
direção de arte, conteúdo, rotas, motion e qualidade do que de uma troca de framework.

**Decisão:** Manter React + Vite e migrar para TypeScript. Adicionar roteamento e prerender. Reabrir
a decisão apenas se um spike provar que metadados por rota ou hospedagem não podem ser resolvidos de
forma sustentável.

**Consequências:** Menor risco de reescrita e mais tempo para design. O sprint 02 precisa provar
acesso direto, HTML indexável e Open Graph por rota.

## ADR-002 — Público primário é cliente de projeto

**Data:** 2026-07-23  
**Estado:** aceita

**Contexto:** O site atual enfatiza currículo e oportunidades de emprego, mas o objetivo declarado é
também conquistar clientes.

**Decisão:** O CTA principal será conversa sobre projeto. Cases são a segunda ação. Currículo
permanece disponível para o público secundário.

**Consequências:** Hero, header, contato e analytics mudam de prioridade.

## ADR-003 — Três cases principais

**Data:** 2026-07-23  
**Estado:** aceita

**Decisão:** A versão inicial terá cases individuais de ABAplay, LuminiPsi e sistema compartilhado
Asaas/NFS-e.

**Consequências:** Projetos de laboratório recebem menos destaque e não substituem provas principais.

## ADR-004 — Conteúdo e currículo compartilham fonte

**Data:** 2026-07-23  
**Estado:** aceita

**Contexto:** Site e gerador de currículo repetem métricas e já divergiram.

**Decisão:** Conteúdo tipado único por idioma alimentará interface, metadados e currículo.

**Consequências:** Nenhum número público pode ser digitado novamente em componente ou utilitário.

## ADR-005 — Movimento não pode esconder conteúdo

**Data:** 2026-07-23  
**Estado:** aceita

**Contexto:** O padrão atual de `initial: opacity 0` produz áreas vazias em captura full-page.

**Decisão:** Conteúdo nasce acessível e visível; motion é melhoria progressiva. Movimento reduzido
remove pins, parallax e contadores.

**Consequências:** Primitivas de motion centralizadas e teste visual específico.

## ADR-006 — Métricas de negócio têm prioridade

**Data:** 2026-07-23  
**Estado:** aceita

**Decisão:** Clientes, pacientes, operação, automação, confiabilidade e resultados vêm antes de
linhas de código, commits e quantidade de migrations.

**Consequências:** Métricas técnicas são secundárias e precisam de data/fonte.

## ADR-007 — Sem CMS, backend ou chatbot na primeira versão

**Data:** 2026-07-23  
**Estado:** aceita

**Decisão:** Conteúdo permanece versionado no repositório. Contato usa canais diretos.

**Consequências:** Menos superfície operacional e melhor performance.

## ADR-008 — Prerender próprio por rota

**Data:** 2026-07-23  
**Estado:** aceita

**Contexto:** O spike confirmou que Vite pode permanecer sem sacrificar HTML indexável.

**Decisão:** Gerar um bundle SSR somente para build e usá-lo para prerenderizar todas as rotas
públicas. O cliente continua uma SPA com divisão por rota.

**Consequências:** Cada URL possui `h1`, conteúdo e metadados no HTML. A hospedagem só precisa servir
arquivos estáticos e respeitar os diretórios gerados.

## ADR-009 — Fontes auto-hospedadas

**Data:** 2026-07-23  
**Estado:** aceita

**Contexto:** O Google Fonts externo elevou FCP e LCP no Lighthouse local.

**Decisão:** Hospedar subconjuntos WOFF2 latinos no próprio projeto e fazer preload das duas fontes
críticas.

**Consequências:** Lighthouse de performance evoluiu de 82 para 95 e FCP de 3,2 s para 1,7 s.

## ADR-010 — Analytics opcional por ambiente

**Data:** 2026-07-23  
**Estado:** aceita

**Decisão:** Eventos são instrumentados no código, mas o script externo só carrega quando
`VITE_GA_MEASUREMENT_ID` existe.

**Consequências:** Desenvolvimento e ambientes sem consentimento não fazem coleta externa; bloqueio
do analytics nunca quebra a experiência.
