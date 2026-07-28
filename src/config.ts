const read = (name: string) => import.meta.env[name]?.trim() || "";

export const publicConfig = {
  siteUrl: read("PUBLIC_SITE_URL") || "https://peixeaomar.example",
  whatsappNumber: read("PUBLIC_WHATSAPP_NUMBER"),
  contactEmail: read("PUBLIC_CONTACT_EMAIL"),
  formEndpoint: read("PUBLIC_CONTACT_FORM_ENDPOINT"),
  analyticsId: read("PUBLIC_GOOGLE_ANALYTICS_ID"),
  googleVerification: read("PUBLIC_GOOGLE_SITE_VERIFICATION"),
  alboomUrl: read("PUBLIC_ALBOOM_URL"),
  previewMode: read("PUBLIC_PREVIEW_MODE") !== "false"
};

export const whatsappHref = (message: string) =>
  publicConfig.whatsappNumber
    ? `https://wa.me/${publicConfig.whatsappNumber}?text=${encodeURIComponent(message)}`
    : "";
