import Sequelize from 'sequelize';

import User from '../app/models/User';
import Login from '../app/models/Login';
import Person from '../app/models/Person';
import Notification from '../app/models/Notification';
import Phone from '../app/models/Phone';
import Address from '../app/models/Address';
import PersonComorbidity from '../app/models/PersonComorbidity';
import Comorbidity from '../app/models/Comorbidity';

import databaseConfig from '../config/database';

const models = [
  User,
  Login,
  Person,
  Notification,
  Phone,
  Address,
  PersonComorbidity,
  Comorbidity,
];

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
