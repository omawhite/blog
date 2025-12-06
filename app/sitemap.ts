//TODO: Update the baseUrl to your domain name
export const baseUrl = "https://yourdomain.com"; // Replace with your actual base URL

export default function sitemap() {
  //TODO: make this accurate
  const routes = ["/", "/blog"]; // Add your routes here

  return routes.map((route) => {
    return `${baseUrl}${route}`;
  });
}
