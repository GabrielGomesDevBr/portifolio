# Arquitetura de conteúdo

## 1. Princípio editorial

A home responde rapidamente:

1. Quem é Gabriel?
2. Que tipo de problema ele resolve?
3. Existe prova real?
4. Como posso aprofundar?
5. Como contrato ou converso com ele?

Os cases respondem:

1. Qual era o problema?
2. Qual foi o papel de Gabriel?
3. Como produto e interface responderam?
4. Quais decisões de engenharia importaram?
5. O que aconteceu em produção?
6. O que essa experiência prova para um novo cliente?

## 2. Sitemap

```text
/
├── /work/abaplay
├── /work/luminipsi
├── /systems/asaas-billing
├── /about
├── /resume
└── /en/... (estratégia definida no sprint de i18n)
```

`/resume` pode ser uma página web imprimível e o PDF pode continuar disponível sob demanda. Não
criar página separada para cada projeto de laboratório na primeira versão.

## 3. Navegação global

Itens:

- Trabalho
- Sistemas
- Processo
- Sobre
- Contato

Ações:

- Primária: **Conversar sobre um projeto**
- Secundária: alternância PT/EN
- Terciária: currículo, acessível no menu, mas não como maior ação do header

No mobile, o menu deve ocupar uma superfície própria, manter foco preso enquanto aberto e fechar por
Escape, ação ou toque no backdrop.

## 4. Home

### 4.1 Hero

Objetivo: posicionar em até dez segundos.

Conteúdo:

- status curto de disponibilidade;
- título orientado a resultado;
- parágrafo de posicionamento;
- CTA primária para projeto;
- CTA secundária para cases;
- visual vivo representando produto → operação → receita;
- quatro provas curtas, sem sobrecarregar.

Não colocar download de currículo como uma das duas ações principais.

### 4.2 Faixa de provas

Provas recomendadas:

- dois SaaS em produção;
- mais de 300 pacientes acompanhados, após confirmação;
- clientes pagantes, após confirmação;
- nove anos liderando operações;
- cobrança e NFS-e automatizadas;
- produtos operados ponta a ponta.

Usar no máximo quatro simultaneamente. As demais podem entrar como ticker ou notas nos cases.

### 4.3 Trabalhos selecionados

Dois blocos grandes:

1. ABAplay — prova de mercado e operação.
2. LuminiPsi — prova de evolução, segurança e produto.

Cada bloco deve conter:

- uma frase de problema;
- uma frase de resultado;
- três provas;
- composição de telas;
- CTA “Explorar case”.

Os blocos não devem ter o mesmo layout espelhado. Cada produto recebe ritmo e paleta próprios.

### 4.4 Sistema em destaque

Prévia do case Asaas/NFS-e com diagrama animado dos dois produtos convergindo para a infraestrutura
financeira. Mensagem:

> A interface é só a camada visível. Eu também construo o sistema que cobra, emite, monitora e
> recupera.

### 4.5 Capacidades

Organizar por resultados, não por tecnologias:

- **Do problema ao produto:** descoberta, arquitetura, prototipação e entrega.
- **Frontend de produto:** interfaces responsivas, fluxos complexos e design systems.
- **SaaS e integrações:** autenticação, multi-tenancy, billing, APIs e webhooks.
- **Operação real:** deploy, migrations, observabilidade, incidentes e suporte.
- **Automação responsável:** IA, jobs e processos determinísticos com julgamento humano.

Tecnologias aparecem como detalhe expandível.

### 4.6 Processo

Fluxo curto:

```text
Entender → Modelar → Prototipar → Construir → Operar → Aprender
```

Cada etapa deve conter uma ação concreta e um artefato. Não usar promessas vagas.

### 4.7 Sobre

Resumo de três parágrafos:

- trajetória administrativa;
- transição para engenharia;
- como isso afeta a forma de trabalhar.

Fotografia autoral ou retrato profissional entra aqui ou no hero, nunca como imagem genérica de
perfil solta.

### 4.8 Laboratório

Exibir até quatro projetos. Cada card explica o experimento ou aprendizado, não apenas a stack.
GitHub é secundário; o valor é a hipótese testada.

### 4.9 Conversão final

Título sugerido:

> Tem um produto para lançar ou um sistema que precisa amadurecer?

Conteúdo:

- tipos de trabalho aceitos;
- formato remoto/presencial;
- expectativa realista de resposta;
- CTA WhatsApp;
- e-mail como alternativa;
- link para currículo voltado à audiência de contratação.

## 5. Case ABAplay

### Abertura

- Nome e categoria.
- Situação em produção.
- Papel de Gabriel.
- Resultado de negócio.
- Composição visual com telas desktop e mobile.

### Narrativa

1. Clínicas operando com papel e planilhas.
2. Descoberta do problema.
3. Produto construído e vendido.
4. Fluxos críticos de interface.
5. Arquitetura multi-tenant.
6. IA com limites e auditoria.
7. Operação, clientes e suporte.
8. O que Gabriel faria diferente hoje.

### Provas visuais

- registro de sessão;
- agenda e cobertura;
- portal dos pais;
- progresso longitudinal;
- PTI/assinatura;
- painel de operação ou arquitetura, sem dados reais.

## 6. Case LuminiPsi

### Abertura

- Em produção desde julho de 2026;
- fase de validação;
- foco em psicólogos e clínicas;
- conformidade como premissa.

### Narrativa

1. Problema regulatório e operacional.
2. Segurança e sigilo.
3. Sistema de permissões e PIN.
4. Evoluções, agenda, documentos, escalas e portal.
5. Evolução técnica em relação ao primeiro produto.
6. Remoção deliberada da IA clínica.
7. CI/CD, rollback e produção.
8. Billing Asaas, planos e NFS-e.

### Provas visuais

Usar as telas já existentes como ponto de partida, mas produzir capturas em alta resolução:

- visão integrada;
- agenda;
- pacientes;
- evoluções;
- risco clínico determinístico;
- documentos;
- billing ou superadmin sem dados reais.

## 7. Case Asaas + NFS-e

### Título de trabalho

> Uma infraestrutura financeira, dois produtos, zero cruzamento de dados.

### Narrativa

1. Custo e limitações do modelo anterior.
2. Escolha do Asaas.
3. Diferenças entre preço do produto e capacidades do gateway.
4. Conta compartilhada e isolamento por aplicação.
5. Idempotência e entrega `at-least-once`.
6. Proração e cobrança futura.
7. NFS-e após confirmação.
8. Alertas para falhas silenciosas.
9. Reutilização do aprendizado ABAplay → LuminiPsi.

### Diagrama central

```text
ABAplay ── assinatura ─┐
                      ├─ Asaas ─ cobrança ─ pagamento ─ NFS-e
LuminiPsi ─ assinatura ┘

Webhook ABAplay   → resolve no banco ABAplay   → desconhecido = 200/no-op
Webhook LuminiPsi → resolve no banco LuminiPsi → desconhecido = 200/no-op
```

Não publicar detalhes fiscais sensíveis, tokens, IDs, nomes de clínicas ou números reais de nota.

## 8. Página Sobre

Conteúdo:

- retrato;
- narrativa profissional;
- princípios;
- experiência resumida;
- stack em contexto;
- formação e certificações relevantes;
- CTA para projeto e currículo.

A idade de início na programação pode aparecer como contexto, sem linguagem defensiva.

## 9. Tom de voz

- Direto, seguro e concreto.
- Primeira pessoa.
- Frases curtas em títulos.
- Linguagem de negócio antes da técnica.
- Técnica suficiente para provar profundidade, sem escrever documentação dentro da home.
- Evitar autopromoção exagerada e justificativas sobre uso de IA.

Transformação recomendada:

- De: “Uso IA e não escondo isso.”
- Para: “IA acelera a execução. Arquitetura, julgamento e responsabilidade continuam humanos.”

## 10. Estratégia bilíngue

- pt-BR é o idioma canônico.
- Inglês deve preservar intenção comercial, não traduzir literalmente expressões brasileiras.
- URLs e metadados precisam declarar alternates.
- A escolha manual deve persistir.
- O conteúdo inicial não deve depender apenas de `navigator.language`, para evitar metadados em
  português com interface renderizada em inglês.
