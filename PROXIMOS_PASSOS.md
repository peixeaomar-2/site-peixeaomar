# Peixeaomar — próximos passos

## A decisão inicial

O melhor ponto de partida era montar o projeto local antes de criar o
repositório no GitHub.

Isso permitiu:

- traduzir o design system para o site antes de envolver contas externas;
- validar a estrutura e o conteúdo sem mexer no domínio;
- deixar o projeto pronto para o primeiro envio ao GitHub;
- evitar publicar uma versão vazia ou genérica.

O GitHub é o próximo passo, não o primeiro.

## O que já está pronto

A primeira versão tem 14 páginas geradas:

- Início
- Fotografia
- Audiovisual
- Aulas e oficinas
- Projetos culturais
- Portfólio
- Sobre
- Blog
- três artigos completos
- Contato e orçamento
- Política de privacidade
- página de erro
- sitemap para o Google
- robots.txt

Também estão preparados:

- visual responsivo para computador e celular;
- identidade Maré em Atrito v2;
- fontes Londrina Solid, Besley, Fragment Mono e Kalam;
- paleta e regras de contraste do manual;
- títulos, descrições e dados estruturados para SEO;
- buscas locais ligadas ao Rio de Janeiro;
- formulário com validação e proteção antispam básica;
- WhatsApp, Alboom, Google Analytics e Search Console;
- imagem de compartilhamento para WhatsApp e redes sociais;
- repositório Git local na ramificação `main`.

## Informações necessárias antes da publicação

Mariana precisa confirmar:

1. domínio comprado;
2. empresa onde o domínio foi registrado;
3. número de WhatsApp profissional;
4. e-mail que receberá os pedidos;
5. link público ou área de clientes do Alboom;
6. fotografias autorais para substituir as duas imagens demonstrativas;
7. serviços prioritários e bairros ou cidades atendidos;
8. experiências, projetos e instituições que podem ser citados publicamente;
9. conta do GitHub;
10. conta gratuita do Cloudflare.

## Próxima sessão: GitHub

Depois das confirmações:

1. criar ou acessar a conta no GitHub;
2. criar um repositório vazio chamado `site-peixeaomar`;
3. manter o repositório privado nesta fase;
4. registrar o primeiro histórico do projeto;
5. enviar os arquivos já preparados;
6. conferir se a ramificação principal se chama `main`.

Não é necessário criar o site de novo no GitHub. Ele apenas guardará os
arquivos e o histórico.

## Etapa seguinte: Cloudflare Pages

No painel do Cloudflare:

1. abrir **Workers & Pages**;
2. criar uma aplicação do tipo **Pages**;
3. conectar ao GitHub;
4. autorizar apenas o repositório `site-peixeaomar`;
5. escolher a ramificação `main`;
6. informar `npm run build` como comando de construção;
7. informar `dist` como pasta de saída;
8. cadastrar as informações de contato e integrações;
9. publicar primeiro no endereço gratuito `pages.dev`;
10. revisar tudo antes de conectar o domínio.

Documentação oficial:

- https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/
- https://developers.cloudflare.com/pages/configuration/git-integration/

## Etapa final: Google e domínio

Somente depois da prévia aprovada:

1. conectar o domínio ao projeto do Cloudflare Pages;
2. escolher a versão principal com ou sem `www`;
3. criar a propriedade no Google Search Console;
4. verificar o domínio;
5. enviar `/sitemap.xml`;
6. criar ou conectar o Google Analytics;
7. testar envio de formulário e cliques no WhatsApp;
8. remover a faixa “Prévia em construção”;
9. publicar a política de privacidade final.

## Manutenção sem mensalidade

O projeto foi preparado como site estático em Astro. O Cloudflare Pages
reconstrói o site quando uma alteração é enviada ao GitHub. A hospedagem pode
permanecer no plano gratuito, enquanto o domínio continua com a renovação anual
normal.

Novas páginas, artigos, serviços e ajustes visuais podem ser acrescentados sem
trocar de plataforma.
