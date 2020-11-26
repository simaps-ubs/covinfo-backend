import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import routes from './routes/index';
import AppError from './errors/AppError';

import './database';
import { errorMonitor } from 'bee-queue';

class App {
  constructor() {
    this.server = express();
    this.server.use(cors());
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
      console.log(err);
      return response.status(500).json({
        status: 'error',
        message: 'Internal server error.',
      });
    });
  }
}

export default new App().server;
