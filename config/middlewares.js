module.exports = [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: false,
    },
  },
  "strapi::cors", // Enable CORS
  {
    name: "strapi::cors",
    config: {
      origin: ["http://localhost:3001", ""], // Add your frontend URLs here
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      headers: ["Content-Type", "Authorization", "Origin", "Accept"],
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
