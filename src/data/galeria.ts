// ============================================================
// GALERIA — como usar
// ============================================================
// Cada objeto abaixo é um "projeto" (um álbum). Para publicar
// fotos novas:
//
// 1. Coloque os arquivos de imagem em /public/images/galeria/
// 2. Copie um bloco de projeto abaixo e ajuste os campos
// 3. Para esconder um projeto do site sem apagar nada,
//    troque "visible: true" para "visible: false"
// 4. Para destacar um projeto na Home, use "featured: true"
//    (só os projetos visíveis e em destaque aparecem lá)
// ============================================================

export type GalleryPhoto = {
  src: string;
  alt: string;
};

export type GalleryProject = {
  slug: string;
  title: string;
  category: string;
  description: string;
  cover: string;
  coverAlt: string;
  visible: boolean;
  featured: boolean;
  photos: GalleryPhoto[];
};

export const galleryProjects: GalleryProject[] = [
  {
    slug: "processo-editorial",
    title: "Processo editorial",
    category: "Fotografia / processo",
    description:
      "Exemplo de projeto — substitua por um álbum real com suas fotografias quando quiser publicar.",
    cover: "/images/processo-editorial.webp",
    coverAlt:
      "Mãos organizam fotografias e materiais de pintura sobre uma mesa de trabalho",
    visible: true,
    featured: true,
    photos: [
      {
        src: "/images/processo-editorial.webp",
        alt: "Mãos organizam fotografias e materiais de pintura sobre uma mesa de trabalho"
      }
    ]
  },
  {
    slug: "oficina-coletiva",
    title: "Oficina coletiva",
    category: "Educação / oficina",
    description:
      "Exemplo de projeto — substitua por um álbum real com suas fotografias quando quiser publicar.",
    cover: "/images/oficina-editorial.webp",
    coverAlt:
      "Participantes trabalham em conjunto com pincéis, papéis e tinta durante uma oficina",
    visible: true,
    featured: true,
    photos: [
      {
        src: "/images/oficina-editorial.webp",
        alt: "Participantes trabalham em conjunto com pincéis, papéis e tinta durante uma oficina"
      }
    ]
  },
  {
    slug: "mare-em-atrito",
    title: "Maré em atrito",
    category: "Arte / aquarela",
    description:
      "Exemplo de projeto — substitua por um álbum real com suas obras quando quiser publicar.",
    cover: "/images/mare-em-atrito.webp",
    coverAlt: "Textura abstrata em tons de azul, magenta e cobre",
    visible: true,
    featured: false,
    photos: [
      {
        src: "/images/mare-em-atrito.webp",
        alt: "Textura abstrata em tons de azul, magenta e cobre"
      }
    ]
  }
];
