import * as Yup from 'yup';
import Person from '../models/Person';
import Comorbidity from '../models/Comorbidity';
import PersonComorbidity from '../models/PersonComorbidity';
import Phone from '../models/Phone';
import Address from '../models/Address';
import { where } from 'sequelize';

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

    const documentExists = await Person.findOne({
      where: { document_number: form.document_number },
    });

    if(documentExists){
      return res.status(400).json({success: false, message: 'Este documento ja foi registrado. Tente outro.'})
    }

    const { id } = await Person.create({
      user_id,
      person_auto_id: registerForm ? id : null,
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

    await Phone.create({
      person_id: id,
      phone_number: form.phone_number,
      phone_code: form.phone_code,
    });

    await Address.create({
      person_id: id,
      zip_code: form.zip_code,
      city: form.city,
      state: form.state,
    });

    if (form.comorbidities && form.comorbidities.length) {
      form.comorbidities.forEach(async (comorbidity) => {
        await PersonComorbidity.create({
          person_id: id,
          comorbidity,
        });
      });
    }

    return res
      .status(200)
      .json({ success: true, message: 'Ficha cadastrada com sucesso' });
  }

  async index(req, res) {
    const forms = await Person.findAll();
    return res.json(forms);
  }

  async getUserForm(req, res){
    const { person_id } = req.params;

    const userForm = await Person.findOne({
        include: [
          {
            model: Phone,
            attributes: ['id', 'phone_code', 'phone_number'],
          },
        ],
        attributes: [
          'id',
          'document_number',
          'birth_date',
          'nacionality',
          'birth_city',
          'birth_state',
          'sex',
          'breed',
          'mother_name', 
          'father_name', 
          'home', 
          'quantity_per_home', 
          'activated_status',
        ],
        where:{ person_id }
    })
    
    const comorbidities = Person.findAll({
      include: [{
        model: Comorbidity,
        as: 'comorbidities',
        required: false,
        // Pass in the Product attributes that you want to retrieve
        attributes: ['id', 'comorbidity_description'],
        through: {
          // This block of code allows you to retrieve the properties of the join table
          model: PersonComorbidity,
          as: 'personComobidity',
        }
      }]
    })

    return res.status(200).json(userForm, comorbidities)
  }

}

export default new FormController();
