# Site Peixeaomar

Primeira versão do site institucional e editorial da Peixeaomar, construída em
Astro para hospedagem gratuita no Cloudflare Pages.

## O que já está incluído

- páginas de fotografia, audiovisual, aulas e oficinas e projetos culturais;
- portfólio, sobre, contato e blog;
- conteúdo inicial voltado a buscas no Rio de Janeiro;
- títulos, descrições, dados estruturados, sitemap e robots.txt;
- formulário preparado para um serviço gratuito de envio;
- integrações preparadas para WhatsApp, Alboom, Google Analytics e Search Console;
- identidade visual Maré em Atrito v2, com fontes e ativos locais;
- navegação por teclado, contraste alto e adaptação a celular.

## Antes de publicar

1. Duplique `.env.example` com o nome `.env`.
2. Preencha o domínio, WhatsApp e e-mail.
3. Escolha o serviço gratuito que receberá os formulários e informe o endpoint.
4. Troque as fotografias de direção pelas imagens autorais.
5. Revise os textos, áreas atendidas e serviços.
6. Mude `PUBLIC_PREVIEW_MODE` para `false`.

## Publicação no Cloudflare Pages

- comando de construção: `pnpm build`
- pasta de saída: `dist`
- versão recomendada do Node: 22 ou superior

As mesmas variáveis do arquivo `.env.example` devem ser cadastradas nas
configurações do projeto no Cloudflare Pages.
