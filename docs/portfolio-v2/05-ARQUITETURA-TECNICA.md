# Arquitetura técnica

## 1. Decisão de stack

Manter a base React + Vite. Migrar o código do portfólio para TypeScript e organizar rotas, conteúdo,
motion e componentes de forma explícita.

Motivos:

- a stack atual já resolve a experiência desejada;
- mudança de framework não cria percepção premium;
- Vite mantém iteração rápida;
- os maiores ganhos estão em conteúdo, direção visual, rotas, carregamento e qualidade;
- uma migração completa para outro framework adicionaria risco antes de existir necessidade de
  backend ou CMS.

Reavaliar apenas se o spike de SEO provar que prerender por rota não atende metadados, hospedagem ou
manutenção. A decisão deve considerar a infraestrutura real de deploy.

## 2. Stack alvo

- React.
- Vite.
- TypeScript estrito.
- React Router para páginas/cases.
- Tailwind como utilitário, apoiado por tokens CSS globais.
- Motion para animações de componente.
- GSAP/ScrollTrigger opcional para timelines complexas.
- Lucide para ícones funcionais.
- jsPDF carregado dinamicamente, ou currículo HTML imprimível com exportação sob demanda.
- Vitest + Testing Library para unidade/componente.
- Playwright para fluxos e regressão visual crítica.

Versões só devem ser alteradas após checagem de compatibilidade e build em branch de trabalho.

## 3. Estrutura alvo

```text
src/
  app/
    App.tsx
    router.tsx
    providers.tsx
  components/
    primitives/
    layout/
    navigation/
    media/
    diagrams/
    motion/
  content/
    schema.ts
    pt-BR.ts
    en.ts
    selectors.ts
  features/
    home/
    work/
      abaplay/
      luminipsi/
    systems/
      asaas/
    about/
    contact/
    resume/
  hooks/
  lib/
    analytics.ts
    seo.ts
    motion.ts
    media.ts
  styles/
    tokens.css
    globals.css
    utilities.css
  tests/
public/
  images/
    global/
    abaplay/
    luminipsi/
    asaas/
docs/
  portfolio-v2/
```

## 4. Conteúdo como dado

Site, currículo e metadados usam a mesma fonte tipada.

Modelo conceitual:

```ts
type Locale = 'pt-BR' | 'en';

type VerifiedMetric = {
  value: string;
  label: string;
  verifiedAt: string;
  source: string;
  public: boolean;
};

type CaseStudy = {
  slug: string;
  status: string;
  summary: string;
  role: string[];
  outcomes: VerifiedMetric[];
  chapters: CaseChapter[];
  stack: string[];
  links: CaseLink[];
};
```

Regras:

- sem cópias independentes dos mesmos números;
- conteúdo sensível nunca entra no bundle;
- campos obrigatórios falham no typecheck;
- o idioma inglês mantém a mesma estrutura;
- métricas internas com `public: false` não podem ser renderizadas.

## 5. Rotas

```text
/                         home pt-BR
/work/abaplay
/work/luminipsi
/systems/asaas-billing
/about
/resume
```

Estratégia de inglês será decidida no sprint 10 entre prefixo `/en` ou alternância de conteúdo na
mesma rota. Preferência técnica: URLs localizadas, porque permitem metadados e compartilhamento
coerentes.

Cada rota deve:

- funcionar por acesso direto;
- possuir fallback 404;
- atualizar título e metadados;
- mover foco para o conteúdo principal;
- restaurar scroll com comportamento previsível;
- carregar apenas assets necessários.

## 6. Renderização e SEO

Conteúdo principal precisa estar disponível para indexação e compartilhamento. No sprint técnico:

1. validar hospedagem atual;
2. testar prerender das rotas públicas;
3. confirmar que HTML gerado contém título, descrição e conteúdo principal;
4. confirmar Open Graph por case;
5. documentar comando de deploy.

Se a solução Vite exigir hacks frágeis para HTML por rota, abrir decisão formal de framework antes
de construir todos os cases.

## 7. Carregamento

- separar bundle por rota;
- carregar jsPDF apenas ao solicitar currículo;
- lazy-load de cenas pesadas abaixo da dobra;
- preload somente da fonte e mídia críticas do hero;
- imagens responsivas;
- evitar importar todas as screenshots em um componente global;
- prefetch de case quando link ficar ocioso ou receber intenção de navegação;
- fallback visual durante carregamento sem causar layout shift.

## 8. Motion

Criar primitivas próprias:

- `Reveal`;
- `MediaReveal`;
- `StaggerGroup`;
- `RouteTransition`;
- `MotionSafe`;
- `SystemLine`;
- `CountUp`.

Essas primitivas leem uma preferência de movimento centralizada. Não duplicar objetos `reveal` em
cada componente como ocorre hoje.

## 9. Internacionalização

- idioma definido pela URL ou estado canônico explícito;
- escolha persistida;
- `document.lang` correto;
- metadados por idioma;
- `hreflang`;
- fallback para pt-BR;
- não escolher inglês automaticamente apenas porque um crawler usa locale inglês;
- paridade estrutural validada por teste.

## 10. Currículo

Curto prazo:

- manter geração sob demanda;
- dynamic import do gerador e biblioteca;
- estado de loading/erro;
- dados vindos da mesma fonte do site.

Alvo preferencial:

- página `/resume` com CSS de impressão;
- PDF gerado apenas quando solicitado;
- links clicáveis e texto selecionável;
- revisão visual em A4.

## 11. Analytics

Eventos permitidos:

- `view_case`;
- `click_project_contact`;
- `click_whatsapp`;
- `click_email`;
- `download_resume`;
- `change_locale`;
- `open_project`;
- `complete_case`.

Não enviar:

- texto digitado;
- telefone/e-mail do visitante;
- parâmetros sensíveis;
- dados dos produtos.

Analytics deve falhar silenciosamente e nunca bloquear interação.

## 12. Testes

### Unidade

- seletores de conteúdo;
- paridade dos idiomas;
- visibilidade de métricas públicas;
- helpers de SEO;
- geração dos links de contato.

### Componente

- header e menu;
- seletor de idioma;
- CTA;
- versão reduzida das animações;
- case card;
- fallback de mídia.

### E2E

- navegar home → cada case → contato;
- abrir menu mobile;
- alternar idioma;
- acesso direto a rota;
- download/visualização do currículo;
- navegação por teclado crítica;
- ausência de erro de console.

### Visual

Capturas em 390, 768, 1280 e 1440 px para:

- hero;
- cards dos cases;
- diagrama Asaas;
- menu mobile;
- contato;
- páginas completas com movimento reduzido.

## 13. Segurança e privacidade

- links externos com `noopener noreferrer`;
- nenhuma variável secreta no frontend;
- sem HTML não sanitizado;
- política de analytics documentada;
- captura de produto revisada;
- dependências auditadas;
- headers de segurança definidos na hospedagem quando suportados.

## 14. Compatibilidade

Alvo:

- versões atuais de Chrome, Edge, Firefox e Safari suportadas pela política do projeto;
- iOS Safari e Chrome Android;
- fallback para `clip-path`, backdrop e efeitos não essenciais;
- sem dependência de hover para compreender conteúdo.

## 15. Critério de aceite técnico

- TypeScript estrito sem erros.
- ESLint configurado e passando.
- Build sem warning de chunk principal excessivo.
- Rotas acessíveis diretamente.
- Conteúdo principal presente no HTML prerenderizado.
- Nenhum dado duplicado entre site e currículo.
- Testes críticos passando.
- Nenhum conteúdo invisível se JavaScript de motion falhar.
