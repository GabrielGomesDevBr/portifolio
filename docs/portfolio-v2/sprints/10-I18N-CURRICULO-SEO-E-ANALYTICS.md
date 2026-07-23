# Sprint 10 — Internacionalização, currículo, SEO e analytics

## Objetivo

Tornar o conteúdo compartilhável, indexável, mensurável e consistente nos dois idiomas.

## Resultado esperado

URLs localizadas, metadados completos, currículo coerente e eventos de conversão confiáveis.

## Dependências

- conteúdo visual e textual estabilizado;
- domínio final;
- ferramenta de analytics definida;
- fonte única de conteúdo funcionando.

## Escopo

1. Definir e implementar URLs de idioma.
2. Criar alternates e `hreflang`.
3. Revisar todo o inglês editorialmente.
4. Criar metadados únicos por rota e idioma.
5. Criar imagens Open Graph.
6. Criar sitemap, robots e 404.
7. Adicionar JSON-LD apropriado.
8. Redesenhar `/resume` e PDF.
9. Carregar jsPDF apenas sob demanda, se ainda necessário.
10. Implementar analytics e eventos definidos.
11. Documentar privacidade e variáveis de ambiente.
12. Validar compartilhamento em canais relevantes.

## Regras

- pt-BR é canônico.
- Crawler com locale inglês não deve trocar conteúdo silenciosamente.
- Analytics não coleta dados pessoais.
- Conteúdo do currículo não possui cópia manual.
- Imagem social não depende de screenshot automática de conteúdo invisível.

## Critérios de aceite

- Cada rota/idioma possui URL, título, descrição e canonical corretos.
- `hreflang` é recíproco.
- Sitemap contém apenas rotas públicas.
- Currículo reflete fatos atuais.
- Download não aumenta bundle inicial.
- Eventos disparam uma vez por ação.
- Analytics ausente/bloqueado não quebra o site.
- HTML prerenderizado contém metadados finais.

## Testes obrigatórios

- alternância e persistência de idioma;
- acesso direto a URL inglesa;
- paridade dos conteúdos;
- impressão A4;
- links no PDF;
- validador de dados estruturados;
- Open Graph;
- eventos em modo debug.

## Fora de escopo

- tradução para terceiro idioma;
- dashboard próprio de analytics;
- consent manager complexo sem necessidade legal/técnica;
- CMS.
