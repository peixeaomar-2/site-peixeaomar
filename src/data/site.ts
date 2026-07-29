export const siteName = "Peixeaomar";

export const defaultDescription =
  "Fotografia, audiovisual, aulas, oficinas e projetos culturais no Rio de Janeiro. Processos autorais que ampliam percepção, autoria e imaginação.";

export const navigation = [
  { href: "/fotografia/", label: "Fotografia & Audiovisual" },
  { href: "/arte/", label: "Arte" },
  { href: "/aulas-e-oficinas/", label: "Aulas e oficinas" },
  { href: "/galeria/", label: "Galeria" },
  { href: "/sobre/", label: "Sobre" },
  { href: "/blog/", label: "Blog" },
  { href: "/contato/", label: "Contato" }
];

export const fourAxes = [
  {
    number: "01",
    title: "Fotografar & Filmar",
    text: "eventos / retratos / vídeo",
    tone: "copper"
  },
  {
    number: "02",
    title: "Pintar & Criar",
    text: "aquarela / colagem / autoral",
    tone: "magenta"
  },
  {
    number: "03",
    title: "Ensinar & Compartilhar",
    text: "aulas / oficinas / escolas",
    tone: "wine"
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
    navLabel: "Fotografia & Audiovisual",
    number: "01",
    eyebrow: "Imagem parada / imagem em movimento",
    title: "Fotografia e vídeo como um único olhar.",
    seoTitle: "Fotógrafa e videomaker no Rio de Janeiro | Peixeaomar",
    seoDescription:
      "Fotografia e produção audiovisual no Rio de Janeiro: eventos, retratos, ensaios e vídeos de processo, com um olhar autoral que integra imagem parada e em movimento.",
    summary:
      "Eventos, retratos, ensaios e vídeos de processo registrados com proximidade, atenção ao gesto e contexto — foto e vídeo pensados juntos, não separados.",
    image: "/images/processo-editorial.webp",
    imageAlt:
      "Mãos selecionam fotografias impressas enquanto outra pessoa trabalha com tinta azul sobre papel",
    tags: ["eventos", "retratos", "ensaios", "vídeo"],
    introduction: [
      "Não trabalho fotografia e vídeo como dois serviços separados. Uma câmera parada e uma em movimento contam a mesma história de jeitos diferentes — e um projeto costuma precisar das duas.",
      "Atendo no Rio de Janeiro pessoas, artistas, iniciativas culturais, escolas e organizações que precisam de imagens vivas, cuidadosas e prontas para circular, seja em foto, em vídeo ou nos dois formatos juntos."
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
        title: "Vídeos de processo",
        text: "Registro de oficinas, pesquisas, montagens, ensaios e bastidores com atenção ao trabalho real."
      },
      {
        title: "Conteúdo para redes",
        text: "Peças verticais, chamadas, trechos e séries curtas planejadas para circular sem perder a identidade."
      },
      {
        title: "Vídeo institucional",
        text: "Apresentação de projetos, serviços e resultados com roteiro claro, imagens próprias e edição coerente."
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
    slug: "arte",
    navLabel: "Arte",
    number: "02",
    eyebrow: "Aquarela / colagem / autoral",
    title: "Pintura e imagem como investigação pessoal.",
    seoTitle: "Aquarela e arte autoral no Rio de Janeiro | Peixeaomar",
    seoDescription:
      "Trabalhos autorais em aquarela e colagem, expostos e disponíveis para encomenda no Rio de Janeiro.",
    summary:
      "Pinturas, colagens e experimentos visuais que caminham lado a lado com a fotografia — a mesma curiosidade, outro material.",
    image: "/images/mare-em-atrito.webp",
    imageAlt:
      "Textura abstrata formada por camadas de papel, tinta, xerox e marcas em azul, magenta e cobre",
    tags: ["aquarela", "colagem", "autoral", "encomenda"],
    introduction: [
      "A pintura entra quando a fotografia não é suficiente para o que precisa ser dito — ou quando ela ajuda a fotografia a dizer mais. Aquarela, colagem e recorte fazem parte do mesmo processo de olhar.",
      "Os trabalhos circulam em exposições, encomendas pessoais e peças para projetos que precisam de uma imagem feita à mão, não fotografada."
    ],
    offers: [
      {
        title: "Séries autorais",
        text: "Trabalhos próprios em aquarela e colagem, produzidos por pesquisa e curiosidade pessoal, sem encomenda."
      },
      {
        title: "Encomendas",
        text: "Peças personalizadas em aquarela para pessoas, famílias, celebrações ou espaços, a partir de uma conversa sobre o que a imagem precisa guardar."
      },
      {
        title: "Ilustração para projetos",
        text: "Peças originais para capas, convites, identidade visual ou materiais que pedem uma imagem feita à mão."
      },
      {
        title: "Exposições e mostras",
        text: "Participação e curadoria de mostras coletivas ou individuais, presenciais ou digitais."
      }
    ],
    forWhom: [
      "pessoas que querem uma peça original e personalizada",
      "famílias que querem registrar uma memória de outro jeito",
      "marcas e projetos que precisam de uma imagem feita à mão",
      "espaços culturais organizando mostras coletivas",
      "quem já acompanha o trabalho e quer uma peça própria"
    ],
    process: [
      {
        number: "01",
        title: "Conversa",
        text: "Entendemos o que a peça precisa guardar: uma pessoa, um lugar, uma memória, uma sensação."
      },
      {
        number: "02",
        title: "Estudo",
        text: "Testes de cor, composição e formato são compartilhados antes da versão final."
      },
      {
        number: "03",
        title: "Pintura",
        text: "A execução respeita o tempo do material — aquarela não se apressa."
      },
      {
        number: "04",
        title: "Entrega",
        text: "A peça é entregue fisicamente ou digitalizada em alta resolução, conforme o uso combinado."
      }
    ],
    faq: [
      {
        question: "Você faz encomendas personalizadas?",
        answer:
          "Sim. A partir de uma conversa sobre o que a peça precisa representar, alinhamos formato, prazo e valor antes de começar."
      },
      {
        question: "Posso comprar uma obra já pronta?",
        answer:
          "Sim, dependendo da disponibilidade. Consulte a galeria ou entre em contato para saber quais peças estão disponíveis no momento."
      },
      {
        question: "Qual o prazo de uma encomenda?",
        answer:
          "Depende da complexidade e do tamanho da peça. O prazo é combinado na proposta, considerando o tempo de secagem entre camadas."
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
