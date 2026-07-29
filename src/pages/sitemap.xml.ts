import type { APIRoute } from "astro";
import { posts, services } from "../data/site";
import { galleryProjects } from "../data/galeria";

const staticRoutes = [
  "/",
  "/sobre/",
  "/galeria/",
  "/contato/",
  "/privacidade/",
  "/blog/"
];

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL("https://peixeaomar.example");
  const routes = [
    ...staticRoutes,
    ...services.map((service) => `/${service.slug}/`),
    ...posts.map((post) => `/blog/${post.slug}/`),
    ...galleryProjects
      .filter((project) => project.visible)
      .map((project) => `/galeria/${project.slug}/`)
  ];

  const urls = routes
    .map(
      (route) =>
        `<url><loc>${new URL(route, base).toString()}</loc><changefreq>${
          route.startsWith("/blog/") ? "monthly" : "weekly"
        }</changefreq><priority>${route === "/" ? "1.0" : "0.8"}</priority></url>`
    )
    .join("");

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" }
  });
};
