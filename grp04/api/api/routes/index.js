const { Router } = require('express');
const senhaRouter = require('./senha.router');

module.exports = (server) => {
  server.use((req, res, next) => {
    senhaRouter(server, new Router());
    next();
  });
};
