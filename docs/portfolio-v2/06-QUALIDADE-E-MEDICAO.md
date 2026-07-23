# Qualidade e medição

## 1. Baseline conhecida

Auditoria de 2026-07-23:

- build de produção passa;
- bundle principal minificado em aproximadamente 702,56 kB, 230,12 kB gzip;
- jsPDF e dependências associadas entram cedo demais;
- ESLint existe nas dependências, mas `npm run lint` falha por ausência de configuração;
- página atual é responsiva, porém muito longa no mobile;
- animações `whileInView` podem deixar conteúdo invisível em screenshot full-page;
- faltam `og:image`, canonical, JSON-LD, sitemap e metadados específicos por case;
- fotografia de perfil não é utilizada;
- não existem testes do portfólio.

Registrar uma nova baseline ao fim do sprint 02.

## 2. Orçamentos de performance

Metas de lançamento em dispositivo móvel intermediário:

| Métrica | Meta |
|---|---|
| LCP | ≤ 2,5 s |
| CLS | ≤ 0,1 |
| INP | ≤ 200 ms |
| JS inicial gzip | alvo ≤ 180 kB; teto 220 kB |
| CSS inicial gzip | ≤ 35 kB |
| Hero crítico | ≤ 350 kB de mídia transferida |
| Página home inicial | alvo ≤ 1,2 MB |
| Case completo | lazy-load; sem teto único antes da rolagem |

Uma cena WebGL, vídeo ou sequência de imagens precisa de orçamento próprio e fallback.

## 3. Acessibilidade

Requisitos:

- WCAG 2.2 AA como alvo;
- landmarks e hierarquia de headings;
- skip link;
- foco visível;
- menu com gerenciamento de foco;
- contraste validado;
- conteúdo compreensível sem cor;
- alt text funcional;
- botões e links semanticamente corretos;
- áreas de toque de pelo menos 44 px;
- zoom até 200%;
- navegação completa por teclado;
- movimento reduzido real;
- sem autoplay de áudio;
- canvas com alternativa textual.

Testes:

- axe ou equivalente automatizado;
- teclado manual;
- leitor de tela em pelo menos um fluxo;
- modo de alto contraste quando disponível;
- inspeção com CSS e imagens desativadas.

## 4. SEO

Por rota:

- título único;
- descrição única;
- canonical;
- Open Graph;
- Twitter card;
- imagem social 1200 × 630;
- conteúdo principal no HTML;
- um `h1`;
- links internos descritivos.

Global:

- sitemap;
- robots;
- favicon e app icons;
- JSON-LD `Person`, `WebSite` e `CreativeWork`/`SoftwareApplication` quando apropriado;
- `hreflang` para pt-BR e inglês;
- URLs estáveis;
- página 404 útil.

Não usar `meta keywords` como estratégia.

## 5. Analytics e conversão

Funil mínimo:

```text
visita → interação com case → visualização profunda → clique de contato
```

Indicadores:

- taxa de abertura de case;
- profundidade de leitura;
- CTA de projeto por página;
- WhatsApp versus e-mail;
- download de currículo;
- idioma;
- origem de tráfego;
- Core Web Vitals reais.

Não otimizar por tempo de permanência artificial. O objetivo é entendimento e contato.

## 6. QA visual

Matriz:

| Categoria | Viewports |
|---|---|
| Mobile compacto | 360 × 800 |
| Mobile alvo | 390 × 844 |
| Tablet | 768 × 1024 |
| Laptop | 1280 × 800 |
| Desktop | 1440 × 900 |
| Wide | 1920 × 1080 |

Testar:

- zoom;
- textos longos em inglês;
- fontes lentas ou indisponíveis;
- imagens ausentes;
- movimento reduzido;
- touch;
- mouse;
- screenshot full-page;
- impressão do currículo.

## 7. QA de conteúdo

- fatos batem com a fonte de verdade;
- datas usam formato coerente;
- produto é sempre “LuminiPsi”;
- “portfólio” possui grafia correta;
- siglas são explicadas para público não técnico;
- links canônicos não usam rotas legadas;
- inglês não contém tradução literal estranha;
- CTA não promete prazo de resposta sem confirmação;
- nenhuma captura contém dado identificável.

## 8. Observabilidade

No lançamento:

- analytics ativo;
- coleta de Web Vitals;
- captura de erro frontend sem payload sensível, se houver ferramenta disponível;
- monitoramento simples de disponibilidade;
- verificação de links;
- versão/commit identificável no build ou deploy;
- procedimento de rollback documentado.

## 9. Checklist pré-lançamento

- Build, lint, typecheck e testes passam.
- Preview de produção foi usado, não apenas servidor dev.
- Todas as rotas foram abertas diretamente.
- Metadados foram inspecionados no HTML.
- Open Graph foi validado.
- WhatsApp e e-mail foram testados.
- PDF/currículo foi testado.
- Analytics foi validado sem dados pessoais.
- Assets foram revisados.
- Lighthouse/medição equivalente registrada.
- Backup ou tag da versão anterior existe.
- Plano de rollback confirmado.

## 10. Critério de sucesso pós-lançamento

Após duas a quatro semanas, revisar:

- erros;
- rotas mais visitadas;
- conversão para contato;
- abandono antes dos cases;
- Web Vitals reais;
- dispositivos com problemas;
- links quebrados;
- feedback qualitativo de clientes e pares.

A fase pós-lançamento corrige evidências reais; não inicia redesign arbitrário.
