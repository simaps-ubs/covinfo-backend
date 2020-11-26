import * as Yup from 'yup';
import reqBodyValidate from './ReqBodyValidation';

const validateUserCreate = async (body) => {
  const schema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().required().min(6),
    type: Yup.mixed().oneOf([
      'HEALTH_PROFESSIONAL',
      'COMMUNITY_PERSON',
      'DEPENDENT',
    ]),
  });

  await reqBodyValidate(schema, body);
}

export default validateUserCreate;
