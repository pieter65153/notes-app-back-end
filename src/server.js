/**
 * Client URL: http://notesapp-v1.dicodingacademy.com/
 * extends-default-eslintre: airbnb-base
 * public ip: 18.143.140.133
 */
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });
  server.route(routes);
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
