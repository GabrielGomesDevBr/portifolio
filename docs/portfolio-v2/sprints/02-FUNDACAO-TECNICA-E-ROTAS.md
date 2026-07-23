# Sprint 02 — Fundação técnica, rotas e testes

## Objetivo

Criar a arquitetura que sustentará a home e os cases sem acumular dívida de navegação, SEO ou
carregamento.

## Resultado esperado

Rotas públicas funcionam por acesso direto, possuem layouts provisórios e carregamento separado. A
estratégia de prerender está provada.

## Dependências

- Sprint 01 concluído;
- hospedagem conhecida;
- decisão ADR-001 ainda válida.

## Escopo

1. Instalar/configurar roteamento.
2. Criar layouts provisórios para home, cases, sistema, sobre, currículo e 404.
3. Implementar restauração de scroll e foco após navegação.
4. Separar bundle por rota.
5. Criar primitive de SEO/metadados.
6. Fazer spike de prerender para todas as rotas.
7. Confirmar HTML de acesso direto com conteúdo e metadados.
8. Configurar Vitest, Testing Library e Playwright.
9. Criar smoke E2E de navegação.
10. Implementar Error Boundary e fallback de rota.
11. Registrar nova baseline de bundle.

## Portão de arquitetura

Se Vite não produzir HTML sustentável por rota na hospedagem real:

1. parar o sprint;
2. documentar evidências;
3. abrir ADR comparando manutenção do Vite, Astro e Next;
4. obter decisão antes de construir o design definitivo.

## Critérios de aceite

- Recarregar qualquer rota não retorna 404 do host.
- Título e descrição são específicos por rota.
- O HTML prerenderizado contém o `h1` e resumo da página.
- Navegação move foco corretamente.
- 404 funciona.
- Bundle está separado.
- Smoke tests passam em desktop e mobile.
- Nenhuma rota importa jsPDF no carregamento inicial.

## Testes obrigatórios

- acesso direto a todas as rotas;
- voltar/avançar do browser;
- foco pós-navegação;
- erro de rota;
- ausência de erros no console;
- preview de produção, não somente dev.

## Fora de escopo

- direção visual final;
- screenshots definitivas;
- scrollytelling;
- analytics real;
- SEO editorial completo.
