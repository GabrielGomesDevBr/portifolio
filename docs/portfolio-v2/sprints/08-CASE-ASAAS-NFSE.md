# Sprint 08 — Case de sistema Asaas + NFS-e

## Objetivo

Demonstrar engenharia de integração financeira por meio de uma narrativa visual acessível.

## Resultado esperado

Case sistêmico que conecta ABAplay e LuminiPsi à cobrança, webhooks, proração, inadimplência e NFS-e,
sem expor segredos ou transformar a página em documentação interna.

## Dependências

- Sprints 06 e 07 concluídos;
- operação real reconfirmada;
- taxas e resultados comerciais aprovados antes de qualquer afirmação quantitativa;
- diagrama de arquitetura validado contra os dois códigos.

## Escopo

1. Contexto e limitações do modelo anterior.
2. Decisão de migração.
3. Diferença entre regras do produto e recursos do gateway.
4. Diagrama dos dois produtos e conta compartilhada.
5. Autenticação e isolamento dos webhooks.
6. Idempotência e eventos repetidos.
7. Upgrade, downgrade e proração.
8. Inadimplência, suspensão e reativação.
9. NFS-e após pagamento confirmado.
10. Alertas para chave, fila e falha fiscal.
11. Transferência de aprendizado ABAplay → LuminiPsi.
12. Resultado e lições.

## Cena principal

Uma seção fixada no desktop mostra:

```text
produto → assinatura → cobrança → pagamento → webhook → acesso/NFS-e
```

O visitante pode alternar ABAplay e LuminiPsi e observar que cada webhook consulta apenas seu banco.
No mobile, a cena vira sequência vertical controlável sem pin longo.

## Regras

- Não mostrar tokens, IDs, documentos ou dados fiscais.
- Não expor endpoints administrativos desnecessários.
- Não afirmar Pix Automático ativo sem confirmação.
- Taxas precisam de data e condição.
- Falhas devem ser explicadas como riscos tratados, não como fragilidade escondida.

## Critérios de aceite

- Cliente não técnico entende por que a integração gera valor.
- Técnico entende isolamento e idempotência.
- Diagrama tem alternativa textual.
- Movimento reduzido apresenta o fluxo estaticamente.
- A página funciona sem canvas.
- Claims quantitativos possuem fonte.
- A relação entre os dois produtos está correta.

## Testes obrigatórios

- fluxo do diagrama em desktop e mobile;
- rolagem para cima e para baixo;
- movimento reduzido;
- teclado nos controles;
- CPU reduzida;
- screenshot full-page;
- revisão de segurança de todo texto e imagem.

## Fora de escopo

- painel interativo conectado ao Asaas;
- dados em tempo real;
- código executável de cobrança;
- tutorial de integração;
- publicação de detalhes fiscais internos.
