# Motion system

## 1. Função do movimento

O movimento deve cumprir pelo menos uma função:

- orientar a atenção;
- explicar uma relação;
- demonstrar mudança de estado;
- conectar duas partes da narrativa;
- dar materialidade a uma interação;
- reforçar a identidade do produto.

Se não cumprir nenhuma, não deve existir.

## 2. Personalidade

O movimento global é preciso e elástico apenas em detalhes. Evitar comportamento “saltitante”,
parallax excessivo e entradas demoradas.

Características:

- entradas rápidas;
- desaceleração limpa;
- pequenas antecipações em elementos interativos;
- sequências coordenadas;
- movimento sistêmico nos diagramas;
- transições de produto mais expressivas que transições de texto.

## 3. Tokens

### Durações

```text
instant: 100 ms
fast:    180 ms
base:    320 ms
slow:    520 ms
scene:   800–1200 ms
```

Nenhuma interação simples deve levar mais de 520 ms. Cenas maiores podem chegar a 1200 ms desde que
não bloqueiem navegação ou leitura.

### Curvas

```css
--ease-standard: cubic-bezier(0.22, 1, 0.36, 1);
--ease-enter: cubic-bezier(0.16, 1, 0.3, 1);
--ease-exit: cubic-bezier(0.7, 0, 0.84, 0);
--ease-linear: linear;
```

Springs devem ser usadas apenas em gestos ou objetos com resposta física. Não misturar springs
diferentes na mesma cena.

## 4. Primitivas

### Reveal editorial

- opacidade `0 → 1`;
- deslocamento máximo de 24 px;
- duração base;
- stagger de 40–70 ms;
- não aplicar individualmente a cada parágrafo de uma lista longa.

### Máscara de mídia

- `clip-path` ou container com overflow;
- imagem desloca no máximo 6%;
- duração lenta;
- sem revelar conteúdo crítico somente depois de grande rolagem.

### Linha de sistema

- SVG `stroke-dashoffset`;
- direção visual explícita;
- nós ativam quando a conexão chega;
- labels já existem antes da animação.

### Contador

- usado apenas para métricas confirmadas;
- duração entre 600 e 1000 ms;
- valor final presente no DOM para acessibilidade;
- não repetir sempre que o usuário volta à seção.

### Hover de mídia

- escala máxima `1.02`;
- duração base;
- não recortar texto nem alterar layout.

### Transição de rota

- saída curta, entrada coordenada;
- preservar navegação do browser;
- foco deve ir ao início do conteúdo;
- não atrasar carregamento real para encenar transição.

## 5. Hero

Sequência máxima:

1. identidade/status;
2. título por linhas ou palavras;
3. descrição e CTAs;
4. visual do sistema;
5. provas.

Tempo total recomendado: 900–1400 ms, com o conteúdo utilizável antes do fim.

O hero não terá splash screen obrigatória. Caso exista assinatura de carregamento, ela deve durar no
máximo 700 ms, aparecer apenas na primeira visita e nunca mascarar carregamento.

## 6. Scrollytelling

Usar em três pontos:

1. prévia ou abertura dos cases;
2. evolução ABAplay → LuminiPsi;
3. sistema Asaas/NFS-e.

Regras:

- no máximo uma seção fixada longa por página;
- duração de uma cena fixada entre 1,5 e 3 alturas de viewport;
- progresso deve ser reversível ao rolar para cima;
- conteúdo textual permanece selecionável;
- em mobile, converter para sequência natural se o pin prejudicar controle;
- nunca sequestrar o scroll.

## 7. Interações

### Botões

- cor, borda e pequeno deslocamento;
- ícone se move no máximo 4 px;
- resposta `pressed` imediata;
- foco não depende de animação.

### Menu

- backdrop e painel entram coordenados;
- foco preso;
- Escape fecha;
- itens podem entrar em stagger curto;
- rolagem do body é bloqueada enquanto aberto.

### Cursor

Não implementar cursor customizado global. Estados contextuais podem acompanhar o ponteiro em áreas
de mídia no desktop, desde que o cursor nativo continue funcional.

## 8. Movimento reduzido

Com `prefers-reduced-motion: reduce`:

- conteúdo nasce visível;
- remover pins, parallax, contadores animados e desenho progressivo;
- trocar transições de rota por fade instantâneo ou nenhum;
- manter mudanças de estado essenciais;
- não usar `animation-duration: 0.01ms` como única solução se o estado inicial continuar invisível.

O DOM e a ordem de leitura devem ser idênticos.

## 9. Robustez

Problema a evitar: elementos com `opacity: 0` esperando `IntersectionObserver` podem desaparecer em
capturas, impressão, automação ou falha de JavaScript.

Padrão:

- conteúdo deve ser visível por padrão;
- JavaScript adiciona capacidade de animação após hidratação;
- animação não é requisito para compreender a seção;
- timeout/fallback torna conteúdo visível se o observer não executar.

## 10. Performance

- priorizar `transform` e `opacity`;
- evitar animar `width`, `height`, `top`, `left` e filtros pesados continuamente;
- no máximo um canvas contínuo por página;
- pausar animações fora do viewport;
- respeitar `visibilitychange`;
- evitar múltiplos listeners de scroll; usar uma fonte coordenada;
- testar CPU throttling e dispositivo móvel real;
- alvo visual de 60 fps, sem exigir 60 fps para acesso ao conteúdo.

## 11. Bibliotecas

- Motion continua como base para componentes e transições.
- GSAP/ScrollTrigger pode entrar apenas em cenas fixadas ou timelines que Motion não resolva com
  clareza.
- Não adicionar biblioteca de smooth scroll por padrão.
- WebGL/Three.js depende de prova visual, fallback estático e orçamento de performance.

## 12. Checklist de aceite por animação

- A animação tem função declarada.
- O estado inicial e final são compreensíveis.
- Funciona ao rolar nos dois sentidos quando necessário.
- Não bloqueia clique ou leitura.
- Não causa layout shift.
- Possui versão reduzida.
- Foi testada em touch e mouse.
- Não deixa conteúdo invisível em screenshot full-page.
- Mantém fluidez com CPU reduzida.
