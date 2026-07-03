// Conteúdo do portfólio em pt-BR e en.
// Todos os números citados foram verificados no código-fonte dos projetos em julho/2026.

export const translations = {
    'pt-BR': {
        nav: {
            cases: 'Casos',
            machine: 'Máquina de vendas',
            method: 'Como trabalho',
            journey: 'Trajetória',
            contact: 'Contato',
            resume: 'Currículo'
        },

        hero: {
            status: 'abaplay.app.br — em produção · 4 clínicas pagantes · 300+ pacientes',
            title1: 'Software que empresas',
            title2: 'pagam para usar.',
            description: 'Sou Gabriel Gomes, engenheiro de produto full-stack. Construo, lanço e opero sistemas SaaS de ponta a ponta — do esquema do banco de dados ao funil de vendas.',
            cta1: 'Ver os dois casos',
            cta2: 'Baixar currículo',
            metrics: [
                { value: '300+', label: 'pacientes na plataforma' },
                { value: '4', label: 'clínicas pagantes' },
                { value: '2', label: 'produtos SaaS completos' },
                { value: '9', label: 'anos liderando operações' }
            ],
            footnote: 'Números verificados no código-fonte e em produção — julho/2026.'
        },

        cases: {
            eyebrow: 'estudos de caso',
            title: 'Dois produtos, duas provas diferentes.',
            intro: 'O primeiro prova que eu entrego valor que o mercado paga. O segundo prova que minha engenharia evolui rápido.',

            abaplay: {
                caseLabel: 'caso 01',
                name: 'ABAplay',
                statusType: 'live',
                statusLine: 'abaplay.app.br · em produção desde 2025',
                tagline: 'Plataforma de gestão clínica para terapia infantil — construída, vendida e operada por uma pessoa.',
                sections: [
                    {
                        title: 'O problema',
                        text: 'Clínicas de terapia infantil (ABA, fonoaudiologia, TO, psicologia) registram sessões em papel e planilha. Terapeutas perdem horas com relatórios, pais não enxergam o progresso dos filhos e o dado clínico que deveria guiar decisões fica espalhado. Conheci essa dor no dia a dia de clínicas reais — e construí a resposta.'
                    },
                    {
                        title: 'O que eu construí',
                        text: 'Um SaaS multi-tenant completo: registro de sessões com níveis de prompting ABA, agenda com recorrência e cobertura de ausências, chat terapeuta-pais em tempo real, planos terapêuticos com assinatura digital e versionamento imutável, rastreios clínicos com comparação longitudinal, prontuário digital e um assistente de IA multi-agente para insights clínicos e operacionais.'
                    },
                    {
                        title: 'Resultado',
                        text: 'Quatro clínicas pagam assinatura mensal. Mais de 300 pacientes têm o acompanhamento clínico registrado na plataforma. O sistema opera continuamente desde 2025 — e sou eu quem responde quando algo quebra.'
                    }
                ],
                screenshots: [
                    { file: '/projects/registro-sessao.webp', caption: 'registro de sessão · níveis de prompting ABA' },
                    { file: '/projects/psicologia-graficos.webp', caption: 'progresso por programa · linha de base e meta' },
                    { file: '/projects/portal-pais.webp', caption: 'portal dos pais · chat em tempo real' }
                ],
                decisionsTitle: 'Decisões de engenharia que eu defendo',
                decisions: [
                    'Isolamento multi-tenant por clínica em toda query — nenhum dado cruza a fronteira entre clientes.',
                    'SQL parametrizado sem ORM: controle total sobre performance e 248 migrations versionadas.',
                    'IA com freios: orquestrador roteia para 4 agentes especializados, com limite de uso por clínica e trilha de auditoria LGPD.',
                    'Upload direto navegador → Cloudflare R2 com URLs pré-assinadas: o servidor nunca toca o arquivo.',
                    'Cinco background jobs cuidam do que humanos esquecem: sessões sem registro, trials expirando, faturamento, detecção de mestria clínica.'
                ],
                metrics: [
                    { value: '180 mil', label: 'linhas de código' },
                    { value: '484', label: 'commits em 13 meses' },
                    { value: '248', label: 'migrations versionadas' },
                    { value: '24/7', label: 'operação contínua' }
                ],
                stack: ['React 18', 'Node.js', 'Express', 'PostgreSQL', 'Socket.IO', 'OpenAI', 'Cloudflare R2'],
                linkLabel: 'Conhecer o produto',
                link: 'https://abaplay.app.br/info'
            },

            luminipsi: {
                caseLabel: 'caso 02',
                name: 'LuminiPsi',
                statusType: 'signal',
                statusLine: 'pré-lançamento · QA final',
                tagline: 'Gestão clínica para psicólogos — o segundo produto, com a engenharia que aprendi construindo o primeiro.',
                sections: [
                    {
                        title: 'O problema',
                        text: 'Psicólogos brasileiros precisam manter prontuário conforme as resoluções do CFP e a LGPD — sigilo, retenção, trilha de auditoria — mas as ferramentas do mercado tratam isso como detalhe. O LuminiPsi nasce com a conformidade no centro: registros restritos protegidos por PIN, auditoria de toda ação sensível e descarte de dados automatizado.'
                    },
                    {
                        title: 'A prova de evolução',
                        text: 'Mais do que um produto novo, o LuminiPsi é a medida do quanto minha engenharia amadureceu em um ano. Cada fraqueza do primeiro projeto virou decisão deliberada no segundo:'
                    }
                ],
                evolution: [
                    { from: 'JavaScript', to: 'TypeScript de ponta a ponta, em monorepo' },
                    { from: 'SQL manual', to: 'Prisma com migrations versionadas' },
                    { from: 'Validação caso a caso', to: 'Zod em toda entrada da API' },
                    { from: 'Testes pontuais', to: 'Pirâmide completa: unitários, integração (isolamento de tenant, RBAC, quotas) e e2e com Playwright' },
                    { from: 'Cobrança manual', to: 'Stripe com webhook idempotente, 4 planos e add-ons' }
                ],
                cfpTitle: 'Saber quando não usar IA',
                cfpText: 'O LuminiPsi tinha uma assistente de IA. Eu a removi. Conteúdo clínico de psicologia exige um sigilo que o Código de Ética do CFP não permite terceirizar a um modelo — então toda automação clínica do produto é determinística e auditável. Usar IA é fácil; saber onde ela não deve entrar é o que protege o cliente.',
                metrics: [
                    { value: '64 mil', label: 'linhas de TypeScript' },
                    { value: '24', label: 'módulos de API' },
                    { value: '8', label: 'papéis de acesso (RBAC)' },
                    { value: '3', label: 'camadas de teste' }
                ],
                stack: ['TypeScript', 'React 19', 'Express', 'Prisma 6', 'PostgreSQL', 'Stripe', 'Playwright'],
                linkLabel: null,
                link: null
            }
        },

        machine: {
            eyebrow: 'casa de máquinas',
            title: 'Produto não se vende sozinho. Então eu construí a máquina de vendas também.',
            intro: 'Quando o ABAplay ficou pronto, tratei a aquisição de clientes como mais um problema de engenharia. O resultado é um pipeline completo de prospecção B2B — três sistemas que trabalham em sequência.',
            steps: [
                {
                    name: 'Descobrir',
                    tool: 'Lead Finder',
                    description: 'Varre o Google Maps com Playwright e classifica clínicas com LLM local via Ollama. Milhares de leads mapeados, estado por estado, sem custo de API.',
                    facts: ['Playwright', 'Ollama', 'Streamlit']
                },
                {
                    name: 'Qualificar',
                    tool: 'OperadoraHunter',
                    description: 'Cruza dados públicos (ANS, CNES) com enriquecimento de sites e classificação por LLM. Cada lead sai com score de 0 a 100 e estratégia de abordagem recomendada.',
                    facts: ['Dados públicos ANS/CNES', 'Score 0–100', 'Python']
                },
                {
                    name: 'Converter',
                    tool: 'Outreach Automation',
                    description: 'WhatsApp oficial (Meta Cloud API) e e-mail em drip de 4 etapas, com 5 agentes LLM especializados — informação, qualificação, exploração, objeção e conversão. 178 testes unitários, rodando em VPS própria.',
                    facts: ['Meta Cloud API', '5 agentes LLM', '178 testes']
                }
            ],
            conclusion: 'As clínicas que pagam pelo ABAplay hoje entraram por esse funil. É isso que eu chamo de entender o negócio de ponta a ponta.'
        },

        method: {
            eyebrow: 'como eu trabalho',
            title: 'IA é a alavanca. A responsabilidade é minha.',
            intro: 'Desenvolvo com IA desde o primeiro dia e não escondo isso — é exatamente a habilidade que multiplica a produtividade de um time hoje. O que a IA não faz por mim:',
            principles: [
                {
                    title: 'Arquitetura e decisões são minhas',
                    text: 'Isolamento de tenant, política de migrations, modelo de permissões, estratégia de billing: cada decisão estrutural dos meus sistemas tem um porquê que eu sei defender — e venho defendendo há mais de um ano com clientes em produção.'
                },
                {
                    title: 'Operar é diferente de gerar',
                    text: 'Código gerado não atende cliente. Eu faço deploy, monitoro, respondo incidente, migro banco com dado real e dou suporte a quem paga. É o que separa um produto de um protótipo.'
                },
                {
                    title: 'Saber onde a IA não entra',
                    text: 'Removi a IA do conteúdo clínico do LuminiPsi por ética profissional e LGPD. Julgamento sobre limites vale mais do que entusiasmo com ferramenta.'
                },
                {
                    title: 'Negócio primeiro',
                    text: 'Nove anos como diretor administrativo me ensinaram a perguntar "quem paga por isso e por quê" antes de "qual framework usar". Construo o que resolve problema — e provo com clientes, não com promessas.'
                }
            ]
        },

        journey: {
            eyebrow: 'trajetória',
            title: 'Cheguei ao código com uma década de empresa nas costas.',
            intro: 'Comecei a programar depois dos 40, e isso é um ativo: quando escrevo software, sei como a empresa que vai usá-lo funciona por dentro — operação, orçamento, gente. Hoje curso Engenharia de Software e tenho dois produtos no mercado.',
            timeline: [
                {
                    period: '2015 — 2024',
                    role: 'Diretor Administrativo',
                    org: 'Hope Construtora',
                    text: 'Nove anos à frente de operações, equipes multidisciplinares, fornecedores e planejamento. Onde aprendi a transformar processo caótico em sistema.'
                },
                {
                    period: '2023 — hoje',
                    role: 'Fundador & Engenheiro',
                    org: 'ABAplay',
                    text: 'Do zero à produção: produto, código, infraestrutura, vendas e suporte. Quatro clínicas pagantes e mais de 300 pacientes na plataforma.'
                },
                {
                    period: '2024',
                    role: 'Prompt Engineer',
                    org: 'Alignerr · Outlier',
                    text: 'Avaliação e otimização de LLMs em escala: qualidade de resposta, edge cases, datasets de treinamento. Formação prática em como esses modelos funcionam — e falham.'
                },
                {
                    period: '2026 — hoje',
                    role: 'Fundador & Engenheiro',
                    org: 'LuminiPsi',
                    text: 'Segundo produto SaaS, construído em TypeScript com pirâmide de testes completa. Em fase final de QA para lançamento.'
                },
                {
                    period: 'em andamento',
                    role: 'Bacharelado em Engenharia de Software',
                    org: 'Universidade Cruzeiro do Sul',
                    text: 'Segundo ano. A teoria chegando depois da prática — na ordem que funcionou para mim.'
                }
            ],
            stackTitle: 'Com o que eu trabalho',
            stack: [
                { group: 'Linguagens', items: 'TypeScript · JavaScript · Python · SQL' },
                { group: 'Frontend', items: 'React 18/19 · Vite · Tailwind CSS · PWA' },
                { group: 'Backend', items: 'Node.js · Express · Prisma · PostgreSQL · Socket.IO · Stripe' },
                { group: 'IA & LLMs', items: 'OpenAI · Anthropic · Ollama · sistemas multi-agente · prompt engineering' },
                { group: 'Infra & Testes', items: 'Render · VPS (Nginx) · Cloudflare R2 · Jest · Playwright' }
            ]
        },

        others: {
            eyebrow: 'laboratório',
            title: 'Onde eu testo ideias',
            intro: 'Projetos menores, construídos para explorar ferramentas e validar conceitos.',
            projects: [
                {
                    name: 'Finanças IA',
                    description: 'Registro de gastos por conversa natural — GPT-4o interpreta e categoriza cada transação.',
                    tech: 'Next.js 15 · Supabase · OpenAI',
                    link: 'https://github.com/GabrielGomesDevBr/financas_ia'
                },
                {
                    name: 'PsicoIA Pro',
                    description: '17 tipos de relatórios profissionais para psicólogos, com geração guiada e exportação DOCX.',
                    tech: 'React · Node.js · OpenAI',
                    link: 'https://github.com/GabrielGomesDevBr/gerador-relatorio'
                },
                {
                    name: 'Mural de Bicos',
                    description: 'Marketplace que conecta autônomos a contratantes, com contato direto via WhatsApp.',
                    tech: 'React · Supabase',
                    link: 'https://github.com/GabrielGomesDevBr/mural_de_bicos'
                },
                {
                    name: 'Interface LLM Local',
                    description: 'Chat com LLMs locais via Ollama: streaming, histórico e upload de documentos para contexto.',
                    tech: 'Python · Streamlit · Ollama',
                    link: 'https://github.com/GabrielGomesDevBr/interface_llm_local'
                },
                {
                    name: 'Prompt Agent',
                    description: 'Assistente de engenharia de prompt com fallback inteligente entre API e base local.',
                    tech: 'Python · LangChain · SQLite',
                    link: 'https://github.com/GabrielGomesDevBr/prompt_agent'
                },
                {
                    name: 'CliniAgenda',
                    description: 'Sistema de agendamento com foco em segurança: JWT, rate limiting, prepared statements.',
                    tech: 'Node.js · PostgreSQL · JWT',
                    link: 'https://github.com/GabrielGomesDevBr/agendamento'
                }
            ],
            viewCode: 'Ver código'
        },

        contact: {
            eyebrow: 'contato',
            title: 'Vamos direto ao ponto.',
            text: 'Procuro oportunidades como engenheiro de produto ou full-stack em times que valorizem autonomia e visão de negócio. São Paulo ou remoto. Respondo em até 24 horas.',
            whatsapp: 'Chamar no WhatsApp',
            whatsappMessage: 'Olá Gabriel! Vi seu portfólio e gostaria de conversar.',
            downloadCV: 'Baixar currículo (PDF)',
            links: {
                email: 'gabrielgomesdevbr@gmail.com',
                linkedin: 'linkedin.com/in/gabrielgomesdevbr',
                github: 'github.com/GabrielGomesDevBr'
            },
            location: 'São Paulo, SP · disponível para remoto'
        },

        footer: {
            role: 'Engenheiro de Produto Full-Stack',
            rights: 'Todos os direitos reservados.',
            madeWith: 'Feito com React + Tailwind — e sim, com IA.'
        }
    },

    'en': {
        nav: {
            cases: 'Case studies',
            machine: 'Sales machine',
            method: 'How I work',
            journey: 'Journey',
            contact: 'Contact',
            resume: 'Resume'
        },

        hero: {
            status: 'abaplay.app.br — in production · 4 paying clinics · 300+ patients',
            title1: 'Software that companies',
            title2: 'pay to use.',
            description: "I'm Gabriel Gomes, a full-stack product engineer. I build, launch, and operate SaaS systems end to end — from the database schema to the sales funnel.",
            cta1: 'See both case studies',
            cta2: 'Download resume',
            metrics: [
                { value: '300+', label: 'patients on the platform' },
                { value: '4', label: 'paying clinics' },
                { value: '2', label: 'complete SaaS products' },
                { value: '9', label: 'years leading operations' }
            ],
            footnote: 'Numbers verified in source code and production — July 2026.'
        },

        cases: {
            eyebrow: 'case studies',
            title: 'Two products, two different proofs.',
            intro: 'The first proves I deliver value the market pays for. The second proves my engineering evolves fast.',

            abaplay: {
                caseLabel: 'case 01',
                name: 'ABAplay',
                statusType: 'live',
                statusLine: 'abaplay.app.br · in production since 2025',
                tagline: 'Clinical management platform for pediatric therapy — built, sold, and operated by one person.',
                sections: [
                    {
                        title: 'The problem',
                        text: 'Pediatric therapy clinics (ABA, speech, OT, psychology) track sessions on paper and spreadsheets. Therapists lose hours on reports, parents can\'t see their children\'s progress, and the clinical data that should drive decisions is scattered. I saw this pain up close in real clinics — and built the answer.'
                    },
                    {
                        title: 'What I built',
                        text: 'A complete multi-tenant SaaS: session recording with ABA prompting levels, scheduling with recurrence and absence coverage, real-time therapist-parent chat, treatment plans with digital signature and immutable versioning, clinical screenings with longitudinal comparison, digital records, and a multi-agent AI assistant for clinical and operational insights.'
                    },
                    {
                        title: 'The result',
                        text: 'Four clinics pay a monthly subscription. More than 300 patients have their clinical follow-up recorded on the platform. The system has run continuously since 2025 — and I\'m the one who answers when something breaks.'
                    }
                ],
                screenshots: [
                    { file: '/projects/registro-sessao.webp', caption: 'session recording · ABA prompting levels' },
                    { file: '/projects/psicologia-graficos.webp', caption: 'per-program progress · baseline and target' },
                    { file: '/projects/portal-pais.webp', caption: 'parent portal · real-time chat' }
                ],
                decisionsTitle: 'Engineering decisions I stand behind',
                decisions: [
                    'Multi-tenant isolation per clinic in every query — no data ever crosses the boundary between customers.',
                    'Parameterized SQL without an ORM: full control over performance and 248 versioned migrations.',
                    'AI with guardrails: an orchestrator routes to 4 specialized agents, with per-clinic usage limits and an LGPD audit trail.',
                    'Direct browser → Cloudflare R2 uploads with presigned URLs: the server never touches the file.',
                    'Five background jobs handle what humans forget: unrecorded sessions, expiring trials, billing, clinical mastery detection.'
                ],
                metrics: [
                    { value: '180K', label: 'lines of code' },
                    { value: '484', label: 'commits in 13 months' },
                    { value: '248', label: 'versioned migrations' },
                    { value: '24/7', label: 'continuous operation' }
                ],
                stack: ['React 18', 'Node.js', 'Express', 'PostgreSQL', 'Socket.IO', 'OpenAI', 'Cloudflare R2'],
                linkLabel: 'See the product',
                link: 'https://abaplay.app.br/info'
            },

            luminipsi: {
                caseLabel: 'case 02',
                name: 'LuminiPsi',
                statusType: 'signal',
                statusLine: 'pre-launch · final QA',
                tagline: 'Clinical management for psychologists — the second product, with the engineering I learned building the first.',
                sections: [
                    {
                        title: 'The problem',
                        text: 'Brazilian psychologists must keep records compliant with federal council (CFP) resolutions and the LGPD privacy law — confidentiality, retention, audit trails — but market tools treat that as an afterthought. LuminiPsi puts compliance at the center: PIN-protected restricted records, auditing of every sensitive action, and automated data disposal.'
                    },
                    {
                        title: 'Proof of growth',
                        text: 'More than a new product, LuminiPsi measures how much my engineering matured in one year. Every weakness of the first project became a deliberate decision in the second:'
                    }
                ],
                evolution: [
                    { from: 'JavaScript', to: 'End-to-end TypeScript in a monorepo' },
                    { from: 'Hand-written SQL', to: 'Prisma with versioned migrations' },
                    { from: 'Ad-hoc validation', to: 'Zod on every API input' },
                    { from: 'Scattered tests', to: 'Full pyramid: unit, integration (tenant isolation, RBAC, quotas), and e2e with Playwright' },
                    { from: 'Manual billing', to: 'Stripe with idempotent webhooks, 4 plans, and add-ons' }
                ],
                cfpTitle: 'Knowing when not to use AI',
                cfpText: 'LuminiPsi had an AI assistant. I removed it. Clinical psychology content demands a confidentiality that the profession\'s code of ethics doesn\'t allow outsourcing to a model — so all clinical automation in the product is deterministic and auditable. Using AI is easy; knowing where it must not go is what protects the customer.',
                metrics: [
                    { value: '64K', label: 'lines of TypeScript' },
                    { value: '24', label: 'API modules' },
                    { value: '8', label: 'access roles (RBAC)' },
                    { value: '3', label: 'layers of testing' }
                ],
                stack: ['TypeScript', 'React 19', 'Express', 'Prisma 6', 'PostgreSQL', 'Stripe', 'Playwright'],
                linkLabel: null,
                link: null
            }
        },

        machine: {
            eyebrow: 'engine room',
            title: "A product doesn't sell itself. So I built the sales machine too.",
            intro: 'When ABAplay was ready, I treated customer acquisition as one more engineering problem. The result is a complete B2B prospecting pipeline — three systems working in sequence.',
            steps: [
                {
                    name: 'Discover',
                    tool: 'Lead Finder',
                    description: 'Crawls Google Maps with Playwright and classifies clinics with a local LLM via Ollama. Thousands of leads mapped, state by state, with zero API cost.',
                    facts: ['Playwright', 'Ollama', 'Streamlit']
                },
                {
                    name: 'Qualify',
                    tool: 'OperadoraHunter',
                    description: 'Cross-references public health datasets (ANS, CNES) with website enrichment and LLM classification. Every lead comes out with a 0–100 score and a recommended approach strategy.',
                    facts: ['Public ANS/CNES data', '0–100 scoring', 'Python']
                },
                {
                    name: 'Convert',
                    tool: 'Outreach Automation',
                    description: 'Official WhatsApp (Meta Cloud API) and a 4-step email drip, with 5 specialized LLM agents — information, qualification, exploration, objection, and conversion. 178 unit tests, running on my own VPS.',
                    facts: ['Meta Cloud API', '5 LLM agents', '178 tests']
                }
            ],
            conclusion: "The clinics paying for ABAplay today came through this funnel. That's what I call understanding the business end to end."
        },

        method: {
            eyebrow: 'how I work',
            title: 'AI is the lever. The responsibility is mine.',
            intro: "I've built with AI from day one and I don't hide it — it's exactly the skill that multiplies a team's output today. What AI doesn't do for me:",
            principles: [
                {
                    title: 'Architecture and decisions are mine',
                    text: 'Tenant isolation, migration policy, permission model, billing strategy: every structural decision in my systems has a why I can defend — and have been defending for over a year with paying customers in production.'
                },
                {
                    title: 'Operating is different from generating',
                    text: "Generated code doesn't serve customers. I deploy, monitor, respond to incidents, migrate databases with real data, and support the people who pay. That's what separates a product from a prototype."
                },
                {
                    title: 'Knowing where AI must not go',
                    text: 'I removed AI from LuminiPsi\'s clinical content for professional ethics and privacy law. Judgment about limits is worth more than enthusiasm for tools.'
                },
                {
                    title: 'Business first',
                    text: 'Nine years as an administrative director taught me to ask "who pays for this and why" before "which framework to use". I build what solves problems — and prove it with customers, not promises.'
                }
            ]
        },

        journey: {
            eyebrow: 'journey',
            title: 'I came to code with a decade of business behind me.',
            intro: "I started programming after 40, and that's an asset: when I write software, I know how the company that will use it works from the inside — operations, budget, people. Today I'm studying Software Engineering and have two products on the market.",
            timeline: [
                {
                    period: '2015 — 2024',
                    role: 'Administrative Director',
                    org: 'Hope Construtora',
                    text: 'Nine years leading operations, multidisciplinary teams, suppliers, and planning. Where I learned to turn chaotic process into system.'
                },
                {
                    period: '2023 — today',
                    role: 'Founder & Engineer',
                    org: 'ABAplay',
                    text: 'From zero to production: product, code, infrastructure, sales, and support. Four paying clinics and 300+ patients on the platform.'
                },
                {
                    period: '2024',
                    role: 'Prompt Engineer',
                    org: 'Alignerr · Outlier',
                    text: 'LLM evaluation and optimization at scale: response quality, edge cases, training datasets. Hands-on training in how these models work — and fail.'
                },
                {
                    period: '2026 — today',
                    role: 'Founder & Engineer',
                    org: 'LuminiPsi',
                    text: 'Second SaaS product, built in TypeScript with a full testing pyramid. In final QA for launch.'
                },
                {
                    period: 'in progress',
                    role: 'B.Sc. in Software Engineering',
                    org: 'Universidade Cruzeiro do Sul',
                    text: 'Second year. Theory arriving after practice — in the order that worked for me.'
                }
            ],
            stackTitle: 'What I work with',
            stack: [
                { group: 'Languages', items: 'TypeScript · JavaScript · Python · SQL' },
                { group: 'Frontend', items: 'React 18/19 · Vite · Tailwind CSS · PWA' },
                { group: 'Backend', items: 'Node.js · Express · Prisma · PostgreSQL · Socket.IO · Stripe' },
                { group: 'AI & LLMs', items: 'OpenAI · Anthropic · Ollama · multi-agent systems · prompt engineering' },
                { group: 'Infra & Testing', items: 'Render · VPS (Nginx) · Cloudflare R2 · Jest · Playwright' }
            ]
        },

        others: {
            eyebrow: 'lab',
            title: 'Where I test ideas',
            intro: 'Smaller projects, built to explore tools and validate concepts.',
            projects: [
                {
                    name: 'Finanças IA',
                    description: 'Expense tracking through natural conversation — GPT-4o interprets and categorizes each transaction.',
                    tech: 'Next.js 15 · Supabase · OpenAI',
                    link: 'https://github.com/GabrielGomesDevBr/financas_ia'
                },
                {
                    name: 'PsicoIA Pro',
                    description: '17 types of professional reports for psychologists, with guided generation and DOCX export.',
                    tech: 'React · Node.js · OpenAI',
                    link: 'https://github.com/GabrielGomesDevBr/gerador-relatorio'
                },
                {
                    name: 'Mural de Bicos',
                    description: 'Marketplace connecting freelancers to clients, with direct WhatsApp contact.',
                    tech: 'React · Supabase',
                    link: 'https://github.com/GabrielGomesDevBr/mural_de_bicos'
                },
                {
                    name: 'Local LLM Interface',
                    description: 'Chat with local LLMs via Ollama: streaming, history, and document upload for context.',
                    tech: 'Python · Streamlit · Ollama',
                    link: 'https://github.com/GabrielGomesDevBr/interface_llm_local'
                },
                {
                    name: 'Prompt Agent',
                    description: 'Prompt engineering assistant with smart fallback between API and local knowledge base.',
                    tech: 'Python · LangChain · SQLite',
                    link: 'https://github.com/GabrielGomesDevBr/prompt_agent'
                },
                {
                    name: 'CliniAgenda',
                    description: 'Scheduling system focused on security: JWT, rate limiting, prepared statements.',
                    tech: 'Node.js · PostgreSQL · JWT',
                    link: 'https://github.com/GabrielGomesDevBr/agendamento'
                }
            ],
            viewCode: 'View code'
        },

        contact: {
            eyebrow: 'contact',
            title: "Let's get to the point.",
            text: "I'm looking for product engineer or full-stack roles on teams that value autonomy and business sense. São Paulo or remote. I reply within 24 hours.",
            whatsapp: 'Message on WhatsApp',
            whatsappMessage: 'Hi Gabriel! I saw your portfolio and would like to talk.',
            downloadCV: 'Download resume (PDF)',
            links: {
                email: 'gabrielgomesdevbr@gmail.com',
                linkedin: 'linkedin.com/in/gabrielgomesdevbr',
                github: 'github.com/GabrielGomesDevBr'
            },
            location: 'São Paulo, Brazil · open to remote'
        },

        footer: {
            role: 'Full-Stack Product Engineer',
            rights: 'All rights reserved.',
            madeWith: 'Built with React + Tailwind — and yes, with AI.'
        }
    }
};
