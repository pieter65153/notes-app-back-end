/**
 * Client URL: http://notesapp-v1.dicodingacademy.com/
 * extends-default-eslintre: airbnb-base
 * https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
 */
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production'? 'localhost':'0.0.0.0',
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
