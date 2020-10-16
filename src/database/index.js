import Sequelize from 'sequelize';

import User from '../app/models/User';
import Login from '../app/models/Login';
import Person from '../app/models/Person';

import databaseConfig from '../config/database';

const models = [User, Login, Person];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
