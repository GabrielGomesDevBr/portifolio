# Portfólio Gabriel Gomes V2

Portfólio bilíngue orientado a clientes, construído como uma demonstração de produto, design e
engenharia. A experiência apresenta ABAplay, LuminiPsi e a infraestrutura compartilhada de
cobrança/NFS-e com Asaas.

## Stack

- React 18, TypeScript estrito e Vite;
- React Router com rotas carregadas sob demanda;
- Framer Motion com fallback para `prefers-reduced-motion`;
- prerender próprio para 12 rotas públicas e página 404;
- Vitest, Testing Library, Playwright, axe e Lighthouse;
- currículo HTML imprimível e PDF gerado sob demanda.

## Executar

```bash
npm install
npm run dev
```

Para uma validação completa:

```bash
npm run qa
```

Comandos isolados:

```bash
npm run typecheck
npm run lint
npm test
npm run build
npm run test:e2e
npm run preview
npm run audit:performance
```

## Configuração de produção

Copie `.env.example` e configure:

- `VITE_SITE_URL`: domínio público final, obrigatório na build de produção para canonical,
  `hreflang`, Open Graph, sitemap e robots;
- `VITE_GA_MEASUREMENT_ID`: opcional; sem ele, nenhum analytics externo é carregado.

Exemplo:

```bash
VITE_SITE_URL=https://portfolio.exemplo.com npm run build
```

O diretório publicável é `dist/`. Cada rota possui seu próprio `index.html` prerenderizado, além de
`404.html`, `sitemap.xml` e `robots.txt`.

## Conteúdo e arquitetura

- fonte única bilíngue: `src/content/content.ts`;
- rotas e metadados estáticos: `src/content/routes.ts`;
- componentes de interface: `src/components/`;
- páginas: `src/pages/`;
- sistema visual e responsivo: `src/styles/global.css`;
- documentação de produto e sprints: `docs/portfolio-v2/`.

As capturas dos produtos são dados demo aprovados e ficam em `public/projects/`.

