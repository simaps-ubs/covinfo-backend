import express from 'express';
import routes from './routes';
import AppError from './errors/AppError';

import './database';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.errors();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

  errors() {
    this.server.use((err, request, response, _) => {
      if (err instanceof AppError) {
        return response.status(err.statusCode).json({
          status: 'error',
          message: err.message,
        });
      }
      return response.status(500).json({
        status: 'error',
        message: 'Internal server error.',
      });
    });
  }
}

export default new App().server;
