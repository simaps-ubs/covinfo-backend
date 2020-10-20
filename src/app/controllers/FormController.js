import * as Yup from 'yup';
import Person from '../models/Person';
import Comorbidity from '../models/Comorbidity';
import PersonComorbidity from '../models/PersonComorbidity';
import Phone from '../models/Phone';
import Address from '../models/Address';

class FormController {
  async store(req, res) {
    const { user_id } = req.body;

    const schema = Yup.object().shape({
      // person
      document_number: Yup.number().required(),
      birth_date: Yup.date().required(),
      nacionality: Yup.string().required(),
      birth_city: Yup.string().required(),
      birth_state: Yup.string().required(),
      sex: Yup.string().required(),
      breed: Yup.string().required(),
      mother_name: Yup.string().required(),
      father_name: Yup.string().required(),
      home: Yup.string().required(),
      quantity_per_home: Yup.number().required(),

      // address
      zip_code: Yup.number().required(),
      city: Yup.string().required(),
      state: Yup.string().required(),

      // phone
      phone_number: Yup.number().required(),
      phone_code: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Missing value!' });
    }

    const registerForm = await Person.findOne({
      where: { user_id },
    });

    const form = req.body;

    // first form register
    if (!registerForm) {
      const { id } = Person.create({
        user_id,
        person_auto_id: null,
        document_number: form.document_number,
        birth_date: form.birth_date,
        nacionality: form.nacionality,
        birth_city: form.birth_city,
        birth_state: form.birth_state,
        sex: form.sex,
        breed: form.breed,
        mother_name: form.mother_name,
        father_name: form.father_name,
        home: form.home,
        quantity_per_home: form.quantity_per_home,
      });
    }
  }
}

export default FormController;
