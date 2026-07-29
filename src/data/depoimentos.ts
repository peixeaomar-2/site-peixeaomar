// Troque pelos depoimentos reais de clientes (Google, WhatsApp, e-mail).
// Cada item precisa apenas de um texto curto, um nome e o tipo de serviço.

export type Depoimento = {
  text: string;
  author: string;
  context: string;
};

export const depoimentos: Depoimento[] = [
  {
    text: "Exemplo de depoimento — substitua pelo comentário real de um cliente sobre o trabalho de fotografia, arte ou aula.",
    author: "Nome do cliente",
    context: "Fotografia de evento"
  },
  {
    text: "Exemplo de depoimento — substitua pelo comentário real de um cliente sobre o trabalho de fotografia, arte ou aula.",
    author: "Nome do cliente",
    context: "Aula de aquarela"
  },
  {
    text: "Exemplo de depoimento — substitua pelo comentário real de um cliente sobre o trabalho de fotografia, arte ou aula.",
    author: "Nome do cliente",
    context: "Oficina em escola"
  }
];
