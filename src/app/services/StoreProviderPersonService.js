import AppError from '../../errors/AppError';
import Person from '../models/Person';
import PersonComorbidity from '../models/PersonComorbidity';
import Phone from '../models/Phone';
import Address from '../models/Address';

class StoreProviderPersonService {
  async execute(form) {
    const documentExists = await Person.findOne({
      where: { document_number: form.document_number },
    });

    if (documentExists) {
      throw new AppError('Este documento ja foi registrado. Tente outro.', 400);
    }

    const address = await Address.create({
      zip_code: form.zip_code,
      city: form.city,
      state: form.state,
      street: form.street,
      house_number: form.house_number,
      home_situation: form.home_situation,
      lat: form.lat,
      lng: form.lng,
    });

    const { id } = await Person.create({
      user_id: form.user_id,
      user_auto_id: null,
      document_number: form.document_number,
      birth_date: form.birth_date,
      nationality: form.nationality,
      birth_city: form.birth_city,
      birth_state: form.birth_state,
      sex: form.sex,
      breed: form.breed,
      mother_name: form.mother_name,
      father_name: form.father_name,
      quantity_per_home: form.quantity_per_home,
      address_id: address.id,
    });

    await Phone.create({
      person_id: id,
      phone_number: form.phone_number,
      phone_code: form.phone_code,
    });

    if (form.comorbidities && form.comorbidities.length) {
      form.comorbidities.forEach(async (comorbidity) => {
        await PersonComorbidity.create({
          person_id: id,
          comorbidity_id: comorbidity,
        });
      });
    }
  }
}

export default StoreProviderPersonService;
