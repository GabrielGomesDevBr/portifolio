# Design system

## 1. Direção de arte

O sistema visual combina uma publicação editorial contemporânea com interfaces de operação. A
sensação desejada é de precisão, profundidade e autoria.

Palavras-chave:

- editorial;
- sistêmico;
- tátil;
- técnico sem parecer terminal;
- humano sem parecer corporativo genérico;
- expressivo com controle.

Evitar:

- template SaaS com gradiente roxo e cards de vidro;
- excesso de bordas arredondadas iguais;
- ícones decorativos em todos os títulos;
- fundos com partículas sem significado;
- texto cinza excessivamente claro;
- componente bento usado como solução para todas as seções;
- mockups repetidos apenas em molduras de celular.

## 2. Princípio de composição

Cada página alterna três modos:

1. **Editorial:** tipografia, espaço e leitura.
2. **Produto:** telas, detalhes e interação.
3. **Sistema:** diagramas, telemetria e relações.

A alternância cria ritmo. Duas seções consecutivas não devem usar a mesma composição de cards,
alinhamento e densidade.

## 3. Tokens iniciais de cor

Os valores são ponto de partida e só podem ser ajustados se contraste, reprodução de telas ou
prototipação mostrarem necessidade. Mudanças devem ir para `DECISOES.md`.

### Base global

```css
--canvas: #f3f4ef;
--surface: #ffffff;
--surface-muted: #e9ede7;
--ink: #07110e;
--ink-soft: #34443e;
--ink-muted: #66756f;
--line: #cfd8d2;
--engine: #061713;
--engine-soft: #0d2821;
--engine-line: #1a4438;
--engine-text: #e9f4ef;
--brand: #16a579;
--brand-bright: #62e6b6;
--signal: #ffb454;
--danger: #e85353;
```

### Acentos por case

```css
--abaplay-primary: #7c3aed;
--abaplay-secondary: #ff6b35;
--abaplay-highlight: #2dd4bf;

--luminipsi-primary: #0f9f8f;
--luminipsi-secondary: #ff795f;
--luminipsi-highlight: #8b5fbf;

--billing-primary: #39d98a;
--billing-secondary: #f3c969;
```

As cores de produto devem aparecer em capítulos específicos, sem transformar a identidade global
numa colagem.

## 4. Tipografia

Famílias iniciais:

- **Display:** Bricolage Grotesque.
- **Texto/UI:** Instrument Sans.
- **Telemetria:** IBM Plex Mono.

Estas famílias já existem no projeto e formam um sistema coerente. A qualidade virá de escala,
ritmo, peso e composição. Uma troca tipográfica só deve ocorrer após comparação real no sprint de
design system.

Escala fluida sugerida:

```css
--text-xs: clamp(0.72rem, 0.69rem + 0.12vw, 0.8rem);
--text-sm: clamp(0.86rem, 0.82rem + 0.16vw, 0.96rem);
--text-base: clamp(1rem, 0.96rem + 0.18vw, 1.12rem);
--text-lg: clamp(1.16rem, 1.07rem + 0.38vw, 1.42rem);
--text-xl: clamp(1.45rem, 1.2rem + 0.9vw, 2rem);
--text-2xl: clamp(2rem, 1.45rem + 2vw, 3.4rem);
--text-hero: clamp(3.2rem, 1.8rem + 5.8vw, 8.5rem);
```

Regras:

- títulos grandes usam entrelinha entre `0.88` e `1.02`;
- corpo usa entrelinha entre `1.5` e `1.7`;
- comprimento de leitura ideal entre 55 e 72 caracteres;
- mono nunca deve carregar parágrafos longos;
- caixa alta apenas em labels curtos;
- evitar mais de três pesos tipográficos por família.

## 5. Grid e espaçamento

### Desktop

- grid de 12 colunas;
- largura máxima visual: 1440 px;
- largura máxima de leitura: 720 px;
- gutter: 24–32 px;
- margens laterais: 48–80 px conforme viewport.

### Tablet

- grid de 8 colunas;
- margens de 32 px;
- composições assimétricas podem virar 5/3 ou 4/4.

### Mobile

- grid de 4 colunas;
- margens de 18–22 px;
- não apenas empilhar: reordenar conteúdo para preservar narrativa;
- áreas de toque mínimas de 44 × 44 px.

Escala de espaço:

```text
4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192
```

## 6. Formas e superfícies

- Raios pequenos (`6–10 px`) em controles e chips.
- Raios médios (`16–24 px`) em painéis.
- Raios grandes só em composições de produto, nunca universalmente.
- Bordas de 1 px para estrutura; 2 px somente para ênfase.
- Sombras macias e raras. Preferir contraste de superfície, linha e profundidade por sobreposição.
- Ruído/grão pode existir como textura global leve, sem reduzir legibilidade.

## 7. Componentes fundamentais

### Header

- transparente no hero e sólido após scroll;
- indicador discreto da seção atual;
- CTA de projeto;
- seletor de idioma;
- menu mobile acessível;
- não ocupar mais que 72 px no desktop.

### Botões

Variantes:

- primário;
- secundário;
- texto/arrow;
- invertido;
- ícone.

Estados obrigatórios:

- default;
- hover;
- pressed;
- focus-visible;
- disabled;
- loading quando aplicável.

Movimento magnético pode existir apenas em desktop com ponteiro preciso e deslocamento máximo de
4 px.

### Case card

Não deve ser um card genérico. É uma pequena cena contendo:

- produto;
- problema/resultado;
- papel de Gabriel;
- uma imagem ou composição;
- status;
- CTA.

ABAplay e LuminiPsi devem possuir layouts diferentes.

### Metric

- número ou afirmação;
- unidade clara;
- fonte/data acessível quando necessário;
- animação opcional;
- nunca usar número sem contexto.

### Diagram node

- estado inativo, ativo, sucesso, alerta e erro;
- texto legível sem depender da cor;
- conexão com seta ou direção explícita;
- versão estática equivalente.

### Media frame

Variantes:

- navegador desktop;
- painel sem moldura;
- dispositivo móvel;
- recorte detalhado;
- sequência comparativa.

Não adicionar molduras realistas em todas as imagens.

## 8. Imagens e capturas

- Produzir capturas com dados de demonstração.
- Desktop em no mínimo 1600 px de largura.
- Mobile em no mínimo 780 px de largura para telas retina.
- Preferir AVIF com fallback WebP quando o pipeline permitir.
- Definir `width`, `height`, `sizes` e `srcset`.
- Usar composição editorial, não apenas screenshot centralizada.
- Capturas com texto precisam permanecer legíveis.
- Toda imagem possui alt orientado à função.

## 9. Retrato

A fotografia atual pode ser usada apenas como placeholder. Antes do lançamento:

- avaliar nitidez em telas grandes;
- decidir entre retrato editorial ou ausência intencional de retrato no hero;
- evitar recorte corporativo convencional desconectado da direção visual;
- produzir versão com fundo, luz e enquadramento compatíveis com o site.

## 10. Responsividade

Responsividade deve ser decidida por componente:

- diagramas podem virar sequência vertical;
- seções fixadas viram carrossel controlado ou narrativa linear;
- métricas podem reduzir quantidade;
- textos nunca ficam ocultos por depender de hover;
- mockups não podem exigir zoom;
- a ordem visual precisa acompanhar a ordem do DOM.

## 11. Estado vazio, erro e carregamento

O portfólio é majoritariamente estático, mas interações assíncronas devem possuir:

- fallback sem JavaScript para conteúdo principal;
- feedback ao gerar currículo;
- mensagens claras se download falhar;
- placeholders que preservem espaço;
- nenhuma tela em branco causada por animação ou erro de asset.

## 12. Critério de aceite visual global

- Não há repetição de um mesmo padrão em mais de duas seções consecutivas.
- Cada case é reconhecível mesmo sem ler o nome.
- A composição funciona em 390 e 1440 px.
- Contraste atende WCAG AA.
- Texto de corpo não fica menor que 16 px em mobile.
- Estados de foco têm presença equivalente ao hover.
- O site continua coerente com imagens desativadas e movimento reduzido.
