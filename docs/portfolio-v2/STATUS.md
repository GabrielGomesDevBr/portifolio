# Status — Portfólio V2

**Atualizado em:** 2026-07-23  
**Fase:** implementação concluída; release candidate validada localmente  
**Sprint atual:** 12 — publicação no Render
**Último sprint concluído:** 11 — performance, acessibilidade e QA de motion

## Concluído

- Migração completa para React + TypeScript estrito.
- Fonte única de conteúdo em pt-BR e inglês.
- Home, Sobre, currículo, 404 e três cases individuais.
- Atualização de ABAplay e LuminiPsi com cobrança e NFS-e automáticas via Asaas.
- Design system autoral, shell responsivo, menu acessível e motion progressivo.
- Rotas localizadas com carregamento sob demanda.
- Prerender de 12 rotas públicas e 404 com conteúdo no HTML.
- Canonical, `hreflang`, Open Graph por case, JSON-LD, sitemap e robots.
- Quatro imagens sociais 1200 × 630.
- Open Graph validado com URL absoluta, dimensões e texto alternativo para compartilhamento.
- Favicon autoral em SVG, PNG 32 × 32 e ícone 180 × 180 para atalhos móveis.
- Showcases de ABAplay e LuminiPsi refeitos com screenshots reais e proporções preservadas.
- Retrato reenquadrado no formato original, em moldura menor e centralizada na coluna.
- Projetos secundários substituídos pelo pipeline real de aquisição B2B e suas automações.
- Currículo imprimível e PDF carregado somente sob demanda.
- Analytics opcional, eventos de conversão e observação de Web Vitals.
- Fontes auto-hospedadas e mídia lazy-loaded abaixo da dobra.
- Vitest/Testing Library e suíte Playwright + axe.
- Auditoria de dependências de produção sem vulnerabilidades conhecidas.

## Próximo passo

Validar o deploy automático no Render e registrar o procedimento de rollback.
O domínio público está configurado como `https://portifolio-k2s6.onrender.com`.

## Validação da release candidate

- `typecheck`, lint e build: passam;
- testes de componente/conteúdo: 9 passam;
- E2E: 8 cenários passam — rotas, 404, menu mobile, matriz responsiva, motion reduzido, PDF, Open Graph e axe;
- axe: zero violação séria ou crítica nas páginas críticas;
- Lighthouse local mobile: Performance 95, Acessibilidade 100, Boas práticas 96, SEO 100;
- LCP 2,7 s, CLS 0, TBT 20 ms e FCP 1,7 s no ambiente local;
- JS inicial estimado abaixo do teto de 220 kB gzip;
- jsPDF e dependências entram apenas ao solicitar o PDF.

## Riscos conhecidos

- headers, redirects e rollback ainda precisam ser validados no Render;
- analytics externo permanece desligado sem `VITE_GA_MEASUREMENT_ID`;
- LCP local ficou 0,2 s acima da meta aspiracional de 2,5 s, com score 95;
- validação de Web Vitals reais depende de tráfego em produção;
- não foram adicionados nomes/logos de clientes ou depoimentos sem autorização.

## Regra de atualização

Ao encerrar um sprint, substituir esta seção pelo estado real, registrar testes executados e apontar
o próximo sprint. Não acumular diário detalhado aqui.
