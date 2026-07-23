# Sprint 00 — Baseline, fatos e ativos

## Objetivo

Começar a implementação com fatos confirmados, ativos seguros e uma medição reproduzível do site
atual.

## Resultado esperado

- fonte de verdade revisada com Gabriel;
- inventário de imagens e telas;
- baseline técnica e visual registrada;
- hospedagem e domínio conhecidos;
- nenhum conteúdo sensível entre os ativos aprovados.

## Dependências

- `00-GUIA-MASTER.md`;
- `01-FONTE-DA-VERDADE.md`;
- acesso somente leitura aos repositórios ABAplay e LuminiPsi;
- respostas de Gabriel para os itens marcados como confirmação.

## Escopo

1. Registrar branch, commit e estado do worktree.
2. Medir build, chunks, imagens e fontes atuais.
3. Capturar home atual em desktop e mobile, com e sem movimento reduzido.
4. Confirmar domínio e modelo de hospedagem.
5. Recalcular métricas técnicas que permanecerão candidatas a publicação.
6. Confirmar clientes, pacientes, estado de produção, cobrança e NFS-e.
7. Inventariar screenshots existentes.
8. Identificar novas telas necessárias para os três cases.
9. Revisar cada captura contra dados pessoais, fiscais e operacionais.
10. Definir quais projetos de laboratório continuam.
11. Atualizar `01-FONTE-DA-VERDADE.md`, `STATUS.md` e, se necessário, `DECISOES.md`.

## Entregáveis

- tabela de fatos confirmados;
- diretório/manifesto de ativos aprovados;
- relatório curto de baseline;
- lista de capturas a produzir;
- decisão documentada de domínio/hospedagem;
- confirmação do próximo sprint.

## Critérios de aceite

- Nenhuma métrica pública importante permanece sem estado ou fonte.
- Todos os links públicos foram abertos.
- Toda captura aprovada usa dados demo.
- Build atual e tamanho dos chunks foram registrados.
- O problema do lint foi reproduzido e documentado.
- A estratégia de hospedagem é conhecida.
- `STATUS.md` aponta para o Sprint 01.

## Verificações

```bash
git status --short
npm run build
npm run lint
```

Também executar captura visual nos viewports 390, 768, 1280 e 1440.

## Fora de escopo

- alterar componentes;
- migrar arquivos para TypeScript;
- criar a nova interface;
- publicar qualquer versão;
- alterar ABAplay ou LuminiPsi.
