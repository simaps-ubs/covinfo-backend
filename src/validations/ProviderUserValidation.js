import * as Yup from 'yup';
import reqBodyValidate from './ReqBodyValidation';

class ProviderUserValidation {

  async validateUserCreate(body) {
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

  async validateUserUpdate(body) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field,
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field,
      ),
    });

    await reqBodyValidate(schema, body);
  }
}


export default ProviderUserValidation;
