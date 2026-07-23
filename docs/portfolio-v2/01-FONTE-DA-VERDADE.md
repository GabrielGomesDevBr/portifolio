# Fonte da verdade — conteúdo e fatos públicos

## 1. Como usar este documento

Este arquivo separa fatos confirmados, métricas dinâmicas e afirmações que exigem validação antes de
serem publicadas. Site, currículo e metadados devem consumir a mesma estrutura de conteúdo.

Níveis de confiança:

- **Confirmado publicamente:** pode ser exibido.
- **Confirmado no repositório:** o código ou documentação sustenta a afirmação; validar operação real
  quando a frase disser “em produção”.
- **Informado pelo proprietário:** válido, mas deve receber data de confirmação.
- **Pendente:** não publicar como fato.

Data desta consolidação: **2026-07-23**.

## 2. Identidade e contato

| Campo | Valor | Estado |
|---|---|---|
| Nome | Gabriel Gomes | Confirmado |
| Título principal | Engenheiro de Produto Full-Stack | Confirmado |
| Complemento | SaaS, automação e IA aplicada | Confirmado |
| Localidade | São Paulo, SP, Brasil | Confirmado |
| E-mail | gabrielgomesdevbr@gmail.com | Confirmado |
| WhatsApp | +55 11 94602-0901 | Confirmado no site atual |
| LinkedIn | linkedin.com/in/gabrielgomesdevbr | Confirmado no site atual |
| GitHub | github.com/GabrielGomesDevBr | Confirmado no site atual |
| Disponibilidade | Projetos, remoto e oportunidades de produto/full-stack | Revalidar antes do lançamento |

## 3. ABAplay

### Descrição pública

Plataforma SaaS multi-tenant para clínicas de terapia infantil, incluindo ABA, psicologia,
fonoaudiologia, terapia ocupacional e áreas relacionadas.

### Estado

| Fato | Estado | Fonte |
|---|---|---|
| Em produção desde 2025 | Confirmado no site e documentação | Repositório ABAplay `CLAUDE.md` |
| Quatro clínicas pagantes | Informado/publicado anteriormente | Confirmar novamente antes do deploy |
| Mais de 300 pacientes | Informado/publicado anteriormente | Confirmar novamente antes do deploy |
| Gabriel responde por produto, código, infra, vendas e suporte | Confirmado | Arquitetura e histórico do produto |
| Link público | `https://abaplay.app.br/` | Confirmar redirecionamento canônico |

### Capacidades demonstráveis

- Multi-tenant por clínica.
- Registro de sessões com níveis de prompting.
- Agenda, recorrência, cobertura de ausências e disponibilidade.
- Chat em tempo real entre terapeuta e responsáveis.
- Plano terapêutico versionado, assinatura e logs de exportação.
- Rastreios clínicos com comparação longitudinal.
- Prontuário em Cloudflare R2 com URLs pré-assinadas.
- Assistente multi-agente com limites e auditoria.
- Cobrança por vagas, proração, inadimplência e reativação.
- Asaas com webhook idempotente.
- Emissão automática de NFS-e após pagamento confirmado.
- Deploy em VPS, containers, monitoramento e backup.

### Métricas técnicas dinâmicas

Medição local em 2026-07-23:

- aproximadamente 197 mil linhas rastreadas em `backend/src`, `frontend/src` e fontes da landing;
- 581 commits no repositório;
- 274 migrations SQL rastreadas;
- 57 arquivos de teste;
- aproximadamente 485 declarações `it()`/`test()`.

Esses números mudam. Não copiar manualmente para vários arquivos. Antes de publicar, executar:

```bash
git rev-list --count HEAD
git ls-files 'backend/migrations/*.sql' | wc -l
git ls-files | rg '(__tests__/.*|\.test\.|\.spec\.)' | wc -l
```

Decisão editorial: priorizar métricas de negócio e operação. Linhas de código e commits podem
aparecer como telemetria secundária, nunca como argumento principal de qualidade.

## 4. LuminiPsi

### Descrição pública

SaaS multi-tenant de gestão clínica para psicólogos e clínicas de psicologia, com prontuário,
agenda, evoluções, documentos, registros restritos, portal do paciente e conformidade CFP/LGPD.

### Estado

| Fato | Estado | Fonte |
|---|---|---|
| Em produção desde julho de 2026 | Confirmado no repositório | `/home/gabriel/app_registro_evolucao/CLAUDE.md` |
| Fase de validação, sem carteira de clientes na data da auditoria | Confirmado no repositório | Mesmo arquivo |
| Domínio | `https://luminipsi.com.br/` | Confirmar disponibilidade antes do deploy |
| App e API em subdomínios próprios | Confirmado no repositório | `CLAUDE.md` |
| Deploy automático com rollback | Confirmado no repositório | Workflow e documentação de produção |

### Capacidades demonstráveis

- React, TypeScript, Express, Prisma e PostgreSQL em monorepo.
- RBAC com oito papéis e permissões granulares.
- PIN secundário de curta duração para registros restritos.
- AuditLog e SuperAdminLog separados.
- Agenda, evoluções, documentos, escalas e portal.
- Automação clínica determinística, sem IA externa em conteúdo clínico.
- Quatro planos, add-ons e quotas de pacientes/profissionais.
- Asaas com assinaturas, webhook idempotente e NFS-e automática.
- R2 privado intermediado por rotas autenticadas.
- CI/CD com testes, GHCR, smoke test, tag anterior e rollback automático.
- Banco local espelhando a topologia de produção.

### Métricas técnicas dinâmicas

Medição local em 2026-07-23:

- aproximadamente 50,9 mil linhas TypeScript rastreadas;
- 27 diretórios de módulos da API;
- 19 grupos de features web;
- 41 modelos Prisma;
- 28 arquivos de teste/spec;
- aproximadamente 141 declarações `it()`/`test()`;
- 113 commits no repositório.

O texto antigo de “64 mil linhas”, “24 módulos” e “Stripe” não deve ser reutilizado sem nova
medição.

## 5. Sistema compartilhado Asaas + NFS-e

### Afirmações confirmadas

- ABAplay e LuminiPsi usam a mesma conta PJ do Asaas.
- Cada aplicação possui integração e token de webhook próprios.
- Eventos são isolados por assinatura ou cliente no banco de cada produto.
- Eventos desconhecidos ou pertencentes ao outro produto respondem `200` sem efeito.
- A entrega é tratada como `at-least-once`, com idempotência pelo ID do evento.
- Eventos de cobrança resolvem pela assinatura.
- Eventos de nota fiscal resolvem pelo cliente.
- NFS-e é armada na assinatura e emitida após confirmação do pagamento.
- Falha de nota gera alerta operacional sem cancelar a contratação.
- Existem proteções para chave de API, fila pausada, datas e proração.

### Afirmações que exigem cautela

- Taxas do gateway podem mudar. Revalidar no painel ou contrato antes de publicar valores.
- Não afirmar percentual de economia sem declarar meio de pagamento e exemplo usado.
- Não afirmar Pix Automático como ativo enquanto a conta não tiver liberação confirmada.
- Não afirmar quantidade de notas emitidas ou MRR sem consultar produção.

### Formulação pública recomendada

> Dois SaaS independentes compartilham uma infraestrutura financeira com isolamento por aplicação:
> assinaturas, webhooks idempotentes, proração, recuperação de inadimplência e NFS-e automática,
> com alertas para falhas que normalmente seriam silenciosas.

## 6. Trajetória

| Período | Papel | Estado |
|---|---|---|
| 2015–2024 | Diretor Administrativo — Hope Construtora | Confirmado no conteúdo atual |
| 2023–atual | Fundador e Engenheiro de Produto — ABAplay | Confirmado |
| 2024 | Prompt Engineer — Alignerr e Outlier | Confirmado no conteúdo atual |
| 2026–atual | Fundador e Engenheiro de Produto — LuminiPsi | Confirmado |
| Em andamento | Bacharelado em Engenharia de Software — Universidade Cruzeiro do Sul | Revalidar período/semestre |

Evitar usar “comecei depois dos 40” como argumento principal da home. Essa informação pode aparecer
na página Sobre como parte da narrativa de negócio e transição profissional.

## 7. Projetos de laboratório

Antes de republicar cada projeto, confirmar:

- repositório público e acessível;
- README atual;
- screenshots disponíveis;
- stack correta;
- se o projeto reforça o posicionamento atual.

Projetos candidatos:

- Finanças IA;
- PsicoIA Pro;
- Mural de Bicos;
- Interface LLM Local;
- Prompt Agent;
- CliniAgenda.

No máximo quatro devem aparecer inicialmente. Projetos fracos ou desatualizados reduzem a percepção
de especialização.

## 8. Dados proibidos

Nunca publicar:

- nomes, e-mails, documentos ou prontuários de pacientes;
- tokens, chaves, IDs reais de gateway ou URLs privadas;
- números de NFS-e, chaves fiscais ou documentos exibidos em documentação interna;
- nomes de clínicas sem autorização;
- dashboards com receita ou dados operacionais não aprovados;
- capturas com dados de produção, mesmo borrados de forma reversível.

## 9. Checklist antes de atualizar conteúdo público

- Confirmar contagens de clientes e pacientes com Gabriel.
- Confirmar disponibilidade para projetos e/ou contratação.
- Confirmar URLs canônicas.
- Recalcular métricas técnicas escolhidas.
- Confirmar que Asaas e NFS-e estão ativos nos dois produtos.
- Revisar tradução em inglês por sentido, não apenas literalidade.
- Atualizar site, currículo, metadados e JSON-LD pela mesma fonte.
