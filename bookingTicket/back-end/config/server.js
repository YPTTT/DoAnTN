module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8081),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  csp: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "example.com"],
      styleSrc: ["'self'", "example.com"],
      imgSrc: ["'self'", "data:", "res.cloudinary.com"],
      // Thêm các chỉ định khác ở đây nếu cần
    },
  },
});
