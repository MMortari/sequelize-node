module.exports = (port) => ({
  swaggerDefinition: {
    info: {
      description: 'This is the Swagger Documentation of Sequelize Node',
      title: 'Sequelize Node',
      version: '1.0.0',
    },
    host: `localhost:${port}`,
    basePath: '',
    produces: [
      "application/json",
    ],
    schemes: ['http', 'https'],
    securityDefinitions: {
      JWT: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
        description: "TESTE DESSA MERDA",
      }
    }
  },
  basedir: __dirname, //app absolute path
  files: ['../**/*.js', '../routes.js', '../documentation/models.js'] //Path to the API handle folder
});