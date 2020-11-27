import * as Yup from 'yup';
import reqBodyValidate from './ReqBodyValidation';

class ProviderSessionValidation {

  async validateSession(body) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    });

    await reqBodyValidate(schema, body);
  }

}

export default ProviderSessionValidation;
