# Sprint 11 — Performance, acessibilidade e QA de motion

## Objetivo

Garantir que o impacto visual não comprometa velocidade, acesso, estabilidade ou dispositivos
modestos.

## Resultado esperado

Orçamentos atendidos, experiência acessível e sistema de movimento robusto.

## Dependências

- todas as rotas e cenas principais concluídas;
- analytics em modo de teste;
- assets finais disponíveis.

## Escopo

1. Analisar bundles por rota.
2. Remover dependências/imports desnecessários.
3. Otimizar fontes e imagens.
4. Ajustar preload, prefetch e lazy-load.
5. Medir Core Web Vitals em preview.
6. Rodar auditoria automatizada de acessibilidade.
7. Fazer navegação completa por teclado.
8. Testar leitor de tela em fluxos críticos.
9. Validar contraste e zoom.
10. Validar todas as cenas com movimento reduzido.
11. Testar CPU e rede reduzidas.
12. Corrigir conteúdo invisível em screenshot, impressão ou falha de observer.
13. Criar regressões visuais dos componentes críticos.

## Prioridade de correção

1. Conteúdo inacessível.
2. Navegação quebrada.
3. Erro ou vazamento.
4. LCP/INP/CLS acima do orçamento.
5. Queda severa de frame.
6. Diferença visual menor.

## Critérios de aceite

- Metas de `06-QUALIDADE-E-MEDICAO.md` atendidas ou exceções documentadas.
- Zero violação crítica de acessibilidade.
- Site completo utilizável por teclado.
- Movimento reduzido não contém pins/parallax.
- Nenhuma seção nasce permanentemente invisível.
- JS inicial respeita o teto.
- Imagens possuem dimensões e variantes.
- Sem erro no console em todas as rotas.

## Testes obrigatórios

- Lighthouse ou equivalente em home e cases;
- axe;
- Playwright visual;
- 360, 390, 768, 1280, 1440 e 1920 px;
- Chrome, Firefox e WebKit disponíveis;
- rede lenta e CPU throttling;
- screenshot full-page;
- impressão do currículo.

## Fora de escopo

- redesign amplo;
- adicionar novas cenas;
- novas páginas;
- trocar stack sem evidência.
