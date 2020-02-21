const options = {
  swaggerDefinition: {
    info: {
      description: 'This is a sample server for test with jest',
      title: 'Tdd test using jest',
      version: '1.0.0',
    },
    host: 'localhost:3333',
    basePath: '/',
    produces: ['application/json'],
    schemes: ['http'],
    securityDefinitions: {
      JWT: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
        description: '',
      },
    },
  },
  basedir: __dirname,
  files: ['./app/**/*.js'],
};

module.exports = options;
