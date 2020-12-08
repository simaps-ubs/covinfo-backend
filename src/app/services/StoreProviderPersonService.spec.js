import StoreProviderPersonService from '../services/StoreProviderPersonService';
import Database from '../../database';
import AppError from '../../errors/AppError';

async function findDocumentNumber(models) {
  let document_number;
  let documentExists = true;
  while(documentExists) {
    document_number = parseInt(Math.random()*10**11).toString();
    documentExists = await models.Person.findOne({
      where: { document_number },
    });
  }
  return document_number;
}

describe('StoreProviderPersonService', () => {
    const db = Database;
    let user;
    let address;
    let person;
    let models;
    beforeAll(async () => {
        await db.init();
        models = db.connection.models
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

      let document_number = await findDocumentNumber(models);
      
      person = await models.Person.create({
        user_id: user.id,
        user_auto_id: null,
        document_number: document_number,
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
  
    it('should be able to store a provider person', async () => {
      const storeProviderPersonService = new StoreProviderPersonService();
      const document_number = await findDocumentNumber(models);
      const form = {
            "user_id": user.id,
            "document_number": document_number,
            "birth_date": "1995-09-05",
            "nationality": "Brasil",
            "birth_city": "São Paulo",
            "birth_state": "São Paulo",
            "sex": "M",
            "breed": "Pardo",
            "mother_name": "Mônica Rocha",
            "father_name": "Renato Raimundo",
            "quantity_per_home": 2,
            "phone_number": '6195486875',
            "phone_code": '61',
            "zip_code": '7555555555',
            "city": "Taguatinga",
            "street": "QSD 14",
            "house_number": "Casa 10",
            "home_situation": "Própria",
            "state": "DF",
            "comorbidities": [],
            "lat": "45.2355421",
            "lng": "-15.321256" 
        };
      const providerPerson = await storeProviderPersonService.execute(form);
    });
  

    it('should not be able to store a provider person with a repeated document number', async () => {
      const storeProviderPersonService = new StoreProviderPersonService();
      const document_number = await findDocumentNumber(models);
      const form = {
            "user_id": user.id,
            "document_number": person.document_number,
            "birth_date": "1995-09-05",
            "nationality": "Brasil",
            "birth_city": "São Paulo",
            "birth_state": "São Paulo",
            "sex": "M",
            "breed": "Pardo",
            "mother_name": "Mônica Rocha",
            "father_name": "Renato Raimundo",
            "quantity_per_home": 2,
            "phone_number": '6195486875',
            "phone_code": '61',
            "zip_code": '7555555555',
            "city": "Taguatinga",
            "street": "QSD 14",
            "house_number": "Casa 10",
            "home_situation": "Própria",
            "state": "DF",
            "comorbidities": [],
            "lat": "45.2355421",
            "lng": "-15.321256" 
        };
      try {
        const providerPerson = await storeProviderPersonService.execute(form);
      } catch (error) {
        expect(error.message).toEqual('Este documento ja foi registrado. Tente outro.');
        expect(error.statusCode).toEqual(400);
      }
    });

    afterAll(async () => {
      await user.destroy()
      await address.destroy()
      await person.destroy();
      await db.sequelize.close()
    })
});