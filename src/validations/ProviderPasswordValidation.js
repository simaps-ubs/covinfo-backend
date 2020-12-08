import * as Yup from 'yup';
import reqBodyValidate from './ReqBodyValidation';

class ProviderPasswordValidation {

  async validateForgotPassword(body) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
    });

    await reqBodyValidate(schema, body);
  }

  async validateResetPassword(body) {
    const schema = Yup.object().shape({
      password: Yup.string().required().min(6),
      confirmPassword: Yup.string()
        .required()
        .when('password', (password, field) =>
          password ? field.required().oneOf([Yup.ref('password')]) : field
        ),
    });

    await reqBodyValidate(schema, body);
  }
}

export default ProviderPasswordValidation;
