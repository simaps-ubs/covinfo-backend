import * as Yup from 'yup';
import reqBodyValidate from './ReqBodyValidation';

const validateProviderPerson = async (body) => {
  const schema = Yup.object().shape({
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
    quantity_per_home: Yup.number().required(),

    // address
    zip_code: Yup.string().required(),
    state: Yup.string().required(),
    city: Yup.string().required(),
    street: Yup.string().required(),
    house_number: Yup.string().required(),
    home_situation: Yup.string().required(),
    lat: Yup.string().required(),
    lng: Yup.string().required(),

    // phone
    phone_number: Yup.string().required(),
    phone_code: Yup.string().required(),
  });

  await reqBodyValidate(schema, body);
};

export default validateProviderPerson;
