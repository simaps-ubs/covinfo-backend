import * as Yup from 'yup';
import reqBodyValidate from './ReqBodyValidation';

const validateDependent = async (body) => {
  const schema = Yup.object().shape({
    // user
    name: Yup.string().required(),

    // person
    document_number: Yup.string().required(),
    birth_date: Yup.date().required(),
    nationality: Yup.string().required(),
    birth_city: Yup.string().required(),
    birth_state: Yup.string().required(),
    sex: Yup.string().required(),
    breed: Yup.string().required(),
    mother_name: Yup.string().required(),
    father_name: Yup.string().required(),

    // phone
    phone_number: Yup.string().required(),
    phone_code: Yup.string().required(),
    });

  await reqBodyValidate(schema, body);
};

export default validateDependent;
