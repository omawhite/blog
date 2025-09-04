export function getDomain() {
  const domain = process.env.RAILWAY_PUBLIC_DOMAIN || "http://localhost:3000";
  return domain;
}

export function getBaseUrl() {
  const domain = getDomain();
  return domain.startsWith("http") ? domain : `https://${domain}`;
}
