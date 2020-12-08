import AppError from '../../errors/AppError';
import User from '../models/User';
import Phone from '../models/Phone';
import Person from '../models/Person';
import PersonComorbidity from '../models/PersonComorbidity';

class StoreDependentService {
  async execute(form) {
    const documentExists = await Person.findOne({
      where: { document_number: form.document_number },
    });

    if (documentExists) {
      throw new AppError('Este documento ja foi registrado. Tente outro.', 400);
    }

    const providerUser = await Person.findOne({
      where: { user_id: form.provider_user_id },
    });

    if (!providerUser) {
      throw new AppError('Usuário responsável não encontrado', 400);
    }

    const user_dependent = await User.create({
      name: form.name,
      user_type: 'DEPENDENT',
    });

      const { id } = await Person.create({
        user_id: user_dependent.id,
        user_auto_id: form.provider_user_id,
        document_number: form.document_number,
        birth_date: form.birth_date,
        nationality: form.nationality,
        birth_city: form.birth_city,
        birth_state: form.birth_state,
        sex: form.sex,
        breed: form.breed,
        mother_name: form.mother_name,
        father_name: form.father_name,
        address_id: providerUser.dataValues.address_id,
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
    } catch (error) {
      throw new AppError(
        'OPS! Erro ao tentar criar formulario de dependente.',
        400
      );
    }
  }
}

export default StoreDependentService;
