const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes');
require('dotenv').config();
require('./config/Connection');

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(morgan('dev'));
    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
      res.header(
        'Access-Control-Allow-Headers',
        'Access, Content-type, Authorization, Accept, Origin, X-Requested-With'
      );
      next();
    });
  }

  routes() {
    this.app.use(routes);
  }
}

module.exports = new App().app;
