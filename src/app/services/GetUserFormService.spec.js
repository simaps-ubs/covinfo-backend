import GetUserFormService from '../services/GetUserFormService';
import Database from '../../database';

describe('AuthentiacteUser', () => {
    const db = Database;
    let user;
    let address;
    let person;
    beforeAll(async () => {
      await db.init();
      const models = db.connection.models
      user = await models.User.create({
        name: 'Matheus',
        user_type: 'DEPENDENT',
      });
      address = await models.Address.create({
        zip_code: '12345677',
        city: 'Taguatinga',
        state: 'DF',
        street: 'QSD 34',
        house_number: '35',
        home_situation: 'Própria',
        lat: '45.2355421',
        lng: '-15.321256',
      });
      person = await models.Person.create({
        user_id: user.id,
        user_auto_id: null,
        document_number: '6581445478',
        birth_date: '1995-09-05',
        nationality: 'Brasil',
        birth_city: 'São Paulo',
        birth_state: 'São Paulo',
        sex: 'M',
        breed: 'Pardo',
        mother_name: 'Mônica Rocha',
        father_name: 'Raimundo Dias',
        address_id: address.id,
      })
    });
  
    it('should be able to get user', async () => {
      const getUserFormService = new GetUserFormService();
      const form = {'user_id': user.id};
      const userForm = await getUserFormService.execute(form);
      expect(userForm).not.toBe(null);
    });
  

    it('should not be able to get user', async () => {
      const getUserFormService = new GetUserFormService();
      const form = {'user_id': -1};
      const userForm = await getUserFormService.execute(form);
      expect(userForm).toBe(null);
    });

    afterAll(async () => {
      await user.destroy()
      await address.destroy()
      await person.destroy();
      await db.sequelize.close()
    })
});