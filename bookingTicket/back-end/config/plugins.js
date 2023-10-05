module.exports = ({ env }) => ({
    email: {
      config: {
        provider: "nodemailer",
        providerOptions: {
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
            user: 'hai16112001kk@gmail.com',
            pass: 'tfnikchrjkwrvwci',
          },
          // ... any custom nodemailer options
        },
        settings: {
          defaultFrom: 'hai16112001kk@gmail.com',
          defaultReplyTo: 'hai16112001kk@gmail.com',
        },
      },
    },
    chartbrew: true,
  });