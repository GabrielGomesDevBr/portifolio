# Sprint 12 — QA final, lançamento e observabilidade

## Objetivo

Publicar a nova versão de forma controlada, verificável e reversível.

## Resultado esperado

Portfólio em produção, métricas funcionando, versão anterior recuperável e documentação encerrada.

## Dependências

- Sprint 11 concluído;
- domínio e deploy documentados;
- versão anterior preservada;
- conteúdo aprovado por Gabriel.

## Escopo

1. Congelar conteúdo e assets da release.
2. Rodar suíte completa.
3. Gerar build limpo.
4. Revisar preview de produção.
5. Validar headers, cache e redirects.
6. Criar tag/commit de release.
7. Preservar versão anterior.
8. Fazer deploy.
9. Rodar smoke tests em produção.
10. Validar analytics, Open Graph, sitemap e contato.
11. Validar Web Vitals iniciais.
12. Configurar monitoramento simples de disponibilidade e erros.
13. Atualizar `STATUS.md` e documentos afetados.
14. Criar lista de observação pós-lançamento.

## Plano de rollback

Antes do deploy, documentar:

- versão/tag anterior;
- comando ou ação de restauração;
- responsável;
- quais mudanças de DNS/host são reversíveis;
- como validar que rollback terminou.

Nenhum deploy sem plano de rollback testável.

## Smoke tests de produção

- home pt-BR;
- home inglês;
- três cases;
- acesso direto e refresh;
- contato WhatsApp/e-mail;
- currículo;
- 404;
- sitemap/robots;
- imagem social;
- analytics;
- ausência de erro de console.

## Critérios de aceite

- Produção serve o commit esperado.
- HTTPS e domínio canônico estão corretos.
- Todas as rotas respondem.
- Nenhum asset retorna 404.
- Analytics recebe eventos de teste.
- Contatos funcionam.
- Rollback está documentado.
- `STATUS.md` marca lançamento e período de observação.

## Pós-lançamento

Durante duas a quatro semanas:

- revisar erros e Web Vitals;
- verificar links;
- observar conversão;
- recolher feedback qualitativo;
- corrigir bugs;
- evitar adicionar features sem evidência.

## Fora de escopo

- nova direção visual;
- novos cases;
- CMS;
- mudanças nos produtos apresentados;
- otimização baseada em poucos acessos sem significado.
