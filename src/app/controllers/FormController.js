import * as Yup from 'yup';
import { where } from 'sequelize';
import Person from '../models/Person';
import Comorbidity from '../models/Comorbidity';
import PersonComorbidity from '../models/PersonComorbidity';
import Phone from '../models/Phone';
import Address from '../models/Address';
import User from '../models/User';
import AppError from '../../errors/AppError';

class FormController {
  async store(req, res) {
    const { user_id } = req.body;

    const schema = Yup.object().shape({
      // user
      name: Yup.string().required(),

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
      throw new AppError('Está faltando algum valor', 400);
    }

    const registerForm = await Person.findOne({
      where: { user_id },
    });

    const form = req.body;
    const documentExists = await Person.findOne({
      where: { document_number: form.document_number },
    });

    if (documentExists) {
      throw new AppError('Este documento ja foi registrado. Tente outro.', 400);
    }

    let user_dependent = '';
    if (registerForm) {
      user_dependent = await User.create({
        name: form.name,
        user_type: 'pessoa',
      });
    }

    const { id } = await Person.create({
      user_id: registerForm ? user_dependent.id : user_id,
      user_auto_id: registerForm ? user_id : null,
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
          comorbidity_id: comorbidity,
        });
      });
    }

    return res
      .status(200)
      .json({ success: true, message: 'Ficha cadastrada com sucesso' });
  }

  async getUserDependentsForm(req, res) {
    const { user_id } = req.params;
    const userForm = await Person.findAll({
      where: { user_auto_id: user_id },
      include: [
        {
          model: User,
          attributes: ['name', 'user_type'],
        },
        {
          model: Phone,
          attributes: ['id', 'phone_code', 'phone_number'],
        },
        {
          model: Address,
          attributes: ['id', 'zip_code', 'city', 'state'],
        },
        {
          model: Comorbidity,
          as: 'Comorbidities',
          required: false,
          attributes: ['id', 'comorbidity_description'],
          through: {
            model: PersonComorbidity,
            as: 'personComobidity',
            attributes: [],
          },
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
    });

    return res.status(200).json(userForm);
  }

  async getUserForm(req, res) {
    const { user_id } = req.params;

    const userForm = await Person.findOne({
      include: [
        {
          model: Phone,
          attributes: ['id', 'phone_code', 'phone_number'],
        },
        {
          model: Address,
          attributes: ['id', 'zip_code', 'city', 'state'],
        },
        {
          model: Comorbidity,
          as: 'Comorbidities',
          required: false,
          attributes: ['id', 'comorbidity_description'],
          through: {
            model: PersonComorbidity,
            as: 'personComobidity',
            attributes: [],
          },
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
      where: { user_id },
    });

    return res.status(200).json(userForm);
  }
}

export default new FormController();
