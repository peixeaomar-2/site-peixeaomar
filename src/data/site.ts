export const siteName = "Peixeaomar";

export const defaultDescription =
  "Fotografia, audiovisual, aulas, oficinas e projetos culturais no Rio de Janeiro. Processos autorais que ampliam percepção, autoria e imaginação.";

export const navigation = [
  { href: "/fotografia/", label: "Fotografia" },
  { href: "/audiovisual/", label: "Audiovisual" },
  { href: "/aulas-e-oficinas/", label: "Aulas e oficinas" },
  { href: "/projetos-culturais/", label: "Projetos culturais" },
  { href: "/portfolio/", label: "Portfólio" },
  { href: "/sobre/", label: "Sobre" },
  { href: "/blog/", label: "Blog" },
  { href: "/contato/", label: "Contato" }
];

export const fourAxes = [
  {
    number: "01",
    title: "Criar",
    text: "fotografia / aquarela / audiovisual",
    tone: "copper"
  },
  {
    number: "02",
    title: "Observar",
    text: "cultura visual / cotidiano / memória",
    tone: "magenta"
  },
  {
    number: "03",
    title: "Aprender",
    text: "aulas / oficinas / experiências",
    tone: "wine"
  },
  {
    number: "04",
    title: "Investigar",
    text: "pesquisa / textos / projetos culturais",
    tone: "night"
  }
];

export type ServicePage = {
  slug: string;
  navLabel: string;
  number: string;
  eyebrow: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  summary: string;
  image: string;
  imageAlt: string;
  tags: string[];
  introduction: string[];
  offers: { title: string; text: string }[];
  forWhom: string[];
  process: { number: string; title: string; text: string }[];
  faq: { question: string; answer: string }[];
  relatedArticle: string;
};

export const services: ServicePage[] = [
  {
    slug: "fotografia",
    navLabel: "Fotografia",
    number: "01",
    eyebrow: "Imagem / presença / memória",
    title: "Fotografia que acompanha o que está vivo.",
    seoTitle: "Fotógrafa no Rio de Janeiro | Eventos, retratos e cultura",
    seoDescription:
      "Fotografia de eventos, retratos, ensaios e projetos culturais no Rio de Janeiro, com escuta, presença e uma linguagem visual autoral.",
    summary:
      "Eventos, retratos, ensaios e processos culturais registrados com proximidade, atenção ao gesto e contexto.",
    image: "/images/processo-editorial.webp",
    imageAlt:
      "Mãos selecionam fotografias impressas enquanto outra pessoa trabalha com tinta azul sobre papel",
    tags: ["eventos", "retratos", "ensaios", "cultura"],
    introduction: [
      "Uma boa cobertura não transforma tudo em pose. Ela percebe relações, detalhes, ritmos e gestos que contam o que aconteceu sem apagar a atmosfera do encontro.",
      "A Peixeaomar realiza fotografia no Rio de Janeiro para pessoas, artistas, iniciativas culturais, escolas e organizações que precisam de imagens vivas, cuidadosas e úteis para circular."
    ],
    offers: [
      {
        title: "Eventos e encontros",
        text: "Cobertura de lançamentos, apresentações, celebrações, seminários e atividades culturais, com imagens de contexto e detalhes."
      },
      {
        title: "Retratos e ensaios",
        text: "Retratos profissionais, ensaios pessoais e imagens para portfólios que preservam presença e singularidade."
      },
      {
        title: "Projetos culturais",
        text: "Registro de processos, oficinas, espetáculos, exposições e ações educativas para memória, divulgação e prestação de contas."
      },
      {
        title: "Fotografia institucional",
        text: "Imagens para sites, relatórios, campanhas e redes sociais, construídas a partir da linguagem e do cotidiano de cada projeto."
      }
    ],
    forWhom: [
      "artistas e profissionais independentes",
      "escolas e projetos educativos",
      "instituições e produtoras culturais",
      "famílias, casais e pessoas que querem registrar uma fase",
      "equipes que precisam renovar seu acervo de imagens"
    ],
    process: [
      {
        number: "01",
        title: "Escuta",
        text: "Alinhamos intenção, público, usos das imagens, data, local e o que não pode faltar."
      },
      {
        number: "02",
        title: "Proposta",
        text: "Você recebe escopo, prazo, formato de entrega e investimento organizados por escrito."
      },
      {
        number: "03",
        title: "Realização",
        text: "A fotografia acompanha o ritmo real da situação, com direção apenas quando ela ajuda."
      },
      {
        number: "04",
        title: "Entrega",
        text: "As imagens são tratadas e entregues em galeria digital; a área de clientes poderá ser integrada ao Alboom."
      }
    ],
    faq: [
      {
        question: "Você atende fora do Rio de Janeiro?",
        answer:
          "Sim, dependendo da data e do projeto. Deslocamento e eventuais custos de viagem entram de forma transparente na proposta."
      },
      {
        question: "Quantas fotos são entregues?",
        answer:
          "A quantidade depende da duração e do tipo de trabalho. A proposta informa uma estimativa e explica o critério de seleção."
      },
      {
        question: "As imagens podem ser usadas em divulgação?",
        answer:
          "Os usos são combinados antes do trabalho. A licença pode incluir site, redes sociais, imprensa e materiais do projeto, conforme a necessidade."
      }
    ],
    relatedArticle: "quanto-custa-fotografia-evento-rio"
  },
  {
    slug: "audiovisual",
    navLabel: "Audiovisual",
    number: "02",
    eyebrow: "Movimento / som / narrativa",
    title: "Vídeo com intenção, do registro à montagem.",
    seoTitle: "Produção audiovisual no Rio de Janeiro | Peixeaomar",
    seoDescription:
      "Captação e edição de vídeos para artistas, projetos culturais, educação e conteúdo institucional no Rio de Janeiro.",
    summary:
      "Captação, edição e peças curtas para apresentar ideias, registrar processos e fazer projetos circularem.",
    image: "/images/processo-editorial.webp",
    imageAlt:
      "Processo manual de edição de imagens sobre uma mesa de trabalho com fotografias e tinta",
    tags: ["captação", "edição", "entrevistas", "conteúdo"],
    introduction: [
      "O audiovisual pode registrar uma experiência, explicar uma proposta ou aproximar uma pessoa de um trabalho. Antes da câmera, é preciso entender qual história precisa existir e onde ela vai circular.",
      "A Peixeaomar desenvolve soluções audiovisuais leves e proporcionais ao projeto, da captação à edição, para iniciativas culturais, educativas, autorais e institucionais."
    ],
    offers: [
      {
        title: "Vídeos de processo",
        text: "Registro de oficinas, pesquisas, montagens, ensaios e bastidores com atenção ao trabalho real."
      },
      {
        title: "Entrevistas e depoimentos",
        text: "Captação e edição de falas com contexto, ritmo e recursos visuais que ajudam a leitura."
      },
      {
        title: "Conteúdo para redes",
        text: "Peças verticais, chamadas, trechos e séries curtas planejadas para circular sem perder a identidade."
      },
      {
        title: "Vídeo institucional",
        text: "Apresentação de projetos, serviços e resultados com roteiro claro, imagens próprias e edição coerente."
      }
    ],
    forWhom: [
      "artistas, educadores e pesquisadores",
      "organizações e espaços culturais",
      "escolas, cursos e projetos formativos",
      "pequenos negócios de base criativa",
      "equipes que já têm material e precisam de edição"
    ],
    process: [
      {
        number: "01",
        title: "Recorte",
        text: "Definimos público, objetivo, duração, formato e canais antes de escolher equipamentos."
      },
      {
        number: "02",
        title: "Plano",
        text: "Organizamos roteiro, perguntas, cenas essenciais, agenda e autorizações de imagem."
      },
      {
        number: "03",
        title: "Captação",
        text: "A gravação combina estrutura e abertura para o que o processo revela."
      },
      {
        number: "04",
        title: "Montagem",
        text: "A edição organiza ritmo, som, textos e versões de entrega conforme os usos combinados."
      }
    ],
    faq: [
      {
        question: "Você faz somente a edição?",
        answer:
          "Sim. É possível trabalhar com material já gravado, desde que a qualidade e os direitos de uso sejam avaliados antes."
      },
      {
        question: "O mesmo vídeo serve para site e redes sociais?",
        answer:
          "Nem sempre. Podemos planejar uma peça principal e versões curtas, verticais ou legendadas para cada canal."
      },
      {
        question: "Você inclui legendas?",
        answer:
          "As legendas podem fazer parte do escopo. Elas melhoram a acessibilidade e também ajudam quem assiste sem som."
      }
    ],
    relatedArticle: "briefing-visual-sem-engessar"
  },
  {
    slug: "aulas-e-oficinas",
    navLabel: "Aulas e oficinas",
    number: "03",
    eyebrow: "Aprender / experimentar / refazer",
    title: "Experiências para fazer ver de novo.",
    seoTitle: "Aulas de aquarela e oficinas de fotografia no Rio",
    seoDescription:
      "Aulas de aquarela e oficinas de fotografia, arte e cultura visual para pessoas, grupos, escolas e instituições no Rio de Janeiro.",
    summary:
      "Aulas de aquarela e oficinas de fotografia e cultura visual para pessoas, grupos, escolas e instituições.",
    image: "/images/oficina-editorial.webp",
    imageAlt:
      "Crianças trabalham juntas com pincéis, papéis, tesouras e tinta azul em uma oficina de arte",
    tags: ["aquarela", "fotografia", "escolas", "grupos"],
    introduction: [
      "Aprender uma técnica também pode ser aprender a observar, escolher, errar, comparar e tentar de novo. As propostas partem da experiência de quem participa e transformam repertório em ação.",
      "Há formatos para encontros individuais, pequenos grupos, escolas, espaços culturais e equipes. O conteúdo, a duração e os materiais são ajustados ao público e ao contexto."
    ],
    offers: [
      {
        title: "Aulas de aquarela",
        text: "Percursos individuais ou em pequenos grupos para iniciantes e pessoas que querem desenvolver prática e autonomia."
      },
      {
        title: "Oficinas de fotografia",
        text: "Experiências com enquadramento, luz, narrativa, cotidiano e memória, com câmera ou celular."
      },
      {
        title: "Cultura visual",
        text: "Atividades para ler imagens, questionar referências e perceber como fotografias e vídeos produzem sentido."
      },
      {
        title: "Propostas para escolas",
        text: "Oficinas e percursos construídos com educadores a partir da faixa etária, do currículo e do projeto pedagógico."
      }
    ],
    forWhom: [
      "pessoas iniciantes ou retomando uma prática",
      "crianças, adolescentes e adultos",
      "escolas e equipes pedagógicas",
      "museus, bibliotecas e espaços culturais",
      "grupos que querem uma experiência artística"
    ],
    process: [
      {
        number: "01",
        title: "Contexto",
        text: "Conversamos sobre público, repertório, acessibilidade, espaço, tempo e materiais disponíveis."
      },
      {
        number: "02",
        title: "Percurso",
        text: "A proposta organiza perguntas, referências, experimentos e momentos de partilha."
      },
      {
        number: "03",
        title: "Experiência",
        text: "A técnica aparece a serviço da curiosidade e da autoria, sem infantilizar participantes."
      },
      {
        number: "04",
        title: "Registro",
        text: "Quando faz sentido, reunimos processos e aprendizados para continuidade ou documentação."
      }
    ],
    faq: [
      {
        question: "Preciso saber desenhar para fazer aula de aquarela?",
        answer:
          "Não. O percurso pode começar por cor, água, gesto, observação e composição, sem exigir experiência anterior em desenho."
      },
      {
        question: "A oficina pode acontecer dentro de uma escola?",
        answer:
          "Sim. A proposta é adaptada ao espaço, à faixa etária, à duração disponível e aos objetivos pedagógicos."
      },
      {
        question: "Você fornece os materiais?",
        answer:
          "Isso é combinado em cada proposta. Podemos incluir um kit, trabalhar com materiais da instituição ou indicar uma lista acessível."
      }
    ],
    relatedArticle: "oficina-fotografia-na-escola"
  },
  {
    slug: "projetos-culturais",
    navLabel: "Projetos culturais",
    number: "04",
    eyebrow: "Pesquisa / articulação / memória",
    title: "Projetos que ligam arte, educação e território.",
    seoTitle: "Projetos culturais e educativos no Rio de Janeiro",
    seoDescription:
      "Concepção, pesquisa, produção de conteúdo e ações educativas para projetos culturais e instituições no Rio de Janeiro.",
    summary:
      "Concepção, pesquisa, conteúdo, ação educativa e registro para iniciativas que cruzam arte, cultura e educação.",
    image: "/images/oficina-editorial.webp",
    imageAlt:
      "Mãos de participantes criam uma composição coletiva com papéis, tinta e materiais de oficina",
    tags: ["concepção", "pesquisa", "educação", "memória"],
    introduction: [
      "Projetos culturais pedem visão do conjunto e atenção às pessoas, aos prazos, aos materiais e às formas de participação. A Peixeaomar aproxima pensamento visual, educação e realização.",
      "O trabalho pode começar na concepção ou entrar em uma etapa específica: pesquisa, desenho de ação educativa, facilitação, produção de conteúdo, registro ou organização de memória."
    ],
    offers: [
      {
        title: "Concepção e pesquisa",
        text: "Definição de recorte, público, perguntas, referências, formatos e coerência entre intenção e experiência."
      },
      {
        title: "Ações educativas",
        text: "Desenho e realização de encontros, oficinas, materiais e mediações conectados ao contexto do projeto."
      },
      {
        title: "Conteúdo e memória",
        text: "Textos, imagens, entrevistas, organização de acervo e narrativas para comunicar processos e resultados."
      },
      {
        title: "Colaboração por etapa",
        text: "Apoio pontual ou continuado a equipes de produção, curadoria, comunicação e educação."
      }
    ],
    forWhom: [
      "instituições, coletivos e produtoras culturais",
      "artistas e educadores com projetos em desenvolvimento",
      "escolas, museus e espaços independentes",
      "equipes que precisam integrar conteúdo, imagem e educação",
      "iniciativas com memória dispersa ou pouco documentada"
    ],
    process: [
      {
        number: "01",
        title: "Pergunta",
        text: "Identificamos o que o projeto quer mover, para quem e em qual contexto."
      },
      {
        number: "02",
        title: "Arquitetura",
        text: "Organizamos etapas, responsabilidades, linguagem, entregas e critérios de acompanhamento."
      },
      {
        number: "03",
        title: "Ação",
        text: "Realizamos a frente combinada em diálogo com a equipe e com as condições reais."
      },
      {
        number: "04",
        title: "Memória",
        text: "Registramos decisões e resultados para que o trabalho possa circular, prestar contas e continuar."
      }
    ],
    faq: [
      {
        question: "Você entra apenas em projetos já aprovados?",
        answer:
          "Não. A colaboração pode acontecer ainda na concepção, no desenho da proposta ou em uma etapa de um projeto em andamento."
      },
      {
        question: "Você trabalha como parte de uma equipe?",
        answer:
          "Sim. O formato pode ser consultoria, prestação de serviço por etapa ou colaboração integrada com produção, educação e comunicação."
      },
      {
        question: "É possível reunir fotografia e oficina no mesmo projeto?",
        answer:
          "Sim. Essa combinação é especialmente potente quando registro, participação e memória precisam conversar desde o início."
      }
    ],
    relatedArticle: "briefing-visual-sem-engessar"
  }
];

export type BlogPost = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  category: string;
  date: string;
  dateLabel: string;
  readingTime: string;
  intro: string;
  blocks: (
    | { type: "heading"; text: string }
    | { type: "paragraph"; text: string }
    | { type: "list"; items: string[] }
    | { type: "quote"; text: string }
  )[];
};

export const posts: BlogPost[] = [
  {
    slug: "quanto-custa-fotografia-evento-rio",
    title: "Quanto custa contratar fotografia de evento no Rio de Janeiro?",
    seoTitle: "Quanto custa fotografia de evento no Rio? Guia de orçamento",
    description:
      "Entenda o que compõe um orçamento de fotografia de evento no Rio de Janeiro e como comparar propostas além do número de horas.",
    category: "Fotografia / orçamento",
    date: "2026-07-28",
    dateLabel: "28.07.2026",
    readingTime: "6 min",
    intro:
      "O valor de uma cobertura fotográfica não depende apenas do tempo em que a pessoa fotógrafa permanece no evento. Preparação, complexidade, tratamento, entrega e direitos de uso também fazem parte do trabalho.",
    blocks: [
      {
        type: "heading",
        text: "O que normalmente entra no orçamento"
      },
      {
        type: "paragraph",
        text: "Uma proposta clara separa o que acontece antes, durante e depois do evento. Isso ajuda você a comparar escopos reais, não apenas preços finais."
      },
      {
        type: "list",
        items: [
          "conversa de briefing e planejamento da cobertura",
          "quantidade de horas e necessidade de uma segunda pessoa fotógrafa",
          "deslocamento, horários especiais e características do local",
          "seleção, tratamento e quantidade estimada de imagens",
          "prazo, formato de entrega e duração da galeria",
          "licença de uso para divulgação, imprensa ou campanhas"
        ]
      },
      {
        type: "heading",
        text: "Por que dois orçamentos podem ser tão diferentes"
      },
      {
        type: "paragraph",
        text: "Cobrir uma apresentação de uma hora em um espaço iluminado é diferente de acompanhar um festival durante todo o dia, com vários ambientes, pouca luz e entrega urgente. Experiência, equipamento, segurança de arquivos e qualidade do tratamento também interferem."
      },
      {
        type: "quote",
        text: "A pergunta mais útil não é apenas “quantas horas?”, mas “quais imagens esse projeto precisa ter quando terminar?”"
      },
      {
        type: "heading",
        text: "Como pedir um orçamento que faça sentido"
      },
      {
        type: "paragraph",
        text: "Informe data, local, duração, tipo de público, momentos essenciais, canais de uso e prazo. Se ainda houver dúvidas, diga isso. Um bom briefing pode ser construído em conversa, sem exigir que você já saiba resolver tudo."
      }
    ]
  },
  {
    slug: "oficina-fotografia-na-escola",
    title: "Oficina de fotografia na escola: o que ela pode mobilizar?",
    seoTitle: "Oficina de fotografia para escolas | Ideias e planejamento",
    description:
      "Veja como uma oficina de fotografia pode trabalhar percepção, autoria, memória e cultura visual com crianças e adolescentes.",
    category: "Educação / fotografia",
    date: "2026-07-28",
    dateLabel: "28.07.2026",
    readingTime: "5 min",
    intro:
      "Uma oficina de fotografia não precisa começar pela técnica da câmera. Ela pode começar por uma pergunta: o que muda quando escolhemos enquadrar uma coisa e deixar outra de fora?",
    blocks: [
      {
        type: "heading",
        text: "Fotografar também é escolher"
      },
      {
        type: "paragraph",
        text: "Luz, distância, ponto de vista e sequência são decisões. Ao perceber essas escolhas, participantes deixam de tratar imagens como janelas neutras e começam a lê-las como construções."
      },
      {
        type: "heading",
        text: "Possíveis eixos de trabalho"
      },
      {
        type: "list",
        items: [
          "autorretrato e maneiras de se apresentar",
          "mapas afetivos da escola ou do território",
          "memória, arquivo e histórias de família",
          "luz, sombra, cor e detalhe no cotidiano",
          "sequência fotográfica e pequenas narrativas",
          "leitura crítica de imagens que circulam nas redes"
        ]
      },
      {
        type: "heading",
        text: "O celular pode ser suficiente"
      },
      {
        type: "paragraph",
        text: "O equipamento deve servir ao objetivo, não definir a experiência. É possível trabalhar com celulares compartilhados, câmeras simples, recortes de papel ou até exercícios sem câmera para compreender enquadramento."
      },
      {
        type: "quote",
        text: "A técnica ganha sentido quando ajuda alguém a perceber melhor, formular uma intenção e sustentar uma escolha."
      },
      {
        type: "heading",
        text: "O que combinar com a escola"
      },
      {
        type: "paragraph",
        text: "Faixa etária, número de participantes, acessibilidade, autorização de imagem, duração, espaço, materiais e relação com o projeto pedagógico precisam ser definidos antes. Isso protege a experiência sem engessá-la."
      }
    ]
  },
  {
    slug: "briefing-visual-sem-engessar",
    title: "Como criar um briefing visual sem engessar o resultado",
    seoTitle: "Briefing de fotografia e vídeo: como orientar sem engessar",
    description:
      "Um roteiro simples para construir briefing de fotografia, vídeo ou projeto visual com direção clara e espaço para descoberta.",
    category: "Processo / direção",
    date: "2026-07-28",
    dateLabel: "28.07.2026",
    readingTime: "5 min",
    intro:
      "Briefing não é uma lista de imagens prontas que outra pessoa deve imitar. É um acordo sobre intenção, contexto, usos e limites que ajuda decisões melhores durante o processo.",
    blocks: [
      {
        type: "heading",
        text: "Comece pelo que precisa acontecer"
      },
      {
        type: "paragraph",
        text: "Antes de falar em cores, lentes ou referências, formule o efeito desejado. O público precisa compreender um serviço, sentir proximidade, acompanhar um processo ou reconhecer uma atmosfera?"
      },
      {
        type: "heading",
        text: "Sete perguntas que organizam a conversa"
      },
      {
        type: "list",
        items: [
          "qual é a finalidade do material?",
          "quem precisa encontrá-lo ou compreendê-lo?",
          "onde ele será publicado?",
          "o que precisa aparecer com clareza?",
          "o que não deve acontecer?",
          "quais referências ajudam a nomear qualidades, não cópias?",
          "quais prazos, autorizações e formatos são indispensáveis?"
        ]
      },
      {
        type: "heading",
        text: "Use referências como verbos"
      },
      {
        type: "paragraph",
        text: "Em vez de pedir “uma foto igual”, descreva o que a referência faz: aproxima, fragmenta, desacelera, cria contraste, revela matéria, organiza informação. Assim, a referência orienta sem apagar a autoria."
      },
      {
        type: "quote",
        text: "Uma direção clara protege a intenção. O espaço de descoberta protege o trabalho."
      },
      {
        type: "heading",
        text: "Registre as decisões"
      },
      {
        type: "paragraph",
        text: "Depois da conversa, reúna escopo, entregas, prazos, formatos, usos e responsáveis em um documento breve. Isso evita expectativas escondidas e permite que mudanças sejam avaliadas com transparência."
      }
    ]
  }
];

export const homeFaq = [
  {
    question: "A Peixeaomar atende somente projetos culturais?",
    answer:
      "Não. A linguagem é autoral e cuidadosa, mas pode atender pessoas, escolas, organizações, artistas, celebrações e pequenos negócios de base criativa."
  },
  {
    question: "Posso contratar mais de um serviço no mesmo projeto?",
    answer:
      "Sim. Fotografia, vídeo, oficina e memória podem ser combinados quando isso fortalece a proposta e cabe no escopo."
  },
  {
    question: "Como recebo um orçamento?",
    answer:
      "Envie data, cidade, serviço, contexto e prazo. A Peixeaomar responde com perguntas de alinhamento e, depois, uma proposta organizada por escrito."
  }
];
